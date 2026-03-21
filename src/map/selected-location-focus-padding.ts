import type { NormalizedMapConfig } from '../types';
import { isMobileViewport } from './responsive';

const DEFAULT_MOBILE_SELECTED_LOCATION_TOP_PADDING = 80;
const DESKTOP_IN_MAP_LOCATION_CARD_TOP_PADDING = 160;
const MOBILE_IN_MAP_LOCATION_CARD_TOP_PADDING = 240;

export function getSelectedLocationTopPadding(
	config: Pick<NormalizedMapConfig, 'inMapLocationCard'>,
	viewportWidth?: number | null
): number {
	const isMobile = isMobileViewport(viewportWidth);

	if (config.inMapLocationCard) {
		return isMobile
			? Math.max(
					DEFAULT_MOBILE_SELECTED_LOCATION_TOP_PADDING,
					MOBILE_IN_MAP_LOCATION_CARD_TOP_PADDING
				)
			: DESKTOP_IN_MAP_LOCATION_CARD_TOP_PADDING;
	}

	return isMobile ? DEFAULT_MOBILE_SELECTED_LOCATION_TOP_PADDING : 0;
}
