import ContentHeader from '../ContentHeader';
import LocationsView, { useLocationsController } from '../locations';
import { useStylesController } from '../styles/controller';
import type { AdminSectionComponentProps } from './types';

export default function LocationsSection({
	activeSection,
	appConfig,
}: AdminSectionComponentProps) {
	const stylesController = useStylesController(appConfig.stylesConfig, true);
	const controller = useLocationsController(
		appConfig.locationsConfig,
		appConfig.collectionsConfig,
		appConfig.logosConfig,
		appConfig.markersConfig,
		appConfig.tagsConfig,
		true,
		{
			activeTheme: stylesController.activeTheme,
			themes: stylesController.themes,
			onSwitchTheme: stylesController.switchTheme,
		}
	);

	return (
		<>
			<ContentHeader
				title={activeSection.title}
				description={activeSection.description}
				actions={controller.headerAction}
			/>
			<div className="minimal-map-admin__content">
				<LocationsView controller={controller} />
			</div>
		</>
	);
}
