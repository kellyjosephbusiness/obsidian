"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import type { CoveragePackage, PolicyPill } from "@/types/sites/corgi-insure-a0f7893c/home";
import { COVERAGE_PACKAGES, POLICY_PILLS } from "./data";

/**
 * Selection is shared across the whole grid: at most one policy pill (in one card)
 * is open at a time. `prev` is kept so the card that is closing can delay its
 * collapse when the selection moves to a different card (site source: closeDelay).
 */
interface Selection {
  pkgIdx: number;
  policyIdx: number;
}

interface SelectionState {
  prev: Selection | null;
  current: Selection | null;
}

/** Spring used by the site for the panel height / margin-top. */
const PANEL_SPRING = { type: "spring", stiffness: 220, damping: 28, mass: 0.9 } as const;
const FADE = { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] } as const;

/**
 * Width of the card header's padding box at the desktop reference width
 * (310px card − 2 × 1px border). The site positions the art with `left` values
 * measured against this box; we convert them to `right` offsets so the art stays
 * anchored to the card's right edge at every card width (358px on mobile,
 * 348px on tablet) — exactly what the computed trees show (right: -31/-52/-103/-68).
 */
const DESKTOP_HEADER_INNER_WIDTH = 308;

/** Keeps the last two words together (site: no-orphan text helper). */
function NoOrphan({ text }: { text: string }): ReactNode {
  const i = text.lastIndexOf(" ");
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      {" "}
      {text.slice(i + 1)}
    </>
  );
}

interface PolicyChipProps {
  policy: PolicyPill;
  active: boolean;
  onSelect: () => void;
}

function PolicyChip({ policy, active, onSelect }: PolicyChipProps) {
  // Each click bumps the key so the ripple span remounts and replays `chip-ripple` (0.35s, no fill).
  const [rippleKey, setRippleKey] = useState(0);

  return (
    <button
      type="button"
      data-active={active}
      onClick={() => {
        setRippleKey((k) => k + 1);
        onSelect();
      }}
      className="relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-[4px] bg-[#ffdecc] px-2 py-1 font-medium text-[#ff5c00] text-[12px] leading-none transition-[background-color,transform] duration-300 ease-out hover:rotate-[8deg] hover:bg-[#ffc9a3] data-[active=true]:rotate-[8deg] data-[active=true]:bg-[#ffbe99]"
    >
      {rippleKey > 0 && (
        <span aria-hidden key={rippleKey} className="pointer-events-none absolute inset-0 animate-chip-ripple rounded-[4px]" />
      )}
      {policy.label}
    </button>
  );
}

interface CoveragePackageCardProps {
  pkg: CoveragePackage;
  pills: PolicyPill[];
  /** Index into `pkg.policies` of the open pill, or null when this card is closed. */
  selectedIdx: number | null;
  /** Seconds to wait before collapsing (0.3 when the selection moved to another card). */
  closeDelay: number;
  onSelect: (policyIdx: number) => void;
}

