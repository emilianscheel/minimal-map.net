<?php
/**
 * Admin menu registration.
 *
 * @package Minimal_Map
 */

namespace MinimalMap\Admin;

defined( 'ABSPATH' ) || exit;

/**
 * Registers the admin menu structure.
 */
class Admin_Menu {
	/**
	 * Capability required for the plugin admin UI.
	 */
	const CAPABILITY = 'manage_options';

	/**
	 * Top-level menu slug.
	 */
	const TOP_LEVEL_SLUG = 'minimal-map';

	/**
	 * Default section slug.
	 */
	const DEFAULT_VIEW = 'dashboard';

	/**
	 * Get all internal plugin sections.
	 *
	 * @return array<string, array<string, string>>
	 */
	public static function get_sections() {
		return array(
			'dashboard'  => array(
				'title'       => __( 'Dashboard', 'minimal-map-net' ),
				'description' => __( 'An overview of Minimal Map sections and upcoming data tools.', 'minimal-map-net' ),
			),
			'analytics'  => array(
				'title'       => __( 'Analytics', 'minimal-map-net' ),
				'description' => __( 'Review map search demand and identify where people are looking for locations.', 'minimal-map-net' ),
			),
			'locations'  => array(
				'title'       => __( 'Locations', 'minimal-map-net' ),
				'description' => __( 'Create and organize the places you want to render on your maps.', 'minimal-map-net' ),
			),
			'collections' => array(
				'title'       => __( 'Collections', 'minimal-map-net' ),
				'description' => __( 'Assemble reusable groups of locations and manage their map-ready assignments.', 'minimal-map-net' ),
			),
			'tags'       => array(
				'title'       => __( 'Tags', 'minimal-map-net' ),
				'description' => __( 'Apply lightweight labels to keep map content easy to organize.', 'minimal-map-net' ),
			),
			'logos'      => array(
				'title'       => __( 'Logos', 'minimal-map-net' ),
				'description' => __( 'Upload SVG logos and assign them across multiple locations.', 'minimal-map-net' ),
			),
			'markers'    => array(
				'title'       => __( 'Markers', 'minimal-map-net' ),
				'description' => __( 'Define the marker styles and visual pin variants used across maps.', 'minimal-map-net' ),
			),
			'styles'     => array(
				'title'       => __( 'Styles', 'minimal-map-net' ),
				'description' => __( 'Manage the map styles and presets available inside the block editor.', 'minimal-map-net' ),
			),
		);
	}

	/**
	 * Resolve the current internal section.
	 *
	 * @return string
	 */
	public static function get_current_view() {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Read-only admin navigation state.
		$view     = isset( $_GET['view'] ) ? sanitize_key( wp_unslash( $_GET['view'] ) ) : self::DEFAULT_VIEW;
		$sections = self::get_sections();

		if ( ! isset( $sections[ $view ] ) ) {
			return self::DEFAULT_VIEW;
		}

		return $view;
	}

	/**
	 * Build the admin URL for a given section.
	 *
	 * @param string $view Section slug.
	 * @return string
	 */
	public static function get_view_url( $view ) {
		$base_url = admin_url( 'admin.php?page=' . self::TOP_LEVEL_SLUG );

		if ( self::DEFAULT_VIEW === $view ) {
			return $base_url;
		}

		return add_query_arg( 'view', $view, $base_url );
	}

	/**
	 * Register menu pages.
	 *
	 * @return void
	 */
	public function register() {
		add_menu_page(
			__( 'Minimal Map', 'minimal-map-net' ),
			__( 'Minimal Map', 'minimal-map-net' ),
			self::CAPABILITY,
			self::TOP_LEVEL_SLUG,
			array( $this, 'render_page' ),
			'dashicons-admin-site',
			56
		);
	}

	/**
	 * Render a page shell for the React admin app.
	 *
	 * @return void
	 */
	public function render_page() {
		$view        = self::get_current_view();
		$sections    = self::get_sections();
		$title       = $sections[ $view ]['title'];
		$description = $sections[ $view ]['description'];

		require MINIMAL_MAP_PATH . 'templates/admin-page.php';
	}
}
