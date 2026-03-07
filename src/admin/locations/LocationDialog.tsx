import { Notice, __experimentalConfirmDialog as ConfirmDialog } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import type { KeyboardEvent } from 'react';
import { shouldHandleDialogEnter } from '../../lib/locations/shouldHandleDialogEnter';
import type { LocationsController } from './types';
import LocationDialogFields from './LocationDialogFields';

export default function LocationDialog({ controller }: { controller: LocationsController }) {
	if (!controller.isDialogOpen) {
		return null;
	}

	return (
		<ConfirmDialog
			confirmButtonText={controller.step === 'details' ? __('Next', 'minimal-map') : __('Add location', 'minimal-map')}
			cancelButtonText={__('Cancel', 'minimal-map')}
			isBusy={controller.isSubmitting}
			isOpen={controller.isDialogOpen}
			onCancel={controller.onCancel}
			onConfirm={() => {
				void controller.onConfirm();
			}}
			title={__('Add location', 'minimal-map')}
		>
			<div
				className="minimal-map-admin__location-dialog"
				onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
					if (!shouldHandleDialogEnter(event)) {
						return;
					}

					event.preventDefault();
					void controller.onConfirm();
				}}
			>
				{controller.submitError && (
					<Notice status="error" isDismissible={false}>
						{controller.submitError}
					</Notice>
				)}
				<LocationDialogFields
					fieldErrors={controller.fieldErrors}
					form={controller.form}
					onChange={controller.onChangeFormValue}
					step={controller.step}
				/>
			</div>
		</ConfirmDialog>
	);
}
