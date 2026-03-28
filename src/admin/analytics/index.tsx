import { Notice, Spinner } from '@wordpress/components';
import type { AnalyticsEventCategory, AnalyticsSummary } from '../../types';
import AnalyticsCards, { getAnalyticsSectionTitle } from './AnalyticsCards';
import AnalyticsEmptyState from './AnalyticsEmptyState';
import AnalyticsTable from './AnalyticsTable';
import EnableAnalyticsModal from './EnableAnalyticsModal';
import type { AnalyticsController } from './types';

export { useAnalyticsController } from './controller';
export type { AnalyticsController } from './types';

function getSummaryTotal(summary: AnalyticsSummary): number {
	switch (summary.category) {
		case 'selection':
			return summary.totalSelections;
		case 'action':
			return summary.totalActions;
		case 'search':
		default:
			return summary.totalSearches;
	}
}

function AnalyticsSection({
	category,
	controller,
	siteLocale,
	siteTimezone,
}: {
	category: AnalyticsEventCategory;
	controller: AnalyticsController;
	siteLocale: string;
	siteTimezone: string;
}) {
	const summary = controller.summaries[category];
	const table = controller.tables[category];
	const hasSearch = Boolean(table.view.search?.trim());
	const hasTrackedData = getSummaryTotal(summary) > 0;

	return (
		<section className="minimal-map-admin__analytics-section">
			<div className="minimal-map-admin__analytics-section-header">
				<h2 className="minimal-map-admin__analytics-section-title">
					{getAnalyticsSectionTitle(category)}
				</h2>
			</div>
			<AnalyticsCards summary={summary} />
			{controller.isLoadingSummary ? (
				<div className="minimal-map-admin__analytics-state">
					<Spinner />
				</div>
			) : table.queries.length === 0 ? (
				<AnalyticsEmptyState
					category={category}
					enabled={controller.enabled}
					hasSearch={hasSearch}
					hasTrackedData={hasTrackedData}
				/>
			) : (
				<AnalyticsTable
					category={category}
					onChangeView={(nextView) => controller.onChangeView(category, nextView)}
					queries={table.queries}
					siteLocale={siteLocale}
					siteTimezone={siteTimezone}
					totalItems={table.totalItems}
					totalPages={table.totalPages}
					view={table.view}
				/>
			)}
		</section>
	);
}

export default function AnalyticsView({
	controller,
	siteLocale,
	siteTimezone,
}: {
	controller: AnalyticsController;
	siteLocale: string;
	siteTimezone: string;
}) {
	const hasAnySearch = Boolean(
		controller.tables.search.view.search?.trim() ||
		controller.tables.selection.view.search?.trim() ||
		controller.tables.action.view.search?.trim()
	);
	const hasTrackedData =
		controller.summaries.search.totalSearches > 0 ||
		controller.summaries.selection.totalSelections > 0 ||
		controller.summaries.action.totalActions > 0;
	const shouldShowPageEmptyState = !controller.isLoading && !hasTrackedData && !hasAnySearch;

	return (
		<div className="minimal-map-admin__analytics-view">
			{controller.notice ? (
				<Notice
					className="minimal-map-admin__analytics-notice"
					status={controller.notice.status}
					onRemove={controller.dismissNotice}
				>
					{controller.notice.message}
				</Notice>
			) : null}
			{controller.loadError ? (
				<Notice className="minimal-map-admin__analytics-notice" status="error" isDismissible={false}>
					{controller.loadError}
				</Notice>
			) : null}

			<div className="minimal-map-admin__analytics-content">
				{shouldShowPageEmptyState ? (
					<AnalyticsEmptyState
						enabled={controller.enabled}
						hasSearch={false}
						hasTrackedData={false}
					/>
				) : null}

				{shouldShowPageEmptyState ? null : (
					<>
						<AnalyticsSection
							category="search"
							controller={controller}
							siteLocale={siteLocale}
							siteTimezone={siteTimezone}
						/>
						<AnalyticsSection
							category="selection"
							controller={controller}
							siteLocale={siteLocale}
							siteTimezone={siteTimezone}
						/>
						<AnalyticsSection
							category="action"
							controller={controller}
							siteLocale={siteLocale}
							siteTimezone={siteTimezone}
						/>
					</>
				)}
			</div>

			{controller.isConfirmEnableModalOpen ? (
				<EnableAnalyticsModal
					isBusy={controller.isSavingSettings}
					onClose={controller.onCloseConfirmEnableModal}
					onConfirm={controller.onConfirmEnableAnalytics}
				/>
			) : null}
		</div>
	);
}
