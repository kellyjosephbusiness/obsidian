import type { FaqItem } from "@/types/sites/corgi-insure-a0f7893c/home";
import type {
  ComparisonRow,
  CreditBandOption,
  FeaturePageContent,
  HeroContent,
  IconCard,
  LegalPageContent,
  LoanTypeDetail,
  PageMeta,
  Stat,
  Step,
  TenureOption,
} from "@/types/sites/corgi-insure-a0f7893c/products";
import { LINKS } from "../root-8a5edab2/data";

/**
 * FundLine Capital — products, partners and legal content (Group D).
 * Every figure, name, date and address is a fictional placeholder. Legal pages are placeholder
 * copy written for a lending marketplace and are not legal advice.
 */

/* ------------------------------------------------------------------ */
/* /loan-types                                                          */
/* ------------------------------------------------------------------ */

export const LOAN_TYPES_META: PageMeta = {
  title: "Business Loan Types | FundLine Capital",
  description:
    "Compare every business financing product in the FundLine Capital network: term loans, lines of credit, SBA loans, equipment financing, invoice financing and more. One application, offers from 75+ lenders.",
};

export const LOAN_TYPES_HERO: HeroContent = {
  icon: "account_balance_wallet",
  headingLine1: "Every Way to Fund",
  headingLine2: "a Small Business. One Application.",
  sub: "Eight core products, a dozen specialty programs, and 75+ lenders behind them. Pick the product that fits the job, or let us match you.",
  primary: { label: "Check eligibility", href: LINKS.apply },
  secondary: { label: "Compare products", href: "#compare" },
};

export const LOAN_TYPES_PRODUCTS_HEADER = {
  heading: "All Financing Types",
  sub: "Start with the eight products most owners use. Flip through the specialty stack for industry and stage-specific programs.",
} as const;

export const LOAN_TYPES_DETAILS_HEADER = {
  heading: "Loan Types in Detail",
  sub: "What each product is for, how much you can get, and how fast it funds. Figures are typical ranges across our network, not an offer.",
} as const;

export const LOAN_TYPE_DETAILS: LoanTypeDetail[] = [
  {
    id: "term-loans",
    title: "Term Loan",
    icon: "payments",
    summary: "A lump sum repaid on a fixed schedule. The workhorse for one-time investments with a clear price tag: a build-out, a large order, an acquisition.",
    amount: "$5K – $5M",
    term: "6 – 60 months",
    speed: "1 – 3 days",
    bestFor: "One-time projects with a known cost",
    rate: "Fixed APR from 7.99%",
    href: "/term-loans",
  },
  {
    id: "line-of-credit",
    title: "Business Line of Credit",
    icon: "credit_score",
    summary: "A revolving limit you draw on when cash gets tight and pay interest only on what you use. Repay and the room comes back.",
    amount: "$10K – $500K",
    term: "6 – 24 month revolving",
    speed: "Same day – 2 days",
    bestFor: "Smoothing seasonal cash flow and payroll",
    rate: "Variable APR from 9.5%",
  },
  {
    id: "sba-loans",
    title: "SBA 7(a) Loan",
    icon: "account_balance",
    summary: "Government-backed financing with the longest terms and lowest rates in the network. Worth the extra paperwork if you can plan a few weeks ahead.",
    amount: "$50K – $5M",
    term: "Up to 10 years (25 for real estate)",
    speed: "3 – 8 weeks",
    bestFor: "Established businesses with two or more years of returns",
    rate: "Prime + 2.25% – 4.75%",
  },
  {
    id: "equipment-financing",
    title: "Equipment Financing",
    icon: "precision_manufacturing",
    summary: "Buy or lease trucks, machines, ovens or servers with a loan secured by the equipment itself. Approvals lean on the asset, not just your credit.",
    amount: "$10K – $2M",
    term: "2 – 7 years",
    speed: "2 – 5 days",
    bestFor: "Owners replacing or adding revenue-producing assets",
    rate: "Fixed APR from 6.5%",
  },
  {
    id: "invoice-financing",
    title: "Invoice Financing",
    icon: "receipt_long",
    summary: "Advance up to 90% of an unpaid invoice today and receive the rest, less a fee, when your customer pays. Turns net-60 into net-now.",
    amount: "Up to 90% of invoice value",
    term: "30 – 120 days",
    speed: "1 – 2 days",
    bestFor: "B2B companies with slow-paying customers",
    rate: "1% – 3% per 30 days",
  },
  {
    id: "merchant-cash-advance",
    title: "Merchant Cash Advance",
    icon: "point_of_sale",
    summary: "An advance on future card sales repaid as a small percentage of each day’s receipts. Fast and flexible, but read the factor rate as an APR before you accept.",
    amount: "$5K – $500K",
    term: "3 – 18 months",
    speed: "Same day – 1 day",
    bestFor: "Card-heavy businesses that need money this week",
    rate: "Factor rate 1.1 – 1.5",
  },
  {
    id: "commercial-real-estate",
    title: "Commercial Real Estate Loan",
    icon: "apartment",
    summary: "Long-term financing to buy, build or refinance the property your business runs from. Stop renting the building you already fill.",
    amount: "$250K – $10M",
    term: "5 – 25 years",
    speed: "30 – 60 days",
    bestFor: "Owner-occupied purchases and refinances",
    rate: "Fixed or variable from 6.75%",
  },
  {
    id: "business-credit-card",
    title: "Business Credit Card",
    icon: "credit_card",
    summary: "Everyday spending power with rewards, statement-level bookkeeping and a business credit file that grows with every on-time payment.",
    amount: "$2K – $100K limit",
    term: "Revolving",
    speed: "Instant decision",
    bestFor: "Separating expenses and building business credit",
    rate: "0% intro to 24.99% APR",
  },
  {
    id: "working-capital",
    title: "Working Capital Loan",
    icon: "savings",
    summary: "Short-term money for payroll, inventory and the dips between big customer payments. Smaller amounts, shorter terms, quick decisions.",
    amount: "$5K – $250K",
    term: "3 – 18 months",
    speed: "Same day – 2 days",
    bestFor: "Bridging a known gap without touching your credit line",
    rate: "Fixed APR from 10.9%",
  },
  {
    id: "franchise-financing",
    title: "Franchise Financing",
    icon: "store",
    summary: "Capital to open or expand a franchise location, from lenders who already know the brand’s unit economics and approved vendor list.",
    amount: "$50K – $2M",
    term: "2 – 10 years",
    speed: "1 – 4 weeks",
    bestFor: "New franchisees and multi-unit operators",
    rate: "Fixed APR from 7.5%",
  },
];

