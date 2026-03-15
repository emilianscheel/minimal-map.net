export interface FilenameParts {
	basename: string;
	extension: string;
}

export function parseFilenameParts(filename: string): FilenameParts {
	const lastDotIndex = filename.lastIndexOf('.');

	if (lastDotIndex <= 0) {
		return {
			basename: filename,
			extension: '',
		};
	}

	return {
		basename: filename.slice(0, lastDotIndex),
		extension: filename.slice(lastDotIndex),
	};
}

export function hasFilenameBasename(value: string): boolean {
	return value.trim().length > 0;
}

export function formatFilename(basename: string, extension: string): string {
	return `${basename.trim()}${extension}`;
}
