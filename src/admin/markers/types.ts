import type { ViewGrid } from '@wordpress/dataviews';
import type { ReactNode } from 'react';
import type { MarkerRecord, StyleThemeRecord } from '../../types';

export interface MarkersNotice {
	status: 'success' | 'error';
	message: string;
}

export interface MarkersController {
	actionNotice: MarkersNotice | null;
	activeTheme: StyleThemeRecord | null;
	dismissActionNotice: () => void;
	editFilenameBasename: string;
	editFilenameExtension: string;
	editingMarker: MarkerRecord | null;
	headerAction: ReactNode;
	isEditDialogOpen: boolean;
	isLoading: boolean;
	isRowActionPending: boolean;
	isSubmitting: boolean;
	isUploading: boolean;
	loadError: string | null;
	markers: MarkerRecord[];
	onCancelEditMarker: () => void;
	onChangeEditFilename: (value: string) => void;
	onDeleteMarker: (marker: MarkerRecord) => Promise<void>;
	onDownloadMarker: (marker: MarkerRecord) => void;
	onConfirmEditMarker: () => Promise<void>;
	onEditMarker: (marker: MarkerRecord) => void;
	onUploadMarkers: (files: FileList) => Promise<void>;
	onChangeView: (nextView: ViewGrid) => void;
	paginatedMarkers: MarkerRecord[];
	submitError: string | null;
	totalPages: number;
	view: ViewGrid;
}
