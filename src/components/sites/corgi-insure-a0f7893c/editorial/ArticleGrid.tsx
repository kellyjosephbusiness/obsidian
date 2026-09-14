import Link from "next/link";
import { StippleGlyph } from "@/components/sites/corgi-insure-a0f7893c/shared/StippleGlyph";
import type { ArticleCard } from "./types";

export interface ArticleGridProps {
  label: string;
  articles: ArticleCard[];
  /** Message shown when the (filtered) list is empty. */
  emptyText?: string;
}

/**
 * Prop-driven variant of the press release's `LatestArticles`: an uppercase label row above a 2-column grid of
 * hairline-separated white cards (1px #e1e1e1 grid gap on a tinted wrapper); the whole card turns primary on hover.
 * Cards with a `coverIcon` open with a navy-tint cover block carrying the matching stipple illustration.
 */
export function ArticleGrid({ label, articles, emptyText = "No articles match that tag yet." }: ArticleGridProps) {
  return (
    <section className="relative z-10 w-full overflow-hidden border-t border-b border-[#e1e1e1] px-4 py-4 md:px-6 md:py-6 lg:p-16">
      <div className="relative mx-auto flex max-w-[1600px] flex-col gap-6">
        <div aria-hidden className="pointer-events-none absolute -top-[9999px] -bottom-[9999px] left-0 w-px bg-[#e1e1e1]" />
        <div aria-hidden className="pointer-events-none absolute -top-[9999px] -bottom-[9999px] right-0 w-px bg-[#e1e1e1]" />
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 h-px w-[2400px] -translate-x-1/2 bg-[#e1e1e1]" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[2400px] -translate-x-1/2 bg-[#e1e1e1]" />

        <div className="relative flex flex-col rounded-t-[8px] border-x border-t border-[#e1e1e1]">
          <div className="px-6 py-3">
            <span className="text-[12px] leading-[18px] tracking-tight text-[#4a4a4a] uppercase">{label}</span>
          </div>
          <div className="overflow-hidden rounded-[8px] bg-[#e1e1e1] py-px">
            {articles.length === 0 ? (
              <div className="rounded-[8px] bg-white p-6">
                <p className="text-body text-[#4a4a4a]">{emptyText}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[8px] md:grid-cols-2">
                {articles.map((article) => (
                  <Link key={article.href} href={article.href} className="group flex flex-col gap-5 bg-white p-6 transition-colors hover:bg-gray-50">
                    {article.coverIcon ? (
                      <div
                        aria-hidden
                        className="flex aspect-[5/2] w-full items-center justify-center overflow-hidden rounded-[8px] bg-[#DDEAFE] p-4 text-[#0160CC] transition-colors group-hover:bg-[#C2DBFE]"
                      >
                        <StippleGlyph name={article.coverIcon} size={96} />
                      </div>
                    ) : null}
                    <div className="flex flex-1 flex-col gap-3">
                      <div className="flex items-center justify-between text-sm tracking-tight text-[#4a4a4a] transition-colors group-hover:text-[#0160CC]">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="font-mono text-[24px] leading-none tracking-tight text-[#191919] transition-colors group-hover:text-[#0160CC] md:text-[28px] lg:text-[32px]">
                          {article.title}
                        </h3>
                        <p className="leading-snug tracking-tight text-[#4a4a4a] transition-colors group-hover:text-[#0160CC]">{article.excerpt}</p>
                      </div>
                      <div className="mt-auto h-px w-full bg-[#e1e1e1] transition-colors group-hover:bg-[#0376FD]" />
                      <p className="text-sm tracking-tight text-[#191919] transition-colors group-hover:text-[#0160CC]">{article.author}</p>
                    </div>
                  </Link>
                ))}
                {articles.length % 2 === 1 ? <div aria-hidden className="hidden bg-white md:block" /> : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
