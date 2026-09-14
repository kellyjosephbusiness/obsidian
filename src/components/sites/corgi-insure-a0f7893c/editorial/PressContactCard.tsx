import { InitialsAvatar } from "@/components/sites/corgi-insure-a0f7893c/shared/InitialsAvatar";
import { PRESS_CONTACT } from "./data";

/** Newsroom media-contact card: white card with hairline border, avatar, name / title and a mailto link. */
export function PressContactCard() {
  return (
    <section className="w-full px-4 pt-12 md:px-6 md:pt-16 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1136px] flex-col gap-6 rounded-[8px] border border-[#e1e1e1] bg-white p-6 shadow-[0_0_24px_0_rgba(25,25,25,0.05)] md:flex-row md:items-center md:justify-between md:p-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-mono text-[28px] leading-none font-medium tracking-tight text-[#191919] md:text-[36px]">{PRESS_CONTACT.heading}</h2>
          <p className="max-w-[560px] text-body text-[#4a4a4a]">{PRESS_CONTACT.body}</p>
        </div>
        <div className="flex items-center gap-4 md:shrink-0">
          <InitialsAvatar name={PRESS_CONTACT.name} className="size-12 rounded-full" textClassName="text-[16px]" />
          <div className="flex flex-col gap-0.5">
            <span className="text-body font-medium text-[#191919]">{PRESS_CONTACT.name}</span>
            <span className="text-sm tracking-tight text-[#4a4a4a]">{PRESS_CONTACT.title}</span>
            <a href={`mailto:${PRESS_CONTACT.email}`} className="text-sm font-medium tracking-tight text-[#1e3a8a] hover:underline">
              {PRESS_CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
