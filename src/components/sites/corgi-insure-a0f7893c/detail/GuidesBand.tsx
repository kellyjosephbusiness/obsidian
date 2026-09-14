import Link from "next/link";
import { StippleGlyph } from "@/components/sites/corgi-insure-a0f7893c/shared/StippleGlyph";
import type { DetailPageContent } from "@/types/sites/corgi-insure-a0f7893c/detail";
import { Frame } from "./frame";

/** Dark band: centred heading + sub, three white guide cards under a tinted stipple cover. */
export function GuidesBand({ guides }: { guides: DetailPageContent["guides"] }) {
  return (
    <Frame tone="dark" inner="flex flex-col gap-10 md:gap-14">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="mx-auto font-mono font-medium text-white text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)] [text-wrap:balance]">{guides.heading}</h2>
        <p className="mx-auto max-w-[560px] text-[16px] leading-[1.5] tracking-[-0.24px] text-[#d9d9d9] md:text-[20px] md:tracking-[-0.3px]">{guides.sub}</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {guides.cards.map((card) => (
          <Link key={card.title} href={card.href} className="group flex flex-col overflow-hidden rounded-[8px] bg-white transition-transform duration-300 hover:-translate-y-1">
            <div className="flex h-[150px] items-center justify-center bg-[#DDEAFE] text-[#0160CC]">
              <StippleGlyph name={card.icon} size={84} />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6 pb-8">
              <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-[#0160CC]">{card.tag}</span>
              <h3 className="font-mono text-[24px] font-medium leading-[1.1] tracking-[-0.03em] text-[#191919] md:text-[28px]">{card.title}</h3>
              <p className="text-[16px] leading-[1.5] tracking-[-0.24px] text-[#4a4a4a]">{card.body}</p>
              <span className="mt-auto pt-4 text-[15px] font-medium text-[#0160CC] underline-offset-4 group-hover:underline">Read more</span>
            </div>
          </Link>
        ))}
      </div>
    </Frame>
  );
}
