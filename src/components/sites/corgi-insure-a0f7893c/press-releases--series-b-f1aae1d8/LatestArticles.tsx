import Link from "next/link";
import { LATEST_ARTICLES, LATEST_LABEL } from "./data";

/**
 * "LATEST ARTICLES" 2x2 card grid: hairline-separated white cards (1px #e1e1e1 grid gap on a tinted
 * wrapper), whole card tints and turns primary on hover. Full-bleed rails at the container edges.
 */
export function LatestArticles() {
  return (
    <section className="relative z-10 w-full overflow-hidden border-t border-b border-[#e1e1e1] px-4 py-4 md:px-6 md:py-6 lg:p-16">
      <div className="relative mx-auto flex max-w-[1600px] flex-col gap-6">
        <div aria-hidden className="pointer-events-none absolute -top-[9999px] -bottom-[9999px] left-0 w-px bg-[#e1e1e1]" />
        <div aria-hidden className="pointer-events-none absolute -top-[9999px] -bottom-[9999px] right-0 w-px bg-[#e1e1e1]" />
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 h-px w-[2400px] -translate-x-1/2 bg-[#e1e1e1]" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[2400px] -translate-x-1/2 bg-[#e1e1e1]" />

        <div className="relative flex flex-col rounded-t-[8px] border-x border-t border-[#e1e1e1]">
          <div className="px-6 py-3">
            <span className="text-[12px] leading-[18px] tracking-tight text-[#4a4a4a] uppercase">{LATEST_LABEL}</span>
          </div>
          <div className="overflow-hidden rounded-[8px] bg-[#e1e1e1] py-px">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[8px] md:grid-cols-2">
              {LATEST_ARTICLES.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group flex items-center bg-white p-6 transition-colors hover:bg-gray-50"
                >
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="flex items-center justify-between text-sm tracking-tight text-[#4a4a4a] transition-colors group-hover:text-[#1e3a8a]">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-mono text-[24px] leading-none tracking-tight text-[#191919] transition-colors group-hover:text-[#1e3a8a] md:text-[28px] lg:text-[32px]">
                        {article.title}
                      </h3>
                      <p className="leading-snug tracking-tight text-[#4a4a4a] transition-colors group-hover:text-[#1e3a8a]">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="h-px w-full bg-[#e1e1e1] transition-colors group-hover:bg-[#1e3a8a]" />
                    <p className="text-sm tracking-tight text-[#191919] transition-colors group-hover:text-[#1e3a8a]">{article.author}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
