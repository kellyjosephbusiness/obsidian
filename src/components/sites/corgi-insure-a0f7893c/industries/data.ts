import { AI_ASSETS } from "@/components/sites/corgi-insure-a0f7893c/ai-97ffa848/data";
import { COVERAGE_PACKAGES, LINKS } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/data";
import type { CoveragePackage } from "@/types/sites/corgi-insure-a0f7893c/home";
import type { BreadcrumbItem, IndustryChip } from "@/types/sites/corgi-insure-a0f7893c/industry-ai";
import type { IndustryDefinition, IndustrySlug } from "./types";

/**
 * FundLine Capital — content for the eleven `/industry/[industry]` pages.
 * Layout mirrors `/industry/ai`; every figure, name and scenario is an illustrative placeholder.
 */

export const INDUSTRY_SLUGS: IndustrySlug[] = [
  "construction",
  "healthcare",
  "retail",
  "restaurants",
  "trucking",
  "ecommerce",
  "manufacturing",
  "professional-services",
  "fintech",
  "marketplaces",
  "saas",
];

export const INDUSTRIES_CHIPS_HEADING = "Explore Funding by Industry";

const PRODUCTS_LINK = LINKS.loanTypes;
const GUIDE_LINK = "/guides/getting-ready-to-borrow";

const CONSTRUCTION: IndustryDefinition = {
  slug: "construction",
  name: "Construction",
  plural: "construction companies",
  icon: "construction",
  meta: {
    title: "Funding for Construction Companies | FundLine Capital",
    description:
      "Working capital, equipment financing and lines of credit for contractors and builders. One application, offers from 75+ lenders that understand progress billing and retainage.",
  },
  hero: {
    headingLine1: "Funding for Construction,",
    headingLine2: "Paced to How Jobs Pay",
    sub: "Capital for materials, crews and equipment on projects that pay in draws, not on delivery. One application, offers from lenders who read a schedule of values as easily as a bank statement.",
  },
  why: {
    headingLine1: "Why Contractors Need",
    headingLine2: "Capital Built for Draws, Retainage, and Big Bids",
    items: [
      {
        title: "Materials before the first draw",
        body: "Lumber, steel and concrete get ordered weeks before the first progress payment lands. A line of credit covers the gap without slowing the pour.",
      },
      {
        title: "Retainage tied up for months",
        body: "Owners hold back 5 to 10 percent of every invoice until closeout. Financing bridges the held cash so the next job can start on time.",
      },
      {
        title: "Equipment that wins bigger bids",
        body: "An excavator, a lift or a second truck lets you bid work you used to sub out. Equipment loans spread the cost across the years it earns.",
      },
    ],
  },
  momentsHeading: {
    line1: "Common Funding Moments for Contractors:",
    line2: "Mobilization, Change Orders, and Slow Owners",
  },
  moments: [
    {
      id: "mobilization",
      title: "The mobilization week",
      body: "A $900K commercial build breaks ground and payroll, permits, bonding and the first material delivery all land before a single draw is paid.",
      icon: "engineering",
    },
    {
      id: "change-order",
      title: "The change order pile-up",
      body: "Six approved change orders add $140K of scope, and the owner will not release payment on any of them until the next monthly pay application.",
      icon: "receipt_long",
    },
    {
      id: "equipment-upgrade",
      title: "The equipment upgrade",
      body: "A rented skid steer costs more per year than a loan payment would, and buying one lets the crew stop waiting on the rental yard's schedule.",
      icon: "precision_manufacturing",
    },
    {
      id: "slow-pay-owner",
      title: "The slow-pay owner",
      body: "A general contractor sits on a $210K invoice for 75 days while your suppliers stay on net-30 and your crew still expects Friday paychecks.",
      icon: "hourglass_top",
    },
  ],
  productsSub: "From mobilization costs to the machine that lands the next bid, these products keep contractors building between pay applications.",
  scenarios: {
    headingLine1: "Construction Funding Scenarios",
    headingLine2: "Bridged Draws, Owned Equipment, and Bigger Bonded Work",
    items: [
      {
        title: "The bridged draw",
        body: "A framing contractor draws $180K from a revolving line to cover lumber and payroll on a 40-unit project, then repays it as each monthly draw clears.",
      },
      {
        title: "The owned excavator",
        body: "Equipment financing spreads a $265K excavator over 60 months, replacing $6,400 a month in rentals with a payment that builds equity.",
      },
      {
        title: "The bonded jump",
        body: "A 10-year SBA 7(a) loan adds $500K of working capital so a site contractor can qualify for bonding on public work twice its previous size.",
      },
    ],
  },
  faq: [
    {
      question: "What financing do construction companies usually qualify for?",
      answerHtml: `Most contractors start with a <a class="underline" href="${PRODUCTS_LINK}#line-of-credit">business line of credit</a> for materials and payroll, plus <a class="underline" href="${PRODUCTS_LINK}#equipment-financing">equipment financing</a> for machines and trucks. Established firms add term loans and SBA 7(a) loans for bonding capacity and growth. FundLine matches your profile against 75+ lenders from a single application.`,
    },
    {
      question: "Can we finance against unpaid pay applications or retainage?",
      answerHtml:
        "Yes. Invoice financing advances most of the value of approved pay applications, and several lenders in our network understand retainage schedules. You get the cash now and the lender is repaid when the owner or general contractor pays.",
    },
    {
      question: "Does lumpy, project-based revenue hurt our chances?",
      answerHtml:
        "Not on its own. Lenders that work with contractors expect revenue to follow the project calendar. They look at your backlog, signed contracts, bank deposits over the last 6 to 12 months, and how you have handled prior jobs.",
    },
    {
      question: "How fast can a contractor get funded?",
      answerHtml:
        "The FundLine application takes about 15 minutes. Lines of credit and invoice financing often return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept. Equipment and SBA loans take longer because of documentation and appraisals.",
    },
    {
      question: "Can equipment financing cover used machines?",
      answerHtml:
        "Usually. Most equipment lenders finance used excavators, loaders, lifts and trucks, with terms that depend on the age and hours of the machine. The equipment itself secures the loan, so other business assets stay free.",
    },
    {
      question: "What documents should we have ready?",
      answerHtml: `Typically three to six months of business bank statements, basic company details, and for larger amounts a recent P&amp;L, a backlog or work-in-progress schedule, and details of any existing equipment loans. See our <a class="underline" href="${GUIDE_LINK}">getting ready to borrow</a> guide for a checklist.`,
    },
  ],
};

