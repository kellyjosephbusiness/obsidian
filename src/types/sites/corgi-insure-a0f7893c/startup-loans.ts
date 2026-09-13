/** Content types for the FundLine Capital /startup-loans page (built on the corgi.insure startup-insurance layout). */

import type { MaterialIconName } from "./home";

export interface Breadcrumb {
  label: string;
  href?: string;
}

/** Decorative artwork positioned inside a stage-package card header. */
export interface StageArt {
  src: string;
  width: number;
  height: number;
  /** Wrapper box (px). `top` OR `bottom` anchors the box vertically; `right` anchors it to the header's right edge. */
  wrapper: { top?: number; bottom?: number; right: number; width: number; height: number };
  transform: string;
  objectFit: "contain" | "cover";
}

/** One row of the "What it funds | Product" checklist. */
export interface FundingLine {
  /** What the product pays for. */
  text: string;
  /** Pill label — must match a `POLICY_PILLS` label. */
  product: string;
}

export interface StagePackage {
  id: string;
  /** Left/right text block. */
  bestFor: string;
  description: string;
  /** Card header. */
  title: string;
  tagline: string;
  art: StageArt;
  cta: { label: string; href: string; icon: MaterialIconName; variant: "primary" | "black" };
  /** Checklist rows (packages) … */
  lines?: FundingLine[];
  /** … or a free pill cloud (custom package). */
  pillCloud?: { intro: string; products: string[]; moreHref: string };
}

export interface WhyCard {
  icon: MaterialIconName;
  /** Tailwind bg class for the round icon tile. */
  tileClass: string;
  /** Tailwind text class for the icon glyph. */
  iconClass: string;
  title: string;
  description: string;
}
