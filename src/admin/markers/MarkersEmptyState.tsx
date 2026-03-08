import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import type { MarkersController } from './types';
import { UploadMarkerButton } from './UploadMarkerButton';

export default function MarkersEmptyState({ controller }: { controller: MarkersController }) {
	return (
		<div className="minimal-map-admin__locations-state minimal-map-admin__locations-state--empty">
			<div className="minimal-map-admin__locations-empty">
				<UploadMarkerButton onUpload={controller.onUploadMarkers} isUploading={controller.isUploading} />
			</div>
		</div>
	);
}
