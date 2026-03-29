import type { ComponentType, SVGProps } from "react";
import type { AdminSectionView } from "../types";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  strokeWidth?: number;
  style?: React.CSSProperties;
  className?: string;
};

function IconBase({
  children,
  size = 24,
  strokeWidth = 1.75,
  style,
  className = "",
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ fill: "none !important", ...style }}
      className={`lucide ${className}`}
      {...props}
    >
      {children}
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m5 12 4 4L19 6" />
    </IconBase>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m6 9 6 6 6-6" />
    </IconBase>
  );
}

export function DashboardIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="11" width="7" height="10" rx="1.5" />
      <rect x="3" y="12" width="7" height="9" rx="1.5" />
    </IconBase>
  );
}

export function ImageIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9" r="1.5" />
      <path d="m21 16-5.5-5.5L9 17" />
    </IconBase>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m12 3 8 4.5-8 4.5-8-4.5Z" />
      <path d="m4 12.5 8 4.5 8-4.5" />
      <path d="m4 17 8 4 8-4" />
    </IconBase>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 21c3.8-3.5 6.5-6.8 6.5-10.6A6.5 6.5 0 1 0 5.5 10.4C5.5 14.2 8.2 17.5 12 21Z" />
      <circle cx="12" cy="10" r="2.5" />
    </IconBase>
  );
}

export function MapPinnedIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 6.5 9 4l6 2.5 6-2.5v13L15 20l-6-2.5L3 20Z" />
      <path d="M9 4v13.5" />
      <path d="M15 6.5V20" />
      <path d="M12 14.7c1.7-1.5 2.8-2.9 2.8-4.5a2.8 2.8 0 1 0-5.6 0c0 1.6 1.1 3 2.8 4.5Z" />
      <circle cx="12" cy="10.2" r="0.9" />
    </IconBase>
  );
}

export function PaletteIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 21v-7" />
      <path d="M4 10V3" />
      <path d="M12 21v-9" />
      <path d="M12 8V3" />
      <path d="M20 21v-5" />
      <path d="M20 12V3" />
      <path d="M1 10h6" />
      <path d="M9 8h6" />
      <path d="M17 12h6" />
    </IconBase>
  );
}

export function TagsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20 10 12 18l-7-7V4h7Z" />
      <path d="m12 6 6 6" />
      <circle cx="8.5" cy="8.5" r="1" />
    </IconBase>
  );
}

export function AnalyticsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 3v18h18" />
      <path d="M7 16V10" />
      <path d="M11 16V7" />
      <path d="M15 16V12" />
      <path d="M19 16V9" />
    </IconBase>
  );
}

const SECTION_ICONS: Record<AdminSectionView, ComponentType<IconProps>> = {
  dashboard: DashboardIcon,
  analytics: AnalyticsIcon,
  locations: MapPinnedIcon,
  collections: LayersIcon,
  logos: ImageIcon,
  tags: TagsIcon,
  markers: MapPinIcon,
  styles: PaletteIcon,
};

export function AdminSectionIcon({
  view,
  ...props
}: IconProps & { view: AdminSectionView }) {
  const IconComponent = SECTION_ICONS[view] ?? DashboardIcon;

  return <IconComponent aria-hidden="true" {...props} />;
}
