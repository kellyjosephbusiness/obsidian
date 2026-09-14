import Link from "next/link";
import { READING, READING_CARDS } from "./data";
import { H2_CLASS, Hairlines, Rails } from "./rails";

/** "Continue Reading": 2×2 grid of article links separated by 1px hairlines. */
export function ContinueReading() {
  return (
    <section className="relative px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:py-24">
      <Rails />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-6">
        <div className="flex flex-col gap-6 px-6">
          <h2 className={H2_CLASS}>{READING.heading}</h2>
          <p className="text-body-large text-[#4a4a4a]">{READING.sub}</p>
        </div>
        <div className="relative">
          <Hairlines zIndex="z-0" />
          <div className="relative z-10 grid grid-cols-1 gap-px overflow-clip rounded-[8px] border border-[#e1e1e1] bg-[#e1e1e1] md:grid-cols-2">
            {READING_CARDS.map((card) => (
              <Link key={card.href} href={card.href} className="group flex flex-col gap-6 bg-white p-6 transition-colors hover:bg-gray-50">
                <h3 className="font-mono text-[24px] leading-none tracking-[-1.024px] text-[#191919] transition-colors group-hover:text-[#1e3a8a] md:text-[32px]">{card.title}</h3>
                <div className="mt-auto h-px w-full bg-[#e1e1e1]" />
                <div className="flex items-center justify-between gap-3 whitespace-nowrap text-[14px] leading-[21px] tracking-[-0.21px] text-[#4a4a4a]">
                  <span>{card.source}</span>
                  <span>{card.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
