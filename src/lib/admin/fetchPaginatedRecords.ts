import apiFetch from '@wordpress/api-fetch';
import type {
	AdminCollectionListItem,
	AdminCollectionSummary,
	AdminLocationListItem,
	AdminLocationLookupItem,
	AdminLogoListItem,
	AdminMarkerListItem,
	MapLocationPoint,
	PaginatedResult,
	TagRecord,
	CollectionsAdminConfig,
	LocationsAdminConfig,
	LogosAdminConfig,
	MarkersAdminConfig,
	TagsAdminConfig,
} from '../../types';

export interface AdminQueryParams {
	page?: number;
	perPage?: number;
	search?: string;
}

function buildQueryString(params: AdminQueryParams): string {
	const searchParams = new URLSearchParams();

	if (typeof params.page === 'number' && params.page > 0) {
		searchParams.set('page', `${params.page}`);
	}

	if (typeof params.perPage === 'number' && params.perPage > 0) {
		searchParams.set('per_page', `${params.perPage}`);
	}

	if (params.search?.trim()) {
		searchParams.set('search', params.search.trim());
	}

	const query = searchParams.toString();

	return query ? `?${query}` : '';
}

function normalizePositiveIntegerList(value: unknown): number[] {
	if (!Array.isArray(value)) {
		return [];
	}

	return Array.from(
		new Set(
			value
				.map((entry) => Number(entry))
				.filter((entry) => Number.isInteger(entry) && entry > 0),
		),
	);
}

function normalizePreviewLocations(value: unknown): MapLocationPoint[] {
	if (!Array.isArray(value)) {
		return [];
	}

	return value.reduce<MapLocationPoint[]>((locations, entry) => {
		if (!entry || typeof entry !== 'object') {
			return locations;
		}

		const rawLocation = entry as Record<string, unknown>;
		if (
			rawLocation.lat === null ||
			rawLocation.lat === undefined ||
			rawLocation.lat === '' ||
			rawLocation.lng === null ||
			rawLocation.lng === undefined ||
			rawLocation.lng === ''
		) {
			return locations;
		}

		const lat = Number(rawLocation.lat);
		const lng = Number(rawLocation.lng);

		if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
			return locations;
		}

		locations.push({
			id: typeof rawLocation.id === 'number' ? rawLocation.id : undefined,
			title: typeof rawLocation.title === 'string' ? rawLocation.title : undefined,
			lat,
			lng,
		});

		return locations;
	}, []);
}

export function normalizeAdminCollectionListItem(item: unknown): AdminCollectionListItem {
	const record = item && typeof item === 'object' ? (item as Record<string, unknown>) : {};
	const id = Number(record.id);
	const locationIds = normalizePositiveIntegerList(record.location_ids);

	return {
		id: Number.isInteger(id) && id > 0 ? id : 0,
		title: typeof record.title === 'string' ? record.title : '',
		location_ids: locationIds,
		location_count:
			typeof record.location_count === 'number' && Number.isFinite(record.location_count)
				? record.location_count
				: locationIds.length,
		preview_locations: normalizePreviewLocations(record.preview_locations),
	};
}

async function fetchPaginatedResult<T>(
	path: string,
	params: AdminQueryParams = {}
): Promise<PaginatedResult<T>> {
	return apiFetch<PaginatedResult<T>>({
		path: `${path}${buildQueryString(params)}`,
	});
}

export function fetchAdminLocations(
	config: LocationsAdminConfig,
	params: AdminQueryParams = {}
): Promise<PaginatedResult<AdminLocationListItem>> {
	return fetchPaginatedResult<AdminLocationListItem>(config.queryPath, params);
}

export function fetchAdminCollections(
	config: CollectionsAdminConfig,
	params: AdminQueryParams = {}
): Promise<PaginatedResult<AdminCollectionListItem>> {
	return fetchPaginatedResult<AdminCollectionListItem>(config.queryPath, params).then((result) => ({
		...result,
		items: Array.isArray(result.items)
			? result.items.map(normalizeAdminCollectionListItem)
			: [],
	}));
}

export function fetchAdminMarkers(
	config: MarkersAdminConfig,
	params: AdminQueryParams = {}
): Promise<PaginatedResult<AdminMarkerListItem>> {
	return fetchPaginatedResult<AdminMarkerListItem>(config.queryPath, params);
}

export function fetchAdminLogos(
	config: LogosAdminConfig,
	params: AdminQueryParams = {}
): Promise<PaginatedResult<AdminLogoListItem>> {
	return fetchPaginatedResult<AdminLogoListItem>(config.queryPath, params);
}

export function fetchAdminTags(
	config: TagsAdminConfig,
	params: AdminQueryParams = {}
): Promise<PaginatedResult<TagRecord>> {
	return fetchPaginatedResult<TagRecord>(config.queryPath, params);
}

export type LocationLookupResource = 'collections' | 'logos' | 'markers' | 'tags';

export async function fetchLocationLookupResource<
	T
>(
	config: LocationsAdminConfig,
	resource: LocationLookupResource,
	params: AdminQueryParams = {}
): Promise<PaginatedResult<T>> {
	const searchParams = new URLSearchParams();
	searchParams.set('resource', resource);

	if (typeof params.page === 'number' && params.page > 0) {
		searchParams.set('page', `${params.page}`);
	}

	if (typeof params.perPage === 'number' && params.perPage > 0) {
		searchParams.set('per_page', `${params.perPage}`);
	}

	if (params.search?.trim()) {
		searchParams.set('search', params.search.trim());
	}

	return apiFetch<PaginatedResult<T>>({
		path: `${config.lookupPath}?${searchParams.toString()}`,
	});
}

export async function fetchAllLocationLookupResource<
	T
>(
	config: LocationsAdminConfig,
	resource: LocationLookupResource,
	search = ''
): Promise<T[]> {
	const items: T[] = [];
	let page = 1;
	let totalPages = 1;

	while (page <= totalPages) {
		const result = await fetchLocationLookupResource<T>(config, resource, {
			page,
			perPage: 100,
			search,
		});

		items.push(...result.items);
		totalPages = result.totalPages;
		page += 1;
	}

	return items;
}

export function fetchAdminLocationAssignmentOptions(
	config: LocationsAdminConfig,
	params: AdminQueryParams = {}
): Promise<PaginatedResult<AdminLocationLookupItem>> {
	return fetchPaginatedResult<AdminLocationLookupItem>(config.queryPath, params);
}
