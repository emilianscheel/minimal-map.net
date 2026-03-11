import type { ViewGrid } from '@wordpress/dataviews';
import type { ReactNode } from 'react';
import type { LogoRecord } from '../../types';

export interface LogosNotice {
	status: 'success' | 'error';
	message: string;
}

export interface LogosController {
	actionNotice: LogosNotice | null;
	dismissActionNotice: () => void;
	headerAction: ReactNode;
	isDeleteModalOpen: boolean;
	isLoading: boolean;
	isRowActionPending: boolean;
	isUploading: boolean;
	loadError: string | null;
	logos: LogoRecord[];
	onChangeView: (nextView: ViewGrid) => void;
	onCloseDeleteModal: () => void;
	onConfirmDeleteLogo: () => Promise<void>;
	onOpenDeleteModal: (logo: LogoRecord) => void;
	onUploadLogos: (files: FileList | File[]) => Promise<void>;
	paginatedLogos: LogoRecord[];
	selectedLogo: LogoRecord | null;
	totalPages: number;
	view: ViewGrid;
}
