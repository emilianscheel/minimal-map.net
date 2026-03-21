import ContentHeader from '../ContentHeader';
import MarkersView, { useMarkersController } from '../markers';
import { useStylesController } from '../styles/controller';
import type { AdminSectionComponentProps } from './types';

export default function MarkersSection({
	activeSection,
	appConfig,
}: AdminSectionComponentProps) {
	const stylesController = useStylesController(appConfig.stylesConfig, true);
	const controller = useMarkersController(appConfig.markersConfig, true, {
		activeTheme: stylesController.activeTheme,
		themes: stylesController.themes,
		onSwitchTheme: stylesController.switchTheme,
	});

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
