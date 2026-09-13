/* eslint-disable @next/next/no-img-element -- the mascot/hand slices (clip-path on a shared
   .avif) and the SVG/PNG company logos are plain <img> on the source site; next/image is
   only used for the raster sky background. */
import Image from "next/image";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { ASSETS, HERO_TICKER, HERO } from "./data";

const SKY_BG = `${ASSETS}/images/hero/cloud-sky-bg.webp`;
const MASCOT_SRC = `${ASSETS}/images/mascot/bull-fly-right.png`;
const HAND_SRC = `${ASSETS}/images/hero/hand-with-gradient.avif`;
const SKYLINE_SRC = `${ASSETS}/images/hero/nyc-skyline-dither.png`;

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
    <section className="relative flex flex-col items-center pt-[120px] md:pt-[136px]">
      {/* Sky background + tint + fade to page grey */}
      <div className="pointer-events-none absolute inset-0">
        <Image src={SKY_BG} alt="" fill sizes="100vw" className="object-cover" priority />
        {/* Dithered NYC skyline (1-bit, like the hand) sitting in the clouds above the ticker */}
        <img
          alt=""
          src={SKYLINE_SRC}
          width={2400}
          height={872}
          className="absolute bottom-[64px] left-1/2 h-auto w-[1400px] max-w-none -translate-x-1/2 opacity-[0.38] [mask-image:linear-gradient(to_bottom,transparent_0%,black_55%)] md:w-[1800px] lg:w-[2100px]"
        />
        <div className="absolute inset-0 bg-[rgba(79,179,255,0.05)] mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(246,246,246,0)] from-[72%] to-[#f6f6f6] to-[95%]" />
      </div>

      <div className="relative flex w-full items-center md:w-auto">
        <div className="relative w-full md:w-auto">
          {/* Mascot: the FundLine bull diving in from the top-right (flipped to face the headline) */}
          <div className="pointer-events-none absolute right-[-30px] top-[-70px] z-10 md:right-[-90px] md:top-[-60px] lg:right-[-150px] lg:top-[-70px]">
            <div className="rotate-[14deg]">
              <img alt="FundLine mascot" src={MASCOT_SRC} width={1024} height={1024} className="w-[190px] max-w-none -scale-x-100 md:w-[260px] lg:w-[300px]" />
            </div>
          </div>

          <div className="relative flex flex-col items-center gap-8 px-4 pt-10 pb-24 text-center md:px-[120px] md:pt-12 md:pb-28">
            <div className="flex flex-col items-center gap-7">
              <h1 className="homepage-hero-heading-font mx-auto max-w-[1000px] text-[48px] font-medium leading-none tracking-[-0.032em] text-[#191919] md:text-[68px] lg:text-[84px]">
                {HERO.headingLine1} <br />
                {HERO.headingLine2Prefix}{" "}
                <span className="homepage-hero-serif-font text-[#1E3A8A] italic">{HERO.headingAccent}</span>
              </h1>
              <p className="text-[18px] leading-[1.3] tracking-[-0.27px] text-[#4e4e4e] md:text-[24px] md:tracking-[-0.36px]">
                {HERO.subLine1}
                <br className="hidden md:block" /> {HERO.subLine2}
              </p>
            </div>

            <PressableButton
              variant="primary"
              size="large"
              href={HERO.cta.href}
              className="relative z-10 w-fit"
              faceClassName="px-8 py-3.5 text-[20px] leading-[1.2] tracking-[-0.3px] text-white"
              dataTrack="cta-homepage-hero"
            >
              {HERO.cta.label}
            </PressableButton>

            {/* Hand */}
            <div className="pointer-events-none absolute bottom-[-24px] left-[-64px] h-[180px] w-[238px] -rotate-[15deg] md:bottom-[-16px] md:left-[-56px] md:h-[241px] md:w-[318px] md:rotate-0">
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
