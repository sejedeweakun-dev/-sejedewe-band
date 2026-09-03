"use client";

import { useState } from "react";
import Link from "next/link";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Seluruh 33 foto dari folder public/gallery/
  const photos = [
    // --- Tahun 2026 ---
    { src: "/gallery/2026-hunterfestival01.jpg", title: "Hunter Festival 01", category: "2026" },
    { src: "/gallery/2026-hunterfestival02.jpg", title: "Hunter Festival 02", category: "2026" },
    { src: "/gallery/2026-kuntana01.jpg", title: "Kuntana Live 2026", category: "2026" },
    { src: "/gallery/2026-srb01.jpg", title: "Stadion Benteng Reborn 2026", category: "2026" },

    // --- Tahun 2025 ---
    { src: "/gallery/2025-Cianjur01.jpg", title: "Cianjur Live 01", category: "2025" },
    { src: "/gallery/2025-Cianjur02.jpg", title: "Cianjur Live 02", category: "2025" },
    { src: "/gallery/2025-djarumcoklat01.jpg", title: "Djarum Coklat Dot Com 01", category: "2025" },
    { src: "/gallery/2025-djarumcoklat02.jpg", title: "Djarum Coklat Dot Com 02", category: "2025" },
    { src: "/gallery/2025-gebyartangerang01.jpg", title: "Gebyar Tangerang 01", category: "2025" },
    { src: "/gallery/2025-gebyartangerang02.jpg", title: "Gebyar Tangerang 02", category: "2025" },
    { src: "/gallery/2025-jakut01.jpg", title: "Konser Jakarta Utara 01", category: "2025" },
    { src: "/gallery/2025-jakut02.jpg", title: "Konser Jakarta Utara 02", category: "2025" },
    { src: "/gallery/2025-libencoffe01.jpg", title: "Liben Coffee Session 01", category: "2025" },
    { src: "/gallery/2025-libencoffe02.jpg", title: "Liben Coffee Session 02", category: "2025" },
    { src: "/gallery/2025-libencoffe03.jpg", title: "Liben Coffee Session 03", category: "2025" },
    { src: "/gallery/2025-libencoffe04.jpg", title: "Liben Coffee Session 04", category: "2025" },
    { src: "/gallery/2025-libencoffe05.jpg", title: "Liben Coffee Session 05", category: "2025" },
    { src: "/gallery/2025-libencoffe06.jpg", title: "Liben Coffee Session 06", category: "2025" },
    { src: "/gallery/2025-libencoffe07.jpg", title: "Liben Coffee Session 07", category: "2025" },
    { src: "/gallery/2025-nordphoria01.jpg", title: "Nordphoria Festival 01", category: "2025" },
    { src: "/gallery/2025-nordphoria02.jpg", title: "Nordphoria Festival 02", category: "2025" },
    { src: "/gallery/2025-seradaura01.jpg", title: "Seradaura Event 01", category: "2025" },
    { src: "/gallery/2025-seradura02.jpg", title: "Seradaura Event 02", category: "2025" },
    { src: "/gallery/2025-setujuan01.jpg", title: "Setujuan Coffee 01", category: "2025" },
    { src: "/gallery/2025-setujuan02.jpg", title: "Setujuan Coffee 02", category: "2025" },
    { src: "/gallery/2025-soul01.jpg", title: "Soul Reggae Night 01", category: "2025" },
    { src: "/gallery/2025-soul02.jpg", title: "Soul Reggae Night 02", category: "2025" },
    { src: "/gallery/2025-superman01.jpg", title: "Superman Event 01", category: "2025" },
    { src: "/gallery/2025-superman02.jpg", title: "Superman Event 02", category: "2025" },
    { src: "/gallery/2025-wonogiri01.jpg", title: "Live Wonogiri 01", category: "2025" },
    { src: "/gallery/2025-wonogiri02.jpg", title: "Live Wonogiri 02", category: "2025" },
    { src: "/gallery/2025-yohee01.jpg", title: "Yohee Event 01", category: "2025" },
    { src: "/gallery/2025-yohee02.jpg", title: "Yohee Event 02", category: "2025" },
  ];

  const categories = ["Semua", "2026", "2025"];

  const filteredPhotos =
    activeFilter === "Semua"
      ? photos
      : photos.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-reggae-aesthetic text-white font-sans antialiased pb-20">
      {/* Header Halaman Galeri */}
      <header className="flex flex-col items-center pt-8 pb-6 border-b border-emerald-800/40 bg-[#0c1a10] px-4 text-center">
        <Link
          href="/"
          className="mb-4 text-xs font-semibold text-amber-300 hover:text-white transition flex items-center gap-1 bg-emerald-900/50 px-4 py-2 rounded-full border border-emerald-500/30"
        >
          &larr; Kembali ke Halaman Utama
        </Link>
        <h1 className="text-3xl md:text-5xl font-black text-amber-400 tracking-tight">
          GALERI DOKUMENTASI SEJEDEWE
        </h1>
        <p className="text-zinc-300 text-sm mt-2 max-w-xl">
          Seluruh koleksi foto dokumentasi panggung & konser Sejedewe (2025 - 2026).
        </p>

        {/* Filter Tahun */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-xs font-semibold px-5 py-2 rounded-full border transition duration-300 ${
                activeFilter === cat
                  ? "bg-amber-400 text-black border-amber-400 font-bold shadow-lg scale-105"
                  : "bg-[#111713]/80 text-emerald-400 border-emerald-800/40 hover:border-amber-400"
              }`}
            >
              {cat} ({cat === "Semua" ? photos.length : photos.filter(p => p.category === cat).length})
            </button>
          ))}
        </div>
      </header>

      {/* Grid Seluruh Foto */}
      <div className="max-w-6xl mx-auto px-4 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(photo.src)}
              className="overflow-hidden rounded-2xl border border-emerald-900/40 bg-black/40 aspect-square group relative shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/80"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs text-amber-300 font-semibold">
                  {photo.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up Lightbox Modal saat Foto Diklik */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-2xl font-bold hover:text-amber-400"
            >
              ✕ Tutup
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-[80vh] rounded-2xl object-contain border border-emerald-500/40 shadow-2xl"
            />
          </div>
        </div>
      )}
    </main>
  );
}