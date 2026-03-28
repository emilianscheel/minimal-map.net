<?php
/**
 * Analytics tests.
 *
 * @package Minimal_Map
 */

/**
 * Verifies analytics storage and routes.
 */
class Minimal_Map_Analytics_Test extends WP_UnitTestCase {
	/**
	 * Analytics service.
	 *
	 * @var \MinimalMap\Analytics\Analytics
	 */
	private $analytics;

	/**
	 * Admin user id.
	 *
	 * @var int
	 */
	private $admin_user_id;

	/**
	 * Set up test state.
	 *
	 * @return void
	 */
	public function set_up() {
		parent::set_up();

		$this->analytics      = new \MinimalMap\Analytics\Analytics();
		$this->admin_user_id  = self::factory()->user->create(
			array(
				'role' => 'administrator',
			)
		);

		wp_set_current_user( $this->admin_user_id );
		$this->analytics->ensure_schema();

		global $wpdb;
		$wpdb->query( 'DELETE FROM ' . $this->analytics->get_table_name() );
		update_option( \MinimalMap\Analytics\Analytics::OPTION_ENABLED, '0', false );

		do_action( 'rest_api_init' );
	}

	/**
	 * Insert one raw analytics row for reporting tests.
	 *
	 * @param array<string, mixed> $row Row overrides.
	 * @return void
	 */
	private function insert_query_row( $row ) {
		global $wpdb;

		$data = array_merge(
			array(
				'event_category'          => 'search',
				'query_text'              => 'Example query',
				'query_type'              => 'text',
				'result_count'            => 0,
				'nearest_distance_meters' => null,
				'location_id'             => null,
				'location_title'          => '',
				'interaction_source'      => '',
				'action_type'             => '',
				'action_target'           => '',
				'occurred_at_gmt'         => gmdate( 'Y-m-d H:i:s' ),
			),
			$row
		);

		$formats = array();

		foreach ( array_keys( $data ) as $key ) {
			switch ( $key ) {
				case 'result_count':
				case 'nearest_distance_meters':
				case 'location_id':
					$formats[] = '%d';
					break;
				default:
					$formats[] = '%s';
			}
		}

		$wpdb->insert( $this->analytics->get_table_name(), $data, $formats );
	}

	/**
	 * The analytics table should be available after schema bootstrap.
	 *
	 * @return void
	 */
	public function test_analytics_table_is_created() {
		global $wpdb;

		$table_name = $this->analytics->get_table_name();
		$found      = $wpdb->get_var(
			$wpdb->prepare( 'SHOW TABLES LIKE %s', $table_name )
		);

		$this->assertSame( $table_name, $found );
	}

	/**
	 * Tracking route should insert sanitized rows when analytics is enabled.
	 *
	 * @return void
	 */
	public function test_tracking_route_inserts_when_enabled() {
		update_option( \MinimalMap\Analytics\Analytics::OPTION_ENABLED, '1', false );

		$request = new WP_REST_Request( 'POST', \MinimalMap\Rest\Analytics_Track_Route::get_rest_path() );
		$request->set_param( 'query_text', 'Berlin Mitte' );
		$request->set_param( 'query_type', 'text' );
		$request->set_param( 'result_count', 4 );
		$request->set_param( 'nearest_distance_meters', 275 );

		$response = rest_do_request( $request );
		$data     = $response->get_data();

		$this->assertTrue( $data['tracked'] );

		$summary = $this->analytics->get_summary();
		$this->assertSame( 1, $summary['totalSearches'] );
		$this->assertSame( 0, $summary['zeroResultSearches'] );
		$this->assertSame( 100.0, $summary['successRate'] );
		$this->assertSame( 'Berlin Mitte', $summary['breakdowns']['topQueries'][0]['label'] );
		$this->assertSame( 1, $summary['breakdowns']['resultDistribution'][2]['value'] );
		$this->assertCount( 30, $summary['series']['totalSearches'] );
	}

	/**
	 * Tracking route should write nothing when analytics is disabled.
	 *
	 * @return void
	 */
	public function test_tracking_route_is_noop_when_disabled() {
		$request = new WP_REST_Request( 'POST', \MinimalMap\Rest\Analytics_Track_Route::get_rest_path() );
		$request->set_param( 'query_text', 'Hamburg Hafen' );
		$request->set_param( 'query_type', 'text' );
		$request->set_param( 'result_count', 0 );

		$response = rest_do_request( $request );
		$data     = $response->get_data();

		$this->assertFalse( $data['tracked'] );
		$this->assertSame( 0, $this->analytics->get_summary()['totalSearches'] );
	}

