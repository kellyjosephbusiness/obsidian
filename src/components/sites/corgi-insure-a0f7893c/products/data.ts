import type { FaqItem } from "@/types/sites/corgi-insure-a0f7893c/home";
import type {
  ComparisonRow,
  CreditBandOption,
  HeroContent,
  LegalPageContent,
  LoanTypeDetail,
  PageMeta,
  TenureOption,
} from "@/types/sites/corgi-insure-a0f7893c/products";
import { ASSETS, LINKS } from "../root-8a5edab2/data";

/**
 * FundLine Capital — products, partners and legal content (Group D).
 * Every figure, name, date and address is a fictional placeholder. Legal pages are placeholder
 * copy written for a funding brokerage and are not legal advice.
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
  headingLine1: "Every way to fund",
  headingLine2: "a small business. One application.",
  sub: "Eight core products, a dozen specialty programs, and 75+ lenders behind them. Pick the product that fits the job, or let us match you.",
  primary: { label: "Apply now", href: LINKS.apply },
  secondary: { label: "Compare products", href: "#compare" },
};

export const LOAN_TYPES_PRODUCTS_HEADER = {
  heading: "All financing types",
  sub: "Start with the eight products most business owners use, then scroll on for the industry and stage-specific programs.",
} as const;

export const SPECIALTY_PROGRAMS_HEADER = {
  heading: "Specialty programs",
  sub: "Twelve industry and stage-specific programs, sourced from the lenders that write them most. One application covers all of them.",
} as const;

export const LOAN_TYPES_DETAILS_HEADER = {
  heading: "Loan types in detail",
  sub: "What each product is for, how much you can get, and how fast it funds. Figures are typical ranges across our network, not an offer.",
} as const;

export const LOAN_TYPE_DETAILS: LoanTypeDetail[] = [
  {
    id: "term-loans",
    title: "Term loan",
    icon: "payments",
    summary: "A lump sum repaid on a fixed schedule. The workhorse for one-time investments with a clear price tag: a build-out, a large order, an acquisition.",
    amount: "$5K – $5M",
    term: "6 – 60 months",
    speed: "1 – 3 days",
    bestFor: "One-time projects with a known cost",
    rate: "Fixed APR from 7.99%",
    image: `${ASSETS}/images/products/term-loan.png`,
    href: "/term-loans",
  },
  {
    id: "line-of-credit",
    title: "Business line of credit",
    icon: "credit_score",
    summary: "A revolving limit you draw on when cash gets tight and pay interest only on what you use. Repay and the room comes back.",
    amount: "$10K – $500K",
    term: "6 – 24 month revolving",
    speed: "Same day – 2 days",
    bestFor: "Smoothing seasonal cash flow and payroll",
    rate: "Variable APR from 9.5%",
    image: `${ASSETS}/images/products/line-of-credit.png`,
  },
  {
    id: "sba-loans",
    title: "SBA 7(a) loan",
    icon: "account_balance",
    summary: "Government-backed financing with the longest terms and lowest rates in the network. Worth the extra paperwork if you can plan a few weeks ahead.",
    amount: "$50K – $5M",
    term: "Up to 10 years (25 for real estate)",
    speed: "3 – 8 weeks",
    bestFor: "Established businesses with two or more years of returns",
    rate: "Prime + 2.25% – 4.75%",
    image: `${ASSETS}/images/products/sba-7a.png`,
  },
  {
    id: "equipment-financing",
    title: "Equipment financing",
    icon: "precision_manufacturing",
    summary: "Buy or lease trucks, machines, ovens or servers with a loan secured by the equipment itself. Approvals lean on the asset, not just your credit.",
    amount: "$10K – $2M",
    term: "2 – 7 years",
    speed: "2 – 5 days",
    bestFor: "Business owners replacing or adding revenue-producing assets",
    rate: "Fixed APR from 6.5%",
    image: `${ASSETS}/images/products/equipment-financing.png`,
  },
  {
    id: "invoice-financing",
    title: "Invoice financing",
    icon: "receipt_long",
    summary: "Advance up to 90% of an unpaid invoice today and receive the rest, less a fee, when your customer pays. Turns net-60 into net-now.",
    amount: "Up to 90% of invoice value",
    term: "30 – 120 days",
    speed: "1 – 2 days",
    bestFor: "B2B companies with slow-paying customers",
    rate: "1% – 3% per 30 days",
    image: `${ASSETS}/images/products/invoice-financing.png`,
  },
  {
    id: "merchant-cash-advance",
    title: "Merchant cash advance",
    icon: "point_of_sale",
    summary: "An advance on future card sales repaid as a small percentage of each day’s receipts. Fast and flexible, but read the factor rate as an APR before you accept.",
    amount: "$5K – $500K",
    term: "3 – 18 months",
    speed: "Same day – 1 day",
    bestFor: "Card-heavy businesses that need money this week",
    rate: "Factor rate 1.1 – 1.5",
    image: `${ASSETS}/images/products/merchant-cash-advance.png`,
  },
  {
    id: "commercial-real-estate",
    title: "Commercial real estate loan",
    icon: "apartment",
    summary: "Long-term financing to buy, build or refinance the property your business runs from. Stop renting the building you already fill.",
    amount: "$250K – $10M",
    term: "5 – 25 years",
    speed: "30 – 60 days",
    bestFor: "Owner-occupied purchases and refinances",
    rate: "Fixed or variable from 6.75%",
    image: `${ASSETS}/images/products/commercial-real-estate.png`,
  },
  {
    id: "business-credit-card",
    title: "Business credit card",
    icon: "credit_card",
    summary: "Everyday spending power with rewards, statement-level bookkeeping and a business credit file that grows with every on-time payment.",
    amount: "$2K – $100K limit",
    term: "Revolving",
    speed: "Instant decision",
    bestFor: "Separating expenses and building business credit",
    rate: "0% intro to 24.99% APR",
    image: `${ASSETS}/images/products/business-credit-card.png`,
  },
  {
    id: "working-capital",
    title: "Working capital loan",
    icon: "savings",
    summary: "Short-term money for payroll, inventory and the dips between big customer payments. Smaller amounts, shorter terms, quick decisions.",
    amount: "$5K – $250K",
    term: "3 – 18 months",
    speed: "Same day – 2 days",
    bestFor: "Bridging a known gap without touching your credit line",
    rate: "Fixed APR from 10.9%",
    image: `${ASSETS}/images/products/specialty/working-capital-loans.png`,
  },
  {
    id: "franchise-financing",
    title: "Franchise financing",
    icon: "store",
    summary: "Capital to open or expand a franchise location, from lenders who already know the brand’s unit economics and approved vendor list.",
    amount: "$50K – $2M",
    term: "2 – 10 years",
    speed: "1 – 4 weeks",
    bestFor: "New franchisees and multi-unit operators",
    rate: "Fixed APR from 7.5%",
    image: `${ASSETS}/images/products/specialty/franchise-financing.png`,
  },
];

export const COMPARISON_HEADER = {
  heading: "Compare the core eight",
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
      "Yes, and many business owners do. A common pairing is a term loan for a one-time project plus a line of credit for day-to-day swings. Lenders will look at total debt service, so we help you size the combination so payments stay comfortable.",
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
      'You are never obligated to accept. A funding specialist can walk through why offers came back the way they did and what would change them, usually more time in business or stronger deposits. <a class="underline" href="/apply">Book a call</a> any day of the week.',
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
  headingLine1: "Run the numbers",
  headingLine2: "before you apply.",
  sub: "Two quick tools: what a loan will cost each month, and how much funding a business like yours typically qualifies for. No sign-up, nothing saved.",
  primary: { label: "Apply now", href: LINKS.apply },
  secondary: { label: "Jump to qualification", href: "#qualify" },
};

export const PAYMENT_CALC = {
  id: "payment",
  heading: "Loan payment calculator",
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
  heading: "How much could I qualify for?",
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
/* Legal pages                                                           */
/* ------------------------------------------------------------------ */

