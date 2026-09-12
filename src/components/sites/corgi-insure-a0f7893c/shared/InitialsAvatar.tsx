import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

const PALETTES = [
  ["#ff5c00", "#ff9a5c"],
  ["#191919", "#4e4e4e"],
  ["#1f4fd8", "#6f9bff"],
  ["#0f7b5f", "#4fc39a"],
  ["#7a2ee6", "#b98cff"],
  ["#c2410c", "#f59e0b"],
];

function hash(input: string) {
  let h = 0;
  for (let i = 0; i < input.length; i++) h = (h * 31 + input.charCodeAt(i)) >>> 0;
  return h;
}

export function initialsOf(name: string, max = 2) {
  return name
    .replace(/[^A-Za-z0-9 &]/g, " ")
    .split(/\s+/)
    .filter((w) => w && w !== "&")
    .slice(0, max)
    .map((w) => w[0]!.toUpperCase())
    .join("");
}

export function gradientFor(seed: string): CSSProperties {
  const [a, b] = PALETTES[hash(seed) % PALETTES.length]!;
  return { backgroundImage: `linear-gradient(135deg, ${a} 0%, ${b} 100%)` };
}

/**
 * Photo/logo stand-in: initials on a deterministic brand gradient. Used wherever the
 * original layout expected a headshot or company mark (testimonials, quote strip, nav highlights).
 */
export function InitialsAvatar({
  name,
  className,
  textClassName,
  max = 2,
}: {
  name: string;
  className?: string;
  textClassName?: string;
  max?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn("flex items-center justify-center select-none text-white", className)}
      style={gradientFor(name)}
    >
      <span className={cn("font-mono font-medium leading-none tracking-[-0.02em]", textClassName)}>{initialsOf(name, max)}</span>
    </div>
  );
}
