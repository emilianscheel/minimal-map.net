export type HeightUnit = 'px' | 'em' | 'rem' | '%' | 'vh' | 'vw';
export type ZoomControlsPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type ZoomControlIcon = 'plus' | 'plus-circle' | 'plus-circle-filled' | 'line-solid' | 'separator' | 'close-small';

export interface BoxValue {
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
}

export interface BorderRadiusValue extends BoxValue {
	topLeft?: string;
	topRight?: string;
	bottomRight?: string;
	bottomLeft?: string;
}

export interface StylePresetDefinition {
	label: string;
	style_url: string;
}

export type StylePresets = Record<string, StylePresetDefinition>;

export interface StyleOption {
	label: string;
	value: string;
}

export interface MapDefaults {
	centerLat: number;
	centerLng: number;
	zoom: number;
	collectionId: number;
	height: number;
	heightUnit: HeightUnit;
	heightMobile?: number;
	heightMobileUnit?: HeightUnit;
	stylePreset: string;
	styleThemeSlug: string;
	fontFamily: string;
	borderRadius: string;
	showZoomControls: boolean;
	allowSearch: boolean;
	enableLiveLocationSearch: boolean;
	enableLiveLocationMap: boolean;
	enableCategoryFilter: boolean;
	enableOpenedFilter: boolean;
	enableMarkerClustering: boolean;
	googleMapsNavigation: boolean;
	inMapLocationCard: boolean;
	scrollZoom: boolean;
	mobileTwoFingerZoom: boolean;
	cooperativeGestures: boolean;
	zoomControlsPosition: ZoomControlsPosition;
	zoomControlsPadding: BoxValue;
	zoomControlsOuterMargin: BoxValue;
	zoomControlsBackgroundColor: string;
	zoomControlsIconColor: string;
	zoomControlsBorderRadius: string;
	zoomControlsBorderColor: string;
	zoomControlsBorderWidth: string;
	zoomControlsPlusIcon: ZoomControlIcon;
	zoomControlsMinusIcon: ZoomControlIcon;
	searchPanelBackgroundPrimary: string;
	searchPanelBackgroundSecondary: string;
	searchPanelBackgroundHover: string;
	searchPanelForegroundPrimary: string;
	searchPanelForegroundSecondary: string;
	searchPanelOuterMargin: BoxValue;
	searchPanelBorderRadiusInput: string;
	searchPanelBorderRadiusCard: string;
	searchPanelCardGap: string;
	searchPanelWidth: string;
	googleMapsButtonPadding: BoxValue;
	googleMapsButtonBackgroundColor: string;
	googleMapsButtonForegroundColor: string;
	googleMapsButtonBorderRadius: string;
	googleMapsButtonShowIcon: boolean;
	openingHoursOpenColor: string;
	openingHoursClosedColor: string;
	openingHoursSoonColor: string;
	clusterBackgroundColor: string;
	clusterForegroundColor: string;
	creditsPadding: BoxValue;
	creditsOuterMargin: BoxValue;
	creditsBackgroundColor: string;
	creditsForegroundColor: string;
	creditsBorderRadius: string;
	_isPreview: boolean;
}

export interface MapMessages {
	fallback?: string;
}

export interface MapLocationTag {
	id: number;
	name: string;
	background_color: string;
	foreground_color: string;
}

export interface MapLocationLogo {
	id: number;
	title: string;
	content: string;
	logoId?: string;
}

export interface MapLocationPoint {
	id?: number;
	title?: string;
	lat: number;
	lng: number;
	markerContent?: string;
	markerId?: string;
	marker_color?: string;
	tags?: MapLocationTag[];
	logo?: MapLocationLogo | null;
	telephone?: string;
	email?: string;
	website?: string;
	street?: string;
	house_number?: string;
	postal_code?: string;
	city?: string;
	state?: string;
	country?: string;
	opening_hours?: LocationOpeningHours;
	opening_hours_notes?: string;
	social_media?: SocialMediaLink[];
}

export interface MapLocationSelection {
	location: MapLocationPoint;
	distanceLabel?: string;
}

export interface SelectedLocationPreview {
	locationId: number;
	distanceLabel?: string;
}

export interface MapCollectionOption {
	id: number;
	title: string;
	locations: MapLocationPoint[];
}

