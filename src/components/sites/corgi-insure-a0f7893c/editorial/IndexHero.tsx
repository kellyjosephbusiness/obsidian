import type { IndexHeroContent } from "./types";

/** Index hero: eyebrow, H1 and sub copy in the 1136px column; `pt-[150px] md:pt-[176px]` clears the fixed header. */
export function IndexHero({ eyebrow, heading, sub }: IndexHeroContent) {
  return (
    <section className="w-full px-4 pt-[150px] pb-12 md:px-6 md:pt-[176px] md:pb-16 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1136px] flex-col gap-6">
        <span className="text-[12px] leading-[18px] font-medium tracking-[0.08em] text-[#4a4a4a] uppercase">{eyebrow}</span>
        <h1 className="max-w-[860px] font-mono text-[length:var(--h1-font-size)] leading-[var(--h1-line-height)] font-medium tracking-[var(--h1-tracking)] text-[#191919]">
          {heading}
        </h1>
        <p className="max-w-[620px] text-body-large text-[#4e4e4e]">{sub}</p>
      </div>
    </section>
  );
}
