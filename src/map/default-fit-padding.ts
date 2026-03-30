import type { NormalizedMapConfig } from '../types';
import { isMobileViewport, isTabletSearchSplitViewport } from './responsive';
import { parsePixelValue } from './search-panel-layout';

const DEFAULT_FIT_BOUNDS_PADDING = 48;
const MOBILE_TOP_FIT_PADDING_MULTIPLIER = 5;
const MOBILE_BOTTOM_FIT_PADDING_MULTIPLIER = 4;
const SEARCH_QUICK_FILTER_BAR_HEIGHT = 32;

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
		| 'enableCategoryFilter'
		| 'enableOpenedFilter'
	>,
	viewportWidth?: number | null,
	searchPanelReservedWidth = 0
): DefaultFitBoundsPadding {
	const outerMarginTop = parsePixelValue(config.searchPanelOuterMargin.top);
	const quickFiltersVisible =
		config.allowSearch &&
		(config.enableCategoryFilter || config.enableOpenedFilter);
	const quickFilterTopExtra = quickFiltersVisible
		? SEARCH_QUICK_FILTER_BAR_HEIGHT + outerMarginTop
		: 0;

	if (!isMobileViewport(viewportWidth)) {
		if (
			isTabletSearchSplitViewport(viewportWidth) &&
			config.allowSearch &&
			searchPanelReservedWidth > 0
		) {
			return {
				top: DEFAULT_FIT_BOUNDS_PADDING + quickFilterTopExtra,
				right: DEFAULT_FIT_BOUNDS_PADDING,
				bottom: DEFAULT_FIT_BOUNDS_PADDING,
				left: searchPanelReservedWidth + DEFAULT_FIT_BOUNDS_PADDING,
			};
		}

		return {
			top: DEFAULT_FIT_BOUNDS_PADDING + quickFilterTopExtra,
			right: DEFAULT_FIT_BOUNDS_PADDING,
			bottom: DEFAULT_FIT_BOUNDS_PADDING,
			left: DEFAULT_FIT_BOUNDS_PADDING,
		};
	}

	return {
		top:
			outerMarginTop * MOBILE_TOP_FIT_PADDING_MULTIPLIER + quickFilterTopExtra,
		right: DEFAULT_FIT_BOUNDS_PADDING,
		bottom: config.showAttribution
			? parsePixelValue(config.creditsOuterMargin.bottom) *
				MOBILE_BOTTOM_FIT_PADDING_MULTIPLIER
			: DEFAULT_FIT_BOUNDS_PADDING,
		left: DEFAULT_FIT_BOUNDS_PADDING,
	};
}