const LEGAL_ENTITY = "FundLine Capital, Inc. (“FundLine”, “we”, “us”)";
const LEGAL_ADDRESS = "FundLine Capital, Inc., 1 Liberty Plaza, Suite 2300, New York, NY 10006";

export const LEGAL_PAGES: LegalPageContent[] = [
  {
    slug: "terms",
    meta: { title: "Terms of Use | FundLine Capital", description: "The terms that govern use of the FundLine Capital website, application and funding brokerage." },
    title: "Terms of use",
    lastUpdated: "March 3, 2026",
    intro: "These Terms of Use govern your access to and use of the FundLine Capital website, application and brokerage services. By using the services you agree to these terms. If you are using the services on behalf of a business, you represent that you are authorized to bind that business.",
    sections: [
      {
        id: "who-we-are",
        title: "Who we are and what we do",
        paragraphs: [
          `${LEGAL_ENTITY} operates as a commercial loan broker that connects small business owners with third-party lenders and funders. FundLine is not a lender, does not make credit decisions and does not guarantee that any application will receive an offer.`,
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
          "FundLine receives a fee from lenders when a loan is funded through our brokerage. Fees may vary by lender and product and may influence which lenders participate. Fees do not change the ordering of offers shown to you, which you control through the sort options provided.",
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
          "These terms are governed by the laws of the State of New York without regard to conflict-of-law rules. Any dispute will be resolved by binding individual arbitration in New York County, New York, except that either party may seek injunctive relief in court. Class actions are waived to the extent permitted by law.",
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
    meta: { title: "Privacy Policy | FundLine Capital", description: "How FundLine Capital collects, uses, shares and protects information when you use the funding brokerage." },
    title: "Privacy policy",
    lastUpdated: "March 3, 2026",
    intro: "This policy explains what information FundLine Capital collects when you use our website and brokerage services, how we use and share it, and the choices you have. It applies to business owners, lender and broker partners and visitors.",
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
    title: "Your privacy choices",
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
    meta: { title: "Licenses | FundLine Capital", description: "Licensing and registration information for FundLine Capital's broker activities." },
    title: "Licenses and registrations",
    lastUpdated: "January 15, 2026",
    intro: "FundLine Capital operates as a commercial loan broker, not as a lender. Where state law requires a license or registration for that activity, the details are listed here. Placeholder license numbers are shown for layout purposes.",
    sections: [
      {
        id: "entity",
        title: "Legal entity",
        paragraphs: [`${LEGAL_ENTITY}, a Delaware corporation with its principal office at ${LEGAL_ADDRESS}. NMLS placeholder ID 000000.`],
      },
      {
        id: "state-licenses",
        title: "State licenses and registrations",
        paragraphs: ["Commercial financing broker registrations (placeholder numbers):"],
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
        paragraphs: ["If you have a complaint about FundLine’s brokerage services, email compliance@fundlinecapital.com or write to the address above. You may also contact the regulator in your state; contact details are available from the state agencies listed on the offer disclosure."],
      },
    ],
  },
  {
    slug: "disclosures",
    meta: { title: "Disclosures | FundLine Capital", description: "Important disclosures about how FundLine Capital's funding brokerage works, how we are paid, and how to read the figures on this site." },
    title: "Disclosures",
    lastUpdated: "March 3, 2026",
    intro: "Read this page to understand what FundLine Capital is, how we make money, what the numbers on our site mean and what happens to your credit when you apply.",
    sections: [
      {
        id: "not-a-lender",
        title: "FundLine is not a lender",
        paragraphs: ["FundLine Capital is a commercial loan broker. We do not make loans, issue credit or set rates. Every offer is made by a third-party lender under its own agreement, and that lender is your creditor."],
      },
      {
        id: "compensation",
        title: "How we are compensated",
        paragraphs: ["Lenders pay FundLine a referral fee when a loan closes through our brokerage. Fees vary by lender and product. This compensation may affect which lenders choose to participate in the network but does not change the sort order of offers you see, which you control."],
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
