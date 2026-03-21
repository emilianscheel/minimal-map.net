import { Spinner } from '@wordpress/components';

export default function LoadingView() {
	return (
		<div className="minimal-map-admin__content">
			<div className="minimal-map-admin__locations-state minimal-map-admin__locations-state--loading">
				<Spinner />
			</div>
		</div>
	);
}