export interface MapRuntimeConfig {
	defaults?: Partial<MapDefaults>;
	heightUnits?: string[];
	stylePresets?: StylePresets;
	styleThemes?: StyleThemeRecord[];
	locations?: MapLocationPoint[];
	collections?: MapCollectionOption[];
	frontendGeocodePath?: string;
	locationsPath?: string;
	locationsUrl?: string;
	autoFetchLocations?: boolean;
	analyticsEnabled?: boolean;
	analyticsComplianzEnabled?: boolean;
	analyticsTrackPath?: string;
	messages?: MapMessages;
	embedBaseUrl?: string;
	previewImageUrl?: string;
	siteTimezone?: string;
	siteLocale?: string;
	onMapClick?: (coordinates: MapCoordinates) => void;
}

export interface RawMapConfig {
	centerLat?: number | string;
	centerLng?: number | string;
	zoom?: number | string;
	collectionId?: number | string;
	height?: number | string;
	heightUnit?: string;
	heightMobile?: number | string | null;
	heightMobileUnit?: string | null;
	stylePreset?: string;
	styleUrl?: string;
	styleTheme?: Partial<StyleThemeColors>;
	styleThemeSlug?: string;
	fontFamily?: string;
	borderRadius?: string | BorderRadiusValue | null;
	showZoomControls?: boolean;
	allowSearch?: boolean;
	enableLiveLocationSearch?: boolean;
	enableLiveLocationMap?: boolean;
	enableCategoryFilter?: boolean;
	enableOpenedFilter?: boolean;
	enableMarkerClustering?: boolean;
	googleMapsNavigation?: boolean;
	inMapLocationCard?: boolean;
	scrollZoom?: boolean;
	mobileTwoFingerZoom?: boolean;
	cooperativeGestures?: boolean;
	zoomControlsPosition?: string;
	zoomControlsPadding?: BoxValue | null;
	zoomControlsOuterMargin?: BoxValue | null;
	zoomControlsBackgroundColor?: string;
	zoomControlsIconColor?: string;
	zoomControlsBorderRadius?: string | BoxValue | null;
	zoomControlsBorderColor?: string;
	zoomControlsBorderWidth?: string;
	zoomControlsPlusIcon?: string;
	zoomControlsMinusIcon?: string;
	searchPanelBackgroundPrimary?: string;
	searchPanelBackgroundSecondary?: string;
	searchPanelBackgroundHover?: string;
	searchPanelForegroundPrimary?: string;
	searchPanelForegroundSecondary?: string;
	searchPanelOuterMargin?: BoxValue | null;
	searchPanelBorderRadiusInput?: string | BoxValue | null;
	searchPanelBorderRadiusCard?: string | BoxValue | null;
	searchPanelCardGap?: string;
	searchPanelWidth?: string;
	googleMapsButtonPadding?: BoxValue | null;
	googleMapsButtonBackgroundColor?: string;
	googleMapsButtonForegroundColor?: string;
	googleMapsButtonBorderRadius?: string | BoxValue | null;
	googleMapsButtonShowIcon?: boolean;
	openingHoursOpenColor?: string;
	openingHoursClosedColor?: string;
	openingHoursSoonColor?: string;
	clusterBackgroundColor?: string;
	clusterForegroundColor?: string;
	creditsPadding?: BoxValue | null;
	creditsOuterMargin?: BoxValue | null;
	creditsBackgroundColor?: string;
	creditsForegroundColor?: string;
	creditsBorderRadius?: string | BoxValue | null;
	_isPreview?: boolean;
	fallbackMessage?: string;
	markerLat?: number | string | null;
	markerLng?: number | string | null;
	markerContent?: string | null;
	markerClassName?: string;
	markerOffsetY?: number | string;
	markerScale?: number | string;
	centerOffsetY?: number | string;
	locations?: MapLocationPoint[] | null;
	interactive?: boolean;
	showAttribution?: boolean;
	siteTimezone?: string;
	siteLocale?: string;
}

