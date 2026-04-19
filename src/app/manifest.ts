import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NexaVoize — Your voice, augmented by Claude",
    short_name: "NexaVoize",
    description:
      "Natuerlicher Voice-Assistant für Android mit Claude-Reasoning, Wake-Word-Detection und Local-First Privacy.",
    start_url: "/",
    display: "standalone",
    background_color: "#05050a",
    theme_color: "#05050a",
    lang: "de",
    dir: "ltr",
    orientation: "portrait",
    scope: "/",
    categories: ["productivity", "utilities", "ai"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
