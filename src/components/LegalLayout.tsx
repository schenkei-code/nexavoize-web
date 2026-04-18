import type { ReactNode } from "react";

type Props = {
  title: string;
  lastUpdated: string;
  version: string;
  children: ReactNode;
};

export function LegalLayout({ title, lastUpdated, version, children }: Props) {
  return (
    <section className="pt-24 md:pt-32 pb-20">
      <div className="container-page">
        <article className="prose-legal mx-auto">
          <div className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--subtle)] mb-3">
            NexaVoize · Legal
          </div>
          <h1>{title}</h1>
          <div className="flex gap-4 mb-8 text-xs text-[var(--subtle)] font-mono">
            <span>Stand: {lastUpdated}</span>
            <span aria-hidden="true">·</span>
            <span>Version {version}</span>
          </div>
          {children}
          <hr />
          <p className="text-xs text-[var(--subtle)]">
            Diese Inhalte wurden auf Basis oesterreichischen Rechts erstellt und stellen keine
            Rechtsberatung dar. Vor produktivem Einsatz ist eine anwaltliche Pruefung empfohlen.
          </p>
        </article>
      </div>
    </section>
  );
}
