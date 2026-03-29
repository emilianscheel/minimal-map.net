import {
	ChartColumn,
	Gift,
	Image,
	Key,
	LayoutDashboard,
	Layers3,
	MapPin,
	MapPinned,
	Palette,
	Tags,
	type LucideIcon,
} from 'lucide-react';
import type { AdminSectionView } from '../types';

const SECTION_ICONS: Record<AdminSectionView | 'premium' | 'license', LucideIcon> = {
	dashboard: LayoutDashboard,
	analytics: ChartColumn,
	locations: MapPinned,
	collections: Layers3,
	logos: Image,
	tags: Tags,
	markers: MapPin,
	styles: Palette,
	premium: Gift,
	license: Key,
};

export default function AdminSectionIcon({ view }: { view: AdminSectionView | 'premium' | 'license' }) {
	const IconComponent = SECTION_ICONS[view] ?? LayoutDashboard;

	return <IconComponent aria-hidden="true" size={24} strokeWidth={1.75} />;
}
