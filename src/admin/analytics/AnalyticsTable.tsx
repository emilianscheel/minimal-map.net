import { DataViews } from '@wordpress/dataviews/wp';
import type { Action, Field, View, ViewTable } from '@wordpress/dataviews';
import { useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { formatRelativeDateTime } from '../../lib/formatRelativeDateTime';
import type {
	AnalyticsActionType,
	AnalyticsEventCategory,
	AnalyticsInteractionSource,
	AnalyticsQueryRecord,
	AnalyticsQueryType,
} from '../../types';
import { normalizeAnalyticsQueryRecord } from '../../lib/analytics/normalizeAnalyticsQueries';
import { normalizeAnalyticsTableView } from '../../lib/analytics/normalizeAnalyticsView';
import { ANALYTICS_TABLE_PER_PAGE } from './constants';

const EMPTY_ANALYTICS_ACTIONS: Action<AnalyticsQueryRecord>[] = [];

function formatQueryType(value: AnalyticsQueryType): string {
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

function formatInteractionSource(value: AnalyticsInteractionSource | ''): string {
	switch (value) {
		case 'map_marker':
			return __('Map marker', 'minimal-map');
		case 'in_map_card':
			return __('In-map card', 'minimal-map');
		case 'search_panel':
			return __('Search panel', 'minimal-map');
		default:
			return '—';
	}
}

function formatActionType(value: AnalyticsActionType | ''): string {
	switch (value) {
		case 'opening_hours':
			return __('Opening hours', 'minimal-map');
		case 'telephone':
			return __('Phone', 'minimal-map');
		case 'email':
			return __('Email', 'minimal-map');
		case 'website':
			return __('Website', 'minimal-map');
		case 'social_media':
			return __('Social media', 'minimal-map');
		case 'google_maps':
			return __('Google Maps', 'minimal-map');
		default:
			return '—';
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

function renderOccurredAt(
	value: string,
	siteLocale: string,
	siteTimezone: string
): JSX.Element | string {
	const formatted = formatRelativeDateTime(value, {
		locale: siteLocale,
		timeZone: siteTimezone,
	});

	if (!formatted) {
		return '—';
	}

	return (
		<div className="minimal-map-admin__analytics-time-cell">
			<span className="minimal-map-admin__analytics-time-cell-absolute">
				{formatted.absolute}
			</span>
			<span className="minimal-map-admin__analytics-time-cell-relative">
				{formatted.relative}
			</span>
		</div>
	);
}

function useAnalyticsFields(
	category: AnalyticsEventCategory,
	siteLocale: string,
	siteTimezone: string
): Field<AnalyticsQueryRecord>[] {
	return useMemo(() => {
		if (category === 'selection') {
			return [
				{
					id: 'location_title',
					label: __('Location', 'minimal-map'),
					enableGlobalSearch: true,
					enableHiding: false,
					enableSorting: false,
					filterBy: false,
					render: ({ item }) => item.location_title || '—',
				},
				{
					id: 'interaction_source',
					label: __('Source', 'minimal-map'),
					enableHiding: false,
					enableSorting: false,
					filterBy: false,
					render: ({ item }) => formatInteractionSource(item.interaction_source),
				},
				{
					id: 'query_text',
					label: __('Query', 'minimal-map'),
					enableHiding: false,
					enableSorting: false,
					filterBy: false,
					render: ({ item }) => item.query_text || '—',
				},
				{
					id: 'occurred_at_gmt',
					label: __('Time', 'minimal-map'),
					enableHiding: false,
					enableSorting: false,
					filterBy: false,
					render: ({ item }) => renderOccurredAt(item.occurred_at_gmt, siteLocale, siteTimezone),
				},
			] satisfies Field<AnalyticsQueryRecord>[];
		}

		if (category === 'action') {
			return [
				{
					id: 'location_title',
					label: __('Location', 'minimal-map'),
					enableGlobalSearch: true,
					enableHiding: false,
					enableSorting: false,
					filterBy: false,
					render: ({ item }) => item.location_title || '—',
				},
				{
					id: 'action_type',
					label: __('Action', 'minimal-map'),
					enableHiding: false,
					enableSorting: false,
					filterBy: false,
					render: ({ item }) => formatActionType(item.action_type),
				},
				{
					id: 'interaction_source',
					label: __('Source', 'minimal-map'),
					enableHiding: false,
					enableSorting: false,
					filterBy: false,
					render: ({ item }) => formatInteractionSource(item.interaction_source),
				},
				{
					id: 'action_target',
					label: __('Target', 'minimal-map'),
					enableHiding: false,
					enableSorting: false,
					filterBy: false,
					render: ({ item }) => item.action_target || '—',
				},
				{
					id: 'occurred_at_gmt',
					label: __('Time', 'minimal-map'),
					enableHiding: false,
					enableSorting: false,
					filterBy: false,
					render: ({ item }) => renderOccurredAt(item.occurred_at_gmt, siteLocale, siteTimezone),
				},
			] satisfies Field<AnalyticsQueryRecord>[];
		}

		return [
			{
				id: 'query_text',
				label: __('Query', 'minimal-map'),
				enableGlobalSearch: true,
				enableHiding: false,
				enableSorting: false,
				filterBy: false,
				render: ({ item }) => item.query_text || '—',
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
				render: ({ item }) => renderOccurredAt(item.occurred_at_gmt, siteLocale, siteTimezone),
			},
		] satisfies Field<AnalyticsQueryRecord>[];
	}, [category, siteLocale, siteTimezone]);
}

export default function AnalyticsTable({
	category,
	queries,
	totalItems,
	totalPages,
	view,
	onChangeView,
	siteLocale,
	siteTimezone,
}: {
	category: AnalyticsEventCategory;
	queries: AnalyticsQueryRecord[];
	totalItems: number;
	totalPages: number;
	view: ViewTable;
	onChangeView: (view: ViewTable) => void;
	siteLocale: string;
	siteTimezone: string;
}) {
	const fields = useAnalyticsFields(category, siteLocale, siteTimezone);
	const safeQueries = useMemo(
		() => Array.isArray(queries)
			? queries.map((query, index) => normalizeAnalyticsQueryRecord(query, category, index))
			: [],
		[category, queries]
	);
	const safeView = useMemo(
		() => normalizeAnalyticsTableView(category, view),
		[category, view]
	);

	return (
		<div className="minimal-map-admin__analytics-table-wrap">
			<DataViews
				actions={EMPTY_ANALYTICS_ACTIONS}
				config={{ perPageSizes: [ANALYTICS_TABLE_PER_PAGE] }}
				data={safeQueries}
				defaultLayouts={{ table: {} }}
				fields={fields}
				getItemId={(item: AnalyticsQueryRecord) => `${item.id}`}
				isItemClickable={() => false}
				paginationInfo={{
					totalItems,
					totalPages,
				}}
				view={safeView}
				onChangeView={(nextView: View) => onChangeView(
					normalizeAnalyticsTableView(category, nextView as ViewTable)
				)}
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