export const COMPARISON_HEADER = {
  heading: "Compare the Core Eight",
  sub: "Amount, term, time to fund and who each product fits. Scroll sideways on smaller screens.",
  columns: ["Product", "Amount", "Term", "Speed to fund", "Best for"],
  note: "Ranges reflect typical offers across the FundLine lender network and are not a guarantee. Your offer depends on time in business, revenue, credit profile and the lender you select.",
} as const;

export const COMPARISON_ROWS: ComparisonRow[] = LOAN_TYPE_DETAILS.slice(0, 8).map((d) => ({
  product: d.title,
  anchor: `#${d.id}`,
  amount: d.amount,
  term: d.term,
  speed: d.speed,
  bestFor: d.bestFor,
}));

export const LOAN_TYPES_FAQ: FaqItem[] = [
  {
    question: "How do I know which loan type to apply for?",
    answerHtml:
      'You don’t have to decide up front. One FundLine application is matched against every product in the network, and offers come back labelled by type so you can compare a term loan next to a line of credit. If you already know, use the <a class="underline" href="#compare">comparison table</a> to confirm the fit.',
  },
  {
    question: "Can I combine more than one product?",
    answerHtml:
      "Yes, and many owners do. A common pairing is a term loan for a one-time project plus a line of credit for day-to-day swings. Lenders will look at total debt service, so we help you size the combination so payments stay comfortable.",
  },
  {
    question: "What do lenders in the network require?",
    answerHtml:
      "Requirements vary by product. As a rule of thumb: six months in business and $8K in monthly revenue opens the door to working capital and advances; twelve months and $10K a month unlocks most term loans and lines; two years of tax returns is the bar for SBA and real estate programs.",
  },
  {
    question: "Are the rates on this page what I will pay?",
    answerHtml:
      "No. They are typical ranges across the lenders we work with. Your actual rate is set by the lender and shown in the disclosure before you accept anything. Every offer shows an APR so you can compare on the same basis, even where a lender quotes a factor rate.",
  },
  {
    question: "Does checking my options affect my credit score?",
    answerHtml:
      "Submitting the FundLine application does not affect your personal credit score. Some lenders run a hard inquiry only when you accept an offer, and they tell you before it happens.",
  },
  {
    question: "What if none of the offers fit?",
    answerHtml:
      'You are never obligated to accept. A funding specialist can walk through why offers came back the way they did and what would change them, usually more time in business or stronger deposits. <a class="underline" href="/book-a-call">Book a call</a> any day of the week.',
  },
];

/* ------------------------------------------------------------------ */
/* /calculators                                                          */
/* ------------------------------------------------------------------ */

export const CALCULATORS_META: PageMeta = {
  title: "Business Loan Calculators | FundLine Capital",
  description:
    "Estimate your monthly payment, total interest and amortization for a business loan, then see how much funding you could qualify for based on revenue, time in business and credit.",
};

export const CALCULATORS_HERO: HeroContent = {
  icon: "calculate",
  headingLine1: "Run the Numbers",
  headingLine2: "Before You Apply.",
  sub: "Two quick tools: what a loan will cost each month, and how much funding a business like yours typically qualifies for. No sign-up, nothing saved.",
  primary: { label: "Check eligibility", href: LINKS.apply },
  secondary: { label: "Jump to qualification", href: "#qualify" },
};

export const PAYMENT_CALC = {
  id: "payment",
  heading: "Loan Payment Calculator",
  sub: "Enter an amount, rate and term to see the monthly payment, total interest and how the balance falls over time.",
  fields: {
    amount: "Loan amount ($)",
    apr: "Annual rate (APR %)",
    term: "Term (months)",
  },
  results: {
    payment: "Monthly payment",
    interest: "Total interest",
    total: "Total repaid",
  },
  preview: {
    heading: "Amortization preview",
    columns: ["Month", "Payment", "Principal", "Interest", "Balance"],
    toggleMore: "Show full schedule",
    toggleLess: "Show first six months",
  },
  defaults: { amount: 150000, apr: 9.5, term: 36 },
  limits: { amount: { min: 5000, max: 5000000, step: 1000 }, apr: { min: 0, max: 60, step: 0.1 }, term: { min: 3, max: 300, step: 1 } },
  note: "Assumes a fixed rate with equal monthly payments and no fees. Weekly or daily repayment products and factor-rate advances will differ. Use the APR shown on your offer for a like-for-like comparison.",
  cta: { label: "Get real offers for this amount", href: LINKS.apply },
} as const;

export const QUALIFY_CALC = {
  id: "qualify",
  heading: "How Much Could I Qualify For?",
  sub: "Lenders size offers from monthly revenue, time in business and credit. Move the inputs and watch the range change.",
  fields: {
    revenue: "Average monthly revenue ($)",
    tenure: "Time in business",
    credit: "Personal credit score",
  },
  results: {
    range: "Estimated funding range",
    products: "Products most likely to return an offer",
    empty: "Enter monthly revenue to see an estimate.",
  },
  defaults: { revenue: 40000, tenure: "1-2y", credit: "good" },
  limits: { revenue: { min: 0, max: 5000000, step: 1000 } },
  note: "This is a rule-of-thumb estimate from typical network offers, not a decision. Most lenders cap offers near 8–15% of annual revenue for short-term products and higher for asset-backed or SBA loans.",
  cta: { label: "See your actual offers", href: LINKS.apply },
} as const;

export const TENURE_OPTIONS: TenureOption[] = [
  { id: "lt6m", label: "Under 6 months", factor: 0.35, products: ["Business credit card", "Startup loan", "Equipment financing"] },
  { id: "6-12m", label: "6 – 12 months", factor: 0.6, products: ["Working capital loan", "Merchant cash advance", "Equipment financing", "Business credit card"] },
  { id: "1-2y", label: "1 – 2 years", factor: 0.85, products: ["Term loan", "Line of credit", "Invoice financing", "Equipment financing"] },
  { id: "2-5y", label: "2 – 5 years", factor: 1, products: ["Term loan", "Line of credit", "SBA 7(a) loan", "Equipment financing"] },
  { id: "5y+", label: "5+ years", factor: 1.15, products: ["SBA 7(a) loan", "Term loan", "Line of credit", "Commercial real estate"] },
];

