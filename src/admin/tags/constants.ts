import type { TagFormState } from '../../types';
import type { ViewGrid } from '@wordpress/dataviews';

export const DEFAULT_FORM_STATE: TagFormState = {
	name: '',
	background_color: '#000000',
	foreground_color: '#ffffff',
};

export const DEFAULT_GRID_VIEW: ViewGrid = {
	type: 'grid',
	page: 1,
	perPage: 20,
	fields: ['name', 'map_preview'],
};
