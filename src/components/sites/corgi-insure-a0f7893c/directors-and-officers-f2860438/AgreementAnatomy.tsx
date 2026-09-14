/* eslint-disable @next/next/no-img-element -- decorative connector SVG, plain <img> on the source site */
import { ASSETS } from "../root-8a5edab2/data";
import { ANATOMY, FORM_CODE, TERM_TILES } from "./data";
import { H2_CLASS, Hairlines, Rails } from "./rails";

const CONNECTOR = `${ASSETS}/images/cgl-anatomy-connector.svg`;

function Tile({ title, label, value }: { title: string; label: string; value: string }) {
  return (
    <div className="flex flex-col gap-[6px] px-2 md:gap-[14px]">
      <h3 className="-mx-2 w-fit bg-background px-2 font-bold text-[16px] leading-none tracking-[-0.51px] text-[#191919] md:text-[20px]">{title}</h3>
      <div className="flex flex-col items-start sm:flex-row sm:items-end sm:gap-[14px]">
        <span className="text-[12px] leading-[1.2] tracking-[-0.18px] text-[#4a4a4a]">{label}</span>
        <span className="font-medium text-[12px] leading-[1.2] tracking-[-0.18px] text-[#191919] md:text-[14px] md:tracking-[-0.21px]">{value}</span>
      </div>
    </div>
  );
}

/**
 * "What's Actually Inside Your Term Loan Agreement": full-viewport section with the small
 * agreement card on the left, a connector line, and two columns of three term tiles.
 */
export function AgreementAnatomy() {
  const left = TERM_TILES.slice(0, 3);
  const right = TERM_TILES.slice(3);
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-[#e1e1e1] px-4 py-16 md:px-6 lg:py-24">
      <Rails />
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-6">
        <div className="flex flex-col gap-6 px-4 md:px-6">
          <h2 className={H2_CLASS}>{ANATOMY.heading}</h2>
          <p className="text-body-large text-[#4a4a4a]">{ANATOMY.sub}</p>
        </div>
        <div className="relative">
          <Hairlines />
          <div className="overflow-hidden">
            <div className="flex flex-col items-center gap-6 p-4 md:gap-12 md:p-12 lg:flex-row lg:items-center lg:justify-center lg:gap-[120px] lg:p-16">
              <div className="relative flex shrink-0 flex-col items-start gap-3 md:gap-6 lg:pt-8">
                <img alt="" src={CONNECTOR} width={1411} height={230} className="pointer-events-none absolute top-[52px] left-[194px] hidden w-[1411px] max-w-none lg:block" />
                <div className="relative w-[218px]">
                  <div className="flex flex-col overflow-hidden bg-white p-3 shadow-[0_0_10px_0_rgba(25,25,25,0.25)]">
                    <div className="flex h-[253px] flex-col gap-3 border border-[#e1e1e1] p-3">
                      <div className="font-medium text-[12px] leading-none tracking-[-0.38px] text-[#b2b2b2]">FORM {FORM_CODE}</div>
                      <div className="h-px w-full bg-[#e1e1e1]" />
                      <div className="flex h-[120px] items-center justify-center">
                        <p className="text-center font-serif text-[24px] italic leading-none tracking-[-0.77px] text-[#b2b2b2]">{ANATOMY.formTitle}</p>
                      </div>
                      <div className="h-px w-full bg-[#e1e1e1]" />
                      <div className="flex flex-1 flex-col justify-between gap-2">
                        <div className="flex h-[7px] gap-2"><div className="w-[114px] bg-[#ddd]" /><div className="flex-1 bg-[#ddd]" /></div>
                        <div className="flex h-[7px] gap-2"><div className="w-[42px] bg-[#ddd]" /><div className="flex-1 bg-[#ddd]" /></div>
                        <div className="flex h-[7px] gap-2"><div className="w-[42px] bg-[#ddd]" /><div className="flex-1 bg-[#ddd]" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-first flex flex-col items-start whitespace-nowrap px-2 lg:order-none">
                  <span className="text-[12px] leading-[1.2] tracking-[-0.18px] text-[#4a4a4a]">{ANATOMY.formCaption.label}</span>
                  <span className="font-medium text-[12px] leading-[1.2] tracking-[-0.18px] text-[#191919] md:text-[14px] md:tracking-[-0.21px]">{ANATOMY.formCaption.value}</span>
                </div>
              </div>
              <div className="inline-grid grid-cols-[auto_auto] items-start gap-x-4 gap-y-6 md:gap-x-[60px] md:gap-y-12 lg:contents">
                <div className="relative z-10 flex shrink-0 flex-col gap-6 md:gap-12 md:whitespace-nowrap lg:gap-16">
                  {left.map((t) => <Tile key={t.title} {...t} />)}
                </div>
                <div className="relative z-10 flex shrink-0 flex-col gap-6 md:gap-12 md:whitespace-nowrap lg:gap-16">
                  {right.map((t) => <Tile key={t.title} {...t} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
