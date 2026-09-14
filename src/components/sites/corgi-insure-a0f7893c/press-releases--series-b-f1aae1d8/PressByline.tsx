import { BYLINE } from "./data";
import { LinkedInIcon, XIcon } from "./icons";

const ICONS = { linkedin: LinkedInIcon, x: XIcon } as const;

/** Author + social row with the date / read-time on the right (hairlines top and bottom). */
export function PressByline() {
  return (
    <section className="w-full border-t border-b border-[#e1e1e1] px-4 py-6 md:px-6 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1136px] items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="flex flex-col leading-[1.2] tracking-tight text-[#4a4a4a]">
            <span>{BYLINE.author}</span>
          </div>
          <div className="flex items-center gap-3">
            {BYLINE.social.map((link) => {
              const Icon = ICONS[link.icon];
              return (
                <a
                  key={link.icon}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-[8px] border border-[#e1e1e1] text-[#4a4a4a] transition-colors hover:bg-[#f3f3f3]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
        <span className="shrink-0 text-right text-body text-[#4a4a4a]">
          <span className="whitespace-nowrap">{BYLINE.date}</span>
          <span className="hidden md:inline">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <br className="md:hidden" />
          <span className="whitespace-nowrap">{BYLINE.readTime}</span>
        </span>
      </div>
    </section>
  );
}
