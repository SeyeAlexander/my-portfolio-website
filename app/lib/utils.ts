import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and merges class names, resolving Tailwind CSS conflicts.
 *
 * Accepts any number of class name values, conditionally joins them using `clsx`, and merges them with `twMerge` to ensure Tailwind CSS classes are deduplicated and conflicts are resolved.
 *
 * @param inputs - Class name values to combine and merge.
 * @returns A single merged class name string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
