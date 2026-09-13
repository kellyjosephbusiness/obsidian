import { InitialsAvatar } from "@/components/sites/corgi-insure-a0f7893c/shared/InitialsAvatar";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import type { FeatureMockKind } from "@/types/sites/corgi-insure-a0f7893c/products";

/** Static product mocks for the embedded-financing heroes. Lender names are fictional. */

const FRAME = "relative w-full max-w-[520px] rounded-[24px] border border-[#e1e1e1] bg-white p-5 shadow-[0_0_24px_0_rgba(25,25,25,0.12)] md:p-6";
const LABEL = "text-[11px] font-medium leading-[1.2] tracking-[0.02em] text-[#606060]";
const FAKE_INPUT = "flex min-h-[40px] items-center rounded-[10px] border border-[#e1e1e1] bg-white px-3 text-[13px] leading-none text-[#1d1d1d]";
const PRIMARY_BTN = "flex items-center justify-center rounded-[12px] bg-[#1e3a8a] px-4 py-2.5 text-[13px] font-medium leading-none text-white";
const WHITE_BTN = "flex items-center justify-center rounded-[12px] border border-[#e1e1e1] bg-white px-3 py-2 text-[12px] font-medium leading-none text-[#191919]";

function WindowBar({ title }: { title: string }) {
  return (
    <div className="mb-4 flex items-center gap-2 border-b border-[#e1e1e1] pb-3">
      <span className="size-2.5 rounded-full bg-[#ff405d]" />
      <span className="size-2.5 rounded-full bg-[#fe9850]" />
      <span className="size-2.5 rounded-full bg-[#4fc39a]" />
      <span className="ml-2 text-[12px] leading-none text-[#7b7b7b]">{title}</span>
    </div>
  );
}

