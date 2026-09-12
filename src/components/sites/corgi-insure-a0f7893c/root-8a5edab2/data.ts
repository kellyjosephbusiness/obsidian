import type {
  CompanyLogo,
  CoveragePackage,
  FaqItem,
  FooterColumn,
  FooterLink,
  NavMenu,
  OrbLogo,
  Policy,
  PolicyPill,
  PressItem,
  SpecializedCoverage,
  Testimonial,
} from "@/types/sites/corgi-insure-a0f7893c/home";

/** Public asset roots for this page. */
export const ASSETS = "/sites/corgi-insure-a0f7893c/root-8a5edab2";
export const SHARED = "/sites/corgi-insure-a0f7893c/shared";

export const LINKS = {
  signUp: "https://app.corgi.insure/sign-up",
  login: "https://app.corgi.insure",
  bookDemo: "/book-a-demo",
  customers: "/customers",
  startupInsurance: "/startup-insurance",
  specializedCoverages: "/startup-insurance#specialized-coverages",
  announcement: "/press-releases/series-b1",
} as const;

export const ANNOUNCEMENT = {
  href: LINKS.announcement,
  /** "Announcing our **$106M** Fundraise at a **$2.6B** Valuation | Series B1" */
  parts: ["Announcing our ", "$106M", " Fundraise at a ", "$2.6B", " Valuation | ", "Series B1"],
} as const;

const HIGHLIGHTS: NavMenu["highlights"] = [
  {
    title: "Book a demo",
    description: "For customers who want guidance.",
    href: LINKS.bookDemo,
    image: `${ASSETS}/images/book-a-demo-image.png`,
    imageAlt: "Book a demo",
    imagePositionClass: "object-[20%_center]",
  },
  {
    title: "$1.3B valuation",
    description: "Corgi raises $160M Series B.",
    href: "/press-releases/series-b",
    image: `${ASSETS}/images/press-releases/series-b-thumbnail.png`,
    imageAlt: "$1.3B valuation",
  },
];

export const NAV_MENUS: NavMenu[] = [
  {
    id: "solutions",
    label: "Tech companies",
    href: LINKS.startupInsurance,
    columnWidth: { base: 176, xl2: 200, w1680: 220 },
    columns: [
      {
        title: "By Stage",
        span: 1,
        items: [
          { label: "Pre-seed & Seed", icon: "psychiatry", href: "/startup-insurance#pre-seed-seed" },
          { label: "Series A", icon: "eco", href: "/startup-insurance#series-a" },
          { label: "Growth", icon: "park", href: "/startup-insurance#growth-stage" },
          { label: "Custom", icon: "widgets", href: "/startup-insurance#custom-package" },
        ],
        viewAll: { label: "View all", href: LINKS.startupInsurance },
      },
      {
        title: "By Industry",
        span: 2,
        grid: true,
        items: [
          { label: "SaaS", icon: "cloud", href: "/saas" },
          { label: "AI", icon: "smart_toy", href: "/ai" },
          { label: "Fintech", icon: "account_balance", href: "/fintech" },
          { label: "Crypto", icon: "currency_bitcoin", href: "/crypto" },
          { label: "Marketplace", icon: "store", href: "/market" },
          { label: "Health-tech", icon: "monitor_heart", href: "/health-tech" },
          { label: "Trucking", icon: "local_shipping", href: "https://trucking.corgi.insure/" },
          { label: "Sports", icon: "sports_soccer", href: "https://getgolden.insure/" },
        ],
      },
      {
        title: "Software",
        span: 1,
        items: [{ label: "Dataroom", icon: "lock", href: "https://dataroom.corgi.com" }],
      },
    ],
    highlights: HIGHLIGHTS,
  },
  {
    id: "small-businesses",
    label: "Small businesses",
    columnWidth: { base: 240, xl2: 240, w1680: 240 },
    columns: [
      {
        title: "Industries",
        span: 1,
        items: [
          { label: "Clubs & Lodges (liquor)", icon: "groups", href: "/clubs-and-lodges" },
          { label: "More coming soon", icon: "auto_awesome" },
        ],
      },
    ],
    highlights: HIGHLIGHTS,
  },
  {
    id: "products",
    label: "Products",
    href: "/startup-insurance#custom-package",
    columnWidth: { base: 200, xl2: 220, w1680: 240 },
    columns: [
      {
        title: "Core Operations",
        span: 1,
        items: [
          { label: "General Liability", icon: "verified_user", href: "/general-liability" },
          { label: "Cyber Liability", icon: "lock", href: "/cyber-liability" },
          { label: "Tech E&O Insurance", icon: "memory", href: "/tech-eo" },
          { label: "AI Liability", icon: "smart_toy", href: "/tech-eo" },
          { label: "Media Liability", icon: "campaign", href: "/media-liability" },
          { label: "Hired & Non-Owned Auto", icon: "directions_car", href: "/hired-non-owned-auto" },
        ],
      },
      {
        title: "Management & People",
        span: 1,
        items: [
          { label: "Directors & Officers", icon: "business_center", href: "/directors-and-officers" },
          { label: "Employment Practices", icon: "how_to_reg", href: "/employment-practices-liability" },
          { label: "Fiduciary Liability", icon: "balance", href: "/fiduciary-liability" },
        ],
      },
      {
        title: "Transportation",
        span: 1,
        items: [
          { label: "Auto Liability", icon: "traffic", href: "https://trucking.corgi.insure/insurance/auto-liability" },
          {
            label: "Contractual Liability Insurance - Cargo",
            icon: "inventory_2",
            href: "https://trucking.corgi.insure/insurance/per-load-cargo",
          },
        ],
      },
      {
        title: "RETAIL",
        span: 1,
        items: [{ label: "Liquor Liability", icon: "local_bar", href: "/liquor-liability" }],
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
        title: "Literature",
        span: 1,
        items: [
          { label: "Corgi Press", icon: "newspaper", href: "/press-releases" },
          { label: "Featuring Corgi", icon: "auto_awesome", href: "/featured-articles" },
          { label: "Blog", icon: "edit", href: "/blog" },
        ],
      },
      {
        title: "Corgi the Company",
        span: 1,
        items: [
          { label: "About", icon: "info", href: "/about" },
          { label: "Careers", icon: "verified", href: "/careers" },
          { label: "Corgi Cafe", icon: "coffee", href: "https://thecorgi.cafe/" },
          { label: "Corgi Bus", icon: "directions_bus", href: "https://thecorgi.cafe/corgi-bus" },
          { label: "Corgi ETFs", icon: "candlestick_chart", href: "https://corgifunds.com/" },
        ],
      },
    ],
    highlights: HIGHLIGHTS,
  },
  {
    id: "partners",
    label: "Partners",
    href: "/partnerships",
    columnWidth: { base: 240, xl2: 240, w1680: 240 },
    columns: [
      {
        title: "Programs",
        span: 1,
        items: [
          { label: "Partner With Us", icon: "handshake", href: "/partnerships" },
          { label: "For brokers", icon: "business_center", href: "/for-brokers" },
          { label: "Perks", icon: "savings", badge: "COMING SOON" },
        ],
      },
    ],
    highlights: HIGHLIGHTS,
  },
];

