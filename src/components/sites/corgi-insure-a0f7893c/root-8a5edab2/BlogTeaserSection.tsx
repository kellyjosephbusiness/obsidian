import Link from "next/link";
import { articlesOfKind, toCard } from "@/components/sites/corgi-insure-a0f7893c/editorial/data";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { StippleGlyph } from "@/components/sites/corgi-insure-a0f7893c/shared/StippleGlyph";
import { BLOG_TEASER } from "./data";

/** The three most recent blog posts, newest first. */
const CARDS = articlesOfKind("blog").slice(0, 3).map(toCard);

/**
 * "Straight answers on small business funding." — the three newest blog posts as cards
 * (title, date, read time, one-line excerpt) with a "Read the blog" link. Exists so the home
 * page explains what the company actually does and points crawlers at the editorial library.
 */
export function BlogTeaserSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-[#e1e1e1] bg-[#f6f6f6] px-4 py-14 md:px-6 md:py-20 lg:px-16"
      aria-labelledby="blog-teaser-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[max(16px,calc((100vw-1600px)/2))] w-px bg-[#e1e1e1] md:left-[max(24px,calc((100vw-1600px)/2))] lg:left-[max(64px,calc((100vw-1600px)/2))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-[max(16px,calc((100vw-1600px)/2))] w-px bg-[#e1e1e1] md:right-[max(24px,calc((100vw-1600px)/2))] lg:right-[max(64px,calc((100vw-1600px)/2))]"
      />

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col gap-8 px-4 md:gap-10 md:px-6">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex flex-col gap-4">
            <h2
              id="blog-teaser-heading"
              className="mx-auto max-w-[20ch] font-medium font-mono text-[#191919] text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)] [text-wrap:balance]"
            >
              {BLOG_TEASER.heading}
            </h2>
            <p className="mx-auto max-w-[560px] text-body-large text-[#4a4a4a]">{BLOG_TEASER.sub}</p>
          </div>
          <Link
            href={BLOG_TEASER.cta.href}
            data-track="cta-homepage-blog"
            className="group inline-flex min-h-[44px] shrink-0 items-center gap-1.5 whitespace-nowrap rounded-[4px] text-[16px] font-medium leading-[1.2] tracking-[-0.24px] text-[#0160CC] hover:underline md:text-[18px]"
          >
            {BLOG_TEASER.cta.label}
            <MaterialIcon name="arrow_forward" size={20} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {CARDS.map((card) => (
            <li key={card.href} className="flex">
              <Link
                href={card.href}
                className="group flex w-full flex-col gap-5 rounded-[8px] border border-[#e1e1e1] bg-white p-5 shadow-[0_0_24px_0_rgba(25,25,25,0.05)] transition-colors hover:border-[#C2DBFE] md:p-6"
              >
                {card.coverIcon ? (
                  <span
                    aria-hidden
                    className="flex aspect-[5/2] w-full items-center justify-center overflow-hidden rounded-[8px] bg-[#DDEAFE] p-4 text-[#0160CC] transition-colors group-hover:bg-[#C2DBFE]"
                  >
                    <StippleGlyph name={card.coverIcon} size={80} sizes="80px" />
                  </span>
                ) : null}
                <div className="flex flex-1 flex-col gap-3">
                  <div className="flex items-center justify-between gap-3 text-[13px] leading-none tracking-[-0.1px] text-[#5c5c5c]">
                    <span>{card.date}</span>
                    <span>{card.readTime}</span>
                  </div>
                  <h3 className="font-mono text-[20px] font-medium leading-[1.15] tracking-[-0.02em] text-[#191919] transition-colors group-hover:text-[#0160CC] md:text-[22px]">
                    {card.title}
                  </h3>
                  <p className="line-clamp-3 text-[15px] leading-[1.45] tracking-[-0.2px] text-[#4a4a4a]">{card.excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
