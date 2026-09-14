import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import type { ProcessStep } from "@/types/sites/corgi-insure-a0f7893c/company";
import { Reveal } from "./Reveal";

/** Four numbered step cards (apply → match → compare → fund), 2-up at md and 4-up at lg. */
export function StepsSection({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
      {steps.map((step, i) => (
        <Reveal key={step.number} index={i} className="flex">
          <li className="flex w-full flex-col gap-6 rounded-[8px] border border-[#e1e1e1] bg-white p-6 shadow-[0_0_24px_0_rgba(25,25,25,0.05)] md:p-8">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[40px] font-medium leading-none tracking-[-0.04em] text-[#0160CC] md:text-[48px]">{step.number}</span>
              <span className="flex size-12 items-center justify-center rounded-[8px] bg-[#DDEAFE] text-[#0160CC]">
                <MaterialIcon name={step.icon} size={24} />
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-mono text-[26px] font-medium leading-[1.05] tracking-[-0.03em] text-[#191919] md:text-[28px]">{step.title}</h3>
              <p className="text-body text-[#4a4a4a]">{step.description}</p>
            </div>
            <ul className="mt-auto flex flex-col gap-2 border-t border-[#e1e1e1] pt-5">
              {step.facts.map((fact) => (
                <li key={fact} className="flex items-start gap-2 text-[14px] leading-[1.3] tracking-[-0.21px] text-[#191919]">
                  <MaterialIcon name="check" size={18} className="mt-px shrink-0 text-[#0160CC]" weight={600} />
                  {fact}
                </li>
              ))}
            </ul>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