export const NAV_PLAIN_LINKS: FooterLink[] = [{ label: "Customers", href: LINKS.customers }];

export const HERO = {
  headingLine1: "Business Insurance",
  headingLine2Prefix: "at the",
  headingAccent: "Speed of Compute.",
  subLine1: "No confusion, no waiting. Get a quote in minutes.",
  subLine2: "Modular coverage, built for founders by founders.",
  cta: { label: "Get insured now", href: LINKS.signUp },
} as const;

export const COMPANY_LOGOS: CompanyLogo[] = [
  { alt: "Artisan", src: `${ASSETS}/images/company-logos/artisan.png`, width: 192, height: 18 },
  { alt: "AthenaHQ", src: `${ASSETS}/images/company-logos/athenahq.svg`, width: 108, height: 20 },
  { alt: "Bland", src: `${ASSETS}/images/company-logos/bland.svg`, width: 91, height: 24 },
  { alt: "Deel", src: `${ASSETS}/images/company-logos/deel.svg`, width: 79, height: 27 },
  { alt: "Slash", src: `${ASSETS}/images/company-logos/slash.svg`, width: 78, height: 27 },
  { alt: "Eragon", src: `${ASSETS}/images/eragon-logo.svg`, width: 91, height: 23 },
  { alt: "Intryc", src: `${ASSETS}/images/company-logos/intryc.svg`, width: 73, height: 28 },
  { alt: "Origami", src: `${ASSETS}/images/company-logos/origami.svg`, width: 99, height: 22 },
  { alt: "Photon", src: `${ASSETS}/images/company-logos/photon.svg`, width: 113, height: 24 },
  { alt: "Deel", src: `${ASSETS}/images/company-logos/deel.svg`, width: 79, height: 27 },
  { alt: "Judgment Labs", src: `${ASSETS}/images/company-logos/judgment-labs.svg`, width: 148, height: 18 },
  { alt: "Series", src: `${ASSETS}/images/company-logos/series.svg`, width: 48, height: 32 },
  { alt: "Tandem", src: `${ASSETS}/images/company-logos/tandem-logo.svg`, width: 94, height: 18 },
  { alt: "PromptingCo", src: `${ASSETS}/images/company-logos/promptingco.svg`, width: 72, height: 30 },
];

