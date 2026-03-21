import type { NormalizedMapConfig } from '../types';
import { isMobileViewport, isTabletSearchSplitViewport } from './responsive';
import { parsePixelValue } from './search-panel-layout';

const DEFAULT_FIT_BOUNDS_PADDING = 48;
const MOBILE_TOP_FIT_PADDING_MULTIPLIER = 5;
const MOBILE_BOTTOM_FIT_PADDING_MULTIPLIER = 4;

export interface DefaultFitBoundsPadding {
	top: number;
	right: number;
	bottom: number;
	left: number;
}

export function getDefaultFitBoundsPadding(
	config: Pick<
		NormalizedMapConfig,
		| 'allowSearch'
		| 'searchPanelOuterMargin'
		| 'creditsOuterMargin'
		| 'showAttribution'
	>,
	viewportWidth?: number | null,
	searchPanelReservedWidth = 0
): DefaultFitBoundsPadding {
	if (!isMobileViewport(viewportWidth)) {
		if (
			isTabletSearchSplitViewport(viewportWidth) &&
			config.allowSearch &&
			searchPanelReservedWidth > 0
		) {
			return {
				top: DEFAULT_FIT_BOUNDS_PADDING,
				right: DEFAULT_FIT_BOUNDS_PADDING,
				bottom: DEFAULT_FIT_BOUNDS_PADDING,
				left: searchPanelReservedWidth + DEFAULT_FIT_BOUNDS_PADDING,
			};
		}

		return {
			top: DEFAULT_FIT_BOUNDS_PADDING,
			right: DEFAULT_FIT_BOUNDS_PADDING,
			bottom: DEFAULT_FIT_BOUNDS_PADDING,
			left: DEFAULT_FIT_BOUNDS_PADDING,
		};
	}

	return {
		top:
			parsePixelValue(config.searchPanelOuterMargin.top) *
			MOBILE_TOP_FIT_PADDING_MULTIPLIER,
		right: DEFAULT_FIT_BOUNDS_PADDING,
		bottom: config.showAttribution
			? parsePixelValue(config.creditsOuterMargin.bottom) *
				MOBILE_BOTTOM_FIT_PADDING_MULTIPLIER
			: DEFAULT_FIT_BOUNDS_PADDING,
		left: DEFAULT_FIT_BOUNDS_PADDING,
	};
}
