import Image from "next/image";
import { COMPARE, COMPARE_CARDS } from "./data";
import { H2_CLASS, Hairlines, Rails } from "./rails";

/** "How Term Loans Compare": three stacked cards with an illustrated left cell and labelled rows. */
export function CompareSection() {
  return (
    <section className="relative px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:py-24">
      <Rails />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-6">
        <div className="flex flex-col gap-6 px-6">
          <h2 className={H2_CLASS}>{COMPARE.heading}</h2>
          <p className="text-body-large text-[#4a4a4a]">{COMPARE.sub}</p>
        </div>
        <div className="relative flex flex-col gap-3">
          <Hairlines zIndex="z-0" />
          {COMPARE_CARDS.map((card) => (
            <article key={card.title} className="relative z-10 flex items-stretch overflow-hidden rounded-[8px] border border-[#e1e1e1] bg-white shadow-[0_0_24px_0_rgba(25,25,25,0.05)]">
              <div className="relative w-[110px] shrink-0 self-stretch sm:w-[180px] md:w-[250px]">
                <div className="relative h-full w-full overflow-hidden rounded-tr-[8px] rounded-br-[8px]">
                  <Image alt="" src={card.image} fill sizes="250px" className="object-contain p-3" />
                </div>
                <div aria-hidden className="pointer-events-none absolute top-0 right-0 size-[16px] rounded-tr-[8px] border-t border-r border-[#e1e1e1]" />
                <div aria-hidden className="pointer-events-none absolute top-[16px] right-0 bottom-[16px] w-px bg-[#e1e1e1]" />
                <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 size-[16px] rounded-br-[8px] border-r border-b border-[#e1e1e1]" />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4 md:p-6">
                <h3 className="font-mono text-[18px] leading-none tracking-[-0.58px] text-[#191919] md:text-[24px] md:tracking-[-0.77px]">{card.title}</h3>
                <p className="text-[14px] leading-[1.2] tracking-[-0.21px] text-[#4a4a4a] md:text-[16px] md:tracking-[-0.24px]">
                  {card.rows.map((row, i) => (
                    <span key={row.label}>
                      <span className="font-medium text-[#191919]">{row.label}</span> {row.text}
                      {i < card.rows.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