export const INTRO = {
  accent: "Corgi",
  rest: " is an AI-native, full-stack insurance platform built for technology companies. That means fast quotes, competitive pricing, and a team that understands your business.",
  quoteCard: "Get a quote!",
  quoteHref: LINKS.signUp,
  ellipse: `${ASSETS}/images/journey-hero/ellipse.svg`,
  label: `${ASSETS}/images/journey-hero/boring-document-label.png`,
  document: `${ASSETS}/images/journey-hero/document.png`,
} as const;

export const QUOTE_STRIP = {
  quote: "“The minute I hit submit, documents come back, a Slack channel gets created, and the founding team messages me. It’s beautiful.”",
  author: "Alex Marantelos",
  role: "Co-founder CEO @ Intryc",
  logo: `${ASSETS}/images/customers/intryc-logo.png`,
  logoAlt: "Intryc",
  photo: `${ASSETS}/images/customers/testimonial-photo-3.png`,
  cta: { label: "Read Intryc case study", href: "/customers/intryc" },
} as const;

export const JOURNEY = {
  heading: "Coverage Designed Around Your Startup’s Journey",
  sub: "From your first check to your next round, we’ve built packages for every phase.",
  hint: { before: "Click any", chip: "Policy", chipHref: "#explore-coverages", after: "to see what it covers" },
} as const;

export const POLICY_PILLS: PolicyPill[] = [
  {
    label: "CGL",
    description:
      "Protects your business against third-party claims for bodily injury, property damage, and personal or advertising injury arising from your operations.",
  },
  {
    label: "D&O",
    description:
      "Protects your directors and officers from personal liability for decisions and actions taken while running the company.",
  },
  {
    label: "Tech E&O",
    description:
      "Protects your business against claims arising from errors, omissions, or negligence in your technology products or services.",
  },
  {
    label: "Cyber",
    description:
      "Covers your legal costs and liability when customers or third parties hold your business responsible for a data breach.",
  },
  {
    label: "Media",
    description:
      "Protects against claims arising from your marketing, advertising, and content, like defamation or copyright infringement.",
  },
  {
    label: "EPLI",
    description:
      "Protects your business from employee claims like discrimination, wrongful termination, and harassment.",
  },
  {
    label: "Fiduciary",
    description: "Protects those responsible for employee benefit plans from breach-of-duty claims.",
  },
  {
    label: "HNOA",
    description: "Protects your business when employees drive personal or rented vehicles for work.",
  },
];

export const COVERAGE_PACKAGES: CoveragePackage[] = [
  {
    id: "pre-seed",
    title: "Pre-Seed & Seed",
    description: "Core protection for you and your product",
    pillsIntro: "Policies included in this package:",
    policies: ["CGL", "D&O", "Tech E&O", "Cyber"],
    art: {
      src: `${ASSETS}/images/journey-cards/seed-leaf.webp`,
      width: 69,
      height: 125,
      wrapper: { top: 7, left: 219, width: 120, height: 143 },
      transform: "rotate(-28.18deg)",
      objectFit: "contain",
    },
    ctaHref: `${LINKS.signUp}?package=pre-seed`,
    ctaIcon: "psychiatry",
    ctaVariant: "orange",
  },
  {
    id: "series-a",
    title: "Series A",
    description: "Protects you, your board, and helps you close bigger deals",
    pillsIntro: "Policies included in this package:",
    policies: ["CGL", "D&O", "Tech E&O", "Cyber", "Media", "EPLI"],
    art: {
      src: `${ASSETS}/images/journey-cards/series-a-plant.png`,
      width: 171,
      height: 139,
      wrapper: { top: -24, left: 172, width: 188, height: 161 },
      transform: "rotate(-7.83deg) scaleX(-1)",
      objectFit: "contain",
    },
    ctaHref: `${LINKS.signUp}?package=series-a`,
    ctaIcon: "eco",
    ctaVariant: "orange",
  },
  {
    id: "growth",
    title: "Growth Stage",
    description: "Protection for leadership risk, transactions, and scale",
    pillsIntro: "Policies included in this package:",
    policies: ["CGL", "D&O", "Tech E&O", "Cyber", "Media", "EPLI", "Fiduciary"],
    art: {
      src: `${ASSETS}/images/journey-cards/growth-tree.png`,
      width: 229,
      height: 185,
      wrapper: { top: -58, left: 163, width: 248, height: 209 },
      transform: "rotate(-6.17deg)",
      objectFit: "contain",
    },
    ctaHref: `${LINKS.signUp}?package=growth`,
    ctaIcon: "park",
    ctaVariant: "orange",
  },
  {
    id: "custom",
    title: "Custom Package",
    description: "Know exactly what you need?",
    pillsIntro: "Pick the policies that fit your business best",
    policies: ["CGL", "D&O", "Tech E&O", "Cyber", "Fiduciary", "Media", "EPLI", "HNOA"],
    morePoliciesHref: LINKS.specializedCoverages,
    art: {
      src: `${ASSETS}/images/journey-cards/custom-hands.png`,
      width: 189,
      height: 105,
      wrapper: { top: -1, left: 187, width: 189, height: 105 },
      transform: "rotate(180deg)",
      objectFit: "cover",
    },
    ctaHref: `${LINKS.signUp}?package=custom`,
    ctaIcon: "widgets",
    ctaVariant: "black",
  },
];

