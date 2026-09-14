/** Content types for the FundLine Capital home page (built on the corgi.insure layout). */

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
  /** Render items in a 2-column grid. */
  grid?: boolean;
  /** Optional trailing "View all" link pinned to the bottom of the column. */
  viewAll?: { label: string; href: string };
}

export interface NavHighlightCard {
  title: string;
  description: string;
  href: string;
  /** Optional photo; when omitted the card renders a branded gradient panel instead. */
  image?: string;
  imageAlt: string;
  /** Tailwind object-position class for the background image. */
  imagePositionClass?: string;
  /** Material icon drawn on the gradient panel when there is no image. */
  icon?: MaterialIconName;
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

/** One item of the hero ticker strip (a stat rendered as text). */
export interface HeroTickerItem {
  value: string;
  label: string;
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
  /** Product route the pill links to. */
  href: string;
}

export interface PackageArt {
  src: string;
  width: number;
  height: number;
  wrapper: { top: number; left: number; width: number; height: number };
  transform: string;
  objectFit: "contain" | "cover";
}

export interface CoveragePackage {
  id: string;
  title: string;
  description: string;
  pillsIntro: string;
  /** Labels referencing POLICY_PILLS. */
  policies: string[];
  morePoliciesHref?: string;
  art: PackageArt;
  ctaHref: string;
  ctaIcon: MaterialIconName;
  ctaVariant: "primary" | "black";
}

export interface Testimonial {
  /** 1-based index into the customer portrait pool. */
  photo?: number;
  quote: string;
  author: string;
  role: string;
  /** Company name used for the avatar chip / aria-label. */
  company: string;
  /** Optional portrait; when omitted the card renders a gradient block with the author's initials. */
  image?: string;
  /** Optional company logo; when omitted the chip shows the company's initial. */
  companyLogo?: string;
  companyUrl?: string;
}

export interface Policy {
  title: string;
  description: string;
  href: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  /** Typical time from accepted offer to funds, shown as the card's speed label (e.g. "Same day"). */
  speed: string;
}

/** One proof bullet in the "Apply in 15 minutes" section. */
export interface GetQuotedProof {
  icon: MaterialIconName;
  label: string;
}

export interface SpecializedCoverage {
  title: string;
  desc: string;
  /** 1-bit stipple illustration for the program (public path). */
  image: string;
}

export interface FaqItem {
  question: string;
  /** Trusted HTML (may contain <a class="underline"> links). */
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

/** One item of the footer ticker (a stat rendered as text instead of a press logo). */
export interface FooterStat {
  value: string;
  label: string;
  caption: string;
}

export interface OrbLogo {
  /** Image source (legacy) … */
  src?: string;
  /** … or a Material icon drawn inside the orb. */
  icon?: MaterialIconName;
  /** Fill icons render at the full orb size instead of 40/26px. */
  fill?: boolean;
}
