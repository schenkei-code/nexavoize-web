"use client";

import { motion } from "framer-motion";

type UseCase = {
  title: string;
  tagline: string;
  quote: string;
  accent: string;
};

const USE_CASES: UseCase[] = [
  {
    title: "Home-Automation",
    tagline: "Licht, Heizung, Rollaeden",
    quote: "\u201eHey Nexa, Wohnzimmer auf Kinomodus und mach mir Popcorn-Timer fuer 3 Minuten.\u201c",
    accent: "#7c5cff",
  },
  {
    title: "Fitness-Coach",
    tagline: "Plan, Zaehlen, Motivation",
    quote: "\u201eStarte 4x12 Kniebeugen mit 90 Sekunden Pause. Sag mir wenn ich los soll.\u201c",
    accent: "#2cd4ff",
  },
  {
    title: "Productivity",
    tagline: "Kalender, Mails, Notizen",
    quote: "\u201eFasse mir die letzten 5 Mails von Max zusammen und zeig mir freie Slots diese Woche.\u201c",
    accent: "#b3a5ff",
  },
  {
    title: "Creative Writing",
    tagline: "Partner fuer Ideen",
    quote: "\u201eBrainstorm mir drei Haken fuer einen YouTube-Short ueber ECU-Tuning.\u201c",
    accent: "#7c5cff",
  },
  {
    title: "Language Learning",
    tagline: "Immersion, feedback, fun",
    quote: "\u201eFrag mich 10 Minuten Franzoesisch-Konversation auf A2-Niveau und korrigier mich sanft.\u201c",
    accent: "#2cd4ff",
  },
];

export function UseCases() {
  return (
    <section
      id="use-cases"
      className="relative py-20 md:py-32"
      aria-labelledby="usecases-heading"
    >
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-4xl">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--brand-accent)]">Use-Cases</p>
            <h2
              id="usecases-heading"
              className="mt-3 font-semibold tracking-tight"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
            >
              Ein Assistant.{" "}
              <span className="text-gradient-brand">Fuenf Leben.</span>
            </h2>
          </div>
          <p className="text-[var(--muted)] max-w-md">
            Vom Aufwachen bis zum Einschlafen — NexaVoize bleibt dein Interface, weil
            es sich an dein Leben anpasst, nicht umgekehrt.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((u, i) => (
            <motion.article
              key={u.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-7 rounded-2xl glass overflow-hidden"
            >
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"
                style={{ background: u.accent }}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold tracking-tight">{u.title}</h3>
                <p className="text-xs uppercase tracking-[0.12em] mt-1 text-[var(--subtle)]">
                  {u.tagline}
                </p>
                <p className="mt-5 text-[15px] text-[var(--muted)] leading-relaxed italic">
                  {u.quote}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