export const ADVANTAGE = {
  heading: "Our Unique Advantage",
  legacy: {
    chips: [
      { icon: "menu_book", label: "Broker review" },
      { icon: "monetization_on", label: "Quote adjustment" },
      { icon: "report", label: "Manual risk audit" },
      { icon: "edit_square", label: "Underwriting (3+ days)" },
    ],
    certificateTitle: "Certificate of Insurance",
    title: "Legacy Insurance Carriers",
    description:
      "The traditional insurers: broker review, quote adjustment, manual risk audit, underwriting cycles that often run multiple weeks. Coverage fragmented across policies. Endorsements to patch modern risks.",
  },
  corgi: {
    title: "Corgi",
    descriptionBefore: "Corgi is the AI-native, full-stack insurance platform built for startups. Corgi is faster, more cost-efficient, and built to perform because ",
    descriptionStrong: "we are full-stack",
    descriptionAfter:
      ". By coordinating underwriting, policy design, servicing, and claims administration in one place, we move faster and pass that speed to founders.",
  },
} as const;

export const ORB_LOGOS: OrbLogo[] = [
  { src: `${ASSETS}/images/customer-icons/deel.svg` },
  { src: `${ASSETS}/images/customer-icons/bland.png`, fill: true },
  { src: `${ASSETS}/images/customer-icons/origami.svg` },
  { src: `${ASSETS}/images/customer-icons/intryc-hd.png` },
  { src: `${ASSETS}/images/customer-icons/athenahq.svg` },
  { src: `${ASSETS}/images/customer-icons/eragon.png` },
  { src: `${ASSETS}/images/customer-icons/tandem.png`, fill: true },
  { src: `${ASSETS}/images/customer-icons/series.svg` },
  { src: `${ASSETS}/images/customer-icons/imagine.png`, fill: true },
  { src: `${ASSETS}/images/customer-icons/sorcerer.png` },
];

export const GET_QUOTED = {
  headingA: "Get Quoted Instantly",
  headingJoin: " or ",
  headingB: "Book a Demo With a Specialist",
  selfServe: {
    heading: "Self-Serve: Apply, get quoted in minutes, and bind same-day.",
    body: "Complete the online application, review your quote, pay securely, and receive your quote in minutes. No calls or back-and-forth required.",
    bestForLabel: "Best for:",
    bestFor: "Founders and operators who know what coverage they need and want a fast, frictionless experience.",
    cta: { label: "Start your application", href: LINKS.signUp, icon: "arrow_forward" },
  },
  demo: {
    heading: "Book a Demo: Talk to an expert before you bind.",
    bodyBefore:
      "We’ll walk you through your coverage options, help you choose the right limits, and answer any questions so you can move forward with confidence. ",
    bodyStrong: "We are committed to being present any day of the week, including weekends!",
    bestForLabel: "Best for:",
    bestFor: "Customers who want guidance, have a more complex situation, or prefer a hands-on approach.",
    cta: { label: "Book a demo", href: LINKS.bookDemo, icon: "call" },
  },
  form: {
    title: "Financial details",
    subtitle: "Please provide financial details about your company.",
    revenueLabel: "Revenue in the last 12 months ($)",
    revenuePlaceholder: "$100T",
    projectedLabel: "Projected revenue in next 12 months ($)",
    projectedPlaceholder: "$500T",
    uploadLabel: "Upload any financial statements if available",
    dropTitle: "Drop the files here",
    dropSub: "Max 3 files, up to 50MB each",
    dragChip: "Important Document, Probably",
    fundingLabel: "Funding raised, if applicable ($)",
    fundingPlaceholder: "Enter amount",
    dateLabel: "Funding date, if applicable",
    datePlaceholder: "MM/DD/YYYY",
    back: "← Back",
    next: "Next →",
    bubble: "An estimate is fine",
    bubbleInvalid: "numbers please!",
  },
  images: {
    corgiPhone: `${ASSETS}/images/get-covered/corgi-phone.png`,
    cursorDocument: `${ASSETS}/images/get-covered/cursor/document.png`,
    cursorFill: `${ASSETS}/images/get-covered/cursor/cursor-fill.svg`,
    cursorBody: `${ASSETS}/images/get-covered/cursor/cursor-body.svg`,
    greenPlus: `${ASSETS}/images/get-covered/cursor/green-plus.svg`,
  },
} as const;

