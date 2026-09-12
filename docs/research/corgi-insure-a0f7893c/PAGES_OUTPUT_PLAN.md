# Output Plan — five secondary pages (FundLine Capital rebrand of corgi.insure layouts)

Site-key `corgi-insure-a0f7893c` (research/asset namespaces keep the *source* keys; the rendered site is FundLine Capital).
`<app-root>` = repository root. Home page (`/`) already exists on this branch and must not be replaced.

| Source URL | page-key | Destination route (FundLine) | Route file |
|---|---|---|---|
| https://www.corgi.insure/for-brokers | `for-brokers-4e828285` | `/for-brokers` | `src/app/for-brokers/page.tsx` |
| https://www.corgi.insure/press-releases/series-b | `press-releases--series-b-f1aae1d8` | `/newsroom/series-b` | `src/app/newsroom/series-b/page.tsx` |
| https://www.corgi.insure/ai | `ai-97ffa848` | `/industry/ai` | `src/app/industry/ai/page.tsx` |
| https://www.corgi.insure/startup-insurance | `startup-insurance-fc836df6` | `/startup-loans` | `src/app/startup-loans/page.tsx` |
| https://www.corgi.insure/directors-and-officers | `directors-and-officers-f2860438` | `/term-loans` | `src/app/term-loans/page.tsx` |

Routes deliberately diverge from the source pathnames: the user asked for the corgi.insure *outline* with all insurance content
replaced by FundLine Capital lending content, so `/startup-insurance` becomes `/startup-loans` and the D&O policy page becomes
the Term Loan product page. The home nav already links these routes.

Per page:
- Artifact root `docs/research/corgi-insure-a0f7893c/<page-key>/` — `dom-{1440,768,390}.json` + `.tree.txt` (computed styles for header/main/footer), `sections.json`, `page-text.txt`, `meta.json`, `asset-urls.json`, `asset-manifest.json`, `behaviors.json`, `SPEC.md`, `source.html`.
- Screenshot root `docs/design-references/corgi-insure-a0f7893c/<page-key>/` — `full-page-{1440,768,390}.png` of the source page; builders add `qa/` captures of the clone.
- Component root `src/components/sites/corgi-insure-a0f7893c/<page-key>/` (new, page-only components + `data.ts`).
- Types `src/types/sites/corgi-insure-a0f7893c/<page-key>.ts` (new; reuse `home.ts` types where contracts match).
- Asset root `public/sites/corgi-insure-a0f7893c/<page-key>/` (downloaded by `scripts/download-assets-corgi-insure-a0f7893c-pages.mjs`; assets shared with the home page resolve to the home/shared roots via `asset-manifest.json`).

Shared foundation changes (done before builders start, on branch `fundline-capital`):
- Navy palette replaces orange everywhere (`--primary: #1e3a8a`; see `_PAGES_SHARED_CONTEXT.md`).
- `PressableButton` variant `orange` renamed `primary`.
- `SiteHeader({ actions? })`, `SiteFooter({ cta? })`, `PoliciesSection({...})`, `FaqSection({...})`, `JourneySection({...})`, `SpecializedCoveragesStack({ coverages? })` accept props so pages can reuse them.
- No other shared/home file may be edited by a page builder. Collisions: none — every page has a distinct route, component root, types file and asset root.
