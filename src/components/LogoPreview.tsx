import type { LogoRecord } from '../types';

interface LogoPreviewProps {
	logo: Pick<LogoRecord, 'content' | 'title'>;
	className?: string;
}

export default function LogoPreview({ logo, className = '' }: LogoPreviewProps) {
	return (
		<div
			className={['minimal-map-admin__logo-preview', className].filter(Boolean).join(' ')}
			aria-label={logo.title}
			role="img"
		>
			<div
				className="minimal-map-admin__logo-preview-svg"
				dangerouslySetInnerHTML={{ __html: logo.content }}
			/>
		</div>
	);
}
