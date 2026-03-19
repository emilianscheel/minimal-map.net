<?php
/**
 * Public iframe endpoint renderer.
 *
 * @package Minimal_Map
 */

namespace MinimalMap;

/**
 * Renders one standalone map document for iframe embeds.
 */
class Iframe_Endpoint {
	/**
	 * Public request flag.
	 */
	const QUERY_VAR = 'minimal-map-iframe';

	/**
	 * Encoded config query arg.
	 */
	const CONFIG_QUERY_VAR = 'minimal-map-config';

	/**
	 * Shared config service.
	 *
	 * @var Config
	 */
	private $config;

	/**
	 * Shared map renderer.
	 *
	 * @var Map_View
	 */
	private $map_view;

	/**
	 * Cached current-request normalized iframe config.
	 *
	 * @var array<string, mixed>|\WP_Error|null
	 */
	private $current_request_config = null;

	/**
	 * Whether the current-request config has been resolved.
	 *
	 * @var bool
	 */
	private $has_current_request_config = false;

	/**
	 * Constructor.
	 *
	 * @param Config   $config Shared config service.
	 * @param Map_View $map_view Shared map renderer.
	 */
	public function __construct( Config $config, Map_View $map_view ) {
		$this->config   = $config;
		$this->map_view = $map_view;
	}

	/**
	 * Render the standalone iframe response if requested.
	 *
	 * @return void
	 */
	public function maybe_render() {
		if ( ! $this->is_iframe_request() ) {
			return;
		}

		add_filter( 'show_admin_bar', '__return_false' );
		remove_action( 'wp_head', '_admin_bar_bump_cb' );
		remove_action( 'admin_head', '_admin_bar_bump_cb' );

		$encoded_config = isset( $_GET[ self::CONFIG_QUERY_VAR ] ) ? wp_unslash( (string) $_GET[ self::CONFIG_QUERY_VAR ] ) : '';
		$response       = $this->build_response( $encoded_config );

		status_header( $response['status'] );
		nocache_headers();

		echo $response['html']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		exit;
	}

	/**
	 * Determine whether the current request targets the iframe document.
	 *
	 * @return bool
	 */
	public function is_iframe_request() {
		return isset( $_GET[ self::QUERY_VAR ] );
	}

	/**
	 * Build one iframe response without sending it.
	 *
	 * @param string $encoded_config Base64url-encoded JSON config.
	 * @return array{status:int,html:string}
	 */
	public function build_response( $encoded_config ) {
		$normalized_config = $this->config->normalize_embed_payload( $encoded_config );
		$privacy_mode_enabled = $this->is_iframe_privacy_mode_enabled(
			is_array( $normalized_config ) ? $normalized_config : null
		);

		if ( is_wp_error( $normalized_config ) ) {
			return array(
				'status' => 400,
				'html'   => $this->render_document(
					array(
						'document_title'    => __( 'Invalid Minimal Map Embed', 'minimal-map' ),
						'document_font_family' => $this->config->get_default_block_attributes()['fontFamily'],
						'error_message'     => $normalized_config->get_error_message(),
						'map_surface_markup' => '',
						'head_markup'       => '',
						'footer_markup'     => '',
					)
				),
			);
		}

		$head_markup   = '';
		$footer_markup = '';

		if ( $privacy_mode_enabled ) {
			$head_markup   = $this->render_isolated_head_markup();
			$footer_markup = $this->render_isolated_footer_markup( $normalized_config );
		} else {
			$head_markup   = $this->render_legacy_head_markup( $normalized_config );
			$footer_markup = $this->render_legacy_footer_markup();
		}

		return array(
			'status' => 200,
			'html'   => $this->render_document(
				array(
					'document_title'    => __( 'Minimal Map', 'minimal-map' ),
					'document_font_family' => $normalized_config['fontFamily'],
					'error_message'     => '',
					'map_surface_markup' => $this->map_view->render_surface( $normalized_config ),
					'head_markup'       => $head_markup,
					'footer_markup'     => $footer_markup,
				)
			),
		);
	}

	/**
	 * Suppress the Complianz banner on privacy-safe iframe requests.
	 *
	 * @param bool $required Whether the cookie warning is currently required.
	 * @return bool
	 */
	public function filter_complianz_site_needs_cookiewarning( $required ) {
		if ( $this->is_privacy_safe_current_iframe_request() ) {
			return false;
		}

		return $required;
	}

	/**
	 * Render one standalone HTML document.
	 *
	 * @param array<string, string> $context Document context.
	 * @return string
	 */
	private function render_document( $context ) {
		$document_title    = $context['document_title'];
		$document_font_family = $context['document_font_family'];
		$error_message     = $context['error_message'];
		$map_surface_markup = $context['map_surface_markup'];
		$head_markup       = $context['head_markup'];
		$footer_markup     = $context['footer_markup'];
		$language_attributes = get_language_attributes();
		$charset             = get_bloginfo( 'charset' );

		ob_start();
		require MINIMAL_MAP_PATH . 'templates/map-iframe.php';
		return (string) ob_get_clean();
	}

