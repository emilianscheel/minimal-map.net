import { describe, expect, test } from 'bun:test';
import type { LocationRecord, TagRecord } from '../../src/types';
import {
	getAssignableLogoIds,
	getAssignableMarkerIds,
	getAssignableTagIds,
	getAssignedTagIdsForSelection,
	getCommonTagIds,
	getDisplayedAssignedTags,
	getLocationsWithAssignedLogos,
	getLocationsWithAssignedMarkers,
	getLocationsWithAssignedTags,
	mergeLocationTagIds,
} from '../../src/admin/locations/assignmentHelpers';

function createLocationRecord(overrides: Partial<LocationRecord>): LocationRecord {
	return {
		id: 1,
		title: 'Location',
		telephone: '',
		email: '',
		website: '',
		street: '',
		house_number: '',
		postal_code: '',
		city: '',
		state: '',
		country: '',
		latitude: '',
		longitude: '',
		logo_id: 0,
		marker_id: 0,
		tag_ids: [],
		...overrides,
	};
}

const TAGS: TagRecord[] = [
	{ id: 10, name: 'Cafe', count: 0, background_color: '#111111', foreground_color: '#ffffff' },
	{ id: 11, name: 'Bakery', count: 0, background_color: '#222222', foreground_color: '#ffffff' },
	{ id: 12, name: 'Wifi', count: 0, background_color: '#333333', foreground_color: '#ffffff' },
];

describe('location assignment helpers', () => {
	test('merges added tags without removing existing ones', () => {
		expect(mergeLocationTagIds([12, 10], [10, 11])).toEqual([10, 11, 12]);
	});

	test('computes assigned, common, and assignable tags for mixed selections', () => {
		const locations = [
			createLocationRecord({ id: 1, tag_ids: [10, 11] }),
			createLocationRecord({ id: 2, tag_ids: [10, 12] }),
		];

		expect(getAssignedTagIdsForSelection(locations)).toEqual([10, 11, 12]);
		expect(getCommonTagIds(locations)).toEqual([10]);
		expect(getAssignableTagIds(locations, TAGS.map((tag) => tag.id))).toEqual([11, 12]);
		expect(getDisplayedAssignedTags(locations, TAGS).map((tag) => tag.id)).toEqual([10, 11, 12]);
	});

	test('filters assignable logo and marker options for single and bulk selections', () => {
		const singleLocation = [createLocationRecord({ id: 1, logo_id: 7, marker_id: 3 })];
		const bulkSameLocation = [
			createLocationRecord({ id: 1, logo_id: 7, marker_id: 3 }),
			createLocationRecord({ id: 2, logo_id: 7, marker_id: 3 }),
		];
		const bulkMixedLocation = [
			createLocationRecord({ id: 1, logo_id: 7, marker_id: 3 }),
			createLocationRecord({ id: 2, logo_id: 8, marker_id: 4 }),
		];

		expect(getAssignableLogoIds(singleLocation, [7, 8, 9])).toEqual([8, 9]);
		expect(getAssignableMarkerIds(singleLocation, [3, 4, 5])).toEqual([4, 5]);
		expect(getAssignableLogoIds(bulkSameLocation, [7, 8, 9])).toEqual([8, 9]);
		expect(getAssignableMarkerIds(bulkSameLocation, [3, 4, 5])).toEqual([4, 5]);
		expect(getAssignableLogoIds(bulkMixedLocation, [7, 8, 9])).toEqual([7, 8, 9]);
		expect(getAssignableMarkerIds(bulkMixedLocation, [3, 4, 5])).toEqual([3, 4, 5]);
	});

	test('finds only locations affected by remove actions', () => {
		const locations = [
			createLocationRecord({ id: 1, logo_id: 9, marker_id: 3, tag_ids: [10] }),
			createLocationRecord({ id: 2, logo_id: 0, marker_id: 4, tag_ids: [] }),
			createLocationRecord({ id: 3, logo_id: 8, marker_id: 0, tag_ids: [11, 12] }),
		];

		expect(getLocationsWithAssignedLogos(locations).map((location) => location.id)).toEqual([1, 3]);
		expect(getLocationsWithAssignedMarkers(locations).map((location) => location.id)).toEqual([1, 2]);
		expect(getLocationsWithAssignedTags(locations).map((location) => location.id)).toEqual([1, 3]);
	});
});
