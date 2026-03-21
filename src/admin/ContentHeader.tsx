import type { ReactNode } from 'react';

export default function ContentHeader({
	actions,
	description,
	title,
}: {
	actions?: ReactNode;
	description: string;
	title: string;
}) {
	return (
		<header className="minimal-map-admin__header">
			<div className="minimal-map-admin__header-row">
				<div className="minimal-map-admin__header-copy">
					<h2 className="minimal-map-admin__header-title">{title}</h2>
					<p className="minimal-map-admin__header-description">{description}</p>
				</div>
				{actions ? <div className="minimal-map-admin__header-actions">{actions}</div> : null}
			</div>
		</header>
	);
}
