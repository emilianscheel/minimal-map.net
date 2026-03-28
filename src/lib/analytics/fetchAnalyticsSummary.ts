import apiFetch from '@wordpress/api-fetch';
import type {
	AnalyticsAdminConfig,
	AnalyticsBreakdownDatum,
	AnalyticsEventCategory,
	AnalyticsRangeKey,
	AnalyticsSummary,
	AnalyticsTrendPoint,
} from '../../types';

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value !== null;
}

function toStringValue(value: unknown, fallback = ''): string {
	if (typeof value === 'string') {
		return value;
	}

	if (value === null || value === undefined) {
		return fallback;
	}

	return String(value);
}

function toNumberValue(value: unknown, fallback = 0): number {
	if (typeof value === 'number' && Number.isFinite(value)) {
		return value;
	}

	if (typeof value === 'string') {
		const trimmed = value.trim();
		if (trimmed !== '') {
			const parsed = Number(trimmed);
			if (Number.isFinite(parsed)) {
				return parsed;
			}
		}
	}

	return fallback;
}

function toNullableNumberValue(value: unknown): number | null {
	if (value === null) {
		return null;
	}

	return toNumberValue(value, 0);
}

function normalizeTrendPoint(point: unknown): AnalyticsTrendPoint {
	if (!isRecord(point)) {
		return {
			date: '',
			value: null,
		};
	}

	return {
		date: toStringValue(point.date),
		value: toNullableNumberValue(point.value),
	};
}

function normalizeTrendSeries(value: unknown): AnalyticsTrendPoint[] {
	return Array.isArray(value) ? value.map(normalizeTrendPoint) : [];
}

function normalizeBreakdownDatum(item: unknown, index: number): AnalyticsBreakdownDatum {
	if (!isRecord(item)) {
		return {
			key: `${index}`,
			label: '',
			value: 0,
		};
	}

	return {
		key: toStringValue(item.key, `${index}`),
		label: toStringValue(item.label),
		value: toNumberValue(item.value, 0),
	};
}

function normalizeBreakdownData(value: unknown): AnalyticsBreakdownDatum[] {
	return Array.isArray(value) ? value.map(normalizeBreakdownDatum) : [];
}

function normalizeCategory(value: unknown): AnalyticsEventCategory {
	return value === 'selection' || value === 'action' ? value : 'search';
}

function normalizeAnalyticsSummary(summary: unknown): AnalyticsSummary {
	const category = isRecord(summary) ? normalizeCategory(summary.category) : 'search';
	const series = isRecord(summary) && isRecord(summary.series) ? summary.series : {};
	const breakdowns = isRecord(summary) && isRecord(summary.breakdowns) ? summary.breakdowns : {};

	if (category === 'selection') {
		return {
			category,
			totalSelections: isRecord(summary) ? toNumberValue(summary.totalSelections, 0) : 0,
			conversionRate: isRecord(summary) ? toNumberValue(summary.conversionRate, 0) : 0,
			series: {
				totalSelections: normalizeTrendSeries(series.totalSelections),
				conversionRate: normalizeTrendSeries(series.conversionRate),
			},
			breakdowns: {
				sourceMix: normalizeBreakdownData(breakdowns.sourceMix),
				topLocations: normalizeBreakdownData(breakdowns.topLocations),
			},
		};
	}

	if (category === 'action') {
		return {
			category,
			totalActions: isRecord(summary) ? toNumberValue(summary.totalActions, 0) : 0,
			series: {
				totalActions: normalizeTrendSeries(series.totalActions),
			},
			breakdowns: {
				actionTypeMix: normalizeBreakdownData(breakdowns.actionTypeMix),
				sourceMix: normalizeBreakdownData(breakdowns.sourceMix),
				topLocations: normalizeBreakdownData(breakdowns.topLocations),
			},
		};
	}

	return {
		category: 'search',
		totalSearches: isRecord(summary) ? toNumberValue(summary.totalSearches, 0) : 0,
		searchesToday: isRecord(summary) ? toNumberValue(summary.searchesToday, 0) : 0,
		zeroResultSearches: isRecord(summary) ? toNumberValue(summary.zeroResultSearches, 0) : 0,
		averageNearestDistanceMeters: isRecord(summary)
			? toNullableNumberValue(summary.averageNearestDistanceMeters)
			: null,
		successRate: isRecord(summary) ? toNullableNumberValue(summary.successRate) : null,
		series: {
			totalSearches: normalizeTrendSeries(series.totalSearches),
			searchesToday: normalizeTrendSeries(series.searchesToday),
			zeroResultSearches: normalizeTrendSeries(series.zeroResultSearches),
			averageNearestDistanceMeters: normalizeTrendSeries(series.averageNearestDistanceMeters),
			successRate: normalizeTrendSeries(series.successRate),
		},
		breakdowns: {
			queryTypeMix: normalizeBreakdownData(breakdowns.queryTypeMix),
			resultDistribution: normalizeBreakdownData(breakdowns.resultDistribution),
			topQueries: normalizeBreakdownData(breakdowns.topQueries),
			topZeroResultQueries: normalizeBreakdownData(breakdowns.topZeroResultQueries),
		},
	};
}

export async function fetchAnalyticsSummary(
	config: AnalyticsAdminConfig,
	range: AnalyticsRangeKey,
	category: AnalyticsEventCategory,
): Promise<AnalyticsSummary> {
	const params = new URLSearchParams();
	params.set('range', range);
	params.set('category', category);

	const response = await apiFetch({
		method: 'GET',
		path: `${config.summaryPath}?${params.toString()}`,
	});

	return normalizeAnalyticsSummary(response);
}