	/**
	 * Determine whether iframe privacy mode is enabled.
	 *
	 * @param array<string, mixed>|null $normalized_config Optional normalized iframe config.
	 * @return bool
	 */
	private function is_iframe_privacy_mode_enabled( $normalized_config = null ) {
		return (bool) apply_filters(
			'minimal_map_iframe_privacy_mode_enabled',
			true,
			$normalized_config
		);
	}

	/**
	 * Determine whether the iframe is allowed to use frontend geocoding.
	 *
	 * @param array<string, mixed> $normalized_config Normalized iframe config.
	 * @return bool
	 */
	private function allow_iframe_frontend_geocoding( $normalized_config ) {
		return (bool) apply_filters(
			'minimal_map_iframe_allow_frontend_geocoding',
			false,
			$normalized_config
		);
	}

	/**
	 * Determine whether the current iframe request is privacy-safe.
	 *
	 * @return bool
	 */
	private function is_privacy_safe_current_iframe_request() {
		if ( ! $this->is_iframe_request() ) {
			return false;
		}

		$normalized_config = $this->get_current_request_normalized_config();

		if ( ! is_array( $normalized_config ) ) {
			return false;
		}

		if ( ! $this->is_iframe_privacy_mode_enabled( $normalized_config ) ) {
			return false;
		}

		if ( $this->allow_iframe_frontend_geocoding( $normalized_config ) ) {
			return false;
		}

		return $this->is_privacy_safe_style_url(
			(string) $normalized_config['styleUrl'],
			$normalized_config
		);
	}

	/**
	 * Resolve and cache the current iframe request config.
	 *
	 * @return array<string, mixed>|\WP_Error|null
	 */
	private function get_current_request_normalized_config() {
		if ( $this->has_current_request_config ) {
			return $this->current_request_config;
		}

		$this->has_current_request_config = true;

		if ( ! $this->is_iframe_request() ) {
			$this->current_request_config = null;
			return null;
		}

		$encoded_config = isset( $_GET[ self::CONFIG_QUERY_VAR ] )
			? wp_unslash( (string) $_GET[ self::CONFIG_QUERY_VAR ] )
			: '';
		$this->current_request_config = $this->config->normalize_embed_payload( $encoded_config );

		return $this->current_request_config;
	}

	/**
	 * Determine whether the style URL is privacy-safe for automatic banner suppression.
	 *
	 * @param string               $style_url Style URL.
	 * @param array<string, mixed> $normalized_config Normalized iframe config.
	 * @return bool
	 */
	private function is_privacy_safe_style_url( $style_url, $normalized_config ) {
		$parsed_url = wp_parse_url( $style_url );
		$is_safe    = is_array( $parsed_url )
			&& isset( $parsed_url['host'], $parsed_url['path'] )
			&& 'tiles.openfreemap.org' === $parsed_url['host']
			&& 0 === strpos( (string) $parsed_url['path'], '/styles/' );

		return (bool) apply_filters(
			'minimal_map_iframe_privacy_safe_style_url',
			$is_safe,
			$style_url,
			$normalized_config
		);
	}

	/**
	 * Render the isolated iframe head markup.
	 *
	 * @return string
	 */
	private function render_isolated_head_markup() {
		return $this->render_style_handles( array( 'minimal-map-style' ) );
	}

	/**
	 * Render the isolated iframe footer markup.
	 *
	 * @param array<string, mixed> $normalized_config Normalized iframe config.
	 * @return string
	 */
	private function render_isolated_footer_markup( $normalized_config ) {
		$runtime_config = $this->config->get_client_config(
			false,
			array(
				'include_frontend_geocode' => $this->allow_iframe_frontend_geocoding( $normalized_config ),
			)
		);

		return $this->render_script_handles(
			array( 'minimal-map-frontend' ),
			array(
				'minimal-map-frontend' => array(
					'window.MinimalMapFrontConfig = ' . wp_json_encode( $runtime_config ) . ';',
				),
			)
		);
	}

	/**
	 * Render legacy iframe head markup with standard WordPress injections.
	 *
	 * @param array<string, mixed> $normalized_config Normalized iframe config.
	 * @return string
	 */
	private function render_legacy_head_markup( $normalized_config ) {
		wp_enqueue_style( 'minimal-map-style' );
		wp_enqueue_script( 'minimal-map-frontend' );
		wp_add_inline_script(
			'minimal-map-frontend',
			'window.MinimalMapFrontConfig = ' . wp_json_encode(
				$this->config->get_client_config(
					false,
					array(
						'include_frontend_geocode' => $this->allow_iframe_frontend_geocoding( $normalized_config ),
					)
				)
			) . ';',
			'before'
		);

		ob_start();
		wp_head();
		return (string) ob_get_clean();
	}

	/**
	 * Render legacy iframe footer markup with standard WordPress injections.
	 *
	 * @return string
	 */
	private function render_legacy_footer_markup() {
		ob_start();
		wp_footer();
		return (string) ob_get_clean();
	}