export interface NormalizedMapConfig extends MapDefaults {
	heightCssValue: string;
	heightMobileCssValue: string;
	styleUrl: string;
	styleTheme: Partial<StyleThemeColors>;
	fallbackMessage: string;
	zoomControlsPadding: Required<BoxValue>;
	zoomControlsOuterMargin: Required<BoxValue>;
	searchPanelOuterMargin: Required<BoxValue>;
	creditsPadding: Required<BoxValue>;
	creditsOuterMargin: Required<BoxValue>;
	markerLat: number | null;
	markerLng: number | null;
	markerContent: string | null;
	markerClassName: string;
	markerOffsetY: number;
	markerScale: number;
	centerOffsetY: number;
	locations: MapLocationPoint[];
	interactive: boolean;
	scrollZoom: boolean;
	mobileTwoFingerZoom: boolean;
	cooperativeGestures: boolean;
	showAttribution: boolean;
	allowSearch: boolean;
	enableCategoryFilter: boolean;
	enableOpenedFilter: boolean;
	enableMarkerClustering: boolean;
	googleMapsNavigation: boolean;
	inMapLocationCard: boolean;
	siteTimezone: string;
	siteLocale: string;
}

export interface MinimalMapInstance {
	destroy: () => void;
	update: (rawConfig?: RawMapConfig) => void;
}

export type AdminSectionView =
	| 'dashboard'
	| 'analytics'
	| 'locations'
	| 'collections'
	| 'logos'
	| 'tags'
	| 'markers'
	| 'styles';

export interface AdminSection {
	view: AdminSectionView;
	title: string;
	description: string;
	url: string;
}

export interface AdminCommandSection {
	view: Exclude<AdminSectionView, 'dashboard'>;
	title: string;
	url: string;
	keywords: string[];
}

export type AdminCommandActionKey =
	| 'export-locations-csv'
	| 'export-locations-excel'
	| 'export-analytics-search-csv'
	| 'export-analytics-selection-csv'
	| 'export-analytics-action-csv';

export interface AdminCommandAction {
	key: AdminCommandActionKey;
	label: string;
	keywords: string[];
}

export interface LocationsExportActionConfig {
	nonce: string;
	locationsRestPath: string;
	logosRestPath: string;
	markersRestPath: string;
	tagsRestPath: string;
}

export interface AnalyticsExportActionConfig {
	nonce: string;
	queriesPath: string;
}

export interface AdminCommandsConfig {
	sections: AdminCommandSection[];
	actions: AdminCommandAction[];
	analyticsExportConfig: AnalyticsExportActionConfig | null;
	locationsExportConfig: LocationsExportActionConfig | null;
}

export interface AdminStats {
	locations: number;
	collections: number;
	logos: number;
	markers: number;
	tags: number;
}

export interface LocationsAdminConfig {
	nonce: string;
	restBase: string;
	restPath: string;
	geocodePath: string;
	queryPath: string;
	lookupPath: string;
}

export interface CollectionsAdminConfig {
	nonce: string;
	restBase: string;
	restPath: string;
	queryPath: string;
}

export interface MarkersAdminConfig {
	nonce: string;
	restBase: string;
	restPath: string;
	queryPath: string;
}

export interface LogosAdminConfig {
	nonce: string;
	restBase: string;
	restPath: string;
	queryPath: string;
}

export interface TagsAdminConfig {
	nonce: string;
	restBase: string;
	restPath: string;
	queryPath: string;
}

export interface StylesAdminConfig {
	nonce: string;
	restBase: string;
	restPath: string;
}

export interface AnalyticsAdminConfig {
	nonce: string;
	enabled: boolean;
	complianzEnabled: boolean;
	settingsPath: string;
	summaryPath: string;
	queriesPath: string;
}

export interface LocationRestResponse {
	id: number;
	title?: {
		raw?: string;
		rendered?: string;
	};
	meta?: Partial<LocationMeta>;
	minimal_map_tag?: number[];
}

export interface LogoRestResponse {
	id: number;
	title?: {
		raw?: string;
		rendered?: string;
	};
	content?: {
		raw?: string;
		rendered?: string;
	};
}

export interface CollectionMeta {
	location_ids: number[];
}

export interface CollectionRestResponse {
	id: number;
	title?: {
		raw?: string;
		rendered?: string;
	};
	meta?: Partial<CollectionMeta>;
}

export interface TagRestResponse {
	id: number;
	name?: string;
	count?: number;
	meta?: Partial<TagMeta>;
}

