"use client";

import { useState, type CSSProperties, type KeyboardEvent } from "react";
import { cn } from "@/lib/utils";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { WORKFLOW_STEPS } from "./data";

const CHIP_CLASS =
  "inline cursor-pointer rounded-[4px] bg-[#ececec] px-1 py-1.5 text-left font-normal leading-none text-inherit [box-decoration-break:clone] [-webkit-box-decoration-break:clone] transition-[background-color,-webkit-text-stroke-color] duration-150 ease-out hover:bg-[#e1e1e1] active:bg-[#d8d8d8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a8a] focus-visible:ring-offset-2 motion-reduce:transition-none";

/** The site draws icons in the sentence at 34px with the 48 optical size (the shared MaterialIcon defaults to opsz 24). */
const ICON_STYLE: CSSProperties = {
  width: 32,
  height: 32,
  lineHeight: "32px",
  fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48",
  WebkitTextStrokeWidth: 0,
};

const FADE_STYLE: CSSProperties = { transitionDuration: "600ms" };

/**
 * One big F37 Bolton sentence (24/50 → 28/55 → 32/60) where each workflow phrase is an inline chip
 * followed by a Material icon. Clicking a chip toggles `aria-expanded`: the chip gets emphasis
 * (0.35px text stroke fades in over .15s), the other fragments dim (opacity .6s) and a caption
 * for that step is revealed beneath the sentence. Rails and hairlines frame the 1600px container.
 */
export function WorkflowSentence() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const activeStep = WORKFLOW_STEPS.find((step) => step.id === expanded) ?? null;

  const toggle = (id: string) => setExpanded((current) => (current === id ? null : id));
  const onKeyDown = (event: KeyboardEvent<HTMLSpanElement>, id: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle(id);
    }
  };

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden border-b border-[#e1e1e1] px-4 md:px-6 lg:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[max(16px,calc((100vw-1600px)/2))] w-px bg-[#e1e1e1] md:left-[max(24px,calc((100vw-1600px)/2))] lg:left-[max(64px,calc((100vw-1600px)/2))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-[max(16px,calc((100vw-1600px)/2))] w-px bg-[#e1e1e1] md:right-[max(24px,calc((100vw-1600px)/2))] lg:right-[max(64px,calc((100vw-1600px)/2))]"
      />

      <div className="relative mx-auto w-full max-w-[1600px] p-6">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-px w-screen max-w-[2400px] -translate-x-1/2 bg-[#e1e1e1]" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen max-w-[2400px] -translate-x-1/2 bg-[#e1e1e1]" />

        <div className="relative">
          <p className="font-mono text-[24px] leading-[50px] tracking-[-0.032em] text-[#191919] md:text-[28px] md:leading-[55px] lg:text-[32px] lg:leading-[60px]">
            {WORKFLOW_STEPS.map((step) => {
              const isExpanded = expanded === step.id;
              const dimmed = expanded !== null && !isExpanded;
              return (
                <span key={step.id}>
                  <span
                    className="transition-opacity ease-out motion-reduce:transition-none"
                    style={{ ...FADE_STYLE, opacity: dimmed ? 0.35 : 1 }}
                    data-broker-journey-fragment={step.id}
                  >
                    <span
                      role="button"
                      tabIndex={0}
                      aria-expanded={isExpanded}
                      aria-controls={`workflow-caption-${step.id}`}
                      data-broker-journey-step={step.id}
                      data-broker-journey-emphasis={isExpanded}
                      className={cn(CHIP_CLASS, isExpanded && "bg-[#dde4f6] hover:bg-[#c5d1f0] active:bg-[#b7c5ec]")}
                      style={{
                        WebkitTextStrokeWidth: "0.35px",
                        WebkitTextStrokeColor: isExpanded ? "#191919" : "rgba(25, 25, 25, 0)",
                      }}
                      onClick={() => toggle(step.id)}
                      onKeyDown={(event) => onKeyDown(event, step.id)}
                    >
                      {step.phrase}
                      <MaterialIcon
                        name={step.icon}
                        size={34}
                        className="mx-2.5 inline-flex h-8 w-8 items-center justify-center align-[-0.22em] leading-8"
                        style={ICON_STYLE}
                      />
                      {step.punctuation && <span data-broker-journey-punctuation="true">{step.punctuation}</span>}
                    </span>
                  </span>
                  <span
                    className="transition-opacity ease-out motion-reduce:transition-none"
                    style={{ ...FADE_STYLE, opacity: dimmed ? 0.35 : 1 }}
                    data-broker-journey-connector={step.id}
                  >
                    {step.connector}
                  </span>
                </span>
              );
            })}
            <span aria-live="polite" className="sr-only">
              {activeStep ? `${activeStep.phrase}: ${activeStep.caption}` : ""}
            </span>
          </p>

          {/* Caption panel revealed beneath the sentence for the expanded step */}
          <div
            className="grid transition-[grid-template-rows,opacity] duration-[600ms] ease-out motion-reduce:transition-none"
            style={{ gridTemplateRows: activeStep ? "1fr" : "0fr", opacity: activeStep ? 1 : 0 }}
            aria-hidden={!activeStep}
          >
            <div className="overflow-hidden">
              {WORKFLOW_STEPS.map((step) => (
                <p
                  key={step.id}
                  id={`workflow-caption-${step.id}`}
                  hidden={expanded !== step.id}
                  className="text-body max-w-[720px] pt-4 text-[#4a4a4a] md:pt-6"
                >
                  {step.caption}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
