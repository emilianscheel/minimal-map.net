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
	 * Complianz enabled option name.
	 */
	const OPTION_COMPLIANZ_ENABLED = 'minimal_map_analytics_complianz_enabled';

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
	 * Default summary range key.
	 */
	const DEFAULT_SUMMARY_RANGE = '30d';

	/**
	 * Allowed summary range keys.
	 */
	const SUMMARY_RANGE_KEYS = array( 'today', 'yesterday', '7d', '30d', '90d', 'all' );

	/**
	 * Maximum number of top breakdown items.
	 */
	const SUMMARY_TOP_ITEMS_LIMIT = 5;

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
	 * Whether Complianz script blocking is enabled.
	 *
	 * @return bool
	 */
	public function is_complianz_enabled() {
		return (bool) get_option( self::OPTION_COMPLIANZ_ENABLED, false );
	}

	/**
	 * Persist the Complianz enabled flag.
	 *
	 * @param bool $enabled Desired enabled state.
	 * @return bool
	 */
	public function update_complianz_enabled( $enabled ) {
		update_option( self::OPTION_COMPLIANZ_ENABLED, $enabled ? '1' : '0', false );

		return $this->is_complianz_enabled();
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
	 * Sparkline window in days.
	 */
	const SUMMARY_SERIES_DAYS = 30;

	/**
	 * Return summary analytics metrics.
	 *
	 * @param string $range Selected analytics range.
	 * @return array<string, float|int|null>
	 */
	public function get_summary( $range = self::DEFAULT_SUMMARY_RANGE ) {
		$this->ensure_schema();

		$rows   = $this->get_summary_rows( $range );
		$total  = count( $rows );
		$series = $this->build_summary_series( $rows, $range );

		if ( 0 === $total ) {
			return array(
				'totalSearches'                => 0,
				'searchesToday'                => 0,
				'zeroResultSearches'           => 0,
				'averageNearestDistanceMeters' => null,
				'successRate'                  => 0.0,
				'series'                       => $series,
				'breakdowns'                   => array(
					'queryTypeMix'         => array(),
					'resultDistribution'   => array(),
					'topQueries'           => array(),
					'topZeroResultQueries' => array(),
				),
			);
		}

		$searches_today = $this->count_rows_for_local_date( $rows, new \DateTimeImmutable( 'now', wp_timezone() ) );
		$zero_results   = $this->count_zero_result_rows( $rows );
		$average        = $this->get_average_nearest_distance( $rows );
		$success_rate   = $this->calculate_success_rate( $total, $zero_results );

		return array(
			'totalSearches'                => $total,
			'searchesToday'                => $searches_today,
			'zeroResultSearches'           => $zero_results,
			'averageNearestDistanceMeters' => null !== $average ? (float) $average : null,
			'successRate'                  => $success_rate,
			'series'                       => $series,
			'breakdowns'                   => array(
				'queryTypeMix'         => $this->build_query_type_mix_breakdown( $rows ),
				'resultDistribution'   => $this->build_result_distribution_breakdown( $rows ),
				'topQueries'           => $this->build_top_query_breakdown( $rows, false ),
				'topZeroResultQueries' => $this->build_top_query_breakdown( $rows, true ),
			),
		);
	}

	/**
	 * Build stable daily series for the summary sparklines.
	 *
	 * @param array<int, array<string, mixed>> $rows Analytics rows in the series window.
	 * @param string                           $range Selected analytics range.
	 * @return array<string, array<int, array<string, int|float|string|null>>>
	 */
	private function build_summary_series( $rows, $range ) {
		$bucket_state = $this->initialize_summary_buckets( $range, $rows );
		$buckets      = $bucket_state['buckets'];
		$granularity  = $bucket_state['granularity'];

		foreach ( $rows as $row ) {
			if ( empty( $row['occurred_at_gmt'] ) ) {
				continue;
			}

			try {
				$occurred_at = new \DateTimeImmutable( (string) $row['occurred_at_gmt'], new \DateTimeZone( 'UTC' ) );
			} catch ( \Exception $exception ) {
				continue;
			}

			$local_occurrence = $occurred_at->setTimezone( wp_timezone() );
			$local_key        = $this->format_bucket_key( $local_occurrence, $granularity );

			if ( ! isset( $buckets[ $local_key ] ) ) {
				continue;
			}

			$buckets[ $local_key ]['totalSearches'] += 1;
			$buckets[ $local_key ]['searchesToday'] += 1;
			$buckets[ $local_key ]['successfulSearches'] += isset( $row['result_count'] ) && (int) $row['result_count'] > 0 ? 1 : 0;

			if ( isset( $row['result_count'] ) && 0 === (int) $row['result_count'] ) {
				$buckets[ $local_key ]['zeroResultSearches'] += 1;
			}

			if ( isset( $row['nearest_distance_meters'] ) && null !== $row['nearest_distance_meters'] && '' !== $row['nearest_distance_meters'] ) {
				$buckets[ $local_key ]['averageNearestDistanceMeters_sum'] += (float) $row['nearest_distance_meters'];
				$buckets[ $local_key ]['averageNearestDistanceMeters_count'] += 1;
			}
		}

		$series = array(
			'totalSearches'                => array(),
			'searchesToday'                => array(),
			'zeroResultSearches'           => array(),
			'averageNearestDistanceMeters' => array(),
			'successRate'                  => array(),
		);

		foreach ( $buckets as $date => $day ) {
			$series['totalSearches'][] = array(
				'date'  => $date,
				'value' => $day['totalSearches'],
			);
			$series['searchesToday'][] = array(
				'date'  => $date,
				'value' => $day['searchesToday'],
			);
			$series['zeroResultSearches'][] = array(
				'date'  => $date,
				'value' => $day['zeroResultSearches'],
			);
			$series['averageNearestDistanceMeters'][] = array(
				'date'  => $date,
				'value' => $day['averageNearestDistanceMeters_count'] > 0
					? $day['averageNearestDistanceMeters_sum'] / $day['averageNearestDistanceMeters_count']
					: 0,
			);
			$series['successRate'][] = array(
				'date'  => $date,
				'value' => $day['totalSearches'] > 0
					? ( $day['successfulSearches'] / $day['totalSearches'] ) * 100
					: 0,
			);
		}

		return $series;
	}

	/**
	 * Return query rows for one summary range.
	 *
	 * @param string $range Selected analytics range.
	 * @return array<int, array<string, mixed>>
	 */
	private function get_summary_rows( $range ) {
		global $wpdb;

		$table_name     = $this->get_table_name();
		$where_fragment = $this->build_range_where_fragment( $range );
		$sql            = "SELECT query_text, query_type, result_count, nearest_distance_meters, occurred_at_gmt
			FROM {$table_name}
			{$where_fragment['sql']}
			ORDER BY occurred_at_gmt ASC, id ASC";

		if ( ! empty( $where_fragment['params'] ) ) {
			$sql = $wpdb->prepare( $sql, $where_fragment['params'] );
		}

		$rows = $wpdb->get_results( $sql, ARRAY_A );

		return is_array( $rows ) ? $rows : array();
	}

	/**
	 * Build initialized summary buckets for a range.
	 *
	 * @param string                           $range Selected analytics range.
	 * @param array<int, array<string, mixed>> $rows Summary rows.
	 * @return array<string, mixed>
	 */
	private function initialize_summary_buckets( $range, $rows ) {
		$range_config = $this->get_range_config( $range );
		$granularity  = $range_config['granularity'];
		$buckets      = array();

		if ( 'month' === $granularity ) {
			if ( empty( $rows ) ) {
				return array(
					'granularity' => $granularity,
					'buckets'     => array(),
				);
			}

			$first_occurrence = $this->get_local_occurrence( $rows[0]['occurred_at_gmt'] );
			$cursor           = $first_occurrence->modify( 'first day of this month' )->setTime( 0, 0, 0 );
			$end_month        = ( new \DateTimeImmutable( 'now', wp_timezone() ) )->modify( 'first day of this month' )->setTime( 0, 0, 0 );

			while ( $cursor->getTimestamp() <= $end_month->getTimestamp() ) {
				$key            = $this->format_bucket_key( $cursor, $granularity );
				$buckets[ $key ] = $this->get_empty_summary_bucket();
				$cursor         = $cursor->modify( '+1 month' );
			}

			return array(
				'granularity' => $granularity,
				'buckets'     => $buckets,
			);
		}

		$cursor = $range_config['start_local'];
		$end    = $range_config['end_local'];
		$step   = 'hour' === $granularity ? '+1 hour' : '+1 day';

		while ( $cursor instanceof \DateTimeImmutable && $end instanceof \DateTimeImmutable && $cursor->getTimestamp() < $end->getTimestamp() ) {
			$key            = $this->format_bucket_key( $cursor, $granularity );
			$buckets[ $key ] = $this->get_empty_summary_bucket();
			$cursor         = $cursor->modify( $step );
		}

		return array(
			'granularity' => $granularity,
			'buckets'     => $buckets,
		);
	}

	/**
	 * Return one empty summary bucket.
	 *
	 * @return array<string, float|int>
	 */
	private function get_empty_summary_bucket() {
		return array(
			'totalSearches'                     => 0,
			'searchesToday'                     => 0,
			'zeroResultSearches'                => 0,
			'successfulSearches'                => 0,
			'averageNearestDistanceMeters_sum'  => 0.0,
			'averageNearestDistanceMeters_count'=> 0,
		);
	}

	/**
	 * Return one normalized range configuration.
	 *
	 * @param string $range Selected analytics range.
	 * @return array<string, mixed>
	 */
	private function get_range_config( $range ) {
		$normalized_range = $this->normalize_range_key( $range );
		$timezone         = wp_timezone();
		$today_start      = ( new \DateTimeImmutable( 'now', $timezone ) )->setTime( 0, 0, 0 );

		switch ( $normalized_range ) {
			case 'today':
				$start_local = $today_start;
				$end_local   = $today_start->modify( '+1 day' );
				$granularity = 'hour';
				break;
			case 'yesterday':
				$start_local = $today_start->modify( '-1 day' );
				$end_local   = $today_start;
				$granularity = 'hour';
				break;
			case '7d':
				$start_local = $today_start->modify( '-6 days' );
				$end_local   = $today_start->modify( '+1 day' );
				$granularity = 'day';
				break;
			case '90d':
				$start_local = $today_start->modify( '-89 days' );
				$end_local   = $today_start->modify( '+1 day' );
				$granularity = 'day';
				break;
			case 'all':
				$start_local = null;
				$end_local   = null;
				$granularity = 'month';
				break;
			case '30d':
			default:
				$start_local = $today_start->modify( '-29 days' );
				$end_local   = $today_start->modify( '+1 day' );
				$granularity = 'day';
				break;
		}

		return array(
			'range'       => $normalized_range,
			'granularity' => $granularity,
			'start_local' => $start_local,
			'end_local'   => $end_local,
			'start_gmt'   => $start_local instanceof \DateTimeImmutable
				? $start_local->setTimezone( new \DateTimeZone( 'UTC' ) )->format( 'Y-m-d H:i:s' )
				: null,
			'end_gmt'     => $end_local instanceof \DateTimeImmutable
				? $end_local->setTimezone( new \DateTimeZone( 'UTC' ) )->format( 'Y-m-d H:i:s' )
				: null,
		);
	}

	/**
	 * Build one SQL range fragment with prepared params.
	 *
	 * @param string $range Selected analytics range.
	 * @return array<string, mixed>
	 */
	private function build_range_where_fragment( $range ) {
		$config      = $this->get_range_config( $range );
		$conditions  = array();
		$params      = array();

		if ( ! empty( $config['start_gmt'] ) ) {
			$conditions[] = 'occurred_at_gmt >= %s';
			$params[]     = $config['start_gmt'];
		}

		if ( ! empty( $config['end_gmt'] ) ) {
			$conditions[] = 'occurred_at_gmt < %s';
			$params[]     = $config['end_gmt'];
		}

		return array(
			'sql'    => empty( $conditions ) ? '' : 'WHERE ' . implode( ' AND ', $conditions ),
			'params' => $params,
		);
	}

	/**
	 * Normalize one analytics range key.
	 *
	 * @param string $range Raw range.
	 * @return string
	 */
	private function normalize_range_key( $range ) {
		$normalized = sanitize_key( (string) $range );

		if ( in_array( $normalized, self::SUMMARY_RANGE_KEYS, true ) ) {
			return $normalized;
		}

		return self::DEFAULT_SUMMARY_RANGE;
	}

	/**
	 * Convert one GMT occurrence into the site timezone.
	 *
	 * @param string $occurred_at_gmt Occurrence timestamp in GMT.
	 * @return \DateTimeImmutable
	 */
	private function get_local_occurrence( $occurred_at_gmt ) {
		return ( new \DateTimeImmutable( (string) $occurred_at_gmt, new \DateTimeZone( 'UTC' ) ) )->setTimezone( wp_timezone() );
	}

	/**
	 * Format one time bucket key.
	 *
	 * @param \DateTimeImmutable $date Date to format.
	 * @param string             $granularity Bucket granularity.
	 * @return string
	 */
	private function format_bucket_key( \DateTimeImmutable $date, $granularity ) {
		switch ( $granularity ) {
			case 'hour':
				return $date->format( 'Y-m-d H:00' );
			case 'month':
				return $date->format( 'Y-m' );
			case 'day':
			default:
				return $date->format( 'Y-m-d' );
		}
	}

	/**
	 * Count rows that occurred on one local date.
	 *
	 * @param array<int, array<string, mixed>> $rows Summary rows.
	 * @param \DateTimeImmutable               $target_date Target local date.
	 * @return int
	 */
	private function count_rows_for_local_date( $rows, \DateTimeImmutable $target_date ) {
		$target_key = $target_date->format( 'Y-m-d' );
		$count      = 0;

		foreach ( $rows as $row ) {
			if ( empty( $row['occurred_at_gmt'] ) ) {
				continue;
			}

			try {
				$local_occurrence = $this->get_local_occurrence( $row['occurred_at_gmt'] );
			} catch ( \Exception $exception ) {
				continue;
			}

			if ( $local_occurrence->format( 'Y-m-d' ) === $target_key ) {
				++$count;
			}
		}

		return $count;
	}

	/**
	 * Count zero-result summary rows.
	 *
	 * @param array<int, array<string, mixed>> $rows Summary rows.
	 * @return int
	 */
	private function count_zero_result_rows( $rows ) {
		$count = 0;

		foreach ( $rows as $row ) {
			if ( isset( $row['result_count'] ) && 0 === (int) $row['result_count'] ) {
				++$count;
			}
		}

		return $count;
	}

	/**
	 * Return the average nearest distance across rows with distance data.
	 *
	 * @param array<int, array<string, mixed>> $rows Summary rows.
	 * @return float|null
	 */
	private function get_average_nearest_distance( $rows ) {
		$sum   = 0.0;
		$count = 0;

		foreach ( $rows as $row ) {
			if ( ! isset( $row['nearest_distance_meters'] ) || null === $row['nearest_distance_meters'] || '' === $row['nearest_distance_meters'] ) {
				continue;
			}

			$sum += (float) $row['nearest_distance_meters'];
			++$count;
		}

		if ( 0 === $count ) {
			return null;
		}

		return $sum / $count;
	}

	/**
	 * Calculate one success-rate percentage.
	 *
	 * @param int $total Total searches.
	 * @param int $zero_results Zero-result searches.
	 * @return float|null
	 */
	private function calculate_success_rate( $total, $zero_results ) {
		if ( $total <= 0 ) {
			return 0.0;
		}

		return ( ( $total - $zero_results ) / $total ) * 100;
	}

	/**
	 * Build the query-type mix breakdown.
	 *
	 * @param array<int, array<string, mixed>> $rows Summary rows.
	 * @return array<int, array<string, int|string>>
	 */
	private function build_query_type_mix_breakdown( $rows ) {
		$counts = array_fill_keys( self::QUERY_TYPES, 0 );

		foreach ( $rows as $row ) {
			$type = $this->sanitize_query_type( isset( $row['query_type'] ) ? $row['query_type'] : 'text' );
			$counts[ $type ] += 1;
		}

		return array(
			array(
				'key'   => 'text',
				'label' => __( 'Text', 'minimal-map' ),
				'value' => $counts['text'],
			),
			array(
				'key'   => 'address',
				'label' => __( 'Address', 'minimal-map' ),
				'value' => $counts['address'],
			),
			array(
				'key'   => 'coordinates',
				'label' => __( 'Coordinates', 'minimal-map' ),
				'value' => $counts['coordinates'],
			),
			array(
				'key'   => 'live_location',
				'label' => __( 'Live location', 'minimal-map' ),
				'value' => $counts['live_location'],
			),
		);
	}

	/**
	 * Build the result-distribution breakdown.
	 *
	 * @param array<int, array<string, mixed>> $rows Summary rows.
	 * @return array<int, array<string, int|string>>
	 */
	private function build_result_distribution_breakdown( $rows ) {
		$counts = array(
			'0'   => 0,
			'1'   => 0,
			'2-5' => 0,
			'6+'  => 0,
		);

		foreach ( $rows as $row ) {
			$result_count = isset( $row['result_count'] ) ? max( 0, absint( $row['result_count'] ) ) : 0;

			if ( 0 === $result_count ) {
				$counts['0'] += 1;
			} elseif ( 1 === $result_count ) {
				$counts['1'] += 1;
			} elseif ( $result_count <= 5 ) {
				$counts['2-5'] += 1;
			} else {
				$counts['6+'] += 1;
			}
		}

		return array(
			array(
				'key'   => '0',
				'label' => __( '0 results', 'minimal-map' ),
				'value' => $counts['0'],
			),
			array(
				'key'   => '1',
				'label' => __( '1 result', 'minimal-map' ),
				'value' => $counts['1'],
			),
			array(
				'key'   => '2-5',
				'label' => __( '2-5 results', 'minimal-map' ),
				'value' => $counts['2-5'],
			),
			array(
				'key'   => '6+',
				'label' => __( '6+ results', 'minimal-map' ),
				'value' => $counts['6+'],
			),
		);
	}

	/**
	 * Build the top-query breakdown.
	 *
	 * @param array<int, array<string, mixed>> $rows Summary rows.
	 * @param bool                             $zero_results_only Restrict to zero-result searches.
	 * @return array<int, array<string, int|string>>
	 */
	private function build_top_query_breakdown( $rows, $zero_results_only ) {
		$counts = array();

		foreach ( $rows as $row ) {
			$result_count = isset( $row['result_count'] ) ? max( 0, absint( $row['result_count'] ) ) : 0;

			if ( $zero_results_only && 0 !== $result_count ) {
				continue;
			}

			$label = isset( $row['query_text'] ) ? trim( sanitize_text_field( (string) $row['query_text'] ) ) : '';

			if ( '' === $label ) {
				continue;
			}

			if ( ! isset( $counts[ $label ] ) ) {
				$counts[ $label ] = 0;
			}

			$counts[ $label ] += 1;
		}

		if ( empty( $counts ) ) {
			return array();
		}

		uksort(
			$counts,
			static function ( $left, $right ) use ( $counts ) {
				$value_compare = $counts[ $right ] <=> $counts[ $left ];

				if ( 0 !== $value_compare ) {
					return $value_compare;
				}

				return strcasecmp( $left, $right );
			}
		);

		$items = array();

		foreach ( array_slice( $counts, 0, self::SUMMARY_TOP_ITEMS_LIMIT, true ) as $label => $value ) {
			$items[] = array(
				'key'   => $label,
				'label' => $label,
				'value' => $value,
			);
		}

		return $items;
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
		$range    = isset( $args['range'] ) ? $this->normalize_range_key( $args['range'] ) : self::DEFAULT_SUMMARY_RANGE;
		$search   = isset( $args['search'] ) ? trim( sanitize_text_field( (string) $args['search'] ) ) : '';
		$offset   = ( $page - 1 ) * $per_page;
		$where_conditions = array();
		$params   = array();

		$table_name = $this->get_table_name();
		$range_where = $this->build_range_where_fragment( $range );

		if ( ! empty( $range_where['sql'] ) ) {
			$where_conditions[] = ltrim( str_replace( 'WHERE ', '', $range_where['sql'] ) );
			$params             = array_merge( $params, $range_where['params'] );
		}

		if ( '' !== $search ) {
			$where_conditions[] = 'query_text LIKE %s';
			$params[]           = '%' . $wpdb->esc_like( $search ) . '%';
		}

		$where     = empty( $where_conditions ) ? '' : 'WHERE ' . implode( ' AND ', $where_conditions );
		$count_sql = "SELECT COUNT(*) FROM {$table_name} {$where}";
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
