import { afterEach, describe, expect, test } from 'bun:test';
import { JSDOM } from 'jsdom';
import { createElement, createRoot } from '@wordpress/element';
import { LocationResultCard } from '../../src/map/location-card';
import type { AnalyticsActionType } from '../../src/types';

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
}

async function flushRender(): Promise<void> {
	await new Promise((resolve) => setTimeout(resolve, 0));
}

afterEach(() => {
	globalThis.window = originalGlobals.window;
	globalThis.document = originalGlobals.document;
	globalThis.navigator = originalGlobals.navigator;
	globalThis.HTMLElement = originalGlobals.HTMLElement;
});

describe('LocationResultCard analytics', () => {
	test('tracks follow-up actions from the search panel card', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);
		const actions: Array<{ actionType: AnalyticsActionType; actionTarget?: string }> = [];

		root.render(
			createElement(LocationResultCard, {
				analyticsSource: 'search_panel',
				distanceLabel: '500 m',
				googleMapsButtonShowIcon: true,
				googleMapsNavigation: true,
				location: {
					id: 1,
					title: 'Berlin Studio',
					lat: 52.52,
					lng: 13.405,
					city: 'Berlin',
					telephone: '+49 30 123456',
					email: 'info@example.com',
					website: 'https://example.com/path',
					social_media: [
						{ platform: 'instagram', url: 'https://instagram.com/example' },
					],
					opening_hours: {
						monday: { open: '08:00', close: '20:00', lunch_start: '', lunch_duration_minutes: 0 },
						tuesday: { open: '08:00', close: '20:00', lunch_start: '', lunch_duration_minutes: 0 },
						wednesday: { open: '08:00', close: '20:00', lunch_start: '', lunch_duration_minutes: 0 },
						thursday: { open: '08:00', close: '20:00', lunch_start: '', lunch_duration_minutes: 0 },
						friday: { open: '08:00', close: '20:00', lunch_start: '', lunch_duration_minutes: 0 },
						saturday: { open: '', close: '', lunch_start: '', lunch_duration_minutes: 0 },
						sunday: { open: '', close: '', lunch_start: '', lunch_duration_minutes: 0 },
					},
				},
				mode: 'search',
				onAnalyticsAction: (actionType, actionTarget) => {
					actions.push({ actionType, actionTarget });
				},
				siteLocale: 'en-US',
				siteTimezone: 'Europe/Berlin',
			}),
		);

		await flushRender();

		(host.querySelector('.minimal-map-search__result-opening-hours-trigger') as HTMLButtonElement).click();
		(host.querySelector('.minimal-map-search__meta-item--link[href="tel:+49 30 123456"]') as HTMLAnchorElement).click();
		(host.querySelector('.minimal-map-search__meta-item--link[href="mailto:info@example.com"]') as HTMLAnchorElement).click();
		(host.querySelector('.minimal-map-search__meta-item--link[href="https://example.com/path"]') as HTMLAnchorElement).click();
		(host.querySelector('.minimal-map-search__meta-item--link[href="https://instagram.com/example"]') as HTMLAnchorElement).click();
		(host.querySelector('.minimal-map-search__maps-link') as HTMLAnchorElement).click();

		expect(actions).toEqual([
			{ actionType: 'opening_hours', actionTarget: undefined },
			{ actionType: 'telephone', actionTarget: undefined },
			{ actionType: 'email', actionTarget: undefined },
			{ actionType: 'website', actionTarget: 'example.com' },
			{ actionType: 'social_media', actionTarget: 'instagram' },
			{ actionType: 'google_maps', actionTarget: undefined },
		]);

		root.unmount();
	});
});
