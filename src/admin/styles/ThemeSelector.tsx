import { SelectControl } from '@wordpress/components';
import { StyleThemeRecord } from '../../types';

interface ThemeSelectorProps {
	activeSlug: string;
	themes: StyleThemeRecord[];
	onSwitch: (slug: string) => void;
}

export function ThemeSelector({ activeSlug, themes, onSwitch }: ThemeSelectorProps) {
	return (
		<SelectControl
			value={activeSlug}
			options={themes.map((t) => ({ label: t.label, value: t.slug }))}
			onChange={onSwitch}
			__nextHasNoMarginBottom
			__next40pxDefaultSize
		/>
	);
}
