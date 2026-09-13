import type {
  CoveragePackage,
  FaqItem,
  FooterColumn,
  FooterLink,
  FooterStat,
  HeroTickerItem,
  NavMenu,
  OrbLogo,
  Policy,
  PolicyPill,
  SpecializedCoverage,
  Testimonial,
} from "@/types/sites/corgi-insure-a0f7893c/home";

/**
 * FundLine Capital — small-business lending marketplace content.
 * Layout/components come from the corgi.insure clone; copy is adapted from lendio.com and reworded.
 */

/** Public asset roots for this page. */
export const ASSETS = "/sites/corgi-insure-a0f7893c/root-8a5edab2";
export const SHARED = "/sites/corgi-insure-a0f7893c/shared";

export const BRAND = {
  name: "FundLine Capital",
  shortName: "FundLine",
  tagline: "Small business funding, matched in minutes.",
} as const;

export const LINKS = {
  apply: "/apply",
  signIn: "/sign-in",
  bookCall: "/book-a-call",
  customers: "/customer-stories",
  loanTypes: "/loan-types",
  allFinancing: "/loan-types#all-financing",
  announcement: "/news/same-day-decisions",
} as const;

export const ANNOUNCEMENT = {
  href: LINKS.announcement,
  /** "New: **same-day** funding decisions on lines of credit up to **$250K** | Learn more" */
  parts: ["New: ", "same-day", " funding decisions on lines of credit up to ", "$250K", " | ", "Learn more"],
} as const;

const HIGHLIGHTS: NavMenu["highlights"] = [
  {
    title: "Talk to a specialist",
    description: "For owners who want a guided funding plan.",
    href: LINKS.bookCall,
    imageAlt: "Talk to a funding specialist",
    icon: "support_agent",
  },
  {
    title: "$1.2B+ funded",
    description: "Matched to owners through our lender network.",
    href: "/customer-stories",
    imageAlt: "$1.2B+ funded",
    icon: "trending_up",
  },
];

