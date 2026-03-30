import { afterEach, describe, expect, mock, test } from 'bun:test';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { JSDOM } from 'jsdom';
import { createElement, createRoot } from '@wordpress/element';
import ContentHeader from '../../src/admin/ContentHeader';
import AnalyticsHeaderActions from '../../src/admin/analytics/AnalyticsHeaderActions';
import AnalyticsView from '../../src/admin/analytics';
import { EMPTY_ACTION_ANALYTICS_SUMMARY, EMPTY_SEARCH_ANALYTICS_SUMMARY, EMPTY_SELECTION_ANALYTICS_SUMMARY } from '../../src/admin/analytics/constants';
import { useAnalyticsController } from '../../src/admin/analytics/controller';
import type { AnalyticsAdminConfig, AnalyticsEventCategory, AnalyticsSummary } from '../../src/types';

const originalGlobals = {
	document: globalThis.document,
	Element: globalThis.Element,
	getComputedStyle: globalThis.getComputedStyle,
	HTMLElement: globalThis.HTMLElement,
	HTMLIFrameElement: globalThis.HTMLIFrameElement,
	Node: globalThis.Node,
	navigator: globalThis.navigator,
	requestAnimationFrame: globalThis.requestAnimationFrame,
	cancelAnimationFrame: globalThis.cancelAnimationFrame,
	ResizeObserver: globalThis.ResizeObserver,
	window: globalThis.window,
};

const analyticsConfig: AnalyticsAdminConfig = {
	nonce: '',
	enabled: true,
	complianzEnabled: false,
	complianzInstalled: false,
	settingsPath: '/settings',
	summaryPath: '/summary',
	queriesPath: '/queries',
};

function setGlobalDom(dom: JSDOM): void {
	globalThis.window = dom.window as never;
	globalThis.document = dom.window.document as never;
	globalThis.Element = dom.window.Element as never;
	globalThis.getComputedStyle = dom.window.getComputedStyle.bind(dom.window);
	globalThis.navigator = dom.window.navigator as never;
	globalThis.HTMLElement = dom.window.HTMLElement as never;
	globalThis.HTMLIFrameElement = dom.window.HTMLIFrameElement as never;
	globalThis.Node = dom.window.Node as never;
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

function createTestCache(container: HTMLElement) {
	return createCache({
		key: 'minimal-map-test',
		container,
	});
}

async function flushRender(): Promise<void> {
	await new Promise((resolve) => setTimeout(resolve, 0));
}

function openExportMenu(dom: JSDOM, host: HTMLDivElement): HTMLButtonElement {
	const exportButton = host.querySelector(
		'.minimal-map-admin__analytics-filter-group button[aria-label="Export analytics"]'
	) as HTMLButtonElement;

	exportButton.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));

	return exportButton;
}

function clickMenuItem(dom: JSDOM, text: string): void {
	const menuItem = Array.from(dom.window.document.querySelectorAll('button')).find((button) =>
		button.textContent?.includes(text)
	) as HTMLButtonElement | undefined;

	if (!menuItem) {
		throw new Error(`Menu item "${text}" not found`);
	}

	menuItem.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
}

function getEmptySummary(category: AnalyticsEventCategory): AnalyticsSummary {
	switch (category) {
		case 'selection':
			return EMPTY_SELECTION_ANALYTICS_SUMMARY;
		case 'action':
			return EMPTY_ACTION_ANALYTICS_SUMMARY;
		case 'search':
		default:
			return EMPTY_SEARCH_ANALYTICS_SUMMARY;
	}
}

function ControllerHarness({
	dependencies,
}: {
	dependencies: Parameters<typeof useAnalyticsController>[1];
}) {
	const controller = useAnalyticsController(analyticsConfig, dependencies);

	return createElement(
		'div',
		null,
		createElement(ContentHeader, {
			title: 'Analytics',
			description: 'Track events',
			actions: controller.headerAction,
		}),
		createElement(AnalyticsView, {
			controller,
			siteLocale: 'en-US',
			siteTimezone: 'Europe/Berlin',
		}),
	);
}

afterEach(() => {
	globalThis.window = originalGlobals.window;
	globalThis.document = originalGlobals.document;
	globalThis.Element = originalGlobals.Element;
	globalThis.getComputedStyle = originalGlobals.getComputedStyle;
	globalThis.navigator = originalGlobals.navigator;
	globalThis.HTMLElement = originalGlobals.HTMLElement;
	globalThis.HTMLIFrameElement = originalGlobals.HTMLIFrameElement;
	globalThis.Node = originalGlobals.Node;
	globalThis.ResizeObserver = originalGlobals.ResizeObserver;
	globalThis.requestAnimationFrame = originalGlobals.requestAnimationFrame;
	globalThis.cancelAnimationFrame = originalGlobals.cancelAnimationFrame;
});

