import { Button, Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import type { KeyboardEvent } from 'react';
import LogoPreview from '../../components/LogoPreview';
import Kbd from '../../components/Kbd';
import type { LocationsController } from './types';

export default function DeleteLogoConfirmationModal({
	controller,
}: {
	controller: LocationsController;
}) {
	if (!controller.isDeleteLogoConfirmationModalOpen || !controller.selectedLogoRemovalLocation) {
		return null;
	}

	const logo = controller.getLogoForLocation(controller.selectedLogoRemovalLocation.id);

	if (!logo) {
		return null;
	}

	const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
		const target = event.target;
		if (
			controller.isAssignmentSaving ||
			event.key !== 'Enter' ||
			event.shiftKey ||
			(target instanceof HTMLElement &&
				target.closest('[data-minimal-map-dialog-ignore-enter="true"]'))
		) {
			return;
		}

		event.preventDefault();
		void controller.onClearLogoFromLocation();
	};

	return (
		<Modal
			title={__('Remove Logo', 'minimal-map')}
			onRequestClose={controller.onCloseDeleteLogoConfirmationModal}
			shouldCloseOnClickOutside={!controller.isAssignmentSaving}
			shouldCloseOnEsc={!controller.isAssignmentSaving}
			onKeyDown={handleKeyDown}
		>
			<div className="minimal-map-admin__collection-delete-dialog">
				<p className="minimal-map-admin__collection-delete-dialog-copy">
					{__('Remove this logo from the selected location?', 'minimal-map')}
				</p>
				<div className="minimal-map-admin__assigned-logo-card">
					<div className="minimal-map-admin__assigned-logo-surface">
						<LogoPreview logo={logo} className="minimal-map-admin__assigned-logo-preview" />
					</div>
					<code className="minimal-map-admin__logo-filename">{logo.title}</code>
				</div>
				<div className="minimal-map-admin__collection-delete-dialog-actions">
					<Button
						variant="tertiary"
						onClick={controller.onCloseDeleteLogoConfirmationModal}
						disabled={controller.isAssignmentSaving}
						data-minimal-map-dialog-ignore-enter="true"
					>
						{__('Cancel', 'minimal-map')}
					</Button>
					<Button
						variant="primary"
						isDestructive
						onClick={() => void controller.onClearLogoFromLocation()}
						isBusy={controller.isAssignmentSaving}
						disabled={controller.isAssignmentSaving}
					>
						<span className="minimal-map-admin__location-dialog-button-content">
							<span>{__('Remove Logo', 'minimal-map')}</span>
							<Kbd variant="red">Enter</Kbd>
						</span>
					</Button>
				</div>
			</div>
		</Modal>
	);
}
