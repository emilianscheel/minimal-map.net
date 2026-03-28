import apiFetch from '@wordpress/api-fetch';
import type {
	AnalyticsAdminConfig,
	AnalyticsEventCategory,
	AnalyticsRangeKey,
	AnalyticsSummary,
} from '../../types';

export async function fetchAnalyticsSummary(
	config: AnalyticsAdminConfig,
	range: AnalyticsRangeKey,
	category: AnalyticsEventCategory,
): Promise<AnalyticsSummary> {
	const params = new URLSearchParams();
	params.set('range', range);
	params.set('category', category);

	return apiFetch({
		method: 'GET',
		path: `${config.summaryPath}?${params.toString()}`,
	});
}