export interface AdminAppConfig {
	currentView: AdminSectionView;
	sections: AdminSection[];
	isPremium: boolean;
	stats: AdminStats;
	mapConfig: MapRuntimeConfig;
	locationsConfig: LocationsAdminConfig;
	collectionsConfig: CollectionsAdminConfig;
	markersConfig: MarkersAdminConfig;
	logosConfig: LogosAdminConfig;
	tagsConfig: TagsAdminConfig;
	stylesConfig: StylesAdminConfig;
	analyticsConfig: AnalyticsAdminConfig;
	licenseConfig: LicenseAdminConfig;
}

export interface PaginatedResult<T> {
	items: T[];
	totalItems: number;
	totalPages: number;
	page: number;
	perPage: number;
}

export interface AdminCollectionSummary {
	id: number;
	title: string;
}

export interface AdminLocationListItem extends LocationRecord {
	collections: CollectionRecord[];
	logo: LogoRecord | null;
	marker: MarkerRecord | null;
	tags_data: TagRecord[];
}

export interface AdminLocationLookupItem {
	id: number;
	title: string;
	street: string;
	house_number: string;
	postal_code: string;
	city: string;
	state: string;
	country: string;
}

export interface AdminCollectionListItem extends CollectionRecord {
	location_count: number;
	preview_locations: MapLocationPoint[];
}

export type AdminMarkerListItem = MarkerRecord;

export type AdminLogoListItem = LogoRecord;

export interface LicenseAdminConfig {
	nonce: string;
	path: string;
}

export type DashboardCardView = Extract<
	AdminSectionView,
	'analytics' | 'locations' | 'collections' | 'logos' | 'markers' | 'tags' | 'styles'
>;

export interface MapBlockAttributes {
	centerLat: number;
	centerLng: number;
	zoom: number;
	collectionId: number;
	height: number;
	heightUnit: HeightUnit;
	heightMobile?: number;
	heightMobileUnit?: HeightUnit;
	stylePreset: string;
	styleThemeSlug: string;
	fontFamily: string;
	showZoomControls: boolean;
	allowSearch: boolean;
	enableLiveLocationSearch: boolean;
	enableLiveLocationMap: boolean;
	enableCategoryFilter: boolean;
	enableOpenedFilter: boolean;
	enableMarkerClustering: boolean;
	googleMapsNavigation: boolean;
	inMapLocationCard: boolean;
	scrollZoom: boolean;
	mobileTwoFingerZoom: boolean;
	cooperativeGestures: boolean;
	zoomControlsPosition: ZoomControlsPosition;
	zoomControlsPadding: BoxValue;
	zoomControlsOuterMargin: BoxValue;
	zoomControlsBackgroundColor: string;
	zoomControlsIconColor: string;
	zoomControlsBorderRadius: string;
	zoomControlsBorderColor: string;
	zoomControlsBorderWidth: string;
	zoomControlsPlusIcon: ZoomControlIcon;
	zoomControlsMinusIcon: ZoomControlIcon;
	searchPanelBackgroundPrimary: string;
	searchPanelBackgroundSecondary: string;
	searchPanelBackgroundHover: string;
	searchPanelForegroundPrimary: string;
	searchPanelForegroundSecondary: string;
	searchPanelOuterMargin: BoxValue;
	searchPanelBorderRadiusInput: string;
	searchPanelBorderRadiusCard: string;
	searchPanelCardGap: string;
	searchPanelWidth: string;
	googleMapsButtonPadding: BoxValue;
	googleMapsButtonBackgroundColor: string;
	googleMapsButtonForegroundColor: string;
	googleMapsButtonBorderRadius: string;
	googleMapsButtonShowIcon: boolean;
	openingHoursOpenColor: string;
	openingHoursClosedColor: string;
	openingHoursSoonColor: string;
	clusterBackgroundColor: string;
	clusterForegroundColor: string;
	creditsPadding: BoxValue;
	creditsOuterMargin: BoxValue;
	creditsBackgroundColor: string;
	creditsForegroundColor: string;
	creditsBorderRadius: string;
	style?: {
		border?: {
			radius?: string | BorderRadiusValue | null;
		};
	};
	_isPreview: boolean;
}

export interface WordPressZoomControls {
	destroy: () => void;
	setLiveLocationBusy: (isBusy: boolean) => void;
}

