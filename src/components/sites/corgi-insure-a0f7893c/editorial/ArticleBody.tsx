"use client";

import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@/components/sites/corgi-insure-a0f7893c/press-releases--series-b-f1aae1d8/icons";
import { FinancialFormMock } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/FinancialFormMock";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import type { EditorialBlock, InlineCta, MediaContact, RailCta } from "./types";

/** Fixed header (announcement bar 36px + nav 56px) + 24px breathing room — matches the press release's sticky `top:116px`. */
const STICKY_TOP = 116;
const SPY_LINE = STICKY_TOP + 48;

/** Scroll-spy: the active block is the last one whose top is above SPY_LINE. */
function useActiveBlock(ids: string[]): string {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const blocks = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
    if (blocks.length === 0) return;
    const update = () => {
      let current = blocks[0].id;
      for (const block of blocks) {
        if (block.getBoundingClientRect().top <= SPY_LINE) current = block.id;
      }
      setActive(current);
    };
    const observer = new IntersectionObserver(update, {
      rootMargin: `-${SPY_LINE}px 0px 0px 0px`,
      threshold: [0, 0.01, 0.25, 0.5, 0.75, 1],
    });
    blocks.forEach((block) => observer.observe(block));
    update();
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

function scrollToBlock(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function TableOfContents({ blocks }: { blocks: EditorialBlock[] }) {
  const [ids] = useState(() => blocks.map((block) => block.id));
  const active = useActiveBlock(ids);
  return (
    <div className="absolute top-0 right-full bottom-0 mr-3 hidden xl:block">
      <div className="sticky top-[116px] py-3 transition-[top] duration-300">
        <nav aria-label="On this page" className="flex w-max max-w-[150px] flex-col gap-2">
          {blocks.map((block) => {
            const isActive = block.id === active;
            return (
              <button
                key={block.id}
                type="button"
                aria-current={isActive ? "true" : undefined}
                onClick={() => scrollToBlock(block.id)}
                className={cn(
                  "flex items-start gap-2 text-left text-[12px] leading-[1.3] tracking-tight",
                  isActive ? "text-[#1e3a8a]" : "text-[#4a4a4a] hover:text-[#1e3a8a]",
                )}
              >
                {isActive ? <span className="mt-[5px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#1e3a8a]" /> : null}
                {block.tocLabel}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

function InlineCtaCard({ cta }: { cta: InlineCta }) {
  return (
    <div className="rounded-[8px] bg-[#191919] py-3 pr-3 pl-6">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-body font-medium text-white">{cta.title}</span>
          <span className="text-body text-[#a0a0a0]">{cta.subtitle}</span>
        </div>
        <PressableButton href={cta.button.href} variant="primary" size="small" className="shrink-0" faceClassName="gap-1 px-6 py-3">
          {cta.button.label}
          <ArrowRightIcon className="h-4 w-4" />
        </PressableButton>
      </div>
    </div>
  );
}

function MediaContactBlock({ contact }: { contact: MediaContact }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-[20px] leading-none font-bold tracking-tight text-[#191919]">{contact.heading}</h3>
      <p className="text-body text-[#4a4a4a]">
        {contact.name}
        <br />
        {contact.title}
        <br />
        <a href={`mailto:${contact.email}`} className="text-[#1e3a8a] underline-offset-2 hover:underline">
          {contact.email}
        </a>
      </p>
    </div>
  );
}

interface BodyProps {
  blocks: EditorialBlock[];
  inlineCta: InlineCta;
  inlineCtaAfter: string;
  endCta: { label: string; href: string };
  mediaContact?: MediaContact;
}

function Body({ blocks, inlineCta, inlineCtaAfter, endCta, mediaContact }: BodyProps) {
  const lastId = blocks[blocks.length - 1]?.id;
  return (
    <div className="flex min-w-0 max-w-[740px] flex-1 flex-col gap-16 py-3 pr-3 pl-3 lg:pr-0">
      {blocks.map((block) => (
        <Fragment key={block.id}>
          <div id={block.id} className={cn("flex flex-col scroll-mt-[128px]", block.heading ? "gap-12" : "gap-4")}>
            {block.heading ? (
              <h2 className="font-mono text-[28px] leading-none font-medium tracking-tight text-[#191919] md:text-[36px] lg:text-[48px]">
                {block.heading}
              </h2>
            ) : null}
            <div className="flex flex-col gap-4">
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph.text} className="text-body text-[#4a4a4a]">
                  {paragraph.lead ? <strong className="font-bold text-[#191919]">{paragraph.lead}</strong> : null}
                  {paragraph.text}
                </p>
              ))}
              {block.bullets ? (
                <ul className="flex list-disc flex-col gap-2 pl-5 text-body text-[#4a4a4a] marker:text-[#1e3a8a]">
                  {block.bullets.map((item) => (
                    <li key={item} className="pl-1">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            {mediaContact && block.id === lastId ? <MediaContactBlock contact={mediaContact} /> : null}
          </div>
          {block.id === inlineCtaAfter ? <InlineCtaCard cta={inlineCta} /> : null}
        </Fragment>
      ))}
      <PressableButton href={endCta.href} variant="primary" size="small" className="w-full" faceClassName="w-full gap-1 tracking-tight">
        {endCta.label}
        <ArrowRightIcon className="h-4 w-4" />
      </PressableButton>
    </div>
  );
}

/** Sticky right rail: cropped miniature of the application form + "Start application" + help link (lg+). */
function StickyRail({ rail }: { rail: RailCta }) {
  return (
    <div className="hidden w-[360px] shrink-0 lg:flex lg:flex-col lg:items-center lg:gap-3">
      <div className="sticky top-[116px] flex flex-col items-center gap-3 transition-[top] duration-300">
        <div className="flex w-[360px] flex-col overflow-hidden rounded-[8px] border border-[#e1e1e1]">
          <div className="relative h-[280px] overflow-hidden bg-white">
            <div aria-hidden inert className="@container pointer-events-none absolute top-0 left-0 w-full select-none">
              <FinancialFormMock />
            </div>
          </div>
          <div className="border-t border-[#e1e1e1] bg-white p-3">
            <PressableButton href={rail.button.href} variant="black" size="small" className="w-full" faceClassName="w-full gap-1 tracking-tight">
              {rail.button.label}
              <ArrowRightIcon className="h-4 w-4" />
            </PressableButton>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center text-body text-[#4a4a4a]">{rail.helpText}</p>
          <Link href={rail.helpLink.href} className="text-body font-medium tracking-tight text-[#1e3a8a] hover:underline">
            {rail.helpLink.label}
          </Link>
        </div>
      </div>
    </div>
  );
}

export interface ArticleBodyProps extends BodyProps {
  rail: RailCta;
}

/** Article section: sticky TOC (xl+) | body column | sticky rail (lg+), with rails and full-bleed hairlines — the press-release layout, prop-driven. */
export function ArticleBody({ rail, ...body }: ArticleBodyProps) {
  return (
    <section className="relative w-full overflow-x-clip px-4 py-4 md:px-6 md:py-6 lg:px-16 lg:py-16">
      <div className="relative mx-auto flex w-fit max-w-full gap-9">
        <TableOfContents blocks={body.blocks} />
        <div aria-hidden className="pointer-events-none absolute -top-4 -bottom-4 left-0 w-px bg-[#e1e1e1] md:-top-6 md:-bottom-6 lg:-top-16 lg:-bottom-16" />
        <div aria-hidden className="pointer-events-none absolute -top-4 right-0 -bottom-4 w-px bg-[#e1e1e1] md:-top-6 md:-bottom-6 lg:-top-16 lg:-bottom-16" />
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 h-px w-[2400px] -translate-x-1/2 bg-[#e1e1e1]" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[2400px] -translate-x-1/2 bg-[#e1e1e1]" />
        <Body {...body} />
        <StickyRail rail={rail} />
      </div>
    </section>
  );
}
