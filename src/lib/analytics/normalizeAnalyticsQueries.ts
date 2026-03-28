import type {
	AnalyticsActionType,
	AnalyticsEventCategory,
	AnalyticsInteractionSource,
	AnalyticsQueriesResponse,
	AnalyticsQueryRecord,
	AnalyticsQueryType,
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

function normalizeQueryType(value: unknown): AnalyticsQueryType {
	return value === 'address' || value === 'coordinates' || value === 'live_location'
		? value
		: 'text';
}

function normalizeInteractionSource(value: unknown): AnalyticsInteractionSource | '' {
	return value === 'map_marker' || value === 'in_map_card' || value === 'search_panel'
		? value
		: '';
}

function normalizeActionType(value: unknown): AnalyticsActionType | '' {
	return value === 'opening_hours' ||
		value === 'telephone' ||
		value === 'email' ||
		value === 'website' ||
		value === 'social_media' ||
		value === 'google_maps'
		? value
		: '';
}

function normalizeCategory(
	value: unknown,
	fallback: AnalyticsEventCategory
): AnalyticsEventCategory {
	return value === 'selection' || value === 'action' || value === 'search'
		? value
		: fallback;
}

export function normalizeAnalyticsQueryRecord(
	record: unknown,
	category: AnalyticsEventCategory,
	index: number
): AnalyticsQueryRecord {
	if (!isRecord(record)) {
		return {
			id: index + 1,
			event_category: category,
			query_text: '',
			query_type: 'text',
			result_count: 0,
			nearest_distance_meters: null,
			location_id: null,
			location_title: '',
			interaction_source: '',
			action_type: '',
			action_target: '',
			occurred_at_gmt: '',
		};
	}

	return {
		id: toNumberValue(record.id, index + 1),
		event_category: normalizeCategory(record.event_category, category),
		query_text: toStringValue(record.query_text),
		query_type: normalizeQueryType(record.query_type),
		result_count: toNumberValue(record.result_count, 0),
		nearest_distance_meters: toNullableNumberValue(record.nearest_distance_meters),
		location_id: record.location_id === null ? null : toNumberValue(record.location_id, 0),
		location_title: toStringValue(record.location_title),
		interaction_source: normalizeInteractionSource(record.interaction_source),
		action_type: normalizeActionType(record.action_type),
		action_target: toStringValue(record.action_target),
		occurred_at_gmt: toStringValue(record.occurred_at_gmt),
	};
}

export function normalizeAnalyticsQueriesResponse(
	response: unknown,
	category: AnalyticsEventCategory
): AnalyticsQueriesResponse {
	const items = isRecord(response) && Array.isArray(response.items)
		? response.items.map((item, index) => normalizeAnalyticsQueryRecord(item, category, index))
		: [];
	const totalItems = isRecord(response) ? toNumberValue(response.totalItems, items.length) : items.length;
	const totalPages = isRecord(response) ? toNumberValue(response.totalPages, 1) : 1;

	return {
		items,
		totalItems: Math.max(0, totalItems),
		totalPages: Math.max(1, totalPages),
	};
}
