import { getStylePresets } from './style-presets';

const FALLBACK_MESSAGE = 'Map preview unavailable because this browser does not support WebGL.';
const HEIGHT_UNITS = [ 'px', 'em', 'rem', '%', 'vh', 'vw' ];

export function normalizeHeightUnit(unit) {
	return HEIGHT_UNITS.includes(unit) ? unit : 'px';
}

export function normalizeMapConfig(rawConfig = {}, runtimeConfig = {}) {
	const defaults = runtimeConfig.defaults || {
		centerLat: 52.517,
		centerLng: 13.388,
		zoom: 9.5,
		height: 420,
		heightUnit: 'px',
		stylePreset: 'liberty',
		showZoomControls: true,
	};
	const stylePresets = getStylePresets(runtimeConfig.stylePresets);
	const requestedPreset = `${rawConfig.stylePreset ?? defaults.stylePreset}`;
	const stylePreset = stylePresets[requestedPreset] ? requestedPreset : defaults.stylePreset;
	const styleUrl = rawConfig.styleUrl || stylePresets[stylePreset]?.style_url || stylePresets.liberty.style_url;
	const centerLat = clampNumber(rawConfig.centerLat ?? defaults.centerLat, -90, 90);
	const centerLng = clampNumber(rawConfig.centerLng ?? defaults.centerLng, -180, 180);
	const zoom = clampNumber(rawConfig.zoom ?? defaults.zoom, 0, 22);
	const height = Math.max(1, Number(rawConfig.height ?? defaults.height));
	const heightUnit = normalizeHeightUnit(rawConfig.heightUnit ?? defaults.heightUnit);

	return {
		centerLat,
		centerLng,
		zoom,
		height,
		heightUnit,
		heightCssValue: `${trimNumber(height)}${heightUnit}`,
		stylePreset,
		styleUrl,
		showZoomControls: Boolean(rawConfig.showZoomControls ?? defaults.showZoomControls),
		fallbackMessage: rawConfig.fallbackMessage || runtimeConfig.messages?.fallback || FALLBACK_MESSAGE,
	};
}

function trimNumber(value) {
	const rounded = Number(value.toFixed(4));

	return Number.isInteger(rounded) ? `${rounded}` : `${rounded}`;
}

function clampNumber(value, minimum, maximum) {
	const numericValue = Number(value);

	if (Number.isNaN(numericValue)) {
		return minimum;
	}

	return Math.max(minimum, Math.min(maximum, numericValue));
}
