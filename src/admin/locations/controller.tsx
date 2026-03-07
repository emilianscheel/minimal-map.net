import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useCallback, useEffect, useMemo, useState } from '@wordpress/element';
import { Plus } from 'lucide-react';
import type { ViewTable } from '@wordpress/dataviews';
import type { LocationDialogStep, LocationFormState, LocationRecord, LocationsAdminConfig } from '../../types';
import { configureApiFetch } from '../../lib/locations/configureApiFetch';
import { createEmptyFieldErrors } from '../../lib/locations/createEmptyFieldErrors';
import { createLocation } from '../../lib/locations/createLocation';
import { fetchAllLocations } from '../../lib/locations/fetchAllLocations';
import { hasFieldErrors } from '../../lib/locations/hasFieldErrors';
import { paginateLocations } from '../../lib/locations/paginateLocations';
import { validateDetailsStep } from '../../lib/locations/validateDetailsStep';
import { DEFAULT_FORM_STATE, DEFAULT_VIEW } from './constants';
import type { LocationsController } from './types';

export function useLocationsController(
	config: LocationsAdminConfig,
	enabled: boolean
): LocationsController {
	const [form, setForm] = useState<LocationFormState>(DEFAULT_FORM_STATE);
	const [fieldErrors, setFieldErrors] = useState(createEmptyFieldErrors());
	const [isDialogOpen, setDialogOpen] = useState(false);
	const [isSubmitting, setSubmitting] = useState(false);
	const [isLoading, setLoading] = useState(enabled);
	const [loadError, setLoadError] = useState<string | null>(null);
	const [submitError, setSubmitError] = useState<string | null>(null);
	const [locations, setLocations] = useState<LocationRecord[]>([]);
	const [step, setStep] = useState<LocationDialogStep>('details');
	const [view, setView] = useState<ViewTable>(DEFAULT_VIEW);

	const loadLocations = useCallback(async () => {
		if (!enabled) {
			return;
		}

		setLoading(true);
		setLoadError(null);

		try {
			const records = await fetchAllLocations(config);
			setLocations(records);
		} catch (error) {
			setLoadError(
				error instanceof Error
					? error.message
					: __('Locations could not be loaded.', 'minimal-map')
			);
		} finally {
			setLoading(false);
		}
	}, [config, enabled]);

	useEffect(() => {
		configureApiFetch(config.nonce);

		if (!enabled) {
			return;
		}

		void loadLocations();
	}, [config.nonce, enabled, loadLocations]);

	useEffect(() => {
		setView((currentView) => ({
			...currentView,
			page: 1,
		}));
	}, [locations.length]);

	const { locations: paginatedLocations, totalPages } = useMemo(
		() => paginateLocations(locations, view),
		[locations, view]
	);

	const openDialog = (): void => {
		setForm(DEFAULT_FORM_STATE);
		setFieldErrors(createEmptyFieldErrors());
		setSubmitError(null);
		setStep('details');
		setDialogOpen(true);
	};

	const onCancel = (): void => {
		if (isSubmitting) {
			return;
		}

		setDialogOpen(false);
	};

	const onChangeFormValue = (key: keyof LocationFormState, value: string): void => {
		setForm((currentForm) => ({
			...currentForm,
			[key]: value,
		}));

		if (key === 'title' || key === 'email' || key === 'website') {
			setFieldErrors((currentErrors) => ({
				...currentErrors,
				[key]: undefined,
			}));
		}
	};

	const onConfirm = async (): Promise<void> => {
		if (step === 'details') {
			const errors = validateDetailsStep(form);
			setFieldErrors(errors);

			if (hasFieldErrors(errors)) {
				return;
			}

			setSubmitError(null);
			setStep('address');
			return;
		}

		const errors = validateDetailsStep(form);
		setFieldErrors(errors);

		if (hasFieldErrors(errors)) {
			setStep('details');
			return;
		}

		setSubmitting(true);
		setSubmitError(null);

		try {
			await createLocation(config, form);
			await loadLocations();
			setDialogOpen(false);
			setForm(DEFAULT_FORM_STATE);
			setFieldErrors(createEmptyFieldErrors());
			setStep('details');
		} catch (error) {
			setSubmitError(
				error instanceof Error
					? error.message
					: __('Location could not be created.', 'minimal-map')
			);
		} finally {
			setSubmitting(false);
		}
	};

	return {
		fieldErrors,
		form,
		headerAction: enabled ? (
			<Button
				variant="primary"
				onClick={openDialog}
				icon={<Plus size={18} strokeWidth={2} />}
				iconPosition="left"
			>
				{__('Add location', 'minimal-map')}
			</Button>
		) : null,
		isDialogOpen,
		isLoading,
		isSubmitting,
		loadError,
		locations,
		onCancel,
		onChangeFormValue,
		onChangeView: (nextView) => setView(nextView),
		onConfirm,
		paginatedLocations,
		submitError,
		step,
		totalPages,
		view,
	};
}
