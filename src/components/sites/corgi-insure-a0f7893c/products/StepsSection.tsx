import type { Step } from "@/types/sites/corgi-insure-a0f7893c/products";
import { H2_CLASS, Hairlines, Rails } from "../directors-and-officers-f2860438/rails";

interface StepsSectionProps {
  id?: string;
  heading: string;
  sub?: string;
  items: Step[];
}

/** Numbered steps in a hairline-divided card grid (1 / 2 / 4 columns). */
export function StepsSection({ id, heading, sub, items }: StepsSectionProps) {
  return (
    <section id={id} className="relative scroll-mt-[120px] border-b border-[#e1e1e1] px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:py-24">
      <Rails />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-6">
        <div className="flex flex-col items-center gap-6 px-4 text-center md:px-6">
          <h2 className={H2_CLASS}>{heading}</h2>
          {sub && <p className="mx-auto max-w-[560px] text-body-large text-[#4a4a4a]">{sub}</p>}
        </div>
        <div className="relative">
          <Hairlines zIndex="z-0" />
          <ol className="relative z-10 grid grid-cols-1 gap-px overflow-clip rounded-[8px] border border-[#e1e1e1] bg-[#e1e1e1] md:grid-cols-2 lg:grid-cols-4">
            {items.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-5 bg-white p-6">
                <span className="font-mono text-[40px] font-medium leading-none tracking-[-1.28px] text-[#0160CC]">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[20px] font-bold leading-none tracking-[-0.64px] text-[#191919]">{step.title}</h3>
                  <p className="text-[14px] leading-[1.3] tracking-[-0.21px] text-[#4a4a4a]">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
