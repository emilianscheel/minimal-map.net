import { afterEach, describe, expect, mock, test } from 'bun:test';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { JSDOM } from 'jsdom';
import { createElement, createRoot } from '@wordpress/element';
import ContentHeader from '../../src/admin/ContentHeader';
import { useStylesController } from '../../src/admin/styles/controller';
import type { StyleThemeRecord, StylesAdminConfig } from '../../src/types';

const originalGlobals = {
	document: globalThis.document,
	Element: globalThis.Element,
	getComputedStyle: globalThis.getComputedStyle,
	HTMLElement: globalThis.HTMLElement,
	HTMLIFrameElement: globalThis.HTMLIFrameElement,
	Node: globalThis.Node,
	navigator: globalThis.navigator,
	requestAnimationFrame: globalThis.requestAnimationFrame,
	cancelAnimationFrame: globalThis.cancelAnimationFrame,
	window: globalThis.window,
};

const defaultTheme: StyleThemeRecord = {
	slug: 'default',
	label: 'Default Theme',
	basePreset: 'positron',
	colors: {
		background: '#f2f3f0',
		park: '#d2e8d4',
		residential: '#e4e4e4',
		forest: '#d2e8d4',
		ice: '#e8f4f4',
		water: '#cad2d3',
		waterway: '#cad2d3',
		building: '#d9dad8',
		buildingOutline: '#d9dad8',
		path: '#ffffff',
		roadMinor: '#ffffff',
		roadMajorCasing: '#e5e5e5',
		roadMajorFill: '#ffffff',
		motorwayCasing: '#e5e5e5',
		motorwayFill: '#ffffff',
		rail: '#dcdcdc',
		railDash: '#ffffff',
		boundary: '#c3c3c3',
		aerowayLine: '#e0e0e0',
		aerowayArea: '#d1d1d1',
		waterLabel: '#7a7a7a',
		waterLabelHalo: '#ffffff',
		roadLabel: '#666666',
		roadLabelHalo: '#ffffff',
		placeLabel: '#333333',
		placeLabelHalo: '#ffffff',
	},
};

const config: StylesAdminConfig = {
	nonce: '',
	restBase: 'styles',
	restPath: '/styles',
	paletteTemplates: [
		{
			id: 'wordpress-theme-palette',
			label: 'WordPress Theme Palette',
			source: 'Current WordPress theme palette',
			colors: [
				{ name: 'Canvas', slug: 'canvas', color: '#f5efe7' },
				{ name: 'Ink', slug: 'ink', color: '#1f2933' },
				{ name: 'Accent', slug: 'accent', color: '#5b8def' },
				{ name: 'Land', slug: 'land', color: '#7aa95c' },
			],
		},
	],
};

function setGlobalDom(dom: JSDOM): void {
	globalThis.window = dom.window as never;
	globalThis.document = dom.window.document as never;
	globalThis.Element = dom.window.Element as never;
	globalThis.getComputedStyle = dom.window.getComputedStyle.bind(dom.window);
	globalThis.navigator = dom.window.navigator as never;
	globalThis.HTMLElement = dom.window.HTMLElement as never;
	globalThis.HTMLIFrameElement = dom.window.HTMLIFrameElement as never;
	globalThis.Node = dom.window.Node as never;
	globalThis.window.matchMedia =
		globalThis.window.matchMedia ??
		(() =>
			({
				addEventListener() {},
				addListener() {},
				dispatchEvent() {
					return false;
				},
				matches: false,
				media: '',
				onchange: null,
				removeEventListener() {},
				removeListener() {},
			}) as MediaQueryList);
	globalThis.window.requestAnimationFrame =
		globalThis.window.requestAnimationFrame ??
		((callback: FrameRequestCallback) => globalThis.window.setTimeout(callback, 0));
	globalThis.window.cancelAnimationFrame =
		globalThis.window.cancelAnimationFrame ??
		((handle: number) => globalThis.window.clearTimeout(handle));
	globalThis.requestAnimationFrame =
		globalThis.requestAnimationFrame ?? globalThis.window.requestAnimationFrame.bind(globalThis.window);
	globalThis.cancelAnimationFrame =
		globalThis.cancelAnimationFrame ?? globalThis.window.cancelAnimationFrame.bind(globalThis.window);
}

