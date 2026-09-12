"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { AuroraTunnelSvg } from "@/components/sites/corgi-insure-a0f7893c/shared/icons";
import { FundLineMark } from "@/components/sites/corgi-insure-a0f7893c/shared/FundLineLogo";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { ADVANTAGE, ORB_LOGOS } from "./data";

/** Window event fired each time an orb crosses the center mark (x >= 362). */
export const CORGI_PULSE_EVENT = "corgi-portal-pulse";

// Canvas coordinates: 724×322, tunnel axis at y=161, center mark at x=362.
const CANVAS_W = 724;
const CANVAS_H = 322;
const CENTER_X = 362;
const MID_Y = 161;
/** Pre-seed x for every orb (off-screen left) — what the first render paints. */
const INITIAL_X = -200;

const RING_SHADOW = "0 0 0 11.15px rgba(255,255,255,0.4), 0 0 0 22.3px rgba(255,255,255,0.4)";
const RING_SHADOW_PULSE = "0 0 0 15px rgba(255,255,255,0.6), 0 0 0 30px rgba(255,255,255,0.5)";

interface Orb {
  iconSrc?: string;
  icon?: string;
  fill: boolean;
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  av: number;
  entryY: number;
  transformed: boolean;
}

/** DOM handles for one orb, filled by ref callbacks and read only inside the rAF loop. */
interface OrbEls {
  orbEl: HTMLDivElement | null;
  contentEl: HTMLDivElement | null;
  iconEl: HTMLElement | null;
  badgeEl: HTMLDivElement | null;
}

function emptyEls(): OrbEls {
  return { orbEl: null, contentEl: null, iconEl: null, badgeEl: null };
}

/** Inner half-height of the aurora tunnel at canvas x (ported verbatim from the site). */
function tunnelHalfHeight(x: number): number {
  const t = Math.abs(x - CENTER_X);
  if (t <= 121) return 53;
  if (t <= 215) return 53 + ((t - 121) * 22) / 94;
  return 75 + ((Math.min(t, 362) - 215) * 65) / 147;
}

