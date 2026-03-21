import type { LocationOpeningHours, OpeningHoursDayKey } from '../../types';
import { OPENING_HOURS_DAY_ORDER, createDefaultOpeningHours } from './openingHours';

export interface CsvOpeningHoursRange {
	open: string;
	close: string;
}

export interface CsvOpeningHoursFormat {
	id: string;
	parse: (value: string) => CsvOpeningHoursRange | null;
}

export type CsvOpeningHoursImportMapping = Record<OpeningHoursDayKey, number | null> & {
	opening_hours_notes: number | null;
};

export interface CsvOpeningHoursColumnAnalysis {
	columnIndex: number;
	hasValues: boolean;
	isValid: boolean;
}

function normalizeImportedTime(hourValue: string, minuteValue?: string): string | null {
	const hour = Number.parseInt(hourValue, 10);
	const minutes = minuteValue === undefined ? 0 : Number.parseInt(minuteValue, 10);

	if (
		!Number.isInteger(hour) ||
		!Number.isInteger(minutes) ||
		hour < 0 ||
		hour > 23 ||
		minutes < 0 ||
		minutes > 59
	) {
		return null;
	}

	return `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

function parseHourRange(value: string): CsvOpeningHoursRange | null {
	const match = value.match(/^(\d{1,2})(?::(\d{2}))?\s*-\s*(\d{1,2})(?::(\d{2}))?$/);

	if (!match) {
		return null;
	}

	const open = normalizeImportedTime(match[1], match[2]);
	const close = normalizeImportedTime(match[3], match[4]);

	if (!open || !close) {
		return null;
	}

	return {
		open,
		close,
	};
}

export const CSV_OPENING_HOURS_FORMATS: CsvOpeningHoursFormat[] = [
	{
		id: 'hour-range',
		parse: parseHourRange,
	},
];

function sanitizeCellValue(value: string): string {
	return value.trim();
}

function getMappedValue(row: string[], columnIndex: number | null): string {
	if (columnIndex === null || columnIndex < 0 || columnIndex >= row.length) {
		return '';
	}

	return sanitizeCellValue(row[columnIndex] ?? '');
}

export function createEmptyCsvOpeningHoursImportMapping(): CsvOpeningHoursImportMapping {
	const dayMapping = OPENING_HOURS_DAY_ORDER.reduce<Record<OpeningHoursDayKey, number | null>>(
		(mapping, dayKey) => {
			mapping[dayKey] = null;
			return mapping;
		},
		{} as Record<OpeningHoursDayKey, number | null>
	);

	return {
		...dayMapping,
		opening_hours_notes: null,
	};
}

export function parseCsvOpeningHoursValue(
	value: string,
	formats: CsvOpeningHoursFormat[] = CSV_OPENING_HOURS_FORMATS
): CsvOpeningHoursRange | null {
	const sanitizedValue = sanitizeCellValue(value);

	if (sanitizedValue === '') {
		return null;
	}

	for (const format of formats) {
		const parsedRange = format.parse(sanitizedValue);

		if (parsedRange) {
			return parsedRange;
		}
	}

	return null;
}

export function analyzeCsvOpeningHoursColumn(
	rows: string[][],
	columnIndex: number,
	formats: CsvOpeningHoursFormat[] = CSV_OPENING_HOURS_FORMATS
): CsvOpeningHoursColumnAnalysis {
	let hasValues = false;

	for (const row of rows) {
		const value = sanitizeCellValue(row[columnIndex] ?? '');

		if (value === '') {
			continue;
		}

		hasValues = true;

		if (!parseCsvOpeningHoursValue(value, formats)) {
			return {
				columnIndex,
				hasValues,
				isValid: false,
			};
		}
	}

	return {
		columnIndex,
		hasValues,
		isValid: hasValues,
	};
}

export function getValidCsvOpeningHoursColumnIndexes(
	rows: string[][],
	columnCount: number,
	formats: CsvOpeningHoursFormat[] = CSV_OPENING_HOURS_FORMATS
): number[] {
	const validColumnIndexes: number[] = [];

	for (let columnIndex = 0; columnIndex < columnCount; columnIndex += 1) {
		const analysis = analyzeCsvOpeningHoursColumn(rows, columnIndex, formats);

		if (analysis.isValid) {
			validColumnIndexes.push(columnIndex);
		}
	}

	return validColumnIndexes;
}

export function buildImportedOpeningHours(
	row: string[],
	mapping: CsvOpeningHoursImportMapping,
	formats: CsvOpeningHoursFormat[] = CSV_OPENING_HOURS_FORMATS
): { openingHours: LocationOpeningHours; notes: string } {
	const openingHours = createDefaultOpeningHours();

	for (const dayKey of OPENING_HOURS_DAY_ORDER) {
		const parsedRange = parseCsvOpeningHoursValue(getMappedValue(row, mapping[dayKey]), formats);

		if (!parsedRange) {
			continue;
		}

		openingHours[dayKey] = {
			...openingHours[dayKey],
			open: parsedRange.open,
			close: parsedRange.close,
		};
	}

	return {
		openingHours,
		notes: getMappedValue(row, mapping.opening_hours_notes),
	};
}
