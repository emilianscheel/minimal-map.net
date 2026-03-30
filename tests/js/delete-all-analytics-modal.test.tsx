import { afterEach, describe, expect, test } from 'bun:test';
import { JSDOM } from 'jsdom';
import { createElement, createRoot } from '@wordpress/element';
import DeleteAllAnalyticsModal from '../../src/admin/analytics/DeleteAllAnalyticsModal';
import type { AnalyticsController } from '../../src/admin/analytics/types';
import { EMPTY_ACTION_ANALYTICS_SUMMARY, EMPTY_SEARCH_ANALYTICS_SUMMARY, EMPTY_SELECTION_ANALYTICS_SUMMARY } from '../../src/admin/analytics/constants';

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
	globalThis.requestAnimationFrame =
		globalThis.requestAnimationFrame ??
		globalThis.window.requestAnimationFrame.bind(globalThis.window);
	globalThis.cancelAnimationFrame =
		globalThis.cancelAnimationFrame ??
		globalThis.window.cancelAnimationFrame.bind(globalThis.window);
}

async function flushRender(): Promise<void> {
	await new Promise((resolve) => setTimeout(resolve, 0));
}

function createControllerStub(
	overrides: Partial<AnalyticsController> = {}
): AnalyticsController {
	return {
		enabled: true,
		complianzEnabled: false,
		complianzInstalled: false,
		headerAction: null,
		isConfirmEnableModalOpen: false,
		isDeleteAllAnalyticsModalOpen: true,
		isDeletingAllAnalytics: false,
		isLoading: false,
		isLoadingSummary: false,
		isSavingSettings: false,
		loadError: null,
		notice: null,
		range: '30d',
		summaries: {
			search: EMPTY_SEARCH_ANALYTICS_SUMMARY,
			selection: EMPTY_SELECTION_ANALYTICS_SUMMARY,
			action: EMPTY_ACTION_ANALYTICS_SUMMARY,
		},
		tables: {
			search: { queries: [], totalItems: 0, totalPages: 1, view: {} as never },
			selection: { queries: [], totalItems: 0, totalPages: 1, view: {} as never },
			action: { queries: [], totalItems: 0, totalPages: 1, view: {} as never },
		},
		dismissNotice() {},
		onChangeRange() {},
		onChangeView() {},
		onCloseConfirmEnableModal() {},
		onCloseDeleteAllAnalyticsModal() {},
		onConfirmEnableAnalytics: async () => {},
		onDeleteAllAnalytics: async () => {},
		onOpenDeleteAllAnalyticsModal() {},
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
	delete (globalThis as { requestAnimationFrame?: FrameRequestCallback }).requestAnimationFrame;
	delete (globalThis as { cancelAnimationFrame?: (handle: number) => void }).cancelAnimationFrame;
});

describe('DeleteAllAnalyticsModal', () => {
	test('renders destructive copy and submits on click', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);
		let submitCalls = 0;

		root.render(
			createElement(DeleteAllAnalyticsModal, {
				controller: createControllerStub({
					onDeleteAllAnalytics: async () => {
						submitCalls += 1;
					},
				}),
			}),
		);

		await flushRender();

		expect(dom.window.document.body.textContent).toContain(
			'Are you sure you want to delete all tracking data? This action cannot be undone.'
		);

		const deleteButton = Array.from(dom.window.document.body.querySelectorAll('button')).find(
			(button) => button.textContent?.includes('Delete all tracking data')
		);
		deleteButton?.click();
		await flushRender();

		expect(submitCalls).toBe(1);

		root.unmount();
	});

	test('confirms on Enter and ignores Enter from cancel targets', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);
		let submitCalls = 0;
		let closeCalls = 0;

		root.render(
			createElement(DeleteAllAnalyticsModal, {
				controller: createControllerStub({
					onCloseDeleteAllAnalyticsModal() {
						closeCalls += 1;
					},
					onDeleteAllAnalytics: async () => {
						submitCalls += 1;
					},
				}),
			}),
		);

		await flushRender();

		const body = dom.window.document.body;
		const dialog = body.querySelector(
			'.minimal-map-admin__collection-delete-dialog'
		) as HTMLDivElement;
		const cancelButton = Array.from(body.querySelectorAll('button')).find((button) =>
			button.textContent?.includes('Cancel')
		) as HTMLButtonElement;

		dialog.dispatchEvent(
			new dom.window.KeyboardEvent('keydown', {
				bubbles: true,
				cancelable: true,
				key: 'Enter',
			}),
		);
		await flushRender();

		cancelButton.dispatchEvent(
			new dom.window.KeyboardEvent('keydown', {
				bubbles: true,
				cancelable: true,
				key: 'Enter',
			}),
		);
		await flushRender();

		cancelButton.click();
		await flushRender();

		expect(submitCalls).toBe(1);
		expect(closeCalls).toBe(1);

		root.unmount();
	});

	test('disables actions while deleting', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);
		let submitCalls = 0;

		root.render(
			createElement(DeleteAllAnalyticsModal, {
				controller: createControllerStub({
					isDeletingAllAnalytics: true,
					onDeleteAllAnalytics: async () => {
						submitCalls += 1;
					},
				}),
			}),
		);

		await flushRender();

		const body = dom.window.document.body;
		const dialog = body.querySelector(
			'.minimal-map-admin__collection-delete-dialog'
		) as HTMLDivElement;
		const deleteButton = Array.from(body.querySelectorAll('button')).find((button) =>
			button.textContent?.includes('Delete all tracking data')
		) as HTMLButtonElement;

		deleteButton.click();
		dialog.dispatchEvent(
			new dom.window.KeyboardEvent('keydown', {
				bubbles: true,
				cancelable: true,
				key: 'Enter',
			}),
		);
		await flushRender();

		expect(deleteButton.disabled).toBe(true);
		expect(submitCalls).toBe(0);

		root.unmount();
	});
});
