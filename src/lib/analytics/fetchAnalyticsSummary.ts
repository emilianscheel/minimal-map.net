import apiFetch from '@wordpress/api-fetch';
import type { AnalyticsAdminConfig, AnalyticsRangeKey, AnalyticsSummary } from '../../types';

export async function fetchAnalyticsSummary(
	config: AnalyticsAdminConfig,
	range: AnalyticsRangeKey
): Promise<AnalyticsSummary> {
	const params = new URLSearchParams();
	params.set('range', range);

	return apiFetch({
		method: 'GET',
		path: `${config.summaryPath}?${params.toString()}`,
	});
}
