<?php
/**
 * Analytics summary REST route.
 *
 * @package Minimal_Map
 */

namespace MinimalMap\Rest;

use MinimalMap\Admin\Admin_Menu;
use MinimalMap\Analytics\Analytics;

/**
 * Exposes analytics summary metrics to the admin UI.
 */
class Analytics_Summary_Route {
	/**
	 * Namespace for plugin REST routes.
	 */
	const REST_NAMESPACE = 'minimal-map/v1';

	/**
	 * REST route path.
	 */
	const REST_ROUTE = '/analytics/summary';

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
	 * Return analytics summary metrics.
	 *
	 * @param \WP_REST_Request $request Request object.
	 * @return \WP_REST_Response
	 */
	public function handle_request( $request ) {
		return rest_ensure_response(
			$this->analytics->get_summary(
				$request->get_param( 'range' ),
				$request->get_param( 'category' )
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
			'range' => array(
				'required'          => false,
				'type'              => 'string',
				'default'           => Analytics::DEFAULT_SUMMARY_RANGE,
				'sanitize_callback' => 'sanitize_key',
			),
			'category' => array(
				'required'          => false,
				'type'              => 'string',
				'default'           => 'search',
				'sanitize_callback' => 'sanitize_key',
				'enum'              => Analytics::EVENT_CATEGORIES,
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
