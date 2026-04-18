import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum und Offenlegung gemaess § 5 ECG, § 14 UGB, § 24/§ 25 MedienG fuer NexaVoize (nexavoize.com).",
  robots: { index: true, follow: false },
};

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum" lastUpdated="2026-04-18" version="1.0.0">
      <p>
        Angaben gemaess § 5 E-Commerce-Gesetz (ECG), § 14 Unternehmensgesetzbuch (UGB) und § 24
        und § 25 Mediengesetz (MedienG) fuer NexaVoize (nexavoize.com).
      </p>

      <h2>Medieninhaber, Herausgeber und Diensteanbieter</h2>
      <p>
        <strong>Dominik Schenkel</strong>
        <br />
        Einzelunternehmer
        <br />
        Ebreichsdorf
        <br />
        2483 Ebreichsdorf
        <br />
        Oesterreich
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href="mailto:dominikschenkel.business@gmail.com">dominikschenkel.business@gmail.com</a>
        <br />
        Web: <a href="https://nexavoize.com">https://nexavoize.com</a>
      </p>

      <h2>Unternehmensgegenstand</h2>
      <p>
        Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik (freies
        Gewerbe).
      </p>

      <h2>Mitgliedschaften</h2>
      <p>
        Mitglied der Wirtschaftskammer Niederoesterreich, Fachgruppe Unternehmensberatung und
        Informationstechnologie.
      </p>

      <h2>Umsatzsteuer</h2>
      <p>
        Kleinunternehmerregelung gemaess § 6 Abs. 1 Z 27 UStG — es wird keine Umsatzsteuer in
        Rechnung gestellt.
      </p>

      <h2>Anwendbare Rechtsvorschriften</h2>
      <p>
        Gewerbeordnung (GewO) 1994 in der jeweils geltenden Fassung, abrufbar unter{" "}
        <a href="https://www.ris.bka.gv.at">https://www.ris.bka.gv.at</a>.
      </p>

      <h2>Aufsichtsbehoerde / Gewerbebehoerde</h2>
      <p>Bezirkshauptmannschaft Baden</p>

      <h2>Blattlinie (§ 25 MedienG)</h2>
      <p>
        NexaVoize ist eine Online-Plattform unter dem Betrieb von Dominik Schenkel. Ziel ist die
        Information ueber sowie die Bereitstellung der Dienstleistung „AI Voice Assistant mit
        Claude". Die Inhalte geben die Meinung und den Leistungsumfang des Medieninhabers
        wieder.
      </p>

      <h2>Online-Streitbeilegung</h2>
      <p>
        Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a>. Unsere
        E-Mail-Adresse fuer Verbraucherbeschwerden lautet dominikschenkel.business@gmail.com. Wir
        sind weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        Trotz sorgfaeltiger inhaltlicher Kontrolle uebernehmen wir keine Haftung fuer die Inhalte
        externer Links. Fuer den Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber
        verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch den Medieninhaber erstellten Inhalte und Werke auf nexavoize.com unterliegen dem
        oesterreichischen Urheberrecht. Vervielfaeltigung, Bearbeitung, Verbreitung und jede Art
        der Verwertung ausserhalb der Grenzen des Urheberrechtes beduerfen der schriftlichen
        Zustimmung des Medieninhabers.
      </p>
    </LegalLayout>
  );
}
