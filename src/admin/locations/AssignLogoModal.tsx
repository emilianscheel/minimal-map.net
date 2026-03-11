import { Button, ComboboxControl, Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import type { KeyboardEvent } from 'react';
import LogoPreview from '../../components/LogoPreview';
import Kbd from '../../components/Kbd';
import type { LocationsController } from './types';

export default function AssignLogoModal({ controller }: { controller: LocationsController }) {
	if (!controller.isAssignLogoModalOpen || !controller.selectedLogoLocation) {
		return null;
	}

	const assignedLogo = controller.getLogoForLocation(controller.selectedLogoLocation.id);
	const options = controller.logos.map((logo) => ({
		label: logo.title || __('Untitled logo', 'minimal-map'),
		value: `${logo.id}`,
	}));

	const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
		const target = event.target;
		const isHTMLElement = target instanceof HTMLElement;
		const isComboboxExpanded =
			isHTMLElement && target.getAttribute('role') === 'combobox'
				? target.getAttribute('aria-expanded') === 'true'
				: false;

		if (
			controller.isAssignmentSaving ||
			!controller.assignmentLogoId ||
			event.key !== 'Enter' ||
			event.shiftKey ||
			isComboboxExpanded ||
			(isHTMLElement &&
				target.closest('[data-minimal-map-dialog-ignore-enter="true"]'))
		) {
			return;
		}

		event.preventDefault();
		void controller.onAssignLogoToLocation();
	};

	return (
		<Modal
			className="minimal-map-admin__collection-modal"
			title={__('Assign Logo', 'minimal-map')}
			onRequestClose={controller.onCloseAssignLogoModal}
			shouldCloseOnClickOutside={!controller.isAssignmentSaving}
			shouldCloseOnEsc={!controller.isAssignmentSaving}
			onKeyDown={handleKeyDown}
		>
			<div className="minimal-map-admin__assign-to-collection-dialog">
				<div className="minimal-map-admin__assign-to-collection-copy">
					{assignedLogo ? (
						<div className="minimal-map-admin__assigned-logo-card">
							<div className="minimal-map-admin__assigned-logo-surface">
								<LogoPreview logo={assignedLogo} className="minimal-map-admin__assigned-logo-preview" />
							</div>
							<code className="minimal-map-admin__logo-filename">{assignedLogo.title}</code>
						</div>
					) : (
						<p className="minimal-map-admin__assign-to-collection-empty">
							{__('No logo assigned yet.', 'minimal-map')}
						</p>
					)}
				</div>

				<ComboboxControl
					__next40pxDefaultSize
					label={__('Logo', 'minimal-map')}
					value={controller.assignmentLogoId}
					options={options}
					onChange={(value) => controller.onSelectAssignmentLogo(value ?? '')}
					help={
						options.length === 0
							? __('Upload a logo first to assign one to this location.', 'minimal-map')
							: undefined
					}
				/>

				<div className="minimal-map-admin__assign-to-collection-actions">
					<Button
						__next40pxDefaultSize
						variant="tertiary"
						onClick={controller.onCloseAssignLogoModal}
						disabled={controller.isAssignmentSaving}
						data-minimal-map-dialog-ignore-enter="true"
					>
						{__('Cancel', 'minimal-map')}
					</Button>
					<Button
						__next40pxDefaultSize
						variant="primary"
						onClick={() => void controller.onAssignLogoToLocation()}
						isBusy={controller.isAssignmentSaving}
						disabled={controller.isAssignmentSaving || !controller.assignmentLogoId}
					>
						<span className="minimal-map-admin__location-dialog-button-content">
							<span>{__('Save Logo', 'minimal-map')}</span>
							<Kbd variant="blue">Enter</Kbd>
						</span>
					</Button>
				</div>
			</div>
		</Modal>
	);
}
