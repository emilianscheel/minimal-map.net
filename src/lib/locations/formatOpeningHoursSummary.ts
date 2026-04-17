import { __ } from '@wordpress/i18n';
import type { LocationOpeningHours, OpeningHoursDayKey } from '../../types';
import {
	groupOpeningHoursDays,
	hasLunchBreakForDay,
	hasOpeningHoursForDay,
} from './openingHours';

const SHORT_DAY_LABELS: Record<OpeningHoursDayKey, string> = {
	monday: __('Mon', 'minimal-map-net'),
	tuesday: __('Tue', 'minimal-map-net'),
	wednesday: __('Wed', 'minimal-map-net'),
	thursday: __('Thu', 'minimal-map-net'),
	friday: __('Fri', 'minimal-map-net'),
	saturday: __('Sat', 'minimal-map-net'),
	sunday: __('Sun', 'minimal-map-net'),
};

function formatDayRange(dayKeys: OpeningHoursDayKey[]): string {
	if (dayKeys.length === 1) {
		return SHORT_DAY_LABELS[dayKeys[0]];
	}

	return `${SHORT_DAY_LABELS[dayKeys[0]]}-${SHORT_DAY_LABELS[dayKeys[dayKeys.length - 1]]}`;
}

function formatGroupLine(
	dayKeys: OpeningHoursDayKey[],
	day: LocationOpeningHours[OpeningHoursDayKey]
): string {
	const dayRange = formatDayRange(dayKeys);

	if (!hasOpeningHoursForDay(day) && hasLunchBreakForDay(day)) {
		return `${dayRange} ${__('Lunch', 'minimal-map-net')} ${day.lunch_start} / ${day.lunch_duration_minutes}m`;
	}

	const hoursLabel = hasOpeningHoursForDay(day) ? `${day.open}-${day.close}` : __('Closed', 'minimal-map-net');
	const lunchLabel = hasLunchBreakForDay(day)
		? ` ${__('Lunch', 'minimal-map-net')} ${day.lunch_start} / ${day.lunch_duration_minutes}m`
		: '';

	return `${dayRange} ${hoursLabel}${lunchLabel}`;
}

export interface OpeningHoursSummary {
	lines: string[];
	hiddenLineCount: number;
}

export function formatOpeningHoursSummary(
	openingHours: LocationOpeningHours,
	maxLines = 2
): OpeningHoursSummary {
	const groups = groupOpeningHoursDays(openingHours)
		.filter(({ day }) => hasOpeningHoursForDay(day) || hasLunchBreakForDay(day))
		.map(({ dayKeys, day }) => formatGroupLine(dayKeys, day));

	return {
		lines: groups.slice(0, maxLines),
		hiddenLineCount: Math.max(0, groups.length - maxLines),
	};
}
