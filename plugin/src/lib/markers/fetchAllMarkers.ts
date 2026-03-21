import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';
import type { MarkerRecord, MarkersAdminConfig } from '../../types';

export async function fetchAllMarkers(config: MarkersAdminConfig): Promise<MarkerRecord[]> {
	try {
		const records = await apiFetch<any[]>({
			path: `${config.restPath}?context=edit&per_page=100`,
		});

		return records.map((record) => ({
			id: record.id,
			title: typeof record.title === 'object' ? record.title.raw : record.title,
			content: typeof record.content === 'object' ? record.content.raw : record.content,
		}));
	} catch (error) {
		throw new Error(
			error instanceof Error ? error.message : __('Markers could not be loaded.', 'minimal-map')
		);
	}
}
