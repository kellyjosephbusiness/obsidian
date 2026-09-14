"use client";

import { motion, useReducedMotion } from "motion/react";
import { StippleGlyph } from "@/components/sites/corgi-insure-a0f7893c/shared/StippleGlyph";
import { PROCESS, PROCESS_STEPS } from "./data";

/**
 * "How our process works": four steps flowing left → right from md up and top → bottom on phones,
 * joined by a hairline connector. Steps fade up as the band scrolls into view and a soft navy
 * pulse travels along each connector. Under `prefers-reduced-motion` nothing moves: the steps
 * snap straight to their final state and the connector pulses stay invisible. The markup itself
 * never branches on the media query, so the server HTML and the first client render match.
 */
export function ProcessSection() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      className="relative overflow-hidden border-b border-[#e1e1e1] bg-[#f6f6f6] px-4 py-14 md:px-6 md:py-20 lg:px-16"
      aria-labelledby="process-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[max(16px,calc((100vw-1600px)/2))] w-px bg-[#e1e1e1] md:left-[max(24px,calc((100vw-1600px)/2))] lg:left-[max(64px,calc((100vw-1600px)/2))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-[max(16px,calc((100vw-1600px)/2))] w-px bg-[#e1e1e1] md:right-[max(24px,calc((100vw-1600px)/2))] lg:right-[max(64px,calc((100vw-1600px)/2))]"
      />

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col gap-10 px-4 md:gap-14 md:px-6">
        <div className="flex flex-col gap-4">
          <h2
            id="process-heading"
            className="max-w-[18ch] font-medium font-mono text-[#191919] text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)] [text-wrap:balance]"
          >
            {PROCESS.heading}
          </h2>
          <p className="max-w-[620px] text-body-large text-[#4a4a4a]">{PROCESS.sub}</p>
        </div>

        <ol className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
          {PROCESS_STEPS.map((step, index) => {
            const last = index === PROCESS_STEPS.length - 1;
            return (
              <motion.li
                key={step.title}
                className="relative flex items-start gap-5 md:flex-col md:gap-6"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={reduce ? { duration: 0 } : { duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                {/* Connector: vertical under the glyph on phones, horizontal to the next step from md up. */}
                {!last && (
                  <>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute top-[84px] bottom-[-36px] left-[35px] w-[2px] overflow-hidden rounded-full bg-[#dde4f6] md:hidden"
                    >
                      <motion.span
                        className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-transparent via-[#1e3a8a] to-transparent"
                        initial={{ opacity: 0 }}
                        animate={reduce ? { opacity: 0 } : { y: ["-120%", "420%"], opacity: [0, 0.6, 0] }}
                        transition={reduce ? { duration: 0 } : { duration: 2.8, delay: index * 0.45, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
                      />
                    </span>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute top-[35px] right-[-24px] left-[84px] hidden h-[2px] overflow-hidden rounded-full bg-[#dde4f6] md:block"
                    >
                      <motion.span
                        className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-transparent via-[#1e3a8a] to-transparent"
                        initial={{ opacity: 0 }}
                        animate={reduce ? { opacity: 0 } : { x: ["-140%", "460%"], opacity: [0, 0.6, 0] }}
                        transition={reduce ? { duration: 0 } : { duration: 2.8, delay: index * 0.45, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
                      />
                    </span>
                  </>
                )}

                <span className="relative z-10 flex size-[72px] shrink-0 items-center justify-center rounded-[8px] border border-[#dde4f6] bg-white text-[#1e3a8a] shadow-[0_0_16px_0_rgba(25,25,25,0.05)]">
                  <StippleGlyph name={step.icon} size={44} sizes="44px" />
                </span>

                <div className="flex min-w-0 flex-col gap-2">
                  <span className="inline-flex w-fit items-center rounded-[4px] bg-[#dde4f6] px-2 py-1 font-mono text-[12px] font-medium leading-none tracking-[0.04em] text-[#1e3a8a]">
                    {`0${index + 1}`}
                  </span>
                  <h3 className="font-mono text-[18px] font-medium leading-[1.2] tracking-[-0.02em] text-[#191919] md:text-[20px]">
                    {step.title}
                  </h3>
                  <p className="text-[16px] leading-[1.45] tracking-[-0.2px] text-[#4a4a4a]">{step.body}</p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
