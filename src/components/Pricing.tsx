"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Plan = {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Free",
    price: "0 EUR",
    period: "fuer immer",
    tagline: "Perfekt zum Reinschnuppern",
    features: [
      "100 Claude-Minuten / Monat",
      "Wake-Word Detection",
      "Offline-STT on-device",
      "3 Cross-App-Intents",
      "Community-Support",
    ],
    cta: { label: "APK laden", href: "/#download" },
  },
  {
    name: "Plus",
    price: "9 EUR",
    period: "pro Monat",
    tagline: "Fuer Power-Nutzer",
    features: [
      "Unlimited Claude-Minuten",
      "Alle Cross-App-Intents",
      "Voice-Clone (Opt-In)",
      "Priority-Response-Modell",
      "Extended Context (200k)",
      "E-Mail Support",
    ],
    cta: { label: "Plus starten", href: "/#download" },
    highlighted: true,
  },
  {
    name: "Family",
    price: "19 EUR",
    period: "pro Monat",
    tagline: "Fuer bis zu 5 Personen",
    features: [
      "Alles aus Plus",
      "5 separate Profile",
      "Pro Person eigene Voice-ID",
      "Gemeinsame Smart-Home-Scenes",
      "Kinder-Modus mit Filter",
      "Priority-Support",
    ],
    cta: { label: "Family buchen", href: "/#download" },
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-20 md:py-32"
      aria-labelledby="pricing-heading"
    >
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.15em] text-[var(--brand-accent)]">Preise</p>
          <h2
            id="pricing-heading"
            className="mt-3 font-semibold tracking-tight"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
          >
            Ehrliche Preise.{" "}
            <span className="text-gradient-brand">Keine Tricks.</span>
          </h2>
          <p className="mt-5 text-[var(--muted)] leading-relaxed">
            Starte gratis. Upgrade wenn du mehr brauchst. Kuendige jederzeit per Stimme —
            Nexa versteht auch „Abo beenden".
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3 max-w-5xl mx-auto">
          {PLANS.map((plan, i) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`relative p-7 rounded-2xl glass flex flex-col ${
                plan.highlighted ? "border-[var(--brand-primary)]/40" : ""
              }`}
              style={
                plan.highlighted
                  ? {
                      boxShadow: "var(--brand-glow)",
                      border: "1px solid rgba(124,92,255,0.4)",
                    }
                  : undefined
              }
            >
              {plan.highlighted ? (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.15em] text-white"
                  style={{ background: "var(--brand-gradient)" }}
                >
                  Am beliebtesten
                </span>
              ) : null}

              <h3 className="text-lg font-semibold tracking-tight">{plan.name}</h3>
              <p className="text-xs text-[var(--subtle)] mt-1">{plan.tagline}</p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                <span className="text-sm text-[var(--muted)]">/ {plan.period}</span>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "var(--brand-secondary)" }}
                      aria-hidden="true"
                    >
                      <path d="M3 8.5l3.2 3L13 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.cta.href}
                className={`mt-8 inline-flex items-center justify-center rounded-full py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  plan.highlighted ? "text-white" : "text-[var(--foreground)]"
                }`}
                style={
                  plan.highlighted
                    ? { background: "var(--brand-gradient)" }
                    : {
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid var(--border-strong)",
                      }
                }
              >
                {plan.cta.label}
              </Link>
            </motion.article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-[var(--subtle)]">
          Preise inkl. MwSt. Kleinunternehmer gemaess § 6 Abs. 1 Z 27 UStG (AT) — keine USt. ausgewiesen.
        </p>
      </div>
    </section>
  );
}
