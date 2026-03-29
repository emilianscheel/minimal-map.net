<?php
/**
 * Admin query REST routes.
 *
 * @package Minimal_Map
 */

namespace MinimalMap\Rest;

use MinimalMap\Collections\Collection_Post_Type;
use MinimalMap\Locations\Location_Post_Type;
use MinimalMap\Logos\Logo_Post_Type;
use MinimalMap\Markers\Marker_Post_Type;
use MinimalMap\Tags\Tag_Taxonomy;
use WP_Post;
use WP_Query;
use WP_REST_Request;

/**
 * Provides paginated admin read endpoints.
 */
class Admin_Query_Route {
	/**
	 * Namespace for plugin REST routes.
	 */
	const REST_NAMESPACE = 'minimal-map/v1';

	/**
	 * Admin route base.
	 */
	const REST_ROUTE_BASE = '/admin';

	/**
	 * Maximum per-page size.
	 */
	const MAX_PER_PAGE = 100;

	/**
	 * Register all admin routes.
	 *
	 * @return void
	 */
	public function register() {
		register_rest_route(
			self::REST_NAMESPACE,
			self::REST_ROUTE_BASE . '/locations',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( $this, 'handle_locations_request' ),
				'permission_callback' => array( $this, 'can_manage_admin_data' ),
				'args'                => $this->get_location_query_args(),
			)
		);

