import { afterEach, describe, expect, test } from 'bun:test';
import { JSDOM } from 'jsdom';
import { createElement, createRoot } from '@wordpress/element';
import LocationImportProgressModal from '../../src/admin/locations/LocationImportProgressModal';
import type { LocationsController } from '../../src/admin/locations/types';
import {
	createEmptyCsvImportMapping,
	createEmptyCsvOpeningHoursImportMapping,
} from '../../src/lib/locations/importLocations';

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
}

async function flushRender(): Promise<void> {
	await new Promise((resolve) => setTimeout(resolve, 0));
}

function createControllerStub(
	overrides: Partial<LocationsController> = {}
): LocationsController {
	return {
		actionNotice: null,
		activeTheme: null,
		assignmentCollectionId: '',
		assignmentLogoId: '',
		assignmentMarkerId: '',
		assignmentTagIds: [],
		collections: [],
		csvImportColumnOptions: [],
		csvImportHeaders: [],
		csvImportLogoId: '',
		csvImportMarkerId: '',
		csvImportOpeningHoursColumnOptions: [],
		csvImportOpeningHoursMapping: createEmptyCsvOpeningHoursImportMapping(),
		csvImportMapping: createEmptyCsvImportMapping(),
		csvImportProgressCompleted: 2,
		csvImportProgressTotal: 5,
		csvImportRows: [],
		csvImportStep: 'mapping',
		csvImportTagIds: [],
		dismissActionNotice() {},
		editingLocation: null,
		fieldErrors: {},
		form: {} as never,
		formMode: 'create',
		geocodeError: null,
		geocodeNotice: null,
		getCollectionsForLocation() {
			return [];
		},
		getLogoForLocation() {
			return null;
		},
		getMarkerForLocation() {
			return null;
		},
		getTagsForLocation() {
			return [];
		},
		headerAction: null,
		isAssignLogoModalOpen: false,
		isAssignMarkerModalOpen: false,
		isAssignTagsModalOpen: false,
		isAssignToCollectionModalOpen: false,
		isAssignOpeningHoursModalOpen: false,
		isAssignmentSaving: false,
		isCustomCsvImportModalOpen: false,
		isLocationImportProgressModalOpen: true,
		isDeleteAllLocationsModalOpen: false,
		isDeletingAllLocations: false,
		isDeleteLogoConfirmationModalOpen: false,
		isDialogOpen: false,
		isExporting: false,
		isGeocoding: false,
		isImporting: true,
		isLoading: false,
		isMarkerColorModalOpen: false,
		isRemoveCollectionAssignmentModalOpen: false,
		isRemoveMarkerConfirmationModalOpen: false,
		isRemoveTagsConfirmationModalOpen: false,
		isRemovingCollectionAssignment: false,
		isRowActionPending: false,
		isShowLocationConfirmationModalOpen: false,
		isSubmitting: false,
		loadError: null,
		locations: [],
		logos: [],
		mapCenter: null,
		markers: [],
		modalTitle: '',
		onAddLocation() {},
		onAdvanceCustomCsvImportStep() {},
		onAssignLocationToCollection: async () => {},
		onAssignLogoToLocation: async () => {},
		onAssignMarkerToLocation: async () => {},
		onAssignTagsToLocation: async () => {},
		onAssignOpeningHoursToLocations: async () => {},
		onBack() {},
		onBackCustomCsvImportStep() {},
		onCancel() {},
		onChangeCsvImportMapping() {},
		onChangeCsvImportOpeningHoursMapping() {},
		onChangeFormValue() {},
		onChangeOpeningHoursDayValue() {},
		onChangeOpeningHoursNotes() {},
		onChangeSelection() {},
		onChangeView() {},
		onClearLogosFromLocations: async () => {},
		onClearMarkersFromLocations: async () => {},
		onClearTagsFromLocations: async () => {},
		onCloseAssignLogoModal() {},
		onCloseAssignMarkerModal() {},
		onCloseAssignTagsModal() {},
		onCloseAssignToCollectionModal() {},
		onCloseAssignOpeningHoursModal() {},
		onCloseCustomCsvImportModal() {},
		onCloseLocationImportProgressModal() {},
		onCloseDeleteAllLocationsModal() {},
		onCloseDeleteLogoConfirmationModal() {},
		onCloseMarkerColorModal() {},
		onCloseRemoveCollectionAssignmentModal() {},
		onCloseRemoveMarkerConfirmationModal() {},
		onCloseRemoveTagsConfirmationModal() {},
		onCloseShowLocationConfirmationModal() {},
		onConfirm: async () => {},
		onConfirmMarkerColor: async () => {},
		onConfirmShowLocation: async () => {},
		onDeleteAllLocations: async () => {},
		onDeleteLocation: async () => {},
		onDeleteLocations: async () => {},
		onDuplicateLocation: async () => {},
		onEditLocation() {},
		onExportExample() {},
		onExportExampleExcel() {},
		onExportExcel() {},
		onExportLocations() {},
		onImportLocations: async () => {},
		onMapLocationSelect() {},
		onOpenAssignLogoModal() {},
		onOpenAssignMarkerModal() {},
		onOpenAssignTagsModal() {},
		onOpenAssignToCollectionModal() {},
		onOpenAssignOpeningHoursModal() {},
		onOpenDeleteAllLocationsModal() {},
		onOpenDeleteLogoConfirmationModal() {},
		onOpenMarkerColorModal() {},
		onOpenRemoveCollectionAssignmentModal() {},
		onOpenRemoveMarkerConfirmationModal() {},
		onOpenRemoveTagsConfirmationModal() {},
		onOpenShowLocationConfirmationModal() {},
		onQuickAssignLogo: async () => {},
		onQuickAssignMarker: async () => {},
		onQuickAssignTag: async () => {},
		onRemoveCollectionAssignment: async () => {},
		onRetrieveLocation: async () => {},
		onSelectAssignmentCollection() {},
		onSelectAssignmentLogo() {},
		onSelectAssignmentMarker() {},
		onSelectAssignmentTags() {},
		onSelectCsvImportLogo() {},
		onSelectCsvImportMarker() {},
		onSelectCsvImportTags() {},
		onSetLocationVisibility: async () => {},
		onStartCustomCsvImport: async () => {},
		paginatedLocations: [],
		selectedAssignmentLocation: null,
		selectedCoordinates: null,
		selectedLogoLocations: [],
		selectedLogoRemovalLocations: [],
		selectedMarkerColorLocations: [],
		selectedMarkerLocations: [],
		selectedMarkerRemovalLocations: [],
		selectedOpeningHoursLocations: [],
		selectedRemovalCollection: null,
		selectedRemovalLocation: null,
		selectedShownLocation: null,
		selectedTagRemovalLocations: [],
		selectedTagsLocations: [],
		selection: [],
		step: 'details',
		submitError: null,
		submitLabel: '',
		tags: [],
		totalItems: 0,
		totalPages: 1,
		view: { type: 'table', page: 1, perPage: 10, fields: [], layout: {} },
		...overrides,
	} as LocationsController;
}

afterEach(() => {
	globalThis.window = originalGlobals.window;
	globalThis.document = originalGlobals.document;
	globalThis.navigator = originalGlobals.navigator;
	globalThis.HTMLElement = originalGlobals.HTMLElement;
});

describe('LocationImportProgressModal', () => {
	test('renders the shared progress bar with row-based progress values', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);

		root.render(
			createElement(LocationImportProgressModal, {
				controller: createControllerStub(),
			})
		);

		await flushRender();

		const progress = dom.window.document.querySelector('progress');
		expect(progress).not.toBeNull();
		expect(progress?.getAttribute('max')).toBe('5');
		expect(progress?.getAttribute('value')).toBe('2');

		root.unmount();
	});
});
