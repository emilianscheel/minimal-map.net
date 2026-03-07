import type { ViewTable } from '@wordpress/dataviews';
import type { ReactNode } from 'react';
import type { FieldErrors, LocationDialogStep, LocationFormState, LocationRecord } from '../../types';

export interface LocationsController {
	fieldErrors: FieldErrors;
	form: LocationFormState;
	headerAction: ReactNode;
	isDialogOpen: boolean;
	isLoading: boolean;
	isSubmitting: boolean;
	loadError: string | null;
	locations: LocationRecord[];
	submitError: string | null;
	step: LocationDialogStep;
	view: ViewTable;
	onCancel: () => void;
	onChangeFormValue: (key: keyof LocationFormState, value: string) => void;
	onChangeView: (nextView: ViewTable) => void;
	onConfirm: () => Promise<void>;
	paginatedLocations: LocationRecord[];
	totalPages: number;
}
