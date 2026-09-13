import type { CoveragePackage, FaqItem } from "@/types/sites/corgi-insure-a0f7893c/home";
import type {
  BreadcrumbItem,
  FundingMoment,
  IndustryChip,
  IndustryHeroContent,
  ThreeUpBandContent,
} from "@/types/sites/corgi-insure-a0f7893c/industry-ai";
import { COVERAGE_PACKAGES, LINKS } from "../root-8a5edab2/data";

/**
 * FundLine Capital — "/industry/ai" content (funding for AI companies).
 * Layout mirrors corgi.insure/ai; copy is lending-focused and all figures are illustrative.
 */

/** Public asset root for this page. */
export const AI_ASSETS = "/sites/corgi-insure-a0f7893c/ai-97ffa848";

export const AI_META = {
  title: "Funding for AI Companies | FundLine Capital",
  description:
    "Working capital, GPU and cloud financing, and growth loans for AI and software companies. One application, offers from 75+ lenders that understand contract-based revenue.",
} as const;

export const AI_BREADCRUMB: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/#industries" },
  { label: "AI" },
];

export const AI_HERO: IndustryHeroContent = {
  tile: {
    base: `${AI_ASSETS}/ai-hero-base.png`,
    foreground: `${AI_ASSETS}/ai-hero-foreground.png`,
    alt: "",
  },
  headingLine1: "Funding for AI Companies,",
  headingLine2: "Built for How They Grow",
  sub: "Compute, hiring, and go-to-market capital for teams whose revenue arrives in contracts, not paychecks. One application, offers that understand how AI products scale.",
  cta: { label: "Apply now", href: LINKS.apply, icon: "arrow_forward" },
};

export const AI_WHY: ThreeUpBandContent = {
  headingLine1: "Why AI Companies Need",
  headingLine2: "Capital Built for Compute, Contracts, and Growth",
  items: [
    {
      title: "Compute bills before revenue",
      body: "Cover GPU reservations, cloud commitments, and inference costs that land months before the first customer invoice clears.",
    },
    {
      title: "Enterprise contracts that pay late",
      body: "Bridge the net-60 and net-90 terms on six-figure pilots so a signed deal never becomes a cash-flow problem.",
    },
    {
      title: "Hiring ahead of the curve",
      body: "Bring on ML engineers, researchers, and sales before ARR catches up, without giving away another slice of equity.",
    },
  ],
};

export const AI_MOMENTS_HEADING = {
  line1: "Common Funding Moments for AI Companies:",
  line2: "Compute Spikes, Enterprise Pilots, and Hiring Waves",
} as const;

export const AI_MOMENTS: FundingMoment[] = [
  {
    id: "compute-spike",
    title: "The compute spike",
    body: "A launch goes better than planned and the GPU and cloud bill jumps 4x in a month, weeks before usage revenue is billed.",
    icon: "memory",
  },
  {
    id: "enterprise-pilot",
    title: "The enterprise pilot",
    body: "A Fortune-500 customer signs a six-figure pilot on net-90 terms and asks for a dedicated deployment before the first payment.",
    icon: "handshake",
  },
  {
    id: "hiring-wave",
    title: "The hiring wave",
    body: "Five senior ML engineers accept offers in the same quarter and payroll doubles before annual recurring revenue catches up.",
    icon: "groups",
  },
  {
    id: "compliance-audit",
    title: "The security & compliance audit",
    body: "Vendor risk teams require SOC 2 and penetration testing before connecting to your API, and the audit costs land before the deal closes.",
    icon: "verified_user",
  },
];

export const AI_PACKAGES_HEADER = {
  heading: "Funding Packages That Slot Perfectly Into AI Companies",
  /** The source section has no sub line under the heading. */
  sub: "",
} as const;

