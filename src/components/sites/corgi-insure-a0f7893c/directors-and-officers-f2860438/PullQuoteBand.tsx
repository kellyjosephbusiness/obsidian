import { PULL_QUOTE } from "./data";
import { Rails } from "./rails";

/** Dark rounded band with two concentric hairline circles and a 40px F37 Bolton statement. */
export function PullQuoteBand() {
  return (
    <section className="relative border-t border-[#e1e1e1] px-4 pt-16 md:px-6 md:pt-20 lg:px-16 lg:pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-16 h-px bg-[#e1e1e1] md:top-20 lg:top-24" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#e1e1e1]" />
      <Rails width={1600} />
      <div className="mx-auto max-w-[1600px]">
        <div className="relative overflow-hidden rounded-[8px] bg-[#313131] px-6 py-16 md:px-12 lg:px-16">
          <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 size-[1053px] -translate-x-1/2 rounded-full border border-[#585858]" />
          <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 size-[1600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#585858]" />
          <p className="relative z-10 font-mono text-[28px] leading-none tracking-[-0.032em] text-white md:text-[32px] lg:text-[40px]">{PULL_QUOTE}</p>
        </div>
      </div>
    </section>
  );
}