	/**
	 * Summary should expose daily trend series in site-local day buckets.
	 *
	 * @return void
	 */
	public function test_summary_returns_30_day_daily_series_with_local_day_grouping() {
		global $wpdb;

		update_option( \MinimalMap\Analytics\Analytics::OPTION_ENABLED, '1', false );

		$timezone = wp_timezone();
		$table_name = $this->analytics->get_table_name();
		$today = new DateTimeImmutable( 'now', $timezone );
		$target_day = $today->setTime( 0, 0, 0 )->modify( '-1 day' );
		$target_key = $target_day->format( 'Y-m-d' );
		$before_midnight_gmt = $target_day->setTime( 23, 30, 0 )->setTimezone( new DateTimeZone( 'UTC' ) )->format( 'Y-m-d H:i:s' );
		$after_midnight_gmt = $target_day->modify( '+1 day' )->setTime( 0, 15, 0 )->setTimezone( new DateTimeZone( 'UTC' ) )->format( 'Y-m-d H:i:s' );

		$wpdb->insert(
			$table_name,
			array(
				'query_text' => 'Late local query',
				'query_type' => 'text',
				'result_count' => 0,
				'occurred_at_gmt' => $before_midnight_gmt,
			),
			array( '%s', '%s', '%d', '%s' )
		);
		$wpdb->insert(
			$table_name,
			array(
				'query_text' => 'Distance query',
				'query_type' => 'address',
				'result_count' => 2,
				'nearest_distance_meters' => 600,
				'occurred_at_gmt' => $before_midnight_gmt,
			),
			array( '%s', '%s', '%d', '%d', '%s' )
		);
		$wpdb->insert(
			$table_name,
			array(
				'query_text' => 'Next day query',
				'query_type' => 'text',
				'result_count' => 1,
				'occurred_at_gmt' => $after_midnight_gmt,
			),
			array( '%s', '%s', '%d', '%s' )
		);

		$summary = $this->analytics->get_summary();
		$total_series = wp_list_pluck( $summary['series']['totalSearches'], 'value', 'date' );
		$zero_series = wp_list_pluck( $summary['series']['zeroResultSearches'], 'value', 'date' );
		$distance_series = wp_list_pluck( $summary['series']['averageNearestDistanceMeters'], 'value', 'date' );
		$success_series = wp_list_pluck( $summary['series']['successRate'], 'value', 'date' );

		$this->assertCount( 30, $summary['series']['totalSearches'] );
		$this->assertCount( 30, $summary['series']['successRate'] );
		$this->assertSame( 2, $total_series[ $target_key ] );
		$this->assertSame( 1, $zero_series[ $target_key ] );
		$this->assertSame( 600.0, $distance_series[ $target_key ] );
		$this->assertSame( 50.0, $success_series[ $target_key ] );
		$this->assertSame( 0, $distance_series[ $today->setTime( 0, 0, 0 )->format( 'Y-m-d' ) ] );
	}

	/**
	 * Summary should support hourly buckets for today and yesterday.
	 *
	 * @return void
	 */
	public function test_summary_supports_hourly_buckets_for_today_and_yesterday() {
		$timezone = wp_timezone();
		$today    = ( new DateTimeImmutable( 'now', $timezone ) )->setTime( 0, 0, 0 );

		$this->insert_query_row(
			array(
				'query_text'      => 'Morning today',
				'result_count'    => 2,
				'occurred_at_gmt' => $today->setTime( 2, 15, 0 )->setTimezone( new DateTimeZone( 'UTC' ) )->format( 'Y-m-d H:i:s' ),
			)
		);
		$this->insert_query_row(
			array(
				'query_text'      => 'Afternoon today',
				'result_count'    => 0,
				'occurred_at_gmt' => $today->setTime( 15, 45, 0 )->setTimezone( new DateTimeZone( 'UTC' ) )->format( 'Y-m-d H:i:s' ),
			)
		);
		$this->insert_query_row(
			array(
				'query_text'      => 'Yesterday query',
				'result_count'    => 1,
				'occurred_at_gmt' => $today->modify( '-1 day' )->setTime( 9, 10, 0 )->setTimezone( new DateTimeZone( 'UTC' ) )->format( 'Y-m-d H:i:s' ),
			)
		);

		$today_summary      = $this->analytics->get_summary( 'today' );
		$today_total_series = wp_list_pluck( $today_summary['series']['totalSearches'], 'value', 'date' );
		$today_zero_series  = wp_list_pluck( $today_summary['series']['zeroResultSearches'], 'value', 'date' );
		$today_success      = wp_list_pluck( $today_summary['series']['successRate'], 'value', 'date' );
		$today_prefix       = $today->format( 'Y-m-d' );

		$this->assertCount( 24, $today_summary['series']['totalSearches'] );
		$this->assertSame( 1, $today_total_series[ "{$today_prefix} 02:00" ] );
		$this->assertSame( 1, $today_total_series[ "{$today_prefix} 15:00" ] );
		$this->assertSame( 1, $today_zero_series[ "{$today_prefix} 15:00" ] );
		$this->assertSame( 100.0, $today_success[ "{$today_prefix} 02:00" ] );
		$this->assertSame( 0.0, $today_success[ "{$today_prefix} 15:00" ] );

		$yesterday_summary      = $this->analytics->get_summary( 'yesterday' );
		$yesterday_total_series = wp_list_pluck( $yesterday_summary['series']['totalSearches'], 'value', 'date' );
		$yesterday_prefix       = $today->modify( '-1 day' )->format( 'Y-m-d' );

		$this->assertCount( 24, $yesterday_summary['series']['totalSearches'] );
		$this->assertSame( 1, $yesterday_total_series[ "{$yesterday_prefix} 09:00" ] );
	}

