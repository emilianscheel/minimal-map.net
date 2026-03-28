<?php
/**
 * Analytics tracking REST route.
 *
 * @package Minimal_Map
 */

namespace MinimalMap\Rest;

use MinimalMap\Analytics\Analytics;

/**
 * Public analytics tracking endpoint for frontend map activity.
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
				'tracked' => $this->analytics->track_event(
					array(
						'event_category'          => isset( $params['event_category'] ) ? $params['event_category'] : 'search',
						'query_text'              => isset( $params['query_text'] ) ? $params['query_text'] : '',
						'query_type'              => isset( $params['query_type'] ) ? $params['query_type'] : 'text',
						'result_count'            => isset( $params['result_count'] ) ? $params['result_count'] : 0,
						'nearest_distance_meters' => isset( $params['nearest_distance_meters'] ) ? $params['nearest_distance_meters'] : null,
						'location_id'             => isset( $params['location_id'] ) ? $params['location_id'] : null,
						'location_title'          => isset( $params['location_title'] ) ? $params['location_title'] : '',
						'interaction_source'      => isset( $params['interaction_source'] ) ? $params['interaction_source'] : '',
						'action_type'             => isset( $params['action_type'] ) ? $params['action_type'] : '',
						'action_target'           => isset( $params['action_target'] ) ? $params['action_target'] : '',
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
			'event_category' => array(
				'required'          => false,
				'type'              => 'string',
				'default'           => 'search',
				'sanitize_callback' => 'sanitize_key',
				'enum'              => Analytics::EVENT_CATEGORIES,
			),
			'query_text' => array(
				'required'          => false,
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field',
			),
			'query_type' => array(
				'required'          => false,
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field',
				'enum'              => Analytics::QUERY_TYPES,
			),
			'result_count' => array(
				'required'          => false,
				'type'              => 'integer',
				'sanitize_callback' => 'absint',
			),
			'nearest_distance_meters' => array(
				'required'          => false,
				'type'              => 'number',
			),
			'location_id' => array(
				'required'          => false,
				'type'              => 'integer',
				'sanitize_callback' => 'absint',
			),
			'location_title' => array(
				'required'          => false,
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field',
			),
			'interaction_source' => array(
				'required'          => false,
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_key',
				'enum'              => Analytics::INTERACTION_SOURCES,
			),
			'action_type' => array(
				'required'          => false,
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_key',
				'enum'              => Analytics::ACTION_TYPES,
			),
			'action_target' => array(
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
