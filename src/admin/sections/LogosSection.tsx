import ContentHeader from '../ContentHeader';
import LogosView, { useLogosController } from '../logos';
import type { AdminSectionComponentProps } from './types';

export default function LogosSection({
	activeSection,
	appConfig,
}: AdminSectionComponentProps) {
	const controller = useLogosController(
		appConfig.logosConfig,
		appConfig.locationsConfig,
		true
	);

	return (
		<>
			<ContentHeader
				title={activeSection.title}
				description={activeSection.description}
				actions={controller.headerAction}
			/>
			<div className="minimal-map-admin__content">
				<LogosView controller={controller} />
			</div>
		</>
	);
}
