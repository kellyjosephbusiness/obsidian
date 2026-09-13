"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { INTRO, LINKS } from "./data";

/**
 * "Corgi is an AI-native…" dark intro card (site: JourneyHeroSection).
 * Desktop (md+): hover swaps the two paper cards in 3D.
 * Mobile (<md): first tap swaps the cards, second tap follows the sign-up link.
 */
export function IntroSection() {
  const [swapped, setSwapped] = useState(false);

  return (
    <section className="relative bg-background px-4 pt-4 md:px-6 md:pt-12 lg:px-16 lg:pt-16">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#e1e1e1]" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-4 h-px bg-[#e1e1e1] md:top-12 lg:top-16" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[max(16px,calc((100vw-1600px)/2))] w-px bg-[#e1e1e1] md:left-[max(24px,calc((100vw-1600px)/2))] lg:left-[max(64px,calc((100vw-1600px)/2))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-[max(16px,calc((100vw-1600px)/2))] w-px bg-[#e1e1e1] md:right-[max(24px,calc((100vw-1600px)/2))] lg:right-[max(64px,calc((100vw-1600px)/2))]"
      />

      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[24px] bg-[#313131] p-5 pb-[260px] md:p-16">
        {/* Radial ellipse glow, bottom center */}
        <div
          aria-hidden
          className="-translate-x-1/2 pointer-events-none absolute bottom-0 left-1/2 aspect-square w-[520px] max-w-none translate-y-1/2 md:w-[800px] lg:w-[1053px]"
        >
          <Image alt="" className="object-contain" fetchPriority="low" fill sizes="1053px" src={INTRO.ellipse} />
        </div>

        <h2 className="relative font-mono font-normal text-[20px] text-white leading-none tracking-[-0.032em] md:pr-[360px] md:text-[28px] lg:pr-[420px] lg:text-[32px] min-[1440px]:pr-[460px] min-[1440px]:text-[40px]">
          <span className="text-[#8ea6f0]">{INTRO.accent}</span>
          {INTRO.rest}
        </h2>

        {/* "Boring document" label — md+ only */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-[254px] bottom-[150px] z-10 hidden origin-bottom-right rotate-[-19.27deg] md:block"
        >
          <Image
            alt=""
            className="h-auto w-[200px]"
            height={42}
            quality={60}
            sizes="200px"
            src={INTRO.label}
            width={200}
          />
        </div>

        {/* Desktop hover stack — md+ */}
        <div className="group absolute right-0 bottom-0 hidden h-[200px] w-[280px] [perspective:1000px] [transform-style:preserve-3d] md:block lg:h-[240px] lg:w-[320px]">
          {/* Back card: "Get a quote!" */}
          <div className="-bottom-[110px] absolute right-[20px] z-0 [transform:rotate(-27.6deg)] [transform-style:preserve-3d] transition-transform duration-[420ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:z-20 group-hover:[transform:translate(20px,-36px)_rotate(-19.99deg)] lg:-bottom-[146px] lg:group-hover:[transform:translate(20px,-48px)_rotate(-19.99deg)]">
            <div className="[transform-style:preserve-3d] transition-transform duration-[480ms] ease-[cubic-bezier(0.34,1.7,0.5,1)] group-hover:[transform:translateZ(80px)]">
              <div className="h-[220px] w-[188px] overflow-hidden bg-[#f9f9f9] lg:h-[283px] lg:w-[241px]">
                <Link href={INTRO.quoteHref} data-track="cta-homepage-journey-desktop">
                  <p className="cursor-pointer pt-6 pl-6 font-mono font-normal text-[20px] text-black leading-none tracking-[-0.032em] hover:text-[#1e3a8a] hover:underline lg:text-[24px]">
                    {INTRO.quoteCard}
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Front card: document image */}
          <div className="-bottom-[74px] absolute right-0 z-10 [transform:rotate(-19.99deg)] [transform-style:preserve-3d] transition-transform duration-[420ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:z-0 group-hover:[transform:translate(-20px,36px)_rotate(-27.6deg)] lg:-bottom-[98px] lg:group-hover:[transform:translate(-20px,48px)_rotate(-27.6deg)]">
            <div className="[transform-style:preserve-3d] transition-transform duration-[480ms] ease-[cubic-bezier(0.34,1.7,0.5,1)] group-hover:[transform:translateZ(-40px)]">
              <div className="relative h-[220px] w-[188px] shadow-[2px_1px_8px_0px_rgba(25,25,25,0.5)] lg:h-[283px] lg:w-[241px]">
                <Image
                  alt=""
                  className="object-cover object-top"
                  fill
                  quality={60}
                  sizes="640px"
                  src={INTRO.document}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile click variant — <md */}
        <div className="-bottom-[24px] absolute inset-x-0 flex justify-center md:hidden">
          <Link
            href={LINKS.apply}
            aria-label={swapped ? "Get a quote" : "Reveal Get a quote card"}
            data-swapped={swapped}
            data-track="cta-homepage-journey-mobile"
            onClick={(e) => {
              if (!swapped) {
                e.preventDefault();
                setSwapped(true);
              }
            }}
            className="group relative block h-[270px] w-[255px] translate-x-6 translate-y-3 rotate-6 cursor-pointer [perspective:1000px] [transform-style:preserve-3d]"
          >
            <div aria-hidden className="-left-[72px] pointer-events-none absolute top-[28px] rotate-[-19.27deg]">
              <Image
                alt=""
                className="h-auto w-[180px]"
                height={42}
                quality={60}
                sizes="480px"
                src={INTRO.label}
                width={200}
              />
            </div>

            {/* Back card: "Get a quote!" */}
            <div className="-bottom-[90px] absolute right-[30px] z-0 [transform:rotate(-27.6deg)] [transform-style:preserve-3d] transition-transform duration-[420ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-data-[swapped=true]:z-20 group-data-[swapped=true]:[transform:translate(30px,-45px)_rotate(-19.99deg)]">
              <div className="[transform-style:preserve-3d] transition-transform duration-[480ms] ease-[cubic-bezier(0.34,1.7,0.5,1)] group-data-[swapped=true]:[transform:translateZ(80px)]">
                <div className="h-[270px] w-[225px] overflow-hidden bg-[#f9f9f9]">
                  <p className="pt-7 pl-7 text-left font-mono font-normal text-[27px] text-black leading-none tracking-[-0.032em] group-data-[swapped=true]:text-[#1e3a8a] group-data-[swapped=true]:underline">
                    {INTRO.quoteCard}
                  </p>
                </div>
              </div>
            </div>

            {/* Front card: document image */}
            <div className="-bottom-[45px] absolute right-0 z-10 [transform:rotate(-19.99deg)] [transform-style:preserve-3d] transition-transform duration-[420ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-data-[swapped=true]:z-0 group-data-[swapped=true]:[transform:translate(-30px,45px)_rotate(-27.6deg)]">
              <div className="[transform-style:preserve-3d] transition-transform duration-[480ms] ease-[cubic-bezier(0.34,1.7,0.5,1)] group-data-[swapped=true]:[transform:translateZ(-40px)]">
                <div className="relative h-[270px] w-[225px] shadow-[2px_1px_8px_0px_rgba(25,25,25,0.5)]">
                  <Image
                    alt=""
                    className="object-cover object-top"
                    fill
                    quality={60}
                    sizes="640px"
                    src={INTRO.document}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
