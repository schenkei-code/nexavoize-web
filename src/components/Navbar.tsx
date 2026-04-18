"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "/#features", label: "Features" },
  { href: "/#use-cases", label: "Use-Cases" },
  { href: "/pricing", label: "Preise" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[rgba(5,5,10,0.72)] border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-lg"
          aria-label="NexaVoize Startseite"
        >
          <span
            className="inline-block w-7 h-7 rounded-full"
            style={{ background: "var(--brand-gradient)", boxShadow: "var(--brand-glow)" }}
            aria-hidden="true"
          />
          <span>
            Nexa<span className="text-gradient-brand">Voize</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Hauptnavigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/#download"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white transition-all hover:scale-[1.03]"
            style={{ background: "var(--brand-gradient)" }}
          >
            APK laden
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-[var(--border)]"
          aria-label={mobileOpen ? "Menue schliessen" : "Menue oeffnen"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">Menue</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-[var(--border)] bg-[rgba(5,5,10,0.92)] backdrop-blur-xl"
        >
          <nav className="container-page py-5 flex flex-col gap-4" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-[var(--muted)] hover:text-[var(--foreground)] text-base"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#download"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-white mt-2"
              style={{ background: "var(--brand-gradient)" }}
            >
              APK laden
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
