import { ArticleBody } from "./ArticleBody";
import { ArticleBreadcrumb } from "./ArticleBreadcrumb";
import { ArticleByline } from "./ArticleByline";
import { ArticleGrid } from "./ArticleGrid";
import { ArticleHero } from "./ArticleHero";
import { EditorialShell } from "./EditorialShell";
import { ARTICLE_END_CTA, INLINE_CTA, KIND_META, RAIL_CTA, RELATED_LABEL, articleHref, relatedCards } from "./data";
import type { EditorialArticle } from "./types";

/**
 * Article template — the press-release layout, prop-driven:
 * breadcrumb → hero (title + dark thumbnail) → byline → body (sticky TOC / body / sticky rail) → related articles → footer.
 */
export function ArticlePage({ article }: { article: EditorialArticle }) {
  const kind = KIND_META[article.kind];
  return (
    <EditorialShell>
      <ArticleBreadcrumb
        items={[{ label: "Home", href: "/" }, { label: kind.crumbLabel, href: kind.indexHref }, { label: article.title }]}
      />
      <ArticleHero backLabel={kind.backLabel} backHref={kind.indexHref} title={article.title} thumbnail={article.thumbnail} />
      <ArticleByline author={article.author} date={article.date} readTime={article.readTime} />
      <ArticleBody
        blocks={article.blocks}
        inlineCta={INLINE_CTA}
        inlineCtaAfter={article.inlineCtaAfter}
        endCta={ARTICLE_END_CTA}
        rail={RAIL_CTA}
        mediaContact={article.mediaContact}
      />
      <ArticleGrid label={RELATED_LABEL} articles={relatedCards(article).filter((card) => card.href !== articleHref(article))} />
    </EditorialShell>
  );
}
