<?php
/**
 * Analytics tracking REST route.
 *
 * @package Minimal_Map
 */

namespace MinimalMap\Rest;

use MinimalMap\Analytics\Analytics;

/**
 * Public analytics tracking endpoint for frontend search activity.
 */
class Analytics_Track_Route {
	/**
	 * Namespace for plugin REST routes.
	 */
	const REST_NAMESPACE = 'minimal-map/v1';

	/**
	 * REST route path.
	 */
	const REST_ROUTE = '/analytics/track';

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
				'methods'             => \WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'handle_request' ),
				'permission_callback' => '__return_true',
				'args'                => $this->get_route_args(),
			)
		);
	}

	/**
	 * Track one analytics payload.
	 *
	 * @param \WP_REST_Request $request Request object.
	 * @return \WP_REST_Response
	 */
	public function handle_request( $request ) {
		$params = $request->get_json_params();

		if ( ! is_array( $params ) ) {
			$params = $request->get_params();
		}

		return rest_ensure_response(
			array(
				'tracked' => $this->analytics->track_query(
					array(
						'query_text'              => isset( $params['query_text'] ) ? $params['query_text'] : '',
						'query_type'              => isset( $params['query_type'] ) ? $params['query_type'] : 'text',
						'result_count'            => isset( $params['result_count'] ) ? $params['result_count'] : 0,
						'nearest_distance_meters' => isset( $params['nearest_distance_meters'] ) ? $params['nearest_distance_meters'] : null,
					)
				),
			)
		);
	}

	/**
	 * Return route args.
	 *
	 * @return array<string, array<string, mixed>>
	 */
	private function get_route_args() {
		return array(
			'query_text' => array(
				'required'          => true,
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field',
			),
			'query_type' => array(
				'required'          => true,
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field',
				'enum'              => Analytics::QUERY_TYPES,
			),
			'result_count' => array(
				'required'          => true,
				'type'              => 'integer',
				'sanitize_callback' => 'absint',
			),
			'nearest_distance_meters' => array(
				'required'          => false,
				'type'              => 'number',
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
