<?php
/**
 * Analytics storage and settings service.
 *
 * @package Minimal_Map
 */

namespace MinimalMap\Analytics;

/**
 * Provides analytics settings, persistence, and reporting.
 */
class Analytics {
	/**
	 * Stored schema version.
	 */
	const SCHEMA_VERSION = '1';

	/**
	 * Enabled option name.
	 */
	const OPTION_ENABLED = 'minimal_map_analytics_enabled';

	/**
	 * Schema version option name.
	 */
	const OPTION_SCHEMA_VERSION = 'minimal_map_analytics_schema_version';

	/**
	 * Cleanup cron hook.
	 */
	const CLEANUP_HOOK = 'minimal_map_analytics_cleanup_daily';

	/**
	 * Retention period in days.
	 */
	const RETENTION_DAYS = 90;

	/**
	 * Allowed query types.
	 *
	 * @var string[]
	 */
	const QUERY_TYPES = array( 'text', 'address', 'coordinates', 'live_location' );

	/**
	 * Return the analytics table name.
	 *
	 * @return string
	 */
	public function get_table_name() {
		global $wpdb;

		return $wpdb->prefix . 'minimal_map_analytics_queries';
	}

	/**
	 * Ensure the analytics schema exists.
	 *
	 * @return void
	 */
	public function ensure_schema() {
		if ( self::SCHEMA_VERSION === get_option( self::OPTION_SCHEMA_VERSION ) && $this->table_exists() ) {
			return;
		}

		require_once ABSPATH . 'wp-admin/includes/upgrade.php';

		$table_name      = $this->get_table_name();
		$charset_collate = $this->get_charset_collate();
		$sql             = "CREATE TABLE {$table_name} (
			id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
			query_text varchar(255) NOT NULL,
			query_type varchar(32) NOT NULL,
			result_count int(10) unsigned NOT NULL DEFAULT 0,
			nearest_distance_meters int(10) unsigned NULL DEFAULT NULL,
			occurred_at_gmt datetime NOT NULL,
			PRIMARY KEY  (id),
			KEY occurred_at_gmt (occurred_at_gmt),
			KEY query_type (query_type)
		) {$charset_collate};";

