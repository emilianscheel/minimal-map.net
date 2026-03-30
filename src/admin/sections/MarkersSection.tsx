import ContentHeader from '../ContentHeader';
import MarkersView, { useMarkersController } from '../markers';
import type { AdminSectionComponentProps } from './types';

export default function MarkersSection({
	activeSection,
	appConfig,
}: AdminSectionComponentProps) {
	const controller = useMarkersController(appConfig.markersConfig, true);

	return (
		<>
			<ContentHeader
				title={activeSection.title}
				description={activeSection.description}
				actions={controller.headerAction}
			/>
			<div className="minimal-map-admin__content">
				<MarkersView controller={controller} />
			</div>
		</>
	);
}
