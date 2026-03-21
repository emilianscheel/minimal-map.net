import { Notice, Spinner } from '@wordpress/components';
import AnalyticsCards from './AnalyticsCards';
import AnalyticsEmptyState from './AnalyticsEmptyState';
import AnalyticsTable from './AnalyticsTable';
import EnableAnalyticsModal from './EnableAnalyticsModal';
import type { AnalyticsController } from './types';

export { useAnalyticsController } from './controller';
export type { AnalyticsController } from './types';

export default function AnalyticsView({
	controller,
	siteLocale,
	siteTimezone,
}: {
	controller: AnalyticsController;
	siteLocale: string;
	siteTimezone: string;
}) {
	const hasSearch = Boolean(controller.view.search?.trim());
	const hasTrackedData = controller.summary.totalSearches > 0;

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
				<AnalyticsCards summary={controller.summary} />

				{controller.isLoading ? (
					<div className="minimal-map-admin__analytics-state">
						<Spinner />
					</div>
				) : controller.queries.length === 0 ? (
					<AnalyticsEmptyState
						enabled={controller.enabled}
						hasSearch={hasSearch}
						hasTrackedData={hasTrackedData}
					/>
				) : (
					<AnalyticsTable
						controller={controller}
						siteLocale={siteLocale}
						siteTimezone={siteTimezone}
					/>
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