const HEALTHCARE: IndustryDefinition = {
  slug: "healthcare",
  name: "Healthcare",
  plural: "healthcare practices",
  icon: "medical_services",
  meta: {
    title: "Funding for Healthcare Practices | FundLine Capital",
    description:
      "Practice loans, equipment financing and working capital for clinics, dental offices and health providers. One application, offers from 75+ lenders that understand reimbursement timing.",
  },
  hero: {
    headingLine1: "Funding for Healthcare Practices,",
    headingLine2: "Timed to Reimbursement",
    sub: "Capital for new equipment, second locations and payroll in a business where the work is done today and the payer settles in 45 days. One application, offers from lenders who understand how practices get paid.",
  },
  why: {
    headingLine1: "Why Practices Need",
    headingLine2: "Capital Built for Reimbursement Cycles, Equipment, and Growth",
    items: [
      {
        title: "Care delivered, payment pending",
        body: "Insurers and government payers settle claims 30 to 60 days after the visit. A line of credit keeps staff paid while receivables catch up.",
      },
      {
        title: "Equipment that expands services",
        body: "A digital imaging suite or a new chair lets a practice keep procedures in-house. Equipment loans match the payment to the years it earns.",
      },
      {
        title: "Second locations and buy-ins",
        body: "Opening a new office or buying into a partnership takes six-figure capital. Term and SBA loans fund it without draining reserves.",
      },
    ],
  },
  momentsHeading: {
    line1: "Common Funding Moments for Practices:",
    line2: "Payer Delays, New Chairs, and Partner Buy-Ins",
  },
  moments: [
    {
      id: "reimbursement-lag",
      title: "The reimbursement lag",
      body: "A payer changes its claims system and $95K of approved reimbursements slide 30 days, while rent and payroll stay exactly where they were.",
      icon: "receipt_long",
    },
    {
      id: "new-equipment",
      title: "The new equipment",
      body: "A refurbished CBCT scanner costs $120K and would bring imaging revenue in-house, but the vendor wants a deposit this month.",
      icon: "biotech",
    },
    {
      id: "partner-buy-in",
      title: "The partner buy-in",
      body: "A retiring partner offers an associate their share of the practice for $400K, with 90 days to arrange the financing.",
      icon: "handshake",
    },
    {
      id: "second-location",
      title: "The second location",
      body: "A lease is signed on a second clinic across town and the build-out, furniture and first three months of staffing land before the first patient is seen.",
      icon: "add_business",
    },
  ],
  productsSub: "From reimbursement gaps to a second clinic, these products help practices fund equipment, people, and growth.",
  scenarios: {
    headingLine1: "Healthcare Funding Scenarios",
    headingLine2: "Smoothed Receivables, Owned Equipment, and Practice Expansion",
    items: [
      {
        title: "The smoothed receivable",
        body: "A physical therapy group draws $60K from a line of credit during a slow reimbursement month and repays it three weeks later when the claims settle.",
      },
      {
        title: "The owned scanner",
        body: "Equipment financing covers a $120K imaging unit over 72 months, and the added in-house procedures pay the loan twice over.",
      },
      {
        title: "The expansion loan",
        body: "A 10-year SBA 7(a) loan funds a $650K second clinic, including the build-out and a working-capital cushion for the first year.",
      },
    ],
  },
  faq: [
    {
      question: "What financing do healthcare practices usually qualify for?",
      answerHtml: `Practices with steady patient volume tend to qualify for a <a class="underline" href="${PRODUCTS_LINK}#line-of-credit">business line of credit</a>, <a class="underline" href="${PRODUCTS_LINK}#equipment-financing">equipment financing</a>, and term loans. Practices with strong history are often strong SBA 7(a) candidates for buy-ins and second locations. FundLine matches your profile against 75+ lenders from a single application.`,
    },
    {
      question: "Can we borrow against outstanding insurance receivables?",
      answerHtml:
        "Yes. Several lenders in our network advance funds against approved claims and other receivables, which turns a 45-day wait into cash this week. Terms depend on your payer mix and historical collection rate.",
    },
    {
      question: "Does a new practice with limited history qualify?",
      answerHtml:
        "Often, yes. Lenders weigh the owner's credentials, personal credit, and projected patient volume for newer practices, and startup-focused products are available for offices under two years old. Options widen after 12 months of deposits.",
    },
    {
      question: "How fast can a practice get funded?",
      answerHtml:
        "The FundLine application takes about 15 minutes. Lines of credit typically return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept. Equipment and SBA loans take longer because of documentation.",
    },
    {
      question: "Can we finance software and technology, not just equipment?",
      answerHtml:
        "Yes. Practice-management software, electronic records systems and telehealth setups are usually funded from a line of credit or a term loan, since they are not physical assets. Physical equipment such as chairs, imaging and lab devices qualifies for equipment financing.",
    },
    {
      question: "What documents should we have ready?",
      answerHtml: `Typically three to six months of business bank statements, basic practice details and, for larger amounts, a recent P&amp;L, a production or collections report, and your professional license details. See our <a class="underline" href="${GUIDE_LINK}">getting ready to borrow</a> guide for a checklist.`,
    },
  ],
};

const RETAIL: IndustryDefinition = {
  slug: "retail",
  name: "Retail",
  plural: "retail businesses",
  icon: "storefront",
  meta: {
    title: "Funding for Retail Businesses | FundLine Capital",
    description:
      "Inventory financing, lines of credit and term loans for shops and retail chains. One application, offers from 75+ lenders that understand seasonal buying and slow months.",
  },
  hero: {
    headingLine1: "Funding for Retail,",
    headingLine2: "Stocked Ahead of the Season",
    sub: "Capital for inventory buys, store refreshes and the slow months between them. One application, offers from lenders who know that the best quarter is paid for in the quietest one.",
  },
  why: {
    headingLine1: "Why Retailers Need",
    headingLine2: "Capital Built for Inventory, Seasons, and Store Growth",
    items: [
      {
        title: "Inventory bought months early",
        body: "Holiday stock is ordered in July and paid for in September. A line of credit funds the buy so the shelves are full when customers arrive.",
      },
      {
        title: "Slow months with fixed costs",
        body: "Rent, staff and utilities do not drop in February. Working capital keeps the doors open and the team intact until sales come back.",
      },
      {
        title: "Refreshes and new doors",
        body: "A remodel, a new point-of-sale system or a second location lifts sales per square foot. Term loans spread the cost over the years it pays off.",
      },
    ],
  },
  momentsHeading: {
    line1: "Common Funding Moments for Retailers:",
    line2: "Seasonal Buys, Store Refreshes, and Supplier Deals",
  },
  moments: [
    {
      id: "holiday-buy",
      title: "The holiday buy",
      body: "The fall order is $160K, suppliers want payment before shipping, and the sales that cover it will not arrive until Black Friday.",
      icon: "inventory_2",
    },
    {
      id: "store-refresh",
      title: "The store refresh",
      body: "New fixtures, lighting and a modern checkout would lift conversion, but the $75K remodel has to happen during the slowest month.",
      icon: "storefront",
    },
    {
      id: "supplier-deal",
      title: "The supplier deal",
      body: "A vendor offers 18 percent off a full-container order if it is paid within ten days, which is worth more than the interest on a short loan.",
      icon: "local_offer",
    },
    {
      id: "pos-upgrade",
      title: "The systems upgrade",
      body: "A new point-of-sale and inventory system replaces the spreadsheet, but hardware, licenses and training land in the same month.",
      icon: "point_of_sale",
    },
  ],
  productsSub: "From the seasonal buy to the second storefront, these products help retailers fund inventory, upgrades, and growth.",
  scenarios: {
    headingLine1: "Retail Funding Scenarios",
    headingLine2: "Funded Seasons, Faster Refreshes, and Smarter Buying",
    items: [
      {
        title: "The funded season",
        body: "A gift shop draws $110K from a line of credit in September to stock for the holidays and repays it in full by the second week of January.",
      },
      {
        title: "The remodel loan",
        body: "A 36-month term loan pays for a $75K refresh of a flagship store, and sales per square foot rise 22 percent in the following year.",
      },
      {
        title: "The early-pay discount",
        body: "A short-term loan lets a boutique pay a supplier in ten days for an 18 percent discount, saving more than three times the cost of the financing.",
      },
    ],
  },
  faq: [
    {
      question: "What financing do retail businesses usually qualify for?",
      answerHtml: `Most retailers start with a <a class="underline" href="${PRODUCTS_LINK}#line-of-credit">business line of credit</a> for inventory and a business credit card for everyday spend. Established stores add <a class="underline" href="${PRODUCTS_LINK}#term-loans">term loans</a> for remodels and new locations. FundLine matches your profile against 75+ lenders from a single application.`,
    },
    {
      question: "Can we get funding that follows our sales seasonality?",
      answerHtml:
        "Yes. Revolving lines of credit let you draw before the season and repay after it, so you only pay interest on the weeks you use the money. Some lenders also offer repayment schedules that flex with card sales volume.",
    },
    {
      question: "Do online sales count toward our revenue?",
      answerHtml:
        "They do. Lenders look at total deposits across your bank accounts, card processors and online platforms. A store that sells both in person and online can often qualify on the combined figure.",
    },
    {
      question: "How fast can a retailer get funded?",
      answerHtml:
        "The FundLine application takes about 15 minutes. Lines of credit and short-term loans often return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept.",
    },
    {
      question: "Does applying affect our credit score?",
      answerHtml:
        "Submitting a FundLine application does not impact your personal or business credit score. Accepting a specific offer may involve a hard inquiry, which the lender discloses before you proceed.",
    },
    {
      question: "What documents should we have ready?",
      answerHtml: `Typically three to six months of business bank statements, basic company details and, for larger amounts, a recent P&amp;L and a summary of inventory on hand. See our <a class="underline" href="${GUIDE_LINK}">getting ready to borrow</a> guide for a checklist.`,
    },
  ],
};

