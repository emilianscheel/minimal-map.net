import apiFetch from '@wordpress/api-fetch';
import type { LogosAdminConfig } from '../../types';

export async function updateLogo(
	config: LogosAdminConfig,
	logoId: number,
	title: string
): Promise<void> {
	await apiFetch({
		path: `${config.restPath}/${logoId}`,
		method: 'POST',
		data: {
			title,
		},
	});
}
