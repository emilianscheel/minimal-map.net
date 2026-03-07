import apiFetch from '@wordpress/api-fetch';
import type { LocationRecord, LocationRestResponse, LocationsAdminConfig } from '../../types';
import { normalizeLocationRecord } from './normalizeLocationRecord';

export async function fetchAllLocations(config: LocationsAdminConfig): Promise<LocationRecord[]> {
	const perPage = 100;
	let page = 1;
	let totalPages = 1;
	const locations: LocationRecord[] = [];

	while (page <= totalPages) {
		const response = (await apiFetch({
			method: 'GET',
			parse: false,
			path: `${config.restPath}?context=edit&page=${page}&per_page=${perPage}&_fields=id,title,meta`,
		})) as Response;
		const records = (await response.json()) as LocationRestResponse[];

		locations.push(...records.map(normalizeLocationRecord));
		totalPages = Number(response.headers.get('X-WP-TotalPages') || '1');
		page += 1;
	}

	return locations;
}
