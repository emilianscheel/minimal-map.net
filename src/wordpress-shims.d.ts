declare module '@wordpress/block-editor' {
	import type { ComponentType } from 'react';

	export const InspectorControls: ComponentType<Record<string, unknown>>;
	export const __experimentalColorGradientSettingsDropdown: ComponentType<Record<string, unknown>>;
	export const __experimentalColorGradientControl: ComponentType<Record<string, unknown>>;
	export const __experimentalBorderRadiusControl: ComponentType<Record<string, unknown>>;
	export function useBlockProps(
		props?: Record<string, unknown>
	): Record<string, unknown>;
}

declare module '@wordpress/blocks' {
	export interface BlockConfiguration<TAttributes = Record<string, unknown>> {
		name?: string;
		edit?: unknown;
		save?: unknown;
		[key: string]: unknown;
	}

	export function registerBlockType<TAttributes = Record<string, unknown>>(
		name: string,
		settings: BlockConfiguration<TAttributes>
	): void;
}

declare module '@wordpress/commands' {
	import type { StoreDescriptor } from '@wordpress/data';

	export const store: StoreDescriptor;
}
