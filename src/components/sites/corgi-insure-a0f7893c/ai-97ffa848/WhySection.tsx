import type { ThreeUpBandContent } from "@/types/sites/corgi-insure-a0f7893c/industry-ai";
import { AI_WHY } from "./data";

/**
 * Full-viewport "why" band (site: /ai section 2): two-tone two-line H2 inside a 1128px container with
 * vertical rails, then three bordered columns (title 28px + body) framed by full-bleed hairlines.
 * `ScenariosSection` reuses the same band with different content.
 */
export interface WhySectionProps {
  content?: ThreeUpBandContent;
  id?: string;
}

export function WhySection({ content = AI_WHY, id }: WhySectionProps = {}) {
  return (
    <section
      id={id}
      className="relative flex min-h-screen scroll-mt-28 items-center overflow-hidden border-[#e1e1e1] border-t border-b bg-background px-4 py-16 md:px-6 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[max(16px,calc((100vw-1128px)/2))] w-px bg-[#e1e1e1] md:left-[max(24px,calc((100vw-1128px)/2))] lg:left-[max(64px,calc((100vw-1128px)/2))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-[max(16px,calc((100vw-1128px)/2))] w-px bg-[#e1e1e1] md:right-[max(24px,calc((100vw-1128px)/2))] lg:right-[max(64px,calc((100vw-1128px)/2))]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1128px] flex-col gap-6">
        <div className="px-6">
          <h2 className="font-mono font-normal text-[#191919] text-[34px] leading-none tracking-[-1.088px] md:text-[42px] md:tracking-[-1.344px] lg:text-[48px] lg:tracking-[-1.536px]">
            <span className="block">{content.headingLine1}</span>
            <span className="block text-[#b1b1b1]">{content.headingLine2}</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3">
          <div aria-hidden className="-translate-x-1/2 pointer-events-none absolute top-0 left-1/2 h-px w-screen bg-[#e1e1e1]" />
          <div aria-hidden className="-translate-x-1/2 pointer-events-none absolute bottom-0 left-1/2 h-px w-screen bg-[#e1e1e1]" />
          {content.items.map((item) => (
            <div
              key={item.title}
              className="min-h-[256px] border-[#e1e1e1] border-b p-6 last:border-b-0 md:min-h-[320px] md:border-r md:border-b-0 md:last:border-r-0"
            >
              <div className="flex flex-col gap-3">
                <h3 className="font-mono font-normal text-[#191919] text-[24px] leading-none tracking-[-0.768px] md:text-[28px] md:tracking-[-0.896px]">
                  {item.title}
                </h3>
                <p className="text-body text-[#4e4e4e]">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
