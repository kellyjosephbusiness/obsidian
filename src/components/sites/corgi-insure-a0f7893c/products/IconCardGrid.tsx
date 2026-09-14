import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import type { IconCard } from "@/types/sites/corgi-insure-a0f7893c/products";
import { H2_CLASS, Hairlines, Rails } from "../directors-and-officers-f2860438/rails";

interface IconCardGridProps {
  id?: string;
  heading: string;
  sub?: string;
  cards: IconCard[];
}

/** Heading + sub over a 1/3-column grid of white cards (navy icon disc, bold title, body). */
export function IconCardGrid({ id, heading, sub, cards }: IconCardGridProps) {
  return (
    <section id={id} className="relative scroll-mt-[120px] border-b border-[#e1e1e1] px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:py-24">
      <Rails />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-6">
        <div className="flex flex-col gap-6 px-4 md:px-6">
          <h2 className={H2_CLASS}>{heading}</h2>
          {sub && <p className="text-body-large text-[#4a4a4a]">{sub}</p>}
        </div>
        <div className="relative">
          <Hairlines zIndex="z-0" />
          <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {cards.map((card) => (
              <article key={card.title} className="flex flex-col gap-5 rounded-[8px] border border-[#e1e1e1] bg-white p-6 shadow-[0_0_24px_0_rgba(25,25,25,0.05)]">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-[#DDEAFE]">
                  <MaterialIcon name={card.icon} size={24} className="text-[#0160CC]" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[20px] font-bold leading-none tracking-[-0.64px] text-[#191919]">{card.title}</h3>
                  <p className="text-[14px] leading-[1.3] tracking-[-0.21px] text-[#4a4a4a]">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
