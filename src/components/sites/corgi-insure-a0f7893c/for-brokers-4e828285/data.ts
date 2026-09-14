import type { HeaderActions } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteHeader";
import type { FooterCta } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteFooter";
import type { BrokerHeroContent, PartnerWordmark, WorkflowStep } from "@/types/sites/corgi-insure-a0f7893c/for-brokers";

/**
 * FundLine Capital — broker / ISO partner page content.
 * Layout comes from the corgi.insure /for-brokers clone; the copy is lending-specific and fictional.
 */

/** Public asset root for this page. */
export const BROKER_ASSETS = "/sites/corgi-insure-a0f7893c/for-brokers-4e828285";

export const BROKER_LINKS = {
  apply: "/for-brokers#apply",
  partnerSignIn: "/partners/sign-in",
  signIn: "/sign-in",
} as const;

export const BROKER_META = {
  title: "For Brokers & ISO Partners | FundLine Capital",
  description:
    "Small business lending, from application to funding. One partner workspace for applications, live offers, e-signature, payoff letters, and funding confirmations.",
} as const;

/** Header actions on this page (source: Log in / Get appointed / Broker sign in). */
export const BROKER_NAV_ACTIONS: HeaderActions = {
  signIn: { label: "Sign in", href: BROKER_LINKS.signIn },
  secondary: { label: "Get approved", href: BROKER_LINKS.apply },
  primary: { label: "Partner sign in", href: BROKER_LINKS.partnerSignIn },
};

export const BROKER_HERO: BrokerHeroContent = {
  headingLine1: "Small Business Lending,",
  headingLine2: "From Application to Funding.",
  sub: "Business lending in one partner workspace: applications, live offers, e-signature, payoff letters, and funding confirmations.",
  primary: { label: "Get approved", href: BROKER_LINKS.apply },
  secondary: { label: "Sign in", href: BROKER_LINKS.partnerSignIn },
  art: {
    hand: `${BROKER_ASSETS}/hero-hand-figma.png`,
    stamp: `${BROKER_ASSETS}/hero-stamp-figma.png`,
  },
};

/** Fictional partner brokerages and lender partners, rendered as text wordmarks (no real logos). */
export const PARTNER_WORDMARKS: PartnerWordmark[] = [
  { name: "Northgate Funding" },
  { name: "Blue Harbor Capital" },
  { name: "Meridian Business Loans" },
  { name: "Summit ISO" },
  { name: "Crestline Partners" },
  { name: "Harbor & Vane" },
  { name: "Ridgeway Lending" },
  { name: "Atlas Merchant" },
  { name: "Keystone Brokers" },
  { name: "Lumen Capital" },
];

/**
 * The five steps of the broker workflow sentence. Rendered inline as chips with a trailing icon;
 * `connector` is the plain text that follows each chip.
 */
export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: "application",
    phrase: "Complete the application or send your client a link",
    icon: "edit_document",
    punctuation: ",",
    connector: " then ",
    caption: "Fill in the application yourself or send a secure link. Your client uploads statements and signs in minutes.",
  },
  {
    id: "offers",
    phrase: "get live offers",
    icon: "request_quote",
    punctuation: ",",
    connector: " ",
    caption: "One submission, shopped to the lenders that fit. Real offers with rates, terms, and amounts land in the workspace.",
  },
  {
    id: "esign",
    phrase: "accept terms and e-sign the agreement",
    icon: "draw",
    punctuation: ",",
    connector: " ",
    caption: "Your client picks an offer, and the agreement is signed electronically without printing or scanning.",
  },
  {
    id: "funding",
    phrase: "send a funding confirmation",
    icon: "payments",
    punctuation: ",",
    connector: " and ",
    caption: "Confirm disbursement the moment funds move, with a record your client and lender can both see.",
  },
  {
    id: "payoff",
    phrase: "issue payoff letters",
    icon: "workspace_premium",
    punctuation: "",
    connector: " all from one client record.",
    caption: "Generate payoff letters and balance statements on demand for refinances, renewals, and early payoffs.",
  },
];

export const PRODUCTS_HEADING = "Our Core Products, Ready to Offer";

/** Footer CTA band on this page (source: Grow your book with Corgi… / Get appointed / Broker sign in). */
export const BROKER_FOOTER_CTA: FooterCta = {
  headingLine1: "Grow your book with FundLine.",
  headingLine2: "Get approved and manage every client in one workflow.",
  buttons: {
    demo: { label: "Partner sign in", href: BROKER_LINKS.partnerSignIn },
    insured: { label: "Get approved", href: BROKER_LINKS.apply },
  },
};