export const TESTIMONIALS_HEADER = {
  headingBefore: "Built for ",
  headingItalic: "Founders",
  headingAfter: "Who Ship",
  sub: "Why startups get insured with Corgi.",
  cta: { label: "Read customer stories", href: LINKS.customers },
} as const;

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Working with some of the biggest companies in the world, they want us to have a lot of coverage because the risk is large. Corgi takes care of everything, we don't have to go through the hassle of a new process every time a customer needs something new.",
    author: "Isaiah N. Granet",
    role: "Co Founder CEO @ Bland",
    image: `${ASSETS}/images/customers/testimonial-photo-10.png`,
    companyLogo: `${ASSETS}/images/customers/avatar-10.png`,
    companyUrl: "https://bland.ai",
  },
  {
    quote:
      "Getting insurance for our office spaces before used to mean days of emails, calls, and waiting on quotes. Corgi got us a quote and certificate so fast I actually double-checked it was real.",
    author: "Finn Mallery",
    role: "Co-founder @ Origami",
    image: `${ASSETS}/images/customers/testimonial-photo-6.png`,
    companyLogo: `${ASSETS}/images/customers/avatar-6.png`,
    companyUrl: "https://origamiagents.com",
  },
  {
    quote:
      "Being protected by Corgi enables us to focus on the business itself & helps us drive value for our customers like Coinbase, SoFi, and more",
    author: "Andrew Yan",
    role: "CEO @ AthenaHQ",
    image: `${ASSETS}/images/customers/testimonial-photo-5.png`,
    companyLogo: `${ASSETS}/images/customers/avatar-5.png`,
    companyUrl: "https://athenahq.ai",
  },
  {
    quote:
      "The Corgi team, in a matter of minutes, took care of all the insurance requirements I needed in order to land our first 7-figure enterprise contract",
    author: "Josh Sirota",
    role: "CEO @ Eragon",
    image: `${ASSETS}/images/customers/testimonial-eragon.webp`,
    companyLogo: `${ASSETS}/images/testimonial-eragon.webp`,
    companyUrl: "https://www.eragon.ai/",
  },
  {
    quote:
      "Was procrastinating on getting insurance because of how tedious it seemed. Who knew you could get your business insured in 10 minutes.",
    author: "Sean Hargrow",
    role: "Co Founder COO @ Series",
    image: `${ASSETS}/images/customers/testimonial-photo-9.png`,
    companyLogo: `${ASSETS}/images/customers/avatar-9.png`,
    companyUrl: "https://www.series.so/",
  },
  {
    quote:
      "We have hardware deployed all over the world and unique operational risks. Most brokers didn't really know what we were doing, but with Corgi, I was able to walk them through our business and get something tailored to exactly what we need. I finally feel like we're in a really good spot.",
    author: "Austin Tindle",
    role: "Founder CEO @ Sorcerer",
    image: `${ASSETS}/images/customers/testimonial-photo-2.png`,
    companyLogo: `${ASSETS}/images/customers/avatar-2.png`,
    companyUrl: "https://sorcerer.earth/",
  },
  {
    quote:
      "The minute I hit submit, documents come back to me, a Slack channel gets created, and the founding team messages me. It's beautiful. I went through the application in five minutes and instead of searching an ocean of policies, the team had everything packaged up for me.",
    author: "Alex Marantelos",
    role: "Co Founder CEO @ Intryc",
    image: `${ASSETS}/images/customers/testimonial-photo-3.png`,
    companyLogo: `${ASSETS}/images/customers/avatar-3.png`,
    companyUrl: "https://intryc.com",
  },
  {
    quote:
      "Corgi took the guesswork out of buying insurance. Between a smooth, modern quoting experience and immediate access to the team, they let me get back to preparing for our launch.",
    author: "Will Scrivener",
    role: "CEO @ Hallway.com",
    image: `${ASSETS}/images/customers/testimonial-photo-1.png`,
    companyLogo: `${ASSETS}/images/customers/avatar-1.png`,
    companyUrl: "https://hallway.com",
  },
  {
    quote:
      "We needed insurance to close a large customer contract. Corgi delivered a quote fast, with zero back-and-forth. We got our certificate of insurance the same day and kept the deal moving.",
    author: "Penny Chen",
    role: "CEO @ Pax",
    image: `${ASSETS}/images/customers/testimonial-photo-7.png`,
    companyLogo: `${ASSETS}/images/customers/avatar-7.png`,
    companyUrl: "https://www.paxai.com/",
  },
  {
    quote:
      "These guys are the best. Josh and Rhocar onboarded us in their office, and it was the fastest we've ever gotten insured. Bullish",
    author: "Sky Yang",
    role: "Co-founder CEO @ Imagine AI",
    image: `${ASSETS}/images/customers/testimonial-photo-8.png`,
    companyLogo: `${ASSETS}/images/customers/avatar-8.png`,
    companyUrl: "https://www.imagineai.me/",
  },
  {
    quote:
      "Kudos to the team for building that from the ground up - it's been very exciting to learn about y'all recently given the press. I look forward to tracking Corgi's growth story.",
    author: "Adit Jain",
    role: "Vice President @ Finni Health",
    image: `${ASSETS}/images/customers/testimonial-photo-4.png`,
    companyLogo: `${ASSETS}/images/customers/avatar-4.png`,
    companyUrl: "https://finnihealth.com",
  },
];