	/**
	 * Render a set of registered stylesheet handles and their dependencies.
	 *
	 * @param array<int, string> $handles Root handles.
	 * @return string
	 */
	private function render_style_handles( $handles ) {
		$styles  = wp_styles();
		$seen    = array();
		$markup  = '';

		foreach ( $handles as $handle ) {
			$markup .= $this->render_style_handle_recursive( $handle, $styles, $seen );
		}

		return $markup;
	}

	/**
	 * Render a set of registered script handles and their dependencies.
	 *
	 * @param array<int, string>               $handles Root handles.
	 * @param array<string, array<int, string>> $inline_before Additional inline scripts keyed by handle.
	 * @return string
	 */
	private function render_script_handles( $handles, $inline_before = array() ) {
		$scripts = wp_scripts();
		$seen    = array();
		$markup  = '';

		foreach ( $handles as $handle ) {
			$markup .= $this->render_script_handle_recursive( $handle, $scripts, $seen, $inline_before );
		}

		return $markup;
	}

	/**
	 * Recursively render one stylesheet handle.
	 *
	 * @param string     $handle Style handle.
	 * @param \WP_Styles $styles Styles registry.
	 * @param array<string, bool> $seen Already rendered handles.
	 * @return string
	 */
	private function render_style_handle_recursive( $handle, $styles, &$seen ) {
		if ( isset( $seen[ $handle ] ) || ! isset( $styles->registered[ $handle ] ) ) {
			return '';
		}

		$seen[ $handle ] = true;
		$style           = $styles->registered[ $handle ];
		$markup          = '';

		foreach ( (array) $style->deps as $dependency ) {
			$markup .= $this->render_style_handle_recursive( $dependency, $styles, $seen );
		}

		if ( empty( $style->src ) ) {
			return $markup;
		}

		$href  = $this->build_asset_src( $style->src, $style->ver );
		$media = $style->args ? $style->args : 'all';

		$markup .= sprintf(
			'<link rel="stylesheet" id="%1$s-css" href="%2$s" media="%3$s" />' . "\n",
			esc_attr( $handle ),
			esc_url( $href ),
			esc_attr( $media )
		);

		return $markup;
	}

	/**
	 * Recursively render one script handle.
	 *
	 * @param string       $handle Script handle.
	 * @param \WP_Scripts  $scripts Scripts registry.
	 * @param array<string, bool> $seen Already rendered handles.
	 * @param array<string, array<int, string>> $inline_before Additional inline scripts keyed by handle.
	 * @return string
	 */
	private function render_script_handle_recursive( $handle, $scripts, &$seen, $inline_before ) {
		if ( isset( $seen[ $handle ] ) || ! isset( $scripts->registered[ $handle ] ) ) {
			return '';
		}

		$seen[ $handle ] = true;
		$script          = $scripts->registered[ $handle ];
		$markup          = '';

		foreach ( (array) $script->deps as $dependency ) {
			$markup .= $this->render_script_handle_recursive( $dependency, $scripts, $seen, $inline_before );
		}

		$before_items = array();

		if ( isset( $inline_before[ $handle ] ) && is_array( $inline_before[ $handle ] ) ) {
			$before_items = array_merge( $before_items, $inline_before[ $handle ] );
		}

		if ( isset( $script->extra['before'] ) && is_array( $script->extra['before'] ) ) {
			$before_items = array_merge( $before_items, $script->extra['before'] );
		}

		$markup .= $this->render_inline_script_items( $handle . '-js-before', $before_items );

		if ( ! empty( $script->src ) ) {
			$src    = $this->build_asset_src( $script->src, $script->ver );
			$defer  = ( isset( $script->extra['strategy'] ) && 'defer' === $script->extra['strategy'] ) ? ' defer' : '';
			$markup .= sprintf(
				'<script id="%1$s-js" src="%2$s"%3$s></script>' . "\n",
				esc_attr( $handle ),
				esc_url( $src ),
				$defer
			);
		}

		if ( isset( $script->extra['after'] ) && is_array( $script->extra['after'] ) ) {
			$markup .= $this->render_inline_script_items( $handle . '-js-after', $script->extra['after'] );
		}

		return $markup;
	}

	/**
	 * Render a list of inline script fragments.
	 *
	 * @param string              $id Script element id.
	 * @param array<int, mixed>   $items Inline script fragments.
	 * @return string
	 */
	private function render_inline_script_items( $id, $items ) {
		$items = array_values(
			array_filter(
				(array) $items,
				static function ( $item ) {
					return is_string( $item ) && '' !== trim( $item );
				}
			)
		);

		if ( empty( $items ) ) {
			return '';
		}

		return sprintf(
			'<script id="%1$s">%2$s</script>' . "\n",
			esc_attr( $id ),
			implode( "\n", $items )
		);
	}

	/**
	 * Build one asset source URL with version query string.
	 *
	 * @param string      $src Asset source.
	 * @param string|bool $version Asset version.
	 * @return string
	 */
	private function build_asset_src( $src, $version ) {
		$asset_src = $src;

		if ( false !== $version && null !== $version && '' !== $version ) {
			$asset_src = add_query_arg( 'ver', rawurlencode( (string) $version ), $asset_src );
		}

		return $asset_src;
	}
}
