import apiFetch from '@wordpress/api-fetch';
import type { AnalyticsAdminConfig } from '../../types';

export async function resetAnalyticsData(
	config: AnalyticsAdminConfig
): Promise<void> {
	await apiFetch({
		method: 'POST',
		path: config.settingsPath,
		data: {
			reset: true,
		},
	});
}
