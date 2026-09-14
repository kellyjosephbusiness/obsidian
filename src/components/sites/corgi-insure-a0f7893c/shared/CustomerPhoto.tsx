import Image from "next/image";
import { cn } from "@/lib/utils";

/** Pool of generated owner portraits (3:4). A name always maps to the same portrait. */
export const CUSTOMER_PHOTO_COUNT = 12;
const BASE = "/sites/corgi-insure-a0f7893c/shared/customers";

function hash(input: string) {
  let h = 0;
  for (let i = 0; i < input.length; i++) h = (h * 31 + input.charCodeAt(i)) >>> 0;
  return h;
}

export function customerPhotoSrc(name: string, index?: number) {
  const idx = index && index >= 1 && index <= CUSTOMER_PHOTO_COUNT ? index : (hash(name) % CUSTOMER_PHOTO_COUNT) + 1;
  return `${BASE}/owner-${String(idx).padStart(2, "0")}.jpg`;
}

/**
 * Customer portrait. Size it with `className` (e.g. `size-14 rounded-full` or `absolute inset-0`);
 * the image fills the box with `object-cover`, cropped toward the face.
 */
export function CustomerPhoto({ name, index, className, sizes = "160px", priority = false }: { name: string; index?: number; className?: string; sizes?: string; priority?: boolean }) {
  return (
    <span className={cn("relative block overflow-hidden bg-[#DDEAFE]", className)}>
      <Image alt="" src={customerPhotoSrc(name, index)} fill sizes={sizes} priority={priority} className="object-cover object-[50%_20%]" />
    </span>
  );
}
