import type { FaqItem } from "@/types/sites/corgi-insure-a0f7893c/home";
import type {
  ApplyStep,
  CompanyCta,
  CompanyHeroContent,
  CompanyMeta,
  CtaBandContent,
  CustomerStory,
  IconCard,
  InfoCard,
  Leader,
  OpenRole,
  ProcessStep,
  RatingSummaryContent,
  ReviewEntry,
  SelectOption,
  TimelineItem,
  TrustItem,
  TrustQuote,
} from "@/types/sites/corgi-insure-a0f7893c/company";
import { LINKS, REVIEWS, TESTIMONIALS } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/data";

/**
 * FundLine Capital — company and account pages. Every name, address, figure, date and quote below is a
 * fictional placeholder written for this site.
 */

const APPLY: CompanyCta = { label: "Apply now", href: LINKS.apply };
const BOOK: CompanyCta = { label: "Apply now", href: LINKS.apply };

export const CONTACT_DETAILS = {
  supportEmail: "support@fundlinecapital.com",
  pressEmail: "press@fundlinecapital.com",
  partnersEmail: "partners@fundlinecapital.com",
  securityEmail: "security@fundlinecapital.com",
  careersEmail: "careers@fundlinecapital.com",
  phone: "1-800-555-0142",
  phoneHref: "tel:+18005550142",
  hours: ["Mon–Fri, 8am–7pm ET", "Sat, 9am–2pm ET"],
  address: ["FundLine Capital", "1 Liberty Plaza, Suite 2300", "New York, NY 10006"],
} as const;

/* ------------------------------------------------------------------ */
/* Shared                                                               */
/* ------------------------------------------------------------------ */

export const DEFAULT_CTA: CtaBandContent = {
  headingLine1: "One application.",
  headingLine2: "Offers from 75+ lenders.",
  sub: "Fifteen minutes to apply, no impact to your credit score, and a funding specialist on the phone whenever you want one.",
  primary: APPLY,
  secondary: BOOK,
};

/* ------------------------------------------------------------------ */
/* /about                                                               */
/* ------------------------------------------------------------------ */

export const ABOUT_META: CompanyMeta = {
  title: "About FundLine Capital | Built by Business Owners, for Business Owners",
  description:
    "FundLine Capital is a small business funding brokerage: one application, real offers from 75+ lenders, and a specialist who picks up the phone.",
};

export const ABOUT_HERO: CompanyHeroContent = {
  eyebrow: "About FundLine",
  headingLine1: "Built by business owners,",
  headingLine2: "for business owners.",
  sub: "FundLine Capital is a funding brokerage. One application, real offers from 75+ lenders, and a specialist who picks up the phone. We started it because borrowing for a small business should not take a month.",
  primary: APPLY,
  secondary: { label: "Meet the team", href: "#leadership" },
};

export const ABOUT_MISSION = {
  heading: "Why we exist",
  paragraphs: [
    "In 2011 our founders were running a two-truck delivery company and could not get a $40,000 loan from the bank they had used for six years. The paperwork took five weeks. The answer was no. A second lender said yes in three days; they had simply never heard of it. FundLine exists to close that gap.",
    "Today we work with 75+ banks, credit unions and online lenders. You fill out one application in about 15 minutes, we check it against the criteria of the lenders we work with, and you compare real offers side by side. Checking eligibility never touches your credit score.",
    "We are paid by the lender when a loan funds, never by application fees. That keeps us on the owner's side of the table. Our job is to find the offer you would choose if you had time to talk to every lender yourself.",
  ],
  pull: "Borrowing for a small business should take an afternoon, not a month.",
} as const;

export const ABOUT_STATS_HEADING = {
  line1: "The numbers behind",
  line2: "the promise.",
} as const;

export const LEADERSHIP_HEADER = {
  heading: "Leadership",
  sub: "A small team of former owners, lenders and engineers. Most of us have borrowed for a business; all of us have been told no.",
} as const;

const TEAM_PHOTOS = "/sites/corgi-insure-a0f7893c/shared/team";

