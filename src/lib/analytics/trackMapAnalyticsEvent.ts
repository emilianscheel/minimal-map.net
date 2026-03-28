import apiFetch from '@wordpress/api-fetch';
import type { AnalyticsTrackPayload } from '../../types';

interface TrackMapAnalyticsEventDependencies {
	apiFetchFn?: typeof apiFetch;
}

export async function trackMapAnalyticsEvent(
	path: string,
	payload: AnalyticsTrackPayload,
	dependencies: TrackMapAnalyticsEventDependencies = {},
): Promise<void> {
	const apiFetchFn = dependencies.apiFetchFn ?? apiFetch;
	const data: Record<string, number | string> = {
		event_category: payload.eventCategory,
	};

	if (payload.eventCategory === 'search') {
		const queryText = payload.queryText.trim();

		if (!path || !queryText) {
			return;
		}

		data.query_text = queryText;
		data.query_type = payload.queryType;
		data.result_count = Math.max(0, Math.round(payload.resultCount));

		if (typeof payload.nearestDistanceMeters === 'number') {
			data.nearest_distance_meters = Math.max(
				0,
				Math.round(payload.nearestDistanceMeters),
			);
		}
	} else if (payload.eventCategory === 'selection') {
		if (!path || payload.locationId <= 0 || !payload.locationTitle.trim()) {
			return;
		}

		data.location_id = payload.locationId;
		data.location_title = payload.locationTitle.trim();
		data.interaction_source = payload.interactionSource;

		if (payload.queryText?.trim()) {
			data.query_text = payload.queryText.trim();
		}
	} else {
		if (
			!path ||
			payload.locationId <= 0 ||
			!payload.locationTitle.trim() ||
			!payload.actionType
		) {
			return;
		}

		data.location_id = payload.locationId;
		data.location_title = payload.locationTitle.trim();
		data.interaction_source = payload.interactionSource;
		data.action_type = payload.actionType;

		if (payload.actionTarget?.trim()) {
			data.action_target = payload.actionTarget.trim();
		}
	}

	try {
		await apiFetchFn({
			method: 'POST',
			path,
			data,
		});
	} catch {
		// Tracking failures should never change the user-visible behavior.
	}
}
