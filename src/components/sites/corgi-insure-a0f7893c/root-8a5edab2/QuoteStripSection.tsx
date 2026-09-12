"use client";

import { InitialsAvatar } from "@/components/sites/corgi-insure-a0f7893c/shared/InitialsAvatar";
import { Fragment, useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { motion, useInView, type Variants } from "motion/react";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { QUOTE_STRIP } from "./data";

/** Shorter quote swapped in on mount for viewports <= 767px (site behavior). */
const MOBILE_QUOTE = QUOTE_STRIP.mobileQuote;

const COLLAPSE_EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const MOBILE_QUERY = "(max-width: 767px)";

function subscribeMobile(onChange: () => void) {
  const mql = window.matchMedia(MOBILE_QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}
const getMobileSnapshot = () => window.matchMedia(MOBILE_QUERY).matches;
const getMobileServerSnapshot = () => false;

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.55, y: 8, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", bounce: 0.5, duration: 0.48, delay: 0.075 },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.022, delayChildren: 0.12 } },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 75, damping: 22, mass: 1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 75, damping: 22, mass: 1, delay: 0.1 },
  },
};

const WILL_CHANGE = { willChange: "transform, opacity, filter" } as const;

function Collapse({ open, children }: { open: boolean; children: ReactNode }) {
  return (
    <motion.div
      animate={{ height: open ? "auto" : 0 }}
      className="overflow-hidden"
      initial={{ height: 0 }}
      transition={{ duration: 0.35, ease: COLLAPSE_EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Intryc customer quote strip: once the section scrolls into view, the logo, the
 * word-by-word quote and the author card reveal in three timed collapses.
 */
export function QuoteStripSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "0px 0px -10% 0px" });
  const [step, setStep] = useState(0);
  // Site checks matchMedia("(max-width: 767px)") on mount; the server renders the desktop quote.
  const isMobile = useSyncExternalStore(subscribeMobile, getMobileSnapshot, getMobileServerSnapshot);
  const quote: string = isMobile ? MOBILE_QUOTE : QUOTE_STRIP.quote;

  useEffect(() => {
    if (!inView) return;
    const t1 = setTimeout(() => setStep(1), 50);
    const t2 = setTimeout(() => setStep(2), 650);
    const t3 = setTimeout(() => setStep(3), 2150);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [inView]);

  const words = quote.split(" ");

  return (
    <section ref={sectionRef} className="relative border-[#e1e1e1] border-b bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[max(16px,calc((100vw-1200px)/2))] w-px bg-[#e1e1e1] md:left-[max(24px,calc((100vw-1200px)/2))] lg:left-[max(64px,calc((100vw-1200px)/2))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-[max(16px,calc((100vw-1200px)/2))] w-px bg-[#e1e1e1] md:right-[max(24px,calc((100vw-1200px)/2))] lg:right-[max(64px,calc((100vw-1200px)/2))]"
      />

      <Collapse open={step >= 1}>
        <div className="flex justify-center px-4 pt-16 pb-8 md:px-6 lg:px-16">
          <motion.div
            animate={step >= 1 ? "visible" : "hidden"}
            className="relative size-12 shrink-0 overflow-hidden rounded-[11.52px] shadow-[0_0_3.84px_0_rgba(29,29,29,0.25)]"
            initial="hidden"
            style={WILL_CHANGE}
            variants={logoVariants}
          >
            <InitialsAvatar name={QUOTE_STRIP.company} className="size-full" textClassName="text-[18px]" />
          </motion.div>
        </div>
      </Collapse>

      <Collapse open={step >= 2}>
        <div className="flex justify-center px-8 pb-8 md:px-6 lg:px-16">
          <p className="max-w-[1100px] text-center font-medium font-mono text-[28px] text-black leading-none tracking-[-0.896px] md:text-[36px] md:tracking-[-1.152px] lg:text-[48px] lg:tracking-[-1.536px]">
            <span className="sr-only">{quote}</span>
            <motion.span
              animate={step >= 2 ? "visible" : "hidden"}
              aria-hidden
              initial="hidden"
              variants={containerVariants}
            >
              {words.map((word, i) => (
                <Fragment key={`${i}-${word}`}>
                  <motion.span className="inline-block" style={WILL_CHANGE} variants={wordVariants}>
                    {word}
                  </motion.span>
                  {i < words.length - 1 ? " " : ""}
                </Fragment>
              ))}
            </motion.span>
          </p>
        </div>
      </Collapse>

      <Collapse open={step >= 3}>
        <div className="flex justify-center px-4 pt-4 pb-16 md:px-6 lg:px-16">
          <motion.div
            animate={step >= 3 ? "visible" : "hidden"}
            className="flex flex-col overflow-hidden rounded-[24px] border border-[#e1e1e1] bg-white shadow-[0_0_16px_0_rgba(25,25,25,0.05)]"
            initial="hidden"
            style={WILL_CHANGE}
            variants={cardVariants}
          >
            <div className="-mt-px -mx-px flex items-stretch overflow-hidden rounded-[24px] border border-[#e1e1e1] bg-white shadow-[0_0_16px_0_rgba(25,25,25,0.3)]">
              <div className="flex items-center self-stretch">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[24px]">
                  <div className="absolute inset-0 bg-[#191919]" />
                  <InitialsAvatar name={QUOTE_STRIP.author} className="absolute inset-0" textClassName="text-[28px]" />
                </div>
              </div>
              <div className="flex shrink-0 flex-col items-start overflow-hidden p-4">
                <div className="flex h-11 flex-col gap-1.5 whitespace-nowrap">
                  <span className="font-medium text-[#1d1d1d] text-[16px] leading-[1.2] tracking-[-0.24px]">
                    {QUOTE_STRIP.author}
                  </span>
                  <span className="font-normal text-[#4e4e4e] text-[14px] leading-[1.2] tracking-[-0.21px]">
                    {QUOTE_STRIP.role}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start p-3">
              <PressableButton
                className="w-full"
                dataTrack="cta-homepage-case-study-intryc"
                faceClassName="w-full gap-1 text-[16px] leading-[1.2] tracking-[-0.24px]"
                href={QUOTE_STRIP.cta.href}
                rel="noopener noreferrer"
                size="small"
                target="_blank"
                variant="white"
              >
                {QUOTE_STRIP.cta.label}
              </PressableButton>
            </div>
          </motion.div>
        </div>
      </Collapse>
    </section>
  );
}