function rand(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

function makeOrb(src: string | undefined, icon: string | undefined, fill: boolean): Orb {
  return {
    iconSrc: src,
    icon,
    fill,
    x: INITIAL_X,
    y: MID_Y,
    vx: 50,
    vy: 0,
    angle: 0,
    av: 0,
    entryY: MID_Y,
    transformed: false,
  };
}

/** Initial layout: 3 orbs spread across the canvas, the rest queued off-screen left. */
function initialLayout(nowSec: number): { orbs: Orb[]; nextEntryAt: number } {
  const orbs: Orb[] = [];
  for (let i = 0; i < 3; i++) {
    const logo = ORB_LOGOS[i];
    const x = 40 + (644 * i) / 3 + rand(-20, 20);
    const entryY = MID_Y + rand(-120, 120);
    const t = 1 - Math.min(1, Math.abs(x - CENTER_X) / CENTER_X);
    const y = MID_Y + (entryY - MID_Y) * (1 - t ** 2);
    const orb = makeOrb(logo.src, logo.icon, Boolean(logo.fill));
    orb.x = x;
    orb.y = y;
    orb.vx = 50 + rand(-8, 8);
    orb.angle = rand(-0.2, 0.2);
    orb.av = rand(-0.3, 0.3);
    orb.entryY = entryY;
    orb.transformed = x > CENTER_X;
    orbs.push(orb);
  }
  let nextEntryAt = nowSec + 1.2;
  for (let i = 3; i < ORB_LOGOS.length; i++) {
    const logo = ORB_LOGOS[i];
    const entryY = MID_Y + rand(-120, 120);
    const orb = makeOrb(logo.src, logo.icon, Boolean(logo.fill));
    orb.x = -50 * (nextEntryAt - nowSec);
    orb.y = entryY;
    orb.vx = 50 + rand(-8, 8);
    orb.angle = rand(-0.2, 0.2);
    orb.av = rand(-0.3, 0.3);
    orb.entryY = entryY;
    orbs.push(orb);
    nextEntryAt += 0.9 + 1.4 * Math.random();
  }
  return { orbs, nextEntryAt };
}

/** Recycle an orb that left the canvas on the right; returns the new nextEntryAt. */
function recycle(orb: Orb, nowSec: number, prevEntryAt: number): number {
  const at = Math.max(nowSec + 0.9, prevEntryAt + 0.9 + 1.4 * Math.random());
  orb.x = -50 * (at - nowSec);
  orb.entryY = MID_Y + rand(-120, 120);
  orb.y = orb.entryY;
  orb.vx = 50 + rand(-8, 8);
  orb.vy = 0;
  orb.angle = rand(-0.2, 0.2);
  orb.av = rand(-0.3, 0.3);
  orb.transformed = false;
  return at;
}

/** Push the orb's simulated state into the DOM (styles only, no React state). */
function paintOrb(orb: Orb, els: OrbEls): void {
  const { orbEl, contentEl, iconEl, badgeEl } = els;
  if (!orbEl) return;
  orbEl.style.transform = `translate(${orb.x}px, ${orb.y}px) translate(-50%, -50%) rotate(${orb.angle}rad)`;
  if (orb.transformed) {
    orbEl.style.width = "52px";
    orbEl.style.height = "52px";
    if (contentEl) {
      contentEl.style.borderRadius = "17px";
      contentEl.style.boxShadow = "0 0 0 3px rgba(255, 92, 0, 0.5)";
    }
    if (iconEl) {
      const s = orb.fill ? "52px" : "26px";
      iconEl.style.width = s;
      iconEl.style.height = s;
    }
    if (badgeEl) badgeEl.style.display = "flex";
  } else {
    orbEl.style.width = "64px";
    orbEl.style.height = "64px";
    if (contentEl) {
      contentEl.style.borderRadius = "32px";
      contentEl.style.boxShadow = "0 0 16px 0 rgba(255, 255, 255, 0.25)";
    }
    if (iconEl) {
      const s = orb.fill ? "64px" : "40px";
      iconEl.style.width = s;
      iconEl.style.height = s;
    }
    if (badgeEl) badgeEl.style.display = "none";
  }
}

/** Center FundLine mark with the white ring that pulses on CORGI_PULSE_EVENT. */
function CenterMark() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anim: Animation | null = null;
    const pulse = () => {
      const el = ringRef.current;
      if (!el) return;
      anim?.cancel();
      anim = el.animate(
        [
          { boxShadow: RING_SHADOW, offset: 0 },
          { boxShadow: RING_SHADOW_PULSE, offset: 0.35 },
          { boxShadow: RING_SHADOW, offset: 1 },
        ],
        { duration: 650, easing: "ease-out" },
      );
    };
    window.addEventListener(CORGI_PULSE_EVENT, pulse);
    return () => {
      window.removeEventListener(CORGI_PULSE_EVENT, pulse);
      anim?.cancel();
    };
  }, []);

  return (
    <div className="absolute z-10" style={{ left: "283.95px", top: "82.95px", width: "156.1px", height: "156.1px" }}>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="absolute rounded-full bg-white"
        style={{ left: "22.3px", top: "22.3px", width: "111.5px", height: "111.5px", boxShadow: RING_SHADOW }}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <FundLineMark className="h-[88px] w-[88px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]" />
      </div>
    </div>
  );
}

