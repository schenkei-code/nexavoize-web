"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Waveform } from "./Waveform";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-20 md:pt-32 pb-20 md:pb-32 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-[0.15em] glass"
            style={{ color: "var(--brand-accent)" }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--brand-secondary)", boxShadow: "0 0 8px var(--brand-secondary)" }}
            />
            Wake-Word On-Device · Claude 4.7
          </span>

          <h1
            id="hero-heading"
            className="mt-6 font-semibold tracking-tight"
            style={{ fontSize: "clamp(40px, 7vw, 88px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Your voice,{" "}
            <span className="text-gradient-brand">augmented by Claude</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[var(--muted)] max-w-2xl leading-relaxed">
            NexaVoize hoert immer auf dein Wake-Word, versteht natuerliche Sprache und
            reagiert ueber alle Apps hinweg. On-Device Privacy trifft Claude-Reasoning.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
            <Link
              id="download"
              href="/downloads/nexavoize-latest.apk"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.03] glow-ring"
              style={{ background: "var(--brand-gradient)", color: "#fff" }}
              aria-label="NexaVoize APK fuer Android herunterladen"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3v12m0 0l-5-5m5 5l5-5M4 21h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              APK fuer Android laden
            </Link>
            <span
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium glass text-[var(--muted)]"
              aria-label="iOS Version in Vorbereitung"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25" />
              </svg>
              iOS folgt · Android jetzt
            </span>
          </div>

          <div className="mt-5 flex items-center gap-4 text-xs text-[var(--subtle)]">
            <span className="font-mono">Android 10+</span>
            <span aria-hidden="true">·</span>
            <span>OAuth mit Claude</span>
            <span aria-hidden="true">·</span>
            <span>DSGVO-konform</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16 md:mt-24 mx-auto max-w-4xl"
        >
          <div
            className="relative aspect-[16/7] rounded-3xl overflow-hidden glass"
            style={{ boxShadow: "var(--brand-glow)" }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 80% at 50% 50%, rgba(124,92,255,0.25) 0%, rgba(44,212,255,0.12) 40%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Waveform bars={64} className="max-w-[86%] max-h-[72%]" />
            </div>
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full"
              style={{
                background: "var(--brand-gradient)",
                animation: "pulse-glow 2.8s ease-in-out infinite",
              }}
              aria-hidden="true"
            />
            <div className="absolute bottom-4 left-4 font-mono text-[11px] text-[var(--muted)] flex items-center gap-2">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: "var(--brand-secondary)", boxShadow: "0 0 8px var(--brand-secondary)" }}
                aria-hidden="true"
              />
              listening · wake word detected
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-[11px] text-[var(--subtle)]">
              48 kHz · 16-bit · local
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
