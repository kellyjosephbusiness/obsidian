"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type TargetAndTransition, type Transition } from "motion/react";
import type { SpecializedCoverage } from "@/types/sites/corgi-insure-a0f7893c/home";
import { CursorChip, useCursorChip } from "@/components/sites/corgi-insure-a0f7893c/shared/CursorChip";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { POLICIES_HEADER, SPECIALIZED_COVERAGES } from "./data";

/** Resting positions of the three visible cards, front first. Deeper cards sit on the last slot at opacity 0. */
const SLOTS = [
  { x: 0, y: 0, scale: 1, shadow: "0 0 24px 0 rgba(25, 25, 25, 0.28)" },
  { x: 17.79, y: 31, scale: 0.901, shadow: "0 0 13px 0 rgba(25, 25, 25, 0.2)" },
  { x: 28.58, y: 53, scale: 0.834, shadow: "0 0 11px 0 rgba(25, 25, 25, 0.16)" },
] as const;
const NO_SHADOW = "0 0 0 0 rgba(25, 25, 25, 0)";

const CARD_WIDTH = 344;
const CARD_HEIGHT = 155;
const STAGE_HEIGHT = 168;

/** Flick animation length in ms; also the lock-out window between consecutive flicks. */
const FLICK_MS = 480;
/** Auto-flick cadence in ms. */
const AUTO_FLICK_MS = 4200;
/** Drag distance (px) beyond which a release flicks the front card instead of snapping back. */
const DRAG_THRESHOLD = 90;

const FLICK_TRANSITION: Transition = { duration: 0.48, ease: [0.33, 0, 0.3, 1] };
const DRAG_TRANSITION: Transition = { duration: 0 };
const SETTLE_TRANSITION: Transition = { type: "spring", stiffness: 320, damping: 32, mass: 0.9 };

interface Flick {
  coverageIndex: number;
  nx: number;
  ny: number;
}

function CoverageCard({ coverage }: { coverage: SpecializedCoverage }) {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[8px] border border-[#e1e1e1] bg-[#f6f6f6]"
      style={{ width: `${CARD_WIDTH}px`, height: `${CARD_HEIGHT}px` }}
    >
      <div className="flex w-full flex-col gap-3 border-[#e1e1e1] border-b bg-white p-3">
        <div className="flex min-h-[24px] w-fit items-center justify-center rounded-[4px] border border-[#e1e1e1] bg-[#f6f6f6] px-2 py-1">
          <span className="text-[12px] text-[#4a4a4a] leading-[1.2] tracking-[-0.18px]">{POLICIES_HEADER.turnaround}</span>
        </div>
        <h4 className="font-mono text-[#191919] text-[18px] md:text-[20px] leading-none tracking-[-0.64px]">{coverage.title}</h4>
      </div>
      <div className="p-3">
        <p className="overflow-hidden text-[#4e4e4e] text-[14px] leading-[1.2] tracking-[-0.21px]" style={{ height: "51px" }}>
          {coverage.desc}
        </p>
      </div>
    </div>
  );
}

/**
 * The flickable stack of 12 specialized coverages (bottom-right card of the Policies grid).
 * Auto-flicks the front card every 4.2s (alternating right/left); the user can drag/flick it
 * with any pointer. Cursor shows the orange "Flick me!" chip while hovering with a mouse.
 */
