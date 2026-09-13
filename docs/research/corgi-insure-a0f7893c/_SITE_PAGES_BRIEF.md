# Site pages brief — finishing the remaining FundLine Capital routes

Read `_PAGES_SHARED_CONTEXT.md` first (brand rules, palette, type, reusable components, page shell, rules of engagement). Everything below builds on it.

## Goal
Every link on the site currently lands on the "coming soon" fallback (`src/app/not-found.tsx`). Build the real pages, in the site's existing style, with original FundLine Capital lending copy. All figures, names, quotes, addresses and dates are fictional placeholders. No insurance vocabulary anywhere.

## How pages are built
- Each page is a Next.js App Router route (`src/app/<path>/page.tsx`) exporting `metadata` and composing `SiteHeader` / `SiteFooter` with the standard shell from `src/app/page.tsx`.
- Page groups share **templates** that live in the group's component root (`src/components/sites/corgi-insure-a0f7893c/<group>/`) and are driven by a `data.ts` in the same folder. Do not copy JSX between routes; make the template take props.
- Reuse the finished sections wherever they fit: `PoliciesSection`, `FaqSection`, `JourneySection`, `ReviewsSection`, `TestimonialsSection`, the article layout in `press-releases--series-b-f1aae1d8/` (`PressHero`, `PressByline`, `PressArticle`, `LatestArticles`), the industry sections in `ai-97ffa848/` (`IndustryHero`, `WhySection`, `FundingMoments`, `ScenariosSection`, `IndustryChips`), the stage packages in `startup-insurance-fc836df6/`, and the product-detail sections in `directors-and-officers-f2860438/`. Import them; do not edit them. If a section needs a prop it does not have, build a local variant in your own folder.
- Visual language: 1200/1600px containers with the 1px `#e1e1e1` rails, `py-16 md:py-20 lg:py-24` sections, F37 Bolton headings via the `--h1/--h2` tokens, `text-body` / `text-body-large`, white `rounded-[24px]` cards with hairline borders, `PressableButton` CTAs (primary navy / black / white), Material Symbols icons, `InitialsAvatar` for people. Hero pattern: `pt-[150px] md:pt-[176px]`, then the page's own sections, then `SiteFooter`.
- Forms are UI-only: no network calls. Use native inputs styled like `FinancialFormMock` (12px labels, 1px `#e1e1e1` borders, `rounded-[10px]`, `#f9f9f9` card) and a primary submit button that shows an inline "Thanks — a funding specialist will reach out" state on submit (client component with `useState`).
- Interactive bits are welcome where they earn it (a loan calculator, an accordion, tabs) but keep them small and typed. No `any`.
- Mobile first. Verify every route at 1440 and 390 with the `shot.mjs` helper from the shared context and fix anything that wraps badly or overflows.
- `npx tsc --noEmit` and `npm run lint` must pass. Do not run git. Do not touch `src/app/page.tsx`, `layout.tsx`, `globals.css`, `not-found.tsx`, or any file outside your group's folders and routes.

## Groups (one builder each)

### Group A — industries (`src/components/sites/corgi-insure-a0f7893c/industries/`)
Routes: `/industry/construction`, `/industry/healthcare`, `/industry/retail`, `/industry/restaurants`, `/industry/trucking`, `/industry/ecommerce`, `/industry/manufacturing`, `/industry/professional-services`, `/industry/fintech`, `/industry/marketplaces`, `/industry/saas`.
One `IndustryPage` template mirroring `/industry/ai` (hero with icon tile → why → funding moments → packages → products → scenarios → other industries → FAQ). Per-industry data: hero heading/sub, three "why" cards, four funding moments, three scenarios, six FAQs, the right Material icon (`construction`, `medical_services`, `storefront`, `restaurant`, `local_shipping`, `shopping_cart`, `factory`, `work`, `account_balance_wallet`, `storefront`, `cloud`). Use a `[industry]` dynamic segment with `generateStaticParams` and per-page `generateMetadata`; keep `/industry/ai` as it is.