/** Stage packages for AI startups; the card art is shared with the home page journey cards. */
export const AI_PACKAGES: CoveragePackage[] = [
  {
    id: "pre-seed-seed",
    title: "Pre-Seed & Seed",
    description: "Core capital for your team and your first product",
    pillsIntro: "Products included in this package:",
    policies: ["Startup", "Credit Card", "Equipment", "Line of Credit"],
    art: COVERAGE_PACKAGES[0].art,
    ctaHref: `${LINKS.apply}?package=seed&industry=ai`,
    ctaIcon: "psychiatry",
    ctaVariant: "primary",
  },
  {
    id: "series-a",
    title: "Series A",
    description: "Working capital that helps you close bigger enterprise deals",
    pillsIntro: "Products included in this package:",
    policies: ["Line of Credit", "Term Loan", "Invoice", "Equipment", "Credit Card", "SBA 7(a)"],
    art: COVERAGE_PACKAGES[1].art,
    ctaHref: `${LINKS.apply}?package=series-a&industry=ai`,
    ctaIcon: "eco",
    ctaVariant: "primary",
  },
  {
    id: "growth-stage",
    title: "Growth Stage",
    description: "Bigger limits for compute, acquisitions, and scale",
    pillsIntro: "Products included in this package:",
    policies: ["Term Loan", "Line of Credit", "SBA 7(a)", "Equipment", "Invoice", "Credit Card", "Real Estate"],
    art: COVERAGE_PACKAGES[2].art,
    ctaHref: `${LINKS.apply}?package=growth&industry=ai`,
    ctaIcon: "park",
    ctaVariant: "primary",
  },
  {
    id: "custom",
    title: "Custom Package",
    description: "Know exactly what you need?",
    pillsIntro: "Pick the products that fit your business best",
    policies: ["Term Loan", "Line of Credit", "SBA 7(a)", "Equipment", "Real Estate", "Invoice", "Credit Card", "Startup"],
    morePoliciesHref: LINKS.allFinancing,
    art: COVERAGE_PACKAGES[3].art,
    ctaHref: `${LINKS.apply}?package=custom&industry=ai`,
    ctaIcon: "widgets",
    ctaVariant: "black",
  },
];

export const AI_PRODUCTS_HEADER = {
  heading: "Core Funding Products for AI Companies",
  sub: "From compute bills to enterprise pilots, these products help AI teams fund infrastructure, people, and growth.",
  cta: { label: "Apply now", href: LINKS.apply },
} as const;

export const AI_SCENARIOS: ThreeUpBandContent = {
  headingLine1: "AI Funding Scenarios",
  headingLine2: "Compute Crunches, Pilot Gaps, and Hiring Sprints",
  items: [
    {
      title: "The compute crunch",
      body: "A model team pre-pays a 4-month GPU reservation from a $400K line of credit and repays it as inference revenue arrives.",
    },
    {
      title: "The pilot gap",
      body: "Invoice financing advances 85% of a $250K Fortune-500 pilot invoice on net-90 terms, so the deployment ships on time.",
    },
    {
      title: "The hiring sprint",
      body: "A 36-month term loan funds five ML engineering hires before the Series A closes, without touching the runway.",
    },
  ],
};

export const AI_INDUSTRIES_HEADING = "Explore Funding by Industry";

