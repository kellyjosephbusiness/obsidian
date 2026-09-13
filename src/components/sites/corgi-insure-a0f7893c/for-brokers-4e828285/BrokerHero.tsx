import Image from "next/image";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { BROKER_HERO } from "./data";

/** Orange-tinted decorative PNG art is shifted onto the navy palette (same treatment as the home journey cards). */
const NAVY_TINT = { filter: "hue-rotate(195deg) saturate(0.85)" } as const;

/**
 * Broker hero (source: corgi.insure/for-brokers top section). Centered 940px column — H1, sub,
 * two small pressable buttons — with the hand-with-pen art off the left edge (md+) and the
 * "approved" stamp off the right edge (md+). Section is 480px tall at 1440 (pt 158 / pb 64).
 */
export function BrokerHero() {
  return (
    <section
      id="apply"
      className="relative flex items-center justify-center overflow-hidden border-b border-[#e1e1e1] px-4 pb-16 pt-[158px] md:px-6 lg:px-16"
      style={{ scrollMarginTop: "var(--navbar-height, 55px)" }}
    >
      {/* Hand with pen: mirrored, hanging off the left edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-86px] top-[calc(50%+48px)] hidden w-[520px] -translate-y-1/2 scale-x-[-1] md:block lg:left-[-88px] lg:w-[620px]"
      >
        <Image
          alt=""
          src={BROKER_HERO.art.hand}
          width={694}
          height={520}
          sizes="(min-width: 1024px) 620px, 520px"
          className="h-auto w-full object-contain"
          priority
        />
      </div>

      {/* "Approved" stamp: rotated, hanging off the right edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-72px] top-[calc(50%+47px)] hidden aspect-[514.433/481.654] w-[350px] -translate-y-1/2 items-center justify-center md:flex lg:right-[-52px] lg:w-[430px]"
      >
        <div className="relative h-[83.38%] w-[86.22%] rotate-[-11.45deg]">
          <Image
            alt=""
            src={BROKER_HERO.art.stamp}
            width={444}
            height={401}
            sizes="(min-width: 1024px) 371px, 302px"
            className="h-full w-full object-fill"
            style={NAVY_TINT}
            priority
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[940px] flex-col items-center gap-6 px-4 text-center md:px-8">
        <h1 className="text-balance font-mono text-[44px] font-medium leading-none tracking-[-0.032em] text-[#191919] sm:text-[52px] lg:text-[60px]">
          {BROKER_HERO.headingLine1}
          <br />
          {BROKER_HERO.headingLine2}
        </h1>
        <p className="text-body-large max-w-[720px] text-pretty text-[#4a4a4a]">{BROKER_HERO.sub}</p>
        <div className="flex items-start gap-4">
          <PressableButton variant="primary" size="small" href={BROKER_HERO.primary.href} className="w-fit" dataTrack="cta-brokers-hero-apply">
            {BROKER_HERO.primary.label}
          </PressableButton>
          <PressableButton variant="white" size="small" href={BROKER_HERO.secondary.href} className="w-fit" dataTrack="cta-brokers-hero-signin">
            {BROKER_HERO.secondary.label}
          </PressableButton>
        </div>
      </div>
    </section>
  );
}
