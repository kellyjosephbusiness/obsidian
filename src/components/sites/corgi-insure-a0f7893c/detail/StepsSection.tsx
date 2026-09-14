import type { DetailAppMock, DetailPageContent } from "@/types/sites/corgi-insure-a0f7893c/detail";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { BODY, Frame, H2, Sup } from "./frame";

function AppMock({ mock }: { mock: DetailAppMock }) {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div aria-hidden className="absolute -left-10 top-16 size-[380px] rounded-[8px] bg-[#c5d1f0] md:-left-16 md:size-[460px]" />
      <div className="relative ml-auto w-[88%] overflow-hidden rounded-[8px] border border-[#e1e1e1] bg-white shadow-[0_0_24px_0_rgba(25,25,25,0.12)]">
        <div className="flex items-center justify-between bg-[#1e3a8a] px-4 py-3 text-white">
          <span className="flex items-center gap-2 text-[13px] font-medium">
            <MaterialIcon name="menu" size={18} />
            {mock.businessName}
          </span>
          <span className="flex items-center gap-2 opacity-80">
            <MaterialIcon name="notifications" size={18} />
            <MaterialIcon name="settings" size={18} />
            <MaterialIcon name="account_circle" size={18} />
          </span>
        </div>
        <div className="flex flex-col gap-2 bg-[#f6f6f6] px-4 py-4">
          <span className="font-mono text-[24px] font-medium leading-none text-[#191919]">
            {mock.available} <span className="text-[14px] font-normal text-[#4a4a4a]">of {mock.limit}</span>
          </span>
          <span className="text-[12px] text-[#4a4a4a]">{mock.availableLabel}</span>
          <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-[#e1e1e1]">
            <div className="h-full w-[18%] rounded-full bg-[#1e3a8a]" />
          </div>
          <span className="mt-2 font-mono text-[18px] font-medium leading-none text-[#191919]">{mock.balance}</span>
          <span className="text-[12px] text-[#4a4a4a]">{mock.balanceLabel}</span>
        </div>
        <div className="flex flex-col gap-3 px-4 py-4">
          <div className="flex h-10 items-center justify-center rounded-[4px] bg-[#1e3a8a] text-[13px] font-medium text-white">{mock.primaryAction}</div>
          <div className="flex flex-col divide-y divide-[#e1e1e1] text-[12px]">
            {mock.rows.map((row) => (
              <div key={row.label} className="flex items-center justify-between py-2">
                <span className="text-[#4a4a4a]">{row.label}</span>
                <span className="font-medium text-[#191919]">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** "Get started" heading + app mock on a tinted circle (left) and three numbered steps (right). */
export function StepsSection({ steps }: { steps: DetailPageContent["steps"] }) {
  return (
    <Frame tone="white" inner="flex flex-col gap-12 md:gap-16">
      <h2 className={H2}>{steps.heading}</h2>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <AppMock mock={steps.mock} />
        <ol className="flex flex-col divide-y divide-[#e1e1e1]">
          {steps.items.map((step, i) => (
            <li key={step.title} className="flex gap-5 py-6 md:gap-7 md:py-8">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-[8px] border-2 border-[#1e3a8a] font-mono text-[20px] font-medium text-[#1e3a8a]">{i + 1}</span>
              <div className="flex flex-col gap-3">
                <h3 className="font-mono text-[24px] font-medium leading-[1.05] tracking-[-0.03em] text-[#191919] md:text-[30px]">{step.title}</h3>
                <p className={BODY}>
                  <Sup text={step.body} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Frame>
  );
}