	/**
	 * Summary should support monthly buckets for the all-time range.
	 *
	 * @return void
	 */
	public function test_summary_supports_monthly_buckets_for_all_range() {
		$timezone      = wp_timezone();
		$current_month = ( new DateTimeImmutable( 'now', $timezone ) )->modify( 'first day of this month' )->setTime( 0, 0, 0 );
		$earliest      = $current_month->modify( '-2 months' );

		$this->insert_query_row(
			array(
				'query_text'      => 'Early month',
				'result_count'    => 1,
				'occurred_at_gmt' => $earliest->setTime( 8, 0, 0 )->setTimezone( new DateTimeZone( 'UTC' ) )->format( 'Y-m-d H:i:s' ),
			)
		);
		$this->insert_query_row(
			array(
				'query_text'      => 'Current month',
				'result_count'    => 1,
				'occurred_at_gmt' => $current_month->setTime( 9, 0, 0 )->setTimezone( new DateTimeZone( 'UTC' ) )->format( 'Y-m-d H:i:s' ),
			)
		);

		$summary      = $this->analytics->get_summary( 'all' );
		$total_series = wp_list_pluck( $summary['series']['totalSearches'], 'value', 'date' );

		$this->assertCount( 3, $summary['series']['totalSearches'] );
		$this->assertSame( 1, $total_series[ $earliest->format( 'Y-m' ) ] );
		$this->assertSame( 0, $total_series[ $current_month->modify( '-1 month' )->format( 'Y-m' ) ] );
		$this->assertSame( 1, $total_series[ $current_month->format( 'Y-m' ) ] );
	}

	/**
	 * Summary should expose the new breakdown metrics.
	 *
	 * @return void
	 */
	public function test_summary_returns_breakdowns_for_top_queries_and_result_distribution() {
		$now_gmt = gmdate( 'Y-m-d H:i:s' );

		$this->insert_query_row(
			array(
				'query_text'      => 'Berlin Mitte',
				'query_type'      => 'text',
				'result_count'    => 3,
				'occurred_at_gmt' => $now_gmt,
			)
		);
		$this->insert_query_row(
			array(
				'query_text'      => 'Berlin Mitte',
				'query_type'      => 'text',
				'result_count'    => 2,
				'occurred_at_gmt' => $now_gmt,
			)
		);
		$this->insert_query_row(
			array(
				'query_text'      => 'Munich',
				'query_type'      => 'address',
				'result_count'    => 0,
				'occurred_at_gmt' => $now_gmt,
			)
		);
		$this->insert_query_row(
			array(
				'query_text'      => 'Munich',
				'query_type'      => 'address',
				'result_count'    => 0,
				'occurred_at_gmt' => $now_gmt,
			)
		);
		$this->insert_query_row(
			array(
				'query_text'      => 'GPS',
				'query_type'      => 'live_location',
				'result_count'    => 1,
				'occurred_at_gmt' => $now_gmt,
			)
		);
		$this->insert_query_row(
			array(
				'query_text'      => 'LatLng',
				'query_type'      => 'coordinates',
				'result_count'    => 7,
				'occurred_at_gmt' => $now_gmt,
			)
		);

		$summary = $this->analytics->get_summary( '30d' );

		$this->assertSame( 6, $summary['totalSearches'] );
		$this->assertEqualsWithDelta( 66.6667, $summary['successRate'], 0.001 );
		$this->assertSame( 'Berlin Mitte', $summary['breakdowns']['topQueries'][0]['label'] );
		$this->assertSame( 2, $summary['breakdowns']['topQueries'][0]['value'] );
		$this->assertSame( 'Munich', $summary['breakdowns']['topZeroResultQueries'][0]['label'] );
		$this->assertSame( 2, $summary['breakdowns']['topZeroResultQueries'][0]['value'] );
		$this->assertSame( 2, $summary['breakdowns']['queryTypeMix'][0]['value'] );
		$this->assertSame( 2, $summary['breakdowns']['queryTypeMix'][1]['value'] );
		$this->assertSame( 1, $summary['breakdowns']['queryTypeMix'][2]['value'] );
		$this->assertSame( 1, $summary['breakdowns']['queryTypeMix'][3]['value'] );
		$this->assertSame( 2, $summary['breakdowns']['resultDistribution'][0]['value'] );
		$this->assertSame( 1, $summary['breakdowns']['resultDistribution'][1]['value'] );
		$this->assertSame( 2, $summary['breakdowns']['resultDistribution'][2]['value'] );
		$this->assertSame( 1, $summary['breakdowns']['resultDistribution'][3]['value'] );
	}