		register_rest_route(
			self::REST_NAMESPACE,
			self::REST_ROUTE_BASE . '/location-lookups',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( $this, 'handle_location_lookups_request' ),
				'permission_callback' => array( $this, 'can_manage_admin_data' ),
				'args'                => array_merge(
					$this->get_pagination_args(),
					array(
						'resource' => array(
							'required'          => true,
							'type'              => 'string',
							'enum'              => array( 'collections', 'logos', 'markers', 'tags' ),
							'sanitize_callback' => 'sanitize_key',
						),
					)
				),
			)
		);

		register_rest_route(
			self::REST_NAMESPACE,
			self::REST_ROUTE_BASE . '/markers',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( $this, 'handle_markers_request' ),
				'permission_callback' => array( $this, 'can_manage_admin_data' ),
				'args'                => $this->get_pagination_args(),
			)
		);

		register_rest_route(
			self::REST_NAMESPACE,
			self::REST_ROUTE_BASE . '/collections',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( $this, 'handle_collections_request' ),
				'permission_callback' => array( $this, 'can_manage_admin_data' ),
				'args'                => $this->get_pagination_args(),
			)
		);

		register_rest_route(
			self::REST_NAMESPACE,
			self::REST_ROUTE_BASE . '/logos',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( $this, 'handle_logos_request' ),
				'permission_callback' => array( $this, 'can_manage_admin_data' ),
				'args'                => $this->get_pagination_args(),
			)
		);

		register_rest_route(
			self::REST_NAMESPACE,
			self::REST_ROUTE_BASE . '/tags',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( $this, 'handle_tags_request' ),
				'permission_callback' => array( $this, 'can_manage_admin_data' ),
				'args'                => $this->get_pagination_args(),
			)
		);
	}

	/**
	 * Whether the current user can manage admin data.
	 *
	 * @return bool
	 */
	public function can_manage_admin_data() {
		return current_user_can( 'manage_options' );
	}

	/**
	 * Handle admin location list queries.
	 *
	 * @param WP_REST_Request $request Request object.
	 * @return \WP_REST_Response
	 */
	public function handle_locations_request( WP_REST_Request $request ) {
		$params = $this->get_location_query_params( $request );
		$query  = $this->query_location_posts(
			$params['page'],
			$params['per_page'],
			$params['search'],
			$params['orderby'],
			$params['order']
		);

		return rest_ensure_response(
			$this->build_paginated_payload(
				$this->build_admin_location_items( $query['posts'] ),
				$params['page'],
				$params['per_page'],
				$query['total_items']
			)
		);
	}

	/**
	 * Handle admin lookup queries.
	 *
	 * @param WP_REST_Request $request Request object.
	 * @return \WP_REST_Response
	 */
	public function handle_location_lookups_request( WP_REST_Request $request ) {
		$params   = $this->get_pagination_params( $request );
		$resource = sanitize_key( (string) $request->get_param( 'resource' ) );

		switch ( $resource ) {
			case 'collections':
				$query = $this->query_collection_posts( $params['page'], $params['per_page'], $params['search'] );

				return rest_ensure_response(
					$this->build_paginated_payload(
						array_map( array( $this, 'build_collection_lookup_item' ), $query['posts'] ),
						$params['page'],
						$params['per_page'],
						$query['total_items']
					)
				);

			case 'logos':
				$query = $this->query_logo_posts( $params['page'], $params['per_page'], $params['search'] );

				return rest_ensure_response(
					$this->build_paginated_payload(
						array_map( array( $this, 'build_logo_item' ), $query['posts'] ),
						$params['page'],
						$params['per_page'],
						$query['total_items']
					)
				);

			case 'markers':
				$query = $this->query_marker_posts( $params['page'], $params['per_page'], $params['search'] );

				return rest_ensure_response(
					$this->build_paginated_payload(
						array_map( array( $this, 'build_marker_item' ), $query['posts'] ),
						$params['page'],
						$params['per_page'],
						$query['total_items']
					)
				);

			case 'tags':
				$query = $this->query_tag_terms( $params['page'], $params['per_page'], $params['search'] );

				return rest_ensure_response(
					$this->build_paginated_payload(
						$query['items'],
						$params['page'],
						$params['per_page'],
						$query['total_items']
					)
				);
		}

		return rest_ensure_response(
			$this->build_paginated_payload( array(), $params['page'], $params['per_page'], 0 )
		);
	}

	/**
	 * Handle admin marker list queries.
	 *
	 * @param WP_REST_Request $request Request object.
	 * @return \WP_REST_Response
	 */
	public function handle_markers_request( WP_REST_Request $request ) {
		$params = $this->get_pagination_params( $request );
		$query  = $this->query_marker_posts( $params['page'], $params['per_page'], $params['search'] );

		return rest_ensure_response(
			$this->build_paginated_payload(
				array_map( array( $this, 'build_marker_item' ), $query['posts'] ),
				$params['page'],
				$params['per_page'],
				$query['total_items']
			)
		);
	}

	/**
	 * Handle admin collection list queries.
	 *
	 * @param WP_REST_Request $request Request object.
	 * @return \WP_REST_Response
	 */
	public function handle_collections_request( WP_REST_Request $request ) {
		$params = $this->get_pagination_params( $request );
		$query  = $this->query_collection_posts( $params['page'], $params['per_page'], $params['search'] );

		return rest_ensure_response(
			$this->build_paginated_payload(
				$this->build_collection_items( $query['posts'] ),
				$params['page'],
				$params['per_page'],
				$query['total_items']
			)
		);
	}

	/**
	 * Handle admin logo list queries.
	 *
	 * @param WP_REST_Request $request Request object.
	 * @return \WP_REST_Response
	 */
	public function handle_logos_request( WP_REST_Request $request ) {
		$params = $this->get_pagination_params( $request );
		$query  = $this->query_logo_posts( $params['page'], $params['per_page'], $params['search'] );

		return rest_ensure_response(
			$this->build_paginated_payload(
				array_map( array( $this, 'build_logo_item' ), $query['posts'] ),
				$params['page'],
				$params['per_page'],
				$query['total_items']
			)
		);
	}

	/**
	 * Handle admin tag list queries.
	 *
	 * @param WP_REST_Request $request Request object.
	 * @return \WP_REST_Response
	 */
	public function handle_tags_request( WP_REST_Request $request ) {
		$params = $this->get_pagination_params( $request );
		$query  = $this->query_tag_terms( $params['page'], $params['per_page'], $params['search'] );

		return rest_ensure_response(
			$this->build_paginated_payload(
				$query['items'],
				$params['page'],
				$params['per_page'],
				$query['total_items']
			)
		);
	}

	/**
	 * Get the locations query path.
	 *
	 * @return string
	 */
	public static function get_locations_rest_path() {
		return '/' . self::REST_NAMESPACE . self::REST_ROUTE_BASE . '/locations';
	}

	/**
	 * Get the location lookups query path.
	 *
	 * @return string
	 */
	public static function get_location_lookups_rest_path() {
		return '/' . self::REST_NAMESPACE . self::REST_ROUTE_BASE . '/location-lookups';
	}

	/**
	 * Get the markers query path.
	 *
	 * @return string
	 */
	public static function get_markers_rest_path() {
		return '/' . self::REST_NAMESPACE . self::REST_ROUTE_BASE . '/markers';
	}

	/**
	 * Get the collections query path.
	 *
	 * @return string
	 */
	public static function get_collections_rest_path() {
		return '/' . self::REST_NAMESPACE . self::REST_ROUTE_BASE . '/collections';
	}

	/**
	 * Get the logos query path.
	 *
	 * @return string
	 */
	public static function get_logos_rest_path() {
		return '/' . self::REST_NAMESPACE . self::REST_ROUTE_BASE . '/logos';
	}

	/**
	 * Get the tags query path.
	 *
	 * @return string
	 */
	public static function get_tags_rest_path() {
		return '/' . self::REST_NAMESPACE . self::REST_ROUTE_BASE . '/tags';
	}

	/**
	 * Build shared pagination args.
	 *
	 * @return array<string, array<string, mixed>>
	 */
	private function get_pagination_args() {
		return array(
			'page'     => array(
				'required'          => false,
				'type'              => 'integer',
				'default'           => 1,
				'sanitize_callback' => 'absint',
			),
			'per_page' => array(
				'required'          => false,
				'type'              => 'integer',
				'default'           => 20,
				'sanitize_callback' => 'absint',
			),
			'search'   => array(
				'required'          => false,
				'type'              => 'string',
				'default'           => '',
				'sanitize_callback' => 'sanitize_text_field',
			),
		);
	}

	/**
	 * Build locations query args, including supported sort inputs.
	 *
	 * @return array<string, array<string, mixed>>
	 */
	private function get_location_query_args() {
		return array_merge(
			$this->get_pagination_args(),
			array(
				'orderby' => array(
					'required'          => false,
					'type'              => 'string',
					'default'           => 'title',
					'sanitize_callback' => 'sanitize_key',
				),
				'order'   => array(
					'required'          => false,
					'type'              => 'string',
					'default'           => 'asc',
					'sanitize_callback' => 'sanitize_key',
				),
			)
		);
	}

	/**
	 * Normalize pagination params from one request.
	 *
	 * @param WP_REST_Request $request Request object.
	 * @return array<string, int|string>
	 */
	private function get_pagination_params( WP_REST_Request $request ) {
		$page     = max( 1, absint( $request->get_param( 'page' ) ) );
		$per_page = max( 1, min( self::MAX_PER_PAGE, absint( $request->get_param( 'per_page' ) ) ) );
		$search   = sanitize_text_field( (string) $request->get_param( 'search' ) );

		return array(
			'page'     => $page,
			'per_page' => $per_page,
			'search'   => $search,
		);
	}

	/**
	 * Normalize one locations query request.
	 *
	 * @param WP_REST_Request $request Request object.
	 * @return array<string, int|string>
	 */
	private function get_location_query_params( WP_REST_Request $request ) {
		$params  = $this->get_pagination_params( $request );
		$orderby = 'title';
		$order   = 'desc' === strtolower( (string) $request->get_param( 'order' ) ) ? 'DESC' : 'ASC';

		if ( 'title' !== sanitize_key( (string) $request->get_param( 'orderby' ) ) ) {
			$orderby = 'title';
		}

		return array_merge(
			$params,
			array(
				'orderby' => $orderby,
				'order'   => $order,
			)
		);
	}

	/**
	 * Query paginated locations.
	 *
	 * @param int    $page Page number.
	 * @param int    $per_page Page size.
	 * @param string $search Search term.
	 * @return array<string, mixed>
	 */
	private function query_location_posts( $page, $per_page, $search, $orderby = 'title', $order = 'ASC' ) {
		if ( '' === $search ) {
			$query = new WP_Query(
				array(
					'post_status'            => 'publish',
					'post_type'              => Location_Post_Type::POST_TYPE,
					'posts_per_page'         => $per_page,
					'paged'                  => $page,
					'orderby'                => 'title' === $orderby ? 'title' : 'title',
					'order'                  => 'DESC' === $order ? 'DESC' : 'ASC',
					'update_post_meta_cache' => true,
					'update_post_term_cache' => false,
				)
			);

			return array(
				'posts'       => $query->posts,
				'total_items' => (int) $query->found_posts,
			);
		}

		$posts = get_posts(
			array(
				'post_status'            => 'publish',
				'post_type'              => Location_Post_Type::POST_TYPE,
				'posts_per_page'         => -1,
				'orderby'                => 'title' === $orderby ? 'title' : 'title',
				'order'                  => 'DESC' === $order ? 'DESC' : 'ASC',
				'update_post_meta_cache' => true,
				'update_post_term_cache' => false,
			)
		);

		$filtered_posts = array_values(
			array_filter(
				$posts,
				function ( $post ) use ( $search ) {
					return $post instanceof WP_Post && $this->matches_location_search( $post, $search );
				}
			)
		);

		usort(
			$filtered_posts,
			static function ( WP_Post $left, WP_Post $right ) use ( $order ) {
				$comparison = strcasecmp( $left->post_title, $right->post_title );

				if ( 0 === $comparison ) {
					return 0;
				}

				return 'DESC' === $order ? -$comparison : $comparison;
			}
		);

		$offset = ( $page - 1 ) * $per_page;

		return array(
			'posts'       => array_slice( $filtered_posts, $offset, $per_page ),
			'total_items' => count( $filtered_posts ),
		);
	}

	/**
	 * Query paginated collections.
	 *
	 * @param int    $page Page number.
	 * @param int    $per_page Page size.
	 * @param string $search Search term.
	 * @return array<string, mixed>
	 */
	private function query_collection_posts( $page, $per_page, $search ) {
		$args = array(
			'post_status'            => 'publish',
			'post_type'              => Collection_Post_Type::POST_TYPE,
			'posts_per_page'         => $per_page,
			'paged'                  => $page,
			'orderby'                => 'title',
			'order'                  => 'ASC',
			'update_post_meta_cache' => true,
			'update_post_term_cache' => false,
		);

		if ( '' !== $search ) {
			$args['s'] = $search;
		}

		$query = new WP_Query( $args );

		return array(
			'posts'       => $query->posts,
			'total_items' => (int) $query->found_posts,
		);
	}

	/**
	 * Query paginated markers.
	 *
	 * @param int    $page Page number.
	 * @param int    $per_page Page size.
	 * @param string $search Search term.
	 * @return array<string, mixed>
	 */
	private function query_marker_posts( $page, $per_page, $search ) {
		$args = array(
			'post_status'            => 'publish',
			'post_type'              => Marker_Post_Type::POST_TYPE,
			'posts_per_page'         => $per_page,
			'paged'                  => $page,
			'orderby'                => 'title',
			'order'                  => 'ASC',
			'update_post_meta_cache' => false,
			'update_post_term_cache' => false,
		);

		if ( '' !== $search ) {
			$args['s'] = $search;
		}

		$query = new WP_Query( $args );

		return array(
			'posts'       => $query->posts,
			'total_items' => (int) $query->found_posts,
		);
	}

	/**
	 * Query paginated logos.
	 *
	 * @param int    $page Page number.
	 * @param int    $per_page Page size.
	 * @param string $search Search term.
	 * @return array<string, mixed>
	 */
	private function query_logo_posts( $page, $per_page, $search ) {
		$args = array(
			'post_status'            => 'publish',
			'post_type'              => Logo_Post_Type::POST_TYPE,
			'posts_per_page'         => $per_page,
			'paged'                  => $page,
			'orderby'                => 'title',
			'order'                  => 'ASC',
			'update_post_meta_cache' => false,
			'update_post_term_cache' => false,
		);

		if ( '' !== $search ) {
			$args['s'] = $search;
		}

		$query = new WP_Query( $args );

		return array(
			'posts'       => $query->posts,
			'total_items' => (int) $query->found_posts,
		);
	}

	/**
	 * Query paginated tag terms.
	 *
	 * @param int    $page Page number.
	 * @param int    $per_page Page size.
	 * @param string $search Search term.
	 * @return array<string, mixed>
	 */
	private function query_tag_terms( $page, $per_page, $search ) {
		$terms = get_terms(
			array(
				'taxonomy'   => Tag_Taxonomy::TAXONOMY,
				'hide_empty' => false,
				'search'     => $search,
			)
		);

		if ( is_wp_error( $terms ) ) {
			return array(
				'items'       => array(),
				'total_items' => 0,
			);
		}

		$offset = ( $page - 1 ) * $per_page;
		$slice  = array_slice( $terms, $offset, $per_page );

		return array(
			'items'       => array_map( array( $this, 'build_tag_item' ), $slice ),
			'total_items' => count( $terms ),
		);
	}

	/**
	 * Build location list items with denormalized relations.
	 *
	 * @param WP_Post[] $posts Location posts.
	 * @return array<int, array<string, mixed>>
	 */
	private function build_admin_location_items( $posts ) {
		$location_ids = array_values(
			array_map(
				static function ( WP_Post $post ) {
					return (int) $post->ID;
				},
				$posts
			)
		);

		$collections_by_location = $this->get_collection_summaries_by_location_ids( $location_ids );
		$tags_by_location        = $this->get_tags_by_location_ids( $location_ids );
		$logo_ids               = array();
		$marker_ids             = array();

		foreach ( $location_ids as $location_id ) {
			$logo_id = absint( get_post_meta( $location_id, 'logo_id', true ) );
			if ( $logo_id > 0 ) {
				$logo_ids[] = $logo_id;
			}

			$marker_id = absint( get_post_meta( $location_id, 'marker_id', true ) );
			if ( $marker_id > 0 ) {
				$marker_ids[] = $marker_id;
			}
		}

		$logos_by_id   = $this->get_logos_by_ids( array_values( array_unique( $logo_ids ) ) );
		$markers_by_id = $this->get_markers_by_ids( array_values( array_unique( $marker_ids ) ) );

		return array_map(
			function ( WP_Post $post ) use ( $collections_by_location, $logos_by_id, $markers_by_id, $tags_by_location ) {
				$location_id = (int) $post->ID;
				$logo_id     = absint( get_post_meta( $location_id, 'logo_id', true ) );
				$marker_id   = absint( get_post_meta( $location_id, 'marker_id', true ) );
				$tags        = $tags_by_location[ $location_id ] ?? array();

				return array(
					'id'                 => $location_id,
					'title'              => $this->get_payload_post_title( $post ),
					'telephone'          => (string) get_post_meta( $location_id, 'telephone', true ),
					'email'              => (string) get_post_meta( $location_id, 'email', true ),
					'website'            => (string) get_post_meta( $location_id, 'website', true ),
					'street'             => (string) get_post_meta( $location_id, 'street', true ),
					'house_number'       => (string) get_post_meta( $location_id, 'house_number', true ),
					'postal_code'        => (string) get_post_meta( $location_id, 'postal_code', true ),
					'city'               => (string) get_post_meta( $location_id, 'city', true ),
					'state'              => (string) get_post_meta( $location_id, 'state', true ),
					'country'            => (string) get_post_meta( $location_id, 'country', true ),
					'latitude'           => (string) get_post_meta( $location_id, 'latitude', true ),
					'longitude'          => (string) get_post_meta( $location_id, 'longitude', true ),
					'logo_id'            => $logo_id,
					'marker_id'          => $marker_id,
					'marker_color'       => (string) get_post_meta( $location_id, 'marker_color', true ),
					'is_hidden'          => rest_sanitize_boolean( get_post_meta( $location_id, 'is_hidden', true ) ),
					'opening_hours'      => get_post_meta( $location_id, 'opening_hours', true ),
					'opening_hours_notes'=> (string) get_post_meta( $location_id, 'opening_hours_notes', true ),
					'social_media'       => $this->normalize_social_media( get_post_meta( $location_id, 'social_media', true ) ),
					'tag_ids'            => array_values(
						array_map(
							static function ( $tag ) {
								return (int) $tag['id'];
							},
							$tags
						)
					),
					'markerContent'      => isset( $markers_by_id[ $marker_id ]['content'] ) ? $markers_by_id[ $marker_id ]['content'] : null,
					'collections'        => $collections_by_location[ $location_id ] ?? array(),
					'logo'               => isset( $logos_by_id[ $logo_id ] ) ? $logos_by_id[ $logo_id ] : null,
					'marker'             => isset( $markers_by_id[ $marker_id ] ) ? $markers_by_id[ $marker_id ] : null,
					'tags_data'          => $tags,
				);
			},
			$posts
		);
	}

	/**
	 * Build collection page items with preview points.
	 *
	 * @param WP_Post[] $posts Collection posts.
	 * @return array<int, array<string, mixed>>
	 */
	private function build_collection_items( $posts ) {
		$preview_source = $this->get_collection_preview_source();

		return array_map(
			function ( WP_Post $post ) use ( $preview_source ) {
				$location_ids = $this->normalize_location_ids(
					get_post_meta( $post->ID, Collection_Post_Type::LOCATION_IDS_META_KEY, true )
				);

				return array(
					'id'                => (int) $post->ID,
					'title'             => $this->get_payload_post_title( $post ),
					'location_ids'      => $location_ids,
					'location_count'    => count( $location_ids ),
					'preview_locations' => $this->build_collection_preview_locations( $post, $location_ids, $preview_source ),
				);
			},
			$posts
		);
	}

	/**
	 * Build one collection lookup item.
	 *
	 * @param WP_Post $post Collection post.
	 * @return array<string, mixed>
	 */
	private function build_collection_lookup_item( WP_Post $post ) {
		return array(
			'id'           => (int) $post->ID,
			'title'        => $this->get_payload_post_title( $post ),
			'location_ids' => $this->normalize_location_ids(
				get_post_meta( $post->ID, Collection_Post_Type::LOCATION_IDS_META_KEY, true )
			),
		);
	}

	/**
	 * Build one marker item.
	 *
	 * @param WP_Post $post Marker post.
	 * @return array<string, mixed>
	 */
	private function build_marker_item( WP_Post $post ) {
		return array(
			'id'      => (int) $post->ID,
			'title'   => $this->get_payload_post_title( $post ),
			'content' => (string) $post->post_content,
		);
	}

	/**
	 * Build one logo item.
	 *
	 * @param WP_Post $post Logo post.
	 * @return array<string, mixed>
	 */
	private function build_logo_item( WP_Post $post ) {
		return array(
			'id'      => (int) $post->ID,
			'title'   => $this->get_payload_post_title( $post ),
			'content' => (string) $post->post_content,
		);
	}

	/**
	 * Build one tag item.
	 *
	 * @param \WP_Term $term Tag term.
	 * @return array<string, mixed>
	 */
	private function build_tag_item( $term ) {
		$background_color = (string) get_term_meta( $term->term_id, 'background_color', true );
		$foreground_color = (string) get_term_meta( $term->term_id, 'foreground_color', true );

		return array(
			'id'               => (int) $term->term_id,
			'name'             => (string) $term->name,
			'count'            => (int) $term->count,
			'background_color' => '' !== $background_color ? $background_color : '#000000',
			'foreground_color' => '' !== $foreground_color ? $foreground_color : '#ffffff',
		);
	}

	/**
	 * Build collection summaries keyed by location id.
	 *
	 * @param int[] $location_ids Location ids.
	 * @return array<int, array<int, array<string, mixed>>>
	 */
	private function get_collection_summaries_by_location_ids( $location_ids ) {
		if ( empty( $location_ids ) ) {
			return array();
		}

		$lookup      = array_fill_keys( $location_ids, array() );
		$collections = get_posts(
			array(
				'post_status'            => 'publish',
				'post_type'              => Collection_Post_Type::POST_TYPE,
				'posts_per_page'         => -1,
				'orderby'                => 'title',
				'order'                  => 'ASC',
				'update_post_meta_cache' => true,
				'update_post_term_cache' => false,
			)
		);

		foreach ( $collections as $collection ) {
			if ( ! $collection instanceof WP_Post ) {
				continue;
			}

			$assigned_ids = $this->normalize_location_ids(
				get_post_meta( $collection->ID, Collection_Post_Type::LOCATION_IDS_META_KEY, true )
			);

			foreach ( $assigned_ids as $location_id ) {
				if ( ! isset( $lookup[ $location_id ] ) ) {
					continue;
				}

				$lookup[ $location_id ][] = array(
					'id'           => (int) $collection->ID,
					'title'        => $this->get_payload_post_title( $collection ),
					'location_ids' => $assigned_ids,
				);
			}
		}

		foreach ( $lookup as $location_id => $collections_for_location ) {
			usort(
				$collections_for_location,
				static function ( $left, $right ) {
					return strcasecmp( $left['title'], $right['title'] );
				}
			);
			$lookup[ $location_id ] = $collections_for_location;
		}

		return $lookup;
	}

	/**
	 * Get tag objects keyed by location id.
	 *
	 * @param int[] $location_ids Location ids.
	 * @return array<int, array<int, array<string, mixed>>>
	 */
	private function get_tags_by_location_ids( $location_ids ) {
		if ( empty( $location_ids ) ) {
			return array();
		}

		$terms = wp_get_object_terms(
			$location_ids,
			Tag_Taxonomy::TAXONOMY,
			array(
				'fields' => 'all_with_object_id',
			)
		);

		if ( is_wp_error( $terms ) ) {
			return array();
		}

		$lookup = array();

		foreach ( $terms as $term ) {
			$location_id = isset( $term->object_id ) ? (int) $term->object_id : 0;

			if ( $location_id <= 0 ) {
				continue;
			}

			if ( ! isset( $lookup[ $location_id ] ) ) {
				$lookup[ $location_id ] = array();
			}

			$lookup[ $location_id ][] = $this->build_tag_item( $term );
		}

		foreach ( $lookup as $location_id => $tags ) {
			usort(
				$tags,
				static function ( $left, $right ) {
					return strcasecmp( $left['name'], $right['name'] );
				}
			);
			$lookup[ $location_id ] = $tags;
		}

		return $lookup;
	}

	/**
	 * Get logo records keyed by id.
	 *
	 * @param int[] $logo_ids Logo ids.
	 * @return array<int, array<string, mixed>>
	 */
	private function get_logos_by_ids( $logo_ids ) {
		if ( empty( $logo_ids ) ) {
			return array();
		}

		$posts  = get_posts(
			array(
				'post_status'            => 'publish',
				'post_type'              => Logo_Post_Type::POST_TYPE,
				'post__in'               => $logo_ids,
				'posts_per_page'         => count( $logo_ids ),
				'orderby'                => 'post__in',
				'update_post_meta_cache' => false,
				'update_post_term_cache' => false,
			)
		);
		$lookup = array();

		foreach ( $posts as $post ) {
			if ( ! $post instanceof WP_Post ) {
				continue;
			}

			$lookup[ $post->ID ] = $this->build_logo_item( $post );
		}

		return $lookup;
	}

	/**
	 * Get marker records keyed by id.
	 *
	 * @param int[] $marker_ids Marker ids.
	 * @return array<int, array<string, mixed>>
	 */
	private function get_markers_by_ids( $marker_ids ) {
		if ( empty( $marker_ids ) ) {
			return array();
		}

		$posts  = get_posts(
			array(
				'post_status'            => 'publish',
				'post_type'              => Marker_Post_Type::POST_TYPE,
				'post__in'               => $marker_ids,
				'posts_per_page'         => count( $marker_ids ),
				'orderby'                => 'post__in',
				'update_post_meta_cache' => false,
				'update_post_term_cache' => false,
			)
		);
		$lookup = array();

		foreach ( $posts as $post ) {
			if ( ! $post instanceof WP_Post ) {
				continue;
			}

			$lookup[ $post->ID ] = $this->build_marker_item( $post );
		}

		return $lookup;
	}

	/**
	 * Get collection preview source points keyed by location id.
	 *
	 * @return array<int, array<string, mixed>>
	 */
	private function get_collection_preview_source() {
		$posts   = get_posts(
			array(
				'post_status'            => 'publish',
				'post_type'              => Location_Post_Type::POST_TYPE,
				'posts_per_page'         => -1,
				'orderby'                => 'menu_order title',
				'order'                  => 'ASC',
				'update_post_meta_cache' => true,
				'update_post_term_cache' => false,
			)
		);
		$markers = array();

		foreach ( $posts as $post ) {
			if ( ! $post instanceof WP_Post ) {
				continue;
			}

			if ( rest_sanitize_boolean( get_post_meta( $post->ID, 'is_hidden', true ) ) ) {
				continue;
			}

			$lat = (float) get_post_meta( $post->ID, 'latitude', true );
			$lng = (float) get_post_meta( $post->ID, 'longitude', true );

			if ( ! is_finite( $lat ) || ! is_finite( $lng ) ) {
				continue;
			}

			$marker_id      = absint( get_post_meta( $post->ID, 'marker_id', true ) );
			$marker_content = '';

			if ( $marker_id > 0 ) {
				$marker_post = get_post( $marker_id );

				if ( $marker_post instanceof WP_Post && Marker_Post_Type::POST_TYPE === $marker_post->post_type ) {
					$marker_content = (string) $marker_post->post_content;
				}
			}

			$markers[ $post->ID ] = array(
				'lat'           => $lat,
				'lng'           => $lng,
				'markerContent' => '' !== $marker_content ? $marker_content : null,
			);
		}

		return $markers;
	}

	/**
	 * Build preview locations for one collection.
	 *
	 * @param WP_Post                                 $post Collection post.
	 * @param int[]                                   $location_ids Assigned location ids.
	 * @param array<int, array<string, mixed>> $preview_source Preview points keyed by location id.
	 * @return array<int, array<string, mixed>>
	 */
	private function build_collection_preview_locations( WP_Post $post, $location_ids, $preview_source ) {
		$assigned = array();

		foreach ( $location_ids as $location_id ) {
			if ( isset( $preview_source[ $location_id ] ) ) {
				$assigned[] = $preview_source[ $location_id ];
			}

			if ( count( $assigned ) >= 24 ) {
				break;
			}
		}

		if ( ! empty( $assigned ) ) {
			return $assigned;
		}

		if ( empty( $preview_source ) ) {
			return array();
		}

		$available_points = array_values( $preview_source );
		$seed             = max( 1, absint( $post->ID ) );
		$selected         = array();
		$selected_indexes = array();

		while ( count( $selected ) < 3 && count( $selected_indexes ) < count( $available_points ) ) {
			$seed  = ( $seed * 1664525 + 1013904223 ) % 4294967296;
			$index = $seed % count( $available_points );

			if ( isset( $selected_indexes[ $index ] ) ) {
				continue;
			}

			$selected_indexes[ $index ] = true;
			$selected[]                 = $available_points[ $index ];
		}

		return $selected;
	}

	/**
	 * Whether a location matches one search term.
	 *
	 * @param WP_Post $post Location post.
	 * @param string  $search Search term.
	 * @return bool
	 */
	private function matches_location_search( WP_Post $post, $search ) {
		$search   = strtolower( trim( $search ) );
		$haystack = strtolower(
			implode(
				' ',
				array(
					$this->get_payload_post_title( $post ),
					(string) get_post_meta( $post->ID, 'street', true ),
					(string) get_post_meta( $post->ID, 'house_number', true ),
					(string) get_post_meta( $post->ID, 'postal_code', true ),
					(string) get_post_meta( $post->ID, 'city', true ),
					(string) get_post_meta( $post->ID, 'state', true ),
					(string) get_post_meta( $post->ID, 'country', true ),
					(string) get_post_meta( $post->ID, 'email', true )
				)
			)
		);

		return '' === $search || false !== strpos( $haystack, $search );
	}

	/**
	 * Normalize raw location ids into unique positive integers.
	 *
	 * @param mixed $location_ids Raw ids.
	 * @return int[]
	 */
	private function normalize_location_ids( $location_ids ) {
		if ( ! is_array( $location_ids ) ) {
			return array();
		}

		$location_ids = array_map( 'absint', $location_ids );
		$location_ids = array_filter(
			$location_ids,
			static function ( $location_id ) {
				return $location_id > 0;
			}
		);

		return array_values( array_unique( $location_ids ) );
	}

	/**
	 * Normalize stored social-media data.
	 *
	 * @param mixed $value Raw value.
	 * @return array<int, array<string, string>>
	 */
	private function normalize_social_media( $value ) {
		return is_array( $value ) ? array_values( $value ) : array();
	}

	/**
	 * Decode a post title for JSON payloads.
	 *
	 * @param WP_Post $post Post object.
	 * @return string
	 */
	private function get_payload_post_title( WP_Post $post ) {
		$charset = get_bloginfo( 'charset' );

		if ( ! is_string( $charset ) || '' === $charset ) {
			$charset = 'UTF-8';
		}

		return html_entity_decode( (string) $post->post_title, ENT_QUOTES | ENT_HTML5, $charset );
	}

	/**
	 * Build one standard paginated payload.
	 *
	 * @param array<int, mixed> $items Items.
	 * @param int               $page Page number.
	 * @param int               $per_page Page size.
	 * @param int               $total_items Total items.
	 * @return array<string, mixed>
	 */
	private function build_paginated_payload( $items, $page, $per_page, $total_items ) {
		return array(
			'items'      => array_values( $items ),
			'totalItems' => max( 0, (int) $total_items ),
			'totalPages' => max( 1, (int) ceil( max( 0, (int) $total_items ) / max( 1, (int) $per_page ) ) ),
			'page'       => max( 1, (int) $page ),
			'perPage'    => max( 1, (int) $per_page ),
		);
	}
}
