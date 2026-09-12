import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface MaterialIconProps {
  /** Material Symbols Sharp ligature name, e.g. "keyboard_arrow_down". */
  name: string;
  /** Box size and font-size in px (the site uses 16, 20 or 24). */
  size?: number;
  className?: string;
  style?: CSSProperties;
  fill?: 0 | 1;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
}

/**
 * Icon glyph from the self-hosted Material Symbols Sharp variable font
 * (FILL 0, wght 400, GRAD 0, opsz 24 — exactly what corgi.insure renders).
 */
export function MaterialIcon({ name, size = 24, className, style, fill = 0, weight = 400 }: MaterialIconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("msym", className)}
      style={{
        fontSize: size,
        width: size,
        height: size,
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' 0, 'opsz' 24`,
        ...style,
      }}
    >
      {name}
    </span>
  );
}
