import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Upload } from 'lucide-react';
import { StyleThemeRecord } from '../../types';

interface ImportThemeButtonProps {
	onImport: (config: StyleThemeRecord) => void;
}

export function ImportThemeButton({ onImport }: ImportThemeButtonProps) {
	return (
		<Button
			icon={<Upload size={18} />}
			label={__('Upload Theme Config', 'minimal-map')}
			onClick={() => {
				const input = document.createElement('input');
				input.type = 'file';
				input.accept = '.json';
				input.onchange = (e) => {
					const file = (e.target as HTMLInputElement).files?.[0];
					if (file) {
						const reader = new FileReader();
						reader.onload = (readerEvent) => {
							try {
								const content = JSON.parse(readerEvent.target?.result as string);
								onImport(content);
							} catch (err) {
								alert(__('Invalid JSON file.', 'minimal-map'));
							}
						};
						reader.readAsText(file);
					}
				};
				input.click();
			}}
			variant="tertiary"
			__next40pxDefaultSize
		/>
	);
}
