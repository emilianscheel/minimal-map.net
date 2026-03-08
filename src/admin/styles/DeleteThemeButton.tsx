import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Trash2 } from 'lucide-react';

interface DeleteThemeButtonProps {
	slug: string;
	onDelete: (slug: string) => void;
}

export function DeleteThemeButton({ slug, onDelete }: DeleteThemeButtonProps) {
	return (
		<Button
			icon={<Trash2 size={18} />}
			label={__('Delete Current Theme', 'minimal-map')}
			onClick={() => {
				if (window.confirm(__('Are you sure you want to delete this theme?', 'minimal-map'))) {
					onDelete(slug);
				}
			}}
			disabled={slug === 'default'}
			variant="tertiary"
			__next40pxDefaultSize
		/>
	);
}
