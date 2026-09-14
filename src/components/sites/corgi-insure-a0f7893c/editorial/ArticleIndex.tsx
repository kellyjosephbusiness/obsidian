"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArticleGrid } from "./ArticleGrid";
import type { ArticleCard } from "./types";

export interface TaggedArticleCard extends ArticleCard {
  tags: string[];
}

export interface ArticleIndexProps {
  label: string;
  articles: TaggedArticleCard[];
  /** When given, renders a chip row above the grid that filters by tag ("All" first). */
  tags?: string[];
}

const ALL = "All";

/** Index grid with an optional single-select tag filter (chip tints follow the nav chip palette). */
export function ArticleIndex({ label, articles, tags }: ArticleIndexProps) {
  const [tag, setTag] = useState(ALL);
  const visible = tag === ALL ? articles : articles.filter((article) => article.tags.includes(tag));
  const chips = tags && tags.length > 0 ? [ALL, ...tags] : null;

  return (
    <>
      {chips ? (
        <div className="w-full px-4 pb-6 md:px-6 md:pb-8 lg:px-16">
          <div role="group" aria-label="Filter articles by topic" className="mx-auto flex w-full max-w-[1136px] flex-wrap gap-2">
            {chips.map((chip) => {
              const selected = chip === tag;
              return (
                <button
                  key={chip}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setTag(chip)}
                  className={cn(
                    "rounded-[4px] border px-4 py-2 text-[14px] leading-[1.2] font-medium tracking-[-0.14px] transition-colors",
                    selected
                      ? "border-[#1e3a8a] bg-[#dde4f6] text-[#1e3a8a]"
                      : "border-[#e1e1e1] bg-white text-[#4a4a4a] hover:bg-[#f3f3f3] hover:text-[#191919] active:bg-[#c5d1f0]",
                  )}
                >
                  {chip}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
      <ArticleGrid label={tag === ALL ? label : `${label} · ${tag}`} articles={visible} />
    </>
  );
}
