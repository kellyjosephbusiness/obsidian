"use client";

import { useCallback, useLayoutEffect, useRef, useState, useSyncExternalStore, type PointerEvent, type ReactNode, type RefObject } from "react";

const subscribeNoop = () => () => {};
const useIsClient = () => useSyncExternalStore(subscribeNoop, () => true, () => false);
import { createPortal } from "react-dom";

/**
 * Cursor-following label ("Try me!", "Draggable!", "Flick me!") exactly as corgi.insure renders it:
 * fixed, portaled to <body>, positioned at (clientX + 4, clientY - 4) and translated up 100%,
 * width animates 0 → measured width in 180ms cubic-bezier(.4,0,.2,1).
 */
export function CursorChip({
  open,
  chipRef,
  icon,
  label,
}: {
  open: boolean;
  chipRef: RefObject<HTMLDivElement | null>;
  icon: ReactNode;
  label: string;
}) {
  const inner = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | null>(null);
  const mounted = useIsClient();
  useLayoutEffect(() => {
    if (inner.current && width === null) setWidth(inner.current.offsetWidth);
  }, [mounted, width]);
  if (!mounted) return null;
  return createPortal(
    <div
      ref={chipRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 overflow-hidden rounded-[4px] bg-[#0268DE]"
      style={{
        width: open && width !== null ? `${width}px` : "0px",
        transform: "translateY(-100%)",
        transition: "width 180ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div ref={inner} className="flex items-center gap-1.5 px-2 py-1" style={{ width: "max-content" }}>
        {icon}
        <span className="whitespace-nowrap text-[12px] font-medium leading-[1.2] tracking-[-0.18px] text-white">{label}</span>
      </div>
    </div>,
    document.body,
  );
}

/**
 * Pointer handlers that drive a CursorChip: opens on mouse enter, follows on move, closes on leave.
 * `suppress(true)` hides the chip temporarily (e.g. while dragging) without leaving the element.
 */
export function useCursorChip() {
  const chipRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [suppressed, setSuppressed] = useState(false);
  const move = useCallback((x: number, y: number) => {
    const el = chipRef.current;
    if (el) {
      el.style.left = `${x + 4}px`;
      el.style.top = `${y - 4}px`;
    }
  }, []);
  const handlers = {
    onPointerEnter: (e: PointerEvent<HTMLElement>) => {
      if (e.pointerType === "mouse") {
        move(e.clientX, e.clientY);
        setHovering(true);
        setSuppressed(false);
      }
    },
    onPointerMove: (e: PointerEvent<HTMLElement>) => {
      if (e.pointerType === "mouse") move(e.clientX, e.clientY);
    },
    onPointerLeave: (e: PointerEvent<HTMLElement>) => {
      if (e.pointerType === "mouse") {
        setHovering(false);
        setSuppressed(false);
      }
    },
  };
  return { chipRef, open: hovering && !suppressed, hovering, setHovering, suppress: setSuppressed, move, handlers };
}
