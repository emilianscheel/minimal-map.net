import { afterEach, describe, expect, test } from 'bun:test';
import { JSDOM } from 'jsdom';
import { createElement, createRoot } from '@wordpress/element';
import DeleteAllLocationsModal from '../../src/admin/locations/DeleteAllLocationsModal';
import type { LocationsController } from '../../src/admin/locations/types';

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
		globalThis.requestAnimationFrame ?? globalThis.window.requestAnimationFrame.bind(globalThis.window);
	globalThis.cancelAnimationFrame =
		globalThis.cancelAnimationFrame ?? globalThis.window.cancelAnimationFrame.bind(globalThis.window);
}

async function flushRender(): Promise<void> {
	await new Promise((resolve) => setTimeout(resolve, 0));
}

function createControllerStub(
	overrides: Partial<LocationsController> = {}
): LocationsController {
	return {
		isDeleteAllLocationsModalOpen: true,
		isDeletingAllLocations: false,
		locations: [
			{ id: 1, title: 'Berlin Studio' } as never,
			{ id: 2, title: 'Hamburg Office' } as never,
		],
		onCloseDeleteAllLocationsModal() {},
		onDeleteAllLocations: async () => {},
		...overrides,
	} as LocationsController;
}

afterEach(() => {
	globalThis.window = originalGlobals.window;
	globalThis.document = originalGlobals.document;
	globalThis.navigator = originalGlobals.navigator;
	globalThis.HTMLElement = originalGlobals.HTMLElement;
	delete (globalThis as { requestAnimationFrame?: FrameRequestCallback }).requestAnimationFrame;
	delete (globalThis as { cancelAnimationFrame?: (handle: number) => void }).cancelAnimationFrame;
});

describe('DeleteAllLocationsModal', () => {
	test('renders the destructive copy with the current location count', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);

		root.render(
			createElement(DeleteAllLocationsModal, {
				controller: createControllerStub(),
			})
		);

		await flushRender();

		expect(dom.window.document.body.textContent).toContain(
			'Are you sure you want to delete 2 locations? This action cannot be undone.'
		);

		root.unmount();
	});

	test('confirms on button click and on Enter, but ignores Enter on ignored targets', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);
		let deleteCalls = 0;
		let closeCalls = 0;

		root.render(
			createElement(DeleteAllLocationsModal, {
				controller: createControllerStub({
					onCloseDeleteAllLocationsModal() {
						closeCalls += 1;
					},
					onDeleteAllLocations: async () => {
						deleteCalls += 1;
					},
				}),
			})
		);

		await flushRender();

		const body = dom.window.document.body;
		const dialog = body.querySelector(
			'.minimal-map-admin__collection-delete-dialog'
		) as HTMLDivElement;
		const buttons = Array.from(body.querySelectorAll('button'));
		const cancelButton = buttons.find((button) => button.textContent?.includes('Cancel'));
		const deleteButton = buttons.find((button) =>
			button.textContent?.includes('Delete all locations')
		);

		deleteButton?.click();
		await flushRender();

		dialog.dispatchEvent(
			new dom.window.KeyboardEvent('keydown', {
				bubbles: true,
				cancelable: true,
				key: 'Enter',
			})
		);
		await flushRender();

		cancelButton?.dispatchEvent(
			new dom.window.KeyboardEvent('keydown', {
				bubbles: true,
				cancelable: true,
				key: 'Enter',
			})
		);
		await flushRender();

		cancelButton?.click();
		await flushRender();

		expect(deleteCalls).toBe(2);
		expect(closeCalls).toBe(1);

		root.unmount();
	});

	test('blocks repeated submits while deletion is in progress', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);
		let deleteCalls = 0;

		root.render(
			createElement(DeleteAllLocationsModal, {
				controller: createControllerStub({
					isDeletingAllLocations: true,
					onDeleteAllLocations: async () => {
						deleteCalls += 1;
					},
				}),
			})
		);

		await flushRender();

		const body = dom.window.document.body;
		const dialog = body.querySelector(
			'.minimal-map-admin__collection-delete-dialog'
		) as HTMLDivElement;
		const deleteButton = Array.from(body.querySelectorAll('button')).find((button) =>
			button.textContent?.includes('Delete all locations')
		) as HTMLButtonElement;

		deleteButton.click();
		dialog.dispatchEvent(
			new dom.window.KeyboardEvent('keydown', {
				bubbles: true,
				cancelable: true,
				key: 'Enter',
			})
		);
		await flushRender();

		expect(deleteCalls).toBe(0);
		expect(deleteButton.disabled).toBe(true);

		root.unmount();
	});
});
