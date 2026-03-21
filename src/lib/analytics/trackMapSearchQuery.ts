import apiFetch from '@wordpress/api-fetch';
import type { AnalyticsTrackPayload } from '../../types';

interface TrackMapSearchQueryDependencies {
	apiFetchFn?: typeof apiFetch;
}

export async function trackMapSearchQuery(
	path: string,
	payload: AnalyticsTrackPayload,
	dependencies: TrackMapSearchQueryDependencies = {},
): Promise<void> {
	if (!path || !payload.queryText.trim()) {
		return;
	}

	const apiFetchFn = dependencies.apiFetchFn ?? apiFetch;
	const data: {
		query_text: string;
		query_type: AnalyticsTrackPayload['queryType'];
		result_count: number;
		nearest_distance_meters?: number;
	} = {
		query_text: payload.queryText.trim(),
		query_type: payload.queryType,
		result_count: Math.max(0, Math.round(payload.resultCount)),
	};

	if (typeof payload.nearestDistanceMeters === 'number') {
		data.nearest_distance_meters = Math.max(
			0,
			Math.round(payload.nearestDistanceMeters)
		);
	}

	try {
		await apiFetchFn({
			method: 'POST',
			path,
			data,
		});
	} catch {
		// Tracking failures should never change the user-visible search behavior.
	}
}
