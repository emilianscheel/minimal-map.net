import { afterEach, describe, expect, test } from 'bun:test';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { JSDOM } from 'jsdom';
import { createElement, createRoot } from '@wordpress/element';
import AnalyticsView from '../../src/admin/analytics';
import type { AnalyticsController } from '../../src/admin/analytics/types';
import type { AnalyticsTrendPoint } from '../../src/types';

const originalGlobals = {
	document: globalThis.document,
	HTMLElement: globalThis.HTMLElement,
	navigator: globalThis.navigator,
	window: globalThis.window,
};

function setGlobalDom(dom: JSDOM): void {
	globalThis.window = dom.window as never;
	globalThis.document = dom.window.document as never;
	globalThis.navigator = dom.window.navigator as never;
	globalThis.HTMLElement = dom.window.HTMLElement as never;
	globalThis.window.matchMedia =
		globalThis.window.matchMedia ??
		(() =>
			({
				addEventListener() {},
				addListener() {},
				dispatchEvent() {
					return false;
				},
				matches: false,
				media: '',
				onchange: null,
				removeEventListener() {},
				removeListener() {},
			}) as MediaQueryList);
	globalThis.window.requestAnimationFrame =
		globalThis.window.requestAnimationFrame ??
		((callback: FrameRequestCallback) => globalThis.window.setTimeout(callback, 0));
	globalThis.window.cancelAnimationFrame =
		globalThis.window.cancelAnimationFrame ??
		((handle: number) => globalThis.window.clearTimeout(handle));
	globalThis.window.ResizeObserver =
		globalThis.window.ResizeObserver ??
		class {
			disconnect() {}
			observe() {}
			unobserve() {}
		};
	globalThis.ResizeObserver =
		globalThis.ResizeObserver ?? globalThis.window.ResizeObserver;
	globalThis.HTMLIFrameElement =
		globalThis.HTMLIFrameElement ?? globalThis.window.HTMLIFrameElement;
	globalThis.requestAnimationFrame =
		globalThis.requestAnimationFrame ?? globalThis.window.requestAnimationFrame.bind(globalThis.window);
	globalThis.cancelAnimationFrame =
		globalThis.cancelAnimationFrame ?? globalThis.window.cancelAnimationFrame.bind(globalThis.window);
}

async function flushRender(): Promise<void> {
	await new Promise((resolve) => setTimeout(resolve, 0));
}

function createTestCache(dom: JSDOM) {
	return createCache({
		key: 'minimal-map-test',
		container: dom.window.document.head,
	});
}

function createSeries(values: Array<number | null>): AnalyticsTrendPoint[] {
	return values.map((value, index) => ({
		date: `2026-03-${`${index + 1}`.padStart(2, '0')}`,
		value,
	}));
}

function createControllerStub(
	overrides: Partial<AnalyticsController> = {}
): AnalyticsController {
	return {
		enabled: true,
		headerAction: null,
		isConfirmEnableModalOpen: false,
		isLoading: false,
		isSavingSettings: false,
		loadError: null,
		notice: null,
		queries: [
			{
				id: 1,
				query_text: 'Berlin Mitte',
				query_type: 'text',
				result_count: 3,
				nearest_distance_meters: null,
				occurred_at_gmt: '2026-03-21T08:00:00+00:00',
			},
		],
		range: '30d',
		summary: {
			totalSearches: 12,
			searchesToday: 4,
			zeroResultSearches: 2,
			averageNearestDistanceMeters: 840,
			successRate: 83,
			series: {
				totalSearches: createSeries([1, 3, 2, 5]),
				searchesToday: createSeries([1, 3, 2, 5]),
				zeroResultSearches: createSeries([0, 1, 0, 1]),
				averageNearestDistanceMeters: createSeries([500, 920, 0, 940]),
				successRate: createSeries([100, 67, 100, 80]),
			},
			breakdowns: {
				queryTypeMix: [
					{ key: 'text', label: 'Text', value: 7 },
					{ key: 'address', label: 'Address', value: 3 },
					{ key: 'coordinates', label: 'Coordinates', value: 1 },
					{ key: 'live_location', label: 'Live location', value: 1 },
				],
				resultDistribution: [
					{ key: '0', label: '0 results', value: 2 },
					{ key: '1', label: '1 result', value: 3 },
					{ key: '2-5', label: '2-5 results', value: 5 },
					{ key: '6+', label: '6+ results', value: 2 },
				],
				topQueries: [
					{ key: 'Berlin Mitte', label: 'Berlin Mitte', value: 4 },
					{ key: 'Hamburg', label: 'Hamburg', value: 3 },
				],
				topZeroResultQueries: [
					{ key: 'Munich', label: 'Munich', value: 2 },
				],
			},
		},
		totalItems: 1,
		totalPages: 1,
		view: {
			type: 'table',
			page: 1,
			perPage: 9,
			titleField: 'query_text',
			fields: ['query_type', 'result_count', 'nearest_distance_meters', 'occurred_at_gmt'],
			layout: {
				enableMoving: false,
			},
		},
		dismissNotice() {},
		onChangeRange() {},
		onChangeView() {},
		onCloseConfirmEnableModal() {},
		onConfirmEnableAnalytics: async () => {},
		onToggleAnalytics() {},
		...overrides,
	};
}

