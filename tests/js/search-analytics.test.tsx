import { afterEach, describe, expect, test } from 'bun:test';
import { JSDOM } from 'jsdom';
import { createElement, createRoot } from '@wordpress/element';
import type { ComponentProps } from 'react';
import { MapSearchControl } from '../../src/map/SearchControl';
import type { AnalyticsTrackPayload, MapLocationPoint } from '../../src/types';

const originalGlobals = {
	document: globalThis.document,
	HTMLElement: globalThis.HTMLElement,
	navigator: globalThis.navigator,
	window: globalThis.window,
};

const LOCATIONS: MapLocationPoint[] = [
	{
		id: 1,
		title: 'Berlin Mitte',
		lat: 52.5208,
		lng: 13.4095,
		city: 'Berlin',
	},
	{
		id: 2,
		title: 'Hamburg Port',
		lat: 53.5461,
		lng: 9.9661,
		city: 'Hamburg',
	},
];

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
	const elementPrototype = globalThis.window.HTMLElement.prototype as {
		attachEvent?: (eventName: string, listener: EventListenerOrEventListenerObject) => void;
		detachEvent?: (eventName: string, listener: EventListenerOrEventListenerObject) => void;
		scrollIntoView?: (options?: ScrollIntoViewOptions) => void;
	};
	elementPrototype.attachEvent =
		elementPrototype.attachEvent ??
		((_eventName: string, _listener: EventListenerOrEventListenerObject) => undefined);
	elementPrototype.detachEvent =
		elementPrototype.detachEvent ??
		((_eventName: string, _listener: EventListenerOrEventListenerObject) => undefined);
	elementPrototype.scrollIntoView =
		elementPrototype.scrollIntoView ??
		((_options?: ScrollIntoViewOptions) => undefined);
	globalThis.HTMLIFrameElement =
		globalThis.HTMLIFrameElement ?? globalThis.window.HTMLIFrameElement;
	globalThis.ResizeObserver =
		globalThis.ResizeObserver ?? globalThis.window.ResizeObserver;
	globalThis.requestAnimationFrame =
		globalThis.requestAnimationFrame ?? globalThis.window.requestAnimationFrame.bind(globalThis.window);
	globalThis.cancelAnimationFrame =
		globalThis.cancelAnimationFrame ?? globalThis.window.cancelAnimationFrame.bind(globalThis.window);
}

async function flushRender(delay = 0): Promise<void> {
	await new Promise((resolve) => setTimeout(resolve, delay));
}

async function renderSearchControl(overrides: Partial<ComponentProps<typeof MapSearchControl>> = {}) {
	const dom = new JSDOM('<!doctype html><div id="host"></div>');
	setGlobalDom(dom);
	const host = dom.window.document.getElementById('host') as HTMLDivElement;
	const root = createRoot(host);
	const tracked: AnalyticsTrackPayload[] = [];

	root.render(
		createElement(MapSearchControl, {
			activeCategoryTagIds: [],
			currentTimeMs: Date.now(),
			doc: dom.window.document,
			enableCategoryFilter: false,
			enableOpenedFilter: false,
			enableLiveLocationSearch: true,
			frontendGeocodePath: '/minimal-map/v1/frontend-geocode',
			geocodeSearch: async () => ({
				success: true,
				label: 'Alexanderplatz, Berlin',
				lat: 52.5219,
				lng: 13.4132,
			}),
			googleMapsButtonShowIcon: true,
			googleMapsNavigation: true,
			host,
			isOpenedFilterActive: false,
			locations: LOCATIONS,
			onAnalyticsTrack: (payload) => {
				tracked.push(payload);
			},
			onCategoryFilterChange() {},
			onOpenedFilterChange() {},
			onSelect() {},
			siteLocale: 'en-US',
			siteTimezone: 'Europe/Berlin',
			...overrides,
		})
	);

	await flushRender();

	return { dom, host, root, tracked };
}

afterEach(() => {
	globalThis.window = originalGlobals.window;
	globalThis.document = originalGlobals.document;
	globalThis.navigator = originalGlobals.navigator;
	globalThis.HTMLElement = originalGlobals.HTMLElement;
	delete (globalThis as { requestAnimationFrame?: FrameRequestCallback }).requestAnimationFrame;
	delete (globalThis as { cancelAnimationFrame?: (handle: number) => void }).cancelAnimationFrame;
	delete (globalThis as { HTMLIFrameElement?: typeof window.HTMLIFrameElement }).HTMLIFrameElement;
	delete (globalThis as { ResizeObserver?: typeof window.ResizeObserver }).ResizeObserver;
});

