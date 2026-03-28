import type {
	AnalyticsBreakdownDatum,
	AnalyticsEventCategory,
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

export function normalizeAnalyticsTrendPoint(point: unknown): AnalyticsTrendPoint {
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

export function normalizeAnalyticsTrendSeries(value: unknown): AnalyticsTrendPoint[] {
	return Array.isArray(value) ? value.map(normalizeAnalyticsTrendPoint) : [];
}

export function normalizeAnalyticsBreakdownDatum(
	item: unknown,
	index: number
): AnalyticsBreakdownDatum {
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

export function normalizeAnalyticsBreakdownData(value: unknown): AnalyticsBreakdownDatum[] {
	return Array.isArray(value) ? value.map(normalizeAnalyticsBreakdownDatum) : [];
}

function normalizeCategory(value: unknown): AnalyticsEventCategory {
	return value === 'selection' || value === 'action' ? value : 'search';
}

export function normalizeAnalyticsSummary(summary: unknown): AnalyticsSummary {
	const category = isRecord(summary) ? normalizeCategory(summary.category) : 'search';
	const series = isRecord(summary) && isRecord(summary.series) ? summary.series : {};
	const breakdowns = isRecord(summary) && isRecord(summary.breakdowns) ? summary.breakdowns : {};

	if (category === 'selection') {
		return {
			category,
			totalSelections: isRecord(summary) ? toNumberValue(summary.totalSelections, 0) : 0,
			conversionRate: isRecord(summary) ? toNumberValue(summary.conversionRate, 0) : 0,
			series: {
				totalSelections: normalizeAnalyticsTrendSeries(series.totalSelections),
				conversionRate: normalizeAnalyticsTrendSeries(series.conversionRate),
			},
			breakdowns: {
				sourceMix: normalizeAnalyticsBreakdownData(breakdowns.sourceMix),
				topLocations: normalizeAnalyticsBreakdownData(breakdowns.topLocations),
			},
		};
	}

	if (category === 'action') {
		return {
			category,
			totalActions: isRecord(summary) ? toNumberValue(summary.totalActions, 0) : 0,
			series: {
				totalActions: normalizeAnalyticsTrendSeries(series.totalActions),
			},
			breakdowns: {
				actionTypeMix: normalizeAnalyticsBreakdownData(breakdowns.actionTypeMix),
				sourceMix: normalizeAnalyticsBreakdownData(breakdowns.sourceMix),
				topLocations: normalizeAnalyticsBreakdownData(breakdowns.topLocations),
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
			totalSearches: normalizeAnalyticsTrendSeries(series.totalSearches),
			searchesToday: normalizeAnalyticsTrendSeries(series.searchesToday),
			zeroResultSearches: normalizeAnalyticsTrendSeries(series.zeroResultSearches),
			averageNearestDistanceMeters: normalizeAnalyticsTrendSeries(series.averageNearestDistanceMeters),
			successRate: normalizeAnalyticsTrendSeries(series.successRate),
		},
		breakdowns: {
			queryTypeMix: normalizeAnalyticsBreakdownData(breakdowns.queryTypeMix),
			resultDistribution: normalizeAnalyticsBreakdownData(breakdowns.resultDistribution),
			topQueries: normalizeAnalyticsBreakdownData(breakdowns.topQueries),
			topZeroResultQueries: normalizeAnalyticsBreakdownData(breakdowns.topZeroResultQueries),
		},
	};
}
