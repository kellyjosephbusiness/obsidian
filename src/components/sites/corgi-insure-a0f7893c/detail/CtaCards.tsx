import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import type { DetailCtaCard } from "@/types/sites/corgi-insure-a0f7893c/detail";
import { Frame } from "./frame";

/** Two side-by-side tinted CTA cards. */
export function CtaCards({ cards }: { cards: [DetailCtaCard, DetailCtaCard] }) {
  return (
    <Frame inner="grid grid-cols-1 gap-6 md:grid-cols-2">
      {cards.map((card) => (
        <article key={card.heading} className={`flex flex-col items-start gap-5 rounded-[24px] p-8 md:p-10 ${card.tone === "light" ? "bg-[#dde4f6]" : "bg-[#c5d1f0]"}`}>
          <MaterialIcon name={card.icon} size={44} className="text-[#1e3a8a]" />
          <h2 className="font-mono text-[28px] font-medium leading-[1.05] tracking-[-0.03em] text-[#191919] md:text-[36px]">{card.heading}</h2>
          <p className="text-[16px] leading-[1.5] tracking-[-0.24px] text-[#4a4a4a] md:text-[20px] md:tracking-[-0.3px]">{card.body}</p>
          <PressableButton variant="primary" size="small" href={card.cta.href} className="mt-auto pt-2">
            {card.cta.label}
          </PressableButton>
        </article>
      ))}
    </Frame>
  );
}
