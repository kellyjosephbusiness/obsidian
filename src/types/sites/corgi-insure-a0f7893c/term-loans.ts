/** Content contracts for the /term-loans product page (layout cloned from corgi.insure/directors-and-officers). */

export interface TermTile {
  title: string;
  label: string;
  value: string;
}

export interface Scenario {
  /** Superscript footnote number shown after the scenario text. */
  note: number;
  prompt: string;
  lead: string;
  body: string;
  amountsLabel: string;
  amounts: string;
}

export interface CompareCard {
  title: string;
  image: string;
  rows: { label: string; text: string }[];
}

export interface IconCard {
  icon: string;
  title: string;
  body: string;
}

export interface GlossaryEntry {
  term: string;
  definition: string;
}

export interface ReadingCard {
  title: string;
  href: string;
  source: string;
  date: string;
}

export interface IndustryPill {
  label: string;
  href: string;
}
