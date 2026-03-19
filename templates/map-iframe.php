<?php
/**
 * Standalone iframe map document.
 *
 * @package Minimal_Map
 */

?>
<!doctype html>
<html <?php echo $language_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
<head>
	<meta charset="<?php echo esc_attr( $charset ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?php echo esc_html( $document_title ); ?></title>
	<style>
		html, body {
			margin: 0;
			padding: 0;
			background: transparent;
		}

		body.minimal-map-iframe-page {
			font-family: var(
				--minimal-map-font-family,
				var(--wp--style--global--font-family, inherit)
			);
		}

		.minimal-map-iframe-page .minimal-map-surface {
			width: 100%;
		}

		.minimal-map-iframe-page__error {
			padding: 16px;
			color: #1e1e1e;
			font-size: 14px;
			line-height: 1.5;
		}
	</style>
	<?php echo $head_markup; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	<style>
		html {
			margin-top: 0 !important;
		}
	</style>
</head>
<body
	class="minimal-map-iframe-page"
	<?php if ( '' !== $document_font_family ) : ?>
		style="--minimal-map-font-family: <?php echo esc_attr( $document_font_family ); ?>;"
	<?php endif; ?>
>
	<?php if ( '' !== $error_message ) : ?>
		<div class="minimal-map-iframe-page__error"><?php echo esc_html( $error_message ); ?></div>
	<?php else : ?>
		<?php echo $map_surface_markup; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	<?php endif; ?>
	<?php echo $footer_markup; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</body>
</html>
