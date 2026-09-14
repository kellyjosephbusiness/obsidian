# Output plan — Bluevine line-of-credit structure → FundLine product and industry pages

| Item | Value |
|---|---|
| Source | https://www.bluevine.com/business-loans/line-of-credit (structure and section styling reference only; no Bluevine assets, copy or brand are used) |
| site-key | `bluevine-com-7752b814` (research + screenshots only) |
| page-key | `business-loans--line-of-credit-7ae1333b` |
| Template | `src/components/sites/corgi-insure-a0f7893c/detail/` — `DetailPage` + 11 section components, FundLine styling |
| Content contract | `src/types/sites/corgi-insure-a0f7893c/detail.ts` |
| Product routes (replace) | `src/app/[product]/page.tsx` → `/term-loans`, `/line-of-credit`, `/sba-loans`, `/equipment-financing`, `/invoice-financing`, `/merchant-cash-advance`, `/commercial-real-estate`, `/business-credit-card` (data: `detail/products.ts`) |
| Industry routes (replace) | `src/app/industry/[industry]/page.tsx` → all 12 industries incl. `ai` (data: `detail/industries.ts`) |
| Removed | `/term-loans` static route (D&O-derived), `/industry/ai` static route, the `industries/` template, and the partner/lender surfaces: nav menus "For partners" and "For lenders", routes `/for-lenders`, `/for-brokers`, `/partners/sign-in`, `/embedded/*` |
| Nav rewiring | "Business loans › By type" and "Products" menu items, `POLICIES[].href` and `/loan-types` product cards link to the new product routes |

Screenshots: `docs/design-references/bluevine-com-7752b814/business-loans--line-of-credit-7ae1333b/` (full pages at 1440/768/390 and 11 section crops). Trees: `dom-*.tree.txt`, `compact-1440.txt`.
