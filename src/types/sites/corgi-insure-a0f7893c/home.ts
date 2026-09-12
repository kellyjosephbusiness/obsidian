/** Content types for the corgi.insure home page clone. */

/** A Material Symbols Sharp ligature name, e.g. "keyboard_arrow_down". */
export type MaterialIconName = string;

export interface NavMenuItem {
  label: string;
  /** Omitted for non-link rows (e.g. "More coming soon"). */
  href?: string;
  icon: MaterialIconName;
  /** Small pill rendered after the label (e.g. "COMING SOON"). */
  badge?: string;
}

export interface NavMenuColumn {
  title: string;
  items: NavMenuItem[];
  /** Column width multiplier (1 = --dropdown-column-width, 2 = double). */
  span: 1 | 2;
  /** Render items in a 2-column grid (used by "By Industry"). */
  grid?: boolean;
  /** Optional trailing "View all" link pinned to the bottom of the column. */
  viewAll?: { label: string; href: string };
}

export interface NavHighlightCard {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  /** Tailwind object-position class for the background image. */
  imagePositionClass?: string;
}

export interface NavMenu {
  id: string;
  label: string;
  /** Trigger href (the trigger is an <a> when present, a <button> otherwise). */
  href?: string;
  /** --dropdown-column-width at base / 2xl / min-1680 (px). */
  columnWidth: { base: number; xl2: number; w1680: number };
  columns: NavMenuColumn[];
  highlights: NavHighlightCard[];
}

export interface CompanyLogo {
  alt: string;
  src: string;
  width: number;
  height: number;
}

export interface PolicyPill {
  label: string;
  description: string;
}

export interface PackageArt {
  src: string;
  /** Rendered image size in px. */
  width: number;
  height: number;
  /** Absolute wrapper box inside the 160px card header (desktop values). */
  wrapper: { top: number; left: number; width: number; height: number };
  /** CSS transform applied to the image wrapper. */
  transform: string;
  objectFit: "contain" | "cover";
}

export interface CoveragePackage {
  id: string;
  title: string;
  description: string;
  /** Line above the pills. */
  pillsIntro: string;
  /** Labels referencing POLICY_PILLS. */
  policies: string[];
  /** The "+" chip on the custom package. */
  morePoliciesHref?: string;
  art: PackageArt;
  ctaHref: string;
  ctaIcon: MaterialIconName;
  ctaVariant: "orange" | "black";
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
  companyLogo: string;
  companyUrl: string;
}

export interface Policy {
  title: string;
  description: string;
  href: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
}

export interface SpecializedCoverage {
  title: string;
  desc: string;
}

export interface FaqItem {
  question: string;
  /** Trusted HTML from the source site (contains <a class="underline"> links). */
  answerHtml: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface PressItem {
  alt: string;
  src: string;
  width: number;
  height: number;
  outlet: string;
  date: string;
}

export interface OrbLogo {
  src: string;
  /** Fill icons render at the full orb size (64/52px) instead of 40/26px. */
  fill?: boolean;
}
