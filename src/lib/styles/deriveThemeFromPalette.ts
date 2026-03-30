import type {
	StylePaletteEntry,
	StylePaletteTemplateVariant,
	StyleThemeColors,
} from '../../types';
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
	index: number;
	luminance: number;
}

interface DeriveThemeFromPaletteOptions {
	accentVariant?: StylePaletteTemplateVariant;
}

interface AccentAnchors {
	waterAnchor: string;
	landAnchor: string;
	transportAnchor: string;
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
	defaultColors: StyleThemeColors = DEFAULT_POSITRON_THEME_COLORS,
	options: DeriveThemeFromPaletteOptions = {}
): StyleThemeColors {
	const analyzedPalette = palette
		.map((entry, index) => {
			const color = normalizePaletteHexColor(entry.color);
			return color ? analyzeColor(color, index) : null;
		})
		.filter((color): color is PaletteColorAnalysis => Boolean(color));

	if (analyzedPalette.length === 0) {
		return { ...defaultColors };
	}

	const backgroundAnchorAnalysis = pickBackgroundAnchor(analyzedPalette);
	const textAnchorAnalysis = pickDarkestColor(analyzedPalette);
	const backgroundAnchor = backgroundAnchorAnalysis.color;
	const textAnchor = textAnchorAnalysis.color;
	const accentCandidates = getAccentCandidates(
		analyzedPalette,
		backgroundAnchorAnalysis,
		textAnchorAnalysis
	);
	const structureAnchor = pickStructureAnchor(analyzedPalette, backgroundAnchor, textAnchor);
	const baseWaterAnchor = pickWaterAnchor(accentCandidates, structureAnchor);
	const baseLandAnchor = pickLandAnchor(accentCandidates, baseWaterAnchor, structureAnchor);
	const baseTransportAnchor = pickTransportAnchor(
		accentCandidates,
		baseWaterAnchor,
		baseLandAnchor,
		structureAnchor
	);
	const normalizedAccentAnchors = applyAccentVariant(
		{
			waterAnchor: baseWaterAnchor,
			landAnchor: baseLandAnchor,
			transportAnchor: baseTransportAnchor,
		},
		options.accentVariant ?? 'default'
	);
	const finalWaterAnchor = normalizedAccentAnchors.waterAnchor;
	const finalLandAnchor = normalizedAccentAnchors.landAnchor;
	const finalTransportAnchor = normalizedAccentAnchors.transportAnchor;

	const background = blend(defaultColors.background, lighten(backgroundAnchor, 1), 0.72);
	const residential = blend(
		defaultColors.residential,
		blend(background, structureAnchor, 0.16),
		0.64
	);
	const park = blend(defaultColors.park, blend(background, finalLandAnchor, 0.36), 0.9);
	const forest = blend(defaultColors.forest, blend(background, finalLandAnchor, 0.52), 0.94);
	const ice = blend(defaultColors.ice, blend(background, finalWaterAnchor, 0.16), 0.8);
	const water = blend(defaultColors.water, blend(background, finalWaterAnchor, 0.54), 0.94);
	const waterway = blend(defaultColors.waterway, darken(blend(background, finalWaterAnchor, 0.62), 8), 0.92);
	const building = blend(defaultColors.building, blend(background, structureAnchor, 0.2), 0.74);
	const buildingOutline = blend(defaultColors.buildingOutline, darken(building, 10), 0.78);
	const path = blend(defaultColors.path, lighten(background, 9), 0.8);
	const roadMinor = blend(defaultColors.roadMinor, lighten(background, 12), 0.86);
	const roadMajorCasing = blend(
		defaultColors.roadMajorCasing,
		blend(background, finalTransportAnchor, 0.1),
		0.76
	);
	const roadMajorFill = blend(defaultColors.roadMajorFill, lighten(background, 10), 0.86);
	const motorwayCasing = blend(
		defaultColors.motorwayCasing,
		blend(background, finalTransportAnchor, 0.28),
		0.84
	);
	const motorwayFill = blend(
		defaultColors.motorwayFill,
		blend(background, finalTransportAnchor, 0.4),
		0.88
	);
	const rail = blend(defaultColors.rail, blend(background, textAnchor, 0.22), 0.74);
	const railDash = blend(defaultColors.railDash, lighten(background, 15), 0.84);
	const boundary = blend(defaultColors.boundary, blend(background, finalTransportAnchor, 0.18), 0.8);
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
		blend(defaultColors.waterLabel, blend(textAnchor, finalWaterAnchor, 0.32), 0.66),
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

function applyAccentVariant(
	anchors: AccentAnchors,
	variant: StylePaletteTemplateVariant
): AccentAnchors {
	switch (variant) {
		case 'swap-1':
			return {
				waterAnchor: anchors.landAnchor,
				landAnchor: anchors.transportAnchor,
				transportAnchor: anchors.waterAnchor,
			};
		case 'swap-2':
			return {
				waterAnchor: anchors.transportAnchor,
				landAnchor: anchors.waterAnchor,
				transportAnchor: anchors.landAnchor,
			};
		case 'default':
		default:
			return anchors;
	}
}

function analyzeColor(color: string, index: number): PaletteColorAnalysis {
	const rgb = hexToRgb(color);
	return {
		color,
		hsl: rgbToHsl(rgb),
		index,
		luminance: getRelativeLuminance(rgb),
	};
}

function pickBackgroundAnchor(colors: PaletteColorAnalysis[]): PaletteColorAnalysis {
	const neutralCandidate = [ ...colors ]
		.filter(({ hsl, luminance }) => hsl.s <= 0.18 && luminance >= 0.45)
		.sort((left, right) => right.luminance - left.luminance)[0];

	if (neutralCandidate) {
		return neutralCandidate;
	}

	return [ ...colors ].sort((left, right) => right.luminance - left.luminance)[0];
}

function pickDarkestColor(colors: PaletteColorAnalysis[]): PaletteColorAnalysis {
	return [ ...colors ].sort((left, right) => left.luminance - right.luminance)[0];
}

function getAccentCandidates(
	colors: PaletteColorAnalysis[],
	background: PaletteColorAnalysis,
	text: PaletteColorAnalysis
): PaletteColorAnalysis[] {
	return colors.filter((color) => {
		if (color.color === background.color || color.color === text.color) {
			return false;
		}

		return color.hsl.s >= 0.08 ||
			colorDistance(color.color, background.color) >= 28 ||
			colorDistance(color.color, text.color) >= 28;
	});
}

function pickWaterAnchor(colors: PaletteColorAnalysis[], fallback: string): string {
	if (colors.length === 0) {
		return fallback;
	}

	const preferredCoolCandidate = [ ...colors ]
		.filter(({ hsl }) => isHueBetween(hsl.h, 170, 250))
		.sort((left, right) => {
			const leftScore = (1 - hueDistance(left.hsl.h, 205) / 180) * 100 + left.hsl.s * 35 - Math.abs(left.hsl.l - 0.62) * 20;
			const rightScore = (1 - hueDistance(right.hsl.h, 205) / 180) * 100 + right.hsl.s * 35 - Math.abs(right.hsl.l - 0.62) * 20;
			return rightScore - leftScore || left.index - right.index;
		})[0];

	if (preferredCoolCandidate) {
		return preferredCoolCandidate.color;
	}

	return [ ...colors ]
		.sort((left, right) => {
			const leftScore = (1 - hueDistance(left.hsl.h, 205) / 180) * 100 + left.hsl.s * 30 - Math.abs(left.hsl.l - 0.62) * 18;
			const rightScore = (1 - hueDistance(right.hsl.h, 205) / 180) * 100 + right.hsl.s * 30 - Math.abs(right.hsl.l - 0.62) * 18;
			return rightScore - leftScore || left.index - right.index;
		})[0]?.color ?? fallback;
}

function pickLandAnchor(
	colors: PaletteColorAnalysis[],
	waterAnchor: string,
	fallback: string
): string {
	if (colors.length === 0) {
		return fallback;
	}

	const greenCandidate = [ ...colors ]
		.filter(({ hsl }) => hsl.s >= 0.1 && isHueBetween(hsl.h, 70, 170))
		.sort((left, right) => right.hsl.s - left.hsl.s || left.index - right.index)[0];

	if (greenCandidate) {
		return greenCandidate.color;
	}

	const distinctCandidates = colors.filter((candidate) => candidate.color !== waterAnchor);
	const scoredCandidatePool = distinctCandidates.length > 0 ? distinctCandidates : colors;
	const waterAnalysis = analyzeColor(waterAnchor, -1);

	return [ ...scoredCandidatePool ]
		.sort((left, right) => {
			const leftScore = hueDistance(left.hsl.h, waterAnalysis.hsl.h) + left.hsl.s * 60 - Math.abs(left.hsl.l - 0.6) * 14;
			const rightScore = hueDistance(right.hsl.h, waterAnalysis.hsl.h) + right.hsl.s * 60 - Math.abs(right.hsl.l - 0.6) * 14;
			return rightScore - leftScore || left.index - right.index;
		})[0]?.color ?? fallback;
}

function pickTransportAnchor(
	colors: PaletteColorAnalysis[],
	waterAnchor: string,
	landAnchor: string,
	fallback: string
): string {
	const candidatePool = colors.filter(
		(candidate) => candidate.color !== waterAnchor && candidate.color !== landAnchor
	);

	if (candidatePool.length > 0) {
		return [ ...candidatePool ]
			.sort((left, right) => {
				const leftScore = left.hsl.s * 70 - Math.abs(left.hsl.l - 0.55) * 18;
				const rightScore = right.hsl.s * 70 - Math.abs(right.hsl.l - 0.55) * 18;
				return rightScore - leftScore || left.index - right.index;
			})[0].color;
	}

	const fallbackPool = colors.filter((candidate) => candidate.color !== waterAnchor);
	return fallbackPool[0]?.color ?? landAnchor ?? fallback;
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

function colorDistance(first: string, second: string): number {
	const left = hexToRgb(first);
	const right = hexToRgb(second);

	return Math.sqrt(
		(left.r - right.r) ** 2 +
		(left.g - right.g) ** 2 +
		(left.b - right.b) ** 2
	);
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
