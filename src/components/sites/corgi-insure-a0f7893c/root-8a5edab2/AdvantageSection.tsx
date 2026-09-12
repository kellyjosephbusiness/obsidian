import { CorgiPlatformCard } from "./CorgiPlatformCard";
import { LegacyCarriersCard } from "./LegacyCarriersCard";
import { ADVANTAGE } from "./data";

/**
 * "Our Unique Advantage": dark section with vertical rails, centered heading
 * and a two-column card grid (Legacy Insurance Carriers vs. Corgi).
 */
export function AdvantageSection() {
  return (
    <section className="relative overflow-hidden border-[#585858] border-b bg-[#313131] pb-10 md:pb-12 lg:pb-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[max(16px,calc((100vw-1600px)/2))] w-px bg-[#585858] md:left-[max(48px,calc((100vw-1600px)/2))] lg:left-[max(64px,calc((100vw-1600px)/2))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-[max(16px,calc((100vw-1600px)/2))] w-px bg-[#585858] md:right-[max(48px,calc((100vw-1600px)/2))] lg:right-[max(64px,calc((100vw-1600px)/2))]"
      />
      <div className="flex flex-col items-center px-4 pt-10 pb-4 md:px-12 md:pt-14 md:pb-6 lg:px-16 lg:pt-16">
        <h2 className="text-center font-medium font-mono text-[length:var(--h2-font-size)] text-white leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)]">
          {ADVANTAGE.heading}
        </h2>
      </div>
      <div className="border-[#585858] border-y px-4 md:px-12 lg:px-16">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-6 md:grid-cols-2">
          <LegacyCarriersCard />
          <CorgiPlatformCard />
        </div>
      </div>
    </section>
  );
}