export const NAV_MENUS: NavMenu[] = [
  {
    id: "solutions",
    label: "Business loans",
    href: LINKS.loanTypes,
    columnWidth: { base: 176, xl2: 200, w1680: 220 },
    columns: [
      {
        title: "By Type",
        span: 1,
        items: [
          { label: "Term loans", icon: "payments", href: "/term-loans" },
          { label: "Line of credit", icon: "credit_score", href: "/loan-types#line-of-credit" },
          { label: "SBA loans", icon: "account_balance", href: "/loan-types#sba-loans" },
          { label: "Equipment financing", icon: "precision_manufacturing", href: "/loan-types#equipment-financing" },
        ],
        viewAll: { label: "View all", href: LINKS.loanTypes },
      },
      {
        title: "By Industry",
        span: 2,
        grid: true,
        items: [
          { label: "Construction", icon: "construction", href: "/industry/construction" },
          { label: "Healthcare", icon: "medical_services", href: "/industry/healthcare" },
          { label: "Retail", icon: "storefront", href: "/industry/retail" },
          { label: "Restaurants", icon: "restaurant", href: "/industry/restaurants" },
          { label: "Trucking", icon: "local_shipping", href: "/industry/trucking" },
          { label: "AI & software", icon: "smart_toy", href: "/industry/ai" },
          { label: "Ecommerce", icon: "shopping_cart", href: "/industry/ecommerce" },
          { label: "Manufacturing", icon: "factory", href: "/industry/manufacturing" },
          { label: "Professional services", icon: "work", href: "/industry/professional-services" },
        ],
      },
      {
        title: "Tools",
        span: 1,
        items: [{ label: "Loan calculators", icon: "calculate", href: "/calculators" }],
      },
    ],
    highlights: HIGHLIGHTS,
  },
  {
    id: "partners",
    label: "For partners",
    columnWidth: { base: 240, xl2: 240, w1680: 240 },
    columns: [
      {
        title: "Embedded financing",
        span: 1,
        items: [
          { label: "Digital application", icon: "phone_iphone", href: "/embedded/digital-application" },
          { label: "Configurable marketplace", icon: "tune", href: "/embedded/marketplace" },
          { label: "Smart matching", icon: "auto_awesome", href: "/embedded/matching" },
          { label: "Prequalify customers", icon: "verified", href: "/embedded/prequalify" },
        ],
      },
    ],
    highlights: HIGHLIGHTS,
  },
  {
    id: "products",
    label: "Products",
    href: LINKS.loanTypes,
    columnWidth: { base: 190, xl2: 210, w1680: 230 },
    columns: [
      {
        title: "Working Capital",
        span: 1,
        items: [
          { label: "Term loan", icon: "payments", href: "/term-loans" },
          { label: "Business line of credit", icon: "credit_score", href: "/loan-types#line-of-credit" },
          { label: "Invoice financing", icon: "receipt_long", href: "/loan-types#invoice-financing" },
          { label: "Merchant cash advance", icon: "point_of_sale", href: "/loan-types#merchant-cash-advance" },
          { label: "Business credit card", icon: "credit_card", href: "/loan-types#business-credit-card" },
          { label: "Working capital loan", icon: "savings", href: "/loan-types#working-capital" },
        ],
      },
      {
        title: "Growth & Assets",
        span: 1,
        items: [
          { label: "SBA 7(a) loans", icon: "account_balance", href: "/loan-types#sba-loans" },
          { label: "Equipment financing", icon: "precision_manufacturing", href: "/loan-types#equipment-financing" },
          { label: "Commercial real estate", icon: "apartment", href: "/loan-types#commercial-real-estate" },
        ],
      },
      {
        title: "Specialty",
        span: 1,
        items: [
          { label: "Truck financing", icon: "local_shipping", href: "/industry/trucking#truck-financing" },
          { label: "Fleet lines of credit", icon: "inventory_2", href: "/industry/trucking#fleet-credit" },
          { label: "Franchise financing", icon: "store", href: "/loan-types#franchise-financing" },
        ],
      },
    ],
    highlights: HIGHLIGHTS,
  },
  {
    id: "company",
    label: "Company",
    href: "/about",
    columnWidth: { base: 240, xl2: 240, w1680: 240 },
    columns: [
      {
        title: "Learn",
        span: 1,
        items: [
          { label: "Newsroom", icon: "newspaper", href: "/newsroom/series-b" },
          { label: "Small business guides", icon: "menu_book", href: "/guides" },
          { label: "Blog", icon: "edit", href: "/blog" },
        ],
      },
      {
        title: "FundLine the Company",
        span: 1,
        items: [
          { label: "About", icon: "info", href: "/about" },
          { label: "Careers", icon: "verified", href: "/careers" },
          { label: "Security", icon: "lock", href: "/security" },
          { label: "Find a location", icon: "location_on", href: "/locations" },
          { label: "Reviews", icon: "star", href: "/reviews" },
        ],
      },
    ],
    highlights: HIGHLIGHTS,
  },
  {
    id: "lenders",
    label: "For lenders",
    href: "/for-lenders",
    columnWidth: { base: 240, xl2: 240, w1680: 240 },
    columns: [
      {
        title: "Programs",
        span: 1,
        items: [
          { label: "Join our lender network", icon: "handshake", href: "/for-lenders" },
          { label: "For brokers", icon: "business_center", href: "/for-brokers" },
          { label: "Referral rewards", icon: "savings", badge: "COMING SOON" },
        ],
      },
    ],
    highlights: HIGHLIGHTS,
  },
];

export const NAV_PLAIN_LINKS: FooterLink[] = [{ label: "Customer stories", href: LINKS.customers }];

export const NAV_ACTIONS = {
  signIn: { label: "Sign in", href: LINKS.signIn },
  secondary: { label: "Book a call", href: LINKS.bookCall },
  primary: { label: "Apply now", href: LINKS.apply },
} as const;

export const HERO = {
  headingLine1: "Funding That Moves",
  headingLine2Prefix: "as Fast",
  headingAccent: "as You Do.",
  subLine1: "No hidden fees. No impact to your credit score to apply.",
  subLine2: "One application, real offers from a network of lenders.",
  cta: { label: "Check eligibility", href: LINKS.apply },
} as const;

