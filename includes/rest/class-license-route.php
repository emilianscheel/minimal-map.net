<?php
/**
 * License verification REST route.
 *
 * @package Minimal_Map
 */

namespace MinimalMap\Rest;

/**
 * Handles license key verification with Gumroad.
 */
class License_Route {
	/**
	 * Namespace for plugin REST routes.
	 */
	const REST_NAMESPACE = 'minimal-map/v1';

	/**
	 * REST route path.
	 */
	const REST_ROUTE = '/license/verify';

	/**
	 * Gumroad product ID.
	 */
	const PRODUCT_ID = 'u8ew5xq0SpeZ0StSxqWbKg==';

	/**
	 * Gumroad product URL.
	 */
	const PRODUCT_URL = 'https://emilianscheel.gumroad.com/l/minimal-map';

	/**
	 * Premium activation option key.
	 */
	const PREMIUM_ACTIVE_OPTION = 'minimal_map_premium_active';

	/**
	 * Stored license option key.
	 */
	const LICENSE_KEY_OPTION = 'minimal_map_license_key';

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
				'methods'             => \WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'handle_request' ),
				'permission_callback' => array( $this, 'check_permission' ),
				'args'                => array(
					'license_key' => array(
						'required'          => true,
						'type'              => 'string',
						'sanitize_callback' => 'sanitize_text_field',
					),
				),
			)
		);
	}

	/**
	 * Check if the current user can manage options.
	 *
	 * @return bool
	 */
	public function check_permission() {
		return current_user_can( 'manage_options' );
	}

	/**
	 * Handle license verification requests.
	 *
	 * @param \WP_REST_Request $request Request object.
	 * @return \WP_REST_Response|\WP_Error
	 */
	public function handle_request( $request ) {
		$license_key = sanitize_text_field( (string) $request->get_param( 'license_key' ) );
		$stored_license_key = self::get_stored_license_key();
		$has_local_activation = self::has_local_activation();
		$is_same_license_key = '' !== $stored_license_key && hash_equals( $stored_license_key, $license_key );

		if ( $has_local_activation && ! $is_same_license_key ) {
			return new \WP_Error(
				'license_already_redeemed',
				__( 'A license key has already been redeemed on this site.', 'minimal-map' ),
				array( 'status' => 409 )
			);
		}

		$response = wp_remote_post(
			'https://api.gumroad.com/v2/licenses/verify',
			array(
				'body' => array(
					'product_id'           => self::PRODUCT_ID,
					'license_key'          => $license_key,
					'increment_uses_count' => $is_same_license_key ? 'false' : 'true',
				),
			)
		);

		if ( is_wp_error( $response ) ) {
			return new \WP_Error(
				'gumroad_error',
				__( 'Could not connect to Gumroad. Please try again later.', 'minimal-map' ),
				array( 'status' => 500 )
			);
		}

		$body = json_decode( wp_remote_retrieve_body( $response ), true );

		if ( isset( $body['success'] ) && $body['success'] ) {
			update_option( self::PREMIUM_ACTIVE_OPTION, true );
			update_option( self::LICENSE_KEY_OPTION, $license_key );

			return rest_ensure_response( array( 'success' => true ) );
		}

		$message = isset( $body['message'] ) ? $body['message'] : __( 'Invalid license key.', 'minimal-map' );

		return new \WP_Error(
			'invalid_license',
			$message,
			array( 'status' => 400 )
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

	/**
	 * Check whether this site already has one local activation.
	 *
	 * @return bool
	 */
	public static function has_local_activation() {
		return (bool) get_option( self::PREMIUM_ACTIVE_OPTION, false ) || '' !== self::get_stored_license_key();
	}

	/**
	 * Get the stored local license key.
	 *
	 * @return string
	 */
	public static function get_stored_license_key() {
		return trim( (string) get_option( self::LICENSE_KEY_OPTION, '' ) );
	}
}