const RESTAURANTS: IndustryDefinition = {
  slug: "restaurants",
  name: "Restaurants",
  plural: "restaurants",
  icon: "restaurant",
  meta: {
    title: "Funding for Restaurants | FundLine Capital",
    description:
      "Working capital, equipment financing and expansion loans for restaurants, cafes and bars. One application, offers from 75+ lenders that understand thin margins and busy seasons.",
  },
  hero: {
    headingLine1: "Funding for Restaurants,",
    headingLine2: "Ready Before the Rush",
    sub: "Capital for kitchen equipment, patio build-outs and the payroll that does not wait for a busy weekend. One application, offers from lenders who understand food costs, tips and Tuesday nights.",
  },
  why: {
    headingLine1: "Why Restaurants Need",
    headingLine2: "Capital Built for Kitchens, Seasons, and Second Locations",
    items: [
      {
        title: "Equipment that cannot wait",
        body: "A walk-in cooler or a fryer fails on a Friday. Equipment financing replaces it this week and spreads the cost across the years it runs.",
      },
      {
        title: "Slow weeks, steady payroll",
        body: "January covers are half of December's, but staff, rent and vendors expect the same. A line of credit smooths the gap without cutting hours.",
      },
      {
        title: "Growth that needs a build-out",
        body: "A patio, a second location or a catering kitchen can double revenue. Term and SBA loans fund the build without emptying the account.",
      },
    ],
  },
  momentsHeading: {
    line1: "Common Funding Moments for Restaurants:",
    line2: "Broken Equipment, Slow Seasons, and Second Doors",
  },
  moments: [
    {
      id: "walk-in-failure",
      title: "The walk-in failure",
      body: "The main cooler dies before a holiday weekend and a $28K replacement has to be installed by Thursday, not after the next month of sales.",
      icon: "kitchen",
    },
    {
      id: "slow-season",
      title: "The slow season",
      body: "Covers drop 40 percent for eight weeks after the holidays, but the lease, the crew and the produce invoices all stay full price.",
      icon: "event_seat",
    },
    {
      id: "patio-build",
      title: "The patio build",
      body: "A permitted outdoor space would add 30 seats for six months a year, and the $90K build has to finish before the first warm weekend.",
      icon: "deck",
    },
    {
      id: "second-location",
      title: "The second location",
      body: "A landlord offers a fully vented space across town, but the build-out, equipment and opening payroll need $350K before the first table is seated.",
      icon: "add_business",
    },
  ],
  productsSub: "From a broken cooler to a second dining room, these products help restaurants fund equipment, staffing, and growth.",
  scenarios: {
    headingLine1: "Restaurant Funding Scenarios",
    headingLine2: "Replaced Coolers, Bridged Winters, and Opened Doors",
    items: [
      {
        title: "The same-week replacement",
        body: "Equipment financing covers a $28K walk-in cooler in three business days, with a 48-month payment that costs less than one weekend of lost service.",
      },
      {
        title: "The bridged winter",
        body: "A bistro draws $45K from a line of credit in January to keep its full crew and repays it by April when patio season starts.",
      },
      {
        title: "The second door",
        body: "A 10-year SBA 7(a) loan funds a $350K second location, including equipment, build-out and three months of opening payroll.",
      },
    ],
  },
  faq: [
    {
      question: "What financing do restaurants usually qualify for?",
      answerHtml: `Restaurants with a year or more of sales typically qualify for a <a class="underline" href="${PRODUCTS_LINK}#line-of-credit">business line of credit</a>, <a class="underline" href="${PRODUCTS_LINK}#equipment-financing">equipment financing</a>, and short-term loans. Established operators are strong candidates for SBA 7(a) loans on expansions. FundLine matches your profile against 75+ lenders from a single application.`,
    },
    {
      question: "Are restaurants harder to fund than other businesses?",
      answerHtml:
        "Some banks avoid the category, which is exactly why a broker helps. Several lenders in our network specialize in food service and look at daily card sales, time in business and how you handled past slow seasons rather than just the industry label.",
    },
    {
      question: "Can we repay from daily card sales?",
      answerHtml:
        "Yes. Merchant cash advances and some short-term loans are repaid as a small percentage of daily card receipts, so payments shrink on slow days. Compare the total cost against a line of credit before you accept.",
    },
    {
      question: "How fast can a restaurant get funded?",
      answerHtml:
        "The FundLine application takes about 15 minutes. Short-term loans and equipment financing often return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept.",
    },
    {
      question: "Can we finance a new restaurant that has not opened yet?",
      answerHtml:
        "It is possible. Startup products for businesses under two years old, equipment financing for kitchen build-outs, and SBA loans with a solid business plan are the usual routes. Expect lenders to weigh the owner's credit and prior operating experience heavily.",
    },
    {
      question: "What documents should we have ready?",
      answerHtml: `Typically three to six months of business bank statements, recent card-processing statements, basic company details and, for larger amounts, a P&amp;L and your lease. See our <a class="underline" href="${GUIDE_LINK}">getting ready to borrow</a> guide for a checklist.`,
    },
  ],
};

