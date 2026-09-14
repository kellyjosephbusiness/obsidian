import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { APPLY_INTRO } from "./data";
import { LendTrackEmbed } from "./LendTrackEmbed";
import { Eyebrow } from "./PageHero";
import { Rails } from "./SectionFrame";

/** /apply — intro column plus the live LendTrack funding application in a white card. */
export function ApplyEmbed() {
  return (
    <section className="relative border-b border-[#e1e1e1] bg-[#f6f6f6] px-4 pt-[120px] pb-12 md:px-6 md:pt-[176px] md:pb-24 lg:px-16">
      <Rails width={1200} />
      <div className="relative mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="flex flex-col gap-4 lg:sticky lg:top-[116px] lg:gap-6 lg:self-start">
          <Eyebrow>{APPLY_INTRO.eyebrow}</Eyebrow>
          <h1 className="font-mono font-medium text-[#191919] text-[32px] leading-none tracking-[-0.032em] md:text-[48px] lg:text-[length:var(--h1-font-size)] lg:leading-[var(--h1-line-height)]">
            <span className="block">{APPLY_INTRO.headingLine1}</span>
            <span className="block">{APPLY_INTRO.headingLine2}</span>
          </h1>
          <p className="max-w-[520px] text-[15px] leading-[1.35] tracking-[-0.2px] text-[#4a4a4a] md:text-body-large">{APPLY_INTRO.sub}</p>
          <ul className="hidden flex-col gap-3 lg:flex">
            {APPLY_INTRO.bullets.map((b) => (
              <li key={b.text} className="flex items-center gap-3 text-[15px] leading-[1.2] tracking-[-0.2px] text-[#191919]">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#dde4f6] text-[#1e3a8a]">
                  <MaterialIcon name={b.icon} size={20} />
                </span>
                {b.text}
              </li>
            ))}
          </ul>
          <p className="hidden text-[14px] leading-[1.3] tracking-[-0.21px] text-[#4a4a4a] lg:block">
            {APPLY_INTRO.helpText}{" "}
            <a href={APPLY_INTRO.helpLink.href} className="font-medium text-[#1e3a8a] hover:underline">
              {APPLY_INTRO.helpLink.label}
            </a>
          </p>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-[#e1e1e1] bg-white p-2 shadow-[0_0_24px_0_rgba(25,25,25,0.05)] md:p-5">
          <LendTrackEmbed />
        </div>
      </div>
    </section>
  );
}
