import { describe, expect, test } from 'bun:test';
import { getDefaultFitBoundsPadding } from '../../src/map/default-fit-padding';
import { normalizeMapConfig } from '../../src/map/defaults';
import { syncTouchZoomInteraction } from '../../src/map/interactions';
import { syncViewport } from '../../src/map/runtime';
import { getSearchPanelDesktopPadding } from '../../src/map/search-panel-layout';

function createTouchZoomRotateSpy() {
	const calls: string[] = [];

	return {
		calls,
		map: {
			touchZoomRotate: {
				enable: () => {
					calls.push('enable');
				},
				disable: () => {
					calls.push('disable');
				},
				disableRotation: () => {
					calls.push('disableRotation');
				},
			},
		},
	};
}

describe('map touch zoom interaction', () => {
	test('enables touch zoom and disables rotation when mobile two-finger zoom is on', () => {
		const spy = createTouchZoomRotateSpy();
		const config = normalizeMapConfig({
			mobileTwoFingerZoom: true,
		});

		syncTouchZoomInteraction(spy.map as never, config);

		expect(spy.calls).toEqual([ 'enable', 'disableRotation' ]);
	});

	test('disables touch zoom when mobile two-finger zoom is off', () => {
		const spy = createTouchZoomRotateSpy();
		const config = normalizeMapConfig({
			mobileTwoFingerZoom: false,
		});

		syncTouchZoomInteraction(spy.map as never, config);

		expect(spy.calls).toEqual([ 'disable' ]);
	});

	test('disables touch zoom when the map is non-interactive even if mobile zoom is requested', () => {
		const spy = createTouchZoomRotateSpy();
		const config = normalizeMapConfig({
			interactive: false,
			mobileTwoFingerZoom: true,
		});

		syncTouchZoomInteraction(spy.map as never, config);

		expect(spy.calls).toEqual([ 'disable' ]);
	});

	test('switches from enabled to disabled when the config changes', () => {
		const spy = createTouchZoomRotateSpy();

		syncTouchZoomInteraction(
			spy.map as never,
			normalizeMapConfig({
				mobileTwoFingerZoom: true,
			})
		);
		syncTouchZoomInteraction(
			spy.map as never,
			normalizeMapConfig({
				mobileTwoFingerZoom: false,
			})
		);

		expect(spy.calls).toEqual([ 'enable', 'disableRotation', 'disable' ]);
	});

	test('derives desktop selection padding from the search panel width and outer margins', () => {
		const config = normalizeMapConfig({
			searchPanelWidth: '360px',
			searchPanelOuterMargin: {
				top: '10px',
				right: '30px',
				bottom: '18px',
				left: '18px',
			},
		});

		expect(getSearchPanelDesktopPadding(config)).toBe(408);
	});

	test('returns zero desktop selection padding when search is disabled', () => {
		const config = normalizeMapConfig({
			allowSearch: false,
			searchPanelWidth: '360px',
			searchPanelOuterMargin: {
				top: '10px',
				right: '30px',
				bottom: '18px',
				left: '18px',
			},
		});

		expect(getSearchPanelDesktopPadding(config)).toBe(0);
	});

	test('returns the existing 48px fit padding on desktop', () => {
		const config = normalizeMapConfig({
			searchPanelOuterMargin: {
				top: '12px',
				right: '18px',
				bottom: '24px',
				left: '30px',
			},
			creditsOuterMargin: {
				top: '10px',
				right: '14px',
				bottom: '16px',
				left: '20px',
			},
		});

		expect(getDefaultFitBoundsPadding(config, 1024)).toEqual({
			top: 48,
			right: 48,
			bottom: 48,
			left: 48,
		});
	});

	test('uses configured mobile top and bottom fit padding when attribution is shown', () => {
		const config = normalizeMapConfig({
			searchPanelOuterMargin: {
				top: '12px',
				right: '18px',
				bottom: '24px',
				left: '30px',
			},
			creditsOuterMargin: {
				top: '10px',
				right: '14px',
				bottom: '14px',
				left: '20px',
			},
			showAttribution: true,
		});

		expect(getDefaultFitBoundsPadding(config, 500)).toEqual({
			top: 60,
			right: 48,
			bottom: 56,
			left: 48,
		});
	});

	test('falls back to 48px mobile bottom fit padding when attribution is hidden', () => {
		const config = normalizeMapConfig({
			searchPanelOuterMargin: {
				top: '12px',
				right: '18px',
				bottom: '24px',
				left: '30px',
			},
			creditsOuterMargin: {
				top: '10px',
				right: '14px',
				bottom: '14px',
				left: '20px',
			},
			showAttribution: false,
		});

		expect(getDefaultFitBoundsPadding(config, 500)).toEqual({
			top: 60,
			right: 48,
			bottom: 48,
			left: 48,
		});
	});

	test('treats non-px mobile fit padding inputs as zero before bottom fallback', () => {
		const config = normalizeMapConfig({
			searchPanelOuterMargin: {
				top: '1rem',
				right: '18px',
				bottom: '24px',
				left: '30px',
			},
			creditsOuterMargin: {
				top: '10px',
				right: '14px',
				bottom: '2rem',
				left: '20px',
			},
			showAttribution: true,
		});

		expect(getDefaultFitBoundsPadding(config, 500)).toEqual({
			top: 0,
			right: 48,
			bottom: 0,
			left: 48,
		});
	});

	test('syncViewport passes the computed mobile fit padding to fitBounds for multi-point maps', () => {
		const fitBoundsCalls: Array<{ padding: unknown }> = [];
		const config = normalizeMapConfig({
			showAttribution: true,
			searchPanelOuterMargin: {
				top: '12px',
				right: '18px',
				bottom: '24px',
				left: '30px',
			},
			creditsOuterMargin: {
				top: '10px',
				right: '14px',
				bottom: '14px',
				left: '20px',
			},
			locations: [
				{ id: 1, title: 'Berlin', lat: 52.52, lng: 13.405 },
				{ id: 2, title: 'Hamburg', lat: 53.5511, lng: 9.9937 },
			],
		});

		syncViewport(
			{
				easeTo() {},
				fitBounds(_bounds, options) {
					fitBoundsCalls.push({ padding: options.padding });
				},
				jumpTo() {},
			} as never,
			config,
			500
		);

		expect(fitBoundsCalls).toEqual([
			{
				padding: {
					top: 60,
					right: 48,
					bottom: 56,
					left: 48,
				},
			},
		]);
	});
});
