import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { FinancialFormMock } from "./FinancialFormMock";
import { GET_QUOTED } from "./data";

/**
 * "Apply in 15 minutes. A specialist finishes it with you." — one compact section used at every
 * width: heading, one paragraph, four proof bullets and a single "Apply now" button beside the
 * application-form screenshot card. Same grey background, rails and hairlines as its neighbours.
 */
export function GetQuotedSection() {
  return (
    <section
      className="relative overflow-clip border-b border-[#e1e1e1] bg-[#f6f6f6] px-4 py-10 md:px-6 md:py-16 lg:px-16"
      aria-labelledby="get-quoted-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[max(16px,calc((100vw-1600px)/2))] w-px bg-[#e1e1e1] md:left-[max(24px,calc((100vw-1600px)/2))] lg:left-[max(64px,calc((100vw-1600px)/2))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-[max(16px,calc((100vw-1600px)/2))] w-px bg-[#e1e1e1] md:right-[max(24px,calc((100vw-1600px)/2))] lg:right-[max(64px,calc((100vw-1600px)/2))]"
      />

      <div className="relative mx-auto w-full max-w-[1600px]">
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 h-px w-screen -translate-x-1/2 bg-[#e1e1e1]" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-[#e1e1e1]" />

        <div className="grid grid-cols-1 items-center gap-8 py-6 md:gap-10 md:py-8 lg:grid-cols-2 lg:gap-12 lg:py-10">
          {/* Copy */}
          <div className="flex flex-col gap-8 px-4 md:px-6">
            <div className="flex flex-col gap-5">
              <h2
                id="get-quoted-heading"
                className="max-w-[16ch] font-medium font-mono text-[#191919] text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)] [text-wrap:balance]"
              >
                {GET_QUOTED.heading}
              </h2>
              <p className="max-w-[560px] text-body-large text-[#4a4a4a]">{GET_QUOTED.body}</p>
            </div>

            <ul className="flex flex-col gap-3">
              {GET_QUOTED.proof.map((item) => (
                <li key={item.label} className="flex items-center gap-3 text-body font-medium text-[#191919]">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[#DDEAFE] text-[#0160CC]">
                    <MaterialIcon name={item.icon} size={18} />
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>

            <PressableButton variant="primary" size="large" href={GET_QUOTED.cta.href} className="w-full sm:w-fit" faceClassName="w-full gap-1" dataTrack="cta-homepage-apply">
              {GET_QUOTED.cta.label}
              <MaterialIcon name="arrow_forward" size={20} />
            </PressableButton>
          </div>

          {/* Application-form screenshot card */}
          <div className="@container relative overflow-clip rounded-[8px] border border-[#e1e1e1] bg-[#0268DE] shadow-[0_0_24px_0_rgba(25,25,25,0.05)]">
            <div className="relative aspect-[800/465] w-full overflow-clip p-[1.09cqw]">
              <div
                aria-hidden
                inert
                className="@container pointer-events-none absolute left-1/2 top-[9.7%] aspect-[701/778] w-[87.625%] -translate-x-1/2 select-none rounded-[1.63cqw] bg-[#f9f9f9] shadow-[0_0_1.63cqw_rgba(25,25,25,0.5)]"
              >
                <FinancialFormMock />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