const TRUCKING: IndustryDefinition = {
  slug: "trucking",
  name: "Trucking",
  plural: "trucking companies",
  icon: "local_shipping",
  meta: {
    title: "Funding for Trucking Companies | FundLine Capital",
    description:
      "Truck financing, fleet lines of credit and freight invoice financing for carriers and owner-operators. One application, offers from 75+ lenders that understand fuel, freight and slow-paying shippers.",
  },
  hero: {
    headingLine1: "Funding for Trucking,",
    headingLine2: "Built for the Long Haul",
    sub: "Capital for trucks, trailers, fuel and the 45 days between delivering a load and getting paid for it. One application, offers from lenders who understand freight cycles and owner-operator balance sheets.",
  },
  why: {
    headingLine1: "Why Carriers Need",
    headingLine2: "Capital Built for Trucks, Fuel, and Slow-Paying Shippers",
    items: [
      {
        title: "Freight delivered, invoice pending",
        body: "Brokers and shippers pay in 30 to 60 days while fuel, tolls and driver pay are due this week. Invoice financing turns delivered loads into cash now.",
      },
      {
        title: "Trucks that add lanes",
        body: "Another tractor or a reefer trailer opens lanes you turn down today. Equipment loans let the truck pay for itself out of the freight it hauls.",
      },
      {
        title: "Repairs that do not wait",
        body: "A blown turbo or a transmission puts a unit down for a week. A line of credit gets it back on the road without missing a driver paycheck.",
      },
    ],
  },
  momentsHeading: {
    line1: "Common Funding Moments for Carriers:",
    line2: "New Units, Big Repairs, and Fuel Spikes",
  },
  moments: [
    {
      id: "second-truck",
      title: "The second truck",
      body: "A dedicated lane is offered if you can run two units, and a $95K used tractor is available now, not after another year of saving.",
      icon: "local_shipping",
    },
    {
      id: "major-repair",
      title: "The major repair",
      body: "An engine rebuild costs $22K and the shop wants half up front, while the truck earns nothing for the ten days it sits.",
      icon: "build",
    },
    {
      id: "fuel-spike",
      title: "The fuel spike",
      body: "Diesel jumps 60 cents in a month and your fuel card is due weekly, but the surcharges that offset it arrive with the broker's next check.",
      icon: "local_gas_station",
    },
    {
      id: "slow-shipper",
      title: "The slow shipper",
      body: "A new shipper pays net-60 and just tendered $80K of freight, which is great volume and a serious cash-flow problem for the next two months.",
      icon: "route",
    },
  ],
  productsSub: "From the next tractor to the next 60-day invoice, these products keep carriers rolling between settlements.",
  scenarios: {
    headingLine1: "Trucking Funding Scenarios",
    headingLine2: "Financed Units, Funded Freight, and Fleet Lines",
    items: [
      {
        title: "The financed unit",
        body: "Equipment financing covers a $95K used tractor over 48 months, and a new dedicated lane earns more than double the monthly payment.",
      },
      {
        title: "The funded freight",
        body: "Invoice financing advances 90 percent of $80K in delivered loads within two days, so fuel and drivers are paid while the shipper takes its 60 days.",
      },
      {
        title: "The fleet line",
        body: "A six-truck carrier keeps a $150K revolving line for repairs and tires, drawing on it a few times a year and repaying it out of settlements.",
      },
    ],
  },
  faq: [
    {
      question: "What financing do trucking companies usually qualify for?",
      answerHtml: `Most carriers start with <a class="underline" href="${PRODUCTS_LINK}#equipment-financing">equipment financing</a> for trucks and trailers and <a class="underline" href="${PRODUCTS_LINK}#invoice-financing">invoice financing</a> for delivered freight. Growing fleets add a line of credit for repairs and fuel. FundLine matches your profile against 75+ lenders from a single application.`,
    },
    {
      question: "Can an owner-operator with one truck qualify?",
      answerHtml:
        "Yes. Several lenders in our network fund single-truck operations, weighing the owner's driving history, credit profile and settlement statements. Invoice financing in particular depends more on who owes you than on the size of your fleet.",
    },
    {
      question: "Do you finance used trucks and trailers?",
      answerHtml:
        "Most equipment lenders do, with terms that depend on the age and mileage of the unit. The truck itself secures the loan. Expect shorter terms and a larger down payment on older equipment.",
    },
    {
      question: "How fast can a carrier get funded?",
      answerHtml:
        "The FundLine application takes about 15 minutes. Invoice financing often returns offers within a day or two, and many lenders fund in as little as 24 hours after you accept. Equipment loans take a few extra days for the title and inspection.",
    },
    {
      question: "How is invoice financing different from factoring?",
      answerHtml:
        "They solve the same problem: cash now for freight you have already delivered. Factoring typically sells the invoice outright and the factor collects from the shipper. Invoice financing advances against it while you keep the customer relationship. Compare fees, recourse terms and contract length before you accept.",
    },
    {
      question: "What documents should we have ready?",
      answerHtml: `Typically three to six months of business bank statements, your operating authority and registration details, recent settlement statements and, for equipment, the unit's specs and quote. See our <a class="underline" href="${GUIDE_LINK}">getting ready to borrow</a> guide for a checklist.`,
    },
  ],
  anchors: { products: "truck-financing", scenarios: "fleet-credit" },
};

const ECOMMERCE: IndustryDefinition = {
  slug: "ecommerce",
  name: "Ecommerce",
  plural: "ecommerce brands",
  icon: "shopping_cart",
  meta: {
    title: "Funding for Ecommerce Brands | FundLine Capital",
    description:
      "Inventory financing, working capital and growth loans for online sellers and DTC brands. One application, offers from 75+ lenders that read marketplace payouts and ad spend.",
  },
  hero: {
    headingLine1: "Funding for Ecommerce,",
    headingLine2: "Sized to Your Next Purchase Order",
    sub: "Capital for inventory, ad spend and the weeks between paying a factory and getting a marketplace payout. One application, offers from lenders who know what a healthy sell-through looks like.",
  },
  why: {
    headingLine1: "Why Online Brands Need",
    headingLine2: "Capital Built for Inventory, Ads, and Payout Timing",
    items: [
      {
        title: "Factories paid before customers",
        body: "A production run is paid 30 percent at order and the balance before shipping, months before the first unit sells. Financing keeps the run on schedule.",
      },
      {
        title: "Ads that scale with cash",
        body: "Profitable campaigns are capped by what you can spend this week. Working capital lets you keep spending when the return is there.",
      },
      {
        title: "Payouts on the platform's clock",
        body: "Marketplaces hold funds for 14 days and card processors keep reserves. A line of credit bridges the delay so growth never stalls on timing.",
      },
    ],
  },
  momentsHeading: {
    line1: "Common Funding Moments for Online Brands:",
    line2: "Big Runs, Peak Ad Weeks, and Stockouts",
  },
  moments: [
    {
      id: "production-run",
      title: "The production run",
      body: "The factory quotes $130K for the next run with 50 percent due at order, and the current inventory sells out in six weeks.",
      icon: "inventory",
    },
    {
      id: "peak-ad-week",
      title: "The peak ad week",
      body: "Campaigns are returning four times their spend in the run-up to the holidays, and every dollar you cannot spend this week is a sale you will not make.",
      icon: "campaign",
    },
    {
      id: "stockout",
      title: "The stockout",
      body: "A product goes viral, the warehouse empties in nine days, and the air-freight bill to restock arrives before the marketplace releases a single payout.",
      icon: "warehouse",
    },
    {
      id: "3pl-move",
      title: "The fulfillment move",
      body: "Switching to a new 3PL cuts shipping costs 20 percent, but the setup fees, transfer and double inventory during the switch land in one month.",
      icon: "package_2",
    },
  ],
  productsSub: "From the next production run to the next peak season, these products help online brands fund inventory, ads, and growth.",
  scenarios: {
    headingLine1: "Ecommerce Funding Scenarios",
    headingLine2: "Funded Runs, Scaled Campaigns, and Faster Restocks",
    items: [
      {
        title: "The funded run",
        body: "A skincare brand draws $130K from a line of credit to pay for a production run and repays it over four months as units sell through.",
      },
      {
        title: "The scaled campaign",
        body: "A short-term loan adds $50K of ad budget in November, and the brand's best month ever repays it before the end of December.",
      },
      {
        title: "The faster restock",
        body: "A revolving line covers a $38K air-freight bill after a viral week, so the product is back in stock before the attention fades.",
      },
    ],
  },
  faq: [
    {
      question: "What financing do ecommerce brands usually qualify for?",
      answerHtml: `Most online sellers start with a <a class="underline" href="${PRODUCTS_LINK}#line-of-credit">business line of credit</a> for inventory and a business credit card for ad spend. Brands with a track record add <a class="underline" href="${PRODUCTS_LINK}#term-loans">term loans</a> for larger runs and growth. FundLine matches your profile against 75+ lenders from a single application.`,
    },
    {
      question: "Do marketplace and platform sales count as revenue?",
      answerHtml:
        "Yes. Lenders in our network read payouts from marketplaces, storefront platforms and card processors alongside your bank deposits. Connecting those accounts during the application usually speeds up the decision.",
    },
    {
      question: "Can we get inventory financing without a physical store?",
      answerHtml:
        "Yes. Inventory-focused lenders look at sell-through rates, margins and purchase orders, not square footage. Some fund the supplier directly and are repaid as the inventory sells.",
    },
    {
      question: "How fast can an online brand get funded?",
      answerHtml:
        "The FundLine application takes about 15 minutes. Lines of credit and short-term loans often return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept.",
    },
    {
      question: "Can we use the funds for advertising?",
      answerHtml:
        "Working-capital products are use-agnostic, so ad spend, agency fees and creative production all qualify. Inventory financing is limited to product purchases, and equipment financing to physical assets.",
    },
    {
      question: "What documents should we have ready?",
      answerHtml: `Typically three to six months of business bank statements, marketplace or platform payout reports, basic company details and, for larger amounts, a recent P&amp;L and your inventory position. See our <a class="underline" href="${GUIDE_LINK}">getting ready to borrow</a> guide for a checklist.`,
    },
  ],
};