afterEach(() => {
	globalThis.window = originalGlobals.window;
	globalThis.document = originalGlobals.document;
	globalThis.navigator = originalGlobals.navigator;
	globalThis.HTMLElement = originalGlobals.HTMLElement;
	delete (globalThis as { HTMLIFrameElement?: typeof window.HTMLIFrameElement }).HTMLIFrameElement;
	delete (globalThis as { ResizeObserver?: typeof window.ResizeObserver }).ResizeObserver;
	delete (globalThis as { requestAnimationFrame?: FrameRequestCallback }).requestAnimationFrame;
	delete (globalThis as { cancelAnimationFrame?: (handle: number) => void }).cancelAnimationFrame;
});

describe('AnalyticsView', () => {
	test('renders the KPI cards and analytics table content', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);

		root.render(
			createElement(
				CacheProvider,
				{ value: createTestCache(dom) },
				createElement(AnalyticsView, {
					controller: createControllerStub(),
					siteLocale: 'en-US',
					siteTimezone: 'Europe/Berlin',
				})
			)
		);

		await flushRender();

		expect(dom.window.document.body.textContent).toContain('Total searches');
		expect(dom.window.document.body.textContent).toContain('Success rate');
		expect(dom.window.document.body.textContent).toContain('Average distance to nearest store');
		expect(dom.window.document.body.textContent).toContain('Top zero-result searches');
		expect(dom.window.document.body.textContent).toContain('Query type mix');
		expect(dom.window.document.body.textContent).toContain('Result distribution');
		expect(dom.window.document.body.textContent).toContain('Berlin Mitte');
		expect(dom.window.document.body.textContent).not.toContain('All tracked search queries across the retention window.');

		root.unmount();
	});

	test('reveals a sparkline tooltip on point focus', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);

		root.render(
			createElement(
				CacheProvider,
				{ value: createTestCache(dom) },
				createElement(AnalyticsView, {
					controller: createControllerStub(),
					siteLocale: 'en-US',
					siteTimezone: 'Europe/Berlin',
				})
			)
		);

		await flushRender();

		const firstHotspot = dom.window.document.querySelector(
			'.minimal-map-admin__analytics-sparkline-hotspot'
		) as HTMLButtonElement;

		firstHotspot.focus();
		firstHotspot.dispatchEvent(new dom.window.FocusEvent('focus', { bubbles: true }));
		await flushRender();

		expect(dom.window.document.body.textContent).toContain('2026-03-01');
		expect(dom.window.document.body.textContent).toContain('1');

		root.unmount();
	});

	test('renders the empty state and enable-warning modal', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);

		root.render(
			createElement(
				CacheProvider,
				{ value: createTestCache(dom) },
				createElement(AnalyticsView, {
					controller: createControllerStub({
						enabled: false,
						isConfirmEnableModalOpen: true,
						queries: [],
						summary: {
							totalSearches: 0,
							searchesToday: 0,
							zeroResultSearches: 0,
							averageNearestDistanceMeters: null,
							successRate: null,
							series: {
								totalSearches: createSeries([0, 0, 0, 0]),
								searchesToday: createSeries([0, 0, 0, 0]),
								zeroResultSearches: createSeries([0, 0, 0, 0]),
								averageNearestDistanceMeters: createSeries([0, 0, 0, 0]),
								successRate: createSeries([null, null, null, null]),
							},
							breakdowns: {
								queryTypeMix: [],
								resultDistribution: [],
								topQueries: [],
								topZeroResultQueries: [],
							},
						},
						totalItems: 0,
					}),
					siteLocale: 'en-US',
					siteTimezone: 'Europe/Berlin',
				})
			)
		);

		await flushRender();

		expect(dom.window.document.body.textContent).toContain('Analytics tracking is disabled');
		expect(dom.window.document.body.textContent).toContain('You may need to update your privacy terms');

		root.unmount();
	});
});
