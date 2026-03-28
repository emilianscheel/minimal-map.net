import { describe, expect, mock, test } from 'bun:test';
import type { AnalyticsExportActionConfig, AnalyticsQueryRecord } from '../../src/types';
import { buildTimestampedFileName } from '../../src/lib/downloadFileName';
import { buildAnalyticsCsv, exportAnalyticsFile } from '../../src/lib/analytics/exportAnalyticsFile';

const analyticsConfig: AnalyticsExportActionConfig = {
	nonce: '',
	queriesPath: '/queries',
};

function createQueryRecord(overrides: Partial<AnalyticsQueryRecord> = {}): AnalyticsQueryRecord {
	return {
		id: 1,
		event_category: 'search',
		query_text: 'Berlin Mitte',
		query_type: 'text',
		result_count: 3,
		nearest_distance_meters: 120,
		location_id: null,
		location_title: '',
		interaction_source: '',
		action_type: '',
		action_target: '',
		occurred_at_gmt: '2026-03-21T08:00:00+00:00',
		...overrides,
	};
}

describe('exportAnalyticsFile', () => {
	test('builds readable timestamped file names', () => {
		expect(
			buildTimestampedFileName(
				'minimal-map-analytics-search',
				'csv',
				new Date('2026-03-28T14:05:09Z')
			)
		).toBe('minimal-map-analytics-search-2026-03-28_14-05-09.csv');
	});

	test('paginates all search rows and downloads a CSV', async () => {
		const fetchQueries = mock(async (
			_config: AnalyticsExportActionConfig,
			view: { page?: number; perPage?: number; search?: string }
		) => ({
			items: [
				createQueryRecord({
					id: view.page === 1 ? 1 : 2,
					query_text: view.page === 1 ? 'Berlin Mitte' : 'Hamburg',
				}),
			],
			totalItems: 2,
			totalPages: 2,
		}));
		const downloadFile = mock((_url: string, _fileName: string) => {});
		let exportedBlob: Blob | null = null;

		await exportAnalyticsFile(
			analyticsConfig,
			'30d',
			'search',
			{
				createObjectURL: (blob) => {
					exportedBlob = blob;
					return 'blob:analytics-search';
				},
				downloadFile,
				fetchQueries,
			},
		);

		const csvContent = await exportedBlob?.text();

		expect(fetchQueries).toHaveBeenCalledTimes(2);
		expect(fetchQueries.mock.calls.map((call) => call[1])).toEqual([
			{ page: 1, perPage: 50 },
			{ page: 2, perPage: 50 },
		]);
		expect(downloadFile).toHaveBeenCalledTimes(1);
		expect(downloadFile.mock.calls[0]?.[0]).toBe('blob:analytics-search');
		expect(downloadFile.mock.calls[0]?.[1]).toMatch(
			/^minimal-map-analytics-search-\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2}\.csv$/
		);
		expect(csvContent).toContain('"ID","Event Category","Query Text","Query Type","Result Count","Nearest Distance Meters","Occurred At GMT"');
		expect(csvContent).toContain('"1","search","Berlin Mitte","text","3","120","2026-03-21T08:00:00+00:00"');
		expect(csvContent).toContain('"2","search","Hamburg","text","3","120","2026-03-21T08:00:00+00:00"');
	});

	test('escapes quotes, commas, and newlines in CSV values', () => {
		const csv = buildAnalyticsCsv('action', [
			createQueryRecord({
				event_category: 'action',
				location_id: 42,
				location_title: 'Berlin "HQ", North',
				interaction_source: 'in_map_card',
				action_type: 'website',
				action_target: 'line one\nline two',
			}),
		]);

		expect(csv).toContain('"Location Title"');
		expect(csv).toContain('"Berlin ""HQ"", North"');
		expect(csv).toContain('"line one\nline two"');
	});

	test('does not trigger a download when fetching export data fails', async () => {
		const downloadFile = mock((_url: string, _fileName: string) => {});

		await expect(
			exportAnalyticsFile(
				analyticsConfig,
				'30d',
				'selection',
				{
					downloadFile,
					fetchQueries: mock(async () => {
						throw new Error('Export failed');
					}),
				},
			)
		).rejects.toThrow('Export failed');

		expect(downloadFile).not.toHaveBeenCalled();
	});
});
