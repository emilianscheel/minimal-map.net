import {
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	InspectorControls,
	__experimentalBorderRadiusControl as BorderRadiusControl,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	BoxControl,
	PanelBody,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { useEffect, useMemo, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { createMinimalMap } from '../map/bootstrap';
import { normalizeHeightUnit, normalizeMapConfig } from '../map/defaults';
import {
	type ZoomControlIconOption,
	ZOOM_CONTROLS_POSITION_OPTIONS,
} from '../map/zoom-control-options';
import { getStyleOptions } from '../map/style-presets';
import type {
	BoxValue,
	MapBlockAttributes,
	MapRuntimeConfig,
	MinimalMapInstance,
	RawMapConfig,
	StyleOption,
	ZoomControlsPosition,
} from '../types';

const runtimeConfig: MapRuntimeConfig = window.MinimalMapBlockConfig ?? {};
const HEIGHT_UNITS: StyleOption[] = (runtimeConfig.heightUnits ?? [ 'px', 'em', 'rem', '%', 'vh', 'vw' ]).map((value) => ({
	label: value,
	value,
}));
const BORDER_UNITS: StyleOption[] = [ 'px', 'em', 'rem' ].map((value) => ({
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

interface BorderRadiusValues {
	topLeft?: string;
	topRight?: string;
	bottomRight?: string;
	bottomLeft?: string;
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
}

function parseLengthValue(rawValue: string | number | undefined, fallback = '1px'): string | null {
	if (typeof rawValue === 'number') {
		return `${rawValue}px`;
	}

	if (typeof rawValue !== 'string') {
		return null;
	}

	const trimmed = rawValue.trim();
	const match = trimmed.match(/^(-?\d*\.?\d+)\s*([a-z%]*)$/i);

	if (!match) {
		return null;
	}

	if (trimmed === '0') {
		return '0px';
	}

	const unit = match[2] || fallback.replace(/^-?\d*\.?\d+/, '') || 'px';

	return `${Number(match[1])}${normalizeHeightUnit(unit)}`;
}

function stringifyBorderRadiusValue(value: string | BorderRadiusValues | null | undefined): string {
	if (!value) {
		return '2px';
	}

	if (typeof value === 'string') {
		return value.trim() || '2px';
	}

	const topLeft = value.topLeft ?? value.top ?? '';
	const topRight = value.topRight ?? value.right ?? '';
	const bottomRight = value.bottomRight ?? value.bottom ?? '';
	const bottomLeft = value.bottomLeft ?? value.left ?? '';
	const values = [ topLeft, topRight, bottomRight, bottomLeft ].filter(
		(part): part is string => typeof part === 'string' && part.length > 0
	);

	if (values.length === 0) {
		return '2px';
	}

	const [ first, second = first, third = first, fourth = second ] = values;

	if (first === second && second === third && third === fourth) {
		return first;
	}

	if (first === third && second === fourth) {
		return `${first} ${second}`;
	}

	if (second === fourth) {
		return `${first} ${second} ${third}`;
	}

	return `${first} ${second} ${third} ${fourth}`;
}

function parseBorderRadiusValue(
	value: string | BorderRadiusValues | null | undefined
):
	| {
			topLeft: string;
			topRight: string;
			bottomRight: string;
			bottomLeft: string;
	  }
	| string {
	if (!value) {
		return '2px';
	}

	if (typeof value !== 'string') {
		const topLeft = value.topLeft ?? value.top ?? '2px';
		const topRight = value.topRight ?? value.right ?? topLeft;
		const bottomRight = value.bottomRight ?? value.bottom ?? topLeft;
		const bottomLeft = value.bottomLeft ?? value.left ?? topRight;

		return {
			topLeft,
			topRight,
			bottomRight,
			bottomLeft,
		};
	}

	const parts = value
		.trim()
		.split(/\s+/)
		.filter(Boolean);

	if (parts.length === 0) {
		return '2px';
	}

	const [ topLeft, second = topLeft, third = topLeft, fourth = second ] = parts;

	if (parts.length === 1) {
		return topLeft;
	}

	if (parts.length === 2) {
		return {
			topLeft,
			topRight: second,
			bottomRight: topLeft,
			bottomLeft: second,
		};
	}

	if (parts.length === 3) {
		return {
			topLeft,
			topRight: second,
			bottomRight: third,
			bottomLeft: second,
		};
	}

	return {
		topLeft,
		topRight: second,
		bottomRight: third,
		bottomLeft: fourth,
	};
}

function ZoomControlColorSettings({
	backgroundColor,
	iconColor,
	borderColor,
	onChange,
}: {
	backgroundColor: string;
	iconColor: string;
	borderColor: string;
	onChange: (
		key:
			| 'zoomControlsBackgroundColor'
			| 'zoomControlsIconColor'
			| 'zoomControlsBorderColor',
		value: string
	) => void;
}) {
	return (
		<div className="minimal-map-editor__compact-color-settings">
			<ColorGradientSettingsDropdown
				__experimentalIsRenderedInSidebar
				colors={[]}
				gradients={[]}
				disableCustomColors={false}
				disableCustomGradients
				enableAlpha={false}
				settings={[
					{
						label: __('Background Color', 'minimal-map'),
						colorValue: backgroundColor,
						onColorChange: (value?: string) => {
							if (typeof value === 'string' && value.length > 0) {
								onChange('zoomControlsBackgroundColor', value);
							}
						},
					},
					{
						label: __('Icon Color', 'minimal-map'),
						colorValue: iconColor,
						onColorChange: (value?: string) => {
							if (typeof value === 'string' && value.length > 0) {
								onChange('zoomControlsIconColor', value);
							}
						},
					},
					{
						label: __('Border Color', 'minimal-map'),
						colorValue: borderColor,
						onColorChange: (value?: string) => {
							if (typeof value === 'string' && value.length > 0) {
								onChange('zoomControlsBorderColor', value);
							}
						},
					},
				]}
			/>
		</div>
	);
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

	const updateBorderWidth = (value?: string | number): void => {
		const parsed = parseLengthValue(value, attributes.zoomControlsBorderWidth || '1px');

		if (parsed) {
			setAttributes({ zoomControlsBorderWidth: parsed });
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
				<PanelBody title={__('Zoom Controls', 'minimal-map')} initialOpen={false}>
					<ToggleGroupControl
						__next40pxDefaultSize
						label={__('Position', 'minimal-map')}
						value={attributes.zoomControlsPosition}
						isBlock
						onChange={(nextValue?: string | number) => {
							if (typeof nextValue === 'string') {
								setAttributes({ zoomControlsPosition: nextValue as ZoomControlsPosition });
							}
						}}
					>
						{ZOOM_CONTROLS_POSITION_OPTIONS.map((option) => (
							<ToggleGroupControlOptionIcon
								key={option.value}
								value={option.value}
								label={option.label}
								icon={option.icon}
							/>
						))}
					</ToggleGroupControl>
					<div className="minimal-map-editor__box-control">
						<BoxControl
							__next40pxDefaultSize
							label={__('Padding', 'minimal-map')}
							values={attributes.zoomControlsPadding}
							units={HEIGHT_UNITS}
							onChange={(value?: BoxValue) => {
								setAttributes({ zoomControlsPadding: value ?? attributes.zoomControlsPadding });
							}}
						/>
					</div>
					<div className="minimal-map-editor__box-control">
						<BoxControl
							__next40pxDefaultSize
							label={__('Outer Margin', 'minimal-map')}
							values={attributes.zoomControlsOuterMargin}
							units={HEIGHT_UNITS}
							onChange={(value?: BoxValue) => {
								setAttributes({ zoomControlsOuterMargin: value ?? attributes.zoomControlsOuterMargin });
							}}
						/>
					</div>
					<ZoomControlColorSettings
						backgroundColor={attributes.zoomControlsBackgroundColor}
						iconColor={attributes.zoomControlsIconColor}
						borderColor={attributes.zoomControlsBorderColor}
						onChange={(key, value) => setAttributes({ [key]: value })}
					/>
					<BorderRadiusControl
						onChange={(value: string | BorderRadiusValues) => {
							setAttributes({
								zoomControlsBorderRadius: stringifyBorderRadiusValue(value),
							});
						}}
						values={parseBorderRadiusValue(attributes.zoomControlsBorderRadius)}
					/>
					<UnitControl
						label={__('Border Width', 'minimal-map')}
						value={attributes.zoomControlsBorderWidth}
						onChange={updateBorderWidth}
						units={BORDER_UNITS}
						size="__unstable-large"
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