/** Replaces the customer-logo strip: a ticker of proof points rendered as text. */
export const HERO_TICKER: HeroTickerItem[] = [
  { value: "24 hrs", label: "fastest time to funding" },
  { value: "4.8★", label: "average owner rating" },
  { value: "75+", label: "lenders in our network" },
  { value: "$1.2B+", label: "matched to small businesses" },
  { value: "12K+", label: "businesses funded" },
  { value: "15 min", label: "to complete an application" },
  { value: "$5K–$5M", label: "funding range" },
];

export const INTRO = {
  accent: "FundLine Capital",
  rest: " is a small business lending marketplace built for owners who don’t have time to wait. That means one application, offers from multiple lenders, and a funding team that knows your industry.",
  quoteCard: "Get funded!",
  quoteHref: LINKS.apply,
  ellipse: `${ASSETS}/images/journey-hero/ellipse.svg`,
  label: `${ASSETS}/images/journey-hero/boring-document-label.png`,
  document: `${ASSETS}/images/journey-hero/document.png`,
} as const;

export const QUOTE_STRIP = {
  quote: "“I expected months of back-and-forth like with a bank. With FundLine Capital, real offers showed up in a couple of days.”",
  mobileQuote: "“I expected months like with a bank. With FundLine Capital, offers showed up in days.”",
  author: "Jordan Ellis",
  role: "Owner @ Ridgeline Landscaping",
  company: "Ridgeline Landscaping",
  cta: { label: "Read the Ridgeline story", href: "/customer-stories/ridgeline" },
} as const;

export const JOURNEY = {
  heading: "Funding Designed Around Your Business’s Journey",
  sub: "From your first invoice to your next expansion, we’ve built funding packages for every phase.",
  ctaLabel: "Check eligibility",
  hint: { before: "Click any", chip: "Product", chipHref: "#explore-coverages", after: "to see how it works" },
} as const;

export const POLICY_PILLS: PolicyPill[] = [
  { label: "Term Loan", description: "A lump sum repaid over a fixed schedule. Best for one-time investments like a build-out, a big order, or an acquisition." },
  { label: "Line of Credit", description: "A revolving limit you draw from as needed and pay interest only on what you use. Ideal for smoothing cash flow." },
  { label: "SBA 7(a)", description: "Government-backed loans with longer terms and lower rates for established businesses that can wait a little longer." },
  { label: "Equipment", description: "Financing secured by the equipment itself, so you can buy trucks, machines, or tech without draining cash." },
  { label: "Invoice", description: "Turn unpaid invoices into working capital today instead of waiting 30 to 90 days for customers to pay." },
  { label: "Startup", description: "Funding options for businesses under two years old, sized to early revenue and the owner’s credit profile." },
  { label: "Credit Card", description: "A business card for everyday spend that builds business credit and keeps personal and company expenses separate." },
  { label: "Real Estate", description: "Long-term loans to buy, build, or refinance the property your business operates from." },
];

export const COVERAGE_PACKAGES: CoveragePackage[] = [
  {
    id: "starting",
    title: "Just Starting",
    description: "Working capital for your first hires and first customers",
    pillsIntro: "Products included in this package:",
    policies: ["Startup", "Credit Card", "Equipment", "Line of Credit"],
    art: {
      src: `${ASSETS}/images/journey-cards/seed-leaf.webp`,
      width: 69,
      height: 125,
      wrapper: { top: 7, left: 219, width: 120, height: 143 },
      transform: "rotate(-28.18deg)",
      objectFit: "contain",
    },
    ctaHref: `${LINKS.apply}?package=starting`,
    ctaIcon: "psychiatry",
    ctaVariant: "primary",
  },
  {
    id: "growing",
    title: "Growing",
    description: "Capital to add locations, inventory, and people",
    pillsIntro: "Products included in this package:",
    policies: ["Term Loan", "Line of Credit", "SBA 7(a)", "Equipment", "Invoice", "Credit Card"],
    art: {
      src: `${ASSETS}/images/journey-cards/series-a-plant.png`,
      width: 171,
      height: 139,
      wrapper: { top: -24, left: 172, width: 188, height: 161 },
      transform: "rotate(-7.83deg) scaleX(-1)",
      objectFit: "contain",
    },
    ctaHref: `${LINKS.apply}?package=growing`,
    ctaIcon: "eco",
    ctaVariant: "primary",
  },
  {
    id: "established",
    title: "Established",
    description: "Bigger limits for property, acquisitions, and scale",
    pillsIntro: "Products included in this package:",
    policies: ["Term Loan", "Line of Credit", "SBA 7(a)", "Equipment", "Invoice", "Credit Card", "Real Estate"],
    art: {
      src: `${ASSETS}/images/journey-cards/growth-tree.png`,
      width: 229,
      height: 185,
      wrapper: { top: -58, left: 163, width: 248, height: 209 },
      transform: "rotate(-6.17deg)",
      objectFit: "contain",
    },
    ctaHref: `${LINKS.apply}?package=established`,
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
    art: {
      src: `${ASSETS}/images/journey-cards/custom-hands.png`,
      width: 189,
      height: 105,
      wrapper: { top: -1, left: 187, width: 189, height: 105 },
      transform: "rotate(180deg)",
      objectFit: "cover",
    },
    ctaHref: `${LINKS.apply}?package=custom`,
    ctaIcon: "widgets",
    ctaVariant: "black",
  },
];