export interface WordPressSearchControl {
	destroy: () => void;
	requestLiveLocation: () => void;
	update: (
		config: NormalizedMapConfig,
		selectedId?: number,
		activeCategoryTagIds?: number[],
		isOpenedFilterActive?: boolean,
		currentTimeMs?: number
	) => void;
}

export interface WordPressAttributionControl {
	destroy: () => void;
}

export type OpeningHoursDayKey =
	| 'monday'
	| 'tuesday'
	| 'wednesday'
	| 'thursday'
	| 'friday'
	| 'saturday'
	| 'sunday';

export interface LocationOpeningHoursDay {
	open: string;
	close: string;
	lunch_start: string;
	lunch_duration_minutes: number;
}

export type LocationOpeningHours = Record<OpeningHoursDayKey, LocationOpeningHoursDay>;

export type SocialMediaPlatform =
	| 'instagram'
	| 'x'
	| 'facebook'
	| 'threads'
	| 'youtube'
	| 'telegram';

export interface SocialMediaLink {
	platform: SocialMediaPlatform;
	url: string;
}

export interface LocationMeta {
	telephone: string;
	email: string;
	website: string;
	street: string;
	house_number: string;
	postal_code: string;
	city: string;
	state: string;
	country: string;
	latitude: string;
	longitude: string;
	logo_id: number;
	marker_id: number;
	marker_color: string;
	is_hidden: boolean;
	opening_hours: LocationOpeningHours;
	opening_hours_notes: string;
	social_media: SocialMediaLink[];
}

export interface LocationRecord extends LocationMeta {
	id: number;
	title: string;
	tag_ids: number[];
	markerContent?: string;
}

export interface CollectionRecord extends CollectionMeta {
	id: number;
	title: string;
}

export interface TagMeta {
	background_color: string;
	foreground_color: string;
}

export interface TagRecord extends TagMeta {
	id: number;
	name: string;
	count: number;
}

export interface MarkerRecord {
	id: number;
	title: string;
	content: string;
}

export interface LogoRecord {
	id: number;
	title: string;
	content: string;
}

export interface CollectionFormState {
	title: string;
}

export type CollectionFormMode = 'create' | 'edit';

export interface TagFormState extends TagMeta {
	name: string;
}

export type TagFormMode = 'create' | 'edit';

export interface LocationFormState extends LocationMeta {
	title: string;
	tag_ids: number[];
}

export type LocationFormMode = 'create' | 'edit';

export type LocationDialogStep =
	| 'details'
	| 'social_media'
	| 'opening_hours'
	| 'address'
	| 'map';

export interface FieldErrors {
	title?: string;
	email?: string;
	website?: string;
	street?: string;
	house_number?: string;
	postal_code?: string;
	city?: string;
	country?: string;
	opening_hours?: Partial<Record<OpeningHoursDayKey, string>>;
}

export interface MapCoordinates {
	lat: number;
	lng: number;
}

export interface GeocodeResponseSuccess {
	success: true;
	label: string;
	lat: number;
	lng: number;
}

export interface GeocodeResponseFailure {
	success: false;
	message: string;
}

export type GeocodeResponse = GeocodeResponseSuccess | GeocodeResponseFailure;

export type AnalyticsQueryType =
	| 'text'
	| 'address'
	| 'coordinates'
	| 'live_location';

export type AnalyticsEventCategory =
	| 'search'
	| 'selection'
	| 'action';

export type AnalyticsInteractionSource =
	| 'search_panel'
	| 'map_marker'
	| 'in_map_card';

export type AnalyticsActionType =
	| 'opening_hours'
	| 'telephone'
	| 'email'
	| 'website'
	| 'social_media'
	| 'google_maps';

export type AnalyticsRangeKey =
	| 'today'
	| 'yesterday'
	| '7d'
	| '30d'
	| '90d'
	| 'all';

export interface AnalyticsTrendPoint {
	date: string;
	value: number | null;
}

export interface AnalyticsBreakdownDatum {
	key: string;
	label: string;
	value: number;
}

export interface SearchAnalyticsSummarySeries {
	totalSearches: AnalyticsTrendPoint[];
	searchesToday: AnalyticsTrendPoint[];
	zeroResultSearches: AnalyticsTrendPoint[];
	averageNearestDistanceMeters: AnalyticsTrendPoint[];
	successRate: AnalyticsTrendPoint[];
}

