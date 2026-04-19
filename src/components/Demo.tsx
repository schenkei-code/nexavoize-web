"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Turn = {
  role: "user" | "assistant";
  text: string;
};

const CONVERSATIONS: Turn[][] = [
  [
    { role: "user", text: "Hey Nexa, wie wird das Wetter heute in Wien?" },
    {
      role: "assistant",
      text: "Leicht bewoelkt, 18 Grad, am Nachmittag sonnig. Ich hab dir die Stunden mit über 20 Grad markiert.",
    },
  ],
  [
    { role: "user", text: "Schick Lisa ne Nachricht, dass ich 10 Minuten spaeter komme." },
    {
      role: "assistant",
      text: "Erledigt — WhatsApp: \u201eBin 10 Min spaeter, sorry!\u201c Soll ich einen neuen Termin vorschlagen?",
    },
  ],
  [
    { role: "user", text: "Was hab ich heute Nachmittag vor?" },
    {
      role: "assistant",
      text: "14:00 Call mit Max, 16:30 Physio, dann frei. Soll ich dir für den Call die Notizen von letzter Woche oeffnen?",
    },
  ],
];

export function Demo() {
  const [idx, setIdx] = useState(0);
  const [visibleTurns, setVisibleTurns] = useState(0);

  useEffect(() => {
    const conv = CONVERSATIONS[idx];
    setVisibleTurns(0);
    const timers: ReturnType<typeof setTimeout>[] = [];
    conv.forEach((_, i) => {
      timers.push(
        setTimeout(
          () => setVisibleTurns(i + 1),
          600 + i * 1800,
        ),
      );
    });
    const nextTimer = setTimeout(() => {
      setIdx((v) => (v + 1) % CONVERSATIONS.length);
    }, 600 + conv.length * 1800 + 2600);
    timers.push(nextTimer);
    return () => timers.forEach(clearTimeout);
  }, [idx]);

  const conversation = CONVERSATIONS[idx];

  return (
    <section
      id="demo"
      className="relative py-20 md:py-32"
      aria-labelledby="demo-heading"
    >
      <div className="container-page">
        <div className="grid gap-10 md:gap-16 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--brand-accent)]">Live-Demo</p>
            <h2
              id="demo-heading"
              className="mt-3 font-semibold tracking-tight"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
            >
              Du sagst etwas.{" "}
              <span className="text-gradient-brand">Claude versteht.</span>
            </h2>
            <p className="mt-5 text-lg text-[var(--muted)] leading-relaxed">
              Kein starres Command-Grid. NexaVoize versteht den Kontext deiner Anfrage,
              greift auf deine Apps zu und antwortet so, wie du einem Menschen antworten
              wuerdest — in unter 900 ms nach dem Satzende.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                { label: "Wake-Word Latency", value: "< 220 ms" },
                { label: "STT (on-device)", value: "< 400 ms" },
                { label: "Claude Roundtrip", value: "< 700 ms" },
                { label: "TTS Stream-Start", value: "< 280 ms" },
              ].map((row) => (
                <li key={row.label} className="flex items-center justify-between gap-4 py-3 border-b border-[var(--border)]">
                  <span className="text-[var(--muted)]">{row.label}</span>
                  <span className="font-mono text-[var(--foreground)]">{row.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              className="relative mx-auto max-w-sm aspect-[9/16] rounded-[40px] overflow-hidden glass"
              style={{ boxShadow: "var(--brand-glow)", border: "1px solid var(--border-strong)" }}
              role="figure"
              aria-label="Simuliertes Gespraech mit NexaVoize"
            >
              <div className="absolute top-0 inset-x-0 h-6 flex items-center justify-center">
                <div className="w-24 h-5 rounded-b-2xl bg-black/80" aria-hidden="true" />
              </div>

              <div className="absolute inset-0 pt-10 pb-6 px-5 flex flex-col gap-3 overflow-hidden">
                <div className="flex items-center justify-between text-[10px] font-mono text-[var(--subtle)]">
                  <span>NexaVoize</span>
                  <span
                    className="inline-flex items-center gap-1"
                    aria-live="polite"
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--brand-secondary)", boxShadow: "0 0 6px var(--brand-secondary)" }}
                    />
                    aktiv
                  </span>
                </div>

                <div className="flex-1 flex flex-col justify-end gap-3 overflow-hidden">
                  <AnimatePresence initial={false}>
                    {conversation.slice(0, visibleTurns).map((turn, i) => (
                      <motion.div
                        key={`${idx}-${i}`}
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-sm leading-snug ${
                          turn.role === "user"
                            ? "self-end text-white"
                            : "self-start glass text-[var(--foreground)]"
                        }`}
                        style={
                          turn.role === "user"
                            ? { background: "var(--brand-gradient)" }
                            : undefined
                        }
                      >
                        {turn.text}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="pt-2 border-t border-[var(--border)] flex items-center gap-2">
                  <span
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full"
                    style={{ background: "var(--brand-gradient)" }}
                    aria-hidden="true"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 3a3 3 0 00-3 3v6a3 3 0 006 0V6a3 3 0 00-3-3z" fill="#fff" />
                      <path d="M5 11a7 7 0 0014 0M12 18v3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div className="flex-1 flex items-center h-9 gap-[2px]">
                    {Array.from({ length: 28 }).map((_, i) => (
                      <span
                        key={i}
                        className="inline-block rounded-full"
                        style={{
                          width: 2,
                          height: `${30 + Math.sin(i + idx) * 25 + Math.random() * 30}%`,
                          background: "var(--brand-accent)",
                          opacity: 0.7,
                          animation: `wave ${0.7 + (i % 5) * 0.1}s ease-in-out ${i * 0.04}s infinite`,
                        }}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] text-[var(--subtle)]">00:{(visibleTurns * 3).toString().padStart(2, "0")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
