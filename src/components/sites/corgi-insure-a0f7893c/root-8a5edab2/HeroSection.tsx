/* eslint-disable @next/next/no-img-element -- the mascot/hand slices (clip-path on a shared
   .avif) and the SVG/PNG company logos are plain <img> on the source site; next/image is
   only used for the raster sky background. */
import Image from "next/image";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { ASSETS, HERO_TICKER, HERO } from "./data";

const SKY_BG = `${ASSETS}/images/hero/cloud-sky-bg.webp`;
const CORGI_SRC = `${ASSETS}/images/hero/brand-corgi.avif`;
const HAND_SRC = `${ASSETS}/images/hero/hand-with-gradient.avif`;

/** The site renders each hero illustration as three vertical clip-path thirds of one image. */
const SLICE_CLIPS: readonly string[] = [
  "inset(0 calc(66.666667% - 1px) 0 0)",
  "inset(0 calc(33.333333% - 1px) 0 calc(33.333333% - 1px))",
  "inset(0 0 0 calc(66.666667% - 1px))",
];

/** The logo track is repeated 4× (0 → -25% keyframe) so the marquee loops seamlessly. */
const TRACK_COPIES = 4;

interface SlicedImageProps {
  src: string;
  /** Alt for the first slice only; the remaining slices are decorative. */
  alt: string;
}

function SlicedImage({ src, alt }: SlicedImageProps) {
  return (
    <div className="relative h-full w-full">
      {SLICE_CLIPS.map((clipPath, i) => (
        <img
          key={clipPath}
          alt={i === 0 ? alt : ""}
          src={src}
          className="absolute inset-0 h-full w-full max-w-none object-cover"
          style={{ clipPath }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex h-svh flex-col items-center pt-[160px]">
      {/* Sky background + tint + fade to page grey */}
      <div className="pointer-events-none absolute inset-0">
        <Image src={SKY_BG} alt="" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-[rgba(79,179,255,0.05)] mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(246,246,246,0)] from-[72%] to-[#f6f6f6] to-[95%]" />
      </div>

      <div className="relative flex w-full flex-1 items-center md:w-auto">
        <div className="relative w-full md:w-auto">
          {/* Corgi mascot */}
          <div className="pointer-events-none absolute right-[-40px] top-[-100px] z-10 md:right-[-72px] md:top-[-112px] lg:right-[-108px] lg:top-[-136px]">
            <div className="-rotate-[16.78deg]">
              <div className="aspect-[299/269] w-[200px] md:w-[280px] lg:w-[299px]">
                <SlicedImage src={CORGI_SRC} alt="FundLine mascot" />
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center gap-6 px-4 py-12 text-center md:px-[120px] md:py-16">
            <div className="flex flex-col items-center gap-6">
              <h1 className="homepage-hero-heading-font mx-auto max-w-[752px] text-[length:var(--h1-font-size)] font-medium leading-none tracking-[-0.032em] text-[#191919]">
                {HERO.headingLine1} <br />
                {HERO.headingLine2Prefix}{" "}
                <span className="homepage-hero-serif-font text-[#FF5C00] italic">{HERO.headingAccent}</span>
              </h1>
              <p className="text-body-large text-[#4e4e4e]">
                {HERO.subLine1}
                <br className="hidden md:block" /> {HERO.subLine2}
              </p>
            </div>

            <PressableButton
              variant="orange"
              size="small"
              href={HERO.cta.href}
              className="relative z-10 w-fit"
              faceClassName="px-4 py-2 btn-text-small text-white"
              dataTrack="cta-homepage-hero"
            >
              {HERO.cta.label}
            </PressableButton>

            {/* Hand */}
            <div className="pointer-events-none absolute bottom-[-80px] left-[-64px] h-[180px] w-[238px] -rotate-[15deg] md:bottom-[-88px] md:left-[-56px] md:h-[241px] md:w-[318px] md:rotate-0">
              <div aria-hidden className="absolute inset-0">
                <SlicedImage src={HAND_SRC} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proof-point ticker (replaces the customer-logo strip) */}
      <div className="relative z-10 w-full bg-[#f6f6f6] py-6">
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[1px] w-[2400px] -translate-x-1/2 bg-[#e1e1e1]" />
        <div className="w-full overflow-hidden" style={{ contain: "content" }}>
          <div className="logo-carousel-track flex w-max items-center gap-20 [animation:logo-scroll_60s_linear_infinite] motion-reduce:[animation:none]">
            {Array.from({ length: TRACK_COPIES }, (_, copy) => (
              <div key={copy} className="flex shrink-0 items-center gap-20" aria-hidden={copy > 0 || undefined}>
                {HERO_TICKER.map((item, i) => (
                  <div key={`${item.value}-${i}`} className="flex shrink-0 items-baseline gap-2 whitespace-nowrap">
                    <span className="font-mono text-[22px] font-medium leading-none tracking-[-0.02em] text-[#191919] md:text-[26px]">
                      {item.value}
                    </span>
                    <span className="text-[14px] leading-none tracking-[-0.01em] text-[#606060] md:text-[15px]">{item.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
