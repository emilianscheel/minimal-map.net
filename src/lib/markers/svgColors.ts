export interface SvgColorEntry {
	id: string;
	label: string;
	property: 'fill' | 'stroke';
	value: string;        // hex color — used when isNone is false
	isNone: boolean;      // true = none / unset / transparent
	elementIndex: number;
	elementTag: string;
}

const COLORED_TAGS = ['path', 'rect', 'circle', 'ellipse', 'polygon', 'polyline', 'line'];
const SKIP_VALUES = new Set(['none', 'transparent', 'inherit', 'currentcolor']);
const DEFAULT_COLOR = '#000000';

/**
 * Parse an SVG string and extract all color entries.
 * Both fill and stroke are always included for every element.
 * Entries without an explicit color (unset, none, transparent, etc.) have isNone = true.
 */
export function parseSvgColors(svgString: string): SvgColorEntry[] {
	const parser = new DOMParser();
	const doc = parser.parseFromString(svgString, 'image/svg+xml');
	const svgEl = doc.querySelector('svg');

	if (!svgEl) {
		return [];
	}

	const entries: SvgColorEntry[] = [];
	const tagCounters: Record<string, number> = {};
	let elementIndex = 0;

	for (const tag of COLORED_TAGS) {
		const elements = svgEl.querySelectorAll(tag);

		for (const el of elements) {
			tagCounters[tag] = (tagCounters[tag] ?? 0);
			const instanceNumber = tagCounters[tag] + 1;
			tagCounters[tag]++;

			const tagLabel = tag.charAt(0).toUpperCase() + tag.slice(1);

			// Fill — always include
			const fillAttr = el.getAttribute('fill');
			const normalizedFill =
				fillAttr && !SKIP_VALUES.has(fillAttr.toLowerCase())
					? normalizeHex(fillAttr)
					: null;
			entries.push({
				id: `${tag}-${elementIndex}-fill`,
				label: `${tagLabel} ${instanceNumber} · Fill`,
				property: 'fill',
				value: normalizedFill ?? DEFAULT_COLOR,
				isNone: normalizedFill === null,
				elementIndex,
				elementTag: tag,
			});

			// Stroke — always include
			const strokeAttr = el.getAttribute('stroke');
			const normalizedStroke =
				strokeAttr && !SKIP_VALUES.has(strokeAttr.toLowerCase())
					? normalizeHex(strokeAttr)
					: null;
			entries.push({
				id: `${tag}-${elementIndex}-stroke`,
				label: `${tagLabel} ${instanceNumber} · Stroke`,
				property: 'stroke',
				value: normalizedStroke ?? DEFAULT_COLOR,
				isNone: normalizedStroke === null,
				elementIndex,
				elementTag: tag,
			});

			elementIndex++;
		}
	}

	return entries;
}

/**
 * Apply updated color entries back to the SVG and return the modified SVG string.
 * Entries with isNone = true write 'none' to the attribute.
 */
export function applySvgColors(svgString: string, entries: SvgColorEntry[]): string {
	const parser = new DOMParser();
	const doc = parser.parseFromString(svgString, 'image/svg+xml');
	const svgEl = doc.querySelector('svg');

	if (!svgEl) {
		return svgString;
	}

	const colorMap = new Map<string, { value: string; isNone: boolean }>();
	for (const entry of entries) {
		colorMap.set(`${entry.elementIndex}-${entry.property}`, {
			value: entry.value,
			isNone: entry.isNone,
		});
	}

	let globalIndex = 0;

	for (const tag of COLORED_TAGS) {
		const elements = svgEl.querySelectorAll(tag);
		for (const el of elements) {
			for (const property of ['fill', 'stroke'] as const) {
				const entry = colorMap.get(`${globalIndex}-${property}`);
				if (entry) {
					el.setAttribute(property, entry.isNone ? 'none' : entry.value);
				}
			}
			globalIndex++;
		}
	}

	return new XMLSerializer().serializeToString(svgEl);
}

/**
 * Convert an SVG string to a data URL for use in <img src=...>.
 */
export function svgToDataUrl(svgString: string): string {
	return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;
}

function normalizeHex(value: string): string | null {
	const hexMatch = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.exec(value.trim());
	if (!hexMatch) {
		return null;
	}
	const raw = hexMatch[1];
	if (raw.length === 3) {
		return '#' + raw.split('').map((c) => c + c).join('');
	}
	return '#' + raw.toLowerCase();
}
