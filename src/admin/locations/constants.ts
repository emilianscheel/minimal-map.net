import type { ViewTable } from '@wordpress/dataviews';
import type { LocationFormState } from '../../types';
import { createDefaultOpeningHours } from '../../lib/locations/openingHours';

export const DEFAULT_LOCATIONS_TABLE_PER_PAGE = 8;
export const LOCATIONS_TABLE_PER_PAGE_OPTIONS = [8, 24, 48] as const;

const DEFAULT_LOCATION_VIEW_FIELD_IDS = [
	'logo',
	'contact',
	'social_media',
	'opening_hours',
	'address',
	'collections',
	'tags',
] as const;

const LOCATION_VIEW_FIELD_ID_SET = new Set<string>(DEFAULT_LOCATION_VIEW_FIELD_IDS);

function toPositiveInteger(value: unknown, fallback: number): number {
	if (typeof value === 'number' && Number.isFinite(value) && value > 0) {
		return Math.floor(value);
	}

	return fallback;
}

export function normalizeLocationsPerPage(value: unknown): number {
	return LOCATIONS_TABLE_PER_PAGE_OPTIONS.includes(
		value as (typeof LOCATIONS_TABLE_PER_PAGE_OPTIONS)[number]
	)
		? value as number
		: DEFAULT_LOCATIONS_TABLE_PER_PAGE;
}

export function normalizeLocationsTableView(
	view: Partial<ViewTable> | ViewTable,
	preferredPerPage = DEFAULT_LOCATIONS_TABLE_PER_PAGE
): ViewTable {
	const fields = Array.isArray(view.fields)
		? view.fields.filter(
				(fieldId): fieldId is string =>
					typeof fieldId === 'string' && LOCATION_VIEW_FIELD_ID_SET.has(fieldId)
		  )
		: [...DEFAULT_LOCATION_VIEW_FIELD_IDS];

	return {
		type: 'table',
		page: toPositiveInteger(view.page, 1),
		perPage: normalizeLocationsPerPage(view.perPage ?? preferredPerPage),
		search: typeof view.search === 'string' ? view.search : '',
		sort: {
			field: 'title',
			direction: view.sort?.direction === 'desc' ? 'desc' : 'asc',
		},
		titleField: 'title',
		mediaField: 'map_preview',
		fields,
		layout: {
			...view.layout,
			enableMoving: false,
		},
	};
}

export function createDefaultLocationsView(
	preferredPerPage = DEFAULT_LOCATIONS_TABLE_PER_PAGE
): ViewTable {
	return normalizeLocationsTableView(
		{
			type: 'table',
			page: 1,
			perPage: preferredPerPage,
		},
		preferredPerPage
	);
}

export function applyLocationsTableViewChange(
	currentView: ViewTable,
	nextView: Partial<ViewTable> | ViewTable,
	preferredPerPage = DEFAULT_LOCATIONS_TABLE_PER_PAGE
): {
	view: ViewTable;
	hasPerPageChanged: boolean;
} {
	const normalizedNextView = normalizeLocationsTableView(nextView, preferredPerPage);
	const hasSearchChanged = normalizedNextView.search !== currentView.search;
	const hasPerPageChanged = normalizedNextView.perPage !== currentView.perPage;

	return {
		view: {
			...normalizedNextView,
			page: hasSearchChanged || hasPerPageChanged ? 1 : normalizedNextView.page,
		},
		hasPerPageChanged,
	};
}

export const DEFAULT_FORM_STATE: LocationFormState = {
	title: '',
	telephone: '',
	email: '',
	website: '',
	street: '',
	house_number: '',
	postal_code: '',
	city: '',
	state: '',
	country: '',
	latitude: '',
	longitude: '',
	logo_id: 0,
	marker_id: 0,
	marker_color: '#3FB1CE',
	is_hidden: false,
	opening_hours: createDefaultOpeningHours(),
	opening_hours_notes: '',
	social_media: [
		{ platform: 'instagram', url: '' },
		{ platform: 'x', url: '' },
	],
	tag_ids: [],
};
