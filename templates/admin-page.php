<?php
/**
 * Admin page shell.
 *
 * @package Minimal_Map
 */

defined( 'ABSPATH' ) || exit;
?>
<div class="wrap minimal-map-admin-wrap">
	<div
		data-minimal-map-admin-root
		data-current-view="<?php echo esc_attr( $view ); ?>"
		data-page-title="<?php echo esc_attr( $title ); ?>"
		data-page-description="<?php echo esc_attr( $description ); ?>"
	></div>
</div>
