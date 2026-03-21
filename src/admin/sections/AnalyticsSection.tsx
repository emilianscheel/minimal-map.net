import ContentHeader from '../ContentHeader';
import AnalyticsView, { useAnalyticsController } from '../analytics';
import type { AdminSectionComponentProps } from './types';

export default function AnalyticsSection({
	activeSection,
	appConfig,
}: AdminSectionComponentProps) {
	const controller = useAnalyticsController(appConfig.analyticsConfig);

	return (
		<>
			<ContentHeader
				title={activeSection.title}
				description={activeSection.description}
				actions={controller.headerAction}
			/>
			<div className="minimal-map-admin__content">
				<AnalyticsView
					controller={controller}
					siteLocale={appConfig.mapConfig.siteLocale ?? 'en'}
					siteTimezone={appConfig.mapConfig.siteTimezone ?? 'UTC'}
				/>
			</div>
		</>
	);
}
