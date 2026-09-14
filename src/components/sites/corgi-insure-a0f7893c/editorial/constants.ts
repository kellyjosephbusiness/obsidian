/** Default byline for FundLine-authored articles (kept in its own module to avoid a data ↔ content import cycle). */
export const AUTHOR = "The FundLine team";

/** Named bylines (leadership team) rotated across blog posts and guides; spread into an article as `...BYLINES.maya`. */
export const BYLINES = {
  maya: { author: "Maya Chen", authorRole: "Co-founder & CEO" },
  daniel: { author: "Daniel Okoro", authorRole: "Co-founder & COO" },
  jordan: { author: "Jordan Blake", authorRole: "Head of Funding Specialists" },
  tom: { author: "Tom Adeyemi", authorRole: "Head of Credit & Risk" },
} as const;
