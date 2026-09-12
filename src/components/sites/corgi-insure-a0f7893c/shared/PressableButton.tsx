import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type PressableVariant = "orange" | "black" | "white";
export type PressableSize = "small" | "large";

interface PressableButtonProps {
  children: ReactNode;
  variant?: PressableVariant;
  size?: PressableSize;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  /** Classes for the outer (base/depth) element. */
  className?: string;
  /** Classes for the face (the clickable element). Use to override padding/height. */
  faceClassName?: string;
  /** Depth of the 3D base in px (site default 4). */
  depth?: number;
  ariaLabel?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
  style?: CSSProperties;
  faceStyle?: CSSProperties;
  dataTrack?: string;
}

const BASE_BG: Record<PressableVariant, string> = {
  orange: "bg-[#cc4a00]",
  black: "bg-[#626262]",
  white: "bg-[#e1e1e1]",
};

const FACE: Record<PressableVariant, string> = {
  orange: "border-transparent bg-[#ff5c00] text-white hover:bg-[#ff7d33] active:bg-[#ff9d66]",
  black: "border-transparent bg-[#191919] text-white hover:bg-[#4a4a4a] active:bg-[#7b7b7b]",
  white: "border-[#e1e1e1] bg-white text-[#191919] hover:bg-gray-50 active:bg-[#ededed]",
};

const SIZE: Record<PressableSize, string> = {
  small: "px-4 py-2 btn-text-small",
  large: "px-6 py-3 btn-text-large",
};

/**
 * corgi.insure "pressable" button: a colored base sits 4px below a face; on :active the
 * face drops onto the base (margin-top:4px; padding-bottom:0; 75ms) — see .pressable-button
 * in globals.css. Face corners use border-radius 16px + corner-shape superellipse(1.6).
 */
export function PressableButton({
  children,
  variant = "orange",
  size = "small",
  href,
  onClick,
  type = "button",
  className,
  faceClassName,
  depth = 4,
  ariaLabel,
  target,
  rel,
  disabled,
  style,
  faceStyle,
  dataTrack,
}: PressableButtonProps) {
  const faceClasses = cn(
    "pressable-smooth-corner flex items-center justify-center border",
    FACE[variant],
    SIZE[size],
    faceClassName,
  );
  const external = href ? /^(https?:)?\/\//.test(href) || href.startsWith("mailto:") : false;
  return (
    <div
      className={cn("pressable-button pressable-smooth-corner", BASE_BG[variant], className)}
      style={{ ["--pressable-depth" as string]: `${depth}px`, ...style }}
      data-pressable-size={size}
      data-pressable-variant={variant}
      data-press-trigger="self"
    >
      {href ? (
        external ? (
          <a href={href} className={faceClasses} aria-label={ariaLabel} target={target} rel={rel} style={faceStyle} data-track={dataTrack}>
            {children}
          </a>
        ) : (
          <Link href={href} className={faceClasses} aria-label={ariaLabel} target={target} rel={rel} style={faceStyle} data-track={dataTrack}>
            {children}
          </Link>
        )
      ) : (
        <button type={type} onClick={onClick} className={faceClasses} aria-label={ariaLabel} disabled={disabled} style={faceStyle} data-track={dataTrack}>
          {children}
        </button>
      )}
    </div>
  );
}
