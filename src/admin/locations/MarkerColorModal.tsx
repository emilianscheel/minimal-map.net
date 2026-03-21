import { Button, Modal, Notice, ColorPicker } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import type { KeyboardEvent } from 'react';
import Kbd from '../../components/Kbd';
import { shouldHandleDialogEnter } from '../../lib/locations/shouldHandleDialogEnter';
import type { LocationsController } from './types';

export default function MarkerColorModal({ controller }: { controller: LocationsController }) {
	if (!controller.isMarkerColorModalOpen || !controller.editingLocation) {
		return null;
	}

	return (
		<Modal
			className="minimal-map-admin__marker-color-modal"
			title={__('Edit marker color', 'minimal-map')}
			onRequestClose={controller.onCloseMarkerColorModal}
			shouldCloseOnClickOutside={!controller.isSubmitting}
			shouldCloseOnEsc={!controller.isSubmitting}
		>
			<div
				className="minimal-map-admin__marker-color-dialog"
				onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
					if (controller.isSubmitting || !shouldHandleDialogEnter(event)) {
						return;
					}

					event.preventDefault();
					void controller.onConfirmMarkerColor();
				}}
			>
				{controller.submitError ? (
					<Notice status="error" isDismissible={false}>
						{controller.submitError}
					</Notice>
				) : null}

				<div className="minimal-map-admin__marker-color-picker">
					<ColorPicker
						color={controller.form.marker_color}
						onChange={(color) => controller.onChangeFormValue('marker_color', color)}
						enableAlpha={false}
						copyFormat="hex"
					/>
				</div>

				<div className="minimal-map-admin__location-dialog-footer">
					<div className="minimal-map-admin__location-dialog-footer-start" />
					<div className="minimal-map-admin__location-dialog-actions">
						<Button
							__next40pxDefaultSize
							variant="tertiary"
							onClick={controller.onCloseMarkerColorModal}
							disabled={controller.isSubmitting}
						>
							{__('Cancel', 'minimal-map')}
						</Button>
						<Button
							__next40pxDefaultSize
							variant="primary"
							onClick={() => void controller.onConfirmMarkerColor()}
							isBusy={controller.isSubmitting}
							disabled={controller.isSubmitting}
						>
							<span className="minimal-map-admin__location-dialog-button-content">
								<span>{__('Save changes', 'minimal-map')}</span>
								<Kbd variant="blue">Enter</Kbd>
							</span>
						</Button>
					</div>
				</div>
			</div>
		</Modal>
	);
}
