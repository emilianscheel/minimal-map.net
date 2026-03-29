import { describe, expect, test } from 'bun:test';
import type { StylePaletteEntry } from '../../src/types';
import { DEFAULT_POSITRON_THEME_COLORS } from '../../src/lib/styles/defaultThemeColors';
import {
	deriveThemeFromPalette,
	getContrastRatio,
	normalizePaletteHexColor,
} from '../../src/lib/styles/deriveThemeFromPalette';

function createPalette(colors: string[]): StylePaletteEntry[] {
	return colors.map((color, index) => ({
		name: `Color ${index + 1}`,
		slug: `color-${index + 1}`,
		color,
	}));
}

function colorDistance(first: string, second: string): number {
	const normalize = (value: string) => value.replace('#', '');
	const left = normalize(first);
	const right = normalize(second);
	const leftRgb = [
		Number.parseInt(left.slice(0, 2), 16),
		Number.parseInt(left.slice(2, 4), 16),
		Number.parseInt(left.slice(4, 6), 16),
	];
	const rightRgb = [
		Number.parseInt(right.slice(0, 2), 16),
		Number.parseInt(right.slice(2, 4), 16),
		Number.parseInt(right.slice(4, 6), 16),
	];

	return Math.sqrt(
		(leftRgb[0] - rightRgb[0]) ** 2 +
		(leftRgb[1] - rightRgb[1]) ** 2 +
		(leftRgb[2] - rightRgb[2]) ** 2
	);
}

function hueOf(color: string): number {
	const normalized = color.replace('#', '');
	const [red, green, blue] = [0, 2, 4].map((index) =>
		Number.parseInt(normalized.slice(index, index + 2), 16) / 255
	);
	const max = Math.max(red, green, blue);
	const min = Math.min(red, green, blue);
	const delta = max - min;

	if (delta === 0) {
		return 0;
	}

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

	return hue * 60;
}

describe('deriveThemeFromPalette', () => {
	test('produces a complete theme from a full palette', () => {
		const theme = deriveThemeFromPalette(
			createPalette(['#f8f4ec', '#1f2933', '#5b8def', '#7aa95c', '#d97706'])
		);

		expect(Object.keys(theme).sort()).toEqual(
			Object.keys(DEFAULT_POSITRON_THEME_COLORS).sort()
		);
		expect(theme.background).toMatch(/^#[\da-f]{6}$/);
		expect(theme.water).toMatch(/^#[\da-f]{6}$/);
		expect(theme.park).toMatch(/^#[\da-f]{6}$/);
	});

	test('creates sensible water and land anchors even without blue or green inputs', () => {
		const theme = deriveThemeFromPalette(
			createPalette(['#fff1db', '#201a1a', '#c95a49', '#c98f49'])
		);

		expect(theme.water).not.toBe(theme.background);
		expect(theme.park).not.toBe(theme.background);
		expect(theme.waterway).not.toBe(theme.water);
		expect(theme.forest).not.toBe(theme.park);
		expect(hueOf(theme.park)).toBeLessThan(70);
		expect(hueOf(theme.forest)).toBeLessThan(70);
	});

	test('preserves the character of a WordPress palette instead of forcing synthetic map hues', () => {
		const theme = deriveThemeFromPalette(
			createPalette(['#000000', '#b7c4d1', '#fafaf9', '#f4b1c6', '#db3a34'])
		);

		expect(colorDistance(theme.background, '#fafaf9')).toBeLessThan(20);
		expect(colorDistance(theme.water, '#b7c4d1')).toBeLessThan(
			colorDistance(theme.water, '#4f8fcf')
		);
		expect(
			Math.min(
				colorDistance(theme.park, '#f4b1c6'),
				colorDistance(theme.park, '#db3a34')
			)
		).toBeLessThan(colorDistance(theme.park, '#78a95b'));
		expect(
			Math.min(
				colorDistance(theme.forest, '#f4b1c6'),
				colorDistance(theme.forest, '#db3a34')
			)
		).toBeLessThan(colorDistance(theme.forest, '#78a95b'));
	});

	test('keeps loud brand palettes grounded against the Positron defaults', () => {
		const theme = deriveThemeFromPalette(
			createPalette(['#ff006e', '#8338ec', '#3a86ff', '#fb5607', '#ffbe0b'])
		);

		expect(theme.background).not.toBe('#ff006e');
		expect(theme.path).not.toBe('#8338ec');
		expect(theme.roadMinor).not.toBe('#fb5607');
		expect(theme.placeLabel).not.toBe('#ffbe0b');
	});

	test('ensures label and halo contrast remains readable', () => {
		const theme = deriveThemeFromPalette(
			createPalette(['#ece7df', '#202124', '#6a6cf6', '#b84c7a'])
		);

		expect(getContrastRatio(theme.placeLabel, theme.background)).toBeGreaterThanOrEqual(4.5);
		expect(getContrastRatio(theme.roadLabel, theme.roadMajorFill)).toBeGreaterThanOrEqual(4.5);
		expect(getContrastRatio(theme.waterLabel, theme.water)).toBeGreaterThanOrEqual(4.5);
		expect(getContrastRatio(theme.placeLabelHalo, theme.placeLabel)).toBeGreaterThanOrEqual(2.25);
		expect(getContrastRatio(theme.roadLabelHalo, theme.roadLabel)).toBeGreaterThanOrEqual(2.25);
		expect(getContrastRatio(theme.waterLabelHalo, theme.waterLabel)).toBeGreaterThanOrEqual(2.25);
	});
});

describe('normalizePaletteHexColor', () => {
	test('normalizes three-digit hex colors and rejects invalid values', () => {
		expect(normalizePaletteHexColor('#AbC')).toBe('#aabbcc');
		expect(normalizePaletteHexColor('#112233')).toBe('#112233');
		expect(normalizePaletteHexColor('rgb(0,0,0)')).toBeNull();
	});
});
