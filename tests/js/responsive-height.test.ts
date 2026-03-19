import { describe, expect, test } from 'bun:test';
import {
	getActiveHeightCssValue,
	isTabletSearchSplitViewport,
	MOBILE_BREAKPOINT,
	TABLET_SEARCH_PANEL_BREAKPOINT_MAX,
} from '../../src/map/responsive';

describe('responsive map height helpers', () => {
	test('uses the desktop height above the mobile breakpoint', () => {
		expect(
			getActiveHeightCssValue(
				{
					heightCssValue: '420px',
					heightMobileCssValue: '280px',
				},
				MOBILE_BREAKPOINT + 1
			)
		).toBe('420px');
	});

	test('uses the mobile height at or below the mobile breakpoint', () => {
		expect(
			getActiveHeightCssValue(
				{
					heightCssValue: '420px',
					heightMobileCssValue: '280px',
				},
				MOBILE_BREAKPOINT
			)
		).toBe('280px');
	});

	test('treats widths between 701px and 900px as the tablet split range', () => {
		expect(isTabletSearchSplitViewport(MOBILE_BREAKPOINT)).toBe(false);
		expect(isTabletSearchSplitViewport(MOBILE_BREAKPOINT + 1)).toBe(true);
		expect(
			isTabletSearchSplitViewport(TABLET_SEARCH_PANEL_BREAKPOINT_MAX)
		).toBe(true);
		expect(
			isTabletSearchSplitViewport(TABLET_SEARCH_PANEL_BREAKPOINT_MAX + 1)
		).toBe(false);
	});
});