export const ADVANTAGE = {
  heading: "Our Unique Advantage",
  legacy: {
    chips: [
      { icon: "store", label: "Branch appointment" },
      { icon: "description", label: "Paper application" },
      { icon: "groups", label: "Credit committee" },
      { icon: "edit_square", label: "Underwriting (30+ days)" },
    ],
    certificateTitle: "Loan Agreement",
    title: "Traditional Bank Lending",
    description:
      "The old way: branch appointments, paper applications, credit committees, and underwriting cycles that often run several weeks. One lender, one product, one answer, and a lot of waiting.",
  },
  corgi: {
    title: "FundLine Capital",
    descriptionBefore: "FundLine Capital is the small business lending marketplace built for owners in a hurry. FundLine is faster, more transparent, and built to get you a yes because ",
    descriptionStrong: "we are one application",
    descriptionAfter:
      ". By matching your profile against 75+ lenders at once, we surface real offers in days and let you pick the terms that fit.",
  },
} as const;

/** Orbs flowing through the "tunnel": industries we fund, drawn as icons. */
export const ORB_LOGOS: OrbLogo[] = [
  { icon: "construction" },
  { icon: "restaurant", fill: true },
  { icon: "storefront" },
  { icon: "medical_services" },
  { icon: "local_shipping" },
  { icon: "factory" },
  { icon: "shopping_cart", fill: true },
  { icon: "agriculture" },
  { icon: "fitness_center", fill: true },
  { icon: "design_services" },
];

export const GET_QUOTED = {
  headingA: "Get Funded Instantly",
  headingJoin: " or ",
  headingB: "Talk to a Funding Specialist",
  selfServe: {
    heading: "Self-Serve: Apply, compare offers in minutes, and fund in as little as 24 hours.",
    body: "Complete the online application, review offers from our lender network, pick your terms, and receive funds in as little as one business day. No calls or back-and-forth required.",
    bestForLabel: "Best for:",
    bestFor: "Owners who know how much they need and want a fast, frictionless experience.",
    cta: { label: "Start your application", href: LINKS.apply, icon: "arrow_forward" },
  },
  demo: {
    heading: "Talk to a Specialist: Build a funding plan before you commit.",
    bodyBefore:
      "We’ll walk you through your options, help you compare rates and terms, and answer any questions so you can move forward with confidence. ",
    bodyStrong: "Our funding specialists are available any day of the week, including weekends!",
    bestForLabel: "Best for:",
    bestFor: "Owners who want guidance, have a more complex situation, or prefer a hands-on approach.",
    cta: { label: "Book a call", href: LINKS.bookCall, icon: "call" },
  },
  form: {
    title: "Business financials",
    subtitle: "Please share a few numbers about your business.",
    revenueLabel: "Revenue in the last 12 months ($)",
    revenuePlaceholder: "$500K",
    projectedLabel: "Average monthly revenue ($)",
    projectedPlaceholder: "$40K",
    uploadLabel: "Upload recent bank statements if available",
    dropTitle: "Drop the files here",
    dropSub: "Max 3 files, up to 50MB each",
    dragChip: "Bank Statement, Probably",
    fundingLabel: "Amount requested ($)",
    fundingPlaceholder: "Enter amount",
    dateLabel: "Business start date",
    datePlaceholder: "MM/DD/YYYY",
    back: "← Back",
    next: "Next →",
    bubble: "An estimate is fine",
    bubbleInvalid: "numbers please!",
  },
  images: {
    corgiPhone: `${ASSETS}/images/mascot/bull-chef.png`,
    cursorDocument: `${ASSETS}/images/get-covered/cursor/document.png`,
    cursorFill: `${ASSETS}/images/get-covered/cursor/cursor-fill.svg`,
    cursorBody: `${ASSETS}/images/get-covered/cursor/cursor-body.svg`,
    greenPlus: `${ASSETS}/images/get-covered/cursor/green-plus.svg`,
  },
} as const;

