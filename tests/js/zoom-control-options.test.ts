import { describe, expect, test } from 'bun:test';
import { getZoomControlRuntimeIconSvg } from '../../src/map/zoom-control-options';

describe('zoom control runtime icons', () => {
	test('uses lucide-style svg markup for the plus control', () => {
		const svg = getZoomControlRuntimeIconSvg('plus');

		expect(svg).toContain('M5 12h14');
		expect(svg).toContain('M12 5v14');
	});

	test('uses lucide-style svg markup for the minus and locate-adjacent variants', () => {
		expect(getZoomControlRuntimeIconSvg('line-solid')).toContain('M5 12h14');
		expect(getZoomControlRuntimeIconSvg('close-small')).toContain('M18 6 6 18');
	});
});
