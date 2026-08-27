import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sejedewe Reggae Band',
  description: 'Official Profile Sejedewe Reggae Band',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}