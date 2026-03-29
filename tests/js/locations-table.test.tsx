import { afterEach, describe, expect, mock, test } from 'bun:test';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { JSDOM } from 'jsdom';
import { createElement, createRoot } from '@wordpress/element';
import LocationsTable from '../../src/admin/locations/LocationsTable';
import {
	applyLocationsTableViewChange,
	createDefaultLocationsView,
} from '../../src/admin/locations/constants';
import type { LocationsController } from '../../src/admin/locations/types';
import { createDefaultOpeningHours } from '../../src/lib/locations/openingHours';
import type { AdminLocationListItem, LocationRecord } from '../../src/types';

const originalGlobals = {
	cancelAnimationFrame: globalThis.cancelAnimationFrame,
	document: globalThis.document,
	Element: globalThis.Element,
	getComputedStyle: globalThis.getComputedStyle,
	HTMLElement: globalThis.HTMLElement,
	HTMLIFrameElement: globalThis.HTMLIFrameElement,
	Node: globalThis.Node,
	navigator: globalThis.navigator,
	requestAnimationFrame: globalThis.requestAnimationFrame,
	ResizeObserver: globalThis.ResizeObserver,
	window: globalThis.window,
};

function setGlobalDom(dom: JSDOM): void {
	globalThis.window = dom.window as never;
	globalThis.document = dom.window.document as never;
	globalThis.navigator = dom.window.navigator as never;
	globalThis.Element = dom.window.Element as never;
	globalThis.getComputedStyle = dom.window.getComputedStyle.bind(dom.window) as never;
	globalThis.HTMLElement = dom.window.HTMLElement as never;
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

function createTestCache(dom: JSDOM) {
	return createCache({
		key: 'minimal-map-test',
		container: dom.window.document.head,
	});
}

async function flushRender(): Promise<void> {
	await new Promise((resolve) => setTimeout(resolve, 0));
}

function createLocationRecord(overrides: Partial<AdminLocationListItem> = {}): AdminLocationListItem {
	const baseRecord: LocationRecord = {
		id: 1,
		title: 'Berlin Studio',
		telephone: '',
		email: '',
		website: '',
		street: '',
		house_number: '',
		postal_code: '',
		city: '',
		state: '',
		country: '',
		latitude: '52.5',
		longitude: '13.4',
		logo_id: 0,
		marker_id: 0,
		marker_color: '#3FB1CE',
		is_hidden: false,
		opening_hours: createDefaultOpeningHours(),
		opening_hours_notes: '',
		social_media: [],
		tag_ids: [],
	};

	return {
		...baseRecord,
		collections: [],
		logo: null,
		marker: null,
		tags_data: [],
		...overrides,
	};
}

function createController(overrides: Partial<LocationsController> = {}): LocationsController {
	return {
		actionNotice: null,
		activeTheme: null,
		assignmentCollectionId: '',
		assignmentLogoId: '',
		assignmentMarkerId: '',
		assignmentTagIds: [],
		csvImportHeaders: [],
		csvImportColumnOptions: [],
		csvImportLogoId: '',
		csvImportMarkerId: '',
		csvImportOpeningHoursColumnOptions: [],
		csvImportOpeningHoursMapping: {
			monday: null,
			tuesday: null,
			wednesday: null,
			thursday: null,
			friday: null,
			saturday: null,
			sunday: null,
			opening_hours_notes: null,
		},
		csvImportRows: [],
		csvImportTagIds: [],
		csvImportMapping: {
			title: null,
			email: null,
			telephone: null,
			website: null,
			street: null,
			house_number: null,
			city: null,
			postal_code: null,
			country: null,
			is_hidden: null,
		},
		csvImportProgressCompleted: 0,
		csvImportProgressTotal: 0,
		csvImportStep: 'mapping',
		collections: [],
		logos: [],
		markers: [],
		tags: [],
		editingLocation: null,
		fieldErrors: {},
		form: {
			title: '',
			telephone: '',
			email: '',
			website: '',
			street: '',
			house_number: '',
			postal_code: '',
			city: '',
			state: '',
			country: '',
			latitude: '',
			longitude: '',
			logo_id: 0,
			marker_id: 0,
			marker_color: '#3FB1CE',
			is_hidden: false,
			opening_hours: createDefaultOpeningHours(),
			opening_hours_notes: '',
			social_media: [],
			tag_ids: [],
		},
		formMode: 'create',
		geocodeError: null,
		geocodeNotice: null,
		headerAction: null,
		isAssignToCollectionModalOpen: false,
		isAssignLogoModalOpen: false,
		isAssignMarkerModalOpen: false,
		isAssignTagsModalOpen: false,
		isAssignOpeningHoursModalOpen: false,
		isAssignmentSaving: false,
		isDeleteLogoConfirmationModalOpen: false,
		isRemoveMarkerConfirmationModalOpen: false,
		isRemoveTagsConfirmationModalOpen: false,
		isShowLocationConfirmationModalOpen: false,
		isDialogOpen: false,
		isMarkerColorModalOpen: false,
		isGeocoding: false,
		isLoading: false,
		isCustomCsvImportModalOpen: false,
		isLocationImportProgressModalOpen: false,
		isDeleteAllLocationsModalOpen: false,
		isRemoveCollectionAssignmentModalOpen: false,
		isDeletingAllLocations: false,
		isRemovingCollectionAssignment: false,
		isRowActionPending: false,
		isSubmitting: false,
		isImporting: false,
		isExporting: false,
		loadError: null,
		locations: [],
		totalItems: 1,
		mapCenter: null,
		modalTitle: '',
		getCollectionsForLocation: () => [],
		getLogoForLocation: () => null,
		getMarkerForLocation: () => null,
		getTagsForLocation: () => [],
		selectedLogoLocations: [],
		selectedMarkerLocations: [],
		selectedMarkerColorLocations: [],
		selectedOpeningHoursLocations: [],
		selectedAssignmentLocation: null,
		selectedTagsLocations: [],
		selectedLogoRemovalLocations: [],
		selectedMarkerRemovalLocations: [],
		selectedTagRemovalLocations: [],
		selectedShownLocation: null,
		selectedRemovalCollection: null,
		selectedRemovalLocation: null,
		selectedCoordinates: null,
		selection: [],
		submitLabel: '',
		submitError: null,
		step: 'details',
		view: createDefaultLocationsView(),
		onAssignLocationToCollection: async () => {},
		onAssignLogoToLocation: async () => {},
		onAssignMarkerToLocation: async () => {},
		onAssignTagsToLocation: async () => {},
		onAssignOpeningHoursToLocations: async () => {},
		dismissActionNotice: () => {},
		onBack: () => {},
		onCancel: () => {},
		onChangeFormValue: () => {},
		onChangeOpeningHoursDayValue: () => {},
		onChangeOpeningHoursNotes: () => {},
		onChangeCsvImportMapping: () => {},
		onChangeCsvImportOpeningHoursMapping: () => {},
		onAdvanceCustomCsvImportStep: () => {},
		onBackCustomCsvImportStep: () => {},
		onMapLocationSelect: () => {},
		onCloseCustomCsvImportModal: () => {},
		onCloseLocationImportProgressModal: () => {},
		onCloseDeleteAllLocationsModal: () => {},
		onCloseRemoveCollectionAssignmentModal: () => {},
		onCloseAssignToCollectionModal: () => {},
		onCloseAssignLogoModal: () => {},
		onCloseAssignMarkerModal: () => {},
		onCloseAssignTagsModal: () => {},
		onCloseAssignOpeningHoursModal: () => {},
		onCloseDeleteLogoConfirmationModal: () => {},
		onCloseRemoveMarkerConfirmationModal: () => {},
		onCloseRemoveTagsConfirmationModal: () => {},
		onCloseShowLocationConfirmationModal: () => {},
		onCloseMarkerColorModal: () => {},
		onChangeView: () => {},
		onChangeSelection: () => {},
		onConfirm: async () => {},
		onConfirmMarkerColor: async () => {},
		onDeleteLocation: async () => {},
		onDeleteLocations: async () => {},
		onDeleteAllLocations: async () => {},
		onDuplicateLocation: async () => {},
		onEditLocation: () => {},
		onSetLocationVisibility: async () => {},
		onOpenAssignToCollectionModal: () => {},
		onOpenAssignLogoModal: () => {},
		onOpenAssignMarkerModal: () => {},
		onOpenAssignTagsModal: () => {},
		onOpenAssignOpeningHoursModal: () => {},
		onOpenDeleteAllLocationsModal: () => {},
		onQuickAssignLogo: async () => {},
		onQuickAssignMarker: async () => {},
		onQuickAssignTag: async () => {},
		onOpenDeleteLogoConfirmationModal: () => {},
		onOpenRemoveMarkerConfirmationModal: () => {},
		onOpenRemoveTagsConfirmationModal: () => {},
		onOpenShowLocationConfirmationModal: () => {},
		onOpenMarkerColorModal: () => {},
		onOpenRemoveCollectionAssignmentModal: () => {},
		onClearLogosFromLocations: async () => {},
		onClearMarkersFromLocations: async () => {},
		onClearTagsFromLocations: async () => {},
		onRemoveCollectionAssignment: async () => {},
		onRetrieveLocation: async () => {},
		onConfirmShowLocation: async () => {},
		onSelectAssignmentCollection: () => {},
		onSelectAssignmentLogo: () => {},
		onSelectAssignmentMarker: () => {},
		onSelectAssignmentTags: () => {},
		onSelectCsvImportLogo: () => {},
		onSelectCsvImportMarker: () => {},
		onSelectCsvImportTags: () => {},
		onImportLocations: async () => {},
		onStartCustomCsvImport: async () => {},
		onExportLocations: () => {},
		onExportExcel: () => {},
		onExportExample: () => {},
		onExportExampleExcel: () => {},
		onAddLocation: () => {},
		paginatedLocations: [createLocationRecord()],
		totalPages: 1,
		...overrides,
	};
}

afterEach(() => {
	globalThis.window = originalGlobals.window;
	globalThis.document = originalGlobals.document;
	globalThis.navigator = originalGlobals.navigator;
	globalThis.Element = originalGlobals.Element;
	globalThis.getComputedStyle = originalGlobals.getComputedStyle;
	globalThis.HTMLElement = originalGlobals.HTMLElement;
	globalThis.Node = originalGlobals.Node;
	globalThis.ResizeObserver =
		originalGlobals.ResizeObserver ??
		class {
			disconnect() {}
			observe() {}
			unobserve() {}
		};
	globalThis.HTMLIFrameElement =
		originalGlobals.HTMLIFrameElement ??
		(class {} as typeof HTMLIFrameElement);
	globalThis.requestAnimationFrame =
		originalGlobals.requestAnimationFrame ??
		((callback: FrameRequestCallback) => setTimeout(callback, 0));
	globalThis.cancelAnimationFrame =
		originalGlobals.cancelAnimationFrame ?? ((handle: number) => clearTimeout(handle));
});

describe('locations DataViews table', () => {
	test('uses the preferred page size in the default view', () => {
		expect(createDefaultLocationsView(24).perPage).toBe(24);
	});

	test('resets to page 1 and flags persistence when the page size changes', () => {
		const currentView = {
			...createDefaultLocationsView(),
			page: 3,
		};

		const result = applyLocationsTableViewChange(
			currentView,
			{
				...currentView,
				page: 3,
				perPage: 24,
			},
			8
		);

		expect(result.view.page).toBe(1);
		expect(result.view.perPage).toBe(24);
		expect(result.hasPerPageChanged).toBe(true);
	});

	test('renders the native view settings button and exposes the page-size options', async () => {
		const dom = new JSDOM('<!doctype html><html><head></head><body><div id="host"></div></body></html>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);
		const cache = createTestCache(dom);
		const onChangeView = mock((_view: unknown) => {});

		root.render(
			createElement(
				CacheProvider,
				{ value: cache },
				createElement(LocationsTable, {
					controller: createController({
						onChangeView,
						view: {
							...createDefaultLocationsView(),
							page: 3,
						},
					}),
				})
			)
		);

		await flushRender();

		const settingsButton = dom.window.document.querySelector(
			'button[aria-label="View options"]'
		) as HTMLButtonElement | null;

		expect(settingsButton).not.toBeNull();

		settingsButton?.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
		await flushRender();

		expect(dom.window.document.body.textContent).toContain('8');
		expect(dom.window.document.body.textContent).toContain('24');
		expect(dom.window.document.body.textContent).toContain('48');

		const option24 = Array.from(dom.window.document.querySelectorAll('button')).find(
			(button) => button.textContent?.trim() === '24'
		) as HTMLButtonElement | undefined;

		expect(option24).toBeDefined();

		option24?.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
		await flushRender();

		expect(onChangeView.mock.calls.length).toBeGreaterThan(0);
		expect(onChangeView.mock.calls.at(-1)?.[0]?.perPage).toBe(24);
		expect(onChangeView.mock.calls.at(-1)?.[0]?.page).toBe(1);

		root.unmount();
		await flushRender();
	});
});