const MANUFACTURING: IndustryDefinition = {
  slug: "manufacturing",
  name: "Manufacturing",
  plural: "manufacturers",
  icon: "factory",
  meta: {
    title: "Funding for Manufacturers | FundLine Capital",
    description:
      "Equipment financing, working capital and SBA loans for manufacturers and job shops. One application, offers from 75+ lenders that understand raw-material costs and long production cycles.",
  },
  hero: {
    headingLine1: "Funding for Manufacturers,",
    headingLine2: "Matched to the Production Cycle",
    sub: "Capital for machines, raw materials and the months between accepting an order and collecting on it. One application, offers from lenders who understand tooling costs and net-60 customers.",
  },
  why: {
    headingLine1: "Why Manufacturers Need",
    headingLine2: "Capital Built for Machines, Materials, and Long Cycles",
    items: [
      {
        title: "Materials bought before the order pays",
        body: "Steel, resin and components are purchased at the start of a run and paid for on net-30, while the customer pays on net-60 after delivery.",
      },
      {
        title: "Machines that unlock capacity",
        body: "A CNC mill or an injection press turns declined work into booked work. Equipment loans match the payment to the output it creates.",
      },
      {
        title: "Big orders that strain cash",
        body: "The largest purchase order you have ever won can also be the one that empties the account. Working capital lets you say yes with confidence.",
      },
    ],
  },
  momentsHeading: {
    line1: "Common Funding Moments for Manufacturers:",
    line2: "New Machines, Record Orders, and Material Spikes",
  },
  moments: [
    {
      id: "new-machine",
      title: "The new machine",
      body: "A second five-axis mill would clear a four-week backlog and cost $310K, and the builder has one available for delivery next month.",
      icon: "precision_manufacturing",
    },
    {
      id: "record-order",
      title: "The record order",
      body: "A customer places a $600K order on net-60 terms, and the materials, overtime and tooling to fill it are due long before the invoice is paid.",
      icon: "receipt_long",
    },
    {
      id: "material-spike",
      title: "The material spike",
      body: "Aluminum prices climb 25 percent in a quarter, and the buy for the next production run costs far more than the quote you priced it on.",
      icon: "inventory_2",
    },
    {
      id: "facility-expansion",
      title: "The facility expansion",
      body: "The building next door comes up for sale, and buying it would double floor space at a payment close to what you already pay in rent.",
      icon: "factory",
    },
  ],
  productsSub: "From the next machine to the next record order, these products help manufacturers fund equipment, materials, and growth.",
  scenarios: {
    headingLine1: "Manufacturing Funding Scenarios",
    headingLine2: "Financed Mills, Funded Orders, and Owned Buildings",
    items: [
      {
        title: "The financed mill",
        body: "Equipment financing spreads a $310K five-axis mill over 84 months, and the cleared backlog pays the loan with room to spare.",
      },
      {
        title: "The funded order",
        body: "Invoice financing advances 85 percent of a $600K purchase order's invoices as each shipment ships, so materials and overtime are covered.",
      },
      {
        title: "The owned building",
        body: "A 25-year commercial real estate loan finances the $1.4M building next door at a monthly payment within 10 percent of the previous rent.",
      },
    ],
  },
  faq: [
    {
      question: "What financing do manufacturers usually qualify for?",
      answerHtml: `Manufacturers typically qualify for <a class="underline" href="${PRODUCTS_LINK}#equipment-financing">equipment financing</a>, a <a class="underline" href="${PRODUCTS_LINK}#line-of-credit">business line of credit</a> for materials, and invoice financing for large customer orders. Established shops are strong SBA 7(a) and commercial real estate candidates. FundLine matches your profile against 75+ lenders from a single application.`,
    },
    {
      question: "Can we finance against purchase orders, not just invoices?",
      answerHtml:
        "Yes. Purchase-order funding pays your suppliers for the materials needed to fill a confirmed order and is repaid when the customer pays. Invoice financing then covers the gap after shipment. Several lenders in our network do both.",
    },
    {
      question: "Do you finance used and refurbished machinery?",
      answerHtml:
        "Most equipment lenders do, with terms that depend on the age and condition of the machine. The equipment secures the loan, and installation and rigging costs can often be rolled in.",
    },
    {
      question: "How fast can a manufacturer get funded?",
      answerHtml:
        "The FundLine application takes about 15 minutes. Lines of credit and invoice financing often return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept. Equipment, SBA and real estate loans take longer because of appraisals and documentation.",
    },
    {
      question: "Does customer concentration hurt our chances?",
      answerHtml:
        "It is a factor lenders weigh, especially for invoice financing where the strength of the customer matters. A shop with two or three creditworthy customers can still qualify; the lender will focus on those customers' payment history.",
    },
    {
      question: "What documents should we have ready?",
      answerHtml: `Typically three to six months of business bank statements, basic company details, a recent P&amp;L and balance sheet for larger amounts, an equipment list, and copies of major purchase orders. See our <a class="underline" href="${GUIDE_LINK}">getting ready to borrow</a> guide for a checklist.`,
    },
  ],
};