export interface Review {
  name: string;
  city: string;
  quote: string;
}

export const REVIEWS_HEADER = {
  headingLine1: "100s of Happy Owners",
  headingLine2: "and Counting.",
} as const;

/** Illustrative reviews (names and places are fictional). */
export const REVIEWS: Review[] = [
  { name: "Samuel K", city: "Asheville, NC", quote: "Derek at FundLine Capital really helped me out. He took the time to get what my business needed, and it felt personal, not just like another deal." },
  { name: "Linda F", city: "Boulder, CO", quote: "I worked with Jack from FundLine, and he was great. He really listened to what we needed and gave us solid advice. You can tell he cares." },
  { name: "Rajesh P", city: "Madison, WI", quote: "FundLine's been awesome for my business. Derek gave me practical advice, and I felt he really got what we were about." },
  { name: "Maria G", city: "Tucson, AZ", quote: "Three offers in two days and a specialist who explained every line. We picked a term loan and had the money before our supplier's deadline." },
  { name: "Tom B", city: "Duluth, MN", quote: "I expected a runaround like at the bank. Instead one application, a quick call with Priya, and a line of credit that actually fits our slow months." },
  { name: "Aisha R", city: "Savannah, GA", quote: "The bank statement upload took five minutes. No credit hit to apply, and the offers were laid out side by side so I could compare real APRs." },
  { name: "Kevin L", city: "Spokane, WA", quote: "We financed two trucks through FundLine. The lender they matched us with understood freight, and the paperwork was done in a week." },
  { name: "Dana W", city: "Burlington, VT", quote: "Jack checked in after funding just to see how the expansion was going. That kind of follow-through is why we'll use FundLine again." },
];

export const TESTIMONIALS_HEADER = {
  headingBefore: "Built for ",
  headingItalic: "Owners",
  headingAfter: "Who Build",
  sub: "Why small businesses get funded with FundLine Capital.",
  cta: { label: "Read customer stories", href: LINKS.customers },
} as const;

/** Illustrative customer stories (names and businesses are fictional). */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "I made payroll on time for the first month in a year. The line of credit was approved in two days and I only pay for what I draw.",
    author: "Marcus Reed",
    role: "Owner @ Reed Custom Cabinets",
    company: "Reed Custom Cabinets",
  },
  {
    quote: "Getting a loan for our new location used to mean weeks of meetings and waiting on callbacks. FundLine had three offers in my inbox so fast I double-checked they were real.",
    author: "Priya Natarajan",
    role: "Co-founder @ Sunrise Pediatric Therapy",
    company: "Sunrise Pediatric Therapy",
  },
  {
    quote: "We got all new equipment for the shop without draining our cash. The financing was tied to the machines, and the terms were clearer than anything the bank showed us.",
    author: "Luis Herrera",
    role: "CEO @ Herrera Metalworks",
    company: "Herrera Metalworks",
  },
  {
    quote: "The FundLine team, in a matter of days, lined up the working capital I needed to land our first seven-figure wholesale order.",
    author: "Tasha Bell",
    role: "Founder @ Bell & Barrel Sauces",
    company: "Bell & Barrel Sauces",
  },
  {
    quote: "I was procrastinating on financing because of how tedious it seemed. Who knew you could get a real offer for your business in 15 minutes.",
    author: "Devon Okafor",
    role: "Owner @ Okafor Fitness Studios",
    company: "Okafor Fitness Studios",
  },
  {
    quote: "We run trucks in six states and most lenders didn’t understand the business. FundLine matched us with a lender who did, and we financed two rigs in a week.",
    author: "Carla Jensen",
    role: "Co-owner @ Jensen Freight",
    company: "Jensen Freight",
  },
  {
    quote: "The minute I hit submit, offers came back, a specialist reached out, and I had funding for our expansion inside a week. It’s that simple.",
    author: "Andre Whitfield",
    role: "Owner @ Whitfield Family BBQ",
    company: "Whitfield Family BBQ",
  },
  {
    quote: "FundLine took the guesswork out of borrowing. Between a clean online application and a real person on the phone, I got back to running the launch.",
    author: "Elena Petrova",
    role: "Founder @ Petrova Bakehouse",
    company: "Petrova Bakehouse",
  },
  {
    quote: "We needed capital to close a large retail contract. FundLine delivered offers fast, with zero back-and-forth, and we kept the deal moving.",
    author: "Samuel Kim",
    role: "CEO @ Northwind Apparel",
    company: "Northwind Apparel",
  },
  {
    quote: "We hired four employees off the back of the term loan. The specialist helped us size it so we never over-borrowed.",
    author: "Nadia Haddad",
    role: "Owner @ Haddad Dental Group",
    company: "Haddad Dental Group",
  },
  {
    quote: "Kudos to the team for building this from the ground up. It’s the first financing experience that felt like it was designed for owners, not banks.",
    author: "Owen Gallagher",
    role: "Managing Partner @ Gallagher Construction",
    company: "Gallagher Construction",
  },
];

