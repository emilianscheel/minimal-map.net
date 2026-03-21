import apiFetch from '@wordpress/api-fetch';
import type { TagsAdminConfig } from '../../types';

export async function deleteTag(
	config: TagsAdminConfig,
	tagId: number
): Promise<void> {
	await apiFetch({
		path: `${config.restPath}/${tagId}?force=true`,
		method: 'DELETE',
	});
}
