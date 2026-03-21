import { Card, CardBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ChartColumn, Clock3, Route, SearchX } from 'lucide-react';
import type { AnalyticsSummary } from '../../types';

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

export default function AnalyticsCards({
	summary,
}: {
	summary: AnalyticsSummary;
}) {
	const hasData = summary.totalSearches > 0;

	const cards = [
		{
			id: 'total',
			icon: <ChartColumn aria-hidden="true" size={22} strokeWidth={1.8} />,
			title: __('Total searches', 'minimal-map'),
			description: __('All tracked search queries across the retention window.', 'minimal-map'),
			value: hasData ? formatMetricValue(summary.totalSearches) : '—',
		},
		{
			id: 'today',
			icon: <Clock3 aria-hidden="true" size={22} strokeWidth={1.8} />,
			title: __('Searches today', 'minimal-map'),
			description: __('Queries recorded since the start of the current site day.', 'minimal-map'),
			value: hasData ? formatMetricValue(summary.searchesToday) : '—',
		},
		{
			id: 'zero',
			icon: <SearchX aria-hidden="true" size={22} strokeWidth={1.8} />,
			title: __('Zero-result searches', 'minimal-map'),
			description: __('Queries that returned no matching locations at that moment.', 'minimal-map'),
			value: hasData ? formatMetricValue(summary.zeroResultSearches) : '—',
		},
		{
			id: 'distance',
			icon: <Route aria-hidden="true" size={22} strokeWidth={1.8} />,
			title: __('Average nearest distance', 'minimal-map'),
			description: __('Average distance to the closest result when a distance snapshot was available.', 'minimal-map'),
			value: formatDistanceValue(summary.averageNearestDistanceMeters, hasData),
		},
	];

	return (
		<div className="minimal-map-admin__analytics-cards">
			{cards.map((card) => (
				<Card key={card.id} className="minimal-map-admin__feature-card minimal-map-admin__analytics-card">
					<CardBody>
						<div className="minimal-map-admin__feature-meta">
							<span className="minimal-map-admin__feature-icon">{card.icon}</span>
							<span className="minimal-map-admin__analytics-card-value">{card.value}</span>
						</div>
						<h3 className="minimal-map-admin__feature-title">{card.title}</h3>
						<p className="minimal-map-admin__feature-description">{card.description}</p>
					</CardBody>
				</Card>
			))}
		</div>
	);
}
