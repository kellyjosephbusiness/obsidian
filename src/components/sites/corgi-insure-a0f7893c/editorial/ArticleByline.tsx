import { LinkedInIcon, XIcon } from "@/components/sites/corgi-insure-a0f7893c/press-releases--series-b-f1aae1d8/icons";
import { BYLINE_SOCIAL } from "./data";

const ICONS = { linkedin: LinkedInIcon, x: XIcon } as const;

export interface ArticleBylineProps {
  author: string;
  date: string;
  readTime: string;
}

/** Prop-driven variant of `PressByline`: author + social row, date / read-time on the right, hairlines top and bottom. */
export function ArticleByline({ author, date, readTime }: ArticleBylineProps) {
  return (
    <section className="w-full border-t border-b border-[#e1e1e1] px-4 py-6 md:px-6 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1136px] items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="flex flex-col leading-[1.2] tracking-tight text-[#4a4a4a]">
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-3">
            {BYLINE_SOCIAL.map((link) => {
              const Icon = ICONS[link.icon];
              return (
                <a
                  key={link.icon}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e1e1e1] text-[#4a4a4a] transition-colors hover:bg-[#f3f3f3]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
        <span className="shrink-0 text-right text-body text-[#4a4a4a]">
          <span className="whitespace-nowrap">{date}</span>
          <span className="hidden md:inline">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <br className="md:hidden" />
          <span className="whitespace-nowrap">{readTime}</span>
        </span>
      </div>
    </section>
  );
}
