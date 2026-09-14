import { ABOUT_MISSION } from "./data";
import { Rails } from "./SectionFrame";

/** Two-column mission block: sticky heading + pull quote on the left, three paragraphs on the right. */
export function MissionSection() {
  return (
    <section className="relative border-b border-[#e1e1e1] bg-[#f6f6f6] px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:py-24">
      <Rails width={1200} />
      <div className="relative mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="flex flex-col gap-6 lg:sticky lg:top-[116px] lg:self-start">
          <h2 className="font-mono font-medium text-[#191919] text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)]">
            {ABOUT_MISSION.heading}
          </h2>
          <p className="border-l-2 border-[#0376FD] pl-5 font-serif text-[22px] italic leading-[1.3] tracking-[-0.02em] text-[#191919] md:text-[26px]">
            {ABOUT_MISSION.pull}
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {ABOUT_MISSION.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "text-body-large text-[#191919] [&]:text-[#191919]" : "text-body-large text-[#4a4a4a]"}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
