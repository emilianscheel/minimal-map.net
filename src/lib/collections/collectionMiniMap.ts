import type { MapLocationPoint, StyleThemeRecord } from '../../types';

export interface CollectionMiniMapComparableProps {
	previewLocations: MapLocationPoint[];
	locationCount: number;
	theme: StyleThemeRecord | null;
}

export interface CollectionMiniMapPointLayout {
	key: string;
	left: number;
	top: number;
	scale: number;
	opacity: number;
}

const MAX_VISIBLE_POINTS = 18;
const RANDOM_UINT32_DENOMINATOR = 0xffffffff;

function createSeed(input: string): number {
	let hash = 0;

	for (let index = 0; index < input.length; index += 1) {
		hash = ((hash << 5) - hash + input.charCodeAt(index)) >>> 0;
	}

	return hash || 1;
}

function nextSeed(seed: number): number {
	return (seed * 1664525 + 1013904223) >>> 0;
}

function normalizeRandom(seed: number): number {
	return seed / RANDOM_UINT32_DENOMINATOR;
}

function getPreviewSeed(previewLocations: readonly MapLocationPoint[], locationCount: number): number {
	return createSeed(
		previewLocations
			.map((location, index) =>
				[
					location.id ?? `index-${index}`,
					location.title ?? '',
					location.lat.toFixed(4),
					location.lng.toFixed(4),
				].join(':')
			)
			.concat(`${locationCount}`)
			.join('|')
	);
}

function getVisiblePointCount(previewLocations: readonly MapLocationPoint[], locationCount: number): number {
	return Math.min(Math.max(previewLocations.length, locationCount), MAX_VISIBLE_POINTS);
}

export function getCollectionMiniMapOverflowCount(
	previewLocations: readonly MapLocationPoint[],
	locationCount: number
): number {
	return Math.max(Math.max(previewLocations.length, locationCount) - MAX_VISIBLE_POINTS, 0);
}
export function getCollectionMiniMapPointLayouts(
	previewLocations: readonly MapLocationPoint[],
	locationCount: number
): CollectionMiniMapPointLayout[] {
	const visiblePointCount = getVisiblePointCount(previewLocations, locationCount);

	if (visiblePointCount === 0) {
		return [];
	}

	const minDistance =
		visiblePointCount <= 4 ? 20 : visiblePointCount <= 8 ? 16 : visiblePointCount <= 12 ? 13 : 10;
	const baseScale =
		visiblePointCount <= 4 ? 1 : visiblePointCount <= 8 ? 0.92 : visiblePointCount <= 12 ? 0.84 : 0.76;
	const layouts: CollectionMiniMapPointLayout[] = [];
	let seed = getPreviewSeed(previewLocations, locationCount);

	for (let index = 0; index < visiblePointCount; index += 1) {
		let bestCandidate = {
			left: 50,
			top: 50,
			scale: baseScale,
			opacity: 0.96,
		};
		let bestDistance = -1;

		for (let attempt = 0; attempt < 24; attempt += 1) {
			seed = nextSeed(seed);
			const left = 14 + normalizeRandom(seed) * 72;
			seed = nextSeed(seed);
			const top = 16 + normalizeRandom(seed) * 60;
			seed = nextSeed(seed);
			const scale = baseScale * (0.9 + normalizeRandom(seed) * 0.18);
			seed = nextSeed(seed);
			const opacity = 0.72 + normalizeRandom(seed) * 0.24;
			const candidateDistance =
				layouts.length === 0
					? Number.POSITIVE_INFINITY
					: Math.min(
							...layouts.map((layout) => {
								const dx = layout.left - left;
								const dy = layout.top - top;

								return Math.sqrt(dx * dx + dy * dy);
							})
						);

			if (candidateDistance > bestDistance) {
				bestDistance = candidateDistance;
				bestCandidate = { left, top, scale, opacity };
			}

			if (candidateDistance >= minDistance) {
				break;
			}
		}

		layouts.push({
			key: `${previewLocations[index]?.id ?? 'collection'}-${index}`,
			...bestCandidate,
		});
	}

	return layouts;
}

export function haveSamePreviewLocations(
	previousLocations: readonly MapLocationPoint[],
	nextLocations: readonly MapLocationPoint[]
): boolean {
	if (previousLocations.length !== nextLocations.length) {
		return false;
	}

	for (let index = 0; index < previousLocations.length; index += 1) {
		if (previousLocations[index] !== nextLocations[index]) {
			return false;
		}
	}

	return true;
}

export function areCollectionMiniMapPropsEqual(
	previousProps: CollectionMiniMapComparableProps,
	nextProps: CollectionMiniMapComparableProps
): boolean {
	if (!haveSamePreviewLocations(previousProps.previewLocations, nextProps.previewLocations)) {
		return false;
	}

	if (previousProps.locationCount !== nextProps.locationCount) {
		return false;
	}

	if (previousProps.theme !== nextProps.theme) {
		return false;
	}

	return true;
}