const PROFESSIONAL_SERVICES: IndustryDefinition = {
  slug: "professional-services",
  name: "Professional Services",
  plural: "professional services firms",
  icon: "work",
  meta: {
    title: "Funding for Professional Services Firms | FundLine Capital",
    description:
      "Working capital, lines of credit and growth loans for agencies, consultancies, law and accounting firms. One application, offers from 75+ lenders that understand billable hours and net-45 clients.",
  },
  hero: {
    headingLine1: "Funding for Professional Services,",
    headingLine2: "Paced to How Clients Pay",
    sub: "Capital for hiring, office space and the weeks between billing a client and getting paid. One application, offers from lenders who understand that your inventory is people and your receivables are the balance sheet.",
  },
  why: {
    headingLine1: "Why Firms Need",
    headingLine2: "Capital Built for Payroll, Receivables, and Growth",
    items: [
      {
        title: "Payroll every two weeks, clients every 45 days",
        body: "Senior staff are paid on schedule while clients pay when their process allows. A line of credit keeps payroll steady across the gap.",
      },
      {
        title: "Hires ahead of the retainer",
        body: "Winning a large account often means hiring before the first invoice. Working capital funds the team so the engagement starts strong.",
      },
      {
        title: "Offices, systems, and acquisitions",
        body: "A new lease, a practice-management platform or buying a smaller firm are step changes. Term and SBA loans fund them over time.",
      },
    ],
  },
  momentsHeading: {
    line1: "Common Funding Moments for Firms:",
    line2: "Slow Clients, Key Hires, and Buying a Book of Business",
  },
  moments: [
    {
      id: "slow-client",
      title: "The slow client",
      body: "An enterprise client moves to net-90 across all vendors, and $180K of your billed work now sits in accounts receivable for an extra 45 days.",
      icon: "receipt_long",
    },
    {
      id: "key-hire",
      title: "The key hire",
      body: "A senior partner-level hire would bring a book of business with them, but their guaranteed first-year compensation lands before their clients do.",
      icon: "person_add",
    },
    {
      id: "acquisition",
      title: "The acquisition",
      body: "A retiring competitor offers their client list and two staff for $250K, payable at closing, with a 60-day window to arrange the funds.",
      icon: "handshake",
    },
    {
      id: "office-move",
      title: "The office move",
      body: "A bigger office needs a deposit, a build-out and furniture in the same quarter that quarterly taxes are due.",
      icon: "apartment",
    },
  ],
  productsSub: "From a slow-paying client to buying a book of business, these products help firms fund people, space, and growth.",
  scenarios: {
    headingLine1: "Professional Services Funding Scenarios",
    headingLine2: "Steady Payroll, Funded Hires, and Acquired Practices",
    items: [
      {
        title: "The steady payroll",
        body: "A 30-person agency draws $120K from a line of credit while a large client pays net-90, then repays it the week the invoice clears.",
      },
      {
        title: "The funded hire",
        body: "A 24-month term loan covers a senior hire's first-year package, and the accounts they bring generate three times the loan within the year.",
      },
      {
        title: "The acquired practice",
        body: "A 10-year SBA 7(a) loan finances a $250K acquisition of a retiring competitor's client list, with two staff joining at closing.",
      },
    ],
  },
  faq: [
    {
      question: "What financing do professional services firms usually qualify for?",
      answerHtml: `Most firms start with a <a class="underline" href="${PRODUCTS_LINK}#line-of-credit">business line of credit</a> for payroll timing and a business credit card for expenses. Firms with signed retainers add <a class="underline" href="${PRODUCTS_LINK}#invoice-financing">invoice financing</a> and term loans for hiring and acquisitions. FundLine matches your profile against 75+ lenders from a single application.`,
    },
    {
      question: "We have no physical assets. Can we still borrow?",
      answerHtml:
        "Yes. Most working-capital products are unsecured or secured by receivables, not equipment. Lenders in our network focus on revenue consistency, client quality, time in business and the owners' credit profile.",
    },
    {
      question: "Can we finance against retainers and unpaid invoices?",
      answerHtml:
        "Invoice financing advances most of the value of invoices to creditworthy clients, which turns a 45- or 90-day wait into cash within days. Recurring retainers also strengthen your case for a larger line of credit.",
    },
    {
      question: "How fast can a firm get funded?",
      answerHtml:
        "The FundLine application takes about 15 minutes. Lines of credit and invoice financing often return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept. SBA loans for acquisitions take several weeks.",
    },
    {
      question: "Can partners apply without personally guaranteeing the loan?",
      answerHtml:
        "Most small-business products ask for a personal guarantee from owners with a meaningful stake. Larger firms with strong financials sometimes qualify for guarantee-free products; each offer states its requirements before you accept.",
    },
    {
      question: "What documents should we have ready?",
      answerHtml: `Typically three to six months of business bank statements, basic firm details and, for larger amounts, a recent P&amp;L, an accounts receivable aging report and a summary of active retainers. See our <a class="underline" href="${GUIDE_LINK}">getting ready to borrow</a> guide for a checklist.`,
    },
  ],
};

const FINTECH: IndustryDefinition = {
  slug: "fintech",
  name: "Fintech",
  plural: "fintech companies",
  icon: "account_balance_wallet",
  meta: {
    title: "Funding for Fintech Companies | FundLine Capital",
    description:
      "Working capital, growth loans and non-dilutive financing for fintech and payments companies. One application, offers from 75+ lenders that understand compliance costs and take-rate revenue.",
  },
  hero: {
    headingLine1: "Funding for Fintech,",
    headingLine2: "Without Another Dilutive Round",
    sub: "Capital for licensing, compliance, engineering and the runway between rounds. One application, offers from lenders who understand take rates, interchange and the cost of getting regulated.",
  },
  why: {
    headingLine1: "Why Fintechs Need",
    headingLine2: "Capital Built for Compliance, Runway, and Scale",
    items: [
      {
        title: "Compliance paid before launch",
        body: "Licenses, audits and legal reviews cost six figures before the first customer transacts. Financing covers the runway to a regulated launch.",
      },
      {
        title: "Revenue that grows with volume",
        body: "Take-rate and interchange revenue lags the engineering that unlocks it. Working capital funds the build while volume ramps.",
      },
      {
        title: "Runway between rounds",
        body: "A sensible debt line extends runway without repricing the company. Founders keep equity for the round that deserves it.",
      },
    ],
  },
  momentsHeading: {
    line1: "Common Funding Moments for Fintechs:",
    line2: "License Costs, Bank Partner Audits, and Enterprise Launches",
  },
  moments: [
    {
      id: "licensing",
      title: "The licensing push",
      body: "Money-transmitter applications across a dozen states cost $350K in fees, bonds and legal work, all due before revenue from those states exists.",
      icon: "account_balance_wallet",
    },
    {
      id: "bank-partner-audit",
      title: "The bank partner audit",
      body: "A sponsor bank requires an independent compliance review and a SOC 2 report before expanding your program, and both bills land this quarter.",
      icon: "verified_user",
    },
    {
      id: "enterprise-launch",
      title: "The enterprise launch",
      body: "A platform partner agrees to embed your product, and the integration team, security review and launch support all start before the revenue share does.",
      icon: "payments",
    },
    {
      id: "hiring-wave",
      title: "The hiring wave",
      body: "Four senior engineers and a head of compliance start in the same quarter, and payroll doubles before the volume they enable shows up.",
      icon: "groups",
    },
  ],
  productsSub: "From licensing fees to a platform launch, these products help fintechs fund compliance, people, and growth without giving up equity.",
  scenarios: {
    headingLine1: "Fintech Funding Scenarios",
    headingLine2: "Funded Licenses, Bridged Launches, and Extended Runway",
    items: [
      {
        title: "The funded licensing",
        body: "A 36-month term loan covers $350K of state licensing costs, and the company launches in twelve new states without touching its equity runway.",
      },
      {
        title: "The bridged launch",
        body: "A payments company draws $200K from a line of credit to staff a platform integration and repays it from the first two quarters of revenue share.",
      },
      {
        title: "The extended runway",
        body: "A $500K growth loan adds seven months of runway, so the next equity round is raised on a bigger revenue number and better terms.",
      },
    ],
  },
  faq: [
    {
      question: "What financing do fintech companies usually qualify for?",
      answerHtml: `Fintechs with revenue typically qualify for a <a class="underline" href="${PRODUCTS_LINK}#line-of-credit">business line of credit</a>, <a class="underline" href="${PRODUCTS_LINK}#term-loans">term loans</a> and business credit cards. Companies with recurring or volume-based revenue often qualify for larger growth loans. FundLine matches your profile against 75+ lenders from a single application.`,
    },
    {
      question: "Does volume-based or take-rate revenue count?",
      answerHtml:
        "Yes. Lenders in our network look at processed volume, take rate, interchange share and bank deposits, along with signed partner agreements. Several specialize in venture-backed and revenue-stage software companies.",
    },
    {
      question: "Can we borrow before we are profitable?",
      answerHtml:
        "Often, yes. Lenders weigh cash on hand, runway, revenue growth and investor backing alongside profitability. Being pre-profit narrows the options and may reduce the amount, but rarely closes the door.",
    },
    {
      question: "Will debt complicate our next equity round?",
      answerHtml:
        "Usually not. Investors commonly view a right-sized debt line as a sign of financial discipline. Look for offers without warrants or restrictive covenants; each offer's terms are disclosed before you accept.",
    },
    {
      question: "How fast can a fintech get funded?",
      answerHtml:
        "The FundLine application takes about 15 minutes. Lines of credit often return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept. Larger growth loans take longer for diligence.",
    },
    {
      question: "What documents should we have ready?",
      answerHtml: `Typically three to six months of business bank statements, basic company details, a recent P&amp;L, your cap table for larger amounts, and copies of key partner or platform agreements. See our <a class="underline" href="${GUIDE_LINK}">getting ready to borrow</a> guide for a checklist.`,
    },
  ],
};

