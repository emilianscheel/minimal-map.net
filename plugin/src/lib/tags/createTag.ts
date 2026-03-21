import apiFetch from '@wordpress/api-fetch';
import type { TagRecord, TagRestResponse, TagsAdminConfig, TagFormState } from '../../types';
import { normalizeTagRecord } from './normalizeTagRecord';

export async function createTag(
	config: TagsAdminConfig,
	form: TagFormState
): Promise<TagRecord> {
	const response = (await apiFetch({
		path: config.restPath,
		method: 'POST',
		data: {
			name: form.name.trim(),
			meta: {
				background_color: form.background_color,
				foreground_color: form.foreground_color,
			},
		},
	})) as TagRestResponse;

	return normalizeTagRecord(response);
}