export const CREDIT_BANDS: CreditBandOption[] = [
  { id: "building", label: "Below 600 (building)", factor: 0.5 },
  { id: "fair", label: "600 – 659 (fair)", factor: 0.75 },
  { id: "good", label: "660 – 719 (good)", factor: 1 },
  { id: "excellent", label: "720+ (excellent)", factor: 1.2 },
];

export const CALCULATORS_FAQ: FaqItem[] = [
  {
    question: "Why is my real offer different from the calculator?",
    answerHtml:
      "The calculator assumes a plain fixed-rate loan with equal monthly payments. Real offers add origination fees, may repay weekly, and some products (advances, invoice financing) are priced with fees instead of interest. Always compare the APR on the disclosure.",
  },
  {
    question: "What is the difference between APR and a factor rate?",
    answerHtml:
      "A factor rate multiplies the advance (borrow $100K at 1.3, repay $130K) and ignores time. APR spreads the cost over the actual term, so a 1.3 factor repaid in six months is a much higher APR than the same factor over eighteen. FundLine shows both on every offer.",
  },
  {
    question: "Should I pick the lowest monthly payment?",
    answerHtml:
      "Not always. A longer term lowers the payment but raises total interest. Match the term to how long the thing you are buying will produce revenue: short for inventory, longer for equipment or a build-out.",
  },
  {
    question: "How accurate is the qualification estimate?",
    answerHtml:
      'It is a rule of thumb built from typical network offers. Your actual range depends on bank deposits, existing debt, industry and the lender. The only way to know is to <a class="underline" href="/apply">apply</a>, which takes about 15 minutes and does not affect your credit score.',
  },
  {
    question: "Does FundLine save what I type here?",
    answerHtml: "No. Both calculators run in your browser and nothing is stored or sent to us.",
  },
];

/* ------------------------------------------------------------------ */
/* /for-lenders                                                          */
/* ------------------------------------------------------------------ */

export const FOR_LENDERS_META: PageMeta = {
  title: "Join the Lender Network | FundLine Capital",
  description:
    "Banks, credit unions and online lenders: receive complete, pre-screened small business applications matched to your credit box. No cost to join, pay only on funded loans.",
};

export const FOR_LENDERS_HERO: HeroContent = {
  eyebrow: "For lenders",
  headingLine1: "Fill Your Pipeline With",
  headingLine2: "Borrowers Who Fit Your Box.",
  sub: "FundLine Capital sends you complete applications, bank data attached, only when the borrower matches the criteria you set. You keep your credit policy. We keep the top of the funnel busy.",
  primary: { label: "Apply to join the network", href: "#partner-form" },
  secondary: { label: "Talk to partnerships", href: LINKS.bookCall },
};

export const LENDER_VALUE_HEADER = {
  heading: "Built for Every Kind of Lender",
  sub: "Seventy-five institutions already fund through FundLine. Here is what each type gets from the network.",
} as const;

export const LENDER_VALUE_CARDS: IconCard[] = [
  {
    icon: "account_balance",
    title: "Banks",
    body: "Reach owners outside your branch footprint with SBA and term-loan volume that already meets your documentation standards. Applications arrive with statements, returns and a completed profile.",
  },
  {
    icon: "diversity_3",
    title: "Credit unions",
    body: "Grow member business lending without adding originators. Set a geography and membership rule and only see applicants you can serve, with a warm handoff into your onboarding.",
  },
  {
    icon: "bolt",
    title: "Online lenders",
    body: "Plug your decision engine into our API and return offers in seconds. Real-time bank data, fraud checks and identity verification are done before the application reaches you.",
  },
];

export const MATCHING_HEADER = {
  heading: "How Matching Works",
  sub: "You define the credit box once. Every application is scored against it before you ever see it.",
} as const;

export const MATCHING_STEPS: Step[] = [
  { title: "Set your criteria", body: "Minimum time in business, revenue, credit score, industries, geographies and products. Update them any time from the partner portal." },
  { title: "We screen and enrich", body: "Applications are verified, bank statements are parsed into cash-flow metrics, and identity and fraud checks run automatically." },
  { title: "You receive the match", body: "Only applications inside your box are routed to you, ranked by fit. Decision in the portal or by API, on your timeline." },
  { title: "Fund and report", body: "Send the offer, close on your paper, and disburse. We track funded volume and pay-outs in one monthly statement." },
];

export const LENDER_STATS_HEADER = { heading: "The Network by the Numbers" } as const;

export const LENDER_STATS: Stat[] = [
  { value: "75+", label: "lenders funding today" },
  { value: "$1.2B+", label: "matched to small businesses" },
  { value: "68%", label: "of routed applications receive an offer" },
  { value: "3.1 days", label: "median match to funding" },
];

export const PARTNER_FORM = {
  id: "partner-form",
  heading: "Apply to Join the Network",
  sub: "Tell us about your institution and the products you fund. A partnerships specialist replies within two business days.",
  fields: {
    institution: "Institution name",
    type: "Institution type",
    contact: "Your name",
    email: "Work email",
    phone: "Phone",
    products: "Products you offer",
    volume: "Approximate monthly small business volume",
    message: "Anything else we should know",
  },
  types: ["Bank", "Credit union", "Online lender", "CDFI or community lender", "Equipment or asset lender", "Other"],
  products: ["Term loans", "Lines of credit", "SBA loans", "Equipment financing", "Invoice financing", "Merchant cash advance", "Commercial real estate", "Business credit cards"],
  volumes: ["Under $1M", "$1M – $5M", "$5M – $25M", "$25M+"],
  submit: "Submit application",
  thanks: { heading: "Thanks — a partnerships specialist will reach out.", body: "We review every application by hand. Expect an email within two business days to schedule a walkthrough of the partner portal." },
} as const;

export const FOR_LENDERS_FAQ: FaqItem[] = [
  {
    question: "What does it cost to join?",
    answerHtml: "Nothing up front. FundLine is paid a referral fee only when a loan you fund through the network closes. The fee schedule is shared before you sign the partner agreement.",
  },
  {
    question: "Do we have to use your decision engine?",
    answerHtml: "No. You keep your own credit policy and underwriting process. We only route applications that match the criteria you set, and you decide how and when to respond.",
  },
  {
    question: "How is borrower data shared?",
    answerHtml:
      'Borrowers consent to sharing their application with matched lenders when they apply. Data moves over encrypted connections and is retained under the terms in our <a class="underline" href="/privacy">privacy policy</a>. Partners sign a data-sharing addendum.',
  },
  {
    question: "Can we limit volume or pause?",
    answerHtml: "Yes. Daily and monthly caps, product pauses and geography changes are self-serve in the partner portal and take effect immediately.",
  },
  {
    question: "What integration options exist?",
    answerHtml: "Three: the web portal (no integration), secure file delivery to your LOS, or the REST API with webhooks for real-time offers. Most partners start in the portal and move to the API as volume grows.",
  },
];

