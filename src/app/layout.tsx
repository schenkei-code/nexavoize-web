import type { Metadata, Viewport } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://nexavoize.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NexaVoize — Your voice, augmented by Claude",
    template: "%s · NexaVoize",
  },
  description:
    "NexaVoize ist der natürliche Voice-Assistant für Android. Wake-Word, Cross-App-Commands, Claude-Reasoning. Local-First Privacy. Offline-STT. Fuenf Sprachen.",
  applicationName: "NexaVoize",
  authors: [{ name: "Dominik Schenkel" }],
  creator: "Dominik Schenkel",
  publisher: "NexaVoize",
  keywords: [
    "Voice Assistant",
    "Claude AI",
    "Android Voice App",
    "Wake Word",
    "Local-First",
    "Offline STT",
    "Sprachassistent",
    "DSGVO",
    "Privacy",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "NexaVoize",
    title: "NexaVoize — Your voice, augmented by Claude",
    description:
      "Natuerlicher Voice-Dialog mit Claude. Wake-Word-Detection. Cross-App. Local-First. Für Android verfügbar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaVoize — Your voice, augmented by Claude",
    description:
      "Natuerlicher Voice-Dialog mit Claude. Wake-Word. Local-First. Android.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "de-DE": SITE_URL,
      "de-AT": SITE_URL,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#05050a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NexaVoize",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  founder: {
    "@type": "Person",
    name: "Dominik Schenkel",
    nationality: "AT",
  },
  email: "dominikschenkel.business@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AT",
    addressLocality: "Ebreichsdorf",
    postalCode: "2483",
  },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NexaVoize",
  url: SITE_URL,
  inLanguage: "de-DE",
  publisher: { "@type": "Organization", name: "NexaVoize" },
};

const jsonLdSoftwareApp = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NexaVoize",
  operatingSystem: "Android 10+",
  applicationCategory: "UtilitiesApplication",
  description:
    "Voice-Assistant mit Claude-Reasoning, Wake-Word-Detection, Cross-App-Commands und Local-First Privacy.",
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "EUR",
      description: "100 Minuten Claude pro Monat",
    },
    {
      "@type": "Offer",
      name: "Plus",
      price: "9",
      priceCurrency: "EUR",
      description: "Unlimited Claude-Minuten",
    },
    {
      "@type": "Offer",
      name: "Family",
      price: "19",
      priceCurrency: "EUR",
      description: "Bis zu 5 Personen, unlimited",
    },
  ],
  creator: { "@type": "Person", name: "Dominik Schenkel" },
  inLanguage: ["de", "en", "es", "fr", "it"],
};

// Static JSON-LD payloads — no user input, safe to inline.
const jsonLdPayload = JSON.stringify([jsonLdOrganization, jsonLdWebSite, jsonLdSoftwareApp]);

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col grain">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: jsonLdPayload }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--brand-primary)] focus:text-white focus:rounded-md"
        >
          Zum Inhalt springen
        </a>
        <div className="bg-orbs" aria-hidden="true" />
        <Navbar />
        <main id="main" className="relative z-10 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
