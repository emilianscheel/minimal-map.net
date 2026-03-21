import ContentHeader from '../ContentHeader';
import StylesView from '../styles';
import { useStylesController } from '../styles/controller';
import type { AdminSectionComponentProps } from './types';

export default function StylesSection({
	activeSection,
	appConfig,
}: AdminSectionComponentProps) {
	const controller = useStylesController(appConfig.stylesConfig, true);

	return (
		<>
			<ContentHeader
				title={activeSection.title}
				description={activeSection.description}
				actions={controller.headerAction}
			/>
			<div className="minimal-map-admin__content">
				<StylesView
					controller={controller}
					runtimeConfig={appConfig.mapConfig ?? {}}
				/>
			</div>
		</>
	);
}
