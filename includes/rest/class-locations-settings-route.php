<?php
/**
 * Locations settings REST route.
 *
 * @package Minimal_Map
 */

namespace MinimalMap\Rest;

use MinimalMap\Admin\Admin_Menu;
use WP_REST_Request;

/**
 * Exposes per-user locations table settings to the admin UI.
 */
class Locations_Settings_Route {
	/**
	 * Namespace for plugin REST routes.
	 */
	const REST_NAMESPACE = 'minimal-map/v1';

	/**
	 * REST route path.
	 */
	const REST_ROUTE = '/locations/settings';

	/**
	 * User meta key for the preferred locations table page size.
	 */
	const USER_META_KEY = 'minimal_map_locations_per_page';

	/**
	 * Default per-page size.
	 */
	const DEFAULT_PER_PAGE = 8;

	/**
	 * Allowed per-page sizes.
	 */
	const ALLOWED_PER_PAGE = array( 8, 24, 48 );

	/**
	 * Register the route.
	 *
	 * @return void
	 */
	public function register() {
		register_rest_route(
			self::REST_NAMESPACE,
			self::REST_ROUTE,
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_settings' ),
					'permission_callback' => array( $this, 'can_manage_settings' ),
				),
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'update_settings' ),
					'permission_callback' => array( $this, 'can_manage_settings' ),
					'args'                => $this->get_route_args(),
				),
			)
		);
	}

	/**
	 * Read the current user's preferred page size.
	 *
	 * @return \WP_REST_Response
	 */
	public function get_settings() {
		return rest_ensure_response(
			array(
				'perPage' => self::get_user_preferred_per_page(),
			)
		);
	}

	/**
	 * Persist the current user's preferred page size.
	 *
	 * @param WP_REST_Request $request Request object.
	 * @return \WP_REST_Response
	 */
	public function update_settings( WP_REST_Request $request ) {
		$user_id  = get_current_user_id();
		$per_page = (int) $request->get_param( 'perPage' );

		update_user_meta( $user_id, self::USER_META_KEY, $per_page );

		return rest_ensure_response(
			array(
				'perPage' => $per_page,
			)
		);
	}

	/**
	 * Whether the current user can manage admin settings.
	 *
	 * @return bool
	 */
	public function can_manage_settings() {
		return current_user_can( Admin_Menu::CAPABILITY );
	}

	/**
	 * Get the current user's preferred page size.
	 *
	 * @param int $user_id Optional user id.
	 * @return int
	 */
	public static function get_user_preferred_per_page( $user_id = 0 ) {
		$user_id = $user_id ? (int) $user_id : get_current_user_id();
		if ( $user_id <= 0 ) {
			return self::DEFAULT_PER_PAGE;
		}

		return self::normalize_per_page( get_user_meta( $user_id, self::USER_META_KEY, true ) );
	}

	/**
	 * Normalize one incoming per-page value.
	 *
	 * @param mixed $value Raw value.
	 * @return int
	 */
	public static function normalize_per_page( $value ) {
		$value = (int) $value;

		if ( in_array( $value, self::ALLOWED_PER_PAGE, true ) ) {
			return $value;
		}

		return self::DEFAULT_PER_PAGE;
	}

	/**
	 * Validate one incoming per-page value.
	 *
	 * @param mixed $value Raw value.
	 * @return bool
	 */
	public function validate_per_page( $value ) {
		return in_array( (int) $value, self::ALLOWED_PER_PAGE, true );
	}

	/**
	 * Return route args.
	 *
	 * @return array<string, array<string, mixed>>
	 */
	private function get_route_args() {
		return array(
			'perPage' => array(
				'required'          => true,
				'type'              => 'integer',
				'validate_callback' => array( $this, 'validate_per_page' ),
			),
		);
	}

	/**
	 * Get the absolute REST path.
	 *
	 * @return string
	 */
	public static function get_rest_path() {
		return '/' . self::REST_NAMESPACE . self::REST_ROUTE;
	}
}
