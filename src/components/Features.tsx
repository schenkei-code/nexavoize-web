"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

const FEATURES: Feature[] = [
  {
    title: "Wake-Word Detection",
    description:
      "Custom On-Device Wake-Word. Keine Cloud-Lauscher. Du sagst \u201eHey Nexa\u201c und die App kippt in Dialog-Modus.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3a3 3 0 00-3 3v6a3 3 0 006 0V6a3 3 0 00-3-3z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 11a7 7 0 0014 0M12 18v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Cross-App Commands",
    description:
      "Rufe deinen Kalender, WhatsApp, Spotify oder Smart-Home-Devices per Stimme. Android-Intents out of the box.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Claude Reasoning",
    description:
      "Volle Claude-Intelligenz im Gespraech. Mehrstufige Fragen, Kontext über Sessions hinweg, Tool-Use wenn noetig.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L3 7v6c0 5 4 9 9 9s9-4 9-9V7l-9-5z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Local-First Privacy",
    description:
      "Audio wird nur uebertragen, wenn Claude gefragt ist. Alles andere bleibt auf dem Geraet. Keine Dauerueberwachung.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 10V7a6 6 0 1112 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="4" y="10" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="15" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Offline-STT",
    description:
      "Speech-to-Text laeuft on-device mit Whisper-Tiny. Funktioniert ohne Internet — Claude kommt erst danach.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12h2l2-6 4 12 3-9 2 5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Multi-Language",
    description:
      "Deutsch, Englisch, Spanisch, Franzoesisch, Italienisch — nahtloser Sprachwechsel im laufenden Gespraech.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 12h18M12 3a13 13 0 010 18M12 3a13 13 0 000 18" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative py-20 md:py-32"
      aria-labelledby="features-heading"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.15em] text-[var(--brand-accent)]">Features</p>
          <h2
            id="features-heading"
            className="mt-3 font-semibold tracking-tight"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
          >
            Sechs Fundamente für einen Voice-Assistant,{" "}
            <span className="text-gradient-brand">den du ernst nehmen kannst.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 md:p-7 rounded-2xl glass hover:border-[var(--border-strong)] transition-colors"
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                style={{
                  background: "rgba(124,92,255,0.14)",
                  color: "var(--brand-accent)",
                  border: "1px solid rgba(124,92,255,0.3)",
                }}
                aria-hidden="true"
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{f.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
