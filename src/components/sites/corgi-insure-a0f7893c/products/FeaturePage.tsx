import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import type { FeaturePageContent } from "@/types/sites/corgi-insure-a0f7893c/products";
import { Rails } from "../directors-and-officers-f2860438/rails";
import { FaqSection } from "../root-8a5edab2/FaqSection";
import { CtaSection } from "./CtaSection";
import { FeatureMock } from "./FeatureMock";
import { IconCardGrid } from "./IconCardGrid";
import { IntegrationSnippet } from "./IntegrationSnippet";
import { EYEBROW_CLASS } from "./PageHero";
import { SiteShell } from "./SiteShell";
import { StepsSection } from "./StepsSection";

function FeatureHero({ content }: { content: FeaturePageContent }) {
  const { hero } = content;
  return (
    <section className="relative overflow-hidden border-b border-[#e1e1e1] px-4 pt-[150px] pb-16 md:px-6 md:pt-[176px] md:pb-20 lg:px-16">
      <Rails width={1600} />
      <div className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          <span className={EYEBROW_CLASS}>{hero.eyebrow}</span>
          <h1 className="font-mono font-medium text-[#191919] text-[length:var(--h1-font-size)] leading-[var(--h1-line-height)] tracking-[var(--h1-tracking)]">
            <span className="block">{hero.headingLine1}</span>
            <span className="block">{hero.headingLine2}</span>
          </h1>
          <p className="max-w-[600px] text-body-large text-pretty text-[#4a4a4a]">{hero.sub}</p>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-start">
            <PressableButton variant="primary" size="large" href={hero.primary.href} dataTrack={`cta-embedded-${content.slug}-hero`}>
              {hero.primary.label}
            </PressableButton>
            <PressableButton variant="white" size="large" href={hero.secondary.href}>
              {hero.secondary.label}
            </PressableButton>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <FeatureMock kind={content.mock} />
        </div>
      </div>
    </section>
  );
}

/**
 * Embedded-financing feature template: hero with product mock → three benefit cards → how it works
 * → integration snippet → FAQ → CTA card → footer. Driven entirely by a `FeaturePageContent` record.
 */
export function FeaturePage({ content }: { content: FeaturePageContent }) {
  return (
    <SiteShell>
      <FeatureHero content={content} />
      <IconCardGrid heading={content.benefits.heading} sub={content.benefits.sub} cards={content.benefits.cards} />
      <StepsSection id="how-it-works" heading={content.steps.heading} sub={content.steps.sub} items={content.steps.items} />
      <IntegrationSnippet snippet={content.snippet} />
      <FaqSection items={content.faq} />
      <CtaSection heading={content.cta.heading} sub={content.cta.sub} primary={content.cta.primary} secondary={content.cta.secondary} dataTrack={`cta-embedded-${content.slug}-footer`} />
    </SiteShell>
  );
}
