import apiFetch from '@wordpress/api-fetch';
import type { LocationsAdminConfig } from '../../types';

export interface LocationSettings {
	perPage: number;
}

export async function updateLocationsSettings(
	config: Pick<LocationsAdminConfig, 'settingsPath'>,
	settings: LocationSettings
): Promise<LocationSettings> {
	return apiFetch<LocationSettings>({
		method: 'POST',
		path: config.settingsPath,
		data: settings,
	});
}