const MARKETPLACES: IndustryDefinition = {
  slug: "marketplaces",
  name: "Marketplaces",
  plural: "marketplace companies",
  icon: "storefront",
  meta: {
    title: "Funding for Marketplaces | FundLine Capital",
    description:
      "Working capital and growth financing for two-sided marketplaces and platforms. One application, offers from 75+ lenders that understand gross merchandise volume and take rates.",
  },
  hero: {
    headingLine1: "Funding for Marketplaces,",
    headingLine2: "Built for Both Sides of the Platform",
    sub: "Capital for supply acquisition, seller payouts and the marketing that brings buyers back. One application, offers from lenders who read GMV and take rate, not just revenue.",
  },
  why: {
    headingLine1: "Why Marketplaces Need",
    headingLine2: "Capital Built for Liquidity, Payouts, and Growth",
    items: [
      {
        title: "Supply before demand",
        body: "Sellers must be onboarded and paid before buyers show up in volume. Working capital funds the supply side while the flywheel starts.",
      },
      {
        title: "Payouts faster than collections",
        body: "Paying sellers on delivery while buyers pay on card settlement creates a float gap. A line of credit closes it without slowing payouts.",
      },
      {
        title: "Marketing with a measurable return",
        body: "Buyer acquisition campaigns scale with cash. Growth loans let you spend when the cohort math is working.",
      },
    ],
  },
  momentsHeading: {
    line1: "Common Funding Moments for Marketplaces:",
    line2: "New Cities, Payout Gaps, and Fast Seller Growth",
  },
  moments: [
    {
      id: "new-city",
      title: "The new city launch",
      body: "Opening a third metro means recruiting 200 sellers, seeding demand and hiring a local team, all before the first transaction in that city.",
      icon: "storefront",
    },
    {
      id: "payout-gap",
      title: "The payout gap",
      body: "Volume doubles in a month and instant seller payouts now run $90K ahead of card settlements every single week.",
      icon: "swap_horiz",
    },
    {
      id: "buyer-campaign",
      title: "The buyer campaign",
      body: "A referral program is converting at twice the usual rate, and the incentive budget will run out before the new buyers make their second purchase.",
      icon: "campaign",
    },
    {
      id: "enterprise-partner",
      title: "The enterprise partner",
      body: "A large brand wants to list its full catalog, and the integration, onboarding and category team have to exist before the listings go live.",
      icon: "handshake",
    },
  ],
  productsSub: "From seeding supply in a new city to smoothing seller payouts, these products help marketplaces fund liquidity and growth.",
  scenarios: {
    headingLine1: "Marketplace Funding Scenarios",
    headingLine2: "Launched Cities, Smoothed Payouts, and Funded Cohorts",
    items: [
      {
        title: "The launched city",
        body: "A $400K growth loan funds a third-metro launch, and the new city reaches the take-rate breakeven of the first two within nine months.",
      },
      {
        title: "The smoothed payout",
        body: "A services marketplace keeps a $250K revolving line for instant seller payouts and repays it every week as card settlements land.",
      },
      {
        title: "The funded cohort",
        body: "A short-term loan extends a $60K referral budget through the holiday season, and the acquired buyers repay it in second-purchase revenue.",
      },
    ],
  },
  faq: [
    {
      question: "What financing do marketplaces usually qualify for?",
      answerHtml: `Most marketplaces start with a <a class="underline" href="${PRODUCTS_LINK}#line-of-credit">business line of credit</a> for payout timing and a business credit card for marketing spend. Platforms with a track record add <a class="underline" href="${PRODUCTS_LINK}#term-loans">term loans</a> for launches and growth. FundLine matches your profile against 75+ lenders from a single application.`,
    },
    {
      question: "Do lenders look at GMV or net revenue?",
      answerHtml:
        "Both. Lenders in our network read gross merchandise volume, take rate and net revenue together, along with bank deposits and repeat-purchase trends. A clear breakdown of what you keep from each transaction strengthens the application.",
    },
    {
      question: "Can we fund seller payouts with borrowed money?",
      answerHtml:
        "Yes. A revolving line of credit is commonly used to bridge the gap between paying sellers and collecting from buyers. You draw and repay weekly, and only pay interest on the days the balance is outstanding.",
    },
    {
      question: "How fast can a marketplace get funded?",
      answerHtml:
        "The FundLine application takes about 15 minutes. Lines of credit often return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept. Larger growth loans take longer for diligence.",
    },
    {
      question: "Do we need to be profitable to qualify?",
      answerHtml:
        "No. Many marketplaces invest ahead of profitability. Lenders weigh cash on hand, revenue growth, unit economics and investor backing. Being pre-profit narrows the options but rarely closes them.",
    },
    {
      question: "What documents should we have ready?",
      answerHtml: `Typically three to six months of business bank statements, basic company details, a recent P&amp;L, a GMV and take-rate summary, and processor statements for larger amounts. See our <a class="underline" href="${GUIDE_LINK}">getting ready to borrow</a> guide for a checklist.`,
    },
  ],
};

