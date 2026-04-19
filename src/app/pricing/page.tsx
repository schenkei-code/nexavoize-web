import type { Metadata } from "next";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Preise",
  description: "Free, Plus für 9 EUR pro Monat, Family für 19 EUR pro Monat. Kein Abo-Zwang, jederzeit kuendbar.",
};

export default function PricingPage() {
  return (
    <>
      <section className="pt-24 md:pt-32 pb-6">
        <div className="container-page text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.15em] text-[var(--brand-accent)]">NexaVoize Plaene</p>
          <h1
            className="mt-3 font-semibold tracking-tight"
            style={{ fontSize: "clamp(36px, 6vw, 72px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Stimme war noch nie{" "}
            <span className="text-gradient-brand">so guenstig.</span>
          </h1>
          <p className="mt-5 text-[var(--muted)] leading-relaxed">
            Drei Plaene. Alle mit Wake-Word, Claude-Reasoning und DSGVO. Nur der Umfang
            skaliert.
          </p>
        </div>
      </section>
      <Pricing />
      <FAQ />
    </>
  );
}
