import { afterEach, beforeAll, describe, expect, mock, test } from 'bun:test';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { JSDOM } from 'jsdom';
import { createElement, createRoot } from '@wordpress/element';

const originalGlobals = {
	document: globalThis.document,
	HTMLElement: globalThis.HTMLElement,
	navigator: globalThis.navigator,
	window: globalThis.window,
};

beforeAll(() => {
	mock.module('../../src/map/bootstrap', () => ({
		createMinimalMap: () => ({
			destroy() {},
			update() {},
		}),
	}));
});

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
		((callback: FrameRequestCallback) => globalThis.window.setTimeout(
			() => callback(globalThis.window.performance.now()),
			0
		));
	globalThis.window.cancelAnimationFrame =
		globalThis.window.cancelAnimationFrame ??
		((handle: number) => globalThis.window.clearTimeout(handle));
	globalThis.requestAnimationFrame =
		globalThis.requestAnimationFrame ?? globalThis.window.requestAnimationFrame.bind(globalThis.window);
	globalThis.cancelAnimationFrame =
		globalThis.cancelAnimationFrame ?? globalThis.window.cancelAnimationFrame.bind(globalThis.window);
}

function createTestCache(dom: JSDOM) {
	return createCache({
		container: dom.window.document.head,
		key: 'minimal-map-test',
	});
}

async function flushRender(): Promise<void> {
	await new Promise((resolve) => setTimeout(resolve, 0));
}

async function waitForCountAnimation(): Promise<void> {
	await new Promise((resolve) => setTimeout(resolve, 1300));
}

function getDashboardCardValue(container: HTMLElement, title: string): string {
	const heading = Array.from(
		container.querySelectorAll('.minimal-map-admin__feature-title')
	).find((candidate) => candidate.textContent === title);

	if (!heading) {
		throw new Error(`Dashboard card "${title}" not found`);
	}

	const card = heading.closest('.minimal-map-admin__feature-card');
	const value = card?.querySelector('.minimal-map-admin__feature-count');

	if (!value?.textContent) {
		throw new Error(`Dashboard card "${title}" has no count`);
	}

	return value.textContent;
}

afterEach(() => {
	globalThis.window = originalGlobals.window;
	globalThis.document = originalGlobals.document;
	globalThis.navigator = originalGlobals.navigator;
	globalThis.HTMLElement = originalGlobals.HTMLElement;
	delete (globalThis as { requestAnimationFrame?: FrameRequestCallback }).requestAnimationFrame;
	delete (globalThis as { cancelAnimationFrame?: (handle: number) => void }).cancelAnimationFrame;
});

describe('DashboardSection', () => {
	test('animates numeric counts and keeps analytics availability static', async () => {
		const dom = new JSDOM('<!doctype html><html><head></head><body><div id="host"></div></body></html>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);
		const [
			{ default: DashboardSection },
			{ CARD_VIEWS, DEFAULT_ADMIN_CONFIG, getSectionMap },
		] = await Promise.all([
			import('../../src/admin/sections/DashboardSection'),
			import('../../src/admin/app-config'),
		]);
		const activeSection = {
			description: 'Overview',
			title: 'Dashboard',
			url: '#dashboard',
			view: 'dashboard' as const,
		};
		const sections = [
			activeSection,
			...CARD_VIEWS.map((view) => ({
				description: `${view} description`,
				title: view === 'styles' ? 'Styles' : `${view[0].toUpperCase()}${view.slice(1)}`,
				url: `#${view}`,
				view,
			})),
		];

		root.render(
			createElement(
				CacheProvider,
				{ value: createTestCache(dom) },
				createElement(DashboardSection, {
					activeSection,
					appConfig: {
						...DEFAULT_ADMIN_CONFIG,
						analyticsConfig: {
							...DEFAULT_ADMIN_CONFIG.analyticsConfig,
							enabled: false,
						},
						mapConfig: {
							...DEFAULT_ADMIN_CONFIG.mapConfig,
							siteLocale: 'en-US',
							styleThemes: [{ label: 'Base', slug: 'base' }, { label: 'Alt', slug: 'alt' }],
						},
						sections,
						stats: {
							collections: 18,
							locations: 1234,
							logos: 6,
							markers: 9,
							tags: 27,
						},
					},
					sectionMap: getSectionMap(sections),
				})
			)
		);

		await flushRender();
		await waitForCountAnimation();

		expect(getDashboardCardValue(host, 'Locations')).toBe('1,234');
		expect(getDashboardCardValue(host, 'Styles')).toBe('2');
		expect(getDashboardCardValue(host, 'Analytics')).toBe('Off');

		root.unmount();
	});
});
