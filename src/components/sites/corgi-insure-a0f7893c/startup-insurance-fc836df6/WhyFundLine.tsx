import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import type { WhyCard } from "@/types/sites/corgi-insure-a0f7893c/startup-loans";
import { WHY_CARDS, WHY_HEADER } from "./data";

/**
 * "Why Startups Choose FundLine": heading + three dark (#313131) cards with a coloured round
 * icon tile, inside the 1200px railed container with full-bleed hairlines above/below the grid.
 */
export function WhyFundLine({ cards = WHY_CARDS }: { cards?: WhyCard[] } = {}) {
  return (
    <section className="relative overflow-hidden border-[#e1e1e1] border-b bg-[#f6f6f6] px-4 py-16 md:px-6 lg:px-16">
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-12">
        <div aria-hidden className="pointer-events-none absolute -top-16 -bottom-16 left-0 w-px bg-[#e1e1e1]" />
        <div aria-hidden className="pointer-events-none absolute -top-16 -bottom-16 right-0 w-px bg-[#e1e1e1]" />

        <div className="flex flex-col px-4 md:px-6">
          <h2 className="font-medium font-mono text-[#191919] text-[length:var(--h2-font-size)] leading-none tracking-[-0.032em]">
            {WHY_HEADER.heading}
          </h2>
        </div>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
          <div aria-hidden className="-translate-x-1/2 pointer-events-none absolute top-0 left-1/2 h-px w-[200vw] bg-[#e1e1e1]" />
          <div aria-hidden className="-translate-x-1/2 pointer-events-none absolute bottom-0 left-1/2 h-px w-[200vw] bg-[#e1e1e1]" />
          {cards.map((card) => (
            <div key={card.title} className="flex flex-col items-start justify-center gap-5 overflow-hidden rounded-[8px] bg-[#313131] p-5">
              <div className={`flex size-9 items-center justify-center rounded-[8px] ${card.tileClass}`}>
                <MaterialIcon name={card.icon} size={24} className={card.iconClass} />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-mono text-[24px] text-white leading-none tracking-[-0.032em]">{card.title}</h3>
                <p className="text-[#dddddd] text-[14px] leading-[1.2] tracking-[-0.015em]">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
