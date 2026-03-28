function pad(value: number): string {
	return `${value}`.padStart(2, '0');
}

export function getReadableFileTimestamp(date: Date = new Date()): string {
	const datePart = [
		date.getFullYear(),
		pad(date.getMonth() + 1),
		pad(date.getDate()),
	].join('-');
	const timePart = [
		pad(date.getHours()),
		pad(date.getMinutes()),
		pad(date.getSeconds()),
	].join('-');

	return `${datePart}_${timePart}`;
}

export function buildTimestampedFileName(
	baseName: string,
	extension: string,
	date: Date = new Date(),
): string {
	return `${baseName}-${getReadableFileTimestamp(date)}.${extension}`;
}
