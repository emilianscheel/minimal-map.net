import type { AnalyticsSearchTrackPayload } from '../../types';
import { trackMapAnalyticsEvent } from './trackMapAnalyticsEvent';

export async function trackMapSearchQuery(
	path: string,
	payload: Omit<AnalyticsSearchTrackPayload, 'eventCategory'>,
	dependencies: Parameters<typeof trackMapAnalyticsEvent>[2] = {},
): Promise<void> {
	await trackMapAnalyticsEvent(
		path,
		{
			...payload,
			eventCategory: 'search',
		},
		dependencies,
	);
}
