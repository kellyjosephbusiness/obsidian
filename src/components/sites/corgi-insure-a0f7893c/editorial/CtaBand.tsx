import { ArrowRightIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/EditorialIcons";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";

export interface CtaBandProps {
  heading: string;
  sub: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

/** Closing CTA for index pages: a dark rounded card in the 1136px column with primary / white pressable buttons. */
export function CtaBand({ heading, sub, primary, secondary }: CtaBandProps) {
  return (
    <section className="w-full px-4 py-12 md:px-6 md:py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1136px] rounded-[8px] bg-[#191919] p-6 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="font-mono text-[28px] leading-none font-medium tracking-tight text-white md:text-[36px]">{heading}</h2>
            <p className="max-w-[560px] text-body text-[#a0a0a0]">{sub}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
            {secondary ? (
              <PressableButton href={secondary.href} variant="white" size="large">
                {secondary.label}
              </PressableButton>
            ) : null}
            <PressableButton href={primary.href} variant="primary" size="large" faceClassName="gap-1">
              {primary.label}
              <ArrowRightIcon className="h-4 w-4" />
            </PressableButton>
          </div>
        </div>
      </div>
    </section>
  );
}
