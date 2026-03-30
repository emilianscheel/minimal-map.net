import ContentHeader from '../ContentHeader';
import CollectionsView, { useCollectionsController } from '../collections';
import { useStylesController } from '../styles/controller';
import type { AdminSectionComponentProps } from './types';

export default function CollectionsSection({
	activeSection,
	appConfig,
}: AdminSectionComponentProps) {
	const stylesController = useStylesController(appConfig.stylesConfig, true);
	const controller = useCollectionsController(
		appConfig.collectionsConfig,
		appConfig.locationsConfig,
		true,
		{
			activeTheme: stylesController.activeTheme,
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
				<CollectionsView controller={controller} />
			</div>
		</>
	);
}