export const POLICIES_HEADER = {
  heading: "Explore Our Loan Products",
  sub: "Don’t over-borrow for the future or under-fund the now. Mix and match products as you grow, from first hire to fifth location.",
  badge: "Fast decision",
  learnMore: "Learn more",
  seeSpecialized: { label: "See all financing types", href: LINKS.allFinancing },
  turnaround: "1-14 days to fund",
  cta: { label: "Check eligibility", href: LINKS.apply },
} as const;

export const POLICIES: Policy[] = [
  {
    title: "Term Loan",
    description: "A lump sum with a fixed repayment schedule, sized from $5K to $5M for expansions, build-outs, and big purchases.",
    href: "/term-loans",
    image: `${ASSETS}/images/fl.webp`,
    imageWidth: 384,
    imageHeight: 158,
  },
  {
    title: "Business Line of Credit",
    description: "A revolving limit you can draw on whenever cash gets tight, paying interest only on what you use.",
    href: "/loan-types#line-of-credit",
    image: `${ASSETS}/images/tech-eo.webp`,
    imageWidth: 384,
    imageHeight: 173,
  },
  {
    title: "SBA 7(a) Loan",
    description: "Government-backed financing with long terms and competitive rates for established businesses that can plan ahead.",
    href: "/loan-types#sba-loans",
    image: `${ASSETS}/images/cyber.webp`,
    imageWidth: 384,
    imageHeight: 190,
  },
  {
    title: "Equipment Financing",
    description: "Buy or lease vehicles, machinery, and technology with financing secured by the equipment itself.",
    href: "/loan-types#equipment-financing",
    image: `${ASSETS}/images/hnoa.webp`,
    imageWidth: 348,
    imageHeight: 240,
  },
  {
    title: "Invoice Financing",
    description: "Advance cash against unpaid invoices so slow-paying customers don’t stall your growth.",
    href: "/loan-types#invoice-financing",
    image: `${ASSETS}/images/media.webp`,
    imageWidth: 382,
    imageHeight: 240,
  },
  {
    title: "Merchant Cash Advance",
    description: "An advance repaid as a percentage of daily card sales, with approvals based on revenue rather than collateral.",
    href: "/loan-types#merchant-cash-advance",
    image: `${ASSETS}/images/cgl.webp`,
    imageWidth: 384,
    imageHeight: 158,
  },
  {
    title: "Commercial Real Estate Loan",
    description: "Long-term financing to buy, build, or refinance the property your business operates from.",
    href: "/loan-types#commercial-real-estate",
    image: `${ASSETS}/images/epl.webp`,
    imageWidth: 324,
    imageHeight: 240,
  },
  {
    title: "Business Credit Card",
    description: "Everyday spending power that builds your business credit profile and keeps expenses separate from personal accounts.",
    href: "/loan-types#business-credit-card",
    image: `${ASSETS}/images/tech-eo.webp`,
    imageWidth: 384,
    imageHeight: 173,
  },
];