function CoveragePackageCard({ pkg, pills, selectedIdx, closeDelay, onSelect }: CoveragePackageCardProps) {
  const policies = pkg.policies
    .map((label) => pills.find((p) => p.label === label))
    .filter((p): p is PolicyPill => p !== undefined);

  const isOpen = selectedIdx !== null;
  const selectedPolicy = selectedIdx !== null ? (policies[selectedIdx] ?? null) : null;

  // The policy whose text stays in the panel while it collapses (set on every pill click).
  const [lastPolicy, setLastPolicy] = useState<PolicyPill | null>(null);
  const content = selectedPolicy ?? lastPolicy;

  // Measured panel heights per label (hidden clone → scrollHeight), filled lazily on first open.
  const [heights, setHeights] = useState<Record<string, number>>({});
  const measureBoxRef = useRef<HTMLDivElement>(null);
  const measureLabelRef = useRef<HTMLSpanElement>(null);
  const measureDescRef = useRef<HTMLSpanElement>(null);

  function measure(policy: PolicyPill) {
    if (heights[policy.label] !== undefined) return;
    const box = measureBoxRef.current;
    const label = measureLabelRef.current;
    const desc = measureDescRef.current;
    if (!box || !label || !desc) return;
    label.textContent = policy.label;
    desc.textContent = policy.description;
    const h = box.scrollHeight;
    label.textContent = "";
    desc.textContent = "";
    setHeights((prev) => ({ ...prev, [policy.label]: h }));
  }

  function renderChip(policy: PolicyPill, idx: number) {
    return (
      <PolicyChip
        key={`${policy.label}-${idx}`}
        policy={policy}
        active={selectedIdx === idx}
        onSelect={() => {
          measure(policy);
          setLastPolicy(policy);
          onSelect(idx);
        }}
      />
    );
  }

  // The site keeps the final two pills (plus the "+" link) in a shrink-0 group so they wrap together.
  const tailStart = Math.max(0, policies.length - 2);
  const headChips = policies.slice(0, tailStart);
  const tailChips = policies.slice(tailStart);

  const panelHeight = content ? (heights[content.label] ?? 0) : 0;
  const delay = isOpen ? 0 : closeDelay;

  const { art } = pkg;
  const artRight = DESKTOP_HEADER_INNER_WIDTH - art.wrapper.left - art.wrapper.width;

  return (
    <div className="flex h-full flex-col overflow-clip rounded-[24px] border border-[#e1e1e1] bg-white shadow-[0_0_24px_0_rgba(25,25,25,0.05)]">
      {/* Header: title + art */}
      <div className="-mx-px -mt-px relative flex h-[160px] flex-col justify-end gap-3 overflow-clip rounded-[24px] border border-[#e1e1e1] bg-white p-5 shadow-[0_0_24px_0_rgba(25,25,25,0.35)]">
        <div
          aria-hidden
          className="pointer-events-none absolute flex items-center justify-center"
          style={{ top: art.wrapper.top, right: artRight, width: art.wrapper.width, height: art.wrapper.height }}
        >
          <div style={{ transform: art.transform, width: art.width, height: art.height }}>
            <Image
              alt=""
              src={art.src}
              width={art.width}
              height={art.height}
              quality={60}
              className={art.objectFit === "cover" ? "object-cover" : "object-contain"}
              style={{ width: art.width, height: art.height }}
            />
          </div>
        </div>
        <div className="relative flex flex-col items-start gap-3">
          <h3 className="font-mono text-[24px] text-[#191919] leading-none tracking-[-1.024px] md:text-[32px]">{pkg.title}</h3>
          <p className="font-medium text-[#4a4a4a] text-[14px] leading-[1.2] tracking-[-0.21px] [text-wrap:balance]">
            <NoOrphan text={pkg.description} />
          </p>
        </div>
      </div>

      {/* Body: intro, pills, description panel */}
      <div className="flex flex-1 flex-col border-[#e1e1e1] border-b p-5">
        <p className="text-center font-medium text-[#4a4a4a] text-[12px] [text-wrap:balance]">
          <NoOrphan text={pkg.pillsIntro} />
        </p>
        <div className="mt-3 flex flex-wrap items-start justify-center gap-3">
          {headChips.map(renderChip)}
          <span className="inline-flex shrink-0 items-start gap-3" data-policy-tail-group>
            {tailChips.map((policy, i) => renderChip(policy, tailStart + i))}
            {pkg.morePoliciesHref && (
              <Link
                href={pkg.morePoliciesHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-[4px] bg-[#ffdecc] px-2 py-1 font-medium text-[#ff5c00] text-[12px] leading-none transition-[background-color,transform] duration-300 ease-out hover:rotate-[8deg] hover:bg-[#ffc9a3]"
              >
                +
              </Link>
            )}
          </span>
        </div>

        <motion.div
          className="overflow-hidden"
          initial={false}
          animate={{ height: isOpen ? panelHeight : 0, marginTop: isOpen ? 12 : 0, opacity: isOpen ? 1 : 0 }}
          transition={{
            height: { ...PANEL_SPRING, delay },
            marginTop: { ...PANEL_SPRING, delay },
            opacity: { ...FADE, delay: isOpen ? 0 : delay },
          }}
        >
          <AnimatePresence initial={false} mode="popLayout">
            {content && (
              <motion.div key={content.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={FADE}>
                <div className="flex flex-col gap-1.5 rounded-[4px] bg-[#f6f6f6] px-2 py-2">
                  <span className="font-semibold text-[#191919] text-[12px] leading-none">{content.label}</span>
                  <span className="font-medium text-[#4a4a4a] text-[12px] leading-[1.35]">{content.description}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Hidden measuring clone: same markup as the panel, used to read the target height per label. */}
        <div aria-hidden className="pointer-events-none invisible h-0 min-h-0 shrink-0 overflow-hidden">
          <div ref={measureBoxRef} className="flex flex-col gap-1.5 rounded-[4px] bg-[#f6f6f6] px-2 py-2">
            <span ref={measureLabelRef} className="font-semibold text-[#191919] text-[12px] leading-none" />
            <span ref={measureDescRef} className="font-medium text-[#4a4a4a] text-[12px] leading-[1.35]" />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="p-3">
        <PressableButton
          className="w-full"
          faceClassName="w-full gap-1 text-body"
          href={pkg.ctaHref}
          size="small"
          variant={pkg.ctaVariant}
          dataTrack="cta-homepage-package"
        >
          <span className="inline-flex items-center whitespace-nowrap">Get a quote instantly</span>
          <MaterialIcon name={pkg.ctaIcon} size={16} />
        </PressableButton>
      </div>
    </div>
  );
}

interface CoveragePackageGridProps {
  packages?: CoveragePackage[];
  pills?: PolicyPill[];
}

/**
 * The four coverage-package cards. Clicking a policy pill opens its description
 * panel; only one pill is open across the grid, clicking the open pill (or anywhere
 * outside the grid) closes it, and moving the selection to another card delays the
 * old card's collapse by 0.3s while the new one opens immediately.
 */
export function CoveragePackageGrid({ packages = COVERAGE_PACKAGES, pills = POLICY_PILLS }: CoveragePackageGridProps) {
  const [{ prev, current }, setSelection] = useState<SelectionState>({ prev: null, current: null });
  const gridRef = useRef<HTMLDivElement>(null);

  const select = (next: Selection | null) => setSelection((s) => ({ prev: s.current, current: next }));

  useEffect(() => {
    if (current === null) return;
    const onPointerDown = (e: PointerEvent) => {
      if (gridRef.current && !gridRef.current.contains(e.target as Node)) {
        setSelection((s) => ({ prev: s.current, current: null }));
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [current]);

  const movedBetweenCards = prev !== null && current !== null && prev.pkgIdx !== current.pkgIdx;

  return (
    <div ref={gridRef} className="relative grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      <div aria-hidden className="-translate-x-1/2 pointer-events-none absolute top-0 left-1/2 h-px w-screen bg-[#e1e1e1]" />
      <div aria-hidden className="-translate-x-1/2 pointer-events-none absolute bottom-0 left-1/2 h-px w-screen bg-[#e1e1e1]" />
      {packages.map((pkg, pkgIdx) => (
        <CoveragePackageCard
          key={pkg.id}
          pkg={pkg}
          pills={pills}
          selectedIdx={current?.pkgIdx === pkgIdx ? current.policyIdx : null}
          closeDelay={movedBetweenCards && prev.pkgIdx === pkgIdx ? 0.3 : 0}
          onSelect={(policyIdx) =>
            select(current?.pkgIdx === pkgIdx && current.policyIdx === policyIdx ? null : { pkgIdx, policyIdx })
          }
        />
      ))}
    </div>
  );
}
