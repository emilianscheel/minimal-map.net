import { describe, expect, test } from 'bun:test';
import type {
	CollectionsAdminConfig,
	LocationFormState,
	LocationsAdminConfig,
} from '../../src/types';
import {
	analyzeCsvOpeningHoursColumn,
	buildMappedLocationForm,
	buildLocationExportJson,
	countMappedCsvGeocodeRequests,
	createExampleLocationExportData,
	createEmptyCsvImportAssignments,
	createEmptyCsvImportMapping,
	createEmptyCsvOpeningHoursImportMapping,
	detectCsvDelimiter,
	exportLocations,
	getValidCsvOpeningHoursColumnIndexes,
	importLocations,
	isCommonCsvFormat,
	parseCsvText,
	parseJsonText,
	parseCsvOpeningHoursValue,
	runCommonCsvImport,
	runMappedCsvImport,
} from '../../src/lib/locations/importLocations';

const LOCATIONS_CONFIG: LocationsAdminConfig = {
	nonce: '',
	restBase: '',
	restPath: '/locations',
	geocodePath: '/geocode',
};

const COLLECTIONS_CONFIG: CollectionsAdminConfig = {
	nonce: '',
	restBase: '',
	restPath: '/collections',
};

describe('location import helpers', () => {
	test('detects and parses comma-delimited CSV with quoted separators', () => {
		const parsed = parseCsvText('title,city\n"ACME, Inc.",Berlin\n');

		expect(detectCsvDelimiter('title,city\nACME,Berlin\n')).toBe(',');
		expect(parsed.delimiter).toBe(',');
		expect(parsed.headers).toEqual(['title', 'city']);
		expect(parsed.rows).toEqual([['ACME, Inc.', 'Berlin']]);
	});

	test('detects and parses semicolon-delimited CSV', () => {
		const parsed = parseCsvText('title;city\nBrandenburg Gate;Berlin\n');

		expect(detectCsvDelimiter('title;city\nBrandenburg Gate;Berlin\n')).toBe(';');
		expect(parsed.delimiter).toBe(';');
		expect(parsed.headers).toEqual(['title', 'city']);
		expect(parsed.rows).toEqual([['Brandenburg Gate', 'Berlin']]);
	});

	test('parses JSON object arrays into the shared import table shape', () => {
		const parsed = parseJsonText(
			JSON.stringify([
				{ title: 'Brandenburg Gate', city: 'Berlin', meta: { featured: true } },
				{ city: 'Paris', country: 'France' },
			])
		);

		expect(parsed.headers).toEqual(['title', 'city', 'meta', 'country']);
		expect(parsed.normalizedHeaders).toEqual(['title', 'city', 'meta', 'country']);
		expect(parsed.rows).toEqual([
			['Brandenburg Gate', 'Berlin', '{"featured":true}', ''],
			['', 'Paris', '', 'France'],
		]);
	});

	test('rejects invalid JSON import roots', () => {
		expect(() => parseJsonText('{}')).toThrow('JSON file must contain a non-empty array of objects.');
		expect(() => parseJsonText('[1]')).toThrow('JSON file must contain only objects.');
		expect(() => parseJsonText('[{}]')).toThrow('JSON file is empty or missing fields.');
	});

	test('recognizes only the exact built-in common CSV header set', () => {
		expect(
			isCommonCsvFormat(
				parseCsvText(
					[
						'title;street;house_number;postal_code;city;state;country;telephone;email;website;latitude;longitude',
						'Brandenburg Gate;Pariser Platz;;10117;Berlin;Berlin;Germany;;;https://example.com;52.5162;13.3777',
					].join('\n')
				)
			)
		).toBe(true);

		expect(
			isCommonCsvFormat(parseCsvText('title,city,country\nBrandenburg Gate,Berlin,Germany\n'))
		).toBe(false);
	});

	test('builds mapped forms with optional columns and fallback title', () => {
		const mapping = createEmptyCsvImportMapping();
		mapping.city = 0;
		mapping.country = 1;

		const form = buildMappedLocationForm(['Berlin', 'Germany'], mapping);

		expect(form.title).toBe('Imported Location');
		expect(form.telephone).toBe('');
		expect(form.city).toBe('Berlin');
		expect(form.country).toBe('Germany');
	});

	test('builds mapped forms with parsed hidden state', () => {
		const mapping = createEmptyCsvImportMapping();
		mapping.title = 0;
		mapping.is_hidden = 1;

		expect(buildMappedLocationForm(['Berlin Office', 'true'], mapping).is_hidden).toBe(true);
		expect(buildMappedLocationForm(['Berlin Office', 'visible'], mapping).is_hidden).toBe(false);
	});

	test('parses supported opening-hours formats into normalized values', () => {
		expect(parseCsvOpeningHoursValue('8-12')).toEqual({
			open: '08:00',
			close: '12:00',
		});
		expect(parseCsvOpeningHoursValue('08:00-12:00')).toEqual({
			open: '08:00',
			close: '12:00',
		});
		expect(parseCsvOpeningHoursValue('8:00-14:00')).toEqual({
			open: '08:00',
			close: '14:00',
		});
		expect(parseCsvOpeningHoursValue('08:00 - 17:30')).toEqual({
			open: '08:00',
			close: '17:30',
		});
	});

	test('analyzes opening-hours columns using non-empty values only', () => {
		const rows = [
			['Berlin', '8-12', 'Mon notes'],
			['Hamburg', '', 'Tue notes'],
			['Munich', '08:00-14:00', 'Wed notes'],
		];

		expect(analyzeCsvOpeningHoursColumn(rows, 1)).toEqual({
			columnIndex: 1,
			hasValues: true,
			isValid: true,
		});
		expect(analyzeCsvOpeningHoursColumn(rows, 2)).toEqual({
			columnIndex: 2,
			hasValues: true,
			isValid: false,
		});
		expect(analyzeCsvOpeningHoursColumn(rows, 3)).toEqual({
			columnIndex: 3,
			hasValues: false,
			isValid: false,
		});
		expect(getValidCsvOpeningHoursColumnIndexes(rows, 3)).toEqual([1]);
	});

	test('builds mapped forms with imported opening hours and notes', () => {
		const mapping = createEmptyCsvImportMapping();
		mapping.title = 0;
		const openingHoursMapping = createEmptyCsvOpeningHoursImportMapping();
		openingHoursMapping.monday = 1;
		openingHoursMapping.tuesday = 2;
		openingHoursMapping.opening_hours_notes = 3;

		const form = buildMappedLocationForm(
			['Berlin Office', '8-12', '08:00-14:00', 'Summer schedule'],
			mapping,
			openingHoursMapping
		);

		expect(form.title).toBe('Berlin Office');
		expect(form.opening_hours.monday).toEqual({
			open: '08:00',
			close: '12:00',
			lunch_start: '',
			lunch_duration_minutes: 0,
		});
		expect(form.opening_hours.tuesday).toEqual({
			open: '08:00',
			close: '14:00',
			lunch_start: '',
			lunch_duration_minutes: 0,
		});
		expect(form.opening_hours.wednesday).toEqual({
			open: '',
			close: '',
			lunch_start: '',
			lunch_duration_minutes: 0,
		});
		expect(form.opening_hours_notes).toBe('Summer schedule');
	});

	test('runs mapped imports with sequential throttled geocoding and keeps rows without coordinates', async () => {
		const parsed = parseCsvText(
			[
				'name,street_name,house_no,zip_code,town,country_name,phone,monday_hours,hours_notes',
				'Berlin Office,Unter den Linden,1,10117,Berlin,Germany,+49 30 123,8-12,Summer hours',
				'No Coordinates,,,,Paris,France,,08:00-14:00,',
				'Broken Geocode,Main Street,5,10001,New York,USA,,,',
			].join('\n')
		);
		const mapping = createEmptyCsvImportMapping();
		mapping.title = 0;
		mapping.street = 1;
		mapping.house_number = 2;
		mapping.postal_code = 3;
		mapping.city = 4;
		mapping.country = 5;
		mapping.telephone = 6;
		const openingHoursMapping = createEmptyCsvOpeningHoursImportMapping();
		openingHoursMapping.monday = 7;
		openingHoursMapping.opening_hours_notes = 8;

		const createdForms: LocationFormState[] = [];
		const geocodeTitles: string[] = [];
		const sleepCalls: number[] = [];
		const collectionAssignments: number[][] = [];
		const progressUpdates: Array<[number, number]> = [];
		const assignments = createEmptyCsvImportAssignments();
		assignments.logoId = 9;
		assignments.markerId = 11;
		assignments.tagIds = [3, 7, 3];

		expect(countMappedCsvGeocodeRequests(parsed, mapping)).toBe(2);

		const result = await runMappedCsvImport(
			parsed,
			mapping,
			openingHoursMapping,
			assignments,
			LOCATIONS_CONFIG,
			COLLECTIONS_CONFIG,
			{
				createLocationFn: async (_config, form) => {
					createdForms.push({ ...form });
					return { id: 100 + createdForms.length };
				},
				createCollectionFn: async (_config, _title, locationIds) => {
					collectionAssignments.push(locationIds);
				},
				geocodeAddressFn: async (_config, form) => {
					geocodeTitles.push(form.title);

					if (form.title === 'Berlin Office') {
						return {
							success: true,
							label: 'Berlin Office',
							lat: 52.517,
							lng: 13.388,
						};
					}

					throw new Error('rate limited');
				},
				sleep: async (ms) => {
					sleepCalls.push(ms);
				},
				onProgress: (completed, total) => {
					progressUpdates.push([completed, total]);
				},
			}
		);

		expect(result).toEqual({
			importedCount: 3,
			importedLocationIds: [101, 102, 103],
			totalGeocodeRequests: 2,
			completedGeocodeRequests: 2,
		});
		expect(geocodeTitles).toEqual(['Berlin Office', 'Broken Geocode']);
		expect(sleepCalls).toEqual([1000]);
		expect(progressUpdates).toEqual([
			[0, 3],
			[1, 3],
			[2, 3],
			[3, 3],
		]);
		expect(createdForms[0].latitude).toBe('52.517');
		expect(createdForms[0].longitude).toBe('13.388');
		expect(createdForms[0].telephone).toBe('+49 30 123');
		expect(createdForms[0].logo_id).toBe(9);
		expect(createdForms[0].marker_id).toBe(11);
		expect(createdForms[0].is_hidden).toBe(false);
		expect(createdForms[0].tag_ids).toEqual([3, 7]);
		expect(createdForms[0].opening_hours.monday.open).toBe('08:00');
		expect(createdForms[0].opening_hours.monday.close).toBe('12:00');
		expect(createdForms[0].opening_hours_notes).toBe('Summer hours');
		expect(createdForms[1].latitude).toBe('');
		expect(createdForms[1].longitude).toBe('');
		expect(createdForms[1].logo_id).toBe(9);
		expect(createdForms[1].marker_id).toBe(11);
		expect(createdForms[1].tag_ids).toEqual([3, 7]);
		expect(createdForms[1].opening_hours.monday.open).toBe('08:00');
		expect(createdForms[1].opening_hours.monday.close).toBe('14:00');
		expect(createdForms[2].latitude).toBe('');
		expect(createdForms[2].longitude).toBe('');
		expect(createdForms[2].logo_id).toBe(9);
		expect(createdForms[2].marker_id).toBe(11);
		expect(createdForms[2].tag_ids).toEqual([3, 7]);
		expect(createdForms[2].opening_hours.monday.open).toBe('');
		expect(createdForms[2].opening_hours_notes).toBe('');
		expect(collectionAssignments).toEqual([[101, 102, 103]]);
	});

	test('exports hidden state as a stable CSV column', () => {
		const csv = exportLocations(
			[
				{
					title: 'Visible',
					street: '',
					house_number: '',
					postal_code: '',
					city: '',
					state: '',
					country: '',
					telephone: '',
					email: '',
					website: '',
					latitude: '52.5',
					longitude: '13.4',
					is_hidden: false,
					opening_hours: {},
					opening_hours_notes: '',
					logo_id: 0,
					marker_id: 0,
					tag_ids: [],
				},
				{
					title: 'Hidden',
					street: '',
					house_number: '',
					postal_code: '',
					city: '',
					state: '',
					country: '',
					telephone: '',
					email: '',
					website: '',
					latitude: '48.1',
					longitude: '11.5',
					is_hidden: true,
					opening_hours: {},
					opening_hours_notes: '',
					logo_id: 0,
					marker_id: 0,
					tag_ids: [],
				},
			],
			[],
			[],
			[]
		);

		expect(csv).toContain(',hidden,');
		expect(csv).toContain('"false"');
		expect(csv).toContain('"true"');
	});

	test('runs common imports and creates a collection for the imported batch', async () => {
		const parsed = parseCsvText(
			[
				'title,street,house_number,postal_code,city,state,country,telephone,email,website,latitude,longitude,hidden',
				'Brandenburg Gate,Pariser Platz,,10117,Berlin,Berlin,Germany,+49 30 1,info@example.com,https://example.com,52.5162,13.3777,true',
			].join('\n')
		);
		const createdForms: LocationFormState[] = [];
		const collectionAssignments: number[][] = [];
		const progressUpdates: Array<[number, number]> = [];

		const result = await runCommonCsvImport(parsed, LOCATIONS_CONFIG, COLLECTIONS_CONFIG, {
			createLocationFn: async (_config, form) => {
				createdForms.push({ ...form });
				return { id: 77 };
			},
			createCollectionFn: async (_config, _title, locationIds) => {
				collectionAssignments.push(locationIds);
			},
			onProgress: (completed, total) => {
				progressUpdates.push([completed, total]);
			},
		});

		expect(result.importedCount).toBe(1);
		expect(createdForms[0].title).toBe('Brandenburg Gate');
		expect(createdForms[0].latitude).toBe('52.5162');
		expect(createdForms[0].longitude).toBe('13.3777');
		expect(createdForms[0].is_hidden).toBe(true);
		expect(collectionAssignments).toEqual([[77]]);
		expect(progressUpdates).toEqual([
			[0, 1],
			[1, 1],
		]);
	});

	test('runs common imports for JSON records and deserializes opening hours JSON', async () => {
		const parsed = parseJsonText(
			JSON.stringify([
				{
					title: 'Brandenburg Gate',
					street: 'Pariser Platz',
					house_number: '',
					postal_code: '10117',
					city: 'Berlin',
					state: 'Berlin',
					country: 'Germany',
					latitude: '52.5162',
					longitude: '13.3777',
					opening_hours: {
						monday: {
							open: '09:00',
							close: '18:00',
							lunch_start: '12:00',
							lunch_duration_minutes: 60,
						},
					},
				},
			])
		);
		const createdForms: LocationFormState[] = [];

		const result = await runCommonCsvImport(parsed, LOCATIONS_CONFIG, COLLECTIONS_CONFIG, {
			createLocationFn: async (_config, form) => {
				createdForms.push({ ...form });
				return { id: 91 };
			},
			createCollectionFn: async () => {},
		});

		expect(result.importedCount).toBe(1);
		expect(createdForms[0].opening_hours.monday.open).toBe('09:00');
		expect(createdForms[0].opening_hours.monday.close).toBe('18:00');
		expect(createdForms[0].opening_hours.monday.lunch_start).toBe('12:00');
		expect(createdForms[0].opening_hours.monday.lunch_duration_minutes).toBe(60);
	});

	test('runs mapped imports with JSON-derived custom headers', async () => {
		const parsed = parseJsonText(
			JSON.stringify([
				{
					name: 'Berlin Office',
					street_name: 'Unter den Linden',
					house_no: '1',
					zip_code: '10117',
					town: 'Berlin',
					country_name: 'Germany',
				},
			])
		);
		const mapping = createEmptyCsvImportMapping();
		mapping.title = 0;
		mapping.street = 1;
		mapping.house_number = 2;
		mapping.postal_code = 3;
		mapping.city = 4;
		mapping.country = 5;
		const createdForms: LocationFormState[] = [];

		const result = await runMappedCsvImport(
			parsed,
			mapping,
			createEmptyCsvOpeningHoursImportMapping(),
			createEmptyCsvImportAssignments(),
			LOCATIONS_CONFIG,
			COLLECTIONS_CONFIG,
			{
				createLocationFn: async (_config, form) => {
					createdForms.push({ ...form });
					return { id: 101 };
				},
				createCollectionFn: async () => {},
				geocodeAddressFn: async () => {
					throw new Error('skip');
				},
				sleep: async () => {},
			}
		);

		expect(result.importedCount).toBe(1);
		expect(createdForms[0].title).toBe('Berlin Office');
		expect(createdForms[0].street).toBe('Unter den Linden');
		expect(createdForms[0].city).toBe('Berlin');
	});

	test('runs common imports with filename-based logo and marker values plus named tags', async () => {
		const parsed = parseCsvText(
			[
				'title,street,house_number,postal_code,city,country,latitude,longitude,logo,marker,tags',
				'Store One,Main Street,1,10115,Berlin,Germany,52.5,13.4,bioland.png,dennss.svg,Rewe',
				'Store Two,Side Street,2,20095,Hamburg,Germany,53.5,10.0,Bioland,DennsS,Rewe|Organic',
			].join('\n')
		);
		const createdForms: LocationFormState[] = [];

		await runCommonCsvImport(parsed, LOCATIONS_CONFIG, COLLECTIONS_CONFIG, {
			logos: [
				{ id: 11, title: 'bioland.png' },
			],
			markers: [
				{ id: 22, title: 'dennss.svg' },
			],
			tags: [
				{ id: 31, name: 'Rewe' },
				{ id: 32, name: 'Organic' },
			],
			createLocationFn: async (_config, form) => {
				createdForms.push({ ...form });
				return { id: createdForms.length };
			},
			createCollectionFn: async () => {},
		});

		expect(createdForms[0].logo_id).toBe(11);
		expect(createdForms[0].marker_id).toBe(22);
		expect(createdForms[0].tag_ids).toEqual([31]);
		expect(createdForms[1].logo_id).toBe(11);
		expect(createdForms[1].marker_id).toBe(22);
		expect(createdForms[1].tag_ids).toEqual([31, 32]);
	});

	test('imports common-schema JSON files through the shared importLocations helper', async () => {
		const file = new File(
			[
				JSON.stringify([
					{
						title: 'Store One',
						street: 'Main Street',
						house_number: '1',
						postal_code: '10115',
						city: 'Berlin',
						country: 'Germany',
						latitude: '52.5',
						longitude: '13.4',
					},
				]),
			],
			'locations.json',
			{ type: 'application/json' }
		);
		const createdForms: LocationFormState[] = [];
		const collectionAssignments: number[][] = [];

		const importedCount = await importLocations(file, LOCATIONS_CONFIG, COLLECTIONS_CONFIG, {
			createLocationFn: async (_config, form) => {
				createdForms.push({ ...form });
				return { id: 301 };
			},
			createCollectionFn: async (_config, _title, locationIds) => {
				collectionAssignments.push(locationIds);
			},
		});

		expect(importedCount).toBe(1);
		expect(createdForms[0].title).toBe('Store One');
		expect(collectionAssignments).toEqual([[301]]);
	});

	test('builds JSON export records from the shared dynamic export data shape', () => {
		const json = buildLocationExportJson({
			headers: ['title', 'city', 'tags'],
			rows: [['Brandenburg Gate', 'Berlin', 'landmark|historical']],
		});

		expect(JSON.parse(json)).toEqual([
			{
				title: 'Brandenburg Gate',
				city: 'Berlin',
				tags: 'landmark|historical',
			},
		]);
	});

	test('builds example export data that can be serialized as JSON', () => {
		const json = buildLocationExportJson(createExampleLocationExportData());
		const records = JSON.parse(json) as Array<Record<string, string>>;

		expect(records).toHaveLength(2);
		expect(records[0]?.title).toBe('Brandenburg Gate');
		expect(records[1]?.title).toBe('Eiffel Tower');
		expect(Object.keys(records[0] ?? {})).toEqual(createExampleLocationExportData().headers);
	});
});