/** The 10 physics-driven logo orbs flowing through the tunnel. */
function LogoPortalFlow() {
  const elsRef = useRef<OrbEls[]>(ORB_LOGOS.map(emptyEls));
  const nextEntryAtRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const els = elsRef.current;

    // Seed the simulation (random, so only on the client after mount).
    const layout = initialLayout(performance.now() / 1000);
    const orbs = layout.orbs;
    nextEntryAtRef.current = layout.nextEntryAt;

    let last = performance.now();
    const step = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      for (const o of orbs) {
        const t = 1 - Math.min(1, Math.abs(o.x - CENTER_X) / CENTER_X);
        const r = o.transformed ? 26 : 32;
        const targetSpeed = 50 + 370 * t ** 2.5;
        const accel = o.x < CENTER_X ? 3.5 : 2.2;
        o.vx += (targetSpeed - o.vx) * accel * dt;

        const t2 = t ** 2;
        const inside = o.x >= 0 && o.x <= CANVAS_W;
        const limit = inside ? tunnelHalfHeight(o.x) - r : Infinity;
        const targetY = MID_Y + Math.max(-limit, Math.min(limit, (o.entryY - MID_Y) * (1 - t2)));
        o.vy += (targetY - o.y) * 7 * dt;
        o.vy *= 1 - Math.min(0.9, 6 * dt);
        o.x += o.vx * dt;
        o.y += o.vy * dt;
        o.av *= 1 - Math.min(0.9, 0.8 * dt);
        o.angle += o.av * dt;

        if (inside) {
          const half = tunnelHalfHeight(o.x) - r;
          const top = MID_Y - half;
          const bottom = MID_Y + half;
          if (o.y < top) {
            o.y = top;
            if (o.vy < 0) o.vy = -(0.6 * o.vy);
            o.av += o.vx * dt * 0.008;
          } else if (o.y > bottom) {
            o.y = bottom;
            if (o.vy > 0) o.vy = -(0.6 * o.vy);
            o.av -= o.vx * dt * 0.008;
          }
        }

        if (!o.transformed && o.x >= CENTER_X) {
          o.transformed = true;
          window.dispatchEvent(new Event(CORGI_PULSE_EVENT));
        }
        if (o.x > 814) {
          nextEntryAtRef.current = recycle(o, now / 1000, nextEntryAtRef.current);
        }
      }

      // Pairwise circle collisions.
      for (let i = 0; i < orbs.length; i++) {
        const a = orbs[i];
        const ra = a.transformed ? 26 : 32;
        for (let j = i + 1; j < orbs.length; j++) {
          const b = orbs[j];
          const rb = b.transformed ? 26 : 32;
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const d2 = dx * dx + dy * dy;
          const minD = ra + rb;
          if (d2 > 0 && d2 < minD * minD) {
            const d = Math.sqrt(d2);
            const nx = dx / d;
            const ny = dy / d;
            const overlap = minD - d;
            a.x -= nx * overlap * 0.5;
            a.y -= ny * overlap * 0.5;
            b.x += nx * overlap * 0.5;
            b.y += ny * overlap * 0.5;
            const va = a.vx * nx + a.vy * ny;
            const rel = b.vx * nx + b.vy * ny - va;
            a.vx += rel * nx * 0.95;
            a.vy += rel * ny * 0.95;
            b.vx -= rel * nx * 0.95;
            b.vy -= rel * ny * 0.95;
            const tx = -ny;
            const tangential = (a.vx - b.vx) * tx + (a.vy - b.vy) * nx;
            a.av -= (tangential / ra) * 0.08;
            b.av += (tangential / rb) * 0.08;
          }
        }
      }

      for (let i = 0; i < orbs.length; i++) paintOrb(orbs[i], els[i]);
      rafRef.current = requestAnimationFrame(step);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Static: paint the seeded layout once and never animate.
      for (let i = 0; i < orbs.length; i++) paintOrb(orbs[i], els[i]);
      return;
    }

    let visible = false;
    let tabVisible = document.visibilityState !== "hidden";
    const stop = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
    const sync = () => {
      if (visible && tabVisible) {
        if (rafRef.current === null) {
          last = performance.now();
          rafRef.current = requestAnimationFrame(step);
        }
      } else {
        stop();
      }
    };
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible = e.isIntersecting;
        sync();
      },
      { rootMargin: "100px" },
    );
    io.observe(stage);
    const onVisibility = () => {
      tabVisible = document.visibilityState !== "hidden";
      sync();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <>
      <div ref={stageRef} aria-hidden="true" className="pointer-events-none absolute inset-0" />
      {ORB_LOGOS.map((logo, i) => {
        // Server/first render uses the deterministic pre-seed state (off-screen
        // left, untransformed); the effect seeds randomness and repaints via refs.
        const fill = Boolean(logo.fill);
        const x = INITIAL_X;
        const y = MID_Y;
        const angle = 0;
        const transformed = false;
        const size = "64px";
        const iconSize = fill ? "64px" : "40px";
        const iconPx = fill ? 64 : 40;
        return (
          <div
            key={logo.src ?? logo.icon}
            ref={(el) => {
              elsRef.current[i].orbEl = el;
            }}
            aria-hidden="true"
            className="absolute top-0 left-0"
            style={{
              width: size,
              height: size,
              transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${angle}rad)`,
              willChange: "transform, width, height",
            }}
          >
            <div
              ref={(el) => {
                elsRef.current[i].contentEl = el;
              }}
              className="relative flex size-full items-center justify-center overflow-hidden bg-[#f6f6f6]"
              style={{
                borderRadius: transformed ? "17px" : "32px",
                boxShadow: transformed ? "0 0 0 3px rgba(255, 92, 0, 0.5)" : "0 0 16px 0 rgba(255, 255, 255, 0.25)",
              }}
            >
              {logo.src ? (
                <Image
                  ref={(el) => {
                    elsRef.current[i].iconEl = el;
                  }}
                  alt=""
                  className="object-contain"
                  loading="lazy"
                  src={logo.src}
                  width={iconPx}
                  height={iconPx}
                  unoptimized
                  style={{ width: iconSize, height: iconSize }}
                />
              ) : (
                <div
                  ref={(el) => {
                    elsRef.current[i].iconEl = el;
                  }}
                  className="flex items-center justify-center"
                  style={{ width: iconSize, height: iconSize, containerType: "size" }}
                >
                  <MaterialIcon
                    name={logo.icon ?? "business_center"}
                    fill={fill ? 1 : 0}
                    className="text-[#191919]"
                    style={{ fontSize: fill ? "58cqw" : "100cqw", width: "100cqw", height: "100cqw" }}
                  />
                </div>
              )}
            </div>
            <div
              ref={(el) => {
                elsRef.current[i].badgeEl = el;
              }}
              className="-top-[6px] -right-[6px] absolute size-[24px] items-center justify-center rounded-full bg-[#ff5c00]"
              style={{ display: transformed ? "flex" : "none" }}
            >
              <MaterialIcon name="verified_user" size={16} className="text-white" />
            </div>
          </div>
        );
      })}
    </>
  );
}

/**
 * Right-hand white card of "Our Unique Advantage": the aurora tunnel with
 * physics-driven customer-logo orbs flowing past the corgi mark, plus the
 * title/description block.
 */
export function CorgiPlatformCard() {
  const panelRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Scale the fixed 724×322 canvas to the panel width (origin top-left).
  useEffect(() => {
    const panel = panelRef.current;
    const canvas = canvasRef.current;
    if (!panel || !canvas) return;
    const apply = () => {
      canvas.style.transform = `scale(${panel.clientWidth / CANVAS_W})`;
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(panel);
    return () => ro.disconnect();
  }, []);

  const { title, descriptionBefore, descriptionStrong, descriptionAfter } = ADVANTAGE.corgi;

  return (
    <div className="flex flex-col overflow-hidden rounded-[24px] bg-white">
      <div
        ref={panelRef}
        className="relative aspect-[724/322] overflow-hidden rounded-[24px] bg-[#2d3957] shadow-[0_8px_28px_0_rgba(0,0,0,0.4)]"
      >
        <div
          ref={canvasRef}
          className="absolute top-0 left-0 h-[322px] w-[724px] origin-top-left"
          style={{ width: CANVAS_W, height: CANVAS_H }}
        >
          <div className="absolute inset-0">
            <div className="absolute inset-[-7.5%_-3.05%]">
              <AuroraTunnelSvg />
            </div>
          </div>
          <LogoPortalFlow />
          <CenterMark />
        </div>
      </div>
      <div className="flex flex-col gap-3 p-3 md:p-5">
        <h3 className="font-bold font-sans text-[18px] md:text-[20px] text-[#4a4a4a] leading-none tracking-[-0.032em]">
          {title}
        </h3>
        <p className="font-sans text-[14px] md:text-[16px] text-[#4a4a4a] leading-[1.2] tracking-[-0.015em]">
          {descriptionBefore}
          <span className="font-semibold text-[#191919]">{descriptionStrong}</span>
          {descriptionAfter}
        </p>
      </div>
    </div>
  );
}