		dbDelta( $sql );
		update_option( self::OPTION_SCHEMA_VERSION, self::SCHEMA_VERSION, false );
	}

	/**
	 * Schedule analytics cleanup if needed.
	 *
	 * @return void
	 */
	public function schedule_cleanup() {
		if ( wp_next_scheduled( self::CLEANUP_HOOK ) ) {
			return;
		}

		wp_schedule_event( time() + HOUR_IN_SECONDS, 'daily', self::CLEANUP_HOOK );
	}

	/**
	 * Delete raw analytics rows older than the retention window.
	 *
	 * @return void
	 */
	public function cleanup_old_queries() {
		if ( ! $this->table_exists() ) {
			return;
		}

		global $wpdb;

		$table_name = $this->get_table_name();
		$cutoff     = gmdate( 'Y-m-d H:i:s', time() - ( self::RETENTION_DAYS * DAY_IN_SECONDS ) );

		$wpdb->query(
			$wpdb->prepare(
				"DELETE FROM {$table_name} WHERE occurred_at_gmt < %s",
				$cutoff
			)
		);
	}

	/**
	 * Whether analytics tracking is enabled.
	 *
	 * @return bool
	 */
	public function is_enabled() {
		return (bool) get_option( self::OPTION_ENABLED, false );
	}

	/**
	 * Persist the analytics enabled flag.
	 *
	 * @param bool $enabled Desired enabled state.
	 * @return bool
	 */
	public function update_enabled( $enabled ) {
		update_option( self::OPTION_ENABLED, $enabled ? '1' : '0', false );

		return $this->is_enabled();
	}

	/**
	 * Track one analytics query if analytics is enabled.
	 *
	 * @param array<string, mixed> $payload Raw query payload.
	 * @return bool
	 */
	public function track_query( $payload ) {
		if ( ! $this->is_enabled() ) {
			return false;
		}

		$normalized = $this->normalize_track_payload( $payload );

		if ( '' === $normalized['query_text'] ) {
			return false;
		}

		$this->ensure_schema();

		global $wpdb;

		$inserted = $wpdb->insert(
			$this->get_table_name(),
			array(
				'query_text'              => $normalized['query_text'],
				'query_type'              => $normalized['query_type'],
				'result_count'            => $normalized['result_count'],
				'nearest_distance_meters' => $normalized['nearest_distance_meters'],
				'occurred_at_gmt'         => gmdate( 'Y-m-d H:i:s' ),
			),
			array( '%s', '%s', '%d', '%d', '%s' )
		);

		return false !== $inserted;
	}

	/**
	 * Return summary analytics metrics.
	 *
	 * @return array<string, float|int|null>
	 */
	public function get_summary() {
		$this->ensure_schema();

		global $wpdb;

		$table_name = $this->get_table_name();
		$total      = (int) $wpdb->get_var( "SELECT COUNT(*) FROM {$table_name}" );

		if ( 0 === $total ) {
			return array(
				'totalSearches'                => 0,
				'searchesToday'                => 0,
				'zeroResultSearches'           => 0,
				'averageNearestDistanceMeters' => null,
			);
		}

		$today_start = new \DateTimeImmutable( 'now', wp_timezone() );
		$today_start = $today_start->setTime( 0, 0, 0 );
		$today_gmt   = $today_start->setTimezone( new \DateTimeZone( 'UTC' ) )->format( 'Y-m-d H:i:s' );

		$searches_today = (int) $wpdb->get_var(
			$wpdb->prepare(
				"SELECT COUNT(*) FROM {$table_name} WHERE occurred_at_gmt >= %s",
				$today_gmt
			)
		);
		$zero_results   = (int) $wpdb->get_var( "SELECT COUNT(*) FROM {$table_name} WHERE result_count = 0" );
		$average        = $wpdb->get_var( "SELECT AVG(nearest_distance_meters) FROM {$table_name} WHERE nearest_distance_meters IS NOT NULL" );

		return array(
			'totalSearches'                => $total,
			'searchesToday'                => $searches_today,
			'zeroResultSearches'           => $zero_results,
			'averageNearestDistanceMeters' => null !== $average ? (float) $average : null,
		);
	}

	/**
	 * Query paginated analytics rows.
	 *
	 * @param array<string, mixed> $args Query arguments.
	 * @return array<string, mixed>
	 */
	public function query_queries( $args = array() ) {
		$this->ensure_schema();

		global $wpdb;

		$page     = max( 1, isset( $args['page'] ) ? absint( $args['page'] ) : 1 );
		$per_page = max( 1, min( 50, isset( $args['per_page'] ) ? absint( $args['per_page'] ) : 10 ) );
		$search   = isset( $args['search'] ) ? trim( sanitize_text_field( (string) $args['search'] ) ) : '';
		$offset   = ( $page - 1 ) * $per_page;
		$where    = '';
		$params   = array();

		if ( '' !== $search ) {
			$where    = 'WHERE query_text LIKE %s';
			$params[] = '%' . $wpdb->esc_like( $search ) . '%';
		}

		$table_name = $this->get_table_name();
		$count_sql  = "SELECT COUNT(*) FROM {$table_name} {$where}";
		$items_sql  = "SELECT id, query_text, query_type, result_count, nearest_distance_meters, occurred_at_gmt
			FROM {$table_name}
			{$where}
			ORDER BY occurred_at_gmt DESC, id DESC
			LIMIT %d OFFSET %d";

		$total_items = (int) (
			$params
				? $wpdb->get_var( $wpdb->prepare( $count_sql, $params ) )
				: $wpdb->get_var( $count_sql )
		);

		$item_params   = $params;
		$item_params[] = $per_page;
		$item_params[] = $offset;
		$query         = $wpdb->prepare( $items_sql, $item_params );
		$rows          = $wpdb->get_results( $query, ARRAY_A );

		return array(
			'items'      => array_map( array( $this, 'normalize_row' ), is_array( $rows ) ? $rows : array() ),
			'totalItems' => $total_items,
			'totalPages' => max( 1, (int) ceil( $total_items / $per_page ) ),
		);
	}

	/**
	 * Normalize one raw analytics row for REST responses.
	 *
	 * @param array<string, mixed> $row Raw database row.
	 * @return array<string, mixed>
	 */
	private function normalize_row( $row ) {
		$occurred_at = isset( $row['occurred_at_gmt'] ) ? strtotime( (string) $row['occurred_at_gmt'] . ' UTC' ) : false;

		return array(
			'id'                     => isset( $row['id'] ) ? absint( $row['id'] ) : 0,
			'query_text'             => isset( $row['query_text'] ) ? sanitize_text_field( (string) $row['query_text'] ) : '',
			'query_type'             => $this->sanitize_query_type( isset( $row['query_type'] ) ? $row['query_type'] : 'text' ),
			'result_count'           => isset( $row['result_count'] ) ? max( 0, absint( $row['result_count'] ) ) : 0,
			'nearest_distance_meters' => isset( $row['nearest_distance_meters'] ) && null !== $row['nearest_distance_meters']
				? max( 0, absint( $row['nearest_distance_meters'] ) )
				: null,
			'occurred_at_gmt'        => false !== $occurred_at ? gmdate( 'c', $occurred_at ) : gmdate( 'c' ),
		);
	}

	/**
	 * Normalize and sanitize one tracking payload.
	 *
	 * @param array<string, mixed> $payload Raw tracking payload.
	 * @return array<string, mixed>
	 */
	private function normalize_track_payload( $payload ) {
		$query_text = isset( $payload['query_text'] ) ? sanitize_text_field( (string) $payload['query_text'] ) : '';
		$query_text = trim( $query_text );

		if ( strlen( $query_text ) > 255 ) {
			$query_text = substr( $query_text, 0, 255 );
		}

		$nearest_distance = null;

		if ( isset( $payload['nearest_distance_meters'] ) && '' !== $payload['nearest_distance_meters'] && null !== $payload['nearest_distance_meters'] ) {
			$nearest_distance = max( 0, (int) round( (float) $payload['nearest_distance_meters'] ) );
		}

		return array(
			'query_text'              => $query_text,
			'query_type'              => $this->sanitize_query_type( isset( $payload['query_type'] ) ? $payload['query_type'] : 'text' ),
			'result_count'            => isset( $payload['result_count'] ) ? max( 0, absint( $payload['result_count'] ) ) : 0,
			'nearest_distance_meters' => $nearest_distance,
		);
	}

	/**
	 * Sanitize a query type into the supported set.
	 *
	 * @param mixed $query_type Raw query type.
	 * @return string
	 */
	private function sanitize_query_type( $query_type ) {
		$normalized = sanitize_key( (string) $query_type );

		if ( in_array( $normalized, self::QUERY_TYPES, true ) ) {
			return $normalized;
		}

		return 'text';
	}

	/**
	 * Whether the analytics table exists.
	 *
	 * @return bool
	 */
	private function table_exists() {
		global $wpdb;

		$table_name = $this->get_table_name();
		$result     = $wpdb->get_var(
			$wpdb->prepare( 'SHOW TABLES LIKE %s', $table_name )
		);

		return $table_name === $result;
	}

	/**
	 * Return the current charset/collation fragment for dbDelta.
	 *
	 * @return string
	 */
	private function get_charset_collate() {
		global $wpdb;

		if ( method_exists( $wpdb, 'get_charset_collate' ) ) {
			return $wpdb->get_charset_collate();
		}

		return '';
	}
}
