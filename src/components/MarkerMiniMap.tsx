import type { MarkerRecord, StyleThemeRecord } from '../types';
import StaticMiniMapPreview from './StaticMiniMapPreview';

export default function MarkerMiniMap({ marker, theme }: { marker: MarkerRecord; theme: StyleThemeRecord | null }) {
	return (
		<StaticMiniMapPreview
			theme={theme}
			markerContent={marker.content}
			variant="card"
			className="minimal-map-admin__marker-mini-map"
			badge={1}
		/>
	);
}
