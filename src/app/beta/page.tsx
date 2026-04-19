import type { Metadata } from "next";
import BetaForm from "./BetaForm";

export const metadata: Metadata = {
  title: "Android-Beta · NexaVoize",
  description:
    "Trag dich für die geschlossene Android-Beta von NexaVoize ein. Wir schicken die signierte APK direkt an deine E-Mail, sobald dein Gerät freigeschaltet ist.",
  alternates: { canonical: "/beta" },
};

export default function BetaPage() {
  return (
    <main className="container-page py-20 md:py-28">
      <div className="mx-auto max-w-2xl">
        <span
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-[0.15em] glass"
          style={{ color: "var(--brand-accent)" }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{
              background: "var(--brand-secondary)",
              boxShadow: "0 0 8px var(--brand-secondary)",
            }}
          />
          Closed Beta
        </span>
        <h1
          className="mt-6 font-semibold tracking-tight"
          style={{ fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
        >
          NexaVoize Android-Beta
        </h1>
        <p className="mt-5 text-lg text-[var(--muted)] leading-relaxed">
          Die signierte APK ist aktuell in einer geschlossenen Beta-Phase. Trag dich ein — wir
          schicken den Installations-Link und eine Kurzanleitung direkt an deine E-Mail, sobald
          dein Konto freigeschaltet ist.
        </p>

        <BetaForm />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-[var(--subtle)]">
          <div className="glass rounded-xl p-4">
            <div className="font-semibold text-[var(--fg)]">Android 10+</div>
            <div className="mt-1">Pixel, Samsung, Xiaomi, OnePlus getestet</div>
          </div>
          <div className="glass rounded-xl p-4">
            <div className="font-semibold text-[var(--fg)]">OAuth mit Claude</div>
            <div className="mt-1">Kein API-Key nötig</div>
          </div>
          <div className="glass rounded-xl p-4">
            <div className="font-semibold text-[var(--fg)]">DSGVO-konform</div>
            <div className="mt-1">On-Device Wake-Word, kein Dauer-Stream</div>
          </div>
        </div>
      </div>
    </main>
  );
}
