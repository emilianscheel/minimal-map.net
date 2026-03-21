import type {
	LocationRecord,
	LogoRecord,
	MarkerRecord,
	TagRecord,
} from '../../types';

type LocationValueKey = 'logo_id' | 'marker_id';

function getQuickAssignmentCandidate<Item>(
	title: string,
	candidates: Item[],
	getSearchValue: (candidate: Item) => string
): Item | null {
	if (candidates.length === 0) {
		return null;
	}

	const titleTokens = getLocationTitleTokens(title);
	const matchingCandidate = candidates.find((candidate) => {
		const searchValue = getSearchValue(candidate).toLowerCase();

		return titleTokens.some((token) => searchValue.includes(token));
	});

	return matchingCandidate ?? candidates[0] ?? null;
}

function sortNumeric(values: Iterable<number>): number[] {
	return Array.from(values).sort((left, right) => left - right);
}

function getSharedPositiveValue(
	locations: LocationRecord[],
	key: LocationValueKey
): number | null {
	if (locations.length === 0) {
		return null;
	}

	const [firstLocation] = locations;

	if (!firstLocation || firstLocation[key] <= 0) {
		return null;
	}

	const firstValue = firstLocation[key];

	return locations.every((location) => location[key] === firstValue) ? firstValue : null;
}

export function getLocationTitleTokens(title: string): string[] {
	return Array.from(
		new Set(
			title
				.toLowerCase()
				.split(/[^\p{L}\p{N}]+/u)
				.filter(Boolean)
		)
	);
}

export function mergeLocationTagIds(
	currentTagIds: number[],
	newTagIds: number[]
): number[] {
	return sortNumeric(new Set([...currentTagIds, ...newTagIds]));
}

export function getAssignedTagIdsForSelection(locations: LocationRecord[]): number[] {
	return sortNumeric(
		locations.reduce<Set<number>>((assignedTagIds, location) => {
			location.tag_ids.forEach((tagId) => assignedTagIds.add(tagId));
			return assignedTagIds;
		}, new Set<number>())
	);
}

export function getCommonTagIds(locations: LocationRecord[]): number[] {
	const [firstLocation, ...otherLocations] = locations;

	if (!firstLocation) {
		return [];
	}

	return sortNumeric(
		firstLocation.tag_ids.filter((tagId) =>
			otherLocations.every((location) => location.tag_ids.includes(tagId))
		)
	);
}

export function getAssignableTagIds(
	locations: LocationRecord[],
	tagIds: number[]
): number[] {
	const commonTagIds = new Set(getCommonTagIds(locations));

	return sortNumeric(
		tagIds.filter((tagId) => !commonTagIds.has(tagId))
	);
}

export function getDisplayedAssignedTags(
	locations: LocationRecord[],
	tags: TagRecord[]
): TagRecord[] {
	const assignedTagIds = new Set(getAssignedTagIdsForSelection(locations));

	return tags.filter((tag) => assignedTagIds.has(tag.id));
}

export function getAssignableLogoIds(
	locations: LocationRecord[],
	logoIds: number[]
): number[] {
	const sharedLogoId = getSharedPositiveValue(locations, 'logo_id');

	return sortNumeric(
		logoIds.filter((logoId) => logoId > 0 && logoId !== sharedLogoId)
	);
}

export function getAssignableMarkerIds(
	locations: LocationRecord[],
	markerIds: number[]
): number[] {
	const sharedMarkerId = getSharedPositiveValue(locations, 'marker_id');

	return sortNumeric(
		markerIds.filter((markerId) => markerId > 0 && markerId !== sharedMarkerId)
	);
}

export function getQuickAssignableLogo(
	location: LocationRecord,
	logos: LogoRecord[]
): LogoRecord | null {
	return getQuickAssignmentCandidate(
		location.title,
		logos.filter((logo) => logo.id > 0 && logo.id !== location.logo_id),
		(logo) => logo.title
	);
}

export function getQuickAssignableMarker(
	location: LocationRecord,
	markers: MarkerRecord[]
): MarkerRecord | null {
	return getQuickAssignmentCandidate(
		location.title,
		markers.filter((marker) => marker.id > 0 && marker.id !== location.marker_id),
		(marker) => marker.title
	);
}

export function getQuickAssignableTag(
	location: LocationRecord,
	tags: TagRecord[]
): TagRecord | null {
	const assignedTagIds = new Set(location.tag_ids);

	return getQuickAssignmentCandidate(
		location.title,
		tags.filter((tag) => !assignedTagIds.has(tag.id)),
		(tag) => tag.name
	);
}

export function getLocationsWithAssignedLogos(
	locations: LocationRecord[]
): LocationRecord[] {
	return locations.filter((location) => location.logo_id > 0);
}

export function getLocationsWithAssignedMarkers(
	locations: LocationRecord[]
): LocationRecord[] {
	return locations.filter((location) => location.marker_id > 0);
}

export function getLocationsWithAssignedTags(
	locations: LocationRecord[]
): LocationRecord[] {
	return locations.filter((location) => location.tag_ids.length > 0);
}
