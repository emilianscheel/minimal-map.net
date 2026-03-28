import apiFetch from '@wordpress/api-fetch';
import type { TagRecord, TagRestResponse, TagsAdminConfig } from '../../types';
import { normalizeTagRecord } from './normalizeTagRecord';

export async function fetchAllTags(
	config: Pick<TagsAdminConfig, 'restPath'>
): Promise<TagRecord[]> {
	const tags: TagRecord[] = [];
	let page = 1;
	let totalPages = 1;

	while (page <= totalPages) {
		const response = await apiFetch({
			path: `${config.restPath}?page=${page}&per_page=100&context=edit`,
			parse: false,
		});

		const records = (await (response as Response).json()) as TagRestResponse[];
		tags.push(...records.map(normalizeTagRecord));

		totalPages = Number((response as Response).headers.get('X-WP-TotalPages') || '1');
		page += 1;
	}

	return tags;
}
