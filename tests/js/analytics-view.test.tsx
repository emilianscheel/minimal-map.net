import { afterEach, describe, expect, test } from 'bun:test';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { JSDOM } from 'jsdom';
import { createElement, createRoot } from '@wordpress/element';
import AnalyticsView from '../../src/admin/analytics';
import type { AnalyticsController } from '../../src/admin/analytics/types';
import { createDefaultAnalyticsView } from '../../src/admin/analytics/constants';
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
		complianzEnabled: false,
		headerAction: null,
		isConfirmEnableModalOpen: false,
		isLoading: false,
		isLoadingSummary: false,
		isSavingSettings: false,
		loadError: null,
		notice: null,
		range: '30d',
		summaries: {
			search: {
				category: 'search',
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
			selection: {
				category: 'selection',
				totalSelections: 5,
				conversionRate: 41.7,
				series: {
					totalSelections: createSeries([1, 0, 2, 2]),
					conversionRate: createSeries([100, 0, 50, 40]),
				},
				breakdowns: {
					sourceMix: [
						{ key: 'search_panel', label: 'Search panel', value: 3 },
						{ key: 'map_marker', label: 'Map marker', value: 2 },
					],
					topLocations: [
						{ key: 'Berlin Mitte', label: 'Berlin Mitte', value: 3 },
						{ key: 'Hamburg Port', label: 'Hamburg Port', value: 2 },
					],
				},
			},
			action: {
				category: 'action',
				totalActions: 9,
				series: {
					totalActions: createSeries([1, 2, 3, 3]),
				},
				breakdowns: {
					actionTypeMix: [
						{ key: 'website', label: 'Website', value: 4 },
						{ key: 'telephone', label: 'Phone', value: 3 },
						{ key: 'google_maps', label: 'Google Maps', value: 2 },
					],
					sourceMix: [
						{ key: 'search_panel', label: 'Search panel', value: 6 },
						{ key: 'in_map_card', label: 'In-map card', value: 3 },
					],
					topLocations: [
						{ key: 'Berlin Mitte', label: 'Berlin Mitte', value: 5 },
						{ key: 'Hamburg Port', label: 'Hamburg Port', value: 4 },
					],
				},
			},
		},
		tables: {
			search: {
				queries: [
					{
						id: 1,
						event_category: 'search',
						query_text: 'Berlin Mitte',
						query_type: 'text',
						result_count: 3,
						nearest_distance_meters: null,
						location_id: null,
						location_title: '',
						interaction_source: '',
						action_type: '',
						action_target: '',
						occurred_at_gmt: '2026-03-21T08:00:00+00:00',
					},
				],
				totalItems: 1,
				totalPages: 1,
				view: createDefaultAnalyticsView('search'),
			},
			selection: {
				queries: [
					{
						id: 2,
						event_category: 'selection',
						query_text: 'Berlin',
						query_type: 'text',
						result_count: 0,
						nearest_distance_meters: null,
						location_id: 1,
						location_title: 'Berlin Mitte',
						interaction_source: 'search_panel',
						action_type: '',
						action_target: '',
						occurred_at_gmt: '2026-03-21T08:05:00+00:00',
					},
				],
				totalItems: 1,
				totalPages: 1,
				view: createDefaultAnalyticsView('selection'),
			},
			action: {
				queries: [
					{
						id: 3,
						event_category: 'action',
						query_text: '',
						query_type: 'text',
						result_count: 0,
						nearest_distance_meters: null,
						location_id: 1,
						location_title: 'Berlin Mitte',
						interaction_source: 'in_map_card',
						action_type: 'website',
						action_target: 'example.com',
						occurred_at_gmt: '2026-03-21T08:06:00+00:00',
					},
				],
				totalItems: 1,
				totalPages: 1,
				view: createDefaultAnalyticsView('action'),
			},
		},
		dismissNotice() {},
		onChangeRange() {},
		onChangeView() {},
		onCloseConfirmEnableModal() {},
		onConfirmEnableAnalytics: async () => {},
		onToggleAnalytics() {},
		onToggleComplianz() {},
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
	test('renders search, selection, and action sections', async () => {
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

		expect(dom.window.document.body.textContent).toContain('Search');
		expect(dom.window.document.body.textContent).toContain('Selection');
		expect(dom.window.document.body.textContent).toContain('Action');
		expect(dom.window.document.body.textContent).toContain('Top selected locations');
		expect(dom.window.document.body.textContent).toContain('Action type mix');
		expect(dom.window.document.body.textContent).toContain('Berlin Mitte');

		root.unmount();
	});

	test('renders the page-level empty state when no analytics exist', async () => {
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
						summaries: {
							search: {
								category: 'search',
								totalSearches: 0,
								searchesToday: 0,
								zeroResultSearches: 0,
								averageNearestDistanceMeters: null,
								successRate: 0,
								series: {
									totalSearches: [],
									searchesToday: [],
									zeroResultSearches: [],
									averageNearestDistanceMeters: [],
									successRate: [],
								},
								breakdowns: {
									queryTypeMix: [],
									resultDistribution: [],
									topQueries: [],
									topZeroResultQueries: [],
								},
							},
							selection: {
								category: 'selection',
								totalSelections: 0,
								conversionRate: 0,
								series: {
									totalSelections: [],
									conversionRate: [],
								},
								breakdowns: {
									sourceMix: [],
									topLocations: [],
								},
							},
							action: {
								category: 'action',
								totalActions: 0,
								series: {
									totalActions: [],
								},
								breakdowns: {
									actionTypeMix: [],
									sourceMix: [],
									topLocations: [],
								},
							},
						},
						tables: {
							search: { queries: [], totalItems: 0, totalPages: 1, view: createDefaultAnalyticsView('search') },
							selection: { queries: [], totalItems: 0, totalPages: 1, view: createDefaultAnalyticsView('selection') },
							action: { queries: [], totalItems: 0, totalPages: 1, view: createDefaultAnalyticsView('action') },
						},
					}),
					siteLocale: 'en-US',
					siteTimezone: 'Europe/Berlin',
				})
			)
		);

		await flushRender();

		expect(dom.window.document.body.textContent).toContain('Analytics tracking is disabled');

		root.unmount();
	});
});
