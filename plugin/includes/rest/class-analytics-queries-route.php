<?php
/**
 * Analytics queries REST route.
 *
 * @package Minimal_Map
 */

namespace MinimalMap\Rest;

use MinimalMap\Admin\Admin_Menu;
use MinimalMap\Analytics\Analytics;

/**
 * Exposes paginated analytics rows to the admin UI.
 */
class Analytics_Queries_Route {
	/**
	 * Namespace for plugin REST routes.
	 */
	const REST_NAMESPACE = 'minimal-map/v1';

	/**
	 * REST route path.
	 */
	const REST_ROUTE = '/analytics/queries';

	/**
	 * Analytics service.
	 *
	 * @var Analytics
	 */
	private $analytics;

	/**
	 * Constructor.
	 *
	 * @param Analytics $analytics Analytics service.
	 */
	public function __construct( Analytics $analytics ) {
		$this->analytics = $analytics;
	}

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
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( $this, 'handle_request' ),
				'permission_callback' => array( $this, 'can_manage_analytics' ),
				'args'                => $this->get_route_args(),
			)
		);
	}

	/**
	 * Return paginated analytics rows.
	 *
	 * @param \WP_REST_Request $request Request object.
	 * @return \WP_REST_Response
	 */
	public function handle_request( $request ) {
		return rest_ensure_response(
			$this->analytics->query_queries(
				array(
					'page'     => $request->get_param( 'page' ),
					'per_page' => $request->get_param( 'per_page' ),
					'search'   => $request->get_param( 'search' ),
				)
			)
		);
	}

	/**
	 * Verify analytics management capability.
	 *
	 * @return bool
	 */
	public function can_manage_analytics() {
		return current_user_can( Admin_Menu::CAPABILITY );
	}

	/**
	 * Return route args.
	 *
	 * @return array<string, array<string, mixed>>
	 */
	private function get_route_args() {
		return array(
			'page' => array(
				'required'          => false,
				'type'              => 'integer',
				'default'           => 1,
				'sanitize_callback' => 'absint',
			),
			'per_page' => array(
				'required'          => false,
				'type'              => 'integer',
				'default'           => 10,
				'sanitize_callback' => 'absint',
			),
			'search' => array(
				'required'          => false,
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field',
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