export const SPECIALIZED_COVERAGES: SpecializedCoverage[] = [
  { title: "Startup Loans", desc: "Funding options for businesses under two years old, sized to early revenue and the owner’s personal credit profile." },
  { title: "SBA 504 Loans", desc: "Long-term, fixed-rate financing for major assets like buildings and heavy equipment, backed by the SBA." },
  { title: "SBA Express", desc: "A faster SBA option with a streamlined review for smaller amounts when you need government-backed terms quickly." },
  { title: "Working Capital Loans", desc: "Short-term financing to cover payroll, inventory, or seasonal dips without tying up your line of credit." },
  { title: "Franchise Financing", desc: "Capital to open or expand a franchise location, often paired with lenders who already know the brand." },
  { title: "Acquisition Loans", desc: "Financing to buy an existing business or a competitor, structured around the target’s cash flow." },
  { title: "Bridge Loans", desc: "Short-term capital that carries you between a cash need today and longer-term financing tomorrow." },
  { title: "Inventory Financing", desc: "Loans or credit lines secured by the products on your shelves, ideal for retailers and wholesalers." },
  { title: "Microloans", desc: "Smaller loans, typically under $50K, for very early businesses, sole proprietors, and community-based lenders." },
  { title: "Truck & Fleet Financing", desc: "Purchase or refinance rigs, trailers, and delivery vehicles with terms matched to how carriers get paid." },
  { title: "Restaurant Financing", desc: "Capital for kitchens, build-outs, and seasonal cash flow from lenders who understand food-service margins." },
  { title: "Healthcare Practice Loans", desc: "Financing for practices and clinics to buy equipment, add providers, or open a second location." },
];

export const FAQ_HEADER = {
  heading: "FAQ",
  footer: { text: "Can’t find an answer to your question?", link: { label: "Get in touch", href: LINKS.bookCall } },
} as const;

export const FAQ: FaqItem[] = [
  {
    question: "Is FundLine Capital a direct lender or a bank?",
    answerHtml:
      'No. FundLine Capital is a small business lending marketplace. We work with more than 75 lenders and funders to give you more options from a single application, but we do not make loans directly. See <a class="underline" href="/how-it-works">how it works</a>.',
  },
  {
    question: "How fast can I actually get funded?",
    answerHtml:
      "Most owners complete the FundLine application in about 15 minutes and see offers within a few days. Once you accept an offer, many lenders can fund in as little as 24 hours. No branch visits, no waiting on email threads, no phone calls unless you want one.",
  },
  {
    question: "Which financing do I actually need?",
    answerHtml:
      'It depends on your stage. Newer businesses usually start with a <a class="underline" href="/loan-types#line-of-credit">line of credit</a>, a business credit card, or <a class="underline" href="/loan-types#equipment-financing">equipment financing</a>. Growing companies add term loans and invoice financing. Established businesses reach for <a class="underline" href="/loan-types#sba-loans">SBA loans</a> and real estate financing. You can also build a <a class="underline" href="/loan-types">custom package</a> if you already know what you need.',
  },
  {
    question: "Does applying affect my credit score?",
    answerHtml:
      "Filling out an application and submitting it to our lender network does not impact your personal credit score. Depending on the product and lender, accepting a funding offer may involve a hard credit inquiry, which the lender will disclose before you proceed.",
  },
  {
    question: "How is FundLine different from going to my bank?",
    answerHtml:
      'No single point of failure: one application reaches 75+ lenders at once, so you compare real offers instead of waiting weeks for one answer. Read more about <a class="underline" href="/blog/marketplace-vs-bank">marketplace lending vs. banks</a>. No juggling three applications, no waiting for callbacks, no explaining your business five different times.',
  },
  {
    question: "Do I need to be profitable to qualify?",
    answerHtml:
      'Not necessarily. Lenders look at time in business, monthly revenue, credit history, and industry. Many programs fund businesses that are still investing in growth. Getting your numbers in order early with <a class="underline" href="/guides/getting-ready-to-borrow">FundLine</a> makes the strongest case.',
  },
  {
    question: "What happens after I accept an offer?",
    answerHtml:
      "You get a direct line to your FundLine funding specialist and the lender’s closing team: no phone trees, no 48-hour callbacks. We walk through the agreement, handle documentation, and keep you updated until the money is in your account.",
  },
];

