import type { MapCoordinates } from '../types';

const DECIMAL_COORDINATE_PART = '[-+]?\\d+(?:\\.\\d+)?';
const DECIMAL_COORDINATE_PATTERN = new RegExp(
	`^\\s*(${DECIMAL_COORDINATE_PART})\\s*(?:,|\\s+)\\s*(${DECIMAL_COORDINATE_PART})\\s*$`,
	'i'
);
const DIRECTIONAL_COORDINATE_PATTERN = new RegExp(
	`^\\s*(${DECIMAL_COORDINATE_PART})\\s*([NS])\\s*(?:,|\\s+)\\s*(${DECIMAL_COORDINATE_PART})\\s*([EW])\\s*$`,
	'i'
);

function isValidCoordinates(lat: number, lng: number): boolean {
	return (
		Number.isFinite(lat) &&
		Number.isFinite(lng) &&
		lat >= -90 &&
		lat <= 90 &&
		lng >= -180 &&
		lng <= 180
	);
}

function applyDirectionalSign(value: number, direction: string): number {
	const absoluteValue = Math.abs(value);

	return /[SW]/i.test(direction) ? -absoluteValue : absoluteValue;
}

function formatCoordinatePart(value: number): string {
	const rounded = Math.round(value * 1_000_000) / 1_000_000;

	if (Number.isInteger(rounded)) {
		return `${rounded}`;
	}

	return rounded.toFixed(6).replace(/0+$/u, '').replace(/\.$/u, '');
}

export function formatCoordinateSearchValue(coordinates: MapCoordinates): string {
	return `${formatCoordinatePart(coordinates.lat)}, ${formatCoordinatePart(coordinates.lng)}`;
}

export function parseCoordinateSearchValue(value: string): MapCoordinates | null {
	const trimmedValue = value.trim();

	if (!trimmedValue) {
		return null;
	}

	const directionalMatch = trimmedValue.match(DIRECTIONAL_COORDINATE_PATTERN);

	if (directionalMatch) {
		const lat = applyDirectionalSign(
			Number(directionalMatch[1]),
			directionalMatch[2]
		);
		const lng = applyDirectionalSign(
			Number(directionalMatch[3]),
			directionalMatch[4]
		);

		return isValidCoordinates(lat, lng) ? { lat, lng } : null;
	}

	const decimalMatch = trimmedValue.match(DECIMAL_COORDINATE_PATTERN);

	if (!decimalMatch) {
		return null;
	}

	const lat = Number(decimalMatch[1]);
	const lng = Number(decimalMatch[2]);

	return isValidCoordinates(lat, lng) ? { lat, lng } : null;
}
