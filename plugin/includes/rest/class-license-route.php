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
		$license_key = $request->get_param( 'license_key' );

		$response = wp_remote_post(
			'https://api.gumroad.com/v2/licenses/verify',
			array(
				'body' => array(
					'product_id'  => self::PRODUCT_ID,
					'license_key' => $license_key,
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
			update_option( 'minimal_map_premium_active', true );
			update_option( 'minimal_map_license_key', $license_key );

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
}
