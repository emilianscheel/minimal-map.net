import apiFetch from '@wordpress/api-fetch';
import type { AnalyticsTrackPayload } from '../../types';

export async function trackMapSearchQuery(
	path: string,
	payload: AnalyticsTrackPayload
): Promise<void> {
	if (!path || !payload.queryText.trim()) {
		return;
	}

	try {
		await apiFetch({
			method: 'POST',
			path,
			data: {
				query_text: payload.queryText.trim(),
				query_type: payload.queryType,
				result_count: Math.max(0, Math.round(payload.resultCount)),
				nearest_distance_meters:
					typeof payload.nearestDistanceMeters === 'number'
						? Math.max(0, Math.round(payload.nearestDistanceMeters))
						: null,
			},
		});
	} catch {
		// Tracking failures should never change the user-visible search behavior.
	}
}