export function SpecializedCoveragesStack({ coverages = SPECIALIZED_COVERAGES }: { coverages?: SpecializedCoverage[] } = {}) {
  const [order, setOrder] = useState<number[]>(() => coverages.map((_, i) => i));
  const [flicking, setFlicking] = useState<Flick | null>(null);
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const busyRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const dragDeltaRef = useRef({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement>(null);
  const autoDirRef = useRef<1 | -1>(1);

  const chip = useCursorChip();
  const reducedMotion = useReducedMotion();

  const flick = useCallback(
    (nx: number, ny: number) => {
      if (busyRef.current) return;
      busyRef.current = true;
      const front = order[0];
      setFlicking({ coverageIndex: front, nx, ny });
      setOrder([...order.slice(1), front]);
      setDragOffset({ x: 0, y: 0 });
      window.setTimeout(() => {
        setFlicking(null);
        busyRef.current = false;
      }, FLICK_MS);
    },
    [order],
  );

  // Auto-flick: re-armed after every flick / drag end, alternating direction.
  useEffect(() => {
    if (dragging || flicking || reducedMotion) return;
    const timer = window.setTimeout(() => {
      flick(autoDirRef.current, 0);
      autoDirRef.current = autoDirRef.current === 1 ? -1 : 1;
    }, AUTO_FLICK_MS);
    return () => window.clearTimeout(timer);
  }, [dragging, flicking, reducedMotion, flick]);

  // Window-level pointer tracking while dragging the front card.
  useEffect(() => {
    if (!dragging) return;

    const onMove = (e: PointerEvent) => {
      if (e.pointerId !== pointerIdRef.current) return;
      const dx = e.clientX - dragStartRef.current.x;
      const dy = e.clientY - dragStartRef.current.y;
      dragDeltaRef.current = { x: dx, y: dy };

      const stage = stageRef.current;
      if (stage) {
        const rect = stage.getBoundingClientRect();
        if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
          // Leaving the stage flicks the card in the drag direction.
          pointerIdRef.current = null;
          setDragging(false);
          const len = Math.hypot(dx, dy);
          if (len > 0) flick(dx / len, dy / len);
          return;
        }
      }
      setDragOffset({ x: dx, y: dy });
    };

    const onUp = (e: PointerEvent) => {
      if (e.pointerId !== pointerIdRef.current) return;
      const { x: dx, y: dy } = dragDeltaRef.current;
      pointerIdRef.current = null;
      setDragging(false);
      const len = Math.hypot(dx, dy);
      if (len > DRAG_THRESHOLD) flick(dx / len, dy / len);
      else setDragOffset({ x: 0, y: 0 });
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [dragging, flick]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (busyRef.current) return;
    e.preventDefault();
    pointerIdRef.current = e.pointerId;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    dragDeltaRef.current = { x: 0, y: 0 };
    setDragging(true);
  };

  return (
    <div className="group flex aspect-[344/308] flex-col self-start overflow-hidden rounded-[8px] border border-[#e1e1e1] bg-white">
      <div
        ref={stageRef}
        aria-hidden
        className="relative flex flex-1 items-center justify-center overflow-hidden border-b border-[#e1e1e1] bg-[#f6f6f6]"
        style={{ containerType: "inline-size", perspective: "1400px" }}
      >
        <div
          className="relative"
          style={{
            width: `${CARD_WIDTH}px`,
            height: `${STAGE_HEIGHT}px`,
            transform: `scale(min(1, calc((100cqw - 32px) / ${CARD_WIDTH}px)))`,
            transformOrigin: "center",
            transformStyle: "preserve-3d",
          }}
        >
          {SPECIALIZED_COVERAGES.map((coverage, index) => {
            const position = order.indexOf(index);
            const isFlicking = flicking?.coverageIndex === index;
            const inSlots = position < SLOTS.length;
            const slot = inSlots ? SLOTS[position] : SLOTS[SLOTS.length - 1];

            let target: TargetAndTransition;
            let transition: Transition;
            if (isFlicking) {
              const { nx, ny } = flicking;
              target = { x: 560 * nx, y: 560 * ny, scale: 0.92, rotate: 22 * nx, rotateY: 0, opacity: 0, boxShadow: NO_SHADOW };
              transition = FLICK_TRANSITION;
            } else if (position === 0 && dragging) {
              target = {
                x: slot.x + dragOffset.x,
                y: slot.y + dragOffset.y,
                rotate: 0.06 * dragOffset.x,
                rotateY: 0,
                scale: slot.scale,
                opacity: 1,
                boxShadow: slot.shadow,
              };
              transition = DRAG_TRANSITION;
            } else {
              target = {
                x: slot.x,
                y: slot.y,
                rotate: 0,
                rotateY: 0,
                scale: slot.scale,
                opacity: inSlots ? 1 : 0,
                boxShadow: inSlots ? slot.shadow : NO_SHADOW,
              };
              transition = SETTLE_TRANSITION;
            }

            return (
              <motion.div
                key={coverage.title}
                initial={false}
                animate={target}
                transition={transition}
                style={{
                  zIndex: isFlicking ? 100 : SPECIALIZED_COVERAGES.length - position,
                  transformOrigin: "top left",
                  transformStyle: "preserve-3d",
                  willChange: "transform, box-shadow, opacity",
                  borderRadius: "24px",
                }}
                className="absolute top-0 left-0"
              >
                <CoverageCard coverage={coverage} />
              </motion.div>
            );
          })}
          <div
            aria-hidden
            className="absolute top-0 left-0 cursor-grab touch-none select-none active:cursor-grabbing"
            style={{ zIndex: 200, width: `${CARD_WIDTH}px`, height: `${CARD_HEIGHT}px` }}
            onPointerDown={onPointerDown}
            onDragStart={(e) => e.preventDefault()}
            {...chip.handlers}
          />
        </div>
      </div>
      <CursorChip
        open={chip.open && !dragging}
        chipRef={chip.chipRef}
        icon={<MaterialIcon name="pan_tool" size={12} className="shrink-0 text-white" />}
        label="Flick me!"
      />
      <Link
        href={POLICIES_HEADER.seeSpecialized.href}
        className="flex h-[63px] items-center justify-center bg-white p-3 font-medium text-[16px] text-[#0160CC] tracking-[-0.24px] hover:underline"
      >
        {POLICIES_HEADER.seeSpecialized.label}
      </Link>
    </div>
  );
}
