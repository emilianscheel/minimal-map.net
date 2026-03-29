import { memo } from '@wordpress/element';
import type { MapLocationPoint, StyleThemeRecord } from '../types';
import {
	areCollectionMiniMapPropsEqual,
	getCollectionMiniMapPointLayouts,
} from '../lib/collections/collectionMiniMap';
import StaticMiniMapPreview from './StaticMiniMapPreview';

function CollectionMiniMap({
	previewLocations,
	locationCount,
	theme,
}: {
	previewLocations: MapLocationPoint[];
	locationCount: number;
	theme: StyleThemeRecord | null;
}) {
	const pointLayouts = getCollectionMiniMapPointLayouts(previewLocations, locationCount);

	return (
		<StaticMiniMapPreview
			theme={theme}
			markerContent={null}
			variant="card"
			className="minimal-map-admin__collection-mini-map"
			badge={locationCount}
			overlay={
				<>
					{pointLayouts.map((layout) => (
						<span
							key={layout.key}
							className="minimal-map-admin__collection-mini-map-point"
							style={{
								left: `${layout.left}%`,
								top: `${layout.top}%`,
								opacity: layout.opacity,
								transform: `translate(-50%, -50%) scale(${layout.scale})`,
							}}
						/>
					))}
				</>
			}
		/>
	);
}

export default memo(CollectionMiniMap, areCollectionMiniMapPropsEqual);
