import type { ViewTable } from '@wordpress/dataviews';
import type { AnalyticsEventCategory } from '../../types';

const DEFAULT_ANALYTICS_PER_PAGE = 9;

function getDefaultTableFieldIds(category: AnalyticsEventCategory): string[] {
	switch (category) {
		case 'selection':
			return ['interaction_source', 'query_text', 'occurred_at_gmt'];
		case 'action':
			return ['action_type', 'interaction_source', 'action_target', 'occurred_at_gmt'];
		case 'search':
		default:
			return ['query_type', 'result_count', 'nearest_distance_meters', 'occurred_at_gmt'];
	}
}

function getDefaultTitleField(category: AnalyticsEventCategory): string {
	return category === 'search' ? 'query_text' : 'location_title';
}

function toPositiveNumber(value: unknown, fallback: number): number {
	if (typeof value === 'number' && Number.isFinite(value) && value > 0) {
		return Math.floor(value);
	}

	return fallback;
}

export function normalizeAnalyticsTableView(
	category: AnalyticsEventCategory,
	view: Partial<ViewTable> | ViewTable
): ViewTable {
	const defaultFields = getDefaultTableFieldIds(category);
	const allowedFieldIds = new Set([getDefaultTitleField(category), ...defaultFields]);
	const fields = Array.isArray(view.fields)
		? view.fields.filter((fieldId): fieldId is string => (
			typeof fieldId === 'string' && allowedFieldIds.has(fieldId)
		))
		: defaultFields;

	return {
		type: 'table',
		page: toPositiveNumber(view.page, 1),
		perPage: toPositiveNumber(view.perPage, DEFAULT_ANALYTICS_PER_PAGE),
		search: typeof view.search === 'string' ? view.search : '',
		titleField: getDefaultTitleField(category),
		fields: fields.length > 0 ? fields : defaultFields,
		layout: {
			enableMoving: false,
		},
	};
}
