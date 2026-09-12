"use client";

import Image from "next/image";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { CursorChip, useCursorChip } from "@/components/sites/corgi-insure-a0f7893c/shared/CursorChip";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { BUBBLE_MESSAGES, EstimateBubble, FinancialFormMock, bubbleTierIndex, type FinancialFormMockProps } from "./FinancialFormMock";
import { GET_QUOTED } from "./data";

/**
 * "Get Quoted Instantly or Book a Demo With a Specialist" — desktop (`hidden lg:block`) variant.
 * Reproduced 1:1 from the site's compiled source (27stt6lyy-y9_.js: functions `y` chip hook,
 * `k` CTA, `E` flip panel, `M` sticky section).
 *
 * Scroll model: the section is `calc(100vh + panelH + 480px)` tall with a sticky 100vh child;
 * `progress = clamp((-sectionTop - 240) / panelH, 0, 1)` and `showingDemo = progress >= 0.5`.
 * Every visual difference between the two states is a 750ms cubic-bezier(.4,0,.2,1) CSS transition.
 */

export const GET_QUOTED_EASE = "cubic-bezier(0.4, 0, 0.2, 1)";

const { selfServe, demo, form, images } = GET_QUOTED;

/* ------------------------------------------------------------------ */
/* Shared hooks / fragments (also used by GetQuotedMobile)              */
/* ------------------------------------------------------------------ */

/**
 * The site's cursor-chip hook (`y`) additionally hides the chip while the mouse is
 * pressed inside an `<input>` (`onPointerDown: e.target.closest("input") && suppress`).
 */
export function useTryMeChip() {
  const chip = useCursorChip();
  const onPointerDown = (e: ReactPointerEvent<HTMLElement>) => {
    if (e.pointerType === "mouse" && (e.target as Element).closest("input")) chip.suppress(true);
  };
  return { chipRef: chip.chipRef, open: chip.open, handlers: { ...chip.handlers, onPointerDown } };
}

/**
 * Drives the "An estimate is fine" bubble above the demo-side form:
 * tier = revenue + projected revenue; message cycles on every change; "numbers please!" for 3s
 * after a non-digit character (cleared early on valid input).
 */
export function useDemoBubble(): { text: string; formProps: FinancialFormMockProps } {
  const [revenue, setRevenue] = useState("");
  const [projected, setProjected] = useState("");
  const [changeCount, setChangeCount] = useState(0);
  const [invalid, setInvalid] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    },
    [],
  );

  const sum = String(Number(revenue || "0") + Number(projected || "0"));
  const messages = BUBBLE_MESSAGES[bubbleTierIndex(sum === "0" ? "" : sum)];
  const text = invalid ? form.bubbleInvalid : messages[changeCount % messages.length];

  const formProps: FinancialFormMockProps = {
    showCursor: false,
    onRevenueChange: (digits) => {
      setRevenue(digits);
      setChangeCount((c) => c + 1);
    },
    onProjectedRevenueChange: (digits) => {
      setProjected(digits);
      setChangeCount((c) => c + 1);
    },
    onInvalidInput: () => {
      setInvalid(true);
      if (timer.current !== null) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        setInvalid(false);
        timer.current = null;
      }, 3000);
    },
    onValidInput: () => {
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
        timer.current = null;
      }
      setInvalid(false);
    },
  };

  return { text, formProps };
}

/** Demo body copy with the bold "We are committed…" sentence (site constant `q`). */
export function DemoBody() {
  return (
    <>
      {demo.bodyBefore}
      <span className="font-medium text-[#191919]">{demo.bodyStrong}</span>
    </>
  );
}

/** "Try me!" chip icon (site: lucide TextCursorInput; we render the Material glyph). */
export function TryMeIcon() {
  return <MaterialIcon name="text_fields" size={12} className="shrink-0 text-white" />;
}

/* ------------------------------------------------------------------ */
/* CTA (`k`)                                                            */
/* ------------------------------------------------------------------ */

interface CtaButtonProps {
  href: string;
  trackId: string;
  label: string;
  icon: string;
  variant: "orange" | "black";
}

function CtaButton({ href, trackId, label, icon, variant }: CtaButtonProps) {
  return (
    <PressableButton className="w-fit" dataTrack={trackId} faceClassName="gap-1 text-body" href={href} size="small" variant={variant}>
      {label}
      <MaterialIcon name={icon} size={16} />
    </PressableButton>
  );
}

/* ------------------------------------------------------------------ */
/* Flip panel (`E`)                                                     */
/* ------------------------------------------------------------------ */

