<?php
/**
 * Main plugin bootstrap class.
 *
 * @package Minimal_Map
 */

namespace MinimalMap;

use MinimalMap\Admin\Admin_Menu;
use MinimalMap\Analytics\Analytics;
use MinimalMap\Blocks\Map_Block;
use MinimalMap\Collections\Collection_Post_Type;
use MinimalMap\Logos\Logo_Post_Type;
use MinimalMap\Locations\Location_Post_Type;
use MinimalMap\Markers\Marker_Post_Type;
use MinimalMap\Rest\Analytics_Queries_Route;
use MinimalMap\Rest\Analytics_Settings_Route;
use MinimalMap\Rest\Analytics_Summary_Route;
use MinimalMap\Rest\Analytics_Track_Route;
use MinimalMap\Tags\Tag_Taxonomy;
use MinimalMap\Rest\Frontend_Geocode_Route;
use MinimalMap\Rest\Geocode_Route;
use MinimalMap\Rest\License_Route;
use MinimalMap\Rest\Locations_Route;
use MinimalMap\Rest\Styles_Route;

/**
 * Boots the plugin services.
 */
final class Plugin {
	/**
	 * Singleton instance.
	 *
	 * @var Plugin|null
	 */
	private static $instance = null;

	/**
	 * Assets service.
	 *
	 * @var Assets
	 */
	private $assets;

	/**
	 * Analytics service.
	 *
	 * @var Analytics
	 */
	private $analytics;

	/**
	 * Block service.
	 *
	 * @var Map_Block
	 */
	private $map_block;

	/**
	 * Public iframe renderer.
	 *
	 * @var Iframe_Endpoint
	 */
	private $iframe_endpoint;

	/**
	 * Admin menu service.
	 *
	 * @var Admin_Menu
	 */
	private $admin_menu;

	/**
	 * Collections content model service.
	 *
	 * @var Collection_Post_Type
	 */
	private $collection_post_type;

	/**
	 * Logos content model service.
	 *
	 * @var Logo_Post_Type
	 */
	private $logo_post_type;

	/**
	 * Locations content model service.
	 *
	 * @var Location_Post_Type
	 */
	private $location_post_type;

	/**
	 * Markers content model service.
	 *
	 * @var Marker_Post_Type
	 */
	private $marker_post_type;

	/**
	 * Tag taxonomy service.
	 *
	 * @var Tag_Taxonomy
	 */
	private $tag_taxonomy;

	/**
	 * Frontend geocoding REST route service.
	 *
	 * @var Frontend_Geocode_Route
	 */
	private $frontend_geocode_route;

	/**
	 * Geocoding REST route service.
	 *
	 * @var Geocode_Route
	 */
	private $geocode_route;

	/**
	 * Public locations REST route service.
	 *
	 * @var Locations_Route
	 */
	private $locations_route;

	/**
	 * License verification REST route service.
	 *
	 * @var License_Route
	 */
	private $license_route;

	/**
	 * Styles REST route service.
	 *
	 * @var Styles_Route
	 */
	private $styles_route;

	/**
	 * Analytics settings REST route service.
	 *
	 * @var Analytics_Settings_Route
	 */
	private $analytics_settings_route;

	/**
	 * Analytics summary REST route service.
	 *
	 * @var Analytics_Summary_Route
	 */
	private $analytics_summary_route;

	/**
	 * Analytics queries REST route service.
	 *
	 * @var Analytics_Queries_Route
	 */
	private $analytics_queries_route;

	/**
	 * Analytics track REST route service.
	 *
	 * @var Analytics_Track_Route
	 */
	private $analytics_track_route;

