import type { CSSProperties, ReactNode } from 'react';
import { DEFAULT_POSITRON_THEME_COLORS } from '../lib/styles/defaultThemeColors';
import type { StyleThemeRecord } from '../types';

interface StaticMiniMapPreviewProps {
	theme: StyleThemeRecord | null;
	markerContent?: string | null;
	variant?: 'compact' | 'card';
	onClick?: () => void;
	ariaLabel?: string;
	className?: string;
	overlay?: ReactNode;
	badge?: string | number | null;
}

function joinClassNames(...classNames: Array<string | false | null | undefined>): string {
	return classNames.filter(Boolean).join(' ');
}

export default function StaticMiniMapPreview({
	theme,
	markerContent,
	variant = 'compact',
	onClick,
	ariaLabel,
	className,
	overlay,
	badge,
}: StaticMiniMapPreviewProps) {
	const colors = theme?.colors ?? DEFAULT_POSITRON_THEME_COLORS;
	const previewStyle = {
		'--minimal-map-mini-map-background': colors.background,
		'--minimal-map-mini-map-water': colors.water,
		'--minimal-map-mini-map-park': colors.park,
		'--minimal-map-mini-map-road-casing': colors.roadMajorCasing,
		'--minimal-map-mini-map-road-fill': colors.roadMajorFill,
		cursor: onClick ? 'pointer' : 'default',
	} as CSSProperties;
	const previewClassName = joinClassNames(
		'minimal-map-admin__mini-map-preview',
		`minimal-map-admin__mini-map-preview--${variant}`,
		onClick && 'minimal-map-admin__mini-map-preview--interactive',
		className
	);

	const content = (
		<>
			<div className="minimal-map-admin__mini-map-preview-surface">
				<span className="minimal-map-admin__mini-map-preview-water" />
				<span className="minimal-map-admin__mini-map-preview-park" />
				<span className="minimal-map-admin__mini-map-preview-road minimal-map-admin__mini-map-preview-road--primary" />
				<span className="minimal-map-admin__mini-map-preview-road minimal-map-admin__mini-map-preview-road--secondary" />
			</div>
			{markerContent ? (
				<div
					className="minimal-map-admin__mini-map-preview-marker"
					dangerouslySetInnerHTML={{ __html: markerContent }}
				/>
			) : null}
			{overlay}
			{badge !== null && badge !== undefined && badge !== '' ? (
				<span className="minimal-map-admin__mini-map-preview-count">#{badge}</span>
			) : null}
			{onClick && <div className="minimal-map-admin__mini-map-preview-click-overlay" />}
		</>
	);

	if (onClick) {
		return (
			<button
				type="button"
				className={previewClassName}
				style={previewStyle}
				onClick={(event) => {
					event.stopPropagation();
					onClick();
				}}
				aria-label={ariaLabel}
			>
				{content}
			</button>
		);
	}

	return (
		<div className={previewClassName} style={previewStyle} aria-hidden="true">
			{content}
		</div>
	);
}
