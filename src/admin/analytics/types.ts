import type { ViewTable } from '@wordpress/dataviews';
import type { ReactNode } from 'react';
import type {
	ActionAnalyticsSummary,
	AnalyticsEventCategory,
	AnalyticsQueryRecord,
	AnalyticsRangeKey,
	SearchAnalyticsSummary,
	SelectionAnalyticsSummary,
} from '../../types';

export interface AnalyticsNotice {
	status: 'success' | 'error';
	message: string;
}

export interface AnalyticsSummaryByCategory {
	search: SearchAnalyticsSummary;
	selection: SelectionAnalyticsSummary;
	action: ActionAnalyticsSummary;
}

export interface AnalyticsTableState {
	queries: AnalyticsQueryRecord[];
	totalItems: number;
	totalPages: number;
	view: ViewTable;
}

export interface AnalyticsTablesByCategory {
	search: AnalyticsTableState;
	selection: AnalyticsTableState;
	action: AnalyticsTableState;
}

export interface AnalyticsController {
	enabled: boolean;
	complianzEnabled: boolean;
	complianzInstalled: boolean;
	headerAction: ReactNode;
	isConfirmEnableModalOpen: boolean;
	isDeleteAllAnalyticsModalOpen: boolean;
	isDeletingAllAnalytics: boolean;
	isLoading: boolean;
	isLoadingSummary: boolean;
	isSavingSettings: boolean;
	loadError: string | null;
	notice: AnalyticsNotice | null;
	range: AnalyticsRangeKey;
	summaries: AnalyticsSummaryByCategory;
	tables: AnalyticsTablesByCategory;
	dismissNotice: () => void;
	onChangeRange: (range: AnalyticsRangeKey) => void;
	onChangeView: (category: AnalyticsEventCategory, view: ViewTable) => void;
	onCloseConfirmEnableModal: () => void;
	onCloseDeleteAllAnalyticsModal: () => void;
	onConfirmEnableAnalytics: () => Promise<void>;
	onDeleteAllAnalytics: () => Promise<void>;
	onOpenDeleteAllAnalyticsModal: () => void;
	onToggleAnalytics: () => void;
	onToggleComplianz: () => void;
}