export const FOOTER_CTA = {
  headingLine1: "FundLine Capital Provides the Funding Built for Owners.",
  headingLine2: "Move fast. Grow things. Stay funded, under one roof.",
  corgis: [
    { alt: "FundLine bull in a suit", src: `${ASSETS}/images/mascot/bull-fly-right.png`, flip: false },
    { alt: "FundLine bull chef", src: `${ASSETS}/images/mascot/bull-chef.png`, flip: true },
    { alt: "FundLine bull in a suit", src: `${ASSETS}/images/mascot/bull-fly-right.png`, flip: true },
    { alt: "FundLine bull chef", src: `${ASSETS}/images/mascot/bull-chef.png`, flip: false },
    { alt: "FundLine bull in a suit", src: `${ASSETS}/images/mascot/bull-fly-right.png`, flip: false },
  ],
  buttons: {
    demo: { label: "Book a call", href: LINKS.bookCall },
    insured: { label: "Apply now", href: LINKS.apply },
  },
} as const;

/** Replaces the press-logo marquee with a ticker of proof points. */
export const FOOTER_STATS: FooterStat[] = [
  { value: "15+ years", label: "serving small business", caption: "Since our first funded loan in 2011." },
  { value: "75+ lenders", label: "in our network", caption: "Banks, credit unions, and online funders." },
  { value: "12K+ businesses", label: "matched with financing", caption: "Across 40+ industries nationwide." },
  { value: "4.8★ rating", label: "from business owners", caption: "Based on verified customer reviews." },
  { value: "24 hours", label: "fastest time to funding", caption: "From accepted offer to money in the bank." },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "SUPPORT",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Security", href: "/security" },
      { label: "Find a location", href: "/locations" },
      { label: "Terms and agreements", href: "/terms" },
      { label: "Your Privacy Choices", href: "/privacy-choices" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Newsroom", href: "/newsroom/series-b" },
      { label: "FundLine reviews", href: "/reviews" },
      { label: "Customer stories", href: LINKS.customers },
    ],
  },
  {
    title: "LEARN",
    links: [
      { label: "Business financing", href: "/guides/business-financing" },
      { label: "Business credit", href: "/guides/business-credit" },
      { label: "Loan calculators", href: "/calculators" },
      { label: "Product updates", href: "/updates" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "PRODUCTS",
    links: [
      { label: "Apply now", href: LINKS.apply },
      { label: "Term loans", href: "/term-loans" },
      { label: "Lines of credit", href: "/loan-types#line-of-credit" },
      { label: "SBA loans", href: "/loan-types#sba-loans" },
      { label: "Equipment financing", href: "/loan-types#equipment-financing" },
    ],
  },
];

export const FOOTER_LEGAL: FooterLink[] = [
  { label: "Terms of use", href: "/terms" },
  { label: "Privacy policy", href: "/privacy" },
  { label: "Licenses", href: "/licenses" },
  { label: "Disclosures", href: "/disclosures" },
];

export const FOOTER_SOCIAL: FooterLink[] = [
  { label: "Email", href: "mailto:hello@fundlinecapital.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "X", href: "https://x.com/" },
];

export const FOOTER_IMAGES = {
  background: `${ASSETS}/footer-bg.webp`,
} as const;

export const DISCLAIMER_PARAGRAPHS: string[] = [
  "FundLine Capital is not a lender and does not make credit decisions. Financing terms, conditions, and eligibility are determined solely by the participating lenders and may vary based on applicant qualifications.",
  "Compensation may be received from lenders for referrals or funded loans, which may impact the placement of financing offers. Not all financing options available in the market are listed on this platform. We encourage applicants to carefully review all lender disclosures and loan agreements before proceeding.",
  "Filling out an application for business funding and submitting it to our funding partners will not impact your personal credit score. However, depending on the product and lender, accepting a funding offer may involve a hard credit inquiry.",
  "Time to funding depends on the lender, the product, and how quickly required documents are provided. “As little as 24 hours” refers to the fastest observed time from an accepted offer to disbursement and is not a guarantee.",
  "Rates, amounts, and terms shown on this page are illustrative and may differ from your actual offer. See our Disclosures page for full licensing details.",
];
