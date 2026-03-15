import { describe, expect, test } from 'bun:test';
import {
	buildDistanceSearchResults,
	calculateDistanceMeters,
	formatDistanceLabel,
} from '../../src/map/location-distance';

describe('location distance helpers', () => {
	test('calculates haversine distance in meters', () => {
		const distance = calculateDistanceMeters(
			{ lat: 52.52, lng: 13.405 },
			{ lat: 52.5205, lng: 13.41 },
		);

		expect(distance).toBeGreaterThan(300);
		expect(distance).toBeLessThan(400);
	});

	test('formats short and long distances for the search panel', () => {
		expect(formatDistanceLabel(500)).toBe('500 m');
		expect(formatDistanceLabel(1499)).toBe('1 km');
	});

	test('sorts locations nearest first and returns preformatted labels', () => {
		const results = buildDistanceSearchResults(
			{ lat: 52.52, lng: 13.405 },
			[
				{ id: 1, title: 'Hamburg', lat: 53.5511, lng: 9.9937 },
				{ id: 2, title: 'Berlin', lat: 52.52, lng: 13.405 },
			],
		);

		expect(results.map((result) => result.location.title)).toEqual([
			'Berlin',
			'Hamburg',
		]);
		expect(results[0]?.distanceLabel).toBe('0 m');
	});
});
