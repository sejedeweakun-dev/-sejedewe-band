import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";


const SITE = "https://sejedewe-band.vercel.app";
const DESC =
  "Sejedewe, band reggae dari Tangerang. Lihat jadwal manggung, video resmi, dokumentasi panggung, dan kontak booking.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: "Sejedewe - Reggae Band", template: "%s | Sejedewe" },
  description: DESC,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Sejedewe Reggae Band",
    title: "Sejedewe - Reggae Band",
    description: DESC,
    locale: "id_ID",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Personel Sejedewe" }],
  },
  twitter: { card: "summary_large_image", title: "Sejedewe - Reggae Band", description: DESC, images: ["/og.jpg"] },
};

export const viewport: Viewport = { themeColor: "#08120a" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Sejedewe",
  genre: "Reggae",
  url: SITE,
  image: `${SITE}/personel.jpg`,
  foundingLocation: "Tangerang, Indonesia",
  sameAs: [
    "https://www.instagram.com/sejedeweofficial",
    "https://www.youtube.com/channel/UCV4e3owx3eCgFnQpBs5rNQw",
    "https://vm.tiktok.com/ZS9B3U2dNRBNN-qtv3F/",
    "https://www.facebook.com/share/18cY77na52/",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
