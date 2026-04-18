import type { MetadataRoute } from "next";

const SITE_URL = "https://nexavoize.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }[] = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
    { path: "/legal/impressum", changeFrequency: "yearly", priority: 0.3 },
    { path: "/legal/dsgvo", changeFrequency: "yearly", priority: 0.3 },
    { path: "/legal/agb", changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
