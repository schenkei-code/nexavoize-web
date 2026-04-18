"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type QA = {
  q: string;
  a: string;
};

const FAQS: QA[] = [
  {
    q: "Hoert NexaVoize immer mit?",
    a: "Nein. Das Wake-Word laeuft komplett on-device ueber ein kleines Neural-Net. Es gibt keine Cloud-Uebertragung, solange du nicht aktiv \u201eHey Nexa\u201c sagst und die App in den Dialog-Modus wechselt. Du kannst das Mikro jederzeit per System-Toggle abschalten.",
  },
  {
    q: "Funktioniert die App auch offline?",
    a: "Teilweise. Wake-Word-Detection und Speech-to-Text laufen offline. Sobald aber Claude als Reasoning-Engine gefragt ist, wird die transkribierte Anfrage an Anthropic geschickt — das braucht Internet. Fuer komplett lokale Antworten ist in Plus ein kleiner Llama-Fallback eingebaut.",
  },
  {
    q: "Gibt es auch eine iOS-Version?",
    a: "Noch nicht. iOS erlaubt keine native Wake-Word-Erkennung im Hintergrund ausser ueber Siri-Shortcuts — das wuerde die Core-Experience kaputtmachen. Wir warten auf die iOS 19 Background-Audio-Intents. Bis dahin gibt es eine kompromissbehaftete iOS-Version nicht.",
  },
  {
    q: "Wie funktioniert der Claude-Login?",
    a: "NexaVoize nutzt OAuth 2.0 mit Anthropic. Du meldest dich einmal mit deinem Claude-Account an; die App speichert nur den Refresh-Token auf dem Geraet (Android Keystore). Ohne gueltigen OAuth-Token werden keine Anfragen an Claude geschickt — Privacy by default.",
  },
  {
    q: "Kann ich das Wake-Word anpassen?",
    a: "Ja — in Plus und Family. Du kannst aus \u201eHey Nexa\u201c, \u201eNexa\u201c, \u201eComputer\u201c oder einer eigenen 1-2 Wort Phrase waehlen. Das Model wird lokal nachtrainiert (wenige Sekunden), ohne dass Audiodaten das Geraet verlassen.",
  },
  {
    q: "Welche Daten bekommt Claude zu sehen?",
    a: "Nur das transkribierte Text-Prompt und (optional) Kalendar/Mail-Snippets, die du in den Integrationen explizit freigibst. Audio wird Anthropic nie gesendet. Wir geben dir pro Session ein Privacy-Ledger, das zeigt, was geflossen ist.",
  },
  {
    q: "Was passiert mit meinen Voice-Clone-Samples?",
    a: "Voice-Clone ist Opt-In und DSGVO-Artikel-9-relevant (biometrische Daten). Samples werden verschluesselt auf unseren EU-Servern abgelegt, sind nur durch deinen Account entsperrbar und werden bei Loeschung sofort aus Cold-Storage entfernt. Die TTS-Inferenz laeuft ebenfalls EU-lokal.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-20 md:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="container-page max-w-3xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.15em] text-[var(--brand-accent)]">FAQ</p>
          <h2
            id="faq-heading"
            className="mt-3 font-semibold tracking-tight"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
          >
            Haeufige{" "}
            <span className="text-gradient-brand">Fragen.</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                >
                  <span className="font-medium text-[var(--foreground)]">{item.q}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`flex-shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}
                    style={{ color: "var(--brand-accent)" }}
                    aria-hidden="true"
                  >
                    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <motion.div
                  id={`faq-panel-${i}`}
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-[var(--muted)] leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
