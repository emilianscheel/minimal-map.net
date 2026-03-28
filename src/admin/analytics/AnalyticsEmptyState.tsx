import { __ } from '@wordpress/i18n';
import { ChartColumn, SearchX } from 'lucide-react';
import EmptyState from '../../components/EmptyState';

export default function AnalyticsEmptyState({
	enabled,
	hasSearch,
	hasTrackedData,
}: {
	enabled: boolean;
	hasSearch: boolean;
	hasTrackedData: boolean;
}) {
	if (hasSearch) {
		return (
			<EmptyState
				icon={<SearchX />}
				title={__('No matching queries found', 'minimal-map')}
				description={__('Try a different search term to inspect the stored analytics rows.', 'minimal-map')}
			/>
		);
	}

	if (!enabled && !hasTrackedData) {
		return (
			<EmptyState
				icon={<ChartColumn />}
				title={__('Analytics tracking is disabled', 'minimal-map')}
				description={__('Enable analytics tracking to start collecting search demand data for this map plugin.', 'minimal-map')}
			/>
		);
	}

	return (
		<EmptyState
			icon={<ChartColumn />}
			title={__('No analytics data in this period yet', 'minimal-map')}
			description={enabled
				? __('Try a wider time period or wait for visitors to use the map search.', 'minimal-map')
				: __('Tracking is currently disabled, but historic analytics data will still appear here when available.', 'minimal-map')}
		/>
	);
}
