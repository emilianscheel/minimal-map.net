import { afterEach, describe, expect, test } from 'bun:test';
import { JSDOM } from 'jsdom';
import { createElement, createRoot } from '@wordpress/element';
import { KeyboardShortcut, getShortcutAriaKeys, isApplePlatform } from '../../src/components/Kbd';

const originalGlobals = {
	document: globalThis.document,
	navigator: globalThis.navigator,
	window: globalThis.window,
};

function setGlobalDom(dom: JSDOM): void {
	globalThis.window = dom.window as never;
	globalThis.document = dom.window.document as never;
	globalThis.navigator = dom.window.navigator as never;
}

async function flushRender(): Promise<void> {
	await new Promise((resolve) => setTimeout(resolve, 0));
}

afterEach(() => {
	globalThis.window = originalGlobals.window;
	globalThis.document = originalGlobals.document;
	globalThis.navigator = originalGlobals.navigator;
});

describe('Kbd shortcuts', () => {
	test('detects Apple platforms', () => {
		expect(isApplePlatform({ platform: 'MacIntel' })).toBe(true);
		expect(isApplePlatform({ platform: 'Win32' })).toBe(false);
	});

	test('builds platform-aware aria shortcut strings', () => {
		expect(getShortcutAriaKeys(['primary', 'n'], { platform: 'MacIntel' })).toBe('Meta+N');
		expect(getShortcutAriaKeys(['primary', 'n'], { platform: 'Win32' })).toBe('Control+N');
	});

	test('renders the mac command symbol for primary shortcuts on Apple platforms', async () => {
		const dom = new JSDOM('<!doctype html><div id="host"></div>');
		setGlobalDom(dom);
		const host = dom.window.document.getElementById('host') as HTMLDivElement;
		const root = createRoot(host);

		root.render(
			createElement(KeyboardShortcut, {
				keys: ['primary', 'n'],
				platformSource: { platform: 'MacIntel' },
				variant: 'neutral',
			})
		);

		await flushRender();

		expect(host.textContent).toContain('⌘');
		expect(host.textContent).toContain('N');

		root.unmount();
	});
});
