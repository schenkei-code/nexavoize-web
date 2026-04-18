import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "AGB",
  description:
    "Allgemeine Geschaeftsbedingungen (AGB) fuer NexaVoize — ABGB, UGB, KSchG, FAGG, ECG. Stand 2026.",
};

export default function AgbPage() {
  return (
    <LegalLayout
      title="Allgemeine Geschaeftsbedingungen (AGB)"
      lastUpdated="2026-04-18"
      version="1.0.0"
    >
      <h2>1. Geltungsbereich und Vertragspartner</h2>
      <p>
        1.1 Diese AGB regeln die Nutzung der Plattform <strong>NexaVoize</strong> (
        <a href="https://nexavoize.com">https://nexavoize.com</a>, nachfolgend „Dienst"), betrieben
        von <strong>Dominik Schenkel</strong>, Einzelunternehmer, Ebreichsdorf, 2483 Ebreichsdorf,
        Oesterreich (nachfolgend „Anbieter").
      </p>
      <p>
        1.2 Vertragspartner ist der Nutzer — entweder als Verbraucher im Sinne des § 1 Abs. 1 Z 2
        KSchG oder als Unternehmer im Sinne des § 1 UGB. Abweichende AGB des Nutzers gelten nur bei
        schriftlicher Zustimmung des Anbieters.
      </p>

      <h2>2. Vertragsgegenstand</h2>
      <p>
        2.1 Der Anbieter stellt dem Nutzer den Dienst NexaVoize im Rahmen eines
        Software-as-a-Service-Modells (Freemium mit Pro-Abo und Pay-as-you-go-Minuten) ueber das
        Internet zur Verfuegung. Leistungsumfang richtet sich nach der zum Zeitpunkt des
        Vertragsabschlusses gueltigen Leistungsbeschreibung auf nexavoize.com.
      </p>
      <p>
        2.2 Der Anbieter schuldet die Bereitstellung der Software in der jeweils aktuellen
        Version. Ein Anspruch auf bestimmte Features besteht nicht; der Anbieter ist berechtigt,
        die Software weiterzuentwickeln, sofern der Kernnutzen des gebuchten Tarifs erhalten
        bleibt.
      </p>

      <h2>3. Vertragsabschluss und Registrierung</h2>
      <p>
        3.1 Der Vertrag kommt mit Registrierung des Nutzers und Annahme durch den Anbieter
        (Bestaetigungs-E-Mail oder Freischaltung des Accounts) zustande.
      </p>
      <p>3.2 Der Nutzer verpflichtet sich zu wahrheitsgemaessen Angaben. Zugangsdaten sind vertraulich zu behandeln.</p>
      <p>
        3.3 NexaVoize bietet eine 14-taegige kostenfreie Testphase. Nach Ablauf wird — sofern
        gewaehlt — der kostenpflichtige Tarif automatisch aktiviert. Der Nutzer wird vor Ablauf
        per E-Mail informiert.
      </p>

      <h2>4. Leistungen und Verfuegbarkeit</h2>
      <p>
        4.1 Der Anbieter strebt eine Verfuegbarkeit des Dienstes von 99% im Jahresmittel an.
        Ausgenommen sind geplante Wartungsarbeiten, Stoerungen bei Drittanbietern und Faelle
        hoeherer Gewalt.
      </p>

      <h2>5. Entgelte, Zahlungsbedingungen</h2>
      <p>
        5.1 Die aktuellen Preise sind auf nexavoize.com ausgewiesen (bei Kleinunternehmerregelung
        ohne USt gemaess § 6 Abs. 1 Z 27 UStG).
      </p>
      <p>5.2 Die Zahlung erfolgt ueber Stripe Payments Europe Ltd. per Karte, SEPA oder andere angebotene Methoden.</p>
      <p>5.3 Abonnements werden im Voraus fuer die jeweilige Laufzeit abgerechnet.</p>
      <p>
        5.4 Bei Zahlungsverzug ist der Anbieter berechtigt, den Zugang nach Mahnung auszusetzen.
        Verzugszinsen richten sich nach § 1333 ABGB bzw. § 456 UGB.
      </p>

      <h2>6. Laufzeit und Kuendigung</h2>
      <p>6.1 Monats-Abos: Laufzeit 1 Monat, automatische Verlaengerung um je 1 Monat.</p>
      <p>6.2 Jahres-Abos: Laufzeit 12 Monate, automatische Verlaengerung um je 12 Monate.</p>
      <p>
        6.3 Die Kuendigung ist jederzeit im Nutzerkonto oder formlos per E-Mail an
        dominikschenkel.business@gmail.com moeglich.
      </p>
      <p>6.4 Das Recht auf ausserordentliche Kuendigung aus wichtigem Grund bleibt unberuehrt.</p>

      <h2>7. Widerrufsrecht fuer Verbraucher (FAGG)</h2>
      <p>
        7.1 Verbraucher im Sinne des § 1 KSchG haben gemaess § 11 FAGG das Recht, binnen 14 Tagen
        ohne Angabe von Gruenden vom Vertrag zurueckzutreten.
      </p>
      <p>
        7.2 Der Widerruf ist per eindeutiger Erklaerung an dominikschenkel.business@gmail.com
        moeglich. Die Muster-Widerrufserklaerung nach Anhang I FAGG kann verwendet werden.
      </p>
      <p>
        7.3 <strong>Vorzeitiger Verlust des Ruecktrittsrechts (§ 18 FAGG):</strong> Bei digitalen
        Dienstleistungen erlischt das Widerrufsrecht, sobald der Anbieter mit der Ausfuehrung
        begonnen hat, nachdem der Verbraucher ausdruecklich zugestimmt hat und den Verlust
        bestaetigt hat.
      </p>
      <p>
        7.4 Folgen des Widerrufs: Erstattung unverzueglich, spaetestens binnen 14 Tagen, mit
        demselben Zahlungsmittel.
      </p>

      <h2>8. Pflichten des Nutzers, Acceptable Use</h2>
      <p>Der Nutzer verpflichtet sich zur Einhaltung der Acceptable-Use-Policy sowie aller geltenden Gesetze.</p>
      <p>Der Nutzer ist allein verantwortlich fuer alle Inhalte, die er eingibt oder generiert.</p>

      <h2>9. Nutzungsrechte an Inhalten</h2>
      <p>
        9.1 <strong>Nutzer-Inhalte:</strong> Der Nutzer behaelt alle Rechte an von ihm eingebrachten
        Inhalten. Er raeumt dem Anbieter ein nicht-exklusives, weltweites, zeitlich auf die
        Vertragslaufzeit beschraenktes Nutzungsrecht ein, soweit zur Dienstleistungserbringung
        erforderlich.
      </p>
      <p>
        9.2 <strong>AI-generierte Inhalte:</strong> Outputs koennen — soweit urheberrechtlich
        schutzfaehig — im Rahmen der Tarifgrenzen kommerziell genutzt werden.
      </p>
      <p>
        9.3 Der Anbieter nutzt Nutzer-Inputs <strong>nicht</strong> fuer das Training eigener
        Foundation-Modelle ohne separate Einwilligung.
      </p>

      <h2>10. Gewaehrleistung und Haftung</h2>
      <p>
        10.1 Der Anbieter leistet Gewaehr nach §§ 922 ff. ABGB bzw. §§ 377 ff. UGB fuer
        Unternehmer.
      </p>
      <p>
        10.2 Der Anbieter haftet unbeschraenkt fuer Vorsatz und grobe Fahrlaessigkeit. Fuer leichte
        Fahrlaessigkeit nur bei Verletzung wesentlicher Vertragspflichten und beschraenkt auf den
        typischerweise vorhersehbaren Schaden.
      </p>
      <p>
        10.3 <strong>Haftung bei AI-Outputs:</strong> Der Anbieter uebernimmt keine Gewaehr fuer
        Richtigkeit, Vollstaendigkeit oder Rechtssicherheit AI-generierter Inhalte. Pruefung durch
        den Nutzer ist verpflichtend.
      </p>

      <h2>11. Datenschutz</h2>
      <p>
        Die Verarbeitung personenbezogener Daten richtet sich nach der{" "}
        <a href="/legal/dsgvo">Datenschutzerklaerung</a>.
      </p>

      <h2>12. Aenderungen der AGB</h2>
      <p>
        12.1 Der Anbieter kann diese AGB bei sachlichem Grund mit 6 Wochen Ankuendigungsfrist
        aendern.
      </p>
      <p>
        12.2 Widerspricht der Nutzer nicht binnen 6 Wochen, gelten die neuen AGB als angenommen.
      </p>

      <h2>13. Schlussbestimmungen</h2>
      <p>
        13.1 <strong>Gerichtsstand:</strong> Fuer Streitigkeiten mit Unternehmern ist ausschliesslich
        das sachlich zustaendige Gericht in Wien zustaendig. Gegenueber Verbrauchern gelten § 14
        KSchG und Art. 18 Brussel-Ia-VO.
      </p>
      <p>
        13.2 <strong>Anwendbares Recht:</strong> Es gilt oesterreichisches Recht unter Ausschluss
        des UN-Kaufrechts.
      </p>
      <p>
        13.3 <strong>Salvatorische Klausel:</strong> Sollte eine Bestimmung unwirksam sein, bleibt
        die Gueltigkeit der uebrigen unberuehrt.
      </p>
    </LegalLayout>
  );
}
