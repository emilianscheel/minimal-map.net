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
