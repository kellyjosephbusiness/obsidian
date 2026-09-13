import Image from "next/image";
import { cn } from "@/lib/utils";

/** Brand kit assets (FundLine Capital Brand Kit: Finance Blue #0376FD, Near Black #07090D). */
const BRAND = "/sites/corgi-insure-a0f7893c/shared/brand";

export type LogoVariant = "color" | "white" | "black";

const MARK_SRC: Record<LogoVariant, string> = {
  color: `${BRAND}/mark-blue.png`,
  white: `${BRAND}/mark-white.png`,
  black: `${BRAND}/mark-black.png`,
};
const LOGO_SRC: Record<LogoVariant, string> = {
  color: `${BRAND}/logo-color.png`,
  white: `${BRAND}/logo-white.png`,
  black: `${BRAND}/logo-black.png`,
};
const STACKED_SRC: Record<Exclude<LogoVariant, "black">, string> = {
  color: `${BRAND}/stacked-color.png`,
  white: `${BRAND}/stacked-white.png`,
};

/** Native aspect ratios of the kit files (mark 145×175, primary 1133×175, stacked 818×381). */
const MARK_RATIO = "145 / 175";
const LOGO_RATIO = "1133 / 175";
const STACKED_RATIO = "818 / 381";

/**
 * Standalone FundLine icon. Size it with `className` (e.g. `h-6` or `size-[88px]`); the box keeps
 * the mark's native 145:175 ratio and the image is contained inside it.
 */
export function FundLineMark({ className, variant = "color" }: { className?: string; variant?: LogoVariant }) {
  return (
    <span className={cn("relative inline-block shrink-0", className)} style={{ aspectRatio: MARK_RATIO }} aria-hidden="true">
      <Image alt="" src={MARK_SRC[variant]} fill sizes="200px" className="object-contain" />
    </span>
  );
}

/** Horizontal primary logo used in the header (24px tall like the original site's logo). */
export function FundLineLogo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span className={cn("relative inline-block h-6 shrink-0", className)} style={{ aspectRatio: LOGO_RATIO }} role="img" aria-label="FundLine Capital">
      <Image alt="FundLine Capital" src={dark ? LOGO_SRC.white : LOGO_SRC.color} fill priority sizes="160px" className="object-contain" />
    </span>
  );
}

/** Stacked logo used in the footer link grid (replaces the corgi-dog badge). */
export function FundLineBadge({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span className={cn("relative inline-block w-[107px]", className)} style={{ aspectRatio: STACKED_RATIO }} role="img" aria-label="FundLine Capital">
      <Image alt="FundLine Capital" src={dark ? STACKED_SRC.white : STACKED_SRC.color} fill sizes="240px" className="object-contain" />
    </span>
  );
}
