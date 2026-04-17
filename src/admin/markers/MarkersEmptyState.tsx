import { __ } from '@wordpress/i18n';
import { FileUp, MapPin } from 'lucide-react';
import EmptyState from '../../components/EmptyState';
import type { MarkersController } from './types';

export default function MarkersEmptyState({ controller }: { controller: MarkersController }) {
	return (
		<EmptyState
			icon={<MapPin />}
			title={__('No markers found', 'minimal-map-net')}
			description={__('Upload your custom SVG markers to personalize your maps. Simply drag and drop your files here or use the button below.', 'minimal-map-net')}
			action={{
				label: __('Upload', 'minimal-map-net'),
				onClick: () => {
					const input = document.createElement('input');
					input.type = 'file';
					input.accept = '.svg';
					input.multiple = true;
					input.onchange = (e) => {
						const files = (e.target as HTMLInputElement).files;
						if (files) {
							void controller.onUploadMarkers(files);
						}
					};
					input.click();
				},
				disabled: controller.isUploading,
				icon: <FileUp />,
			}}
		/>
	);
}
