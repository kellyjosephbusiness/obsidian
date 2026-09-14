"use client";

import Image from "next/image";
import { InitialsAvatar } from "@/components/sites/corgi-insure-a0f7893c/shared/InitialsAvatar";
import { CustomerPhoto } from "@/components/sites/corgi-insure-a0f7893c/shared/CustomerPhoto";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import type { Testimonial } from "@/types/sites/corgi-insure-a0f7893c/home";
import { CursorChip } from "@/components/sites/corgi-insure-a0f7893c/shared/CursorChip";
import { UnfoldHorizontalIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/icons";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { TESTIMONIALS, TESTIMONIALS_HEADER } from "./data";

const RAIL_MASK = "linear-gradient(to right, transparent 0, black 3%, black 97%, transparent 100%)";

/** Base marquee speed in px/s (before the hover slow-down factor). */
const BASE_SPEED = 40;
/** Time constant (ms) of the speed easing between 1 and the hovered .15. */
const SPEED_TAU = 220;
/** Time constant (ms) of the fling decay after a drag release. */
const FLING_TAU = 500;
/** Hovered / focused speed factor. */
const HOVER_SPEED = 0.15;
/** Only pointer samples from the last N ms feed the release velocity. */
const SAMPLE_WINDOW = 100;

interface Sample {
  x: number;
  t: number;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const company = testimonial.company;
  return (
    <article className="flex h-auto w-[300px] shrink-0 flex-col overflow-clip rounded-[8px] border border-[#e1e1e1] bg-white md:h-[560px] md:w-[382px]">
      <div className="relative -mx-px -mt-px flex h-[200px] shrink-0 flex-col justify-end overflow-clip rounded-[8px] border border-[#e1e1e1] p-4 shadow-[0px_0px_16px_0px_rgba(25,25,25,0.3)] transition-transform duration-300 ease-out has-[a:hover]:-rotate-[1.2deg] md:h-[320px]">
        <div className="absolute inset-0 bg-[#191919]" />
        {testimonial.image ? (
          <Image
            alt={testimonial.author}
            className="absolute inset-0 object-cover object-top"
            fill
            sizes="(min-width: 768px) 382px, 300px"
            src={testimonial.image}
          />
        ) : (
          <CustomerPhoto name={testimonial.author} index={testimonial.photo} className="absolute inset-0" sizes="(min-width: 768px) 382px, 300px" />
        )}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(200.64deg, rgba(255,255,255,0) 49.9%, rgba(255,255,255,0.726) 70.5%, #ffffff 94.66%)",
          }}
        />
        <a
          href={testimonial.companyUrl ?? "#"}
          target={testimonial.companyUrl ? "_blank" : undefined}
          rel={testimonial.companyUrl ? "noopener noreferrer" : undefined}
          draggable={false}
          onPointerDown={(e) => e.stopPropagation()}
          onDragStart={(e) => e.preventDefault()}
          className="group/link relative flex items-start gap-3"
          aria-label={`Visit ${company}`}
        >
          <div className="flex items-center rounded-[8px] [transition-property:background-color,box-shadow] [transition-duration:0ms,300ms] [transition-delay:300ms,0ms] group-hover/link:bg-[#f6f6f6] group-hover/link:shadow-[0_0_8px_0_rgba(25,25,25,0.2)] group-hover/link:[transition-delay:0ms,0ms] group-hover/link:[transition-duration:0ms,0ms]">
            <div className="flex w-0 items-center justify-center overflow-hidden transition-[width,padding] duration-300 ease-out group-hover/link:w-[42px] group-hover/link:pl-[10px] group-hover/link:pr-[8px]">
              <MaterialIcon name="north_east" size={24} className="shrink-0 text-[#191919]" />
            </div>
            <div className="relative size-11 shrink-0 overflow-hidden rounded-[8px] shadow-[0px_0px_4px_0px_rgba(29,29,29,0.25)]">
              {testimonial.companyLogo ? (
                <Image alt="" className="object-cover" fill sizes="44px" src={testimonial.companyLogo} />
              ) : (
                <InitialsAvatar name={testimonial.company} className="size-full" textClassName="text-[16px]" />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1.5 whitespace-nowrap">
            <span className="text-[16px] font-medium leading-[1.2] tracking-[-0.24px] text-[#1d1d1d]">{testimonial.author}</span>
            <span className="text-[14px] leading-[1.2] tracking-[-0.21px] text-[#4e4e4e]">{testimonial.role}</span>
          </div>
        </a>
      </div>
      {/* Phones: the quote sits directly under the photo; md+: vertically centred in the fixed-height card. */}
      <div className="flex flex-1 items-start p-4 md:items-center md:p-5">
        <p className="text-[14px] leading-[1.35] tracking-[-0.21px] text-[#4a4a4a] md:text-[16px] md:leading-[1.2] md:tracking-[-0.24px]">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
    </article>
  );
}

/**
 * "Built for Founders Who Ship" — time-driven marquee of testimonial cards that slows to 15%
 * while hovered/focused, can be dragged (with velocity-sampled fling on release) and wraps
 * seamlessly over a duplicated track. Runs only while on screen and the tab is visible; the
 * loop is skipped entirely under prefers-reduced-motion. Port of corgi.insure's TestimonialsMarquee.
 */
export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const chipRef = useRef<HTMLDivElement>(null);

  // Marquee state lives in refs so the rAF loop never re-renders.
  const speedTarget = useRef(1);
  const dir = useRef<1 | -1>(1);
  const dragging = useRef(false);
  const dragX = useRef(0);
  const dragStartX = useRef(0);
  const lastX = useRef(0);
  const fling = useRef(0);
  const samples = useRef<Sample[]>([]);

  const [chipOpen, setChipOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [chipSuppressed, setChipSuppressed] = useState(false);

  const moveChip = (x: number, y: number) => {
    const el = chipRef.current;
    if (el) {
      el.style.left = `${x + 4}px`;
      el.style.top = `${y - 4}px`;
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf: number | null = null;
    let x = 0;
    let last = 0;
    let speed = 1;

    const step = (now: number) => {
      if (!last) last = now;
      const dt = now - last;
      last = now;

      if (dragging.current) {
        x = dragX.current;
      } else {
        const k = 1 - Math.exp(-dt / SPEED_TAU);
        speed += (speedTarget.current - speed) * k;
        x += (BASE_SPEED * speed * dir.current * dt) / 1000;
        x += (fling.current * dt) / 1000;
        fling.current *= Math.exp(-dt / FLING_TAU);
        if (Math.abs(fling.current) < 0.5) fling.current = 0;
      }

      const half = track.scrollWidth / 2;
      if (half > 0) {
        if (x <= -half) x += half;
        else if (x > 0) x -= half;
        if (dragging.current) dragX.current = x;
      }
      track.style.transform = `translate3d(${x.toFixed(2)}px, 0, 0)`;
      raf = requestAnimationFrame(step);
    };

    let intersecting = false;
    let visible = document.visibilityState !== "hidden";

    const stop = () => {
      if (raf !== null) {
        cancelAnimationFrame(raf);
        raf = null;
      }
    };
    const sync = () => {
      if (intersecting && visible) {
        if (raf === null) {
          last = 0;
          raf = requestAnimationFrame(step);
        }
      } else {
        stop();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) intersecting = entry.isIntersecting;
        sync();
      },
      { rootMargin: "100px", threshold: 0 },
    );
    observer.observe(track);

    const onVisibility = () => {
      visible = document.visibilityState !== "hidden";
      sync();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const onPointerEnter = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    speedTarget.current = HOVER_SPEED;
    moveChip(e.clientX, e.clientY);
    setChipOpen(true);
    setChipSuppressed(false);
  };

  const onPointerLeave = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    speedTarget.current = 1;
    setChipOpen(false);
    setChipSuppressed(false);
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const track = trackRef.current;
    if (!track) return;
    const match = track.style.transform.match(/translate3d\(([-\d.]+)px/);
    dragX.current = match ? parseFloat(match[1]) : 0;
    dragging.current = true;
    fling.current = 0;
    dragStartX.current = e.clientX;
    lastX.current = e.clientX;
    samples.current = [{ x: e.clientX, t: performance.now() }];
    e.currentTarget.setPointerCapture(e.pointerId);
    if (e.pointerType === "mouse") {
      setIsDragging(true);
      setChipSuppressed(true);
    }
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && !dragging.current) moveChip(e.clientX, e.clientY);
    if (!dragging.current) return;
    dragX.current += e.clientX - lastX.current;
    lastX.current = e.clientX;
    const now = performance.now();
    samples.current.push({ x: e.clientX, t: now });
    const cutoff = now - SAMPLE_WINDOW;
    while (samples.current.length > 2 && samples.current[0].t < cutoff) samples.current.shift();
  };

  const onPointerEnd = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging.current) {
      if (e.pointerType === "mouse") setIsDragging(false);
      return;
    }
    dragging.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);

    const travelled = e.clientX - dragStartX.current;
    if (Math.abs(travelled) > 10) dir.current = travelled > 0 ? 1 : -1;

    const s = samples.current;
    if (s.length >= 2) {
      const first = s[0];
      const final = s[s.length - 1];
      const dt = final.t - first.t;
      if (dt > 0) {
        const v = ((final.x - first.x) / dt) * 1000;
        if (Math.abs(v) > 80) fling.current = v;
      }
    }
    samples.current = [];

    if (e.pointerType === "mouse") {
      setIsDragging(false);
      const r = e.currentTarget.getBoundingClientRect();
      const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      if (inside) moveChip(e.clientX, e.clientY);
      else setChipOpen(false);
    }
  };

  const railLeft =
    "pointer-events-none absolute left-[max(16px,calc((100%-1600px)/2))] w-px bg-[#e1e1e1] md:left-[max(24px,calc((100%-1600px)/2))] lg:left-[max(64px,calc((100%-1600px)/2))]";
  const railRight =
    "pointer-events-none absolute right-[max(16px,calc((100%-1600px)/2))] w-px bg-[#e1e1e1] md:right-[max(24px,calc((100%-1600px)/2))] lg:right-[max(64px,calc((100%-1600px)/2))]";

  return (
    <section className="relative flex h-auto flex-col justify-center overflow-hidden border-b border-[#e1e1e1] bg-[#f6f6f6] py-16 md:h-screen md:py-0">
      <div className="relative px-4 md:px-6 lg:px-16">
        <div aria-hidden="true" className={railLeft} style={{ top: "-100vh", bottom: "-24px" }} />
        <div aria-hidden="true" className={railRight} style={{ top: "-100vh", bottom: "-24px" }} />
        <div className="relative mx-auto max-w-[1600px]">
          <div className="flex flex-col items-start justify-between gap-6 px-4 md:px-6 lg:flex-row lg:items-end">
            <div className="flex flex-col items-start gap-4 md:gap-6">
              <h2
                className="font-medium font-mono"
                style={{
                  fontSize: "var(--h2-font-size)",
                  lineHeight: "var(--h2-line-height)",
                  letterSpacing: "var(--h2-tracking)",
                  color: "#191919",
                }}
              >
                {TESTIMONIALS_HEADER.headingBefore}
                <span className="font-serif italic pr-2.5 md:pr-5">{TESTIMONIALS_HEADER.headingItalic}</span>
                {TESTIMONIALS_HEADER.headingAfter}
              </h2>
              <p className="text-body-large">{TESTIMONIALS_HEADER.sub}</p>
            </div>
            <PressableButton
              dataTrack="cta-testimonials-marquee"
              faceClassName="hover:bg-[#2a2a2a]"
              href={TESTIMONIALS_HEADER.cta.href}
              size="large"
              variant="black"
            >
              {TESTIMONIALS_HEADER.cta.label}
            </PressableButton>
          </div>
        </div>
      </div>

      <div
        className="relative mt-6 w-full touch-pan-y cursor-grab select-none active:cursor-grabbing"
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onFocusCapture={() => {
          speedTarget.current = HOVER_SPEED;
        }}
        onBlurCapture={() => {
          speedTarget.current = 1;
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-[#e1e1e1]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-px bg-[#e1e1e1]" />
        <div className="overflow-hidden" style={{ maskImage: RAIL_MASK, WebkitMaskImage: RAIL_MASK }}>
          <div ref={trackRef} className="flex w-max gap-4 will-change-transform md:gap-6">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
              <TestimonialCard key={`${testimonial.author}-${i}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="relative h-0">
        <div className={`${railLeft} top-0`} style={{ bottom: "-100vh" }} />
        <div className={`${railRight} top-0`} style={{ bottom: "-100vh" }} />
      </div>

      <CursorChip
        open={chipOpen && !isDragging && !chipSuppressed}
        chipRef={chipRef}
        icon={<UnfoldHorizontalIcon className="size-3 shrink-0 text-white" />}
        label="Draggable!"
      />
    </section>
  );
}
