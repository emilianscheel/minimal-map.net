import { Card, CardBody } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import {
	BarChart3,
	ChartColumn,
	PieChart,
	Route,
	Search,
	SearchX,
	Target,
} from 'lucide-react';
import type { AnalyticsBreakdownDatum, AnalyticsSummary } from '../../types';
import AnalyticsMiniChart, { formatPercentage } from './AnalyticsMiniChart';

function formatMetricValue(value: number | null, suffix = ''): string {
	if (value === null) {
		return '—';
	}

	return `${Math.round(value)}${suffix}`;
}

function formatDistanceValue(distanceMeters: number | null, hasData: boolean): string {
	if (!hasData || distanceMeters === null) {
		return '—';
	}

	if (distanceMeters >= 1000) {
		return `${(distanceMeters / 1000).toFixed(1)} km`;
	}

	return `${Math.round(distanceMeters)} m`;
}

function formatSparklineDistance(value: number | null): string {
	if (value === null) {
		return '—';
	}

	if (value >= 1000) {
		return `${(value / 1000).toFixed(1)} km`;
	}

	return `${Math.round(value)} m`;
}

function getTopBreakdownItem(items: AnalyticsBreakdownDatum[]): AnalyticsBreakdownDatum | null {
	return items.length > 0 ? items[0] : null;
}

function getDominantBreakdownItem(items: AnalyticsBreakdownDatum[]): AnalyticsBreakdownDatum | null {
	if (items.length === 0) {
		return null;
	}

	return [...items].sort((left, right) => right.value - left.value)[0] ?? null;
}

