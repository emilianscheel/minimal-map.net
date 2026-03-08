import { useEffect, useRef } from '@wordpress/element';
import { createMinimalMap } from '../map/bootstrap';
import type { MinimalMapInstance, MarkerRecord } from '../types';

export default function MarkerMiniMap({ marker }: { marker: MarkerRecord }) {
	const mapRef = useRef<HTMLDivElement>(null);
	const instanceRef = useRef<MinimalMapInstance | null>(null);

	useEffect(() => {
		if (!mapRef.current) {
			return;
		}

		// Use a deterministic location based on marker ID
		const lat = 52.5 + (marker.id % 100) / 1000;
		const lng = 13.4 + (marker.id % 100) / 1000;

		instanceRef.current = createMinimalMap(mapRef.current, {
			markerLat: lat,
			markerLng: lng,
			markerContent: marker.content,
			zoom: 12,
			interactive: false,
			showZoomControls: false,
			showAttribution: false,
			height: 100,
			heightUnit: '%',
		});

		return () => {
			instanceRef.current?.destroy();
			instanceRef.current = null;
		};
	}, [marker.id, marker.content]);

	return (
		<div className="minimal-map-admin__marker-mini-map-wrap">
			<div ref={mapRef} className="minimal-map-admin__marker-mini-map" />
		</div>
	);
}