function ApplicationMock() {
  return (
    <div className="mx-auto w-full max-w-[320px] rounded-[36px] border-[6px] border-[#191919] bg-white p-4 shadow-[0_0_24px_0_rgba(25,25,25,0.2)]">
      <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-[#191919]" />
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[11px] font-medium text-[#1e3a8a]">Step 2 of 3</span>
        <div className="flex gap-1" aria-hidden>
          <span className="h-1.5 w-6 rounded-full bg-[#1e3a8a]" />
          <span className="h-1.5 w-6 rounded-full bg-[#1e3a8a]" />
          <span className="h-1.5 w-6 rounded-full bg-[#e1e1e1]" />
        </div>
      </div>
      <h3 className="font-mono text-[20px] font-medium leading-none tracking-[-0.64px] text-[#1d1d1d]">Business financials</h3>
      <p className="mt-1 text-[12px] leading-[1.3] text-[#4e4e4e]">A few numbers, then connect your bank.</p>
      <div className="mt-4 flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <span className={LABEL}>Revenue in the last 12 months</span>
          <div className={FAKE_INPUT}>$510,000</div>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className={LABEL}>Average monthly revenue</span>
          <div className={FAKE_INPUT}>$42,000</div>
        </div>
        <div className="flex items-center gap-2 rounded-[10px] border border-dashed border-[#1e3a8a] bg-[#dde4f6] px-3 py-2.5">
          <MaterialIcon name="account_balance" size={18} className="text-[#1e3a8a]" />
          <span className="text-[12px] font-medium leading-none text-[#1e3a8a]">Main checking •• 4821 connected</span>
          <MaterialIcon name="check_circle" size={16} fill={1} className="ml-auto text-[#1e3a8a]" />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-[12px] text-[#4e4e4e]">← Back</span>
        <span className={PRIMARY_BTN}>Next →</span>
      </div>
    </div>
  );
}

const OFFERS = [
  { lender: "Northgate Bank", product: "Line of credit", apr: "10.4% APR", payment: "$1,120 / mo", funds: "1 day", best: true },
  { lender: "Prairie Credit Union", product: "Term loan", apr: "11.9% APR", payment: "$1,260 / mo", funds: "2 days", best: false },
  { lender: "Swiftline Funding", product: "Term loan", apr: "14.2% APR", payment: "$1,340 / mo", funds: "Same day", best: false },
];

function MarketplaceMock() {
  return (
    <div className={FRAME}>
      <WindowBar title="offers.acme.example" />
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="text-[13px] font-medium text-[#191919]">3 offers for $40,000</span>
        <div className="flex gap-1.5">
          <span className="rounded-[4px] bg-[#dde4f6] px-2 py-1 text-[11px] font-medium leading-none text-[#1e3a8a]">Total cost</span>
          <span className="rounded-[4px] border border-[#e1e1e1] px-2 py-1 text-[11px] font-medium leading-none text-[#4a4a4a]">Payment</span>
          <span className="rounded-[4px] border border-[#e1e1e1] px-2 py-1 text-[11px] font-medium leading-none text-[#4a4a4a]">Speed</span>
        </div>
      </div>
      <ul className="flex flex-col gap-2">
        {OFFERS.map((o) => (
          <li key={o.lender} className={`flex items-center gap-3 rounded-[14px] border p-3 ${o.best ? "border-[#1e3a8a] bg-[#f9f9f9]" : "border-[#e1e1e1] bg-white"}`}>
            <InitialsAvatar name={o.lender} className="size-9 shrink-0 rounded-[10px] text-[12px]" />
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="flex items-center gap-2 truncate text-[13px] font-medium leading-none text-[#191919]">
                {o.lender}
                {o.best && <span className="rounded-[4px] bg-[#1e3a8a] px-1.5 py-0.5 text-[10px] font-medium leading-none text-white">Lowest cost</span>}
              </span>
              <span className="text-[11px] leading-none text-[#606060]">
                {o.product} · {o.apr} · funds in {o.funds}
              </span>
            </div>
            <span className="hidden text-[13px] font-medium text-[#191919] sm:inline">{o.payment}</span>
            <span className={WHITE_BTN}>Select</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const MATCHES = [
  { lender: "Northgate Bank", score: 91, routed: true },
  { lender: "Prairie Credit Union", score: 84, routed: true },
  { lender: "Swiftline Funding", score: 72, routed: true },
  { lender: "Harbor Capital", score: 41, routed: false },
];

function MatchingMock() {
  return (
    <div className={FRAME}>
      <WindowBar title="match preview" />
      <div className="mb-4 flex flex-wrap gap-1.5">
        {["20 months in business", "$38K / mo revenue", "Good credit", "Restaurant"].map((chip) => (
          <span key={chip} className="rounded-[4px] bg-[#dde4f6] px-2 py-1 text-[11px] font-medium leading-none text-[#1e3a8a]">
            {chip}
          </span>
        ))}
      </div>
      <ul className="flex flex-col gap-2.5">
        {MATCHES.map((m) => (
          <li key={m.lender} className={`flex items-center gap-3 ${m.routed ? "" : "opacity-50"}`}>
            <InitialsAvatar name={m.lender} className="size-8 shrink-0 rounded-[8px] text-[11px]" />
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-[13px] font-medium leading-none text-[#191919]">{m.lender}</span>
                <span className="text-[12px] leading-none text-[#4a4a4a] tabular-nums">{m.score}% fit</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#e1e1e1]">
                <div className={`h-full rounded-full ${m.routed ? "bg-[#1e3a8a]" : "bg-[#9e9e9e]"}`} style={{ width: `${m.score}%` }} />
              </div>
            </div>
            <span className={`w-[72px] shrink-0 text-center text-[10px] font-medium leading-none ${m.routed ? "rounded-[4px] bg-[#1e3a8a] px-1.5 py-1 text-white" : "text-[#7b7b7b]"}`}>
              {m.routed ? "Routed" : "Not sent"}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 flex items-center gap-1.5 text-[11px] leading-[1.3] text-[#606060]">
        <MaterialIcon name="info" size={14} className="shrink-0 text-[#1e3a8a]" />
        Only lenders above the 70% threshold receive the application.
      </p>
    </div>
  );
}

function PrequalifyMock() {
  return (
    <div className={`${FRAME} max-w-[420px]`}>
      <div className="mb-4 flex items-center gap-2">
        <MaterialIcon name="verified" size={20} className="text-[#1e3a8a]" />
        <span className="text-[13px] font-medium text-[#191919]">Prequalify in 10 seconds</span>
        <span className="ml-auto text-[11px] text-[#7b7b7b]">No credit impact</span>
      </div>
      <div className="flex flex-col gap-2.5">
        {[
          ["Monthly revenue", "$40,000"],
          ["Time in business", "1 – 2 years"],
          ["Credit score", "660 – 719"],
        ].map(([label, value]) => (
          <div key={label} className="flex items-center justify-between rounded-[10px] border border-[#e1e1e1] bg-white px-3 py-2.5">
            <span className="text-[12px] text-[#606060]">{label}</span>
            <span className="text-[13px] font-medium text-[#191919]">{value}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-[16px] bg-[#1e3a8a] p-4 text-white">
        <span className="text-[11px] text-[#dde4f6]">You may qualify for</span>
        <p className="mt-1 font-mono text-[26px] font-medium leading-none tracking-[-0.83px] md:text-[30px]">$43,000 – $108,000</p>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
          <div className="ml-[8%] h-full w-[14%] rounded-full bg-white" />
        </div>
      </div>
      <span className={`${PRIMARY_BTN} mt-4 w-full`}>Continue application →</span>
    </div>
  );
}

export function FeatureMock({ kind }: { kind: FeatureMockKind }) {
  switch (kind) {
    case "application":
      return <ApplicationMock />;
    case "marketplace":
      return <MarketplaceMock />;
    case "matching":
      return <MatchingMock />;
    case "prequalify":
      return <PrequalifyMock />;
  }
}