export const POLICIES_HEADER = {
  heading: "Explore Our Main Policies",
  sub: "Don’t over-insure for the future or under-insure for the now. Toggle coverage modules as you grow, from MVP to IPO.",
  badge: "Instant quote",
  learnMore: "Learn more",
  seeSpecialized: { label: "See specialized coverages", href: LINKS.specializedCoverages },
  turnaround: "1-14 days turnaround",
  cta: { label: "Get insured", href: LINKS.signUp },
} as const;

export const POLICIES: Policy[] = [
  {
    title: "Commercial General Liability (CGL)",
    description:
      "Protects your business against third-party claims for bodily injury, property damage, and personal or advertising injury arising from your operations.",
    href: "/general-liability",
    image: `${ASSETS}/images/cgl.webp`,
    imageWidth: 384,
    imageHeight: 158,
  },
  {
    title: "Cyber Liability",
    description: "Protects against losses and claims resulting from data breaches, cyberattacks, and network security failures.",
    href: "/cyber-liability",
    image: `${ASSETS}/images/cyber.webp`,
    imageWidth: 384,
    imageHeight: 190,
  },
  {
    title: "Tech & AI Liability",
    description:
      "Covers claims alleging your technology products or services failed to perform as intended, causing financial harm to a client.",
    href: "/tech-eo",
    image: `${ASSETS}/images/tech-eo.webp`,
    imageWidth: 384,
    imageHeight: 173,
  },
  {
    title: "Directors & Officers",
    description: "Covers claims made against company leaders for alleged wrongful acts in managing the business.",
    href: "/directors-and-officers",
    image: `${ASSETS}/images/do.webp`,
    imageWidth: 384,
    imageHeight: 140,
  },
  {
    title: "Employment Practices Liability (EPLI)",
    description:
      "Protects against claims alleging wrongful termination, discrimination, harassment, or other employment-related issues.",
    href: "/employment-practices-liability",
    image: `${ASSETS}/images/epl.webp`,
    imageWidth: 324,
    imageHeight: 240,
  },
  {
    title: "Fiduciary Liability",
    description:
      "Protects your company and plan fiduciaries against claims alleging mismanagement of employee benefit plans, including retirement and health plans.",
    href: "/fiduciary-liability",
    image: `${ASSETS}/images/fl.webp`,
    imageWidth: 384,
    imageHeight: 158,
  },
  {
    title: "Media Liability",
    description:
      "Protects against claims arising from your published or distributed content, including allegations of defamation, copyright infringement, or invasion of privacy.",
    href: "/media-liability",
    image: `${ASSETS}/images/media.webp`,
    imageWidth: 382,
    imageHeight: 240,
  },
  {
    title: "Hired and Non-Owned Auto (HNOA)",
    description: "Provides liability coverage when employees use rented or personal vehicles for company business.",
    href: "/hired-non-owned-auto",
    image: `${ASSETS}/images/hnoa.webp`,
    imageWidth: 348,
    imageHeight: 240,
  },
];