/** Industry chips: image sizes/crops match the source chips; icon chips fill in industries without artwork. */
export const AI_INDUSTRY_CHIPS: IndustryChip[] = [
  {
    label: "Fintech",
    href: "/industry/fintech",
    art: {
      kind: "image",
      src: `${AI_ASSETS}/fintech-hero.png`,
      box: { width: 123, height: 54 },
      cropClassName: "top-[-35.88%] left-[-19.21%] h-[174.81%] w-[137.75%]",
      fit: "cover",
    },
  },
  {
    label: "Ecommerce",
    href: "/industry/ecommerce",
    art: {
      kind: "image",
      src: `${AI_ASSETS}/crypto-hero.png`,
      box: { width: 96, height: 70 },
      cropClassName: "-top-[14.5%] left-0 h-[130%] w-full",
      fit: "cover",
    },
  },
  {
    label: "Marketplaces",
    href: "/industry/marketplaces",
    art: { kind: "image", src: `${AI_ASSETS}/marketplace-hero.png`, box: { width: 66, height: 71 }, fit: "contain" },
  },
  {
    label: "Health-tech",
    href: "/industry/healthcare",
    art: { kind: "image", src: `${AI_ASSETS}/healthtech-hero.png`, box: { width: 76, height: 70 }, fit: "contain" },
  },
  {
    label: "SaaS",
    href: "/industry/saas",
    art: { kind: "image", src: `${AI_ASSETS}/saas-cursor.png`, box: { width: 72, height: 72 }, fit: "contain" },
  },
  { label: "Trucking", href: "/industry/trucking", art: { kind: "icon", icon: "local_shipping" } },
  { label: "Construction", href: "/industry/construction", art: { kind: "icon", icon: "construction" } },
  { label: "Restaurants", href: "/industry/restaurants", art: { kind: "icon", icon: "restaurant" } },
];

export const AI_FAQ: FaqItem[] = [
  {
    question: "What financing does an AI startup qualify for?",
    answerHtml:
      'Most AI companies start with a <a class="underline" href="/loan-types#line-of-credit">business line of credit</a> for compute and cloud spend, a business credit card for tooling, and <a class="underline" href="/loan-types#equipment-financing">equipment financing</a> for on-prem GPUs. Companies with signed contracts add invoice financing and term loans. FundLine matches your profile against 75+ lenders from a single application.',
  },
  {
    question: "Can we finance GPUs and cloud commitments?",
    answerHtml:
      "Yes. Purchased hardware such as GPU servers and networking can be financed with equipment loans secured by the hardware itself. Reserved cloud capacity and multi-year compute commitments are usually funded from a line of credit or a term loan sized to the commitment schedule.",
  },
  {
    question: "Does contract revenue count as revenue?",
    answerHtml:
      "It does. Lenders in our network look at signed enterprise contracts, annual recurring revenue, usage-based billing, and bank deposits. Lumpy, contract-based revenue is normal for AI companies and several of our lenders underwrite specifically against it.",
  },
  {
    question: "How fast can an AI company get funded?",
    answerHtml:
      "The FundLine application takes about 15 minutes. Lines of credit and invoice financing typically return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept. SBA and larger term loans take longer because of documentation.",
  },
  {
    question: "Do we need to be profitable to get funding?",
    answerHtml:
      "No. Many AI companies are investing ahead of revenue. Lenders weigh time in business, monthly revenue, cash on hand, credit history, and the quality of your customer contracts. Being pre-profit narrows the options but rarely closes them.",
  },
  {
    question: "Can we get funding before or between equity rounds?",
    answerHtml:
      "Yes. Non-dilutive funding such as a line of credit or a term loan is commonly used to extend runway between rounds or to fund hires and compute before a priced round closes. Investors often view a sensible debt line as a sign of financial maturity.",
  },
  {
    question: "Does applying affect our credit or our founders’ credit?",
    answerHtml:
      "Submitting a FundLine application does not impact your personal or business credit score. Accepting a specific offer may involve a hard inquiry, which the lender discloses before you proceed.",
  },
  {
    question: "What documents do AI companies need to apply?",
    answerHtml:
      'Typically three to six months of business bank statements, basic company details, and, for larger amounts, a recent P&L and a list of key customer contracts. See our <a class="underline" href="/guides/getting-ready-to-borrow">getting ready to borrow</a> guide for a checklist.',
  },
  {
    question: "Can we use the funding for open-source or foundation-model costs?",
    answerHtml:
      "Yes. Working capital products are use-agnostic, so API spend with foundation-model providers, licensing, and data acquisition all qualify. Equipment financing is limited to physical hardware, and SBA loans have their own eligible-use rules.",
  },
];