### Group B — editorial (`src/components/sites/corgi-insure-a0f7893c/editorial/`)
Routes: `/blog` (index), the eight blog posts linked from the site (`/blog/marketplace-vs-bank`, `/blog/funding-cost-by-stage`, `/blog/funding-guide-for-owners`, `/blog/term-loan-for-growing-companies`, `/blog/term-loan-next-stage`, `/blog/how-to-prepare-bank-statements-for-a-faster-credit-decision`, `/blog/line-of-credit-vs-term-loan-seasonal-cash-flow`, `/blog/where-owners-can-accept-a-funding-offer-the-same-day`, `/blog/which-online-lenders-still-fund-businesses-under-two-years-old`), `/guides` (index), `/guides/business-financing`, `/guides/business-credit`, `/guides/getting-ready-to-borrow`, `/news/same-day-decisions` (press release), `/updates` (product updates list), `/newsroom` (press index that links to `/newsroom/series-b` and `/news/same-day-decisions`).
Article template = the press-release layout (hero with title + dark thumbnail card, byline row, sticky table of contents + body + sticky "start application" rail, related articles). Index template = the "Latest articles" grid with a hero heading and optional tag filter. Each article: 600–900 words of original, useful lending content with H2 sections, one inline dark CTA card, and 2–4 related links. Use `[slug]` dynamic segments with `generateStaticParams`.

### Group C — company and account (`src/components/sites/corgi-insure-a0f7893c/company/`)
Routes: `/about`, `/careers`, `/contact`, `/security`, `/locations`, `/how-it-works`, `/reviews`, `/customer-stories`, `/apply`, `/sign-in`, `/partners/sign-in`, `/book-a-call`.
- `/about`: hero + mission paragraphs + stats band (reuse `HERO_TICKER` numbers) + leadership grid (Maya Chen CEO, Daniel Okoro COO, plus four fictional leads with `InitialsAvatar`) + values cards + CTA.
- `/careers`: hero + values + open roles list (six fictional roles with location and team) + benefits + CTA.
- `/contact`: hero + contact form (name, business, email, phone, message) + support cards (email, phone hours, mailing address) + FAQ.
- `/security`: hero + six control cards (encryption, SOC 2 program, bank-grade data handling, least-privilege access, credit-safe applications, responsible disclosure) + FAQ.
- `/locations`: hero + six fictional office cards (city, address, hours) + map placeholder card.
- `/how-it-works`: hero + four numbered steps (apply, match, compare, fund) each with a card + timeline band + FAQ + CTA.
- `/reviews`: hero + rating summary + `ReviewsSection`-style grid of 12 reviews + CTA.
- `/customer-stories`: hero + story cards (the eleven `TESTIMONIALS` from home `data.ts`, expanded into cards with company, product used, amount, outcome) + CTA.
- `/apply`: a three-step application UI (business basics → financials → contact) with a progress bar, styled like `FinancialFormMock`, ending in a confirmation state. No backend.
- `/sign-in` and `/partners/sign-in`: centered card with email/password fields, "Continue" primary button, links; partners variant has the broker header actions.
- `/book-a-call`: hero + a calendar-style picker mock (next 7 days × 4 slots, client state) + contact fields + confirmation state.

### Group D — products, partners, legal (`src/components/sites/corgi-insure-a0f7893c/products/`)
Routes: `/loan-types`, `/calculators`, `/for-lenders`, `/embedded/digital-application`, `/embedded/marketplace`, `/embedded/matching`, `/embedded/prequalify`, `/terms`, `/privacy`, `/privacy-choices`, `/licenses`, `/disclosures`.
- `/loan-types`: hero + `PoliciesSection` (all products) + `JourneySection` + comparison table (amount, term, speed, best for, across the 8 products) + FAQ. Anchors `#term-loans`, `#line-of-credit`, `#sba-loans`, `#equipment-financing`, `#invoice-financing`, `#merchant-cash-advance`, `#commercial-real-estate`, `#business-credit-card`, `#all-financing` must exist (the nav links to them).
- `/calculators`: hero + a working loan payment calculator (amount, APR, term → monthly payment, total interest, amortization preview; client component) + a "how much can I qualify for" estimator (monthly revenue, time in business, credit band → range) + FAQ.
- `/for-lenders`: hero + value props for banks/credit unions/online lenders + how matching works + stats + partner form (institution, contact, products offered) + FAQ.
- `/embedded/*`: one `FeaturePage` template (hero with product mock, three benefit cards, "how it works" steps, integration snippet card, FAQ, CTA) with four data sets.
- Legal pages: one `LegalPage` template (title, "last updated", table of contents, numbered sections of original placeholder legal copy appropriate to a lending marketplace; privacy-choices includes a preferences form UI).

## Copy rules
Voice: direct, confident, owner-to-owner, no jargon. Sentences short. Numbers concrete. Every page ends with a CTA to `/apply` or `/book-a-call`. Never mention Corgi, Lendio, insurance, or real investors.

## Report
List routes built, files created, anything reused, deviations, and QA capture paths under `docs/design-references/corgi-insure-a0f7893c/site-pages/<group>/`.
