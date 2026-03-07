<?php
/**
 * Plugin integration tests.
 *
 * @package Minimal_Map
 */

/**
 * Verifies core plugin registration.
 */
class Minimal_Map_Plugin_Test extends WP_UnitTestCase {

	/**
	 * Create one published location post with optional coordinates.
	 *
	 * @param mixed $latitude Latitude meta value.
	 * @param mixed $longitude Longitude meta value.
	 * @return int
	 */
	private function create_location( $latitude, $longitude ) {
		$post_id = self::factory()->post->create(
			array(
				'post_status' => 'publish',
				'post_title'  => 'Location ' . wp_generate_uuid4(),
				'post_type'   => \MinimalMap\Locations\Location_Post_Type::POST_TYPE,
			)
		);

		if ( null !== $latitude ) {
			update_post_meta( $post_id, 'latitude', $latitude );
		}

		if ( null !== $longitude ) {
			update_post_meta( $post_id, 'longitude', $longitude );
		}

		return $post_id;
	}

	/**
	 * The block should be registered on init.
	 *
	 * @return void
	 */
	public function test_map_block_is_registered() {
		$this->assertTrue( WP_Block_Type_Registry::get_instance()->is_registered( 'minimal-map/map' ) );
	}

	/**
	 * The OpenFreeMap default should be available.
	 *
	 * @return void
	 */
	public function test_default_style_preset_exists() {
		$config  = new \MinimalMap\Config();
		$presets = $config->get_style_presets();

		$this->assertArrayHasKey( 'liberty', $presets );
		$this->assertSame( 'https://tiles.openfreemap.org/styles/liberty', $presets['liberty']['style_url'] );
	}

	/**
	 * Height units should normalize into a CSS-ready value.
	 *
	 * @return void
	 */
	public function test_height_unit_defaults_to_pixels() {
		$config      = new \MinimalMap\Config();
		$attributes  = $config->normalize_block_attributes(
			array(
				'height' => 36,
			)
		);

		$this->assertSame( 'px', $attributes['heightUnit'] );
		$this->assertSame( '36px', $attributes['heightCssValue'] );
	}

	/**
	 * Published locations with valid coordinates should be exposed to the client.
	 *
	 * @return void
	 */
	public function test_get_map_locations_includes_only_valid_published_locations() {
		$config = new \MinimalMap\Config();

		$this->create_location( '52.517', '13.388' );
		$this->create_location( '', '13.400' );
		$this->create_location( '52.520', '' );
		$this->create_location( 'not-a-number', '13.410' );
		$this->create_location( '91', '13.420' );

		wp_insert_post(
			array(
				'post_status' => 'draft',
				'post_title'  => 'Draft location',
				'post_type'   => \MinimalMap\Locations\Location_Post_Type::POST_TYPE,
				'meta_input'  => array(
					'latitude'  => '40.7128',
					'longitude' => '-74.0060',
				),
			)
		);

		$this->assertSame(
			array(
				array(
					'lat' => 52.517,
					'lng' => 13.388,
				),
			),
			$config->get_map_locations()
		);
	}

	/**
	 * Client config should contain the normalized location payload.
	 *
	 * @return void
	 */
	public function test_client_config_includes_locations_payload() {
		$config = new \MinimalMap\Config();

		$this->create_location( '48.137154', '11.576124' );

		$client_config = $config->get_client_config();

		$this->assertArrayHasKey( 'locations', $client_config );
		$this->assertSame(
			array(
				array(
					'lat' => 48.137154,
					'lng' => 11.576124,
				),
			),
			$client_config['locations']
		);
	}
}