	/**
	 * Queries route should paginate and search stored rows.
	 *
	 * @return void
	 */
	public function test_queries_route_supports_pagination_and_search() {
		update_option( \MinimalMap\Analytics\Analytics::OPTION_ENABLED, '1', false );

		$this->analytics->track_query(
			array(
				'query_text'   => 'Berlin Mitte',
				'query_type'   => 'text',
				'result_count' => 2,
			)
		);
		$this->analytics->track_query(
			array(
				'query_text'              => 'Hamburg Port',
				'query_type'              => 'address',
				'result_count'            => 1,
				'nearest_distance_meters' => 420,
			)
		);

		$request = new WP_REST_Request( 'GET', \MinimalMap\Rest\Analytics_Queries_Route::get_rest_path() );
		$request->set_param( 'page', 1 );
		$request->set_param( 'per_page', 1 );
		$request->set_param( 'search', 'Berlin' );

		$response = rest_do_request( $request );
		$data     = $response->get_data();

		$this->assertSame( 1, $data['totalItems'] );
		$this->assertSame( 1, $data['totalPages'] );
		$this->assertSame( 'Berlin Mitte', $data['items'][0]['query_text'] );
	}

	/**
	 * Queries route should honor the selected analytics range.
	 *
	 * @return void
	 */
	public function test_queries_route_filters_rows_by_range() {
		$timezone   = wp_timezone();
		$today      = ( new DateTimeImmutable( 'now', $timezone ) )->setTime( 12, 0, 0 );
		$older_date = $today->modify( '-40 days' );

		$this->insert_query_row(
			array(
				'query_text'      => 'Current query',
				'result_count'    => 1,
				'occurred_at_gmt' => $today->setTimezone( new DateTimeZone( 'UTC' ) )->format( 'Y-m-d H:i:s' ),
			)
		);
		$this->insert_query_row(
			array(
				'query_text'      => 'Old query',
				'result_count'    => 1,
				'occurred_at_gmt' => $older_date->setTimezone( new DateTimeZone( 'UTC' ) )->format( 'Y-m-d H:i:s' ),
			)
		);

		$request = new WP_REST_Request( 'GET', \MinimalMap\Rest\Analytics_Queries_Route::get_rest_path() );
		$request->set_param( 'range', '30d' );

		$response = rest_do_request( $request );
		$data     = $response->get_data();

		$this->assertSame( 1, $data['totalItems'] );
		$this->assertSame( 'Current query', $data['items'][0]['query_text'] );

		$request = new WP_REST_Request( 'GET', \MinimalMap\Rest\Analytics_Queries_Route::get_rest_path() );
		$request->set_param( 'range', 'all' );

		$response = rest_do_request( $request );
		$data     = $response->get_data();

		$this->assertSame( 2, $data['totalItems'] );
	}

