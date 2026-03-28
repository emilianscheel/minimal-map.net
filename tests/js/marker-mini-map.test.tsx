import { afterEach, describe, expect, test } from 'bun:test';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { JSDOM } from 'jsdom';
import { createElement, createRoot } from '@wordpress/element';
import MarkerMiniMap from '../../src/components/MarkerMiniMap';
import MarkersGrid from '../../src/admin/markers/MarkersGrid';
import type { MarkersController } from '../../src/admin/markers/types';
import type { MarkerRecord, StyleThemeRecord } from '../../src/types';

const originalGlobals = {
	document: globalThis.document,
	HTMLElement: globalThis.HTMLElement,
	IntersectionObserver: globalThis.IntersectionObserver,
	navigator: globalThis.navigator,
	requestAnimationFrame: globalThis.requestAnimationFrame,
	cancelAnimationFrame: globalThis.cancelAnimationFrame,
	ResizeObserver: globalThis.ResizeObserver,
	SVGElement: globalThis.SVGElement,
	window: globalThis.window,
};

function setGlobalDom(dom: JSDOM): void {
	globalThis.window = dom.window as never;
	globalThis.document = dom.window.document as never;
	globalThis.navigator = dom.window.navigator as never;
	globalThis.HTMLElement = dom.window.HTMLElement as never;
	globalThis.SVGElement = dom.window.SVGElement as never;
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
	globalThis.requestAnimationFrame = globalThis.window.requestAnimationFrame.bind(globalThis.window);
	globalThis.cancelAnimationFrame = globalThis.window.cancelAnimationFrame.bind(globalThis.window);
	globalThis.ResizeObserver = class ResizeObserver {
		observe() {}
		unobserve() {}
		disconnect() {}
	} as never;
	globalThis.IntersectionObserver = class IntersectionObserver {
		disconnect() {}
		observe() {}
		takeRecords() {
			return [];
		}
		unobserve() {}
	} as never;
}

async function flushRender(): Promise<void> {
	await new Promise((resolve) => setTimeout(resolve, 0));
}

function createTheme(): StyleThemeRecord {
	return {
		slug: 'custom-preview',
		label: 'Custom Preview',
		basePreset: 'positron',
		colors: {
			background: '#102030',
			park: '#405060',
			residential: '#d0d0d0',
			forest: '#406040',
			ice: '#ddeeff',
			water: '#203040',
			waterway: '#203040',
			building: '#999999',
			buildingOutline: '#888888',
			path: '#ffffff',
			roadMinor: '#ffffff',
			roadMajorCasing: '#506070',
			roadMajorFill: '#708090',
			motorwayCasing: '#aaaaaa',
			motorwayFill: '#bbbbbb',
			rail: '#cccccc',
			railDash: '#dddddd',
			boundary: '#eeeeee',
			aerowayLine: '#f0f0f0',
			aerowayArea: '#f5f5f5',
			waterLabel: '#111111',
			waterLabelHalo: '#222222',
			roadLabel: '#333333',
			roadLabelHalo: '#444444',
			placeLabel: '#555555',
			placeLabelHalo: '#666666',
		},
	};
}

function createMarker(id = 7): MarkerRecord {
	return {
		id,
		title: `marker-${id}.svg`,
		content:
			'<svg viewBox="0 0 27 41" aria-hidden="true"><path d="M13.5 1.5h1v1h-1z" /></svg>',
	};
}

function createControllerStub(
	overrides: Partial<MarkersController> = {}
): MarkersController {
	return {
		actionNotice: null,
		activeTheme: createTheme(),
		dismissActionNotice() {},
		editFilenameBasename: '',
		editFilenameExtension: 'svg',
		editingMarker: null,
		headerAction: null,
		isDeleteAllMarkersModalOpen: false,
		isDeletingAllMarkers: false,
		isEditDialogOpen: false,
		isLoading: false,
		isRowActionPending: false,
		isSubmitting: false,
		isUploading: false,
		loadError: null,
		markers: [],
		totalItems: 1,
		onCancelEditMarker() {},
		onChangeEditFilename() {},
		onCloseDeleteAllMarkersModal() {},
		onDeleteAllMarkers: async () => {},
		onDeleteMarker: async () => {},
		onDownloadMarker() {},
		onConfirmEditMarker: async () => {},
		onEditMarker() {},
		onOpenDeleteAllMarkersModal() {},
		onUploadMarkers: async () => {},
		onChangeView() {},
		paginatedMarkers: [ createMarker() ],
		submitError: null,
		totalPages: 1,
		view: {
			type: 'grid',
			page: 1,
			perPage: 12,
			titleField: 'title',
			mediaField: 'map_preview',
			fields: [],
			showMedia: true,
			showTitle: true,
			showDescription: false,
			layout: {
				previewSize: 200,
				badgeFields: [],
			},
		},
		...overrides,
	} as MarkersController;
}

afterEach(() => {
	globalThis.window = originalGlobals.window;
	globalThis.document = originalGlobals.document;
	globalThis.navigator = originalGlobals.navigator;
	globalThis.HTMLElement = originalGlobals.HTMLElement;
	globalThis.SVGElement = originalGlobals.SVGElement;
	globalThis.ResizeObserver = originalGlobals.ResizeObserver;
	globalThis.IntersectionObserver = originalGlobals.IntersectionObserver;
	globalThis.requestAnimationFrame = originalGlobals.requestAnimationFrame;
	globalThis.cancelAnimationFrame = originalGlobals.cancelAnimationFrame;
});

describe('MarkerMiniMap', () => {
	test('renders a static themed preview without maplibre canvas output', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);
		const theme = createTheme();

		root.render(
			createElement(MarkerMiniMap, {
				marker: createMarker(),
				theme,
			})
		);

		await flushRender();

		const preview = host.querySelector(
			'.minimal-map-admin__mini-map-preview--card'
		) as HTMLDivElement | null;

		expect(preview).not.toBeNull();
		expect(preview?.style.getPropertyValue('--minimal-map-mini-map-background')).toBe(
			theme.colors.background
		);
		expect(preview?.style.getPropertyValue('--minimal-map-mini-map-water')).toBe(
			theme.colors.water
		);
		expect(preview?.style.getPropertyValue('--minimal-map-mini-map-road-fill')).toBe(
			theme.colors.roadMajorFill
		);
		expect(preview?.querySelector('svg')).not.toBeNull();
		expect(preview?.querySelector('.maplibregl-canvas')).toBeNull();

		root.unmount();
	});

	test('renders inside the markers grid media slot', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);

		root.render(
			createElement(
				CacheProvider,
				{
					value: createCache({
						key: 'minimal-map-test',
					}),
				},
				createElement(MarkersGrid, {
					controller: createControllerStub(),
				})
			)
		);

		await flushRender();

		expect(dom.window.document.body.textContent).toContain('marker-7.svg');
		expect(
			host.querySelectorAll('.minimal-map-admin__mini-map-preview--card').length
		).toBeGreaterThan(0);
		expect(host.querySelector('.maplibregl-canvas')).toBeNull();

		root.unmount();
	});
});
