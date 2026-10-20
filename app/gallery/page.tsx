"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Photo = { src: string; title: string; year: "2026" | "2025" };

const p = (year: Photo["year"], file: string, title: string): Photo => ({ src: `/gallery/${year}-${file}.jpg`, title, year });

const photos: Photo[] = [
  p("2026", "hunterfestival01", "Hunter Festival 01"),
  p("2026", "hunterfestival02", "Hunter Festival 02"),
  p("2026", "kuntana01", "Kuntana Live 2026"),
  p("2026", "srb01", "Stadion Benteng Reborn 2026"),
  p("2026", "streakfest", "Streak Fest 2026"),
  p("2025", "cianjur01", "Cianjur Live 01"),
  p("2025", "cianjur02", "Cianjur Live 02"),
  p("2025", "djarumcoklat01", "Djarum Coklat Dot Com 01"),
  p("2025", "djarumcoklat02", "Djarum Coklat Dot Com 02"),
  p("2025", "gebyartangerang01", "Gebyar Tangerang 01"),
  p("2025", "gebyartangerang02", "Gebyar Tangerang 02"),
  p("2025", "jakut01", "Konser Jakarta Utara 01"),
  p("2025", "jakut02", "Konser Jakarta Utara 02"),
  ...[1, 2, 3, 4, 5, 6, 7].map((n) => p("2025", `libencoffee0${n}`, `Liben Coffee Session 0${n}`)),
  p("2025", "nordphoria01", "Nordphoria Festival 01"),
  p("2025", "nordphoria02", "Nordphoria Festival 02"),
  p("2025", "seradaura01", "Seradaura Event 01"),
  p("2025", "seradaura02", "Seradaura Event 02"),
  p("2025", "setujuan01", "Setujuan Coffee 01"),
  p("2025", "setujuan02", "Setujuan Coffee 02"),
  p("2025", "soul01", "Soul Reggae Night 01"),
  p("2025", "soul02", "Soul Reggae Night 02"),
  p("2025", "superman01", "Superman Event 01"),
  p("2025", "superman02", "Superman Event 02"),
  p("2025", "wonogiri01", "Live Wonogiri 01"),
  p("2025", "yohee01", "Yohee Event 01"),
  p("2025", "yohee02", "Yohee Event 02"),
];

const filters = ["Semua", "2026", "2025"] as const;
const focus = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400";

export default function GalleryPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Semua");
  const [active, setActive] = useState<number | null>(null);

  const shown = filter === "Semua" ? photos : photos.filter((x) => x.year === filter);
  const step = useCallback((d: number) => setActive((i) => (i === null ? i : (i + d + shown.length) % shown.length)), [shown.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, step]);

  const current = active !== null ? shown[active] : null;

  return (
    <main className="min-h-screen pb-20 text-zinc-200 antialiased">
      <header className="border-b border-emerald-900/50 px-4 py-10 text-center">
        <Link href="/" className={`inline-block rounded-full border border-emerald-500/30 px-4 py-2 text-xs font-semibold text-amber-300 hover:bg-emerald-900/40 ${focus}`}>
          &larr; Kembali ke beranda
        </Link>
        <h1 className="mt-5 text-4xl font-black tracking-tight md:text-5xl grad-flow">Galeri panggung</h1>
        <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-300">Dokumentasi penampilan Sejedewe, 2025 - 2026.</p>
        <div className="mt-6 flex justify-center gap-2" role="group" aria-label="Filter tahun">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-5 py-2 text-xs font-semibold ${focus} ${filter === f ? "border-amber-400 bg-amber-400 text-black" : "border-emerald-800/60 text-emerald-400 hover:border-amber-400"}`}
            >
              {f} ({f === "Semua" ? photos.length : photos.filter((x) => x.year === f).length})
            </button>
          ))}
        </div>
      </header>

      <ul className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-3 px-4 md:grid-cols-3 lg:grid-cols-4">
        {shown.map((photo, i) => (
          <li key={photo.src}>
            <button type="button" onClick={() => setActive(i)} aria-label={`Perbesar foto: ${photo.title}`} className={`card-soft group relative block aspect-square w-full overflow-hidden rounded-xl ${focus}`}>
              <img src={photo.src} alt={photo.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-3 text-left text-xs font-semibold text-amber-200 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">{photo.title}</span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div role="dialog" aria-modal="true" aria-label={current.title} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setActive(null)}>
          <button type="button" autoFocus onClick={() => setActive(null)} aria-label="Tutup" className={`absolute right-4 top-4 rounded-full bg-black/70 p-2.5 text-white hover:bg-emerald-600 ${focus}`}>
            <X className="h-5 w-5" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Foto sebelumnya" className={`absolute left-3 rounded-full bg-black/70 p-2.5 text-white hover:bg-emerald-600 ${focus}`}>
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Foto berikutnya" className={`absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2.5 text-white hover:bg-emerald-600 ${focus}`}>
            <ChevronRight className="h-6 w-6" />
          </button>
          <figure className="flex max-h-[90vh] max-w-4xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.title} className="max-h-[80vh] max-w-full rounded-xl object-contain" />
            <figcaption className="mt-3 text-sm text-amber-200">{current.title} ({(active ?? 0) + 1}/{shown.length})</figcaption>
          </figure>
        </div>
      )}
    </main>
  );
}
