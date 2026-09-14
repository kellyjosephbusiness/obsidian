import type { FaqItem } from "@/types/sites/corgi-insure-a0f7893c/home";
import type { Breadcrumb, StagePackage, WhyCard } from "@/types/sites/corgi-insure-a0f7893c/startup-loans";
import { LINKS } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/data";

/**
 * FundLine Capital — /startup-loans content. Layout mirrors corgi.insure/startup-insurance;
 * copy is lending-only (funding packages for businesses under two years old).
 */

export const PAGE_ASSETS = "/sites/corgi-insure-a0f7893c/startup-insurance-fc836df6";

export const STARTUP_META = {
  title: "Startup Loans & Funding Packages | FundLine Capital",
  description:
    "Startup funding that moves at your pace. Pre-set capital packages for every growth stage, or build your own. Apply in minutes and see real offers instantly.",
} as const;

export const BREADCRUMBS: Breadcrumb[] = [{ label: "Home", href: "/" }, { label: "Startup Loans" }];

export const STARTUP_HERO = {
  heading: "Startup Funding That Moves at Your Pace",
  sub: "Your business needs the right capital at every growth stage. Apply in minutes and see real offers instantly.",
  cta: { label: "Get startup funding", href: `${LINKS.apply}?package=starting` },
  cloud: `${PAGE_ASSETS}/cloud.webp`,
} as const;

export const PACKAGES_HEADER = {
  headingLine1: "Scalable Startup Funding Packages &",
  headingLine2: "Customizable Financing Solutions",
  sub: "Pre-set capital for every stage. Or build your own custom package.",
  bestForLabel: "Best for:",
  tableHead: { what: "What it funds", product: "Product" },
} as const;

/** Where each product pill links (labels match the home `POLICY_PILLS`). */
export const PRODUCT_LINKS: Record<string, string> = {
  "Term Loan": "/term-loans",
  "Line of Credit": "/loan-types#line-of-credit",
  "SBA 7(a)": "/loan-types#sba-loans",
  Equipment: "/loan-types#equipment-financing",
  Invoice: "/loan-types#invoice-financing",
  Startup: "/startup-loans#just-starting",
  "Credit Card": "/loan-types#business-credit-card",
  "Real Estate": "/loan-types#commercial-real-estate",
};

const CTA_LABEL = "Apply now";

export const STAGE_PACKAGES: StagePackage[] = [
  {
    id: "just-starting",
    bestFor: "Pre-revenue or first-year businesses that need working capital to hire or lease space.",
    description:
      "Set up your new business with the essential startup funding needed for a first lease and initial hiring. This package pairs a business credit card and a starter line of credit with equipment financing, so you can cover everyday costs and first purchases without draining cash. Perfect for founders who want to satisfy a landlord, make a first hire, and stay lean.",
    title: "Just Starting",
    tagline: "Working capital for your first hires and first customers",
    art: {
      src: `${PAGE_ASSETS}/seed-leaf.webp`,
      width: 69,
      height: 125,
      wrapper: { top: 7, right: -31, width: 120, height: 143 },
      transform: "rotate(-28.18deg)",
      objectFit: "contain",
    },
    cta: { label: CTA_LABEL, href: `${LINKS.apply}?package=starting`, icon: "psychiatry", variant: "primary" },
    lines: [
      { text: "Early-stage needs, sized to revenue", product: "Startup" },
      { text: "Everyday spend that builds credit", product: "Credit Card" },
      { text: "Vehicles, machinery, and technology", product: "Equipment" },
      { text: "Cash-flow gaps, drawn only as needed", product: "Line of Credit" },
    ],
  },
  {
    id: "growing",
    bestFor: "Businesses with steady revenue adding people, inventory, or a second location.",
    description:
      "Designed for fast-growing companies, this package scales with your revenue. It adds a term loan for one-time investments like a build-out or a large order, invoice financing to unlock cash tied up in receivables, and an SBA 7(a) option for business owners who can plan ahead for lower rates. Fund your next hire and your next customer at the same time as you scale.",
    title: "Growing",
    tagline: "Capital to add locations, inventory, and people",
    art: {
      src: `${PAGE_ASSETS}/series-a-plant.png`,
      width: 171,
      height: 139,
      wrapper: { top: -24, right: -52, width: 188, height: 161 },
      transform: "rotate(-7.83deg) scaleX(-1)",
      objectFit: "contain",
    },
    cta: { label: CTA_LABEL, href: `${LINKS.apply}?package=growing`, icon: "eco", variant: "primary" },
    lines: [
      { text: "One-time investments and big orders", product: "Term Loan" },
      { text: "Cash-flow gaps, drawn only as needed", product: "Line of Credit" },
      { text: "Long-term growth at lower rates", product: "SBA 7(a)" },
      { text: "Vehicles, machinery, and technology", product: "Equipment" },
      { text: "Cash tied up in unpaid invoices", product: "Invoice" },
      { text: "Everyday spend that builds credit", product: "Credit Card" },
    ],
  },
  {
    id: "established",
    bestFor: "Established businesses with large teams, several locations, or an acquisition ahead.",
    description:
      "Our most complete funding bundle for established business owners and scale-ups. This plan offers the highest limits, including commercial real estate loans to buy or refinance the property you operate from and SBA-backed terms for major expansions. Finance acquisitions, new markets, and larger inventory positions with offers from lenders who specialize in bigger deals.",
    title: "Established",
    tagline: "Bigger limits for property, acquisitions, and scale",
    art: {
      src: `${PAGE_ASSETS}/growth-tree.png`,
      width: 229,
      height: 185,
      wrapper: { top: -58, right: -103, width: 248, height: 209 },
      transform: "rotate(-6.17deg)",
      objectFit: "contain",
    },
    cta: { label: CTA_LABEL, href: `${LINKS.apply}?package=established`, icon: "park", variant: "primary" },
    lines: [
      { text: "One-time investments and big orders", product: "Term Loan" },
      { text: "Cash-flow gaps, drawn only as needed", product: "Line of Credit" },
      { text: "Long-term growth at lower rates", product: "SBA 7(a)" },
      { text: "Vehicles, machinery, and technology", product: "Equipment" },
      { text: "Cash tied up in unpaid invoices", product: "Invoice" },
      { text: "Everyday spend that builds credit", product: "Credit Card" },
      { text: "Buying or refinancing your location", product: "Real Estate" },
    ],
  },
  {
    id: "custom-package",
    bestFor: "Specialized industries like trucking, healthcare, or restaurants with unique cash flow.",
    description:
      "Every business is different. Our custom startup package lets you pick the products and amounts that fit your industry and season. Whether you need fleet financing, a practice loan, or a short-term bridge before a bigger round, our funding specialists help you build a financing plan that matches your exact needs and timeline.",
    title: "Custom Package",
    tagline: "Know exactly what you need?",
    art: {
      src: `${PAGE_ASSETS}/custom-hands.png`,
      width: 178,
      height: 98,
      wrapper: { bottom: -1, right: -70, width: 178, height: 98 },
      transform: "scaleX(-1)",
      objectFit: "cover",
    },
    cta: { label: CTA_LABEL, href: `${LINKS.apply}?package=custom`, icon: "widgets", variant: "black" },
    pillCloud: {
      intro: "Choose your products",
      products: ["Term Loan", "Line of Credit", "SBA 7(a)", "Equipment", "Real Estate", "Invoice", "Credit Card", "Startup"],
      moreHref: "/startup-loans#specialty-financing",
    },
  },
];

