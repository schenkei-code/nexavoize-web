import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklaerung fuer NexaVoize nach DSGVO (EU) 2016/679, oesterreichisches DSG und TKG 2021.",
};

export default function DsgvoPage() {
  return (
    <LegalLayout title="Datenschutzerklaerung" lastUpdated="2026-04-18" version="1.0.0">
      <p>
        Diese Datenschutzerklaerung informiert Sie gemaess Artikel 13 und 14 der
        Datenschutz-Grundverordnung (DSGVO) sowie § 1 und § 4 des oesterreichischen
        Datenschutzgesetzes (DSG) ueber die Verarbeitung personenbezogener Daten im Rahmen der
        Nutzung von <strong>NexaVoize</strong> (nexavoize.com).
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlicher im Sinne der DSGVO ist:
        <br />
        <strong>Dominik Schenkel</strong>
        <br />
        Einzelunternehmer
        <br />
        Ebreichsdorf, 2483 Ebreichsdorf, Oesterreich
        <br />
        E-Mail: dominikschenkel.business@gmail.com
      </p>

      <h2>2. Kontakt in Datenschutzangelegenheiten</h2>
      <p>
        Als Einzelunternehmer besteht keine gesetzliche Pflicht zur Bestellung eines
        Datenschutzbeauftragten. Ansprechpartner fuer Datenschutzangelegenheiten ist Dominik
        Schenkel, erreichbar unter dominikschenkel.business@gmail.com.
      </p>

      <h2>3. Kategorien verarbeiteter Daten</h2>
      <ul>
        <li>Account-Stammdaten (Name, E-Mail, Passwort-Hash oder OAuth-ID)</li>
        <li>Stimmaufnahmen (Audio-Dateien, temporaer bis zur Transkription)</li>
        <li>Transkripte der Stimmaufnahmen</li>
        <li>Konversationshistorie mit dem AI-Assistenten</li>
        <li>Geraete- und App-Metadaten (OS-Version, App-Version, Device-ID)</li>
        <li>Optionale Voice-Clone-Samples (nur bei explizitem Opt-In, Art. 9 DSGVO biometrische Daten)</li>
        <li>Zahlungsdaten (ueber Stripe/App-Stores)</li>
      </ul>

      <h3>Besondere Kategorien (Art. 9 DSGVO)</h3>
      <p>
        NexaVoize verarbeitet in bestimmten optionalen Funktionen biometrische Daten
        (Stimm-/Gesichtsmerkmale). Diese Verarbeitung erfolgt ausschliesslich auf Grundlage Ihrer
        ausdruecklichen Einwilligung (Art. 9 Abs. 2 lit. a DSGVO). Sie koennen die Einwilligung
        jederzeit widerrufen; die bis zum Widerruf erfolgte Verarbeitung bleibt rechtmaessig.
      </p>

      <h2>4. Zwecke und Rechtsgrundlagen</h2>
      <ul>
        <li>Bereitstellung der Plattform, Account-Verwaltung — Art. 6 Abs. 1 lit. b DSGVO</li>
        <li>Zahlungsabwicklung — Art. 6 Abs. 1 lit. b + lit. c DSGVO (UStG, BAO)</li>
        <li>Sicherheits-Logs, Betrugspraevention — Art. 6 Abs. 1 lit. f DSGVO</li>
        <li>Produktverbesserung, Fehleranalyse — Art. 6 Abs. 1 lit. f DSGVO</li>
        <li>Marketing-E-Mails — Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
        <li>Analytics/Tracking — Art. 6 Abs. 1 lit. a DSGVO + § 165 TKG 2021</li>
        <li>AI-Inferenz Ihrer Eingaben — Art. 6 Abs. 1 lit. b DSGVO</li>
        <li>Voice Clone / biometrische Verarbeitung — Art. 9 Abs. 2 lit. a DSGVO</li>
      </ul>

      <h2>5. Empfaenger / Auftragsverarbeiter</h2>
      <p>
        Wir setzen folgende Auftragsverarbeiter bzw. gemeinsam Verantwortliche ein. Mit allen
        EU-/EWR-externen Empfaengern bestehen Standardvertragsklauseln (SCC) gemaess Art. 46
        DSGVO:
      </p>
      <ul>
        <li>Anthropic PBC — Claude API (USA, SCC)</li>
        <li>OpenAI Ireland Ltd. — Whisper-Transkription (EU, Auftragsverarbeitung)</li>
        <li>ElevenLabs Inc. — Text-to-Speech (USA, SCC)</li>
        <li>Vercel Inc. — Hosting (USA, SCC)</li>
        <li>Supabase Inc. — Datenbank und Auth (EU)</li>
        <li>Stripe Payments Europe Ltd. — Zahlungsabwicklung (EU, Auftragsverarbeitung)</li>
        <li>Google LLC (Play Store) — Android-Distribution (USA, SCC)</li>
      </ul>

      <h2>6. Uebermittlung in Drittlaender</h2>
      <p>
        Einzelne Auftragsverarbeiter haben ihren Sitz in den USA. Die Uebermittlung erfolgt auf
        Grundlage von Standardvertragsklauseln der EU-Kommission (Durchfuehrungsbeschluss (EU)
        2021/914) sowie — soweit zertifiziert — auf Basis des EU-US Data Privacy Framework
        (Angemessenheitsbeschluss (EU) 2023/1795).
      </p>

      <h2>7. Speicherdauer</h2>
      <ul>
        <li>Account-Daten: bis 30 Tage nach Kuendigung / Account-Loeschung</li>
        <li>Stimmaufnahmen (Rohdaten): automatische Loeschung nach 7 Tagen</li>
        <li>Server-Logs: maximal 30 Tage</li>
        <li>Rechnungsunterlagen: 7 Jahre (§ 132 BAO)</li>
      </ul>

      <h2>8. Ihre Rechte als betroffene Person</h2>
      <p>Sie haben gemaess Art. 15-22 DSGVO folgende Rechte uns gegenueber:</p>
      <ul>
        <li>
          <strong>Auskunft</strong> (Art. 15), <strong>Berichtigung</strong> (Art. 16),{" "}
          <strong>Loeschung</strong> (Art. 17)
        </li>
        <li>
          <strong>Einschraenkung</strong> (Art. 18), <strong>Datenuebertragbarkeit</strong> (Art. 20)
        </li>
        <li>
          <strong>Widerspruch</strong> (Art. 21), <strong>Widerruf</strong> einer Einwilligung (Art. 7
          Abs. 3)
        </li>
        <li>
          Nicht automatisierter Entscheidung im Einzelfall zu unterliegen (Art. 22)
        </li>
      </ul>

      <h2>9. Beschwerderecht</h2>
      <p>
        <strong>Oesterreichische Datenschutzbehoerde</strong>
        <br />
        Barichgasse 40-42, 1030 Wien
        <br />
        E-Mail: dsb@dsb.gv.at · Web:{" "}
        <a href="https://www.dsb.gv.at">https://www.dsb.gv.at</a>
      </p>

      <h2>10. Automatisierte Entscheidungen / Profiling</h2>
      <p>
        NexaVoize setzt KI-gestuetzte Analyse- und Generierungsverfahren ein. Eine ausschliesslich
        automatisierte Entscheidung im Sinne von Art. 22 DSGVO mit rechtlicher Wirkung fuer Sie
        findet NICHT statt.
      </p>

      <h2>11. Cookies und Tracking</h2>
      <p>
        Nicht essenzielle Cookies werden nur mit Ihrer Einwilligung gemaess § 165 Abs. 3 TKG 2021
        gesetzt.
      </p>

      <h2>12. Datensicherheit</h2>
      <p>
        Wir setzen technische und organisatorische Massnahmen gemaess Art. 32 DSGVO ein:
        TLS-Verschluesselung, Passwort-Hashing (bcrypt/argon2id), Zugriffsbeschraenkungen,
        Backup-Strategien, regelmaessige Sicherheits-Audits.
      </p>

      <h2>13. Aenderungen</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklaerung anzupassen. Die jeweils aktuelle Fassung
        ist unter <a href="https://nexavoize.com/legal/dsgvo">nexavoize.com/legal/dsgvo</a>{" "}
        abrufbar.
      </p>
    </LegalLayout>
  );
}
