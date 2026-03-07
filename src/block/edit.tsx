import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { useEffect, useMemo, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { createMinimalMap } from '../map/bootstrap';
import { normalizeHeightUnit, normalizeMapConfig } from '../map/defaults';
import { getStyleOptions } from '../map/style-presets';
import type {
	MapBlockAttributes,
	MapRuntimeConfig,
	MinimalMapInstance,
	RawMapConfig,
	StyleOption,
} from '../types';

const runtimeConfig: MapRuntimeConfig = window.MinimalMapBlockConfig ?? {};
const HEIGHT_UNITS: StyleOption[] = (runtimeConfig.heightUnits ?? [ 'px', 'em', 'rem', '%', 'vh', 'vw' ]).map((value) => ({
	label: value,
	value,
}));

function parseHeightValue(
	rawValue: string | number | undefined,
	fallbackUnit: string
): Pick<MapBlockAttributes, 'height' | 'heightUnit'> | null {
	if (typeof rawValue === 'number') {
		return {
			height: rawValue,
			heightUnit: normalizeHeightUnit(fallbackUnit),
		};
	}

	if (typeof rawValue !== 'string') {
		return null;
	}

	const match = rawValue.trim().match(/^(-?\d*\.?\d+)\s*([a-z%]*)$/i);

	if (!match) {
		return null;
	}

	return {
		height: Number(match[1]),
		heightUnit: normalizeHeightUnit(match[2] || fallbackUnit),
	};
}

interface EditProps {
	attributes: MapBlockAttributes;
	setAttributes: (attributes: Partial<MapBlockAttributes>) => void;
}

export default function Edit({ attributes, setAttributes }: EditProps) {
	const mapRef = useRef<HTMLDivElement | null>(null);
	const mapInstanceRef = useRef<MinimalMapInstance | null>(null);
	const styleOptions = useMemo(() => getStyleOptions(runtimeConfig.stylePresets), []);
	const config = useMemo(() => normalizeMapConfig(attributes, runtimeConfig), [ attributes ]);
	const blockProps = useBlockProps({ className: 'minimal-map-editor' });

	useEffect(() => {
		if (!mapRef.current) {
			return undefined;
		}

		mapInstanceRef.current = createMinimalMap(mapRef.current, config, runtimeConfig);

		return () => {
			if (mapInstanceRef.current) {
				mapInstanceRef.current.destroy();
				mapInstanceRef.current = null;
			}
		};
	}, []);

	useEffect(() => {
		mapInstanceRef.current?.update(config);
	}, [ config ]);

	function updateNumberAttribute<Key extends keyof Pick<MapBlockAttributes, 'centerLat' | 'centerLng' | 'zoom'>>(
		key: Key
	) {
		return (value: string): void => {
			const numericValue = Number(value);

			if (Number.isNaN(numericValue)) {
				return;
			}

			setAttributes({
				[key]: numericValue,
			} as Pick<MapBlockAttributes, Key>);
		};
	}

	const updateHeight = (value?: string | number): void => {
		const parsed = parseHeightValue(value, attributes.heightUnit || 'px');

		if (!parsed || Number.isNaN(parsed.height) || parsed.height <= 0) {
			return;
		}

		setAttributes({
			height: parsed.height,
			heightUnit: parsed.heightUnit,
		});
	};

	const updateZoom = (value?: number): void => {
		if (typeof value === 'number') {
			setAttributes({ zoom: value });
		}
	};

	return (
		<>
			<InspectorControls group="settings">
				<PanelBody title={__('Map Settings', 'minimal-map')} initialOpen>
					<TextControl
						label={__('Center Latitude', 'minimal-map')}
						type="number"
						step="0.000001"
						value={attributes.centerLat}
						onChange={updateNumberAttribute('centerLat')}
					/>
					<TextControl
						label={__('Center Longitude', 'minimal-map')}
						type="number"
						step="0.000001"
						value={attributes.centerLng}
						onChange={updateNumberAttribute('centerLng')}
					/>
					<RangeControl
						label={__('Zoom', 'minimal-map')}
						value={attributes.zoom}
						onChange={updateZoom}
						min={0}
						max={22}
						step={0.5}
					/>
					<ToggleControl
						label={__('Show Zoom Controls', 'minimal-map')}
						checked={attributes.showZoomControls}
						onChange={(value: boolean) => setAttributes({ showZoomControls: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<InspectorControls group="styles">
				<PanelBody title={__('Appearance', 'minimal-map')} initialOpen>
					<UnitControl
						className="minimal-map-editor__height-control components-border-radius-control__unit-control"
						label={__('Height', 'minimal-map')}
						value={`${attributes.height ?? 420}${attributes.heightUnit || 'px'}`}
						onChange={updateHeight}
						units={HEIGHT_UNITS}
						size="__unstable-large"
					/>
					<SelectControl
						label={__('Style Preset', 'minimal-map')}
						value={attributes.stylePreset}
						options={styleOptions}
						onChange={(value: string) => setAttributes({ stylePreset: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div
					ref={mapRef}
					className="minimal-map-editor__canvas"
					style={{ height: config.heightCssValue }}
				/>
			</div>
		</>
	);
}
