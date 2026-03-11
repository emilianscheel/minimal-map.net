import { Button, ComboboxControl, Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import type { KeyboardEvent } from 'react';
import MarkerMiniMap from '../../components/MarkerMiniMap';
import Kbd from '../../components/Kbd';
import type { LocationsController } from './types';

export default function AssignMarkerModal({ controller }: { controller: LocationsController }) {
	if (!controller.isAssignMarkerModalOpen || !controller.selectedMarkerLocation) {
		return null;
	}

	const assignedMarker = controller.getMarkerForLocation(controller.selectedMarkerLocation.id);
	const options = [
		{
			label: __('Default marker', 'minimal-map'),
			value: '',
		},
		...controller.markers.map((marker) => ({
			label: marker.title || __('Untitled marker', 'minimal-map'),
			value: `${marker.id}`,
		})),
	];

	const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
		const target = event.target;
		const isHTMLElement = target instanceof HTMLElement;
		const isComboboxExpanded =
			isHTMLElement && target.getAttribute('role') === 'combobox'
				? target.getAttribute('aria-expanded') === 'true'
				: false;

		if (
			controller.isAssignmentSaving ||
			event.key !== 'Enter' ||
			event.shiftKey ||
			isComboboxExpanded ||
			(isHTMLElement &&
				target.closest('[data-minimal-map-dialog-ignore-enter="true"]'))
		) {
			return;
		}

		event.preventDefault();
		void controller.onAssignMarkerToLocation();
	};

	return (
		<Modal
			className="minimal-map-admin__collection-modal"
			title={__('Assign Marker', 'minimal-map')}
			onRequestClose={controller.onCloseAssignMarkerModal}
			shouldCloseOnClickOutside={!controller.isAssignmentSaving}
			shouldCloseOnEsc={!controller.isAssignmentSaving}
			onKeyDown={handleKeyDown}
		>
			<div className="minimal-map-admin__assign-to-collection-dialog">
				<div className="minimal-map-admin__assign-to-collection-copy">
					{assignedMarker ? (
						<div className="minimal-map-admin__assigned-logo-card">
							<MarkerMiniMap marker={assignedMarker} theme={controller.activeTheme} />
							<code className="minimal-map-admin__logo-filename">{assignedMarker.title}</code>
						</div>
					) : (
						<p className="minimal-map-admin__assign-to-collection-empty">
							{__('No custom marker assigned yet.', 'minimal-map')}
						</p>
					)}
				</div>

				<ComboboxControl
					__next40pxDefaultSize
					label={__('Marker', 'minimal-map')}
					value={controller.assignmentMarkerId}
					options={options}
					onChange={(value) => controller.onSelectAssignmentMarker(value ?? '')}
					help={
						controller.markers.length === 0
							? __('Upload a marker first to assign one to this location.', 'minimal-map')
							: __('Choose a custom SVG marker or switch back to the default marker.', 'minimal-map')
					}
				/>

				<div className="minimal-map-admin__assign-to-collection-actions">
					<Button
						__next40pxDefaultSize
						variant="tertiary"
						onClick={controller.onCloseAssignMarkerModal}
						disabled={controller.isAssignmentSaving}
						data-minimal-map-dialog-ignore-enter="true"
					>
						{__('Cancel', 'minimal-map')}
					</Button>
					<Button
						__next40pxDefaultSize
						variant="primary"
						onClick={() => void controller.onAssignMarkerToLocation()}
						isBusy={controller.isAssignmentSaving}
						disabled={controller.isAssignmentSaving}
					>
						<span className="minimal-map-admin__location-dialog-button-content">
							<span>{__('Save Marker', 'minimal-map')}</span>
							<Kbd variant="blue">Enter</Kbd>
						</span>
					</Button>
				</div>
			</div>
		</Modal>
	);
}