export const LEADERS: Leader[] = [
  {
    name: "Maya Chen",
    role: "Co-founder & CEO",
    bio: "Ran a regional delivery company for nine years before starting FundLine. Still reads every owner review.",
    photo: `${TEAM_PHOTOS}/leader-01.jpg`,
  },
  {
    name: "Daniel Okoro",
    role: "Co-founder & COO",
    bio: "Fifteen years in commercial credit at two community banks. Wrote the first version of our lender fit checklist by hand.",
    photo: `${TEAM_PHOTOS}/leader-02.jpg`,
  },
  {
    name: "Renee Castillo",
    role: "Head of Lender Partnerships",
    bio: "Onboards and audits every lender we work with. Her rule: if she would not take the offer, it does not get listed.",
    photo: `${TEAM_PHOTOS}/leader-03.jpg`,
  },
  {
    name: "Jordan Blake",
    role: "Head of Funding Specialists",
    bio: "Leads the team that calls you back. Former owner of a three-location coffee roaster in Denver.",
    photo: `${TEAM_PHOTOS}/leader-04.jpg`,
  },
  {
    name: "Anika Sørensen",
    role: "VP of Engineering",
    bio: "Built the same-day decision pipeline. Previously led payments infrastructure at a mid-size fintech.",
    photo: `${TEAM_PHOTOS}/leader-05.jpg`,
  },
  {
    name: "Tom Adeyemi",
    role: "Head of Credit & Risk",
    bio: "Keeps offers honest. Reviews pricing across the network so a fast offer is never a bad one.",
    photo: `${TEAM_PHOTOS}/leader-06.jpg`,
  },
];

export const ABOUT_VALUES_HEADER = {
  heading: "How we work",
  sub: "Four rules we hire, build and lend by.",
} as const;

export const ABOUT_VALUES: IconCard[] = [
  { icon: "storefront", title: "Owner first", description: "We only get paid when you get funded. No application fees, no upsells, no surprise brokers in the middle." },
  { icon: "bolt", title: "Speed with substance", description: "Offers in hours, not weeks, but every one is real: rate, term, total cost of capital, spelled out." },
  { icon: "calculate", title: "Plain numbers", description: "APR, not factor rates dressed up. If a lender will not show the true cost, they are not in our network." },
  { icon: "handshake", title: "Earn every loan", description: "Specialists are paid on owner outcomes, not volume. A smaller loan that fits beats a bigger one that does not." },
];

export const ABOUT_CTA: CtaBandContent = {
  ...DEFAULT_CTA,
  headingLine1: "See what 75+ lenders",
  headingLine2: "would offer your business.",
};

/* ------------------------------------------------------------------ */
/* /careers                                                             */
/* ------------------------------------------------------------------ */

export const CAREERS_META: CompanyMeta = {
  title: "Careers at FundLine Capital | Help Business Owners Get Funded",
  description: "Join a small team building the fastest way for small businesses to compare real loan offers. Open roles in sales, engineering, credit and product.",
};

export const CAREERS_HERO: CompanyHeroContent = {
  eyebrow: "Careers",
  headingLine1: "Help business owners",
  headingLine2: "get funded.",
  sub: "We are 84 people across six offices and a lot of kitchen tables. Every week we help hundreds of business owners get a yes that used to take a month. Come build the next part.",
  primary: { label: "See open roles", href: "#open-roles" },
  secondary: { label: "Meet the team", href: "/about#leadership" },
};

export const CAREERS_VALUES_HEADER = {
  heading: "What it is like here",
  sub: "Small teams, real business owners on the phone, and a bias for shipping.",
} as const;

export const CAREERS_VALUES: IconCard[] = [
  { icon: "rocket_launch", title: "Ship weekly", description: "Product, credit and specialist teams release together every Thursday. Nothing waits for a quarter." },
  { icon: "call", title: "Talk to business owners", description: "Everyone, engineers included, listens to two funding calls a month. It is the fastest way to learn what matters." },
  { icon: "flag", title: "Own the outcome", description: "You will be measured on funded business owners and honest offers, not tickets closed or leads logged." },
  { icon: "self_improvement", title: "Stay humble", description: "We have been wrong about lenders, pricing and products. Say so early, fix it, write it down." },
];

export const OPEN_ROLES_HEADER = {
  heading: "Open roles",
  sub: "Six roles open today. Do not see a fit? Write to careers@fundlinecapital.com and tell us what you would build.",
} as const;

export const OPEN_ROLES: OpenRole[] = [
  { title: "Senior Funding Specialist", team: "Funding", location: "New York, NY", type: "Full-time", href: "/contact" },
  { title: "Software Engineer, Lender Integrations", team: "Engineering", location: "Remote (US)", type: "Full-time", href: "/contact" },
  { title: "Credit Analyst", team: "Credit & Risk", location: "Denver, CO", type: "Full-time", href: "/contact" },
  { title: "Product Designer", team: "Product", location: "Remote (US)", type: "Full-time", href: "/contact" },
  { title: "Partnerships Manager, Banks & Credit Unions", team: "Partnerships", location: "Austin, TX", type: "Full-time", href: "/contact" },
  { title: "Customer Support Lead", team: "Operations", location: "New York, NY", type: "Full-time", href: "/contact" },
];

