import apiFetch from '@wordpress/api-fetch';
import type { LocationFormState, LocationsAdminConfig } from '../../types';
import { buildLocationMeta } from './buildLocationMeta';

export async function createLocation(
	config: LocationsAdminConfig,
	form: LocationFormState
): Promise<void> {
	await apiFetch({
		path: config.restPath,
		method: 'POST',
		data: {
			title: form.title.trim(),
			status: 'publish',
			meta: buildLocationMeta(form),
		},
	});
}