describe('analytics export UI', () => {
	test('renders the export dropdown before the time period control and triggers category export', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);
		const onExportCategory = mock((_category: AnalyticsEventCategory) => {});

		root.render(
			createElement(
				CacheProvider,
				{ value: createTestCache(dom.window.document.head) },
				createElement(AnalyticsHeaderActions, {
					complianzEnabled: false,
					complianzInstalled: false,
					enabled: true,
					isDeletingAllAnalytics: false,
					isExporting: false,
					isSavingSettings: false,
					range: '30d',
					onChangeRange() {},
					onOpenDeleteAllAnalyticsModal() {},
					onExportCategory,
					onToggleAnalytics() {},
					onToggleComplianz() {},
				}),
			),
		);

		await flushRender();

		const filterButtons = Array.from(
			host.querySelectorAll('.minimal-map-admin__analytics-filter-group button')
		) as HTMLButtonElement[];
		const exportButton = host.querySelector(
			'.minimal-map-admin__analytics-filter-group button[aria-label="Export analytics"]'
		) as HTMLButtonElement | null;
		const rangeButton = filterButtons.find((button) =>
			button.textContent?.includes('Last 30 Days')
		);

		expect(exportButton).not.toBeNull();
		expect(rangeButton).toBeDefined();

		openExportMenu(dom, host);
		await flushRender();
		clickMenuItem(dom, 'Search Data as CSV');
		await flushRender();

		expect(onExportCategory).toHaveBeenCalledWith('search');

		root.unmount();
	});

	test('disables the export dropdown while an export is in progress', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);

		root.render(
			createElement(
				CacheProvider,
				{ value: createTestCache(dom.window.document.head) },
				createElement(AnalyticsHeaderActions, {
					complianzEnabled: false,
					complianzInstalled: false,
					enabled: true,
					isDeletingAllAnalytics: false,
					isExporting: true,
					isSavingSettings: false,
					range: '30d',
					onChangeRange() {},
					onOpenDeleteAllAnalyticsModal() {},
					onExportCategory() {},
					onToggleAnalytics() {},
					onToggleComplianz() {},
				}),
			),
		);

		await flushRender();

		const exportButton = host.querySelector(
			'.minimal-map-admin__analytics-filter-group button[aria-label="Export analytics"]'
		) as HTMLButtonElement;

		expect(exportButton.disabled).toBe(true);

		root.unmount();
	});

	test('renders a clean button and opens the delete-all dialog callback', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);
		const onOpenDeleteAllAnalyticsModal = mock(() => {});

		root.render(
			createElement(
				CacheProvider,
				{ value: createTestCache(dom.window.document.head) },
				createElement(AnalyticsHeaderActions, {
					complianzEnabled: false,
					complianzInstalled: false,
					enabled: true,
					isDeletingAllAnalytics: false,
					isExporting: false,
					isSavingSettings: false,
					range: '30d',
					onChangeRange() {},
					onOpenDeleteAllAnalyticsModal,
					onExportCategory() {},
					onToggleAnalytics() {},
					onToggleComplianz() {},
				}),
			),
		);

		await flushRender();

		const cleanButton = Array.from(host.querySelectorAll('button')).find((button) =>
			button.getAttribute('aria-label') === 'Clean tracking data'
		) as HTMLButtonElement | undefined;

		expect(cleanButton).toBeDefined();
		cleanButton?.click();

		expect(onOpenDeleteAllAnalyticsModal).toHaveBeenCalledTimes(1);

		root.unmount();
	});

	test('shows an error notice when CSV export fails', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);
		const exportFile = mock(async () => {
			throw new Error('Export failed');
		});
		const resetData = mock(async () => {});
		const fetchSummary = mock(async (
			_config: AnalyticsAdminConfig,
			_range: 'today' | 'yesterday' | '7d' | '30d' | '90d' | 'all',
			category: AnalyticsEventCategory
		) => getEmptySummary(category));
		const fetchQueries = mock(async () => ({
			items: [],
			totalItems: 0,
			totalPages: 1,
		}));

		root.render(
			createElement(
				CacheProvider,
				{ value: createTestCache(dom.window.document.head) },
				createElement(ControllerHarness, {
					dependencies: {
						exportFile,
						fetchQueries,
						fetchSummary,
						resetData,
					},
				}),
			),
		);

		await flushRender();
		await flushRender();

		openExportMenu(dom, host);
		await flushRender();
		clickMenuItem(dom, 'Search Data as CSV');
		await flushRender();
		await flushRender();

		expect(exportFile).toHaveBeenCalledWith(analyticsConfig, '30d', 'search');
		expect(dom.window.document.body.textContent).toContain('Export failed');

		root.unmount();
	});

	test('shows a success notice when tracking data is deleted', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);
		const resetData = mock(async () => {});
		const fetchSummary = mock(async (
			_config: AnalyticsAdminConfig,
			_range: 'today' | 'yesterday' | '7d' | '30d' | '90d' | 'all',
			category: AnalyticsEventCategory
		) => getEmptySummary(category));
		const fetchQueries = mock(async () => ({
			items: [],
			totalItems: 0,
			totalPages: 1,
		}));

		root.render(
			createElement(
				CacheProvider,
				{ value: createTestCache(dom.window.document.head) },
				createElement(ControllerHarness, {
					dependencies: {
						fetchQueries,
						fetchSummary,
						resetData,
					},
				}),
			),
		);

		await flushRender();
		await flushRender();

		const cleanButton = Array.from(host.querySelectorAll('button')).find((button) =>
			button.getAttribute('aria-label') === 'Clean tracking data'
		) as HTMLButtonElement | undefined;

		cleanButton?.click();
		await flushRender();

		const deleteButton = Array.from(dom.window.document.body.querySelectorAll('button')).find(
			(button) => button.textContent?.includes('Delete all tracking data')
		) as HTMLButtonElement | undefined;

		deleteButton?.click();
		await flushRender();
		await flushRender();

		expect(resetData).toHaveBeenCalledWith(analyticsConfig);
		expect(dom.window.document.body.textContent).toContain('All tracking data deleted.');

		root.unmount();
	});
});