export default function AnalyticsCards({
	summary,
}: {
	summary: AnalyticsSummary;
}) {
	const hasData = summary.totalSearches > 0;
	const topQuery = getTopBreakdownItem(summary.breakdowns.topQueries);
	const topZeroResultQuery = getTopBreakdownItem(summary.breakdowns.topZeroResultQueries);
	const dominantQueryType = getDominantBreakdownItem(summary.breakdowns.queryTypeMix);
	const dominantResultBucket = getDominantBreakdownItem(summary.breakdowns.resultDistribution);
	const dominantQueryTypeShare = dominantQueryType && hasData
		? (dominantQueryType.value / summary.totalSearches) * 100
		: null;
	const dominantResultBucketShare = dominantResultBucket && hasData
		? (dominantResultBucket.value / summary.totalSearches) * 100
		: null;

	const cards = [
		{
			id: 'total',
			icon: <ChartColumn aria-hidden="true" size={22} strokeWidth={1.8} />,
			title: __('Total searches', 'minimal-map'),
			value: hasData ? formatMetricValue(summary.totalSearches) : '—',
			description: __('Demand across the selected period.', 'minimal-map'),
			chart: (
				<AnalyticsMiniChart
					ariaLabel={__('Total searches trend', 'minimal-map')}
					formatTooltipValue={formatMetricValue}
					isEmpty={!hasData}
					series={summary.series.totalSearches}
					variant="line"
				/>
			),
		},
		{
			id: 'success-rate',
			icon: <Target aria-hidden="true" size={22} strokeWidth={1.8} />,
			title: __('Success rate', 'minimal-map'),
			value: hasData ? formatPercentage(summary.successRate) : '—',
			description: __('Searches returning at least one result.', 'minimal-map'),
			chart: (
				<AnalyticsMiniChart
					ariaLabel={__('Success rate trend', 'minimal-map')}
					formatTooltipValue={formatPercentage}
					isEmpty={!hasData}
					series={summary.series.successRate}
					variant="line"
				/>
			),
		},
		{
			id: 'zero',
			icon: <SearchX aria-hidden="true" size={22} strokeWidth={1.8} />,
			title: __('Zero-result searches', 'minimal-map'),
			value: hasData ? formatMetricValue(summary.zeroResultSearches) : '—',
			description: __('Searches with no matching location.', 'minimal-map'),
			chart: (
				<AnalyticsMiniChart
					ariaLabel={__('Zero-result searches trend', 'minimal-map')}
					formatTooltipValue={formatMetricValue}
					isEmpty={!hasData}
					series={summary.series.zeroResultSearches}
					variant="line"
				/>
			),
		},
		{
			id: 'distance',
			icon: <Route aria-hidden="true" size={22} strokeWidth={1.8} />,
			title: __('Average distance to nearest store', 'minimal-map'),
			value: formatDistanceValue(summary.averageNearestDistanceMeters, hasData),
			description: __('Average distance for searches with a nearby match.', 'minimal-map'),
			chart: (
				<AnalyticsMiniChart
					ariaLabel={__('Average distance trend', 'minimal-map')}
					formatTooltipValue={formatSparklineDistance}
					isEmpty={!hasData && summary.averageNearestDistanceMeters === null}
					series={summary.series.averageNearestDistanceMeters}
					variant="line"
				/>
			),
		},
		{
			id: 'top-queries',
			icon: <Search aria-hidden="true" size={22} strokeWidth={1.8} />,
			title: __('Top search terms', 'minimal-map'),
			value: topQuery ? formatMetricValue(topQuery.value) : '—',
			description: topQuery
				? sprintf(__('Most searched: %s', 'minimal-map'), topQuery.label)
				: __('No repeated search terms yet.', 'minimal-map'),
			chart: (
				<AnalyticsMiniChart
					ariaLabel={__('Top search terms', 'minimal-map')}
					data={summary.breakdowns.topQueries}
					isEmpty={!hasData}
					variant="bar"
				/>
			),
		},
		{
			id: 'top-zero-queries',
			icon: <SearchX aria-hidden="true" size={22} strokeWidth={1.8} />,
			title: __('Top zero-result searches', 'minimal-map'),
			value: topZeroResultQuery ? formatMetricValue(topZeroResultQuery.value) : '—',
			description: topZeroResultQuery
				? sprintf(__('Most requested without a result: %s', 'minimal-map'), topZeroResultQuery.label)
				: __('No failed searches in the selected period.', 'minimal-map'),
			chart: (
				<AnalyticsMiniChart
					ariaLabel={__('Top zero-result searches', 'minimal-map')}
					data={summary.breakdowns.topZeroResultQueries}
					isEmpty={!hasData}
					variant="bar"
				/>
			),
		},
		{
			id: 'query-type-mix',
			icon: <PieChart aria-hidden="true" size={22} strokeWidth={1.8} />,
			title: __('Query type mix', 'minimal-map'),
			value: dominantQueryTypeShare !== null ? formatPercentage(dominantQueryTypeShare) : '—',
			description: dominantQueryType && dominantQueryTypeShare !== null
				? sprintf(
					__('%1$s leads with %2$s.', 'minimal-map'),
					dominantQueryType.label,
					formatPercentage(dominantQueryTypeShare)
				)
				: __('How visitors are searching your map.', 'minimal-map'),
			chart: (
				<AnalyticsMiniChart
					ariaLabel={__('Query type mix', 'minimal-map')}
					data={summary.breakdowns.queryTypeMix}
					isEmpty={!hasData}
					variant="donut"
				/>
			),
		},
		{
			id: 'result-distribution',
			icon: <BarChart3 aria-hidden="true" size={22} strokeWidth={1.8} />,
			title: __('Result distribution', 'minimal-map'),
			value: dominantResultBucketShare !== null ? formatPercentage(dominantResultBucketShare) : '—',
			description: dominantResultBucket && dominantResultBucketShare !== null
				? sprintf(
					__('%1$s is the largest bucket at %2$s.', 'minimal-map'),
					dominantResultBucket.label,
					formatPercentage(dominantResultBucketShare)
				)
				: __('How many results each search returned.', 'minimal-map'),
			chart: (
				<AnalyticsMiniChart
					ariaLabel={__('Result distribution', 'minimal-map')}
					data={summary.breakdowns.resultDistribution}
					isEmpty={!hasData}
					variant="donut"
				/>
			),
		},
	];

	return (
		<div className="minimal-map-admin__analytics-cards">
			{cards.map((card) => (
				<Card key={card.id} className="minimal-map-admin__feature-card minimal-map-admin__analytics-card">
					<CardBody>
						{card.chart}
						<div className="minimal-map-admin__feature-meta">
							<span className="minimal-map-admin__feature-icon">{card.icon}</span>
							<span className="minimal-map-admin__analytics-card-value">{card.value}</span>
						</div>
						<h3 className="minimal-map-admin__feature-title">{card.title}</h3>
						<p className="minimal-map-admin__analytics-card-description">{card.description}</p>
					</CardBody>
				</Card>
			))}
		</div>
	);
}
