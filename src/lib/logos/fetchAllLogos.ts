import apiFetch from '@wordpress/api-fetch';
import type { LogoRecord, LogoRestResponse, LogosAdminConfig } from '../../types';
import { normalizeLogoRecord } from './normalizeLogoRecord';

export async function fetchAllLogos(config: LogosAdminConfig): Promise<LogoRecord[]> {
	const logos: LogoRecord[] = [];
	let page = 1;
	let totalPages = 1;

	while (page <= totalPages) {
		const response = (await apiFetch({
			method: 'GET',
			parse: false,
			path: `${config.restPath}?context=edit&page=${page}&per_page=100&_fields=id,title,content`,
		})) as Response;
		const records = (await response.json()) as LogoRestResponse[];

		logos.push(...records.map(normalizeLogoRecord));
		totalPages = Number(response.headers.get('X-WP-TotalPages') || '1');
		page += 1;
	}

	return logos;
}
