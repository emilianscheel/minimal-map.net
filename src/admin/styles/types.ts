import { ReactNode } from 'react';
import { StyleThemeRecord, StyleThemeColors, StylePaletteTemplate } from '../../types';

export interface StylesNotice {
	status: 'success' | 'warning' | 'error' | 'info';
	message: string;
}

export interface StylesController {
	themes: StyleThemeRecord[];
	activeTheme: StyleThemeRecord | null;
	paletteTemplates: StylePaletteTemplate[];
	isLoading: boolean;
	isSaving: boolean;
	isApplyingPaletteTemplate: boolean;
	draftColors: StyleThemeColors | null;
	actionNotice: StylesNotice | null;
	setDraftColor: (slot: string, color: string) => void;
	saveTheme: () => Promise<void>;
	createTheme: (label: string) => Promise<void>;
	deleteTheme: (slug: string) => Promise<void>;
	applyPaletteTemplate: (templateId: string) => Promise<void>;
	switchTheme: (slug: string) => void;
	onImportFiles: (files: FileList) => Promise<void>;
	exportTheme: () => void;
	headerAction: ReactNode;
	dismissActionNotice: () => void;

	// Modal states
	isCreateModalOpen: boolean;
	isDeleteModalOpen: boolean;
	openCreateModal: () => void;
	closeCreateModal: () => void;
	openDeleteModal: () => void;
	closeDeleteModal: () => void;
}
