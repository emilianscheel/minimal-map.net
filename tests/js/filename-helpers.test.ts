import { describe, expect, test } from 'bun:test';
import {
	formatFilename,
	hasFilenameBasename,
	parseFilenameParts,
} from '../../src/lib/filenames';

describe('filename helpers', () => {
	test('parses a simple filename extension', () => {
		expect(parseFilenameParts('brand.svg')).toEqual({
			basename: 'brand',
			extension: '.svg',
		});
	});

	test('parses the final extension when dots appear in the basename', () => {
		expect(parseFilenameParts('acme.dark.svg')).toEqual({
			basename: 'acme.dark',
			extension: '.svg',
		});
	});

	test('keeps filenames without an extension unchanged', () => {
		expect(parseFilenameParts('logo')).toEqual({
			basename: 'logo',
			extension: '',
		});
	});

	test('formats a trimmed basename with a preserved extension', () => {
		expect(formatFilename('  brand-new  ', '.svg')).toBe('brand-new.svg');
	});

	test('treats whitespace-only basenames as invalid for controller validation', () => {
		expect(hasFilenameBasename('   ')).toBe(false);
		expect(hasFilenameBasename('  brand  ')).toBe(true);
	});
});
