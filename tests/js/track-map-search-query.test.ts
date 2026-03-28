import { describe, expect, test } from 'bun:test';
import { trackMapSearchQuery } from '../../src/lib/analytics/trackMapSearchQuery';

describe('trackMapSearchQuery', () => {
	test('omits nearest_distance_meters when no distance snapshot exists', async () => {
		const calls: Array<Record<string, unknown>> = [];

		await trackMapSearchQuery(
			'/minimal-map/v1/analytics/track',
			{
				queryText: 'lkasdjf',
				queryType: 'address',
				resultCount: 0,
				nearestDistanceMeters: null,
			},
			{
				apiFetchFn: async (options) => {
					calls.push(options as Record<string, unknown>);
					return {};
				},
			}
		);

		expect(calls).toHaveLength(1);
		expect(calls[0]).toMatchObject({
			method: 'POST',
			path: '/minimal-map/v1/analytics/track',
			data: {
				event_category: 'search',
				query_text: 'lkasdjf',
				query_type: 'address',
				result_count: 0,
			},
		});
		expect((calls[0].data as Record<string, unknown>).nearest_distance_meters).toBeUndefined();
	});

	test('includes nearest_distance_meters when a numeric snapshot exists', async () => {
		const calls: Array<Record<string, unknown>> = [];

		await trackMapSearchQuery(
			'/minimal-map/v1/analytics/track',
			{
				queryText: 'Alexanderplatz',
				queryType: 'address',
				resultCount: 2,
				nearestDistanceMeters: 275.4,
			},
			{
				apiFetchFn: async (options) => {
					calls.push(options as Record<string, unknown>);
					return {};
				},
			}
		);

		expect(calls).toHaveLength(1);
		expect(calls[0]).toMatchObject({
			method: 'POST',
			path: '/minimal-map/v1/analytics/track',
			data: {
				event_category: 'search',
				query_text: 'Alexanderplatz',
				query_type: 'address',
				result_count: 2,
				nearest_distance_meters: 275,
			},
		});
	});
});
