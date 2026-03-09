import type { TagRecord } from "../../types";
import "./style.scss";

interface TagBadgeProps {
  tag: TagRecord;
  className?: string;
}

export default function TagBadge({ tag, className = "" }: TagBadgeProps) {
  return (
    <span
      className={`minimal-map-tag-badge ${className}`}
      style={{
        backgroundColor: tag.background_color || "#000000",
        color: tag.foreground_color || "#ffffff",
      }}
    >
      {tag.name}
    </span>
  );
}
