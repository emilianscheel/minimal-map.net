import apiFetch from '@wordpress/api-fetch';
import type { ViewTable } from '@wordpress/dataviews';
import type { AnalyticsAdminConfig, AnalyticsQueriesResponse, AnalyticsRangeKey } from '../../types';

export async function fetchAnalyticsQueries(
	config: AnalyticsAdminConfig,
	view: Pick<ViewTable, 'page' | 'perPage' | 'search'>,
	range: AnalyticsRangeKey
): Promise<AnalyticsQueriesResponse> {
	const params = new URLSearchParams();
	params.set('page', `${view.page ?? 1}`);
	params.set('per_page', `${view.perPage ?? 10}`);
	params.set('range', range);

	if (view.search?.trim()) {
		params.set('search', view.search.trim());
	}

	return apiFetch({
		method: 'GET',
		path: `${config.queriesPath}?${params.toString()}`,
	});
}
