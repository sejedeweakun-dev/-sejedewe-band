import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sejedewe - Reggae Band",
  description: "Official Website Sejedewe Reggae Band",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}