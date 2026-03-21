import type { ReactNode } from 'react';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './style.scss';

interface EmptyStateProps {
	icon: ReactNode;
	title: string;
	description: string;
	action?: {
		label: string;
		onClick: () => void;
		icon?: ReactNode;
		disabled?: boolean;
	};
	className?: string;
}

export default function EmptyState({
	icon,
	title,
	description,
	action,
	className = '',
}: EmptyStateProps) {
	return (
		<div className={`minimal-map-admin__empty-state-container ${className}`}>
			<div className="minimal-map-admin__empty-state-content">
				<div className="minimal-map-admin__empty-state-icon">
					{icon}
				</div>
				<h3 className="minimal-map-admin__empty-state-title">
					{title}
				</h3>
				<p className="minimal-map-admin__empty-state-description">
					{description}
				</p>
				{action && (
					<Button
						variant="primary"
						onClick={action.onClick}
						disabled={action.disabled}
						__next40pxDefaultSize
					>
						<div className="minimal-map-admin__empty-state-button-content">
							{action.icon}
							<span>{action.label}</span>
						</div>
					</Button>
				)}
			</div>
		</div>
	);
}
