import { FormToggle } from '@wordpress/components';
import type { ViewTable } from '@wordpress/dataviews';
import { useCallback, useEffect, useMemo, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { configureApiFetch } from '../../lib/locations/configureApiFetch';
import { fetchAnalyticsQueries } from '../../lib/analytics/fetchAnalyticsQueries';
import { fetchAnalyticsSummary } from '../../lib/analytics/fetchAnalyticsSummary';
import { updateAnalyticsSettings } from '../../lib/analytics/updateAnalyticsSettings';
import type {
	ActionAnalyticsSummary,
	AnalyticsAdminConfig,
	AnalyticsEventCategory,
	AnalyticsQueriesResponse,
	AnalyticsRangeKey,
	AnalyticsSettings,
	AnalyticsSummary,
	SearchAnalyticsSummary,
	SelectionAnalyticsSummary,
} from '../../types';
import AnalyticsRangeSelector from './AnalyticsRangeSelector';
import {
	DEFAULT_ANALYTICS_RANGE,
	EMPTY_ACTION_ANALYTICS_SUMMARY,
	EMPTY_ANALYTICS_TABLES,
	EMPTY_SEARCH_ANALYTICS_SUMMARY,
	EMPTY_SELECTION_ANALYTICS_SUMMARY,
} from './constants';
import type {
	AnalyticsController,
	AnalyticsSummaryByCategory,
	AnalyticsTableState,
	AnalyticsTablesByCategory,
} from './types';

function toSearchSummary(summary: AnalyticsSummary): SearchAnalyticsSummary {
	return summary.category === 'search' ? summary : EMPTY_SEARCH_ANALYTICS_SUMMARY;
}

function toSelectionSummary(summary: AnalyticsSummary): SelectionAnalyticsSummary {
	return summary.category === 'selection' ? summary : EMPTY_SELECTION_ANALYTICS_SUMMARY;
}

function toActionSummary(summary: AnalyticsSummary): ActionAnalyticsSummary {
	return summary.category === 'action' ? summary : EMPTY_ACTION_ANALYTICS_SUMMARY;
}

function updateTableState(
	currentTables: AnalyticsTablesByCategory,
	category: AnalyticsEventCategory,
	nextState: Partial<AnalyticsTableState>,
): AnalyticsTablesByCategory {
	return {
		...currentTables,
		[category]: {
			...currentTables[category],
			...nextState,
		},
	};
}

export function useAnalyticsController(
	config: AnalyticsAdminConfig
): AnalyticsController {
	const [enabled, setEnabled] = useState(config.enabled);
	const [complianzEnabled, setComplianzEnabled] = useState(config.complianzEnabled);
	const [isConfirmEnableModalOpen, setConfirmEnableModalOpen] = useState(false);
	const [isLoadingSummary, setLoadingSummary] = useState(true);
	const [isLoadingTables, setLoadingTables] = useState<Record<AnalyticsEventCategory, boolean>>({
		search: true,
		selection: true,
		action: true,
	});
	const [isSavingSettings, setSavingSettings] = useState(false);
	const [loadError, setLoadError] = useState<string | null>(null);
	const [notice, setNotice] = useState<AnalyticsController['notice']>(null);
	const [range, setRange] = useState<AnalyticsRangeKey>(DEFAULT_ANALYTICS_RANGE);
	const [summaries, setSummaries] = useState<AnalyticsSummaryByCategory>({
		search: EMPTY_SEARCH_ANALYTICS_SUMMARY,
		selection: EMPTY_SELECTION_ANALYTICS_SUMMARY,
		action: EMPTY_ACTION_ANALYTICS_SUMMARY,
	});
	const [tables, setTables] = useState<AnalyticsTablesByCategory>(EMPTY_ANALYTICS_TABLES);

	const loadSummary = useCallback(async () => {
		const [searchSummary, selectionSummary, actionSummary] = await Promise.all([
			fetchAnalyticsSummary(config, range, 'search'),
			fetchAnalyticsSummary(config, range, 'selection'),
			fetchAnalyticsSummary(config, range, 'action'),
		]);

		setSummaries({
			search: toSearchSummary(searchSummary),
			selection: toSelectionSummary(selectionSummary),
			action: toActionSummary(actionSummary),
		});
	}, [config, range]);

	const loadQueries = useCallback(async (
		category: AnalyticsEventCategory,
		nextView: ViewTable,
	) => {
		const response: AnalyticsQueriesResponse = await fetchAnalyticsQueries(
			config,
			{
				page: nextView.page,
				perPage: nextView.perPage,
				search: nextView.search,
			},
			range,
			category,
		);

		setTables((currentTables) => updateTableState(currentTables, category, {
			queries: response.items,
			totalItems: response.totalItems,
			totalPages: response.totalPages,
		}));
	}, [config, range]);

	useEffect(() => {
		configureApiFetch(config.nonce);
	}, [config.nonce]);

	useEffect(() => {
		let isMounted = true;

		setLoadingSummary(true);
		setLoadError(null);

		void loadSummary()
			.catch((error) => {
				if (!isMounted) {
					return;
				}

				setLoadError(
					error instanceof Error
						? error.message
						: __('Analytics data could not be loaded.', 'minimal-map')
				);
			})
			.finally(() => {
				if (isMounted) {
					setLoadingSummary(false);
				}
			});

		return () => {
			isMounted = false;
		};
	}, [loadSummary]);

	useEffect(() => {
		let isMounted = true;
		const nextView = tables.search.view;

		setLoadingTables((current) => ({ ...current, search: true }));
		setLoadError(null);

		void loadQueries('search', nextView)
			.catch((error) => {
				if (!isMounted) {
					return;
				}

				setLoadError(
					error instanceof Error
						? error.message
						: __('Analytics data could not be loaded.', 'minimal-map')
				);
			})
			.finally(() => {
				if (isMounted) {
					setLoadingTables((current) => ({ ...current, search: false }));
				}
			});

		return () => {
			isMounted = false;
		};
	}, [loadQueries, tables.search.view]);

	useEffect(() => {
		let isMounted = true;
		const nextView = tables.selection.view;

		setLoadingTables((current) => ({ ...current, selection: true }));
		setLoadError(null);

		void loadQueries('selection', nextView)
			.catch((error) => {
				if (!isMounted) {
					return;
				}

				setLoadError(
					error instanceof Error
						? error.message
						: __('Analytics data could not be loaded.', 'minimal-map')
				);
			})
			.finally(() => {
				if (isMounted) {
					setLoadingTables((current) => ({ ...current, selection: false }));
				}
			});

		return () => {
			isMounted = false;
		};
	}, [loadQueries, tables.selection.view]);

	useEffect(() => {
		let isMounted = true;
		const nextView = tables.action.view;

		setLoadingTables((current) => ({ ...current, action: true }));
		setLoadError(null);

		void loadQueries('action', nextView)
			.catch((error) => {
				if (!isMounted) {
					return;
				}

				setLoadError(
					error instanceof Error
						? error.message
						: __('Analytics data could not be loaded.', 'minimal-map')
				);
			})
			.finally(() => {
				if (isMounted) {
					setLoadingTables((current) => ({ ...current, action: false }));
				}
			});

		return () => {
			isMounted = false;
		};
	}, [loadQueries, tables.action.view]);

	const onChangeView = useCallback((category: AnalyticsEventCategory, nextView: ViewTable) => {
		setTables((currentTables) => {
			const currentView = currentTables[category].view;

			return updateTableState(currentTables, category, {
				view: {
					...currentView,
					...nextView,
					page: nextView.search !== currentView.search ? 1 : (nextView.page ?? currentView.page),
				},
			});
		});
	}, []);

	const onChangeRange = useCallback((nextRange: AnalyticsRangeKey) => {
		setRange(nextRange);
		setTables((currentTables) => ({
			search: {
				...currentTables.search,
				view: {
					...currentTables.search.view,
					page: 1,
				},
			},
			selection: {
				...currentTables.selection,
				view: {
					...currentTables.selection.view,
					page: 1,
				},
			},
			action: {
				...currentTables.action,
				view: {
					...currentTables.action.view,
					page: 1,
				},
			},
		}));
	}, []);

	const persistSettings = useCallback(async (nextSettings: Partial<AnalyticsSettings>) => {
		setSavingSettings(true);
		setNotice(null);

		try {
			const response = await updateAnalyticsSettings(config, nextSettings);
			if (response.enabled !== undefined) {
				setEnabled(response.enabled);
			}
			if (response.complianzEnabled !== undefined) {
				setComplianzEnabled(response.complianzEnabled);
			}
			setConfirmEnableModalOpen(false);
		} catch (error) {
			setNotice({
				status: 'error',
				message:
					error instanceof Error
						? error.message
						: __('Analytics settings could not be updated.', 'minimal-map'),
			});
		} finally {
			setSavingSettings(false);
		}
	}, [config]);

	const headerAction = useMemo(() => (
		<div className="minimal-map-admin__analytics-header-actions">
			<AnalyticsRangeSelector activeRange={range} onSelect={onChangeRange} />
			<div className="minimal-map-admin__analytics-toggle-group">
				<label className="minimal-map-admin__analytics-toggle" htmlFor="minimal-map-analytics-complianz-toggle">
					<span className="minimal-map-admin__analytics-toggle-label">
						{__('Only track if Complianz confirmed', 'minimal-map')}
					</span>
					<FormToggle
						id="minimal-map-analytics-complianz-toggle"
						checked={complianzEnabled}
						disabled={isSavingSettings}
						onChange={() => {
							void persistSettings({ complianzEnabled: !complianzEnabled });
						}}
					/>
				</label>
				<label className="minimal-map-admin__analytics-toggle" htmlFor="minimal-map-analytics-toggle">
					<span className="minimal-map-admin__analytics-toggle-label">
						{__('Analytics tracking', 'minimal-map')}
					</span>
					<FormToggle
						id="minimal-map-analytics-toggle"
						checked={enabled}
						disabled={isSavingSettings}
						onChange={() => {
							if (enabled) {
								void persistSettings({ enabled: false });
								return;
							}

							setConfirmEnableModalOpen(true);
						}}
					/>
				</label>
			</div>
		</div>
	), [complianzEnabled, enabled, isSavingSettings, onChangeRange, persistSettings, range]);

	return {
		enabled,
		complianzEnabled,
		headerAction,
		isConfirmEnableModalOpen,
		isLoading: isLoadingSummary || isLoadingTables.search || isLoadingTables.selection || isLoadingTables.action,
		isLoadingSummary,
		isSavingSettings,
		loadError,
		notice,
		range,
		summaries,
		tables,
		dismissNotice: () => setNotice(null),
		onChangeRange,
		onChangeView,
		onCloseConfirmEnableModal: () => setConfirmEnableModalOpen(false),
		onConfirmEnableAnalytics: async () => {
			await persistSettings({ enabled: true });
		},
		onToggleAnalytics: () => {
			if (enabled) {
				void persistSettings({ enabled: false });
				return;
			}

			setConfirmEnableModalOpen(true);
		},
		onToggleComplianz: () => {
			void persistSettings({ complianzEnabled: !complianzEnabled });
		},
	};
}
