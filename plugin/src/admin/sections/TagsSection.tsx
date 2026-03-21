import ContentHeader from '../ContentHeader';
import TagsView, { useTagsController } from '../tags';
import type { AdminSectionComponentProps } from './types';

export default function TagsSection({
	activeSection,
	appConfig,
}: AdminSectionComponentProps) {
	const controller = useTagsController(appConfig.tagsConfig, true, {
		activeTheme: null,
		themes: [],
		onSwitchTheme: () => undefined,
	});

	return (
		<>
			<ContentHeader
				title={activeSection.title}
				description={activeSection.description}
				actions={controller.headerAction}
			/>
			<div className="minimal-map-admin__content">
				<TagsView controller={controller} />
			</div>
		</>
	);
}