interface FlipPanelProps {
  showingDemo: boolean;
  /** 0 | 1 — slides the drag cursor out of the self-serve form. */
  cursorExitProgress: number;
  /** 0 | 1 — slides the corgi + bubble in from the right. */
  dogEntryProgress: number;
}

const FACE_STYLE: CSSProperties = { backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" };

function FlipPanel({ showingDemo, cursorExitProgress, dogEntryProgress }: FlipPanelProps) {
  const { text, formProps } = useDemoBubble();
  const chip = useTryMeChip();

  return (
    <div className="@container relative h-full w-full overflow-clip rounded-[24px] border border-[#e1e1e1]">
      <div
        className="relative h-full w-full overflow-clip p-[1.09cqw]"
        style={{
          backgroundColor: showingDemo ? "#dddddd" : "#ff7d33",
          transition: `background-color 750ms ${GET_QUOTED_EASE}`,
        }}
      >
        <div className="absolute inset-0" style={{ perspective: "1200px" }}>
          <div
            className="relative h-full w-full"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${showingDemo ? 180 : 0}deg)`,
              transition: `transform 750ms ${GET_QUOTED_EASE}`,
            }}
          >
            {/* Front face: self-serve form with the drag cursor */}
            <div
              {...chip.handlers}
              className="@container absolute top-[9.7%] left-1/2 aspect-[701/778] w-[87.625%] -translate-x-1/2 rounded-[1.63cqw] bg-[#f9f9f9] shadow-[0_0_1.63cqw_rgba(25,25,25,0.5)]"
              style={{ ...FACE_STYLE, pointerEvents: showingDemo ? "none" : "auto" }}
            >
              <FinancialFormMock cursorExitProgress={cursorExitProgress} />
            </div>
            {/* Back face (pre-rotated 180°): demo form driving the estimate bubble */}
            <div
              {...chip.handlers}
              className="@container absolute top-[8.46%] right-[3.25%] aspect-[575/699] w-[71.875%] rounded-[1.63cqw] bg-[#f9f9f9] shadow-[0_0_1.09cqw_rgba(25,25,25,0.2)]"
              style={{ ...FACE_STYLE, transform: "rotateY(180deg)", pointerEvents: showingDemo ? "auto" : "none" }}
            >
              <FinancialFormMock {...formProps} />
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute right-[-11.875%] bottom-[-7.71%] aspect-[311/316] w-[38.875%]"
          style={{
            transform: `translateX(${(1 - dogEntryProgress) * 100}%)`,
            opacity: dogEntryProgress,
            transition: `transform 750ms ${GET_QUOTED_EASE}, opacity 500ms ${GET_QUOTED_EASE}`,
          }}
        >
          <Image alt="Funding specialist on the phone" src={images.corgiPhone} fill className="object-contain" sizes="(max-width: 1024px) 50vw, 640px" quality={75} />
        </div>
        <EstimateBubble text={text} entryProgress={dogEntryProgress} />
      </div>

      <CursorChip open={chip.open} chipRef={chip.chipRef} icon={<TryMeIcon />} label="Try me!" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Right column text (inline in `M`)                                    */
/* ------------------------------------------------------------------ */

interface TextPaneProps {
  heading: string;
  body: ReactNode;
  bestFor: string;
  cta: ReactNode;
}

function TextPane({ heading, body, bestFor, cta }: TextPaneProps) {
  return (
    <div className="flex h-1/2 flex-col justify-center px-6">
      <div className="mx-auto flex w-full max-w-[480px] -translate-x-6 flex-col items-start gap-9">
        <div className="flex w-full flex-col gap-3">
          <h3 className="font-bold text-[20px] leading-none tracking-[-0.032em] text-[#191919]">{heading}</h3>
          <p className="text-body text-[#4a4a4a]">{body}</p>
        </div>
        <div className="flex w-full flex-col gap-3">
          <p className="text-body font-medium text-[#191919]">{selfServe.bestForLabel}</p>
          <p className="text-body text-[#4a4a4a]">{bestFor}</p>
        </div>
        {cta}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sticky section (`M`)                                                 */
/* ------------------------------------------------------------------ */

/** Module-level caches (site: `_` and `z`) so a remount keeps the last measured height / progress. */
let cachedPanelHeight = 400;
let cachedProgress = 0;

export function GetQuotedSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(cachedProgress);
  const [panelHeight, setPanelHeight] = useState(cachedPanelHeight);
  const [lineVisible, setLineVisible] = useState(false);

  // Measure the panel column (site observes the right/text column; both share aspect-[800/465]).
  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    const measure = () => {
      const h = el.clientHeight;
      if (h > 0) {
        cachedPanelHeight = h;
        setPanelHeight(h);
      }
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // The sliding horizontal hairline is only visible for the 750ms of a state change (not on mount).
  const lastShowingDemo = useRef(cachedProgress >= 0.5);
  const lineTimer = useRef<number | null>(null);
  useEffect(
    () => () => {
      if (lineTimer.current !== null) window.clearTimeout(lineTimer.current);
    },
    [],
  );

  // rAF-throttled scroll progress.
  useLayoutEffect(() => {
    let frame: number | null = null;
    const update = () => {
      frame = null;
      const section = sectionRef.current;
      if (!section) return;
      const next = Math.max(0, Math.min(1, (-section.getBoundingClientRect().top - 240) / panelHeight));
      cachedProgress = next;
      setProgress(next);
      const nextShowingDemo = next >= 0.5;
      if (nextShowingDemo !== lastShowingDemo.current) {
        lastShowingDemo.current = nextShowingDemo;
        setLineVisible(true);
        if (lineTimer.current !== null) window.clearTimeout(lineTimer.current);
        lineTimer.current = window.setTimeout(() => {
          setLineVisible(false);
          lineTimer.current = null;
        }, 750);
      }
    };
    const schedule = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [panelHeight]);

  const showingDemo = progress >= 0.5;
  const stateProgress = showingDemo ? 1 : 0;

  return (
    <section
      ref={sectionRef}
      className="relative hidden border-b border-[#e1e1e1] bg-[#f6f6f6] lg:block"
      style={{ height: `calc(100vh + ${panelHeight + 480}px)` }}
      aria-label="Get funded or talk to a specialist"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute bottom-0 top-0 left-[max(64px,calc((100%-1600px)/2))] w-px bg-[#e1e1e1]" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 top-0 right-[max(64px,calc((100%-1600px)/2))] w-px bg-[#e1e1e1]" />

        <div className="mx-auto w-full max-w-[1728px] px-16">
          <div className="flex flex-col gap-6">
            <h2 className="px-6 font-medium font-mono text-[#191919] text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)]">
              <span style={{ color: showingDemo ? "#191919" : "#ff5c00", transition: `color 750ms ${GET_QUOTED_EASE}` }}>
                {GET_QUOTED.headingA}
              </span>
              {GET_QUOTED.headingJoin}
              <span style={{ color: showingDemo ? "#ff5c00" : "#191919", transition: `color 750ms ${GET_QUOTED_EASE}` }}>
                {GET_QUOTED.headingB}
              </span>
            </h2>

            <div className="relative grid grid-cols-2 gap-12">
              <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-px w-screen -translate-x-1/2 bg-[#e1e1e1]" />
              <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-[#e1e1e1]" />
              <div aria-hidden className="pointer-events-none absolute top-0 bottom-0 left-[calc(50%-24px)] w-px bg-[#e1e1e1]" />
              <div
                aria-hidden
                className="pointer-events-none absolute left-[calc(50%-24px)] right-0 h-px bg-[#e1e1e1]"
                style={{
                  top: showingDemo ? "0%" : "100%",
                  opacity: lineVisible ? 1 : 0,
                  transition: `top 750ms ${GET_QUOTED_EASE}, opacity 180ms ease`,
                }}
              />

              <div className="relative aspect-[800/465]">
                <FlipPanel showingDemo={showingDemo} cursorExitProgress={stateProgress} dogEntryProgress={stateProgress} />
              </div>

              <div ref={measureRef} className="relative aspect-[800/465] overflow-hidden">
                <div
                  className="flex h-[200%] flex-col"
                  style={{
                    transform: `translateY(${showingDemo ? -50 : 0}%)`,
                    transition: `transform 750ms ${GET_QUOTED_EASE}`,
                  }}
                >
                  <TextPane
                    heading={selfServe.heading}
                    body={selfServe.body}
                    bestFor={selfServe.bestFor}
                    cta={
                      <CtaButton
                        href={selfServe.cta.href}
                        trackId="cta-homepage-self-serve"
                        label={selfServe.cta.label}
                        icon={selfServe.cta.icon}
                        variant="orange"
                      />
                    }
                  />
                  <TextPane
                    heading={demo.heading}
                    body={<DemoBody />}
                    bestFor={demo.bestFor}
                    cta={<CtaButton href={demo.cta.href} trackId="cta-homepage-book-demo" label={demo.cta.label} icon={demo.cta.icon} variant="black" />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