export const SPECIALIZED_COVERAGES: SpecializedCoverage[] = [
  { title: "Commercial Umbrella Liability", desc: "Provides excess liability limits above underlying policies such as general liability, auto liability, and employers liability." },
  { title: "Worker's Compensation", desc: "Provides benefits to employees for work-related injuries or illnesses, including medical expenses, lost wages, and rehabilitation costs." },
  { title: "Contractors Professional", desc: "Covers claims arising from design, construction management, or other professional services performed by contractors." },
  { title: "Business Owners Policy (BOP)", desc: "Combines general liability and commercial property coverage into a single policy designed for small and growing businesses." },
  { title: "Real Estate E&O", desc: "Protects real estate professionals against claims alleging errors, omissions, or negligence in brokerage or advisory services." },
  { title: "Lawyer E&O", desc: "Covers claims alleging negligence or failure to perform professional legal services." },
  { title: "Miscellaneous E&O", desc: "Broad professional liability coverage for service-based businesses facing claims of negligence, errors, or failure to perform professional services." },
  { title: "Medical Malpractice", desc: "Protects healthcare professionals and organizations against claims alleging negligence in the delivery of medical services." },
  { title: "Representations and Warranties", desc: "Protects buyers or sellers in M&A transactions against financial loss arising from breaches of representations and warranties in purchase agreements." },
  { title: "Non-Profit D&O", desc: "Protects nonprofit organizations and their leadership against claims alleging wrongful acts in governance, management decisions, or fiduciary oversight." },
  { title: "K&R (Kidnap & Ransom)", desc: "Provides financial protection and crisis response support in the event of kidnapping, extortion, wrongful detention, or related security threats." },
  { title: "Crime Insurance", desc: "Protects businesses against financial losses caused by theft, fraud, forgery, employee dishonesty, and funds transfer or computer fraud." },
];

export const FAQ_HEADER = {
  heading: "FAQ",
  footer: { text: "Can’t find an answer to your question?", link: { label: "Get in touch", href: LINKS.bookDemo } },
} as const;

export const FAQ: FaqItem[] = [
  {
    question: "How much does startup insurance cost?",
    answerHtml:
      'Cost depends on your stage, industry, limits, state, and the policies you pick. Eligible pre-seed and seed startups often pay $2,000 to $5,000 per year for basic coverage, while Series A companies may pay $5,000 to $15,000 annually. See our full breakdown of <a class="underline" href="/blog/startup-insurance-cost-by-stage">startup insurance cost by stage</a>. Get an instant quote online, no sales call required.',
  },
  {
    question: "How fast can I actually get covered?",
    answerHtml:
      "Most founders complete the Corgi application in under five minutes and get covered the same day. No broker back-and-forth, no waiting on email threads, no phone calls unless you want one.",
  },
  {
    question: "Which coverages do I actually need?",
    answerHtml:
      'It depends on your stage. Pre-seed and seed usually need <a class="underline" href="/general-liability">General Liability</a>, <a class="underline" href="/blog/do-insurance-secures-startup-future">D&amp;O</a>, <a class="underline" href="/blog/tech-eo-insurance-for-startups">Tech E&amp;O</a>, and Cyber. Series A adds Media and EPLI. Growth-stage companies add Fiduciary. You can also build a <a class="underline" href="/startup-insurance">custom package</a> if you already know what you need.',
  },
  {
    question: "Can I upgrade my coverage as the company scales?",
    answerHtml:
      'Yes. Coverage grows with you. Raise a new round, hire the first non-founder, or sign a bigger enterprise contract. You can add or upgrade policies in minutes from your <a class="underline" href="/startup-insurance">Corgi dashboard</a>, all in one place.',
  },
  {
    question: "How is Corgi different from a traditional broker?",
    answerHtml:
      'No middlemen: we are a full stack insurance platform. That means instant quotes, same-day binding, and one team managing every policy. Read more about <a class="underline" href="/blog/corgi-vs-vouch">Corgi vs Vouch</a>. No juggling three vendors, no waiting for callbacks, no explaining your business five different times.',
  },
  {
    question: "Do I really need insurance before we have revenue?",
    answerHtml:
      'If you\'re hiring, handling customer data, selling to enterprises, or fundraising, yes. Many investors and enterprise customers require specific coverage before signing. Getting it in place early with <a class="underline" href="/blog/startup-insurance-guide-for-founders">Corgi</a> is cheaper and avoids last-minute scrambles.',
  },
  {
    question: "What happens when I need to file a claim?",
    answerHtml:
      "You get a direct line to the Corgi claims team: no phone trees, no 48-hour callbacks. We walk through the incident, handle documentation, coordinate with your legal team if needed, and keep you updated until it's resolved.",
  },
];

