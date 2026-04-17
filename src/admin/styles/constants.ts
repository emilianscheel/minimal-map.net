import { __ } from '@wordpress/i18n';
import type { StyleThemeSlot } from '../../types';

export const SLOT_LABELS: Record<StyleThemeSlot, string> = {
	background: __('Background', 'minimal-map-net'),
	park: __('Parks', 'minimal-map-net'),
	residential: __('Residential Areas', 'minimal-map-net'),
	forest: __('Forests', 'minimal-map-net'),
	ice: __('Ice & Glaciers', 'minimal-map-net'),
	water: __('Water Surfaces', 'minimal-map-net'),
	waterway: __('Rivers & Canals', 'minimal-map-net'),
	building: __('Buildings', 'minimal-map-net'),
	buildingOutline: __('Building Outlines', 'minimal-map-net'),
	path: __('Pedestrian Paths', 'minimal-map-net'),
	roadMinor: __('Minor Roads', 'minimal-map-net'),
	roadMajorCasing: __('Major Road Casing', 'minimal-map-net'),
	roadMajorFill: __('Major Road Fill', 'minimal-map-net'),
	motorwayCasing: __('Motorway Casing', 'minimal-map-net'),
	motorwayFill: __('Motorway Fill', 'minimal-map-net'),
	rail: __('Railway Lines', 'minimal-map-net'),
	railDash: __('Railway Patterns', 'minimal-map-net'),
	boundary: __('Administrative Boundaries', 'minimal-map-net'),
	aerowayLine: __('Runway Lines', 'minimal-map-net'),
	aerowayArea: __('Airport Grounds', 'minimal-map-net'),
	waterLabel: __('Water Labels', 'minimal-map-net'),
	waterLabelHalo: __('Water Label Halo', 'minimal-map-net'),
	roadLabel: __('Road Labels', 'minimal-map-net'),
	roadLabelHalo: __('Road Label Halo', 'minimal-map-net'),
	airportIcon: __('Airport Icons', 'minimal-map-net'),
	placeLabel: __('Place Labels', 'minimal-map-net'),
	placeLabelHalo: __('Place Label Halo', 'minimal-map-net'),
	placeIcon: __('Place Icons', 'minimal-map-net'),
};

export const COLOR_GROUPS: { label: string; slots: StyleThemeSlot[] }[] = [
	{
		label: __('Base Surfaces', 'minimal-map-net'),
		slots: [ 'background', 'park', 'residential', 'forest', 'ice', 'water', 'waterway' ],
	},
	{
		label: __('Structures', 'minimal-map-net'),
		slots: [ 'building', 'buildingOutline' ],
	},
	{
		label: __('Roads & Transport', 'minimal-map-net'),
		slots: [ 'path', 'roadMinor', 'roadMajorCasing', 'roadMajorFill', 'motorwayCasing', 'motorwayFill', 'rail', 'railDash' ],
	},
	{
		label: __('Other Features', 'minimal-map-net'),
		slots: [ 'boundary', 'aerowayLine', 'aerowayArea' ],
	},
	{
		label: __('Typography & Icons', 'minimal-map-net'),
		slots: [ 'waterLabel', 'waterLabelHalo', 'roadLabel', 'roadLabelHalo', 'airportIcon', 'placeLabel', 'placeLabelHalo', 'placeIcon' ],
	},
];
