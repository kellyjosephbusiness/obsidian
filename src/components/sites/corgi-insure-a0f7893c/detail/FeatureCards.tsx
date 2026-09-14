import { StippleGlyph } from "@/components/sites/corgi-insure-a0f7893c/shared/StippleGlyph";
import type { DetailPageContent } from "@/types/sites/corgi-insure-a0f7893c/detail";
import { BODY, Frame, H2, Sup } from "./frame";

/** Centered two-line heading + sub, then three tinted cards with a stipple glyph, title and body. */
export function FeatureCards({ features }: { features: DetailPageContent["features"] }) {
  return (
    <Frame inner="flex flex-col gap-10 md:gap-14">
      <div className="mx-auto flex max-w-[880px] flex-col items-center gap-5 text-center">
        <h2 className={H2}>
          {features.headingLine1}
          <br />
          {features.headingLine2}
        </h2>
        <p className={`${BODY} max-w-[760px]`}>{features.sub}</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.cards.map((card) => (
          <article key={card.title} className="group flex flex-col items-center gap-6 rounded-[8px] bg-[#DDEAFE] p-8 text-center md:p-10">
            <div className="flex size-[88px] items-center justify-center rounded-[8px] bg-white text-[#0160CC] shadow-[0_0_24px_0_rgba(25,25,25,0.06)] transition-transform duration-300 group-hover:scale-105">
              <StippleGlyph name={card.icon} size={64} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-mono text-[26px] font-medium leading-[1.05] tracking-[-0.03em] text-[#191919] md:text-[30px]">{card.title}</h3>
              <p className="text-[16px] leading-[1.5] tracking-[-0.24px] text-[#4a4a4a] md:text-[18px]">
                <Sup text={card.body} />
              </p>
            </div>
          </article>
        ))}
      </div>
    </Frame>
  );
}