export interface SearchAnalyticsSummaryBreakdowns {
	queryTypeMix: AnalyticsBreakdownDatum[];
	resultDistribution: AnalyticsBreakdownDatum[];
	topQueries: AnalyticsBreakdownDatum[];
	topZeroResultQueries: AnalyticsBreakdownDatum[];
}

export interface SearchAnalyticsSummary {
	category: 'search';
	totalSearches: number;
	searchesToday: number;
	zeroResultSearches: number;
	averageNearestDistanceMeters: number | null;
	successRate: number | null;
	series: SearchAnalyticsSummarySeries;
	breakdowns: SearchAnalyticsSummaryBreakdowns;
}

export interface SelectionAnalyticsSummary {
	category: 'selection';
	totalSelections: number;
	conversionRate: number;
	series: {
		totalSelections: AnalyticsTrendPoint[];
		conversionRate: AnalyticsTrendPoint[];
	};
	breakdowns: {
		sourceMix: AnalyticsBreakdownDatum[];
		topLocations: AnalyticsBreakdownDatum[];
	};
}

export interface ActionAnalyticsSummary {
	category: 'action';
	totalActions: number;
	series: {
		totalActions: AnalyticsTrendPoint[];
	};
	breakdowns: {
		actionTypeMix: AnalyticsBreakdownDatum[];
		sourceMix: AnalyticsBreakdownDatum[];
		topLocations: AnalyticsBreakdownDatum[];
	};
}

export type AnalyticsSummary =
	| SearchAnalyticsSummary
	| SelectionAnalyticsSummary
	| ActionAnalyticsSummary;

export interface AnalyticsSettings {
	enabled: boolean;
	complianzEnabled: boolean;
}

export interface AnalyticsQueryRecord {
	id: number;
	event_category: AnalyticsEventCategory;
	query_text: string;
	query_type: AnalyticsQueryType;
	result_count: number;
	nearest_distance_meters: number | null;
	location_id: number | null;
	location_title: string;
	interaction_source: AnalyticsInteractionSource | '';
	action_type: AnalyticsActionType | '';
	action_target: string;
	occurred_at_gmt: string;
}

export interface AnalyticsQueriesResponse {
	items: AnalyticsQueryRecord[];
	totalItems: number;
	totalPages: number;
}

export interface AnalyticsSearchTrackPayload {
	eventCategory: 'search';
	queryText: string;
	queryType: AnalyticsQueryType;
	resultCount: number;
	nearestDistanceMeters?: number | null;
}

export interface AnalyticsSelectionTrackPayload {
	eventCategory: 'selection';
	locationId: number;
	locationTitle: string;
	interactionSource: Extract<AnalyticsInteractionSource, 'search_panel' | 'map_marker'>;
	queryText?: string;
}

export interface AnalyticsActionTrackPayload {
	eventCategory: 'action';
	locationId: number;
	locationTitle: string;
	interactionSource: Extract<AnalyticsInteractionSource, 'search_panel' | 'in_map_card'>;
	actionType: AnalyticsActionType;
	actionTarget?: string;
}

export type AnalyticsTrackPayload =
	| AnalyticsSearchTrackPayload
	| AnalyticsSelectionTrackPayload
	| AnalyticsActionTrackPayload;

export type StyleThemeSlot =
	| 'background'
	| 'park'
	| 'residential'
	| 'forest'
	| 'ice'
	| 'water'
	| 'waterway'
	| 'building'
	| 'buildingOutline'
	| 'path'
	| 'roadMinor'
	| 'roadMajorCasing'
	| 'roadMajorFill'
	| 'motorwayCasing'
	| 'motorwayFill'
	| 'rail'
	| 'railDash'
	| 'boundary'
	| 'aerowayLine'
	| 'aerowayArea'
	| 'waterLabel'
	| 'waterLabelHalo'
	| 'roadLabel'
	| 'roadLabelHalo'
	| 'placeLabel'
	| 'placeLabelHalo';

export type StyleThemeColors = Record<StyleThemeSlot, string>;

export interface StyleThemeRecord {
	slug: string;
	label: string;
	basePreset: string;
	colors: StyleThemeColors;
}