export const ESSENTIAL_HEADER = {
  heading: "Essential Funding for All Growth Stages",
  sub: "We make sure your growing business is funded from every angle.",
  instant: {
    label: "Instant offers",
    badge: "Fast decision",
    learnMore: "Learn more",
    cta: { label: "Get funded instantly", href: LINKS.apply },
  },
  specialty: {
    id: "specialty-financing",
    label: "Specialty financing",
    turnaround: "1-14 days to fund",
    cta: { label: "Choose your specialty products", href: LINKS.allFinancing },
  },
} as const;

export const WHY_HEADER = { heading: "Why Startups Choose FundLine" } as const;

export const WHY_CARDS: WhyCard[] = [
  {
    icon: "verified_user",
    tileClass: "bg-[#4e65ff]",
    iconClass: "text-white",
    title: "Every Product, One Application",
    description: "Every loan product a startup needs in one place. Credit lines, term loans, SBA, and more.",
  },
  {
    icon: "bolt",
    tileClass: "bg-[#9b6cff]",
    iconClass: "text-white",
    title: "Fast Decisions",
    description: "Apply in 15 minutes, compare offers from 75+ lenders, and fund in as little as 24 hours.",
  },
  {
    icon: "workspace_premium",
    tileClass: "bg-[#bdff4e]",
    iconClass: "text-[#313131]",
    title: "Founder Focused",
    description: "Built by founders, for founders. No impact to your credit to apply, and a specialist on call.",
  },
];

export const STARTUP_FAQ: FaqItem[] = [
  {
    question: "What funding does a startup qualify for?",
    answerHtml:
      'Most businesses under two years old start with a <a class="underline" href="/loan-types#business-credit-card">business credit card</a>, a starter <a class="underline" href="/loan-types#line-of-credit">line of credit</a>, or <a class="underline" href="/loan-types#equipment-financing">equipment financing</a>, since these are sized to early revenue and the owner’s personal credit. As revenue becomes steady, term loans, invoice financing, and SBA 7(a) loans open up.',
  },
  {
    question: "How much does startup funding cost?",
    answerHtml:
      "Starter packages are typically smaller and priced higher than established-business programs. First-year businesses often see lines of credit from $5K to $50K, while growing companies with 12+ months of revenue commonly qualify for $50K to $500K at lower rates. Cost depends on time in business, revenue, credit history, and the products you select. Apply now to see actual offers, no sales call required.",
  },
  {
    question: "When should a startup apply?",
    answerHtml:
      "Apply as soon as you have a registered business and a business bank account. Building a borrowing history early makes every later round of funding cheaper and faster. Waiting until cash is tight usually means fewer options and worse terms. Starting early with FundLine gets you matched from day one.",
  },
  {
    question: "Do I need revenue before applying?",
    answerHtml:
      "Not always. Some starter products, like business credit cards and equipment financing, lean on the owner’s personal credit and the asset being financed rather than revenue. Most lines of credit and term loans do look for a few months of deposits. Applying tells you exactly which products you qualify for today.",
  },
  {
    question: "How quickly can I get funded?",
    answerHtml:
      "Most business owners complete the FundLine application in about 15 minutes and see offers within a few days. Once you accept an offer, many lenders can fund in as little as 24 hours. Our marketplace replaces the traditional 2-4 week bank underwriting cycle, so you can get funded before your next big decision.",
  },
  {
    question: "What makes FundLine different from a bank?",
    answerHtml:
      'FundLine Capital is a small business funding brokerage, not a single lender. One application goes to the lenders that fit your profile, so you compare real offers instead of waiting weeks for one answer. Read more about <a class="underline" href="/blog/marketplace-vs-bank">working with a funding broker vs. banks</a>.',
  },
  {
    question: "Does applying affect my credit?",
    answerHtml:
      "Filling out an application and submitting it to our lender network does not impact your personal credit score. Depending on the product and lender, accepting a funding offer may involve a hard credit inquiry, which the lender will disclose before you proceed.",
  },
];
