import type { TagRecord, TagRestResponse } from '../../types';

export function normalizeTagRecord(record: TagRestResponse): TagRecord {
	return {
		id: record.id,
		name: record.name || '',
		count: record.count || 0,
		background_color: record.meta?.background_color || '#000000',
		foreground_color: record.meta?.foreground_color || '#ffffff',
	};
}
