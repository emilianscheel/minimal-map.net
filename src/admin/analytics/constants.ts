import { __ } from '@wordpress/i18n';
import type {
	AnalyticsRangeKey,
	AnalyticsSummary,
} from '../../types';
import type { ViewTable } from '@wordpress/dataviews';

export const ANALYTICS_TABLE_PER_PAGE = 9;
export const ANALYTICS_SERIES_DAYS = 30;
export const DEFAULT_ANALYTICS_RANGE: AnalyticsRangeKey = '30d';
export const ANALYTICS_BREAKDOWN_LIMIT = 5;

export const ANALYTICS_RANGE_OPTIONS: Array<{
	value: AnalyticsRangeKey;
	label: string;
}> = [
	{ value: 'today', label: __('Today', 'minimal-map') },
	{ value: 'yesterday', label: __('Yesterday', 'minimal-map') },
	{ value: '7d', label: __('Last 7 Days', 'minimal-map') },
	{ value: '30d', label: __('Last 30 Days', 'minimal-map') },
	{ value: '90d', label: __('Last 90 Days', 'minimal-map') },
	{ value: 'all', label: __('All', 'minimal-map') },
];

export const EMPTY_ANALYTICS_SUMMARY: AnalyticsSummary = {
	totalSearches: 0,
	searchesToday: 0,
	zeroResultSearches: 0,
	averageNearestDistanceMeters: null,
	successRate: 0,
	series: {
		totalSearches: [],
		searchesToday: [],
		zeroResultSearches: [],
		averageNearestDistanceMeters: [],
		successRate: [],
	},
	breakdowns: {
		queryTypeMix: [],
		resultDistribution: [],
		topQueries: [],
		topZeroResultQueries: [],
	},
};

export const DEFAULT_ANALYTICS_VIEW: ViewTable = {
	type: 'table',
	page: 1,
	perPage: ANALYTICS_TABLE_PER_PAGE,
	titleField: 'query_text',
	fields: [
		'query_type',
		'result_count',
		'nearest_distance_meters',
		'occurred_at_gmt',
	],
	layout: {
		enableMoving: false,
	},
};
