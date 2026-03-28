import { describe, expect, test } from 'bun:test';
import { trackMapAnalyticsEvent } from '../../src/lib/analytics/trackMapAnalyticsEvent';

describe('trackMapAnalyticsEvent', () => {
	test('sends selection analytics payloads with selection-specific fields', async () => {
		const calls: Array<Record<string, unknown>> = [];

		await trackMapAnalyticsEvent(
			'/minimal-map/v1/analytics/track',
			{
				eventCategory: 'selection',
				interactionSource: 'search_panel',
				locationId: 12,
				locationTitle: 'Berlin Mitte',
				queryText: 'Berlin',
			},
			{
				apiFetchFn: async (options) => {
					calls.push(options as Record<string, unknown>);
					return {};
				},
			},
		);

		expect(calls).toHaveLength(1);
		expect(calls[0]).toMatchObject({
			method: 'POST',
			path: '/minimal-map/v1/analytics/track',
			data: {
				event_category: 'selection',
				location_id: 12,
				location_title: 'Berlin Mitte',
				interaction_source: 'search_panel',
				query_text: 'Berlin',
			},
		});
	});

	test('sends action analytics payloads with action-specific fields', async () => {
		const calls: Array<Record<string, unknown>> = [];

		await trackMapAnalyticsEvent(
			'/minimal-map/v1/analytics/track',
			{
				eventCategory: 'action',
				interactionSource: 'in_map_card',
				locationId: 7,
				locationTitle: 'Hamburg Port',
				actionType: 'website',
				actionTarget: 'example.com',
			},
			{
				apiFetchFn: async (options) => {
					calls.push(options as Record<string, unknown>);
					return {};
				},
			},
		);

		expect(calls).toHaveLength(1);
		expect(calls[0]).toMatchObject({
			method: 'POST',
			path: '/minimal-map/v1/analytics/track',
			data: {
				event_category: 'action',
				location_id: 7,
				location_title: 'Hamburg Port',
				interaction_source: 'in_map_card',
				action_type: 'website',
				action_target: 'example.com',
			},
		});
	});
});