/* ------------------------------------------------------------------ */
/* /embedded/*                                                           */
/* ------------------------------------------------------------------ */

export const FEATURE_PAGES: FeaturePageContent[] = [
  {
    slug: "digital-application",
    meta: {
      title: "Embedded Digital Application | FundLine Capital",
      description:
        "Drop a complete small business loan application into your product. Bank connection, document upload and identity verification included, funded by 75+ lenders.",
    },
    hero: {
      eyebrow: "Embedded financing",
      headingLine1: "A Complete Loan Application,",
      headingLine2: "Inside Your Product.",
      sub: "One embeddable flow collects everything a lender needs in about 15 minutes: business basics, bank connection, statements and identity. Your brand on the outside, the FundLine network on the inside.",
      primary: { label: "Start integrating", href: LINKS.bookCall },
      secondary: { label: "See the docs", href: "#snippet" },
    },
    mock: "application",
    benefits: {
      heading: "Why Embed the Application",
      sub: "Your customers are already in your product when they realise they need capital. Meet them there.",
      cards: [
        { icon: "phone_iphone", title: "Built for mobile first", body: "Every step works on a phone: camera document capture, bank login and e-signature. Owners finish in one sitting instead of three." },
        { icon: "palette", title: "Your brand, your domain", body: "Colors, type, logo and copy come from a theme file. The flow runs on your subdomain so there is no context switch." },
        { icon: "verified_user", title: "Verification handled", body: "Identity, business registration and bank ownership are verified inside the flow. Lenders receive an application they can decision immediately." },
      ],
    },
    steps: {
      heading: "How It Works",
      sub: "Four steps from first line of code to funded customers.",
      items: [
        { title: "Install the SDK", body: "Add the script tag or npm package and mount the application component where you want it." },
        { title: "Prefill what you know", body: "Pass business name, revenue and contact details from your system so owners never retype them." },
        { title: "Owner completes the flow", body: "Bank connection, statements and identity run inside the component. Progress saves automatically." },
        { title: "Offers return", body: "Matched lenders respond in the same UI or by webhook. You choose whether to show offers in-product." },
      ],
    },
    snippet: {
      heading: "Two Lines to Embed",
      sub: "Mount the application and listen for the submitted event. Everything else is configuration.",
      filename: "app.js",
      code: `import { FundLine } from "@fundline/embed";

const app = FundLine.application({
  container: "#funding",
  theme: "acme-light",
  prefill: { businessName: "Acme Roasters", monthlyRevenue: 42000 },
});

app.on("submitted", ({ applicationId }) => {
  console.log("Application sent to lenders", applicationId);
});`,
      notes: ["Prefilled fields are still editable by the owner.", "The submitted event fires once; use webhooks for offer updates.", "Sandbox keys return sample offers within 30 seconds."],
    },
    faq: [
      { question: "How long does integration take?", answerHtml: "Most partners ship the hosted version in an afternoon and the fully themed component in one to two weeks, including review of copy and consent screens." },
      { question: "Who is the lender of record?", answerHtml: "The lender that issues the offer. FundLine Capital is a marketplace, not a lender, and the partner is never the creditor unless they choose to fund on their own paper." },
      { question: "Can we hide products we do not want to promote?", answerHtml: "Yes. The application can be limited to specific products, amounts and terms from the partner dashboard." },
      { question: "Is the flow accessible?", answerHtml: "The component targets WCAG 2.2 AA: full keyboard support, screen-reader labels and reduced-motion handling are built in." },
    ],
    cta: {
      heading: "Put a Funding Button in Your Product.",
      sub: "Talk to our embedded team about scope, timeline and revenue share.",
      primary: { label: "Book an integration call", href: LINKS.bookCall },
      secondary: { label: "Apply as a business", href: LINKS.apply },
    },
  },
  {
    slug: "marketplace",
    meta: {
      title: "Configurable Lending Marketplace | FundLine Capital",
      description:
        "Offer your customers a white-label lending marketplace. Choose the lenders, products and amounts to show, and let owners compare real offers side by side.",
    },
    hero: {
      eyebrow: "Embedded financing",
      headingLine1: "A Marketplace You Configure.",
      headingLine2: "Offers Your Customers Compare.",
      sub: "Turn on the products and lenders that fit your audience, set amount and term guardrails, and present offers side by side with APR, payment and time to fund. The comparison does the selling.",
      primary: { label: "Configure a marketplace", href: LINKS.bookCall },
      secondary: { label: "See the docs", href: "#snippet" },
    },
    mock: "marketplace",
    benefits: {
      heading: "Why a Configurable Marketplace",
      sub: "The right offers for your customers, not every offer for everyone.",
      cards: [
        { icon: "tune", title: "Control what is shown", body: "Toggle products, lenders, amount ranges and term lengths. A payroll platform can show only lines of credit; an equipment dealer can show only equipment financing." },
        { icon: "compare_arrows", title: "Honest comparison", body: "Every offer shows APR, total cost, payment and funding time on the same card. Owners choose with the full picture, which lifts acceptance." },
        { icon: "insights", title: "Reporting built in", body: "Track applications, offers, acceptance and funded volume by product and cohort from one dashboard, or pull it through the API." },
      ],
    },
    steps: {
      heading: "How It Works",
      sub: "From configuration to a funded customer.",
      items: [
        { title: "Pick your mix", body: "Select products and lenders in the partner dashboard. Defaults are tuned to your customer base." },
        { title: "Set guardrails", body: "Minimum and maximum amounts, allowed terms and which industries to include." },
        { title: "Customers compare", body: "Offers appear as cards sorted by total cost, payment or speed. Filters let owners narrow by what matters to them." },
        { title: "Accept and fund", body: "The owner accepts inside the marketplace and the lender closes. You see status at every step." },
      ],
    },
    snippet: {
      heading: "Configure With One Object",
      sub: "Everything you toggle in the dashboard is also available in code.",
      filename: "marketplace.config.js",
      code: `import { FundLine } from "@fundline/embed";

FundLine.marketplace({
  container: "#offers",
  products: ["line-of-credit", "term-loan"],
  amount: { min: 10000, max: 250000 },
  terms: [6, 12, 24],
  sort: "total-cost",
  onAccept: (offer) => track("offer_accepted", offer.id),
});`,
      notes: ["Configuration changes apply to new sessions immediately.", "Sort order defaults to total cost so cheaper offers lead.", "Lender lists can be managed per partner or per segment."],
    },
    faq: [
      { question: "Can we feature our own lending product?", answerHtml: "Yes. Partners that lend on their own paper can list their product alongside network offers, with the same comparison card and disclosures." },
      { question: "How are offers ordered?", answerHtml: "By the sort you choose: total cost, monthly payment or speed to fund. Ordering is never influenced by referral fees, and the disclosure says so." },
      { question: "What disclosures are required?", answerHtml: "State commercial-financing disclosures are rendered automatically on each offer card where they apply. Partners do not need to maintain them." },
      { question: "Can owners save and return?", answerHtml: "Offers stay valid for the lender’s stated window, typically 7 to 14 days. Owners get a link to return and accept from any device." },
    ],
    cta: {
      heading: "Launch a Marketplace Your Customers Trust.",
      sub: "A partnerships specialist can configure a sandbox for your product this week.",
      primary: { label: "Book a configuration call", href: LINKS.bookCall },
      secondary: { label: "Apply as a business", href: LINKS.apply },
    },
  },
  {
    slug: "matching",
    meta: {
      title: "Smart Lender Matching | FundLine Capital",
      description:
        "Route every application to the lenders most likely to approve it. FundLine's matching engine scores fit on 40+ signals so your customers see offers, not declines.",
    },
    hero: {
      eyebrow: "Embedded financing",
      headingLine1: "Smart Matching That Finds",
      headingLine2: "the Yes Faster.",
      sub: "Every lender in the network publishes a credit box. Our engine scores each application against all of them on 40+ signals and routes it only where an approval is likely. Fewer declines, faster offers, no shotgun submissions.",
      primary: { label: "See matching in action", href: LINKS.bookCall },
      secondary: { label: "See the docs", href: "#snippet" },
    },
    mock: "matching",
    benefits: {
      heading: "Why Smart Matching",
      sub: "Submitting everywhere wastes lender time and owner goodwill. Matching sends the right file to the right desk.",
      cards: [
        { icon: "auto_awesome", title: "Scored on 40+ signals", body: "Time in business, deposits, balance volatility, industry, geography, existing debt and more, weighted by what each lender actually approves." },
        { icon: "shield", title: "Protects credit files", body: "Because only likely approvers see the application, owners avoid a stack of hard inquiries from lenders who were never going to say yes." },
        { icon: "trending_up", title: "Learns from outcomes", body: "Every offer and decline feeds back into the model. Match precision improves for your segment over time without any work on your side." },
      ],
    },
    steps: {
      heading: "How It Works",
      sub: "What happens in the seconds after an owner hits submit.",
      items: [
        { title: "Enrich", body: "Bank data is parsed into cash-flow metrics; business and identity records are verified." },
        { title: "Score", body: "The application is compared against every lender’s published box and ranked by approval likelihood." },
        { title: "Route", body: "The top matches receive the file, usually three to five lenders. Nothing goes to lenders below the threshold." },
        { title: "Explain", body: "Owners and partners see why each lender was matched, and what would change the result." },
      ],
    },
    snippet: {
      heading: "Preview a Match Before Submitting",
      sub: "Call the match endpoint with a partial profile to show owners their likely lenders early.",
      filename: "match.ts",
      code: `const res = await fetch("https://api.fundline.example/v1/match/preview", {
  method: "POST",
  headers: { Authorization: "Bearer <sandbox-key>" },
  body: JSON.stringify({
    monthsInBusiness: 20,
    monthlyRevenue: 38000,
    creditBand: "good",
    industry: "restaurant",
  }),
});

const { matches } = await res.json();
// matches: [{ lenderId, score: 0.91, products: ["line-of-credit"] }, ...]`,
      notes: ["Preview calls never share the owner’s identity with lenders.", "Scores are relative; 0.7 and above is routed by default.", "Thresholds are configurable per partner."],
    },
    faq: [
      { question: "Does matching replace the lender’s decision?", answerHtml: "No. It decides where an application is sent. Each lender still makes its own credit decision on its own policy." },
      { question: "What if there is no match?", answerHtml: "The owner is told immediately, with the two or three changes that would most improve their profile. Partners can opt to route no-match files to a specialist for a call." },
      { question: "Is the model explainable?", answerHtml: "Yes. Every match comes with the top contributing signals in plain language, which partners can surface to owners." },
      { question: "How is fairness handled?", answerHtml: "Matching uses only business performance and lender-published criteria. Protected characteristics are never inputs, and the model is reviewed quarterly for disparate outcomes." },
    ],
    cta: {
      heading: "Send Every Application to the Right Lender.",
      sub: "See a live match on one of your own anonymised profiles.",
      primary: { label: "Book a matching demo", href: LINKS.bookCall },
      secondary: { label: "Apply as a business", href: LINKS.apply },
    },
  },
  {
    slug: "prequalify",
    meta: {
      title: "Prequalify Customers | FundLine Capital",
      description:
        "Show customers how much funding they could qualify for before they apply. A lightweight widget with no credit impact that turns browsers into complete applications.",
    },
    hero: {
      eyebrow: "Embedded financing",
      headingLine1: "Prequalify Customers",
      headingLine2: "Before They Ever Apply.",
      sub: "Three questions, no credit pull, and a funding range in under ten seconds. The prequalify widget gives owners a reason to start and gives you a warm, sized lead every time.",
      primary: { label: "Add prequalification", href: LINKS.bookCall },
      secondary: { label: "See the docs", href: "#snippet" },
    },
    mock: "prequalify",
    benefits: {
      heading: "Why Prequalify",
      sub: "The biggest drop-off in lending is the blank application. A range up front changes that.",
      cards: [
        { icon: "verified", title: "No credit impact", body: "Prequalification uses self-reported revenue and tenure plus a soft business lookup. Nothing touches the owner’s personal credit file." },
        { icon: "speed", title: "Ten seconds to a number", body: "Owners see a realistic funding range instantly and can carry it straight into the full application with everything prefilled." },
        { icon: "campaign", title: "Works anywhere", body: "Embed it on a pricing page, in an email, inside a dashboard or on a checkout screen. It is a single component with a single callback." },
      ],
    },
    steps: {
      heading: "How It Works",
      sub: "From a curious visitor to a submitted application.",
      items: [
        { title: "Three questions", body: "Monthly revenue, time in business and a credit band. Optional: what the money is for." },
        { title: "Instant range", body: "The widget shows a low and high estimate and the products that fit, using the same rules as our matching engine." },
        { title: "Continue in one tap", body: "The range and answers carry into the full application, so the owner never re-enters them." },
        { title: "You get the lead", body: "A prequalified lead with size and intent lands in your CRM by webhook, whether or not the owner continues." },
      ],
    },
    snippet: {
      heading: "One Component, One Callback",
      sub: "Mount the widget and receive the range and lead the moment it renders.",
      filename: "prequalify.js",
      code: `import { FundLine } from "@fundline/embed";

FundLine.prequalify({
  container: "#prequalify",
  compact: true,
  onResult: ({ low, high, products, leadId }) => {
    showBanner(\`You may qualify for \${format(low)} – \${format(high)}\`);
    crm.upsertLead(leadId, { low, high, products });
  },
});`,
      notes: ["Compact mode fits a 320px sidebar.", "Results include the product list so you can deep-link into the marketplace.", "Leads are deduplicated by business email."],
    },
    faq: [
      { question: "How accurate is the range?", answerHtml: "It reflects typical offers in the network for similar profiles, roughly ±25% of the eventual median offer. It is labelled as an estimate everywhere it appears." },
      { question: "Is it really a soft check?", answerHtml: "Yes. Prequalification never queries personal credit. Only a full application, and only on acceptance of an offer, can trigger a hard inquiry, which the lender discloses first." },
      { question: "Can we style it?", answerHtml: "Fully. The widget takes the same theme file as the application and marketplace components." },
      { question: "What data do we receive?", answerHtml: "The answers, the range, the fitting products and a lead identifier. Owner contact details are shared only with their consent." },
    ],
    cta: {
      heading: "Give Every Visitor a Number to Say Yes To.",
      sub: "See the widget live on a page that looks like yours.",
      primary: { label: "Book a prequalify demo", href: LINKS.bookCall },
      secondary: { label: "Apply as a business", href: LINKS.apply },
    },
  },
];

