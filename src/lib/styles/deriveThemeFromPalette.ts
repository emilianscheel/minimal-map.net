import type { StylePaletteEntry, StyleThemeColors } from '../../types';
import { DEFAULT_POSITRON_THEME_COLORS } from './defaultThemeColors';

const MIN_LABEL_CONTRAST = 4.5;
const MIN_HALO_CONTRAST = 2.25;

interface RgbColor {
	r: number;
	g: number;
	b: number;
}

interface HslColor {
	h: number;
	s: number;
	l: number;
}

interface PaletteColorAnalysis {
	color: string;
	hsl: HslColor;
	luminance: number;
}

export function normalizePaletteHexColor(value: string): string | null {
	if (typeof value !== 'string') {
		return null;
	}

	const match = value.trim().match(/^#([\da-f]{3}|[\da-f]{6})$/i);
	if (!match) {
		return null;
	}

	const hex = match[1].toLowerCase();

	if (hex.length === 3) {
		return `#${hex.split('').map((part) => `${part}${part}`).join('')}`;
	}

	return `#${hex}`;
}

export function getContrastRatio(foreground: string, background: string): number {
	const normalizedForeground = normalizePaletteHexColor(foreground);
	const normalizedBackground = normalizePaletteHexColor(background);

	if (!normalizedForeground || !normalizedBackground) {
		return 1;
	}

	const foregroundLuminance = getRelativeLuminance(hexToRgb(normalizedForeground));
	const backgroundLuminance = getRelativeLuminance(hexToRgb(normalizedBackground));
	const lightest = Math.max(foregroundLuminance, backgroundLuminance);
	const darkest = Math.min(foregroundLuminance, backgroundLuminance);

	return (lightest + 0.05) / (darkest + 0.05);
}

export function deriveThemeFromPalette(
	palette: StylePaletteEntry[],
	defaultColors: StyleThemeColors = DEFAULT_POSITRON_THEME_COLORS
): StyleThemeColors {
	const analyzedPalette = palette
		.map((entry) => normalizePaletteHexColor(entry.color))
		.filter((color): color is string => Boolean(color))
		.map((color) => analyzeColor(color));

	if (analyzedPalette.length === 0) {
		return { ...defaultColors };
	}

	const backgroundAnchor = pickBackgroundAnchor(analyzedPalette).color;
	const textAnchor = pickDarkestColor(analyzedPalette).color;
	const waterAnchor = pickWaterAnchor(analyzedPalette);
	const landAnchor = pickLandAnchor(analyzedPalette);
	const structureAnchor = pickStructureAnchor(analyzedPalette, backgroundAnchor, textAnchor);

	const background = blend(defaultColors.background, lighten(backgroundAnchor, 3), 0.58);
	const residential = blend(
		defaultColors.residential,
		blend(background, structureAnchor, 0.14),
		0.68
	);
	const park = blend(defaultColors.park, blend(background, landAnchor, 0.22), 0.82);
	const forest = blend(defaultColors.forest, blend(background, landAnchor, 0.3), 0.86);
	const ice = blend(defaultColors.ice, blend(background, waterAnchor, 0.08), 0.72);
	const water = blend(defaultColors.water, blend(background, waterAnchor, 0.34), 0.82);
	const waterway = blend(defaultColors.waterway, darken(water, 8), 0.82);
	const building = blend(defaultColors.building, blend(background, structureAnchor, 0.2), 0.74);
	const buildingOutline = blend(defaultColors.buildingOutline, darken(building, 10), 0.78);
	const path = blend(defaultColors.path, lighten(background, 9), 0.8);
	const roadMinor = blend(defaultColors.roadMinor, lighten(background, 12), 0.86);
	const roadMajorCasing = blend(
		defaultColors.roadMajorCasing,
		blend(background, structureAnchor, 0.16),
		0.78
	);
	const roadMajorFill = blend(defaultColors.roadMajorFill, lighten(background, 10), 0.86);
	const motorwayCasing = blend(
		defaultColors.motorwayCasing,
		blend(roadMajorCasing, waterAnchor, 0.06),
		0.7
	);
	const motorwayFill = blend(
		defaultColors.motorwayFill,
		blend(roadMajorFill, structureAnchor, 0.08),
		0.78
	);
	const rail = blend(defaultColors.rail, blend(background, textAnchor, 0.22), 0.74);
	const railDash = blend(defaultColors.railDash, lighten(background, 15), 0.84);
	const boundary = blend(defaultColors.boundary, blend(background, textAnchor, 0.18), 0.74);
	const aerowayLine = blend(
		defaultColors.aerowayLine,
		blend(background, structureAnchor, 0.18),
		0.72
	);
	const aerowayArea = blend(
		defaultColors.aerowayArea,
		blend(background, structureAnchor, 0.12),
		0.72
	);

	const placeLabel = ensureContrast(
		blend(defaultColors.placeLabel, textAnchor, 0.72),
		background,
		MIN_LABEL_CONTRAST
	);
	const roadLabel = ensureContrast(
		blend(defaultColors.roadLabel, textAnchor, 0.66),
		roadMajorFill,
		MIN_LABEL_CONTRAST
	);
	const waterLabel = ensureContrast(
		blend(defaultColors.waterLabel, blend(textAnchor, waterAnchor, 0.32), 0.66),
		water,
		MIN_LABEL_CONTRAST
	);

	const placeLabelHalo = createHalo(placeLabel, background, defaultColors.placeLabelHalo);
	const roadLabelHalo = createHalo(roadLabel, roadMajorFill, defaultColors.roadLabelHalo);
	const waterLabelHalo = createHalo(waterLabel, water, defaultColors.waterLabelHalo);

	return {
		background,
		park,
		residential,
		forest,
		ice,
		water,
		waterway,
		building,
		buildingOutline,
		path,
		roadMinor,
		roadMajorCasing,
		roadMajorFill,
		motorwayCasing,
		motorwayFill,
		rail,
		railDash,
		boundary,
		aerowayLine,
		aerowayArea,
		waterLabel,
		waterLabelHalo,
		roadLabel,
		roadLabelHalo,
		placeLabel,
		placeLabelHalo,
	};
}

function analyzeColor(color: string): PaletteColorAnalysis {
	const rgb = hexToRgb(color);
	return {
		color,
		hsl: rgbToHsl(rgb),
		luminance: getRelativeLuminance(rgb),
	};
}

function pickBackgroundAnchor(colors: PaletteColorAnalysis[]): PaletteColorAnalysis {
	const neutralCandidate = [ ...colors ]
		.filter(({ hsl }) => hsl.s <= 0.18)
		.sort((left, right) => right.luminance - left.luminance)[0];

	if (neutralCandidate) {
		return neutralCandidate;
	}

	return [ ...colors ].sort((left, right) => right.luminance - left.luminance)[0];
}

function pickDarkestColor(colors: PaletteColorAnalysis[]): PaletteColorAnalysis {
	return [ ...colors ].sort((left, right) => left.luminance - right.luminance)[0];
}

function pickWaterAnchor(colors: PaletteColorAnalysis[]): string {
	const blueCandidate = [ ...colors ]
		.filter(({ hsl }) => hsl.s >= 0.18 && isHueBetween(hsl.h, 170, 250))
		.sort((left, right) => right.hsl.s - left.hsl.s)[0];

	if (blueCandidate) {
		return blueCandidate.color;
	}

	const coolestCandidate = [ ...colors ]
		.filter(({ hsl }) => hsl.s >= 0.18)
		.sort((left, right) => hueDistance(left.hsl.h, 205) - hueDistance(right.hsl.h, 205))[0];

	return blend(coolestCandidate?.color ?? colors[0].color, '#4f8fcf', 0.48);
}

function pickLandAnchor(colors: PaletteColorAnalysis[]): string {
	const greenCandidate = [ ...colors ]
		.filter(({ hsl }) => hsl.s >= 0.16 && isHueBetween(hsl.h, 70, 170))
		.sort((left, right) => right.hsl.s - left.hsl.s)[0];

	if (greenCandidate) {
		return greenCandidate.color;
	}

	const naturalCandidate = [ ...colors ]
		.filter(({ hsl }) => hsl.s >= 0.12)
		.sort((left, right) => hueDistance(left.hsl.h, 110) - hueDistance(right.hsl.h, 110))[0];

	return blend(naturalCandidate?.color ?? colors[0].color, '#78a95b', 0.52);
}

function pickStructureAnchor(
	colors: PaletteColorAnalysis[],
	background: string,
	text: string
): string {
	const neutralCandidate = [ ...colors ]
		.filter(({ hsl }) => hsl.s <= 0.2)
		.sort((left, right) => Math.abs(left.hsl.l - 0.58) - Math.abs(right.hsl.l - 0.58))[0];

	if (neutralCandidate) {
		return neutralCandidate.color;
	}

	return blend(background, text, 0.32);
}

function blend(start: string, end: string, weight: number): string {
	const from = hexToRgb(start);
	const to = hexToRgb(end);
	const normalizedWeight = clamp(weight, 0, 1);

	return rgbToHex({
		r: Math.round(from.r + (to.r - from.r) * normalizedWeight),
		g: Math.round(from.g + (to.g - from.g) * normalizedWeight),
		b: Math.round(from.b + (to.b - from.b) * normalizedWeight),
	});
}

function lighten(color: string, amount: number): string {
	return blend(color, '#ffffff', clamp(amount / 100, 0, 1));
}

function darken(color: string, amount: number): string {
	return blend(color, '#000000', clamp(amount / 100, 0, 1));
}

function ensureContrast(color: string, surface: string, minimumContrast: number): string {
	let current = normalizePaletteHexColor(color) ?? '#000000';
	const normalizedSurface = normalizePaletteHexColor(surface) ?? '#ffffff';

	if (getContrastRatio(current, normalizedSurface) >= minimumContrast) {
		return current;
	}

	const surfaceLuminance = getRelativeLuminance(hexToRgb(normalizedSurface));
	const direction = surfaceLuminance > 0.55 ? '#000000' : '#ffffff';

	for (let step = 1; step <= 8; step += 1) {
		current = blend(current, direction, 0.18);
		if (getContrastRatio(current, normalizedSurface) >= minimumContrast) {
			return current;
		}
	}

	return getContrastRatio('#000000', normalizedSurface) > getContrastRatio('#ffffff', normalizedSurface)
		? '#000000'
		: '#ffffff';
}

function createHalo(label: string, surface: string, defaultHalo: string): string {
	const normalizedLabel = normalizePaletteHexColor(label) ?? '#000000';
	const normalizedSurface = normalizePaletteHexColor(surface) ?? '#ffffff';
	const labelLuminance = getRelativeLuminance(hexToRgb(normalizedLabel));
	const haloSeed = labelLuminance > 0.5
		? blend(normalizedSurface, '#000000', 0.8)
		: blend(normalizedSurface, '#ffffff', 0.82);
	const halo = ensureContrast(haloSeed, normalizedLabel, MIN_HALO_CONTRAST);

	return blend(defaultHalo, halo, 0.68);
}

function hueDistance(first: number, second: number): number {
	const distance = Math.abs(first - second);
	return Math.min(distance, 360 - distance);
}

function isHueBetween(hue: number, min: number, max: number): boolean {
	if (min <= max) {
		return hue >= min && hue <= max;
	}

	return hue >= min || hue <= max;
}

function getRelativeLuminance({ r, g, b }: RgbColor): number {
	const channels = [r, g, b].map((channel) => {
		const normalized = channel / 255;
		return normalized <= 0.03928
			? normalized / 12.92
			: ((normalized + 0.055) / 1.055) ** 2.4;
	});

	return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}

function hexToRgb(color: string): RgbColor {
	const normalized = normalizePaletteHexColor(color) ?? '#000000';
	const hex = normalized.slice(1);

	return {
		r: Number.parseInt(hex.slice(0, 2), 16),
		g: Number.parseInt(hex.slice(2, 4), 16),
		b: Number.parseInt(hex.slice(4, 6), 16),
	};
}

function rgbToHex({ r, g, b }: RgbColor): string {
	return `#${[r, g, b]
		.map((channel) => clamp(Math.round(channel), 0, 255).toString(16).padStart(2, '0'))
		.join('')}`;
}

function rgbToHsl({ r, g, b }: RgbColor): HslColor {
	const red = r / 255;
	const green = g / 255;
	const blue = b / 255;
	const max = Math.max(red, green, blue);
	const min = Math.min(red, green, blue);
	const delta = max - min;
	const lightness = (max + min) / 2;

	if (delta === 0) {
		return { h: 0, s: 0, l: lightness };
	}

	const saturation = lightness > 0.5
		? delta / (2 - max - min)
		: delta / (max + min);
	let hue = 0;

	switch (max) {
		case red:
			hue = (green - blue) / delta + (green < blue ? 6 : 0);
			break;
		case green:
			hue = (blue - red) / delta + 2;
			break;
		default:
			hue = (red - green) / delta + 4;
			break;
	}

	return {
		h: hue * 60,
		s: saturation,
		l: lightness,
	};
}

function clamp(value: number, min: number, max: number): number {
	return Math.min(max, Math.max(min, value));
}
