/** Content types for the FundLine Capital "/industry/ai" page (built on the corgi.insure /ai layout). */

import type { MaterialIconName } from "./home";

/** Hero: 72px illustration tile (two stacked images), two-line H1, sub and CTA. */
export interface IndustryHeroContent {
  tile: { base: string; foreground: string; alt: string };
  headingLine1: string;
  headingLine2: string;
  sub: string;
  cta: { label: string; href: string; icon: MaterialIconName };
}

/** One column of the three-up "Why" / "Scenarios" bands. */
export interface ThreeUpItem {
  title: string;
  body: string;
}

/** Two-tone H2 (ink line + grey line) followed by three bordered columns. */
export interface ThreeUpBandContent {
  headingLine1: string;
  headingLine2: string;
  items: ThreeUpItem[];
}

/** One auto-advancing item of the "funding moments" section. */
export interface FundingMoment {
  id: string;
  title: string;
  body: string;
  /** Material Symbols glyph drawn on the dark card while this moment is active. */
  icon: MaterialIconName;
}

/** Breadcrumb trail rendered above the hero (Home → Industries → AI). */
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/** Photo chip: the image box size plus an optional oversized crop layer (percent offsets). */
export interface IndustryChipImage {
  kind: "image";
  src: string;
  /** Rendered box (px). */
  box: { width: number; height: number };
  /** When present the image is drawn oversized inside an overflow-hidden box (Tailwind classes). */
  cropClassName?: string;
  fit: "cover" | "contain";
}

/** Icon chip: a large Material Symbols glyph in place of a photo. */
export interface IndustryChipIcon {
  kind: "icon";
  icon: MaterialIconName;
}

export interface IndustryChip {
  label: string;
  href: string;
  art: IndustryChipImage | IndustryChipIcon;
}
