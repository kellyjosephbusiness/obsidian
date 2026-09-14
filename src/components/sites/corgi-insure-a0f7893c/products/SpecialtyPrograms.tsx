import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import type { SpecializedCoverage } from "@/types/sites/corgi-insure-a0f7893c/home";
import { H2_CLASS, Hairlines, Rails } from "../directors-and-officers-f2860438/rails";
import { LINKS, SPECIALIZED_COVERAGES } from "../root-8a5edab2/data";
import { SPECIALTY_PROGRAMS_HEADER } from "./data";

/**
 * Every specialty program as a real grid (3 columns, 2 from `md`, compact rows on phones) instead
 * of the home page's flickable peek stack. Each card is a single link to the application.
 */
export function SpecialtyPrograms({ items = SPECIALIZED_COVERAGES }: { items?: SpecializedCoverage[] } = {}) {
  return (
    <section id="specialty" className="relative scroll-mt-[120px] border-b border-[#e1e1e1] bg-white px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:py-24">
      <Rails />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-6">
        <div className="flex flex-col items-center gap-6 px-4 text-center md:px-6">
          <h2 className={H2_CLASS}>{SPECIALTY_PROGRAMS_HEADER.heading}</h2>
          <p className="mx-auto max-w-[560px] text-body-large text-[#4a4a4a]">{SPECIALTY_PROGRAMS_HEADER.sub}</p>
        </div>
        <div className="relative">
          <Hairlines zIndex="z-0" />

          {/* Phones: one compact list card, a row per program. */}
          <ul className="relative z-10 flex flex-col divide-y divide-[#e1e1e1] overflow-hidden rounded-[8px] border border-[#e1e1e1] bg-white md:hidden">
            {items.map((item) => (
              <li key={item.title}>
                <Link
                  href={LINKS.apply}
                  className="group flex min-h-[72px] w-full items-center gap-4 px-4 py-3 transition-colors hover:bg-[#f6f6f6] active:bg-[#ededed]"
                >
                  <div className="relative size-14 shrink-0 overflow-hidden rounded-[8px] bg-[#f6f6f6]">
                    <Image alt="" aria-hidden src={item.image} fill sizes="56px" className="object-contain p-1.5" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <h3 className="text-[16px] font-bold leading-[1.2] tracking-[-0.24px] text-[#191919]">{item.title}</h3>
                    <p className="line-clamp-2 text-[13px] leading-[1.35] tracking-[-0.13px] text-[#5c5c5c]">{item.desc}</p>
                  </div>
                  <MaterialIcon name="chevron_right" size={22} className="shrink-0 text-[#5c5c5c] transition-colors group-hover:text-[#0160CC]" />
                </Link>
              </li>
            ))}
          </ul>

          {/* md and up: the card grid. */}
          <div className="relative z-10 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Link
                key={item.title}
                href={LINKS.apply}
                className="group flex flex-col overflow-hidden rounded-[8px] border border-[#e1e1e1] bg-white transition-colors hover:border-[#0376FD]"
              >
                <div className="relative h-[160px] w-full border-b border-[#e1e1e1] bg-[#f6f6f6]">
                  <Image alt="" aria-hidden src={item.image} fill sizes="384px" className="object-contain p-6" />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="text-[20px] font-bold leading-none tracking-[-0.64px] text-[#191919] group-hover:text-[#0160CC]">{item.title}</h3>
                  <p className="line-clamp-2 text-[14px] leading-[1.3] tracking-[-0.21px] text-[#4a4a4a]">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
