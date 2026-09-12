import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

/**
 * tailwind-merge with the site's custom typography utilities registered as font-size classes,
 * so `text-body` / `text-body-large` no longer collide with text colors like `text-white`.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": ["text-body", "text-body-large", "btn-text-small", "btn-text-large"],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
