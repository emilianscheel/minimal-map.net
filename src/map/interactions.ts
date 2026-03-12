import type { Map as MapLibreMap } from 'maplibre-gl';
import type { NormalizedMapConfig } from '../types';

export function syncTouchZoomInteraction(
	map: Pick<MapLibreMap, 'touchZoomRotate'>,
	config: Pick<NormalizedMapConfig, 'interactive' | 'mobileTwoFingerZoom'>
): void {
	if (!config.interactive || !config.mobileTwoFingerZoom) {
		map.touchZoomRotate.disable();
		return;
	}

	map.touchZoomRotate.enable();
	map.touchZoomRotate.disableRotation();
}
