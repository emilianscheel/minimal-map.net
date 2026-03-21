import { DataViews } from '@wordpress/dataviews/wp';
import type { Field, View, ViewTable } from '@wordpress/dataviews';
import { useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import type { AnalyticsQueryRecord } from '../../types';
import { ANALYTICS_TABLE_PER_PAGE } from './constants';
import type { AnalyticsController } from './types';

function formatQueryType(value: AnalyticsQueryRecord['query_type']): string {
	switch (value) {
		case 'address':
			return __('Address', 'minimal-map');
		case 'coordinates':
			return __('Coordinates', 'minimal-map');
		case 'live_location':
			return __('Live location', 'minimal-map');
		case 'text':
		default:
			return __('Text', 'minimal-map');
	}
}

function formatDistance(distanceMeters: number | null): string {
	if (distanceMeters === null) {
		return '—';
	}

	if (distanceMeters >= 1000) {
		return `${(distanceMeters / 1000).toFixed(1)} km`;
	}

	return `${Math.round(distanceMeters)} m`;
}

function useAnalyticsFields(
	siteLocale: string,
	siteTimezone: string
): Field<AnalyticsQueryRecord>[] {
	return useMemo(() => {
		const timeFormatter = new Intl.DateTimeFormat(siteLocale || undefined, {
			dateStyle: 'medium',
			timeStyle: 'short',
			timeZone: siteTimezone || undefined,
		});

		return [
			{
				id: 'query_text',
				label: __('Query', 'minimal-map'),
				enableGlobalSearch: true,
				enableHiding: false,
				enableSorting: false,
				filterBy: false,
				render: ({ item }) => item.query_text,
			},
			{
				id: 'query_type',
				label: __('Query type', 'minimal-map'),
				enableHiding: false,
				enableSorting: false,
				filterBy: false,
				render: ({ item }) => formatQueryType(item.query_type),
			},
			{
				id: 'result_count',
				label: __('Results', 'minimal-map'),
				enableHiding: false,
				enableSorting: false,
				filterBy: false,
				render: ({ item }) => `${item.result_count}`,
			},
			{
				id: 'nearest_distance_meters',
				label: __('Nearest store', 'minimal-map'),
				enableHiding: false,
				enableSorting: false,
				filterBy: false,
				render: ({ item }) => formatDistance(item.nearest_distance_meters),
			},
			{
				id: 'occurred_at_gmt',
				label: __('Time', 'minimal-map'),
				enableHiding: false,
				enableSorting: false,
				filterBy: false,
				render: ({ item }) => timeFormatter.format(new Date(item.occurred_at_gmt)),
			},
		] satisfies Field<AnalyticsQueryRecord>[];
	}, [siteLocale, siteTimezone]);
}

export default function AnalyticsTable({
	controller,
	siteLocale,
	siteTimezone,
}: {
	controller: AnalyticsController;
	siteLocale: string;
	siteTimezone: string;
}) {
	const fields = useAnalyticsFields(siteLocale, siteTimezone);

	return (
		<div className="minimal-map-admin__analytics-table-wrap">
			<DataViews
				config={{ perPageSizes: [ANALYTICS_TABLE_PER_PAGE] }}
				data={controller.queries}
				defaultLayouts={{ table: {} }}
				fields={fields}
				getItemId={(item: AnalyticsQueryRecord) => `${item.id}`}
				paginationInfo={{
					totalItems: controller.totalItems,
					totalPages: controller.totalPages,
				}}
				view={controller.view}
				onChangeView={(nextView: View) => controller.onChangeView(nextView as ViewTable)}
			>
				<div className="minimal-map-admin__analytics-dataviews-header">
					<DataViews.Search />
				</div>
				<DataViews.Layout className="minimal-map-admin__analytics-dataviews-layout" />
				<DataViews.Footer />
			</DataViews>
		</div>
	);
}
