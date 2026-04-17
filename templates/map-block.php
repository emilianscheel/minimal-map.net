<?php
/**
 * Frontend map block template.
 *
 * @package Minimal_Map
 */

defined( 'ABSPATH' ) || exit;

$minimal_map_wrapper_attributes = get_block_wrapper_attributes(
	array(
		'class' => 'minimal-map-block',
	)
);
?>
<div <?php echo $minimal_map_wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- get_block_wrapper_attributes() returns escaped attribute markup. ?>>
	<?php echo $map_surface_markup; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</div>
