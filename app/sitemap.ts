import type { MetadataRoute } from "next";

const SITE = "https://sejedewe-band.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/gallery`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/presskit`, changeFrequency: "yearly", priority: 0.5 },
  ];
}
