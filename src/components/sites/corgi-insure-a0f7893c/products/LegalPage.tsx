import type { LegalPageContent } from "@/types/sites/corgi-insure-a0f7893c/products";
import { Rails } from "../directors-and-officers-f2860438/rails";
import { EYEBROW_CLASS } from "./PageHero";
import { PrivacyPreferencesForm } from "./PrivacyPreferencesForm";
import { SiteShell } from "./SiteShell";

/**
 * Legal document template: title block (eyebrow, H1, last-updated, intro), then a sticky "On this
 * page" rail beside numbered sections. `showPreferences` appends the privacy preferences form.
 *
 * NOTE: the copy rendered here (see `LEGAL_PAGES` in ./data.ts) is placeholder legal text written
 * for a fictional lending marketplace. It is not legal advice and must be replaced by counsel.
 */
export function LegalPage({ content }: { content: LegalPageContent }) {
  return (
    <SiteShell>
      <section className="relative border-b border-[#e1e1e1] px-4 pt-[150px] pb-12 md:px-6 md:pt-[176px] md:pb-16 lg:px-16">
        <Rails />
        <div className="relative mx-auto flex max-w-[1200px] flex-col gap-6 px-4 md:px-6">
          <span className={`${EYEBROW_CLASS} w-fit`}>Legal</span>
          <h1 className="font-mono font-medium text-[#191919] text-[length:var(--h1-font-size)] leading-[var(--h1-line-height)] tracking-[var(--h1-tracking)]">{content.title}</h1>
          <p className="text-[14px] leading-[1.2] tracking-[-0.21px] text-[#4a4a4a]">Last updated {content.lastUpdated}</p>
          <p className="max-w-[800px] text-body-large text-[#4a4a4a]">{content.intro}</p>
        </div>
      </section>

      <section className="relative border-b border-[#e1e1e1] px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:py-24">
        <Rails />
        <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-4 md:px-6 lg:grid-cols-[280px_1fr] lg:gap-16">
          <nav aria-label="On this page" className="self-start lg:sticky lg:top-[calc(var(--navbar-height,56px)+24px)] lg:transition-[top] lg:duration-300">
            <p className="mb-3 text-[12px] font-medium uppercase leading-[1.2] tracking-[0.08em] text-[#4a4a4a]">On this page</p>
            <ol className="flex flex-col gap-2 border-l border-[#e1e1e1]">
              {content.sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="-ml-px flex gap-2 border-l border-transparent pl-4 text-[14px] leading-[1.3] tracking-[-0.21px] text-[#4a4a4a] hover:border-[#1e3a8a] hover:text-[#1e3a8a]">
                    <span className="w-5 shrink-0 tabular-nums text-[#7b7b7b]">{i + 1}.</span>
                    {s.title}
                  </a>
                </li>
              ))}
              {content.showPreferences && (
                <li>
                  <a href="#preferences" className="-ml-px flex gap-2 border-l border-transparent pl-4 text-[14px] leading-[1.3] tracking-[-0.21px] text-[#1e3a8a] hover:border-[#1e3a8a]">
                    <span className="w-5 shrink-0 text-[#7b7b7b]">→</span>
                    Manage preferences
                  </a>
                </li>
              )}
            </ol>
          </nav>

          <div className="flex min-w-0 flex-col gap-12">
            {content.sections.map((s, i) => (
              <section key={s.id} id={s.id} className="flex scroll-mt-[120px] flex-col gap-4">
                <h2 className="font-mono text-[24px] font-medium leading-none tracking-[-0.77px] text-[#191919] md:text-[28px] md:tracking-[-0.9px]">
                  <span className="mr-2 text-[#1e3a8a]">{i + 1}.</span>
                  {s.title}
                </h2>
                {s.paragraphs.map((p) => (
                  <p key={p} className="text-body text-[#4a4a4a] md:text-[17px] md:leading-[1.45]">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="flex list-disc flex-col gap-2 pl-5 text-body text-[#4a4a4a] md:text-[17px] md:leading-[1.45]">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            {content.showPreferences && <PrivacyPreferencesForm />}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
