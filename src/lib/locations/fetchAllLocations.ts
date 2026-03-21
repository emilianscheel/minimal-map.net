import apiFetch from '@wordpress/api-fetch';
import type { LocationRecord, LocationRestResponse, LocationsAdminConfig } from '../../types';
import { normalizeLocationRecord } from './normalizeLocationRecord';

export async function fetchAllLocations(config: LocationsAdminConfig): Promise<LocationRecord[]> {
	const perPage = 100;
	let page = 1;
	let totalPages = 1;
	const locations: LocationRecord[] = [];
	const runtimeLocations = window.MinimalMapAdminConfig?.mapConfig?.locations ?? [];
	const markerContentByLocationId = new Map(
		runtimeLocations
			.filter((location) => typeof location.id === 'number')
			.map((location) => [location.id as number, location.markerContent ?? undefined])
	);

	while (page <= totalPages) {
		const response = (await apiFetch({
			method: 'GET',
			parse: false,
			path: `${config.restPath}?context=edit&page=${page}&per_page=${perPage}&_fields=id,title,meta,minimal_map_tag`,
		})) as Response;
		const records = (await response.json()) as LocationRestResponse[];

		locations.push(
			...records.map((record) => {
				const location = normalizeLocationRecord(record);
				const markerContent = markerContentByLocationId.get(location.id);

				return markerContent ? { ...location, markerContent } : location;
			})
		);
		totalPages = Number(response.headers.get('X-WP-TotalPages') || '1');
		page += 1;
	}

	return locations;
}
