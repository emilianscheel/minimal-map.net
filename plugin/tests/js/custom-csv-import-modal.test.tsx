import { afterEach, describe, expect, test } from 'bun:test';
import { JSDOM } from 'jsdom';
import { createElement, createRoot } from '@wordpress/element';
import CustomCsvImportModal from '../../src/admin/locations/CustomCsvImportModal';
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
		csvImportColumnOptions: [
			{ label: 'None', value: '' },
			{ label: 'Monday Hours (8-12)', value: '0' },
			{ label: 'Notes (Summer)', value: '1' },
		],
		csvImportHeaders: ['Monday Hours', 'Notes'],
		csvImportLogoId: '',
		csvImportMarkerId: '',
		csvImportOpeningHoursColumnOptions: [
			{ label: 'None', value: '' },
			{ label: 'Monday Hours (8-12)', value: '0' },
		],
		csvImportOpeningHoursMapping: createEmptyCsvOpeningHoursImportMapping(),
		csvImportMapping: createEmptyCsvImportMapping(),
		csvImportProgressCompleted: 0,
		csvImportProgressTotal: 0,
		csvImportRows: [['8-12', 'Summer']],
		csvImportStep: 'mapping',
		csvImportTagIds: [],
		dismissActionNotice() {},
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
		isAssignmentSaving: false,
		isCustomCsvImportModalOpen: true,
		isDeleteAllLocationsModalOpen: false,
		isDeletingAllLocations: false,
		isDeleteLogoConfirmationModalOpen: false,
		isDialogOpen: false,
		isExporting: false,
		isGeocoding: false,
		isImporting: false,
		isLoading: false,
		isRemoveCollectionAssignmentModalOpen: false,
		isRemoveMarkerConfirmationModalOpen: false,
		isRemoveTagsConfirmationModalOpen: false,
		isRemovingCollectionAssignment: false,
		isRowActionPending: false,
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
		onCloseCustomCsvImportModal() {},
		onCloseDeleteAllLocationsModal() {},
		onCloseDeleteLogoConfirmationModal() {},
		onCloseRemoveCollectionAssignmentModal() {},
		onCloseRemoveMarkerConfirmationModal() {},
		onCloseRemoveTagsConfirmationModal() {},
		onConfirm: async () => {},
		onDeleteLocation: async () => {},
		onDeleteLocations: async () => {},
		onDeleteAllLocations: async () => {},
		onDuplicateLocation: async () => {},
		onEditLocation() {},
		onExportExample() {},
		onExportLocations() {},
		onImportLocations: async () => {},
		onMapLocationSelect() {},
		onOpenAssignLogoModal() {},
		onOpenAssignMarkerModal() {},
		onOpenAssignTagsModal() {},
		onOpenAssignToCollectionModal() {},
		onOpenDeleteAllLocationsModal() {},
		onOpenDeleteLogoConfirmationModal() {},
		onOpenRemoveCollectionAssignmentModal() {},
		onOpenRemoveMarkerConfirmationModal() {},
		onOpenRemoveTagsConfirmationModal() {},
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
		onStartCustomCsvImport: async () => {},
		paginatedLocations: [],
		selectedAssignmentLocation: null,
		selectedCoordinates: null,
		selectedLogoLocations: [],
		selectedLogoRemovalLocations: [],
		selectedMarkerLocations: [],
		selectedMarkerRemovalLocations: [],
		selectedRemovalCollection: null,
		selectedRemovalLocation: null,
		selectedTagRemovalLocations: [],
		selectedTagsLocations: [],
		selection: [],
		step: 'details',
		submitError: null,
		submitLabel: '',
		tags: [],
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

describe('CustomCsvImportModal', () => {
	test('uses the first next action to advance from mapping to opening hours', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);
		let advanced = 0;

		root.render(
			createElement(CustomCsvImportModal, {
				controller: createControllerStub({
					onAdvanceCustomCsvImportStep() {
						advanced += 1;
					},
				}),
			})
		);

		await flushRender();

		const buttons = Array.from(dom.window.document.querySelectorAll('button'));
		const nextButton = buttons.find((button) => button.textContent?.includes('Next'));
		nextButton?.click();

		expect(advanced).toBe(1);

		root.unmount();
	});

	test('renders opening-hours rows with filtered day options and unrestricted notes options', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);
		let wentBack = 0;

		root.render(
			createElement(CustomCsvImportModal, {
				controller: createControllerStub({
					csvImportStep: 'opening_hours',
					onBackCustomCsvImportStep() {
						wentBack += 1;
					},
				}),
			})
		);

		await flushRender();

		expect(dom.window.document.body.textContent).toContain('Mon');
		expect(dom.window.document.body.textContent).toContain('Opening hours notes');

		const activeSelects = Array.from(
			dom.window.document.querySelectorAll('select:not([disabled])')
		);
		const mondayOptions = Array.from(activeSelects[0]?.querySelectorAll('option') ?? []).map(
			(option) => option.textContent
		);
		const notesOptions = Array.from(activeSelects[7]?.querySelectorAll('option') ?? []).map(
			(option) => option.textContent
		);

		expect(mondayOptions).toContain('Monday Hours (8-12)');
		expect(mondayOptions).not.toContain('Notes (Summer)');
		expect(notesOptions).toContain('Monday Hours (8-12)');
		expect(notesOptions).toContain('Notes (Summer)');

		const backButton = Array.from(dom.window.document.querySelectorAll('button')).find((button) =>
			button.textContent?.includes('Back')
		);
		backButton?.click();

		expect(wentBack).toBe(1);

		root.unmount();
	});
});