export const FOOTER_CTA = {
  headingLine1: "Corgi Provides the Insurance Built for Founders.",
  headingLine2: "Move fast. Break things. Stay covered, under one roof.",
  corgis: [
    { alt: "Corgi working on laptop", src: `${ASSETS}/images/footer-corgi-laptop.png` },
    { alt: "Corgi founder", src: `${ASSETS}/images/footer-corgi-founder.png` },
    { alt: "Corgi in suit", src: `${ASSETS}/images/footer-corgi-suit.png` },
    { alt: "Corgi chef", src: `${ASSETS}/images/footer-corgi-chef.png` },
    { alt: "Corgi doctor", src: `${ASSETS}/images/footer-corgi-doctor.png` },
  ],
  buttons: {
    demo: { label: "Book a demo", href: LINKS.bookDemo },
    insured: { label: "Get insured today", href: LINKS.signUp },
  },
} as const;

export const PRESS: PressItem[] = [
  { alt: "Forbes", src: `${ASSETS}/brand/forbes.webp`, width: 120, height: 30, outlet: "Forbes", date: "May 2025" },
  { alt: "The Economic Times", src: `${ASSETS}/brand/the-economic-times.webp`, width: 200, height: 24, outlet: "The Economic Times", date: "Jul 2025" },
  { alt: "Insurance Business", src: `${ASSETS}/brand/insurance-business.webp`, width: 200, height: 28, outlet: "Insurance Business", date: "Jan 2026" },
  { alt: "The Wall Street Journal", src: `${ASSETS}/brand/the-wall-street-journal.webp`, width: 240, height: 24, outlet: "The Wall Street Journal", date: "Sep 2025" },
  { alt: "Inc.", src: `${ASSETS}/brand/inc.webp`, width: 60, height: 30, outlet: "Inc.", date: "Sep 2025" },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "SOLUTIONS",
    links: [
      { label: "Startup Insurance", href: "/startup-insurance" },
      { label: "Pre-Seed & Seed", href: "/startup-insurance#pre-seed-seed" },
      { label: "Series A", href: "/startup-insurance#series-a" },
      { label: "Growth Stage", href: "/startup-insurance#growth-stage" },
      { label: "Instant Quote", href: "/instant-quote" },
    ],
  },
  {
    title: "INDUSTRIES",
    links: [
      { label: "SaaS", href: "/saas" },
      { label: "AI", href: "/ai" },
      { label: "Fintech", href: "/fintech" },
      { label: "Marketplace", href: "/market" },
      { label: "Health-tech", href: "/health-tech" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Partner With Us", href: "/partnerships" },
      { label: "Featuring Corgi", href: "/featured-articles" },
      { label: "Careers", href: "/careers" },
      { label: "Customers", href: "/customers" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Book a Demo", href: "/book-a-demo" },
      { label: "Insurance Guide", href: "/blog/startup-insurance-guide-for-founders" },
      { label: "D&O Insurance", href: "/directors-and-officers" },
      { label: "Cyber Insurance", href: "/cyber-liability" },
      { label: "Tech E&O Insurance", href: "/tech-eo" },
    ],
  },
];

export const FOOTER_LEGAL: FooterLink[] = [
  { label: "Privacy", href: "/docs/Corgi Privacy Policy.pdf" },
  { label: "Terms", href: "/docs/Corgi Terms of Service.pdf" },
  { label: "Licenses", href: "/broker-licenses" },
  { label: "Disclaimers", href: "/disclaimers" },
];

export const FOOTER_SOCIAL: FooterLink[] = [
  { label: "Email", href: "mailto:hello@corgi.insure" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/corgi-insurance" },
  { label: "X", href: "https://x.com/UseCorgi" },
];

export const FOOTER_IMAGES = {
  corgiDog: `${ASSETS}/brand/corgi-dog.svg`,
  background: `${ASSETS}/footer-bg.webp`,
} as const;

export const DISCLAIMER_PARAGRAPHS: string[] = [
  "Coverage may be underwritten through affiliated or partner carriers, including Corgi Insurance Company, Inc., an admitted property and casualty insurance carrier (NAIC #17989).",
  "Certain coverages may also be underwritten by Technology Risk Retention Group, Inc. (TRRG), a risk retention group organized and operating pursuant to the Liability Risk Retention Act (15 U.S.C. § 3901 et seq.). TRRG is not subject to all of the insurance laws and regulations of your state. State insurance insolvency guaranty funds are not available for policies issued by a risk retention group.",
  "Corgi Insurance Services, Inc. is a licensed insurance producer (CA License #6012791) and acts as the program administrator, not the insurer.",
  "Certain coverages may also be written through affiliated or partner carriers that are admitted in the applicable state and rated A- (Excellent) or better by AM Best. Availability of admitted paper varies by state, line of business, and risk characteristics, and not all coverages are available through every carrier.",
  "Coverage is subject to underwriting approval and availability varies by jurisdiction. Not all products are available in all states. Limits, retentions, and terms shown on this page are illustrative and may differ from your actual policy. See our Disclaimers page for full licensing details.",
];