describe('MapSearchControl analytics', () => {
	test('tracks a debounced text query once for a settled term', async () => {
		const { dom, root, tracked } = await renderSearchControl();
		const input = dom.window.document.querySelector('input[type="search"]') as HTMLInputElement;

		input.focus();
		input.dispatchEvent(new dom.window.Event('focus', { bubbles: true }));
		input.value = 'Berlin';
		input.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
		await flushRender(500);
		await flushRender();

		expect(tracked).toHaveLength(1);
		expect(tracked[0]).toMatchObject({
			eventCategory: 'search',
			queryText: 'Berlin',
			queryType: 'text',
			resultCount: 1,
		});

		await flushRender(500);
		expect(tracked).toHaveLength(1);

		root.unmount();
	});

	test('tracks a debounced unmatched text query with zero results', async () => {
		const { dom, root, tracked } = await renderSearchControl();
		const input = dom.window.document.querySelector('input[type="search"]') as HTMLInputElement;

		input.focus();
		input.dispatchEvent(new dom.window.Event('focus', { bubbles: true }));
		input.value = 'alksdjf';
		input.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
		await flushRender(500);
		await flushRender();

		expect(tracked).toHaveLength(1);
		expect(tracked[0]).toMatchObject({
			eventCategory: 'search',
			queryText: 'alksdjf',
			queryType: 'text',
			resultCount: 0,
			nearestDistanceMeters: null,
		});

		root.unmount();
	});

	test('tracks an address query on submit with result and distance snapshots', async () => {
		const { dom, root, tracked } = await renderSearchControl();
		const input = dom.window.document.querySelector('input[type="search"]') as HTMLInputElement;
		const form = dom.window.document.querySelector('form') as HTMLFormElement;

		input.focus();
		input.dispatchEvent(new dom.window.Event('focus', { bubbles: true }));
		input.value = 'Alexanderplatz';
		input.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
		form.dispatchEvent(new dom.window.Event('submit', { bubbles: true, cancelable: true }));
		await flushRender();

		expect(tracked).toHaveLength(1);
		expect(tracked[0].eventCategory).toBe('search');
		expect(tracked[0].queryType).toBe('address');
		expect(tracked[0].queryText).toBe('Alexanderplatz');
		expect(tracked[0].resultCount).toBe(2);
		expect(typeof tracked[0].nearestDistanceMeters).toBe('number');

		root.unmount();
	});

	test('tracks a zero-result address query when geocoding rejects', async () => {
		const { dom, root, tracked } = await renderSearchControl({
			geocodeSearch: async () => {
				throw new Error('No matching coordinates were found.');
			},
		});
		const input = dom.window.document.querySelector('input[type="search"]') as HTMLInputElement;
		const form = dom.window.document.querySelector('form') as HTMLFormElement;

		input.focus();
		input.dispatchEvent(new dom.window.Event('focus', { bubbles: true }));
		input.value = 'lkasdjf';
		input.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
		form.dispatchEvent(new dom.window.Event('submit', { bubbles: true, cancelable: true }));
		await flushRender();

		expect(tracked).toHaveLength(1);
		expect(tracked[0]).toMatchObject({
			eventCategory: 'search',
			queryText: 'lkasdjf',
			queryType: 'address',
			resultCount: 0,
			nearestDistanceMeters: null,
		});

		root.unmount();
	});

	test('tracks a zero-result address query when geocoding resolves without coordinates', async () => {
		const { dom, root, tracked } = await renderSearchControl({
			geocodeSearch: async () => ({
				success: false,
				message: 'No matching coordinates were found.',
			}),
		});
		const input = dom.window.document.querySelector('input[type="search"]') as HTMLInputElement;
		const form = dom.window.document.querySelector('form') as HTMLFormElement;

		input.focus();
		input.dispatchEvent(new dom.window.Event('focus', { bubbles: true }));
		input.value = 'lkasdjf';
		input.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
		form.dispatchEvent(new dom.window.Event('submit', { bubbles: true, cancelable: true }));
		await flushRender();

		expect(tracked).toHaveLength(1);
		expect(tracked[0]).toMatchObject({
			eventCategory: 'search',
			queryText: 'lkasdjf',
			queryType: 'address',
			resultCount: 0,
			nearestDistanceMeters: null,
		});

		root.unmount();
	});

	test('tracks live-location requests after geolocation resolves', async () => {
		const { dom, root, tracked } = await renderSearchControl();
		let geolocationCalls = 0;

		Object.defineProperty(dom.window.navigator, 'geolocation', {
			configurable: true,
			value: {
				getCurrentPosition(success: PositionCallback) {
					geolocationCalls += 1;
					success({
						coords: {
							latitude: 52.52,
							longitude: 13.405,
						},
					} as GeolocationPosition);
				},
			},
		});

		const input = dom.window.document.querySelector('input[type="search"]') as HTMLInputElement;
		input.focus();
		input.dispatchEvent(new dom.window.Event('focus', { bubbles: true }));
		await flushRender();

		const liveLocationButton = Array.from(dom.window.document.querySelectorAll('button')).find((button) =>
			button.textContent?.includes('My location')
		) as HTMLButtonElement;

		liveLocationButton.click();
		await flushRender();

		expect(geolocationCalls).toBe(1);
		expect(tracked).toHaveLength(1);
		expect(tracked[0]).toMatchObject({
			eventCategory: 'search',
			queryText: 'My location',
			queryType: 'live_location',
			resultCount: 2,
		});

		root.unmount();
	});

	test('does not emit analytics events when no tracking callback is supplied', async () => {
		const { dom, root } = await renderSearchControl({
			onAnalyticsTrack: undefined,
		});
		const input = dom.window.document.querySelector('input[type="search"]') as HTMLInputElement;

		input.focus();
		input.dispatchEvent(new dom.window.Event('focus', { bubbles: true }));
		input.value = 'Berlin';
		input.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
		await flushRender(500);

		expect(dom.window.document.body.textContent).toContain('Berlin Mitte');

		root.unmount();
	});

	test('tracks explicit search-result selection separately from search events', async () => {
		const { dom, root, tracked } = await renderSearchControl();
		const input = dom.window.document.querySelector('input[type="search"]') as HTMLInputElement;

		input.focus();
		input.dispatchEvent(new dom.window.Event('focus', { bubbles: true }));
		input.value = 'Berlin';
		input.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
		await flushRender(500);
		await flushRender();

		const selectButton = dom.window.document.querySelector(
			'.minimal-map-search__result-select'
		) as HTMLButtonElement;

		selectButton.click();
		await flushRender();

		expect(tracked).toHaveLength(2);
		expect(tracked[1]).toMatchObject({
			eventCategory: 'selection',
			interactionSource: 'search_panel',
			locationId: 1,
			locationTitle: 'Berlin Mitte',
			queryText: 'Berlin',
		});

		root.unmount();
	});
});