const SAAS: IndustryDefinition = {
  slug: "saas",
  name: "SaaS",
  plural: "SaaS companies",
  icon: "cloud",
  meta: {
    title: "Funding for SaaS Companies | FundLine Capital",
    description:
      "Non-dilutive growth capital, lines of credit and term loans for subscription software companies. One application, offers from 75+ lenders that underwrite on recurring revenue.",
  },
  hero: {
    headingLine1: "Funding for SaaS,",
    headingLine2: "Priced on Recurring Revenue",
    sub: "Capital for sales hires, product bets and the months it takes a new cohort to pay back its acquisition cost. One application, offers from lenders who read ARR, churn and net retention.",
  },
  why: {
    headingLine1: "Why SaaS Companies Need",
    headingLine2: "Capital Built for ARR, Payback, and Runway",
    items: [
      {
        title: "Acquisition paid up front, revenue monthly",
        body: "A new customer costs a year of subscription to win and pays it back over eighteen months. Financing funds the gap so growth is not capped by cash.",
      },
      {
        title: "Annual contracts that bill late",
        body: "Enterprise deals close on net-60 invoices and mid-year start dates. A line of credit bridges signed ARR to collected cash.",
      },
      {
        title: "Runway without dilution",
        body: "A revenue-based line or term loan extends runway on today's ARR, so the next equity round is raised from strength.",
      },
    ],
  },
  momentsHeading: {
    line1: "Common Funding Moments for SaaS Companies:",
    line2: "Sales Hiring, Enterprise Deals, and Product Bets",
  },
  moments: [
    {
      id: "sales-hiring",
      title: "The sales hiring plan",
      body: "Four account executives start in the same month, and each takes two quarters to ramp before their bookings cover their fully loaded cost.",
      icon: "groups",
    },
    {
      id: "enterprise-deal",
      title: "The enterprise deal",
      body: "A $240K annual contract closes on net-60 terms with a dedicated onboarding team required from day one.",
      icon: "handshake",
    },
    {
      id: "product-bet",
      title: "The product bet",
      body: "A second product line would lift net retention, and the eight-month build has to be funded before a single customer can pay for it.",
      icon: "memory",
    },
    {
      id: "churn-dip",
      title: "The churn dip",
      body: "A large customer consolidates vendors and ARR drops 8 percent in one quarter, while the hiring plan was built on the old number.",
      icon: "trending_up",
    },
  ],
  productsSub: "From ramping a sales team to funding a second product, these products help SaaS companies grow on recurring revenue without dilution.",
  scenarios: {
    headingLine1: "SaaS Funding Scenarios",
    headingLine2: "Funded Ramps, Bridged Contracts, and Extended Runway",
    items: [
      {
        title: "The funded ramp",
        body: "A 36-month term loan covers $300K of sales hiring, and the new team's bookings exceed the loan payment by the third quarter.",
      },
      {
        title: "The bridged contract",
        body: "Invoice financing advances 85 percent of a $240K annual invoice within days, so the onboarding team is staffed before the customer pays.",
      },
      {
        title: "The extended runway",
        body: "A $600K revenue-based line adds eight months of runway on $2.4M of ARR, and the next round is raised at a higher valuation.",
      },
    ],
  },
  faq: [
    {
      question: "What financing do SaaS companies usually qualify for?",
      answerHtml: `SaaS companies with recurring revenue typically qualify for a <a class="underline" href="${PRODUCTS_LINK}#line-of-credit">business line of credit</a>, <a class="underline" href="${PRODUCTS_LINK}#term-loans">term loans</a> and revenue-based growth capital, plus a business credit card for tooling and cloud spend. FundLine matches your profile against 75+ lenders from a single application.`,
    },
    {
      question: "How do lenders evaluate a subscription business?",
      answerHtml:
        "They look at annual recurring revenue, growth rate, gross and net retention, gross margin and cash on hand. Several lenders in our network underwrite specifically on ARR and can size an offer as a multiple of monthly recurring revenue.",
    },
    {
      question: "Can we borrow against annual contracts that have not been paid yet?",
      answerHtml:
        "Yes. Invoice financing advances against signed annual invoices to creditworthy customers, and signed ARR strengthens your case for a larger line of credit. Both turn booked revenue into cash without waiting on the customer's payment cycle.",
    },
    {
      question: "Do we need to be profitable to get funding?",
      answerHtml:
        "No. Many SaaS companies invest ahead of profitability. Lenders weigh runway, growth efficiency, retention and investor backing alongside profit. Being pre-profit narrows the options but rarely closes them.",
    },
    {
      question: "How fast can a SaaS company get funded?",
      answerHtml:
        "The FundLine application takes about 15 minutes. Lines of credit often return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept. Larger growth loans take longer for diligence.",
    },
    {
      question: "What documents should we have ready?",
      answerHtml: `Typically three to six months of business bank statements, basic company details, a recent P&amp;L, an ARR and churn summary, and your cap table for larger amounts. See our <a class="underline" href="${GUIDE_LINK}">getting ready to borrow</a> guide for a checklist.`,
    },
  ],
};

export const INDUSTRIES: Record<IndustrySlug, IndustryDefinition> = {
  construction: CONSTRUCTION,
  healthcare: HEALTHCARE,
  retail: RETAIL,
  restaurants: RESTAURANTS,
  trucking: TRUCKING,
  ecommerce: ECOMMERCE,
  manufacturing: MANUFACTURING,
  "professional-services": PROFESSIONAL_SERVICES,
  fintech: FINTECH,
  marketplaces: MARKETPLACES,
  saas: SAAS,
};

function isIndustrySlug(slug: string): slug is IndustrySlug {
  return (INDUSTRY_SLUGS as string[]).includes(slug);
}

/** Look up an industry by route param; `undefined` for unknown slugs (including "ai", which has its own route). */
export function getIndustry(slug: string): IndustryDefinition | undefined {
  return isIndustrySlug(slug) ? INDUSTRIES[slug] : undefined;
}

export function industryBreadcrumb(industry: IndustryDefinition): BreadcrumbItem[] {
  return [{ label: "Home", href: "/" }, { label: "Industries", href: "/#industries" }, { label: industry.name }];
}

/** The home-page stage packages, with CTAs tagged for the industry so the application can pre-fill it. */
export function industryPackages(slug: IndustrySlug): CoveragePackage[] {
  return COVERAGE_PACKAGES.map((pkg) => ({ ...pkg, ctaHref: `${LINKS.apply}?package=${pkg.id}&industry=${slug}` }));
}

/** Every industry chip (AI included), reusing the AI page's artwork where it exists and icons elsewhere. */
const ALL_INDUSTRY_CHIPS: Array<IndustryChip & { slug: IndustrySlug | "ai" }> = [
  {
    slug: "ai",
    label: "AI",
    href: "/industry/ai",
    art: { kind: "image", src: `${AI_ASSETS}/ai-hero-foreground.png`, box: { width: 72, height: 72 }, fit: "contain" },
  },
  {
    slug: "fintech",
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
    slug: "ecommerce",
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
    slug: "marketplaces",
    label: "Marketplaces",
    href: "/industry/marketplaces",
    art: { kind: "image", src: `${AI_ASSETS}/marketplace-hero.png`, box: { width: 66, height: 71 }, fit: "contain" },
  },
  {
    slug: "healthcare",
    label: "Healthcare",
    href: "/industry/healthcare",
    art: { kind: "image", src: `${AI_ASSETS}/healthtech-hero.png`, box: { width: 76, height: 70 }, fit: "contain" },
  },
  {
    slug: "saas",
    label: "SaaS",
    href: "/industry/saas",
    art: { kind: "image", src: `${AI_ASSETS}/saas-cursor.png`, box: { width: 72, height: 72 }, fit: "contain" },
  },
  { slug: "trucking", label: "Trucking", href: "/industry/trucking", art: { kind: "icon", icon: "local_shipping" } },
  { slug: "construction", label: "Construction", href: "/industry/construction", art: { kind: "icon", icon: "construction" } },
  { slug: "restaurants", label: "Restaurants", href: "/industry/restaurants", art: { kind: "icon", icon: "restaurant" } },
  { slug: "retail", label: "Retail", href: "/industry/retail", art: { kind: "icon", icon: "storefront" } },
  { slug: "manufacturing", label: "Manufacturing", href: "/industry/manufacturing", art: { kind: "icon", icon: "factory" } },
  {
    slug: "professional-services",
    label: "Professional Services",
    href: "/industry/professional-services",
    art: { kind: "icon", icon: "work" },
  },
];

/** Eight chips fit the 1128px rail on one row; the current industry is excluded. */
const CHIP_COUNT = 8;

export function otherIndustryChips(current: IndustrySlug): IndustryChip[] {
  return ALL_INDUSTRY_CHIPS.filter((chip) => chip.slug !== current)
    .slice(0, CHIP_COUNT)
    .map(({ label, href, art }) => ({ label, href, art }));
}
