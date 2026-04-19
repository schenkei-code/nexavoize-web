"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function BetaForm() {
  const [email, setEmail] = useState("");
  const [device, setDevice] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setStatus("error");
      setError("Bitte gültige E-Mail angeben.");
      return;
    }
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/beta-signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, device }),
      });
      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        throw new Error(payload?.error ?? "Anmeldung fehlgeschlagen");
      }
      setStatus("success");
      setEmail("");
      setDevice("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unbekannter Fehler");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="mt-10 glass rounded-2xl p-6 border border-[var(--brand-secondary)]/30"
      >
        <h2 className="text-lg font-semibold text-[var(--fg)]">Eintrag erhalten</h2>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Wir melden uns mit dem Installations-Link, sobald dein Gerät freigeschaltet ist.
          Normalerweise innerhalb von 48 Stunden.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 space-y-5">
      <label className="block">
        <span className="block text-xs uppercase tracking-[0.2em] text-[var(--subtle)] mb-2">
          E-Mail-Adresse
        </span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          className="w-full rounded-xl glass border border-white/10 px-4 py-3 text-base text-[var(--fg)] outline-none focus:border-[var(--brand-accent)] transition-colors"
          placeholder="du@beispiel.de"
        />
      </label>
      <label className="block">
        <span className="block text-xs uppercase tracking-[0.2em] text-[var(--subtle)] mb-2">
          Gerät (optional)
        </span>
        <input
          type="text"
          value={device}
          onChange={(e) => setDevice(e.target.value)}
          className="w-full rounded-xl glass border border-white/10 px-4 py-3 text-base text-[var(--fg)] outline-none focus:border-[var(--brand-accent)] transition-colors"
          placeholder="z.B. Pixel 9, Samsung S24"
        />
      </label>
      {error && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.03] glow-ring disabled:opacity-50 disabled:hover:scale-100"
        style={{ background: "var(--brand-gradient)" }}
      >
        {status === "sending" ? "Wird abgeschickt…" : "Für Beta eintragen"}
      </button>
    </form>
  );
}
