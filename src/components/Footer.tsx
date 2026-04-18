import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-[var(--border)] bg-[rgba(5,5,10,0.6)] backdrop-blur-xl mt-20">
      <div className="container-page py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg tracking-tight">
            <span
              className="inline-block w-6 h-6 rounded-full"
              style={{ background: "var(--brand-gradient)" }}
              aria-hidden="true"
            />
            <span>
              Nexa<span className="text-gradient-brand">Voize</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-[var(--muted)] max-w-sm leading-relaxed">
            Deine Stimme, verstaerkt durch Claude. Natuerlicher Voice-Dialog mit Wake-Word-Detection,
            Cross-App-Commands und Local-First Privacy.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.15em] text-[var(--subtle)] mb-4">Produkt</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/#features" className="text-[var(--muted)] hover:text-[var(--foreground)]">Features</Link></li>
            <li><Link href="/#use-cases" className="text-[var(--muted)] hover:text-[var(--foreground)]">Use-Cases</Link></li>
            <li><Link href="/pricing" className="text-[var(--muted)] hover:text-[var(--foreground)]">Preise</Link></li>
            <li><Link href="/#faq" className="text-[var(--muted)] hover:text-[var(--foreground)]">FAQ</Link></li>
            <li><Link href="/#download" className="text-[var(--muted)] hover:text-[var(--foreground)]">APK-Download</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.15em] text-[var(--subtle)] mb-4">Rechtliches</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/legal/impressum" className="text-[var(--muted)] hover:text-[var(--foreground)]">Impressum</Link></li>
            <li><Link href="/legal/dsgvo" className="text-[var(--muted)] hover:text-[var(--foreground)]">Datenschutz</Link></li>
            <li><Link href="/legal/agb" className="text-[var(--muted)] hover:text-[var(--foreground)]">AGB</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[var(--subtle)]">
          <p>&copy; {year} NexaVoize · Dominik Schenkel · Ebreichsdorf, Oesterreich</p>
          <p className="font-mono">Built with Claude · Made in AT</p>
        </div>
      </div>
    </footer>
  );
}
