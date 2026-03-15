import apiFetch from '@wordpress/api-fetch';
import type { GeocodeResponse } from '../types';

interface GeocodeSearchQueryDependencies {
	apiFetchFn?: typeof apiFetch;
}

export async function geocodeSearchQuery(
	path: string,
	query: string,
	dependencies: GeocodeSearchQueryDependencies = {},
): Promise<GeocodeResponse> {
	const apiFetchFn = dependencies.apiFetchFn ?? apiFetch;

	return (await apiFetchFn({
		path,
		method: 'POST',
		data: {
			query: query.trim(),
		},
	})) as GeocodeResponse;
}
