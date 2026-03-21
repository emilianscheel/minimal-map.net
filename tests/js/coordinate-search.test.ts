import { describe, expect, test } from 'bun:test';
import {
	formatCoordinateSearchValue,
	parseCoordinateSearchValue,
} from '../../src/map/coordinate-search';

describe('coordinate search parser', () => {
	test('parses decimal latitude/longitude pairs separated by a comma', () => {
		expect(parseCoordinateSearchValue('52.517, 13.388')).toEqual({
			lat: 52.517,
			lng: 13.388,
		});
	});

	test('parses decimal latitude/longitude pairs separated by whitespace', () => {
		expect(parseCoordinateSearchValue('52.517 13.388')).toEqual({
			lat: 52.517,
			lng: 13.388,
		});
	});

	test('parses directional suffix coordinates', () => {
		expect(parseCoordinateSearchValue('52.517 N, 13.388 E')).toEqual({
			lat: 52.517,
			lng: 13.388,
		});
		expect(parseCoordinateSearchValue('52.517 s 13.388 w')).toEqual({
			lat: -52.517,
			lng: -13.388,
		});
	});

	test('rejects malformed or out-of-range coordinate input', () => {
		expect(parseCoordinateSearchValue('52.517, nope')).toBeNull();
		expect(parseCoordinateSearchValue('95, 13.388')).toBeNull();
		expect(parseCoordinateSearchValue('52.517, 190')).toBeNull();
		expect(parseCoordinateSearchValue('')).toBeNull();
	});

	test('formats normalized coordinate search values for the live-location flow', () => {
		expect(
			formatCoordinateSearchValue({
				lat: 52.517,
				lng: 13.388,
			})
		).toBe('52.517, 13.388');
		expect(
			formatCoordinateSearchValue({
				lat: 52.5,
				lng: 13,
			})
		).toBe('52.5, 13');
	});
});