export function featurePageBySlug(slug: string): FeaturePageContent | undefined {
  return FEATURE_PAGES.find((p) => p.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Legal pages                                                           */
/* ------------------------------------------------------------------ */

/**
 * PLACEHOLDER LEGAL COPY. The five documents below are original placeholder text written for a
 * fictional lending marketplace so the routes render realistically. They are not legal advice and
 * must be replaced by counsel-reviewed documents before any real use.
 */

const LEGAL_ENTITY = "FundLine Capital, Inc. (“FundLine”, “we”, “us”)";
const LEGAL_ADDRESS = "FundLine Capital, Inc., 400 Market Street, Suite 1200, Salt Lake City, UT 84101";

export const LEGAL_PAGES: LegalPageContent[] = [
  {
    slug: "terms",
    meta: { title: "Terms of Use | FundLine Capital", description: "The terms that govern use of the FundLine Capital website, application and lending marketplace." },
    title: "Terms of Use",
    lastUpdated: "March 3, 2026",
    intro: "These Terms of Use govern your access to and use of the FundLine Capital website, application and marketplace services. By using the services you agree to these terms. If you are using the services on behalf of a business, you represent that you are authorized to bind that business.",
    sections: [
      {
        id: "who-we-are",
        title: "Who we are and what we do",
        paragraphs: [
          `${LEGAL_ENTITY} operates an online marketplace that connects small business owners with third-party lenders and funders. FundLine is not a lender, does not make credit decisions and does not guarantee that any application will receive an offer.`,
          "All financing is provided by participating lenders under their own agreements. Any loan, line of credit, advance or card you accept is a contract between you and that lender, and its terms control.",
        ],
      },
      {
        id: "eligibility",
        title: "Eligibility",
        paragraphs: [
          "The services are available to businesses operating in the United States and to individuals aged 18 or older who are authorized to act for that business. You must provide accurate, current and complete information and keep it updated.",
        ],
      },
      {
        id: "your-account",
        title: "Your account",
        paragraphs: [
          "You are responsible for the security of your login credentials and for all activity under your account. Notify us immediately at security@fundlinecapital.com if you suspect unauthorized access. We may suspend accounts that appear compromised or that violate these terms.",
        ],
      },
      {
        id: "applications-and-offers",
        title: "Applications and offers",
        paragraphs: [
          "When you submit an application you authorize FundLine to share it, together with any documents and connected bank data, with lenders whose published criteria your application matches. Lenders may verify the information you provide and may contact you directly.",
          "Offers are made by lenders, not by FundLine. Offers may be withdrawn or changed by the lender before acceptance. You are never obligated to accept an offer.",
        ],
        bullets: [
          "Submitting an application through FundLine does not affect your personal credit score.",
          "Accepting an offer may involve a hard credit inquiry, which the lender will disclose before proceeding.",
          "Rates, amounts and terms displayed before an offer is issued are illustrative.",
        ],
      },
      {
        id: "compensation",
        title: "How FundLine is paid",
        paragraphs: [
          "FundLine receives a fee from lenders when a loan is funded through the marketplace. Fees may vary by lender and product and may influence which lenders participate. Fees do not change the ordering of offers shown to you, which you control through the sort options provided.",
        ],
      },
      {
        id: "acceptable-use",
        title: "Acceptable use",
        paragraphs: ["You agree not to misuse the services. In particular you will not:"],
        bullets: [
          "Submit false, misleading or fraudulent information or documents.",
          "Apply on behalf of a business without authority to do so.",
          "Scrape, reverse engineer or interfere with the services or the lender network.",
          "Use the services for any unlawful purpose or in violation of any lender agreement.",
        ],
      },
      {
        id: "intellectual-property",
        title: "Intellectual property",
        paragraphs: [
          "The services, including software, text, design and trademarks, are owned by FundLine or its licensors. You receive a limited, revocable, non-transferable license to use the services for their intended purpose. No other rights are granted.",
        ],
      },
      {
        id: "disclaimers",
        title: "Disclaimers",
        paragraphs: [
          "The services are provided “as is” and “as available”. FundLine does not warrant that the services will be uninterrupted or error-free, that any application will receive an offer, or that any offer will meet your needs. Calculators and estimates are for information only and are not offers of credit.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "Limitation of liability",
        paragraphs: [
          "To the fullest extent permitted by law, FundLine will not be liable for indirect, incidental, special, consequential or punitive damages, or for lost profits or revenue, arising from your use of the services. FundLine’s total liability for any claim will not exceed the greater of $100 or the fees you paid to FundLine in the twelve months before the claim.",
        ],
      },
      {
        id: "disputes",
        title: "Governing law and disputes",
        paragraphs: [
          "These terms are governed by the laws of the State of Utah without regard to conflict-of-law rules. Any dispute will be resolved by binding individual arbitration in Salt Lake County, Utah, except that either party may seek injunctive relief in court. Class actions are waived to the extent permitted by law.",
        ],
      },
      {
        id: "changes",
        title: "Changes to these terms",
        paragraphs: [
          "We may update these terms from time to time. Material changes will be announced on the site or by email at least 14 days before they take effect. Continued use after the effective date constitutes acceptance.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        paragraphs: [`Questions about these terms can be sent to legal@fundlinecapital.com or by mail to ${LEGAL_ADDRESS}.`],
      },
    ],
  },
  {
    slug: "privacy",
    meta: { title: "Privacy Policy | FundLine Capital", description: "How FundLine Capital collects, uses, shares and protects information when you use the lending marketplace." },
    title: "Privacy Policy",
    lastUpdated: "March 3, 2026",
    intro: "This policy explains what information FundLine Capital collects when you use our website and marketplace, how we use and share it, and the choices you have. It applies to business owners, lender and broker partners and visitors.",
    sections: [
      {
        id: "information-we-collect",
        title: "Information we collect",
        paragraphs: ["We collect information in three ways: what you give us, what we receive from connected sources with your permission, and what is collected automatically."],
        bullets: [
          "You provide: business and owner names, contact details, revenue, time in business, funding needs, documents such as bank statements and tax returns, and the answers you give in an application.",
          "Connected sources: bank account transactions through a data aggregator you authorize, business registration records and, only after you accept an offer, credit reports obtained by the lender.",
          "Automatically: device and browser information, IP address, pages viewed, referring URLs and interaction data collected through cookies and similar technologies.",
        ],
      },
      {
        id: "how-we-use",
        title: "How we use information",
        paragraphs: ["We use information to:"],
        bullets: [
          "Match your application to lenders whose criteria it meets and deliver offers to you.",
          "Verify identity and business ownership and prevent fraud.",
          "Operate, improve and secure the services, including training the matching model on outcomes.",
          "Communicate with you about your application, offers and account, and, with your consent, about products we think may interest you.",
          "Comply with legal obligations and enforce our terms.",
        ],
      },
      {
        id: "how-we-share",
        title: "How we share information",
        paragraphs: [
          "We share your application and supporting data with lenders you are matched with, and with the funding specialist assigned to you. We share information with service providers that help us run the services (hosting, data aggregation, identity verification, analytics, email) under contracts that restrict their use of it.",
          "We may disclose information when required by law, to protect the rights and safety of FundLine, our users or others, or in connection with a merger, acquisition or sale of assets. We do not sell personal information for money.",
        ],
      },
      {
        id: "cookies",
        title: "Cookies and analytics",
        paragraphs: [
          "We use essential cookies to operate the site and optional cookies for analytics and advertising measurement. You can manage optional cookies on the Your Privacy Choices page or through your browser settings. Some browsers send a Global Privacy Control signal, which we honor as an opt-out of targeted advertising.",
        ],
      },
      {
        id: "retention",
        title: "Data retention",
        paragraphs: [
          "We keep application data for as long as needed to provide the services and for the period required by law, generally up to seven years after your last activity to satisfy lending and tax record-keeping rules. Connected bank data is refreshed only while an application is active and deleted within 90 days after it closes unless you fund a loan and the lender requires ongoing access.",
        ],
      },
      {
        id: "security",
        title: "Security",
        paragraphs: [
          "Data is encrypted in transit and at rest. Access is limited to staff and systems that need it, and we run an annual independent security assessment. No system is perfectly secure; if we become aware of a breach affecting your information we will notify you as required by law.",
        ],
      },
      {
        id: "your-rights",
        title: "Your rights and choices",
        paragraphs: [
          "Depending on where you live you may have the right to access, correct, delete or port your information, to opt out of targeted advertising and to limit the use of sensitive information. You can exercise these rights on the Your Privacy Choices page or by emailing privacy@fundlinecapital.com. We will not discriminate against you for exercising them.",
        ],
      },
      {
        id: "children",
        title: "Children",
        paragraphs: ["The services are for businesses and are not directed to anyone under 18. We do not knowingly collect information from children."],
      },
      {
        id: "changes",
        title: "Changes to this policy",
        paragraphs: ["We will post any changes here and update the date at the top. Material changes will also be announced by email or a notice on the site."],
      },
      {
        id: "contact",
        title: "Contact",
        paragraphs: [`Privacy questions or requests: privacy@fundlinecapital.com, or by mail to ${LEGAL_ADDRESS}.`],
      },
    ],
  },
  {
    slug: "privacy-choices",
    meta: { title: "Your Privacy Choices | FundLine Capital", description: "Manage cookies, marketing communications and data requests for your FundLine Capital account." },
    title: "Your Privacy Choices",
    lastUpdated: "March 3, 2026",
    intro: "Use this page to control optional cookies, marketing messages and the sharing of your information for advertising, and to submit access or deletion requests. Choices apply to this browser unless you provide an email so we can apply them to your account.",
    showPreferences: true,
    sections: [
      {
        id: "what-you-can-control",
        title: "What you can control",
        paragraphs: ["The preferences form below covers the settings most people ask about:"],
        bullets: [
          "Analytics cookies that help us understand how the site is used.",
          "Advertising cookies and the sharing of identifiers with ad partners for targeted ads.",
          "Marketing email and text messages about products and offers.",
          "Requests to access, correct or delete the information we hold about you.",
        ],
      },
      {
        id: "essential-processing",
        title: "What stays on",
        paragraphs: [
          "Some processing is required to provide the services and cannot be switched off here: essential cookies for sign-in and security, sharing your application with lenders you are matched with, and communications about an active application or funded loan.",
        ],
      },
      {
        id: "global-privacy-control",
        title: "Global Privacy Control",
        paragraphs: ["If your browser sends a Global Privacy Control signal we treat it as an opt-out of targeted advertising for that browser automatically. You can still use the form to apply the choice to your account."],
      },
      {
        id: "verification",
        title: "How we verify requests",
        paragraphs: ["For access and deletion requests we confirm the email address on file and may ask for one additional piece of account information. We respond within 45 days and will tell you if we need more time."],
      },
    ],
  },
  {
    slug: "licenses",
    meta: { title: "Licenses | FundLine Capital", description: "Licensing and registration information for FundLine Capital's marketplace and broker activities." },
    title: "Licenses and Registrations",
    lastUpdated: "January 15, 2026",
    intro: "FundLine Capital operates as a commercial loan broker and marketplace, not as a lender. Where state law requires a license or registration for that activity, the details are listed here. Placeholder license numbers are shown for layout purposes.",
    sections: [
      {
        id: "entity",
        title: "Legal entity",
        paragraphs: [`${LEGAL_ENTITY}, a Delaware corporation with its principal office at ${LEGAL_ADDRESS}. NMLS placeholder ID 000000.`],
      },
      {
        id: "state-licenses",
        title: "State licenses and registrations",
        paragraphs: ["Commercial financing broker and marketplace registrations (placeholder numbers):"],
        bullets: [
          "California — Commercial Financing Provider registration, No. CFL-000000.",
          "New York — Commercial Finance Disclosure compliance filing, No. NY-CFD-000000.",
          "Utah — Commercial Financing Registration, No. UT-CF-000000.",
          "Virginia — Sales-Based Financing Broker registration, No. VA-SBF-000000.",
          "Florida — Commercial Financing Disclosure compliance filing, No. FL-CFD-000000.",
        ],
      },
      {
        id: "lender-licensing",
        title: "Lender licensing",
        paragraphs: ["Each lender in the FundLine network holds its own licenses for the products it offers. The lender’s licensing information appears on its offer disclosure and loan agreement."],
      },
      {
        id: "disclosures-by-state",
        title: "State-specific disclosures",
        paragraphs: ["Where a state requires a commercial financing disclosure, the lender or FundLine provides it before you accept an offer. The disclosure shows the total amount financed, finance charge, annual percentage rate, payment schedule and prepayment terms in the format the state prescribes."],
      },
      {
        id: "complaints",
        title: "Complaints",
        paragraphs: ["If you have a complaint about FundLine’s marketplace services, email compliance@fundlinecapital.com or write to the address above. You may also contact the regulator in your state; contact details are available from the state agencies listed on the offer disclosure."],
      },
    ],
  },
  {
    slug: "disclosures",
    meta: { title: "Disclosures | FundLine Capital", description: "Important disclosures about how FundLine Capital's lending marketplace works, how we are paid, and how to read the figures on this site." },
    title: "Disclosures",
    lastUpdated: "March 3, 2026",
    intro: "Read this page to understand what FundLine Capital is, how we make money, what the numbers on our site mean and what happens to your credit when you apply.",
    sections: [
      {
        id: "not-a-lender",
        title: "FundLine is not a lender",
        paragraphs: ["FundLine Capital is a marketplace and broker. We do not make loans, issue credit or set rates. Every offer is made by a third-party lender under its own agreement, and that lender is your creditor."],
      },
      {
        id: "compensation",
        title: "How we are compensated",
        paragraphs: ["Lenders pay FundLine a referral fee when a loan closes through the marketplace. Fees vary by lender and product. This compensation may affect which lenders choose to participate in the network but does not change the sort order of offers you see, which you control."],
      },
      {
        id: "illustrative-figures",
        title: "Rates, amounts and speed",
        paragraphs: ["Rates, funding ranges and time-to-fund figures on this site are illustrative ranges observed across the network. They are not offers and are not guaranteed. “As little as 24 hours” refers to the fastest observed time from an accepted offer to disbursement."],
      },
      {
        id: "credit-impact",
        title: "Credit impact",
        paragraphs: ["Submitting an application to FundLine does not affect your personal credit score. Accepting an offer may involve a hard credit inquiry by the lender, which will be disclosed before it occurs. Some lenders report repayment history to business credit bureaus."],
      },
      {
        id: "statistics",
        title: "Statistics and testimonials",
        paragraphs: ["Network statistics such as lender count, funded volume and ratings are placeholders for this preview site and should not be relied on. Customer stories are illustrative; names and businesses are fictional."],
      },
      {
        id: "calculators",
        title: "Calculators and estimates",
        paragraphs: ["Payment and qualification calculators are provided for information only. They use simplified assumptions and do not account for fees, repayment frequency or lender policy. They are not offers of credit."],
      },
      {
        id: "partners",
        title: "Broker and embedded partners",
        paragraphs: ["Where you reach FundLine through a broker or an embedded partner, that partner may receive a share of the referral fee. The partner is not the lender and does not make credit decisions unless separately disclosed."],
      },
      {
        id: "contact",
        title: "Questions",
        paragraphs: [`Contact compliance@fundlinecapital.com or write to ${LEGAL_ADDRESS}.`],
      },
    ],
  },
];

export function legalPageBySlug(slug: string): LegalPageContent | undefined {
  return LEGAL_PAGES.find((p) => p.slug === slug);
}

export const PRIVACY_PREFERENCES = {
  heading: "Preferences",
  sub: "Switch a setting off to opt out. Add your email to apply the choices to your account, not just this browser.",
  toggles: [
    { id: "analytics", label: "Analytics cookies", body: "Helps us see which pages work and which do not. No advertising use." },
    { id: "advertising", label: "Advertising cookies and sharing", body: "Allows ad partners to measure and target. Off means we treat you as opted out of sale or sharing." },
    { id: "email", label: "Marketing email", body: "Occasional notes about new products and lender programs. Application emails are unaffected." },
    { id: "sms", label: "Marketing text messages", body: "Text reminders and offers. Reply STOP at any time." },
  ],
  request: { label: "Data request (optional)", options: ["No request", "Send me a copy of my data", "Correct my information", "Delete my information"] },
  email: { label: "Email on your account (optional)", placeholder: "owner@business.com" },
  submit: "Save preferences",
  thanks: { heading: "Thanks — your preferences are saved.", body: "Cookie choices apply to this browser now. If you added an email, we will confirm account-level changes and any data request within 45 days." },
} as const;

/* ------------------------------------------------------------------ */
/* Shared                                                                */
/* ------------------------------------------------------------------ */

export const FOOTER_CTA_LENDERS = {
  headingLine1: "Seventy-five lenders already fund through FundLine.",
  headingLine2: "Make it seventy-six.",
  buttons: { demo: { label: "Talk to partnerships", href: LINKS.bookCall }, insured: { label: "Apply to join", href: "#partner-form" } },
} as const;
