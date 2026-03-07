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
import { normalizeMapConfig, normalizeHeightUnit } from '../map/defaults';
import { getStyleOptions } from '../map/style-presets';

const runtimeConfig = window.MinimalMapBlockConfig || {};
const HEIGHT_UNITS = (runtimeConfig.heightUnits || [ 'px', 'em', 'rem', '%', 'vh', 'vw' ]).map((value) => ({
	label: value,
	value,
}));

function parseHeightValue(rawValue, fallbackUnit) {
	if (typeof rawValue === 'number') {
		return {
			height: rawValue,
			heightUnit: normalizeHeightUnit(fallbackUnit),
		};
	}

	const match = `${rawValue}`.trim().match(/^(-?\d*\.?\d+)\s*([a-z%]*)$/i);

	if (!match) {
		return null;
	}

	return {
		height: Number(match[1]),
		heightUnit: normalizeHeightUnit(match[2] || fallbackUnit),
	};
}

export default function Edit({ attributes, setAttributes }) {
	const mapRef = useRef(null);
	const mapInstanceRef = useRef(null);
	const styleOptions = useMemo(() => getStyleOptions(runtimeConfig.stylePresets), []);
	const config = useMemo(() => normalizeMapConfig(attributes, runtimeConfig), [attributes]);
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
		if (mapInstanceRef.current) {
			mapInstanceRef.current.update(config);
		}
	}, [config]);

	const updateNumberAttribute = (key) => (value) => {
		const numericValue = Number(value);

		if (Number.isNaN(numericValue)) {
			return;
		}

		setAttributes({
			[key]: numericValue,
		});
	};

	const updateHeight = (value) => {
		const parsed = parseHeightValue(value, attributes.heightUnit || 'px');

		if (!parsed || Number.isNaN(parsed.height) || parsed.height <= 0) {
			return;
		}

		setAttributes({
			height: parsed.height,
			heightUnit: parsed.heightUnit,
		});
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
						onChange={(value) => {
							if (typeof value === 'number') {
								setAttributes({ zoom: value });
							}
						}}
						min={0}
						max={22}
						step={0.5}
					/>
					<ToggleControl
						label={__('Show Zoom Controls', 'minimal-map')}
						checked={attributes.showZoomControls}
						onChange={(value) => setAttributes({ showZoomControls: value })}
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
						onChange={(value) => setAttributes({ stylePreset: value })}
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