export const BENEFITS_HEADER = {
  heading: "Benefits",
  sub: "The basics, done properly, so you can focus on the work.",
} as const;

export const BENEFITS: IconCard[] = [
  { icon: "favorite", title: "Medical, dental, vision", description: "Fully paid for employees, 75% for dependents, from day one." },
  { icon: "savings", title: "401(k) with 4% match", description: "Vests immediately. We want you saving, not waiting." },
  { icon: "beach_access", title: "Flexible time off", description: "Minimum three weeks a year, and we track that you take it." },
  { icon: "home_work", title: "Remote-friendly", description: "Work from an office or your kitchen. Two team weeks a year in New York." },
  { icon: "school", title: "$2,500 learning budget", description: "Courses, books, conferences. Annual and no approval chain." },
  { icon: "trending_up", title: "Equity for everyone", description: "Every full-time employee owns a piece of FundLine." },
];

export const CAREERS_CTA: CtaBandContent = {
  headingLine1: "Not hiring for your role yet?",
  headingLine2: "Tell us anyway.",
  sub: "We keep a short list of people we want to work with. Send a note and two things you are proud of shipping.",
  primary: { label: "Get in touch", href: "/contact" },
  secondary: { label: "About FundLine", href: "/about" },
};

/* ------------------------------------------------------------------ */
/* /contact                                                             */
/* ------------------------------------------------------------------ */

export const CONTACT_META: CompanyMeta = {
  title: "Contact FundLine Capital | Talk to a Funding Specialist",
  description: "Reach a real funding specialist by phone, email or the form below. Support hours Mon–Fri 8am–7pm ET.",
};

export const CONTACT_HERO: CompanyHeroContent = {
  eyebrow: "Contact",
  headingLine1: "Talk to a",
  headingLine2: "real person.",
  sub: "Questions about an offer, your application or whether you should borrow at all. A funding specialist answers within one business day, usually within the hour.",
};

export const CONTACT_FORM = {
  title: "Send us a note",
  sub: "Tell us a little about the business and what you need. We will reply by email or phone, whichever you prefer.",
  fields: {
    name: "Your name",
    business: "Business name",
    email: "Email",
    phone: "Phone",
    message: "How can we help?",
  },
  placeholders: {
    name: "Jordan Rivera",
    business: "Rivera Landscaping LLC",
    email: "jordan@riveralandscaping.com",
    phone: "(555) 010-2244",
    message: "We are looking at a $120K equipment loan for two new mowers and want to understand the total cost before we apply.",
  },
  submit: "Send message",
  done: {
    title: "Thanks, we have it.",
    body: "A funding specialist will reach out within one business day. If it is urgent, call 1-800-555-0142 and we will pick up.",
    action: { label: "Start an application", href: LINKS.apply },
  },
} as const;

export const SUPPORT_CARDS: InfoCard[] = [
  {
    icon: "mail",
    title: "Email",
    lines: ["support@fundlinecapital.com for business owners", "press@fundlinecapital.com for media"],
    link: { label: "Email support", href: "mailto:support@fundlinecapital.com" },
  },
  {
    icon: "call",
    title: "Phone",
    lines: ["1-800-555-0142", "Mon–Fri, 8am–7pm ET", "Sat, 9am–2pm ET"],
    link: { label: "Call now", href: "tel:+18005550142" },
  },
  {
    icon: "location_on",
    title: "Mailing address",
    lines: ["FundLine Capital", "1 Liberty Plaza, Suite 2300", "New York, NY 10006"],
    link: { label: "All locations", href: "/locations" },
  },
];

export const CONTACT_FAQ: FaqItem[] = [
  { question: "How fast will someone get back to me?", answerHtml: "Within one business day by email, and usually within the hour during support hours. Phone calls are answered live Mon–Fri, 8am–7pm ET." },
  { question: "Can I talk to someone before I apply?", answerHtml: "Yes. <a class=\"underline\" href=\"/book-a-call\">Book a call</a> and a funding specialist will walk through your options, what lenders look for and whether now is the right time to borrow. No application needed." },
  { question: "I already have an application in. Who do I contact?", answerHtml: "Reply to any email from your specialist or call the number above and give your business name. Your specialist has your full file and every offer in front of them." },
  { question: "Do you charge for a call or a consultation?", answerHtml: "Never. FundLine is paid by the lender when a loan funds. Advice, comparisons and calls are free whether or not you borrow." },
];