	/**
	 * Boot the plugin.
	 *
	 * @return Plugin
	 */
	public static function boot() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Constructor.
	 */
	private function __construct() {
		$config                   = new Config();
		$this->analytics          = new Analytics();
		$this->assets             = new Assets( $config );
		$map_view                 = new Map_View( $config );
		$this->map_block          = new Map_Block( $map_view );
		$this->iframe_endpoint    = new Iframe_Endpoint( $config, $map_view );
		$this->admin_menu         = new Admin_Menu();
		$this->collection_post_type = new Collection_Post_Type();
		$this->logo_post_type     = new Logo_Post_Type();
		$this->location_post_type = new Location_Post_Type();
		$this->marker_post_type   = new Marker_Post_Type();
		$this->tag_taxonomy       = new Tag_Taxonomy();
		$this->frontend_geocode_route = new Frontend_Geocode_Route();
		$this->geocode_route      = new Geocode_Route();
		$this->locations_route    = new Locations_Route( $config );
		$this->license_route      = new License_Route();
		$this->styles_route       = new Styles_Route();
		$this->analytics_settings_route = new Analytics_Settings_Route( $this->analytics );
		$this->analytics_summary_route  = new Analytics_Summary_Route( $this->analytics );
		$this->analytics_queries_route  = new Analytics_Queries_Route( $this->analytics );
		$this->analytics_track_route    = new Analytics_Track_Route( $this->analytics );

		$this->register_hooks();
	}

	/**
	 * Activation hook callback.
	 *
	 * @return void
	 */
	public static function activate() {
		$analytics = new Analytics();
		$analytics->ensure_schema();
		$analytics->schedule_cleanup();
	}

	/**
	 * Register WordPress hooks.
	 *
	 * @return void
	 */
	private function register_hooks() {
		add_action( 'plugins_loaded', array( $this, 'load_textdomain' ) );
		add_action( 'init', array( $this->analytics, 'ensure_schema' ), 1 );
		add_action( 'init', array( $this->analytics, 'schedule_cleanup' ) );
		add_action( 'init', array( $this->collection_post_type, 'register' ), 5 );
		add_action( 'init', array( $this->tag_taxonomy, 'register' ), 5 );
		add_action( 'init', array( $this->logo_post_type, 'register' ), 6 );
		add_action( 'init', array( $this->location_post_type, 'register' ), 6 );
		add_action( 'init', array( $this->marker_post_type, 'register' ), 6 );
		add_action( 'init', array( $this->assets, 'register' ) );
		add_action( 'init', array( $this->map_block, 'register' ) );
		add_action( 'template_redirect', array( $this->iframe_endpoint, 'maybe_render' ) );
		add_action( 'admin_menu', array( $this->admin_menu, 'register' ) );
		add_action( 'admin_enqueue_scripts', array( $this->assets, 'enqueue_admin_assets' ) );
		add_action( 'wp_enqueue_scripts', array( $this->assets, 'enqueue_frontend_assets' ) );
		add_action( 'enqueue_block_editor_assets', array( $this->assets, 'enqueue_frontend_assets' ) );
		add_action( Analytics::CLEANUP_HOOK, array( $this->analytics, 'cleanup_old_queries' ) );
		add_action( 'rest_api_init', array( $this->analytics_settings_route, 'register' ) );
		add_action( 'rest_api_init', array( $this->analytics_summary_route, 'register' ) );
		add_action( 'rest_api_init', array( $this->analytics_queries_route, 'register' ) );
		add_action( 'rest_api_init', array( $this->analytics_track_route, 'register' ) );
		add_action( 'rest_api_init', array( $this->frontend_geocode_route, 'register' ) );
		add_action( 'rest_api_init', array( $this->geocode_route, 'register' ) );
		add_action( 'rest_api_init', array( $this->locations_route, 'register' ) );
		add_action( 'rest_api_init', array( $this->license_route, 'register' ) );
		add_action( 'rest_api_init', array( $this->styles_route, 'register' ) );
	}

	/**
	 * Load the plugin textdomain.
	 *
	 * @return void
	 */
	public function load_textdomain() {
		load_plugin_textdomain(
			'minimal-map',
			false,
			dirname( plugin_basename( MINIMAL_MAP_FILE ) ) . '/languages'
		);
	}
}
