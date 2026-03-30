import type { ViewGrid } from '@wordpress/dataviews';
import type { ReactNode } from 'react';
import type { MarkerRecord } from '../../types';
import type { SvgColorEntry } from '../../lib/markers/svgColors';

export interface MarkersNotice {
	status: 'success' | 'error';
	message: string;
}

export interface MarkersController {
	actionNotice: MarkersNotice | null;
	dismissActionNotice: () => void;
	editFilenameBasename: string;
	editFilenameExtension: string;
	editingMarker: MarkerRecord | null;
	headerAction: ReactNode;
	isDeleteAllMarkersModalOpen: boolean;
	isDeletingAllMarkers: boolean;
	isEditModalOpen: boolean;
	isLoading: boolean;
	isRowActionPending: boolean;
	isSubmitting: boolean;
	isUploading: boolean;
	loadError: string | null;
	markers: MarkerRecord[];
	totalItems: number;
	onCancelEditMarker: () => void;
	onChangeEditFilename: (value: string) => void;
	onCloseDeleteAllMarkersModal: () => void;
	onDeleteAllMarkers: () => Promise<void>;
	onDeleteMarker: (marker: MarkerRecord) => Promise<void>;
	onDownloadMarker: (marker: MarkerRecord) => void;
	onConfirmEditMarker: () => Promise<void>;
	onEditMarker: (marker: MarkerRecord) => void;
	onOpenDeleteAllMarkersModal: () => void;
	onUploadMarkers: (files: FileList) => Promise<void>;
	onChangeView: (nextView: ViewGrid) => void;
	paginatedMarkers: MarkerRecord[];
	submitError: string | null;
	totalPages: number;
	view: ViewGrid;
	isColorEditModalOpen: boolean;
	colorEditingMarker: MarkerRecord | null;
	draftSvgColors: SvgColorEntry[];
	colorEditSubmitError: string | null;
	onOpenEditMarkerColors: (marker: MarkerRecord) => void;
	onCancelEditMarkerColors: () => void;
	onChangeMarkerColor: (id: string, color: string) => void;
	onToggleMarkerColorNone: (id: string) => void;
	onConfirmEditMarkerColors: () => Promise<void>;
}
