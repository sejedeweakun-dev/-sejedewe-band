"use client";

import Link from "next/link";
import { SPOTIFY_URL, WA_NUMBER } from "../data/site";

const links = [
  { label: "Spotify", href: SPOTIFY_URL },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCV4e3owx3eCgFnQpBs5rNQw" },
  { label: "Instagram", href: "https://www.instagram.com/sejedeweofficial" },
  { label: "TikTok", href: "https://vm.tiktok.com/ZS9B3U2dNRBNN-qtv3F/" },
  { label: "Facebook", href: "https://www.facebook.com/share/18cY77na52/" },
];

export default function PressKit() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-zinc-200 print:text-black">
      <div className="mb-8 flex items-center justify-between gap-3 print:hidden">
        <Link href="/" className="text-xs font-semibold text-amber-300 hover:text-white">&larr; Kembali ke beranda</Link>
        <button type="button" onClick={() => window.print()} className="rounded-xl bg-emerald-400 px-4 py-2.5 text-xs font-bold text-black hover:bg-emerald-300">
          Simpan sebagai PDF
        </button>
      </div>

      <h1 className="grad-flow text-5xl font-black tracking-tight print:text-black print:[-webkit-text-fill-color:black] md:text-6xl">Sejedewe</h1>
      <p className="mt-2 text-lg text-amber-300 print:text-black">Press kit - Reggae band dari Tangerang</p>

      <img src="/personel.jpg" alt="Personel Sejedewe" className="mt-8 w-full rounded-2xl object-cover" />

      <section className="mt-8">
        <h2 className="text-xl font-bold text-amber-400 print:text-black">Tentang</h2>
        <p className="mt-2 leading-relaxed">
          Sejedewe adalah band reggae asal Tangerang dengan musik santai dan pesan sosial. Membawa semangat persaudaraan dan energi positif di setiap penampilan.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-amber-400 print:text-black">Tautan resmi</h2>
        <ul className="mt-2 space-y-1">
          {links.map((l) => (
            <li key={l.label}>
              <span className="font-semibold">{l.label}: </span>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="break-all text-emerald-400 underline underline-offset-4 print:text-black">{l.href}</a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-amber-400 print:text-black">Kontak booking</h2>
        <p className="mt-2">WhatsApp manajemen: +{WA_NUMBER}</p>
      </section>
    </main>
  );
}
