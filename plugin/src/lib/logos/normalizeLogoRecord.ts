import type { LogoRecord, LogoRestResponse } from '../../types';

export function normalizeLogoRecord(record: LogoRestResponse): LogoRecord {
	return {
		id: record.id,
		title: record.title?.raw || record.title?.rendered || '',
		content: record.content?.raw || record.content?.rendered || '',
	};
}