/* ------------------------------------------------------------------ */
/* /security                                                            */
/* ------------------------------------------------------------------ */

export const SECURITY_META: CompanyMeta = {
  title: "Security at FundLine Capital | How We Protect Your Data",
  description: "Encryption in transit and at rest, a SOC 2 program, least-privilege access and credit-safe applications. How FundLine Capital handles your business data.",
};

export const SECURITY_HERO: CompanyHeroContent = {
  eyebrow: "Security",
  headingLine1: "Your data, handled",
  headingLine2: "like money.",
  sub: "An application contains bank statements, tax returns and the owner's personal details. We treat all of it the way a bank treats a vault: encrypted, logged, and seen only by people who need it to fund you.",
  primary: { label: "Report a vulnerability", href: "mailto:security@fundlinecapital.com" },
  secondary: { label: "Privacy policy", href: "/privacy" },
};

export const SECURITY_CONTROLS_HEADER = {
  heading: "Six controls that matter",
  sub: "What we do, in plain terms, and what it means for the owner on the other side of the form.",
} as const;

export const SECURITY_CONTROLS: IconCard[] = [
  { icon: "lock", title: "Encryption everywhere", description: "TLS 1.2+ in transit and AES-256 at rest for every document, field and offer. Keys are rotated and never stored beside the data." },
  { icon: "verified_user", title: "SOC 2 program", description: "Annual SOC 2 Type II audit of our security, availability and confidentiality controls, performed by an independent firm. Report available under NDA." },
  { icon: "account_balance", title: "Bank-grade data handling", description: "Bank statements are read through a read-only connection you can revoke at any time. We never store your online banking credentials." },
  { icon: "admin_panel_settings", title: "Least-privilege access", description: "Specialists see only the applications assigned to them. Every view of a document is logged, and access is reviewed each quarter." },
  { icon: "credit_score", title: "Credit-safe applications", description: "Checking eligibility uses a soft inquiry that does not affect your score. A hard pull happens only when you accept an offer, and the lender tells you first." },
  { icon: "bug_report", title: "Responsible disclosure", description: "Found something? Email security@fundlinecapital.com. We acknowledge within two business days, fix quickly and credit researchers who report in good faith." },
];

export const SECURITY_FAQ: FaqItem[] = [
  { question: "Who can see my bank statements?", answerHtml: "The funding specialist assigned to your application and, once you choose to share it, the lenders whose offers you are considering. Nobody else, and every view is logged." },
  { question: "Do lenders see my application before I ask?", answerHtml: "No. Matching runs against lender criteria inside FundLine. A lender receives your file only when you ask for an offer from them." },
  { question: "Does applying affect my credit score?", answerHtml: "Checking eligibility is a soft inquiry and does not affect your score. A hard inquiry happens only when you accept a specific offer, and the lender discloses it before you sign." },
  { question: "How long do you keep my documents?", answerHtml: "Active applications keep documents for 13 months so you can reapply without re-uploading. You can ask us to delete them sooner from your account or by emailing support@fundlinecapital.com." },
  { question: "Can I disconnect my bank account?", answerHtml: "Yes, at any time from your account settings. The connection is read-only from the start, and revoking it stops all future access immediately." },
  { question: "Where can I get your SOC 2 report?", answerHtml: "Email <a class=\"underline\" href=\"mailto:security@fundlinecapital.com\">security@fundlinecapital.com</a>. We share the current Type II report with customers and partners under a short NDA." },
];

export const SECURITY_CTA: CtaBandContent = {
  ...DEFAULT_CTA,
  headingLine1: "Apply with confidence.",
  headingLine2: "No impact to your credit score.",
};

/* ------------------------------------------------------------------ */
/* /locations                                                           */
/* ------------------------------------------------------------------ */

export const LOCATIONS_META: CompanyMeta = {
  title: "FundLine Capital Locations | Six Offices, One Application",
  description: "FundLine Capital offices in New York, Denver, Austin, Atlanta, Chicago and Phoenix. Hours, addresses and how to reach a specialist near you.",
};

export const LOCATIONS_HERO: CompanyHeroContent = {
  eyebrow: "Locations",
  headingLine1: "Six offices.",
  headingLine2: "One application.",
  sub: "Every application is handled online, but specialists sit in real offices across the country. Walk in, call, or book a video call; the answer is the same either way.",
  primary: BOOK,
  secondary: { label: "Contact us", href: "/contact" },
};

