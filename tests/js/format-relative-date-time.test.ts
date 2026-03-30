import { afterEach, describe, expect, test } from 'bun:test';
import { getSettings, setSettings, type DateSettings } from '@wordpress/date';
import { formatRelativeDateTime } from '../../src/lib/formatRelativeDateTime';

const originalDateSettings = getSettings();

const TEST_DATE_SETTINGS: DateSettings = {
	l10n: {
		locale: 'en',
		months: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
		monthsShort: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
		weekdays: [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		],
		weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		meridiem: { am: 'am', pm: 'pm', AM: 'AM', PM: 'PM' },
		relative: {
			future: 'in %s',
			past: '%s ago',
			s: 'a few seconds',
			ss: '%d seconds',
			m: 'a minute',
			mm: '%d minutes',
			h: 'an hour',
			hh: '%d hours',
			d: 'a day',
			dd: '%d days',
			M: 'a month',
			MM: '%d months',
			y: 'a year',
			yy: '%d years',
		},
		startOfWeek: 0,
	},
	formats: {
		time: 'g:i a',
		date: 'F j, Y',
		datetime: 'F j, Y g:i a',
		datetimeAbbreviated: 'M j, Y g:i a',
	},
	timezone: {
		offset: 0,
		offsetFormatted: '0',
		string: 'UTC',
		abbr: 'UTC',
	},
};

afterEach(() => {
	setSettings(originalDateSettings);
});

describe('formatRelativeDateTime', () => {
	test('returns null for empty or invalid timestamps', () => {
		setSettings(TEST_DATE_SETTINGS);

		expect(formatRelativeDateTime('', { now: '2026-03-30T12:00:00Z' })).toBeNull();
		expect(formatRelativeDateTime('invalid-date', { now: '2026-03-30T12:00:00Z' })).toBeNull();
	});

	test('uses "Just now" for timestamps less than one minute old', () => {
		setSettings(TEST_DATE_SETTINGS);
		const expectedAbsolute = new Intl.DateTimeFormat('en-US', {
			dateStyle: 'medium',
			timeStyle: 'short',
			timeZone: 'Europe/Berlin',
		}).format(new Date('2026-03-30T11:59:45Z'));

		expect(
			formatRelativeDateTime('2026-03-30T11:59:45Z', {
				locale: 'en-US',
				timeZone: 'Europe/Berlin',
				now: '2026-03-30T12:00:00Z',
			})
		).toEqual({
			absolute: expectedAbsolute,
			relative: 'Just now',
		});
	});

	test('formats minute, hour, day, week-ish, month, and year ranges', () => {
		setSettings(TEST_DATE_SETTINGS);

		const options = {
			locale: 'en-US',
			timeZone: 'UTC',
			now: '2026-03-30T12:00:00Z',
		};

		expect(formatRelativeDateTime('2026-03-30T11:50:00Z', options)?.relative).toBe('10 minutes ago');
		expect(formatRelativeDateTime('2026-03-30T11:00:00Z', options)?.relative).toBe('an hour ago');
		expect(formatRelativeDateTime('2026-03-29T12:00:00Z', options)?.relative).toBe('a day ago');
		expect(formatRelativeDateTime('2026-03-23T12:00:00Z', options)?.relative).toBe('7 days ago');
		expect(formatRelativeDateTime('2026-02-28T12:00:00Z', options)?.relative).toBe('a month ago');
		expect(formatRelativeDateTime('2025-03-30T12:00:00Z', options)?.relative).toBe('a year ago');
	});

	test('formats the absolute timestamp in the supplied locale and timezone', () => {
		setSettings(TEST_DATE_SETTINGS);
		const expectedAbsolute = new Intl.DateTimeFormat('de-DE', {
			dateStyle: 'medium',
			timeStyle: 'short',
			timeZone: 'Europe/Berlin',
		}).format(new Date('2026-03-30T12:00:00Z'));

		expect(
			formatRelativeDateTime('2026-03-30T12:00:00Z', {
				locale: 'de-DE',
				timeZone: 'Europe/Berlin',
				now: '2026-03-30T12:10:00Z',
			})
		).toEqual({
			absolute: expectedAbsolute,
			relative: '10 minutes ago',
		});
	});
});
