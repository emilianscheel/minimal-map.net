import apiFetch from '@wordpress/api-fetch';
import type { AnalyticsAdminConfig, AnalyticsSummary } from '../../types';

export async function fetchAnalyticsSummary(
	config: AnalyticsAdminConfig
): Promise<AnalyticsSummary> {
	return apiFetch({
		method: 'GET',
		path: config.summaryPath,
	});
}
