import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { FileUp, MapPin } from 'lucide-react';
import type { MarkersController } from './types';

export default function MarkersEmptyState({ controller }: { controller: MarkersController }) {
	return (
		<div className="minimal-map-admin__markers-empty-container">
			<div className="minimal-map-admin__markers-empty-content">
				<div className="minimal-map-admin__markers-empty-icon">
					<MapPin size={ 48 } strokeWidth={ 1.5 } />
				</div>
				<h3 className="minimal-map-admin__markers-empty-title">
					{ __( 'No markers found', 'minimal-map' ) }
				</h3>
				<p className="minimal-map-admin__markers-empty-description">
					{ __( 'Upload your custom SVG markers to personalize your maps. Simply drag and drop your files here or use the button below.', 'minimal-map' ) }
				</p>
				<Button
					variant="primary"
					onClick={ () => {
						const input = document.createElement( 'input' );
						input.type = 'file';
						input.accept = '.svg';
						input.multiple = true;
						input.onchange = ( e ) => {
							const files = ( e.target as HTMLInputElement ).files;
							if ( files ) {
								void controller.onUploadMarkers( files );
							}
						};
						input.click();
					} }
					disabled={ controller.isUploading }
					__next40pxDefaultSize
				>
					<div className="minimal-map-admin__markers-empty-button-content">
						<FileUp size={ 18 } />
						<span>{ __( 'Upload', 'minimal-map' ) }</span>
					</div>
				</Button>
			</div>
		</div>
	);
}
