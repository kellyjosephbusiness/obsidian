"use client";

import { useEffect, useRef } from "react";

const EMBED_SRC = "https://lendtrack.ai/embed.js";

/**
 * LendTrack funding application. The vendor script looks for `script[data-lendtrack-slug]`
 * and inserts a self-resizing iframe right after it, so we inject the script tag into a
 * container on mount (a static <script> in JSX would not execute after hydration).
 */
export function LendTrackEmbed({ slug = "lendpeak", type = "broker" }: { slug?: string; type?: "broker" | "partner" }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || host.querySelector("script[data-lendtrack-slug]")) return;
    const script = document.createElement("script");
    script.src = EMBED_SRC;
    script.async = true;
    script.setAttribute("data-lendtrack-type", type);
    script.setAttribute("data-lendtrack-slug", slug);
    host.appendChild(script);
    return () => {
      host.innerHTML = "";
    };
  }, [slug, type]);

  return (
    // The site is light-only, so the light scheme is forced on this host and on whatever
    // iframe the vendor script injects into it (it is injected, not authored here, hence the
    // descendant selector as well as the inline style). This keeps the UA canvas, scrollbars
    // and form controls light. Note the LendTrack app itself picks its theme in JS from
    // `prefers-color-scheme`, which a parent cannot override cross-origin, so its own dark
    // styling still needs a theme option from the vendor.
    <div
      ref={hostRef}
      style={{ colorScheme: "light" }}
      className="min-h-[560px] w-full [color-scheme:light] [&_iframe]:[color-scheme:light]"
      aria-label="Funding application"
    >
      <noscript>
        <a href={`https://lendtrack.ai/embed/${type}/${slug}`} className="text-[#1e3a8a] underline">
          Open the funding application
        </a>
      </noscript>
    </div>
  );
}
