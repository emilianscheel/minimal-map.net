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
			)
		);
	}

	/**
	 * Return analytics summary metrics.
	 *
	 * @return \WP_REST_Response
	 */
	public function handle_request() {
		return rest_ensure_response( $this->analytics->get_summary() );
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
	 * Get the absolute REST path.
	 *
	 * @return string
	 */
	public static function get_rest_path() {
		return '/' . self::REST_NAMESPACE . self::REST_ROUTE;
	}
}
