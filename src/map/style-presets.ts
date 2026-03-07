import type { StyleOption, StylePresets } from '../types';

export const DEFAULT_STYLE_PRESETS: StylePresets = {
	liberty: {
		label: 'Liberty',
		style_url: 'https://tiles.openfreemap.org/styles/liberty',
	},
	bright: {
		label: 'Bright',
		style_url: 'https://tiles.openfreemap.org/styles/bright',
	},
	positron: {
		label: 'Positron',
		style_url: 'https://tiles.openfreemap.org/styles/positron',
	},
};

export function getStylePresets(runtimePresets: StylePresets = {}): StylePresets {
	if (Object.keys(runtimePresets).length > 0) {
		return runtimePresets;
	}

	return DEFAULT_STYLE_PRESETS;
}

export function getStyleOptions(runtimePresets: StylePresets = {}): StyleOption[] {
	const presets = getStylePresets(runtimePresets);

	return Object.entries(presets).map(([ value, preset ]) => ({
		label: preset.label,
		value,
	}));
}
