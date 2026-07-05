"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useWishlist } from "@/lib/wishlist";
import { collections, designers } from "@/data/catalogue";
import {
  SearchIcon,
  AccountIcon,
  BagIcon,
  HeartIcon,
  MenuIcon,
  CloseIcon,
} from "@/components/ui/icons";
import { luxeEase } from "@/lib/motion";

// `key` maps to a translation key in the "Header" namespace.
const navLinks: ReadonlyArray<{
  key: "collections" | "designers" | "journal";
  href: string;
  mega?: string;
}> = [
  { key: "collections", href: "/collections", mega: "collections" },
  //{ key: "resale", href: "/marketplace" },
  { key: "designers", href: "/designers", mega: "designers" },
  { key: "journal", href: "/journal" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState<string | null>(null);
  // The pearl header "surface" (solid background + dark text) must stay visible
  // for the whole time a mega panel is on screen, including its exit animation.
  // `mega` flips to null the instant the pointer leaves, but the panel takes
  // ~0.35s to animate out — so we keep the surface until onExitComplete fires,
  // otherwise the closing panel flashes over the dark hero on the homepage.
  const [surfaceOpen, setSurfaceOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count } = useWishlist();
  const pathname = usePathname();
  const t = useTranslations("Header");

  // Only the homepage renders a dark full-bleed hero behind the transparent
  // header. Every other route has a light background at the top, so the header
  // must use dark text there to stay readable before any scrolling.
  // (usePathname from next-intl is locale-agnostic, so "/" matches both locales.)
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile on resize up
  useEffect(() => {
    const onResize = () => window.innerWidth > 760 && setMobileOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Show the surface as soon as a menu opens; it is hidden again only once the
  // panel has finished animating out (see onExitComplete on AnimatePresence).
  useEffect(() => {
    if (mega) setSurfaceOpen(true);
  }, [mega]);

  const surface = !!mega || surfaceOpen;
  const dark = isHome && !scrolled && !surface;

  return (
    <>
      {/* Announcement */}
      <div className="bg-noir text-pearl text-center text-[10.5px] uppercase tracking-wide font-light py-2.5 px-4 whitespace-nowrap overflow-hidden text-ellipsis">
        {t("announcement")} —{" "}
        <span className="text-champagne">{t("announcementHighlight")}</span>
      </div>

      <header
        onMouseLeave={() => setMega(null)}
        className={cn(
          "fixed left-0 right-0 z-[100] transition-[top,padding] duration-med ease-luxe",
          scrolled
            ? "top-0 bg-pearl/75 backdrop-blur-xl backdrop-saturate-150 border-b border-mist py-3.5"
            : "top-[38px] border-b border-transparent py-5",
          surface && "bg-pearl border-mist",
        )}
      >
        <div className="flex items-center justify-between px-gutter">
          {/* Left nav (desktop) */}
          <nav className="hidden md:flex flex-1 items-center gap-8">
            {navLinks.map((l) => (
              <div key={l.key} onMouseEnter={() => setMega(l.mega ?? null)}>
                <Link
                  href={l.href}
                  className={cn(
                    "link-underline text-[11px] uppercase tracking-luxe transition-colors",
                    dark ? "text-white" : "text-ink",
                  )}
                >
                  {t(l.key)}
                </Link>
              </div>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex-1"
            aria-label={t("openMenu")}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon
              className={cn(
                "h-[22px] w-[22px]",
                dark ? "text-white" : "text-ink",
              )}
            />
          </button>

          {/* Brand */}
          <Link
            href="/"
            className={cn(
              "font-display font-normal text-center whitespace-nowrap transition-[color,font-size] duration-med",
              scrolled ? "text-[22px]" : "text-[25px]",
              "tracking-[0.46em] indent-[0.46em]",
              dark ? "text-white" : "text-noir",
            )}
          >
            KATTREND
          </Link>

          {/* Right icons */}
          <div className="flex flex-1 items-center justify-end gap-5">
            <LocaleSwitcher dark={dark} />
            <button
              aria-label={t("search")}
              onClick={() => setSearchOpen(true)}
              className={cn(
                "transition-opacity hover:opacity-60",
                dark ? "text-white" : "text-ink",
              )}
            >
              <SearchIcon className="h-[19px] w-[19px]" />
            </button>
            <Link
              href="/account"
              aria-label={t("account")}
              className={cn(
                "hidden sm:block hover:opacity-60",
                dark ? "text-white" : "text-ink",
              )}
            >
              <AccountIcon className="h-[19px] w-[19px]" />
            </Link>
            <Link
              href="/wishlist"
              aria-label={`${t("wishlist")}, ${count}`}
              className={cn(
                "relative hover:opacity-60",
                dark ? "text-white" : "text-ink",
              )}
            >
              <HeartIcon className="h-[19px] w-[19px]" />
              {count > 0 && (
                <span className="absolute -right-2 -top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full bg-champagne-deep text-[9px] font-medium text-white">
                  {count}
                </span>
              )}
            </Link>
            <button
              aria-label={`${t("bag")}, 0`}
              className={cn(
                "relative hover:opacity-60",
                dark ? "text-white" : "text-ink",
              )}
            >
              <BagIcon className="h-[19px] w-[19px]" />
            </button>
          </div>
        </div>

        {/* Mega menu */}
        <AnimatePresence onExitComplete={() => setSurfaceOpen(false)}>
          {mega && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: luxeEase }}
              className="hidden md:block border-t border-mist mt-3.5"
            >
              <div className="px-gutter py-s5 grid grid-cols-3 gap-s4">
                {(mega === "collections" ? collections : designers).map(
                  (item) => (
                    <Link
                      key={item.slug}
                      href={`/${mega === "collections" ? "collections" : "designers"}/${item.slug}`}
                      className="group"
                      onClick={() => setMega(null)}
                    >
                      <p className="font-display text-display-sm font-light text-ink transition-colors group-hover:text-champagne-deep">
                        {item.name}
                      </p>
                      <p className="mt-1 text-[12px] text-ash">
                        {mega === "collections"
                          ? (item as (typeof collections)[number]).tagline
                          : (item as (typeof designers)[number]).origin}
                      </p>
                    </Link>
                  ),
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <SearchDrawer open={searchOpen} onClose={() => setSearchOpen(false)} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

// ------------------------------------------------------------
// Locale switcher (flags: DA / EN)
// ------------------------------------------------------------
const LOCALE_FLAGS: Record<string, string> = {
  da: "/images/dk.png",
  en: "/images/uk.png",
};

function LocaleSwitcher({ dark }: { dark: boolean }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("LocaleSwitcher");

  // Two-language toggle: show the flag of the CURRENT language; clicking swaps
  // to the other language (and the flag updates to reflect the new one).
  const other =
    routing.locales.find((l) => l !== locale) ?? routing.defaultLocale;

  return (
    <button
      onClick={() => router.replace(pathname, { locale: other })}
      aria-label={t("switchTo", { language: t(other as "da" | "en") })}
      title={t("switchTo", { language: t(other as "da" | "en") })}
      className={cn(
        "relative block h-[13px] w-[20px] overflow-hidden rounded-[1px] opacity-90 transition-opacity hover:opacity-100",
        dark
          ? "ring-1 ring-white/30 ring-offset-0"
          : "ring-1 ring-ink/15 ring-offset-0",
      )}
    >
      <Image
        src={LOCALE_FLAGS[locale]}
        alt={t(locale as "da" | "en")}
        fill
        sizes="20px"
        className="object-cover"
      />
    </button>
  );
}

// ------------------------------------------------------------
// Search drawer
// ------------------------------------------------------------
function SearchDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const suggestions = [
    "Cat trees",
    "Travertine",
    "Limited edition",
    "Studio Brun",
    "Pre-owned",
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[150] bg-noir/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-x-0 top-0 z-[160] bg-pearl"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: luxeEase }}
          >
            <div className="wrap py-s5">
              <div className="flex items-center justify-between mb-s4">
                <span className="eyebrow">Search the Maison</span>
                <button
                  onClick={onClose}
                  aria-label="Close search"
                  className="hover:opacity-60"
                >
                  <CloseIcon className="h-5 w-5 text-ink" />
                </button>
              </div>
              <div className="flex items-center border-b border-ink pb-4">
                <SearchIcon className="h-6 w-6 text-ash" />
                <input
                  autoFocus
                  type="search"
                  placeholder="Search pieces, designers, materials…"
                  className="ml-4 flex-1 bg-transparent font-display text-display-sm font-light text-ink outline-none placeholder:text-silver"
                />
              </div>
              <div className="mt-s4 flex flex-wrap gap-2.5">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    className="border border-mist px-4 py-2 text-[11px] uppercase tracking-luxe text-graphite transition-colors hover:border-ink hover:text-ink"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ------------------------------------------------------------
// Mobile menu
// ------------------------------------------------------------
function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const t = useTranslations("Header");
  const items: ReadonlyArray<{ key: string; href: string }> = [
    ...navLinks.map((l) => ({ key: l.key, href: l.href })),
    { key: "authentication", href: "/authentication" },
    { key: "account", href: "/account" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[170] bg-noir text-pearl md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: luxeEase }}
        >
          <div className="flex items-center justify-between px-gutter py-6">
            <span className="font-display text-[22px] tracking-[0.4em] indent-[0.4em]">
              KATTREND
            </span>
            <button onClick={onClose} aria-label="Close menu">
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="px-gutter mt-s4 flex flex-col">
            {items.map((l, i) => (
              <motion.div
                key={l.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.06, ease: luxeEase }}
              >
                <Link
                  href={l.href}
                  onClick={onClose}
                  className="block border-b border-white/10 py-5 font-display text-3xl font-light"
                >
                  {t(l.key)}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