function createTestCache(container: HTMLElement) {
	return createCache({
		key: 'minimal-map-test',
		container,
	});
}

async function flushRender(): Promise<void> {
	await new Promise((resolve) => setTimeout(resolve, 0));
}

function openTemplatesMenu(dom: JSDOM): void {
	const button = Array.from(dom.window.document.querySelectorAll('button')).find((candidate) =>
		candidate.textContent?.includes('Templates')
	) as HTMLButtonElement | undefined;

	if (!button) {
		throw new Error('Templates button not found');
	}

	button.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
}

function clickMenuItem(dom: JSDOM, text: string): void {
	const menuItem = Array.from(dom.window.document.querySelectorAll('button')).find((button) =>
		button.textContent?.includes(text)
	) as HTMLButtonElement | undefined;

	if (!menuItem) {
		throw new Error(`Menu item "${text}" not found`);
	}

	menuItem.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
}

function StylesHeaderHarness({
	apiFetchMock,
}: {
	apiFetchMock: (options: Record<string, unknown>) => Promise<unknown>;
}) {
	const controller = useStylesController(
		config,
		true,
		{
			apiFetch: apiFetchMock as never,
			deriveThemeFromPalette: () => ({
				...defaultTheme.colors,
				background: '#ede8df',
				water: '#9fbad7',
				park: '#cfe0be',
			}),
		}
	);

	return createElement(
		'div',
		null,
		createElement(ContentHeader, {
			title: 'Styles',
			description: 'Configure map themes',
			actions: controller.headerAction,
		}),
		createElement(
			'div',
			{ 'data-testid': 'active-theme' },
			controller.activeTheme?.label ?? ''
		),
		controller.actionNotice ? createElement(
			'div',
			{ 'data-testid': 'notice' },
			controller.actionNotice.message
		) : null
	);
}

afterEach(() => {
	globalThis.window = originalGlobals.window;
	globalThis.document = originalGlobals.document;
	globalThis.Element = originalGlobals.Element;
	globalThis.getComputedStyle = originalGlobals.getComputedStyle;
	globalThis.navigator = originalGlobals.navigator;
	globalThis.HTMLElement = originalGlobals.HTMLElement;
	globalThis.HTMLIFrameElement = originalGlobals.HTMLIFrameElement;
	globalThis.Node = originalGlobals.Node;
	globalThis.requestAnimationFrame = originalGlobals.requestAnimationFrame;
	globalThis.cancelAnimationFrame = originalGlobals.cancelAnimationFrame;
});

describe('styles header templates', () => {
	test('renders the template dropdown and creates a new WordPress palette theme', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);
		const apiFetchMock = mock(async (options: Record<string, unknown>) => {
			if (options.method === 'POST') {
				return {
					...defaultTheme,
					slug: 'wordpress-palette',
					label: options.data && typeof options.data === 'object'
						? (options.data as { label: string }).label
						: 'WordPress Palette',
				};
			}

			if (options.method === 'PUT') {
				return {
					...defaultTheme,
					slug: 'wordpress-palette',
					label: 'WordPress Palette',
					colors: options.data && typeof options.data === 'object'
						? (options.data as { colors: StyleThemeRecord['colors'] }).colors
						: defaultTheme.colors,
				};
			}

			return [ defaultTheme ];
		});

		try {
			root.render(
				createElement(
					CacheProvider,
					{ value: createTestCache(dom.window.document.head) },
					createElement(StylesHeaderHarness, { apiFetchMock }),
				)
			);

			await flushRender();
			await flushRender();

			expect(host.textContent).toContain('Templates');

			openTemplatesMenu(dom);
			await flushRender();

			expect(dom.window.document.body.textContent).toContain('WordPress Theme Palette');
			expect(
				dom.window.document.querySelectorAll('.minimal-map-styles__palette-template-swatch').length
			).toBeGreaterThanOrEqual(4);

			clickMenuItem(dom, 'WordPress Theme Palette');
			await flushRender();
			await flushRender();

			expect(host.textContent).toContain('WordPress Palette');
			expect(host.textContent).toContain('Created a new theme from the current WordPress palette.');
			expect(apiFetchMock).toHaveBeenCalledTimes(3);
		} finally {
			root.unmount();
		}
	});
});
