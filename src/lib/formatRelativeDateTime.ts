import { humanTimeDiff } from '@wordpress/date';
import { __ } from '@wordpress/i18n';

export interface RelativeDateTimeParts {
	absolute: string;
	relative: string;
}

interface FormatRelativeDateTimeOptions {
	locale?: string | null;
	timeZone?: string | null;
	now?: Date | string | number;
}

const JUST_NOW_THRESHOLD_MS = 60 * 1000;
const dateTimeFormatCache = new Map<string, Intl.DateTimeFormat>();

function normalizeLocale(locale: string | null | undefined): string {
	return (typeof locale === 'string' ? locale.trim().replace(/_/g, '-') : '') || 'en-US';
}

function normalizeTimeZone(timeZone: string | null | undefined): string {
	return (typeof timeZone === 'string' ? timeZone.trim() : '') || 'UTC';
}

function createDateTimeFormatter(locale: string, timeZone: string): Intl.DateTimeFormat {
	try {
		return new Intl.DateTimeFormat(locale, {
			dateStyle: 'medium',
			timeStyle: 'short',
			timeZone,
		});
	} catch {
		return new Intl.DateTimeFormat(locale, {
			dateStyle: 'medium',
			timeStyle: 'short',
			timeZone: 'UTC',
		});
	}
}

function getCachedDateTimeFormatter(locale: string, timeZone: string): Intl.DateTimeFormat {
	const cacheKey = `${locale}::${timeZone}`;
	let formatter = dateTimeFormatCache.get(cacheKey);

	if (!formatter) {
		formatter = createDateTimeFormatter(locale, timeZone);
		dateTimeFormatCache.set(cacheKey, formatter);
	}

	return formatter;
}

function toValidDate(value: Date | string | number | null | undefined): Date | null {
	if (value === null || value === undefined || value === '') {
		return null;
	}

	const date = value instanceof Date
		? new Date(value.getTime())
		: new Date(value);

	return Number.isNaN(date.getTime()) ? null : date;
}

function getRelativeLabel(date: Date, referenceDate: Date): string {
	if (Math.abs(referenceDate.getTime() - date.getTime()) < JUST_NOW_THRESHOLD_MS) {
		return __('Just now');
	}

	return humanTimeDiff(date, referenceDate);
}

export function formatRelativeDateTime(
	value: Date | string | number | null | undefined,
	options: FormatRelativeDateTimeOptions = {}
): RelativeDateTimeParts | null {
	const date = toValidDate(value);
	const referenceDate = toValidDate(options.now ?? Date.now());

	if (!date || !referenceDate) {
		return null;
	}

	const locale = normalizeLocale(options.locale);
	const timeZone = normalizeTimeZone(options.timeZone);
	const formatter = getCachedDateTimeFormatter(locale, timeZone);

	return {
		absolute: formatter.format(date),
		relative: getRelativeLabel(date, referenceDate),
	};
}
