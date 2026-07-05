import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware drop-in replacements for Next.js navigation APIs. Using these
// (instead of `next/link` / `next/navigation`) keeps the active locale in the
// URL as the user navigates. `usePathname` here returns the pathname WITHOUT
// the locale prefix (e.g. "/" on both `/` and `/en`).
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
