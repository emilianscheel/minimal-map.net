import type { MapCoordinates, MapLocationPoint } from '../types';

const EARTH_RADIUS_METERS = 6371000;

export interface DistanceSearchResult {
	location: MapLocationPoint;
	distanceMeters: number;
	distanceLabel: string;
}

function toRadians(value: number): number {
	return (value * Math.PI) / 180;
}

export function calculateDistanceMeters(
	origin: MapCoordinates,
	target: Pick<MapLocationPoint, 'lat' | 'lng'>,
): number {
	const latDistance = toRadians(target.lat - origin.lat);
	const lngDistance = toRadians(target.lng - origin.lng);
	const originLat = toRadians(origin.lat);
	const targetLat = toRadians(target.lat);
	const a =
		Math.sin(latDistance / 2) ** 2 +
		Math.cos(originLat) * Math.cos(targetLat) * Math.sin(lngDistance / 2) ** 2;
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	return EARTH_RADIUS_METERS * c;
}

export function formatDistanceLabel(distanceMeters: number): string {
	if (distanceMeters >= 1000) {
		return `${Math.round(distanceMeters / 1000)} km`;
	}

	return `${Math.round(distanceMeters)} m`;
}

export function buildDistanceSearchResults(
	origin: MapCoordinates,
	locations: MapLocationPoint[],
): DistanceSearchResult[] {
	return locations
		.map((location) => {
			const distanceMeters = calculateDistanceMeters(origin, location);

			return {
				location,
				distanceMeters,
				distanceLabel: formatDistanceLabel(distanceMeters),
			};
		})
		.sort((left, right) => left.distanceMeters - right.distanceMeters);
}
