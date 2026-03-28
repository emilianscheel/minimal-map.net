import type { MapLocationPoint, StyleThemeRecord } from '../../types';

export interface CollectionMiniMapComparableProps {
	previewLocations: MapLocationPoint[];
	theme: StyleThemeRecord | null;
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

	if (previousProps.theme !== nextProps.theme) {
		return false;
	}

	return true;
}