	/**
	 * Tracking route should support selection and action payloads.
	 *
	 * @return void
	 */
	public function test_tracking_route_supports_selection_and_action_categories() {
		update_option( \MinimalMap\Analytics\Analytics::OPTION_ENABLED, '1', false );

		$selection_request = new WP_REST_Request( 'POST', \MinimalMap\Rest\Analytics_Track_Route::get_rest_path() );
		$selection_request->set_param( 'event_category', 'selection' );
		$selection_request->set_param( 'location_id', 12 );
		$selection_request->set_param( 'location_title', 'Berlin Mitte' );
		$selection_request->set_param( 'interaction_source', 'search_panel' );
		$selection_request->set_param( 'query_text', 'Berlin' );

		$action_request = new WP_REST_Request( 'POST', \MinimalMap\Rest\Analytics_Track_Route::get_rest_path() );
		$action_request->set_param( 'event_category', 'action' );
		$action_request->set_param( 'location_id', 12 );
		$action_request->set_param( 'location_title', 'Berlin Mitte' );
		$action_request->set_param( 'interaction_source', 'in_map_card' );
		$action_request->set_param( 'action_type', 'website' );
		$action_request->set_param( 'action_target', 'example.com' );

		$this->assertTrue( rest_do_request( $selection_request )->get_data()['tracked'] );
		$this->assertTrue( rest_do_request( $action_request )->get_data()['tracked'] );

		$selection_summary = $this->analytics->get_summary( '30d', 'selection' );
		$action_summary    = $this->analytics->get_summary( '30d', 'action' );

		$this->assertSame( 1, $selection_summary['totalSelections'] );
		$this->assertSame( 'Berlin Mitte', $selection_summary['breakdowns']['topLocations'][0]['label'] );
		$this->assertSame( 1, $action_summary['totalActions'] );
		$this->assertSame( 'Website', $action_summary['breakdowns']['actionTypeMix'][3]['label'] );
		$this->assertSame( 1, $action_summary['breakdowns']['actionTypeMix'][3]['value'] );
	}

	/**
	 * Summary and queries routes should filter by analytics category.
	 *
	 * @return void
	 */
	public function test_summary_and_queries_routes_filter_by_category() {
		$now = gmdate( 'Y-m-d H:i:s' );

		$this->insert_query_row(
			array(
				'event_category'  => 'search',
				'query_text'      => 'Berlin',
				'query_type'      => 'text',
				'result_count'    => 2,
				'occurred_at_gmt' => $now,
			)
		);
		$this->insert_query_row(
			array(
				'event_category'     => 'selection',
				'location_id'        => 1,
				'location_title'     => 'Berlin Mitte',
				'interaction_source' => 'search_panel',
				'query_text'         => 'Berlin',
				'occurred_at_gmt'    => $now,
			)
		);
		$this->insert_query_row(
			array(
				'event_category'     => 'action',
				'location_id'        => 1,
				'location_title'     => 'Berlin Mitte',
				'interaction_source' => 'in_map_card',
				'action_type'        => 'google_maps',
				'action_target'      => '',
				'occurred_at_gmt'    => $now,
			)
		);

		$summary_request = new WP_REST_Request( 'GET', \MinimalMap\Rest\Analytics_Summary_Route::get_rest_path() );
		$summary_request->set_param( 'category', 'selection' );
		$summary_response = rest_do_request( $summary_request )->get_data();

		$this->assertSame( 'selection', $summary_response['category'] );
		$this->assertSame( 1, $summary_response['totalSelections'] );
		$this->assertSame( 100.0, $summary_response['conversionRate'] );

		$queries_request = new WP_REST_Request( 'GET', \MinimalMap\Rest\Analytics_Queries_Route::get_rest_path() );
		$queries_request->set_param( 'category', 'action' );
		$queries_response = rest_do_request( $queries_request )->get_data();

		$this->assertSame( 1, $queries_response['totalItems'] );
		$this->assertSame( 'action', $queries_response['items'][0]['event_category'] );
		$this->assertSame( 'google_maps', $queries_response['items'][0]['action_type'] );
	}

	/**
	 * Cleanup should remove rows older than the retention window.
	 *
	 * @return void
	 */
	public function test_cleanup_removes_queries_older_than_retention_window() {
		global $wpdb;

		$table_name = $this->analytics->get_table_name();

		$wpdb->insert(
			$table_name,
			array(
				'query_text'      => 'Old query',
				'query_type'      => 'text',
				'result_count'    => 0,
				'occurred_at_gmt' => gmdate( 'Y-m-d H:i:s', time() - ( 120 * DAY_IN_SECONDS ) ),
			),
			array( '%s', '%s', '%d', '%s' )
		);
		$wpdb->insert(
			$table_name,
			array(
				'query_text'      => 'Recent query',
				'query_type'      => 'text',
				'result_count'    => 1,
				'occurred_at_gmt' => gmdate( 'Y-m-d H:i:s', time() - DAY_IN_SECONDS ),
			),
			array( '%s', '%s', '%d', '%s' )
		);

		$this->analytics->cleanup_old_queries();

		$remaining = $wpdb->get_col( "SELECT query_text FROM {$table_name} ORDER BY id ASC" );

		$this->assertSame( array( 'Recent query' ), $remaining );
	}
}
