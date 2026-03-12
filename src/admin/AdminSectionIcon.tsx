import {
	Image,
	LayoutDashboard,
	Layers3,
	MapPin,
	MapPinned,
	Palette,
	Tags,
	type LucideIcon,
} from 'lucide-react';
import type { AdminSectionView } from '../types';

const SECTION_ICONS: Record<AdminSectionView, LucideIcon> = {
	dashboard: LayoutDashboard,
	locations: MapPinned,
	collections: Layers3,
	logos: Image,
	tags: Tags,
	markers: MapPin,
	styles: Palette,
};

export default function AdminSectionIcon({ view }: { view: AdminSectionView }) {
	const IconComponent = SECTION_ICONS[view] ?? LayoutDashboard;

	return <IconComponent aria-hidden="true" size={24} strokeWidth={1.75} />;
}
