import { LOAN_NOTES, PLAIN_ENGLISH, SCENARIOS, SCENARIO_NOTES } from "./data";
import { H2_CLASS, Rails } from "./rails";

const DASHED = "h-px w-full bg-[length:8px_1px] bg-repeat-x bg-[image:linear-gradient(to_right,#e1e1e1_4px,transparent_4px)]";

/** Scenario table ("If this happens… / …your term loan works like this") plus footnotes. */
export function PlainEnglishTable() {
  return (
    <section className="relative bg-[#f6f6f6] px-4 pb-16 md:px-6 md:pb-20 lg:px-16 lg:pb-24">
      <Rails className="-top-px -bottom-px inset-y-auto" />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-6 pt-16 pb-6 md:pt-20 lg:pt-24">
        <div aria-hidden className="pointer-events-none absolute -top-px left-1/2 z-10 h-px w-screen max-w-[2400px] -translate-x-1/2 bg-[#e1e1e1]" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-px w-screen max-w-[2400px] -translate-x-1/2 bg-[#e1e1e1]" />
        <div className="flex flex-col gap-6 px-6">
          <h2 className={H2_CLASS}>{PLAIN_ENGLISH.heading}</h2>
          <p className="text-body-large text-[#4a4a4a]">{PLAIN_ENGLISH.sub}</p>
        </div>

        <div className="relative">
          <div className="relative z-10 flex flex-col rounded-[8px] border border-[#e1e1e1] bg-[#f6f6f6] shadow-[0_0_12px_rgba(25,25,25,0.05)]">
            <div className="flex items-center justify-between px-6 py-3 text-[12px] leading-[1.2] tracking-[-0.18px] text-[#4a4a4a]">
              <span>{PLAIN_ENGLISH.colLeft}</span>
              <span className="hidden lg:inline">{PLAIN_ENGLISH.colRight}</span>
            </div>
            <div className="overflow-hidden rounded-[8px] border-t border-[#e1e1e1] bg-white">
              {SCENARIOS.map((s, i) => (
                <div key={s.note} className={`flex flex-col lg:flex-row lg:items-stretch ${i > 0 ? "border-t border-[#e1e1e1]" : ""}`}>
                  <div className="flex flex-1 items-start p-5">
                    <p className="font-medium font-mono text-[20px] leading-none tracking-[-0.64px] text-[#4a4a4a] lg:text-[24px] lg:tracking-[-0.768px]">
                      {s.prompt}
                      <span className="ml-0.5 align-super text-[14px] text-[#0160CC] lg:text-[16px]">{s.note}</span>
                    </p>
                  </div>
                  <div className="flex w-full flex-col gap-4 border-t border-[#e1e1e1] p-5 lg:w-[400px] lg:border-t-0 lg:border-l">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold text-[20px] leading-none tracking-[-0.64px] text-[#191919]">{s.lead}</h3>
                      <p className="text-[14px] leading-[1.2] tracking-[-0.21px] text-[#4a4a4a]">{s.body}</p>
                    </div>
                    <div className={DASHED} />
                    <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-[12px] leading-[1.2] tracking-[-0.18px] text-[#4a4a4a]">{s.amountsLabel}</span>
                        <span className="font-medium text-[14px] leading-[1.2] tracking-[-0.21px] text-[#191919]">{s.amounts}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-6">
          <p className="font-medium text-[12px] leading-[1.2] tracking-[-0.18px] text-[#191919]">{PLAIN_ENGLISH.scenarioNotesTitle}</p>
          {SCENARIO_NOTES.map((note, i) => (
            <div key={note} className="flex items-baseline gap-2">
              <span className="w-[10px] shrink-0 text-[14px] leading-none text-[#0160CC] lg:text-[16px]">{i + 1}</span>
              <p className="text-[12px] leading-[1.2] tracking-[-0.18px] text-[#4a4a4a]">{note}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 px-6">
          <p className="font-medium text-[12px] leading-[1.2] tracking-[-0.18px] text-[#191919]">{PLAIN_ENGLISH.loanNotesTitle}</p>
          {LOAN_NOTES.map((note, i) => (
            <div key={note} className="flex items-start gap-2">
              <span className="mt-[5px] size-1.5 shrink-0 rounded-full bg-[#0376FD]" />
              <p className={`text-[12px] leading-[1.2] tracking-[-0.18px] text-[#4a4a4a] ${i === LOAN_NOTES.length - 1 ? "italic" : ""}`}>{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
