import apiFetch from '@wordpress/api-fetch';
import type { MarkersAdminConfig } from '../../types';

export async function updateMarker(
	config: MarkersAdminConfig,
	markerId: number,
	title: string
): Promise<void> {
	await apiFetch({
		path: `${config.restPath}/${markerId}`,
		method: 'POST',
		data: {
			title,
		},
	});
}
