import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Plus } from 'lucide-react';

interface CreateThemeButtonProps {
	onCreate: (name: string) => void;
}

export function CreateThemeButton({ onCreate }: CreateThemeButtonProps) {
	return (
		<Button
			icon={<Plus size={18} />}
			label={__('Create New Theme', 'minimal-map')}
			onClick={() => {
				const name = window.prompt(__('Enter theme name:', 'minimal-map'));
				if (name) onCreate(name);
			}}
			variant="tertiary"
			__next40pxDefaultSize
		/>
	);
}
