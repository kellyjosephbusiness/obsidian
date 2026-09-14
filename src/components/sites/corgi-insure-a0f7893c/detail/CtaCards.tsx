import { StippleGlyph } from "@/components/sites/corgi-insure-a0f7893c/shared/StippleGlyph";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import type { DetailCtaCard } from "@/types/sites/corgi-insure-a0f7893c/detail";
import { Frame } from "./frame";

/** Two side-by-side tinted CTA cards, centred like the feature cards above. */
export function CtaCards({ cards }: { cards: [DetailCtaCard, DetailCtaCard] }) {
  return (
    <Frame inner="grid grid-cols-1 gap-6 md:grid-cols-2">
      {cards.map((card) => (
        <article key={card.heading} className={`flex flex-col items-center gap-5 rounded-[8px] p-8 text-center md:p-10 ${card.tone === "light" ? "bg-[#DDEAFE]" : "bg-[#C2DBFE]"}`}>
          <div className="flex size-[88px] items-center justify-center rounded-[8px] bg-white text-[#0160CC]">
            <StippleGlyph name={card.icon} size={64} />
          </div>
          <h2 className="mx-auto font-mono text-[28px] font-medium leading-[1.05] tracking-[-0.03em] text-[#191919] md:text-[36px] [text-wrap:balance]">{card.heading}</h2>
          <p className="mx-auto max-w-[560px] text-[16px] leading-[1.5] tracking-[-0.24px] text-[#4a4a4a] md:text-[20px] md:tracking-[-0.3px]">{card.body}</p>
          <PressableButton variant="primary" size="small" href={card.cta.href} className="mt-auto pt-2">
            {card.cta.label}
          </PressableButton>
        </article>
      ))}
    </Frame>
  );
}
