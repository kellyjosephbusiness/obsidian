/** Content types for the FundLine Capital "For Brokers & ISO Partners" page (built on the corgi.insure /for-brokers layout). */

import type { MaterialIconName } from "./home";

export interface BrokerCta {
  label: string;
  href: string;
}

export interface BrokerHeroContent {
  headingLine1: string;
  headingLine2: string;
  sub: string;
  primary: BrokerCta;
  secondary: BrokerCta;
  art: {
    hand: string;
    stamp: string;
  };
}

/** A fictional partner brokerage / lender rendered as a text wordmark in the marquee. */
export interface PartnerWordmark {
  name: string;
}

/** One clickable phrase of the broker workflow sentence. */
export interface WorkflowStep {
  id: string;
  /** Phrase rendered inside the chip. */
  phrase: string;
  /** Material Symbols Sharp ligature rendered after the phrase. */
  icon: MaterialIconName;
  /** Punctuation rendered inside the chip right after the icon ("," or ""). */
  punctuation: string;
  /** Plain-text connector rendered after the chip (" then ", " and ", " all from one client record."). */
  connector: string;
  /** Caption revealed beneath the sentence when the chip is expanded. */
  caption: string;
}
