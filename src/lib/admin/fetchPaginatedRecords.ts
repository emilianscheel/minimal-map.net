import apiFetch from '@wordpress/api-fetch';
import type {
	AdminCollectionListItem,
	AdminCollectionSummary,
	AdminLocationListItem,
	AdminLocationLookupItem,
	AdminLogoListItem,
	AdminMarkerListItem,
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
	return fetchPaginatedResult<AdminCollectionListItem>(config.queryPath, params);
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