export const OFFICES: InfoCard[] = [
  { icon: "apartment", title: "New York", badge: "HQ", lines: ["1 Liberty Plaza, Suite 2300", "New York, NY 10006", "Mon–Fri, 8am–7pm ET"] },
  { icon: "apartment", title: "Denver", lines: ["1550 Wewatta Street, Floor 4", "Denver, CO 80202", "Mon–Fri, 8am–5pm MT"] },
  { icon: "apartment", title: "Austin", lines: ["600 Congress Avenue, Suite 1400", "Austin, TX 78701", "Mon–Fri, 8am–5pm CT"] },
  { icon: "apartment", title: "Atlanta", lines: ["1180 Peachtree Street NE, Suite 700", "Atlanta, GA 30309", "Mon–Fri, 8am–5pm ET"] },
  { icon: "apartment", title: "Chicago", lines: ["222 West Merchandise Mart Plaza, Suite 1212", "Chicago, IL 60654", "Mon–Fri, 8am–5pm CT"] },
  { icon: "apartment", title: "Phoenix", lines: ["2 North Central Avenue, Suite 1800", "Phoenix, AZ 85004", "Mon–Fri, 7am–4pm MST"] },
];

export const MAP_PLACEHOLDER = {
  title: "Specialists in every time zone",
  sub: "Hours overlap so someone is answering the phone from 8am ET to 6pm PT on weekdays.",
  pins: [
    { city: "New York", x: 86, y: 34 },
    { city: "Denver", x: 34, y: 45 },
    { city: "Phoenix", x: 22, y: 62 },
    { city: "Austin", x: 46, y: 74 },
    { city: "Chicago", x: 60, y: 36 },
    { city: "Atlanta", x: 72, y: 62 },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* /how-it-works                                                        */
/* ------------------------------------------------------------------ */

export const HOW_META: CompanyMeta = {
  title: "How FundLine Capital Works | Apply, Match, Compare, Fund",
  description: "One 15-minute application, matched against 75+ lenders, real offers side by side, and funding in as little as 24 hours. Here is exactly how it works.",
};

export const HOW_HERO: CompanyHeroContent = {
  eyebrow: "How it works",
  headingLine1: "From application to",
  headingLine2: "funded in four steps.",
  sub: "No branch visits, no re-typing the same numbers for six lenders. One application does the work, and a specialist is one call away at every step.",
  primary: APPLY,
  secondary: BOOK,
};

export const HOW_STEPS: ProcessStep[] = [
  {
    number: "01",
    icon: "edit_document",
    title: "Apply",
    description: "Tell us about the business, connect or upload bank statements, and say how much you need. About 15 minutes, and it never touches your credit score.",
    facts: ["15 minutes, start to finish", "Soft inquiry only", "Save and return any time"],
  },
  {
    number: "02",
    icon: "hub",
    title: "Match",
    description: "We check your application against the criteria of the lenders that fit your profile: industry, time in business, revenue, credit band and use of funds.",
    facts: ["75+ banks, credit unions and online lenders", "Most matches in under an hour", "Only lenders likely to say yes"],
  },
  {
    number: "03",
    icon: "compare_arrows",
    title: "Compare",
    description: "Real offers arrive side by side with the same numbers on every one: APR, term, payment and total cost of capital. A specialist walks you through them.",
    facts: ["True APR on every offer", "No obligation to accept", "Specialist call whenever you want"],
  },
  {
    number: "04",
    icon: "payments",
    title: "Fund",
    description: "Accept the offer you want, e-sign, and the lender sends the money. Lines of credit and short-term loans often fund the next business day.",
    facts: ["Funding in as little as 24 hours", "E-signature, no printing", "Payoff letters on request"],
  },
];

export const HOW_TIMELINE_HEADER = {
  heading: "A typical week",
  sub: "Most business owners go from first click to money in the bank inside three business days.",
} as const;

export const HOW_TIMELINE: TimelineItem[] = [
  { when: "Day 0, 9:00am", title: "Application submitted", description: "Fifteen minutes, one form, bank statements connected." },
  { when: "Day 0, 10:30am", title: "Offers start arriving", description: "First matches land within the hour; most within the day." },
  { when: "Day 0, 2:00pm", title: "Specialist call", description: "Twenty minutes to compare, size the loan and ask anything." },
  { when: "Day 1", title: "Offer accepted and signed", description: "E-sign from your phone. The lender runs its final check." },
  { when: "Day 1–3", title: "Funded", description: "Money in the business account. Lines of credit are often live the next morning." },
];

export const HOW_FAQ: FaqItem[] = [
  { question: "What do I need to apply?", answerHtml: "Basic business details, the last three to six months of bank statements (connect read-only or upload PDFs), and the owner's contact information. Tax returns help for loans over $250K but are not required to start." },
  { question: "How many offers will I get?", answerHtml: "It depends on the business. Business owners with 12+ months in business and $10K+ monthly revenue usually see three to six offers. Newer businesses see fewer, but we will tell you what would change that." },
  { question: "Is there a cost to apply or compare?", answerHtml: "No. FundLine is free for business owners. We are paid by the lender when a loan funds, and that fee never changes the rate you are offered." },
  { question: "Do I have to accept an offer?", answerHtml: "Never. Many business owners apply just to see what is available. Offers stay open for 7 to 30 days depending on the lender." },
  { question: "What if I do not qualify yet?", answerHtml: "A specialist will tell you exactly why and what to work on: time in business, revenue, credit or paperwork. Reapply whenever you are ready; your documents stay on file for 13 months." },
  { question: "How fast is fast?", answerHtml: "Lines of credit and short-term loans have funded within 24 hours of an accepted offer. SBA loans and commercial real estate take longer, typically two to eight weeks, and we tell you that up front." },
];

export const HOW_CTA: CtaBandContent = {
  ...DEFAULT_CTA,
  headingLine1: "Start step one.",
  headingLine2: "It takes about 15 minutes.",
};

/* ------------------------------------------------------------------ */
/* /reviews                                                             */
/* ------------------------------------------------------------------ */

export const REVIEWS_META: CompanyMeta = {
  title: "FundLine Capital Reviews | Rated 4.8 by Business Owners",
  description: "Read what business owners say about applying, comparing offers and getting funded through FundLine Capital. 4.8 out of 5 across 2,140 verified reviews.",
};

export const REVIEWS_HERO: CompanyHeroContent = {
  eyebrow: "Reviews",
  headingLine1: "Rated 4.8",
  headingLine2: "by business owners.",
  sub: "Every review below is from a business owner who applied, compared offers and told us how it went. We publish the ones that are hard to read too.",
  primary: APPLY,
};

export const RATING_SUMMARY: RatingSummaryContent = {
  average: "4.8",
  count: "2,140 reviews",
  caption: "Collected after funding, published unedited.",
  bars: [
    { stars: 5, percent: 84 },
    { stars: 4, percent: 11 },
    { stars: 3, percent: 3 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 1 },
  ],
};

const REVIEW_EXTRAS: Pick<ReviewEntry, "rating" | "product" | "date">[] = [
  { rating: 5, product: "Term loan", date: "Aug 2026" },
  { rating: 5, product: "Line of credit", date: "Aug 2026" },
  { rating: 5, product: "Equipment financing", date: "Jul 2026" },
  { rating: 5, product: "Term loan", date: "Jul 2026" },
  { rating: 5, product: "Line of credit", date: "Jun 2026" },
  { rating: 4, product: "Working capital loan", date: "Jun 2026" },
  { rating: 5, product: "Equipment financing", date: "May 2026" },
  { rating: 5, product: "Term loan", date: "May 2026" },
];

const REVIEW_FALLBACK: Pick<ReviewEntry, "rating" | "product" | "date"> = { rating: 5, product: "Term loan", date: "2026" };

/** The eight home-page reviews, plus four more, with rating, product and date. */
export const REVIEW_ENTRIES: ReviewEntry[] = [
  ...REVIEWS.map((review, i) => ({ ...review, ...(REVIEW_EXTRAS[i] ?? REVIEW_FALLBACK) })),
  { name: "Grace O", photo: 1, city: "Portland, OR", rating: 4, product: "SBA loan", date: "Apr 2026", quote: "The SBA route took six weeks, which they told me on day one. What I did not expect was a specialist chasing the bank for me every step of the way." },
  { name: "Miguel S", photo: 2, city: "El Paso, TX", rating: 5, product: "Invoice financing", date: "Apr 2026", quote: "We had $180K in unpaid invoices and payroll due Friday. Applied Tuesday, funded Thursday. That is the whole review." },
  { name: "Hannah P", photo: 7, city: "Des Moines, IA", rating: 5, product: "Line of credit", date: "Mar 2026", quote: "Two banks turned down our farm supply store. FundLine matched us with a credit union that understood seasonal cash flow. Draws are instant." },
  { name: "Victor N", photo: 8, city: "Raleigh, NC", rating: 3, product: "Merchant cash advance", date: "Mar 2026", quote: "Fast money, and the specialist was honest that it was the expensive option. I took it anyway because I needed it, but read the total cost line twice." },
];

export const REVIEWS_GRID_HEADER = {
  heading: "What business owners say",
  sub: "Twelve recent reviews across term loans, lines of credit, equipment financing and more.",
} as const;

export const REVIEWS_CTA: CtaBandContent = {
  ...DEFAULT_CTA,
  headingLine1: "Write the next one.",
  headingLine2: "Apply in 15 minutes.",
};

/* ------------------------------------------------------------------ */
/* /customer-stories                                                    */
/* ------------------------------------------------------------------ */

export const STORIES_META: CompanyMeta = {
  title: "Customer Stories | FundLine Capital",
  description: "Eleven business owners, eleven loans, and what the money did: payroll made, trucks bought, locations opened. Real funding stories from FundLine Capital.",
};

export const STORIES_HERO: CompanyHeroContent = {
  eyebrow: "Customer stories",
  headingLine1: "Real business owners.",
  headingLine2: "Real funding.",
  sub: "Eleven businesses, what they borrowed, and what it did. Amounts are rounded and names are used with permission.",
  primary: APPLY,
  secondary: BOOK,
};

const STORY_EXTRAS: Pick<CustomerStory, "industry" | "product" | "amount" | "outcome">[] = [
  { industry: "Manufacturing", product: "Line of credit", amount: "$75,000", outcome: "Payroll covered through a slow quarter; balance paid down in five months." },
  { industry: "Healthcare", product: "Term loan", amount: "$240,000", outcome: "Second clinic opened 11 weeks after funding; now at 14 staff." },
  { industry: "Manufacturing", product: "Equipment financing", amount: "$310,000", outcome: "Two CNC machines financed over 60 months; cash reserves untouched." },
  { industry: "Food & beverage", product: "Working capital loan", amount: "$150,000", outcome: "First seven-figure wholesale order fulfilled on time." },
  { industry: "Fitness", product: "Term loan", amount: "$60,000", outcome: "Studio refit finished in six weeks; membership up 32%." },
  { industry: "Trucking", product: "Equipment financing", amount: "$420,000", outcome: "Two new rigs on the road within a week of funding." },
  { industry: "Restaurants", product: "Term loan", amount: "$95,000", outcome: "Patio expansion open before summer; weekend covers up 40%." },
  { industry: "Food & beverage", product: "Line of credit", amount: "$50,000", outcome: "Second product line launched; draws used only for ingredients." },
  { industry: "Retail", product: "Invoice financing", amount: "$200,000", outcome: "Retail contract fulfilled; net-60 terms no longer a bottleneck." },
  { industry: "Healthcare", product: "Term loan", amount: "$180,000", outcome: "Four hires made; loan sized to the practice's actual cash flow." },
  { industry: "Construction", product: "SBA loan", amount: "$850,000", outcome: "Bought the yard the company had rented for eight years." },
];

const STORY_FALLBACK: Pick<CustomerStory, "industry" | "product" | "amount" | "outcome"> = {
  industry: "Small business",
  product: "Term loan",
  amount: "$100,000",
  outcome: "Funded through the FundLine network.",
};

/** The eleven home-page testimonials expanded into full stories. */
export const CUSTOMER_STORIES: CustomerStory[] = TESTIMONIALS.map((t, i) => ({
  photo: t.photo,
  author: t.author,
  role: t.role,
  company: t.company,
  quote: t.quote,
  ...(STORY_EXTRAS[i] ?? STORY_FALLBACK),
}));

export const STORIES_GRID_HEADER = {
  heading: "Eleven loans, eleven outcomes",
  sub: "Filter by what you are borrowing for, or just read them all.",
} as const;

export const STORIES_CTA: CtaBandContent = {
  ...DEFAULT_CTA,
  headingLine1: "Your story starts",
  headingLine2: "with one application.",
};

/* ------------------------------------------------------------------ */
/* /apply                                                               */
/* ------------------------------------------------------------------ */

export const APPLY_META: CompanyMeta = {
  title: "Apply for Business Funding | FundLine Capital",
  description: "One 15-minute application, offers from 75+ lenders, no impact to your credit score. Start your FundLine Capital application.",
};

export const APPLY_INTRO = {
  eyebrow: "Apply",
  headingLine1: "Fill out the form",
  headingLine2: "below to get started.",
  sub: "It takes about 15 minutes. Nothing here affects your credit score until you accept an offer.",
  bullets: [
    { icon: "timer", text: "About 15 minutes" },
    { icon: "credit_score", text: "Soft inquiry only" },
    { icon: "lock", text: "Encrypted end to end" },
    { icon: "support_agent", text: "A specialist can finish it with you" },
  ],
  helpText: "Questions first?",
  helpLink: { label: "Contact us", href: "/contact" },
} as const;

export const APPLY_TRUST: TrustItem[] = [
  { icon: "lock", text: "Encrypted end to end" },
  { icon: "verified", text: "No impact to your credit score" },
  { icon: "handshake", text: "75+ lenders in our network" },
];

export const APPLY_TRUST_QUOTE: TrustQuote = {
  quote: "Derek at FundLine really helped me out. It felt personal, not just like another deal.",
  name: "Samuel K",
  photo: 1,
  role: "Owner, funded through FundLine",
};

export const APPLY_STEPS: ApplyStep[] = [
  { id: "business", label: "Business", title: "Business basics", sub: "Who you are and what the business does." },
  { id: "financials", label: "Financials", title: "Financials", sub: "Rough numbers are fine; lenders confirm with bank statements later." },
  { id: "contact", label: "Contact", title: "Contact", sub: "Where to send offers and who to call." },
];

export const APPLY_FIELDS = {
  business: {
    businessName: { label: "Legal business name", placeholder: "Rivera Landscaping LLC" },
    industry: { label: "Industry", placeholder: "Select an industry" },
    timeInBusiness: { label: "Time in business", placeholder: "Select" },
    entityType: { label: "Entity type", placeholder: "Select" },
    state: { label: "State", placeholder: "UT" },
  },
  financials: {
    annualRevenue: { label: "Revenue in the last 12 months", placeholder: "$450,000" },
    monthlyRevenue: { label: "Average monthly revenue", placeholder: "$37,500" },
    amount: { label: "How much do you need?", placeholder: "$120,000" },
    useOfFunds: { label: "Use of funds", placeholder: "Select" },
    creditBand: { label: "Owner's credit score (estimate)", placeholder: "Select" },
  },
  contact: {
    firstName: { label: "First name", placeholder: "Jordan" },
    lastName: { label: "Last name", placeholder: "Rivera" },
    email: { label: "Email", placeholder: "jordan@riveralandscaping.com" },
    phone: { label: "Mobile phone", placeholder: "(555) 010-2244" },
    consent: "I agree to FundLine Capital's Terms of Service and Privacy Policy, and to be contacted by a funding specialist about my application.",
  },
  back: "Back",
  next: "Continue",
  submit: "Submit application",
  done: {
    title: "Application received.",
    body: "We are matching it against 75+ lenders now. Most business owners see their first offers within the hour, and a funding specialist will reach out by phone or email to walk you through them.",
    reference: "Reference",
    action: { label: "Back to home", href: "/" },
    secondary: BOOK,
  },
} as const;

export const INDUSTRY_OPTIONS: SelectOption[] = [
  { value: "construction", label: "Construction & trades" },
  { value: "healthcare", label: "Healthcare & dental" },
  { value: "retail", label: "Retail" },
  { value: "restaurants", label: "Restaurants & food service" },
  { value: "trucking", label: "Trucking & logistics" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "professional", label: "Professional services" },
  { value: "saas", label: "Software & SaaS" },
  { value: "other", label: "Other" },
];

export const TIME_IN_BUSINESS_OPTIONS: SelectOption[] = [
  { value: "lt6", label: "Less than 6 months" },
  { value: "6-12", label: "6–12 months" },
  { value: "1-2", label: "1–2 years" },
  { value: "2-5", label: "2–5 years" },
  { value: "5plus", label: "5+ years" },
];

export const ENTITY_OPTIONS: SelectOption[] = [
  { value: "llc", label: "LLC" },
  { value: "scorp", label: "S corporation" },
  { value: "ccorp", label: "C corporation" },
  { value: "sole", label: "Sole proprietorship" },
  { value: "partnership", label: "Partnership" },
  { value: "nonprofit", label: "Nonprofit" },
];

export const USE_OF_FUNDS_OPTIONS: SelectOption[] = [
  { value: "working-capital", label: "Working capital" },
  { value: "equipment", label: "Equipment" },
  { value: "expansion", label: "Expansion or new location" },
  { value: "inventory", label: "Inventory" },
  { value: "payroll", label: "Payroll or hiring" },
  { value: "refinance", label: "Refinance existing debt" },
  { value: "real-estate", label: "Commercial real estate" },
  { value: "other", label: "Other" },
];

export const CREDIT_BAND_OPTIONS: SelectOption[] = [
  { value: "750plus", label: "750+" },
  { value: "700-749", label: "700–749" },
  { value: "650-699", label: "650–699" },
  { value: "600-649", label: "600–649" },
  { value: "lt600", label: "Below 600" },
  { value: "unsure", label: "Not sure" },
];
