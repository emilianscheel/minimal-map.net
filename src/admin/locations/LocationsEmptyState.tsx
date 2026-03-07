import { __ } from '@wordpress/i18n';

export default function LocationsEmptyState() {
	return (
		<div className="minimal-map-admin__locations-empty">
			<h3>{__('No locations yet', 'minimal-map')}</h3>
			<p>{__('Use the “Add location” button to create your first location.', 'minimal-map')}</p>
		</div>
	);
}
