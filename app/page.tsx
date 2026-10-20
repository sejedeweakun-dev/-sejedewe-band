"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { shows } from "./data/shows";
import { highlightPhotos, merchItems, SPOTIFY_ARTIST_ID, SPOTIFY_URL } from "./data/site";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  CalendarDays,
  Headphones,
  Play,
  Camera,
  Calendar,
  Sparkles,
  Music2,
  Send,
  Video, // <-- Ganti Youtube menjadi Video di sini
  Radio,
  ChevronRight,
  ChevronDown,
  X,
} from "lucide-react";

// Variasi Animasi dengan Tipe TypeScript
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [showMerch, setShowMerch] = useState<boolean>(false);

  useEffect(() => {
    if (!selectedVideo) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelectedVideo(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selectedVideo]);

  const toggleMerch = () => {
    setShowMerch((prev) => !prev);
  }

  return (
    <main className="min-h-screen text-white font-sans antialiased pb-24 overflow-x-hidden selection:bg-amber-400 selection:text-black">
      
      {/* Header Logo */}
      <header className="flex flex-col items-center pt-6 pb-4 border-b border-emerald-900/40 bg-[#070e08]/90 backdrop-blur-md">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/logo.webp"
          alt="Sejedewe Logo"
          className="h-36 md:h-52 w-auto object-contain mb-2 drop-shadow-[0_0_25px_rgba(34,197,94,0.35)] hover:scale-105 transition-transform duration-300"
        />
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 text-[11px] md:text-xs uppercase tracking-[0.3em] text-amber-400 font-bold bg-amber-500/10 px-4 py-1 rounded-full border border-amber-500/30"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          Indonesian Reggae Music
        </motion.div>
      </header>

      <div className="max-w-4xl mx-auto px-4 mt-8 space-y-10">
        
        {/* Banner Utama */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl card-soft p-6 md:p-8 shadow-2xl backdrop-blur-md relative"
        >
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="w-full mb-6 rounded-2xl overflow-hidden border border-emerald-900/50 bg-black/60 shadow-2xl relative group">
            <img
              src="/personel.jpg"
              alt="Sejedewe Reggae Band"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
          </div>

          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/30 tracking-wider">
              <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              OFFICIAL PROFILE
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-transparent grad-flow">
              SEJEDEWE
            </h1>
            <p className="text-zinc-300 text-sm md:text-base max-w-2xl leading-relaxed">
              Band reggae dari Tangerang dengan musik santai dan pesan sosial. Membawa semangat persaudaraan dan energi positif di setiap nada.
            </p>
          </div>
        </motion.div>

        {/* Tentang Sejedewe */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="card-soft rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-md relative"
        >
          <h2 className="text-2xl font-bold text-amber-400 mb-4 border-b border-emerald-900/50 pb-3 flex items-center gap-2.5">
            <Music2 className="w-6 h-6 text-emerald-400" /> Tentang Sejedewe
          </h2>
          <p className="text-zinc-200 leading-relaxed mb-4 text-sm md:text-base">
            <strong className="text-white">Sejedewe</strong> adalah grup musik bergenre <strong className="text-emerald-400">Reggae</strong> asal Tangerang, Indonesia. Dengan ritme santai bervariasi, lirik sosial yang relate dengan kehidupan sehari-hari dan warna suara khas yang hanya diperdengarkan lewat lagu-lagunya, Sejedewe selalu membawa pesan hangat persaudaraan yang kuat di setiap penampilan.
          </p>
          <p className="text-zinc-300 text-xs md:text-sm leading-relaxed">
            Diambil dari ungkapan Jawa <em className="text-amber-300">“Siji Dewe”</em>  yang memiliki harapan dan doa di dalamnya <em className="text-amber-300">“Pesona Beda Sendiri”</em>, selalu prioritas untuk menghibur dengan hati dan ketulusan yang abadi. Sejedewe tampil tetap konsisten menyebarkan energi positif di setiap penampilan dan aksi-aksi panggungnya.
          </p>
        </motion.div>

        {/* Official Music Video Banner */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="card-soft rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-md"
        >
          <div className="flex items-center gap-2 mb-2">
            <Video className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-amber-400">Official Music Video</h2>
          </div>
          <p className="text-zinc-300 text-sm mb-6">
            Klik di bawah untuk memutar video musik resmi Sejedewe langsung di web ini.
          </p>
          
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <button
              type="button"
              onClick={() => setSelectedVideo("https://www.youtube-nocookie.com/embed/spYSy34Pdsw?autoplay=1&rel=0")}
              className="group block w-full bg-[#080d09] border border-emerald-900/50 hover:border-red-500/60 rounded-2xl transition-all duration-300 p-6 md:p-8 text-center shadow-inner relative overflow-hidden"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-red-600/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 flex items-center justify-center mb-3 shadow-lg group-hover:shadow-red-600/50">
                <Play className="w-7 h-7 fill-current ml-1 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                Putar Video Langsung (Pop-up Player)
              </h3>
              <p className="text-xs text-amber-400 mt-1">
                ▶ Klik untuk tonton di sini tanpa pindah halaman
              </p>
            </button>
          </motion.div>
        </motion.div>

                {/* Spotify */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="card-soft rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-md"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <h2 className="text-2xl font-bold text-amber-400 flex items-center gap-2.5">
              <Headphones className="w-6 h-6 text-emerald-400" /> Dengarkan Sejedewe
            </h2>
            <a
              href={SPOTIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start sm:self-auto text-xs font-semibold text-black bg-emerald-400 hover:bg-emerald-300 px-4 py-2.5 rounded-xl transition-colors"
            >
              Buka di Spotify
            </a>
          </div>
          <iframe
            src={`https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}?utm_source=generator&theme=0`}
            title="Sejedewe di Spotify"
            width="100%"
            height="352"
            loading="lazy"
            allow="encrypted-media; clipboard-write; fullscreen; picture-in-picture"
            className="rounded-2xl border-0"
          />
        </motion.div>

        {/* Jadwal Manggung */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="card-soft rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-md"
        >
          <h2 className="text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2.5">
            <CalendarDays className="w-6 h-6 text-emerald-400" /> Jadwal Manggung
          </h2>
          {shows.length === 0 ? (
            <p className="text-zinc-300 text-sm">
              Jadwal terbaru belum diumumkan. Pantau{" "}
              <a href="https://www.instagram.com/sejedeweofficial" target="_blank" rel="noopener noreferrer" className="text-amber-300 underline underline-offset-4">
                Instagram Sejedewe
              </a>{" "}
              untuk info terkini.
            </p>
          ) : (
            <ul className="divide-y divide-white/10">
              {shows.map((show) => (
                <li key={`${show.date}-${show.name}`} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:gap-6">
                  <span className="sm:w-44 shrink-0 font-semibold text-amber-300">{show.date}</span>
                  <span className="flex-1">
                    <span className="block font-semibold text-white">{show.name}</span>
                    <span className="text-sm text-zinc-300">{show.place}</span>
                  </span>
                  {show.link && (
                    <a href={show.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300">
                      Info acara
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </motion.div>

        {/* Gallery Highlight Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="card-soft rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-md"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-emerald-900/50 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-amber-400 flex items-center gap-2.5">
                <Camera className="w-6 h-6 text-emerald-400" /> Aksi Panggung Sejedewe
              </h2>
              <p className="text-zinc-300 text-xs md:text-sm mt-1">
                Dokumentasi keseruan panggung Sejedewe (2025 - 2026).
              </p>
            </div>
            <Link
              href="/gallery"
              className="group text-xs font-semibold text-amber-300 hover:text-white transition-all bg-emerald-700/30 hover:bg-emerald-600 border border-emerald-500/40 px-4 py-2.5 rounded-xl flex items-center justify-center gap-1.5 self-start sm:self-auto shadow-md"
            >
              Jelajahi Galeri Interaktif
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Grid 6 Foto Highlight */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {highlightPhotos.map((photo, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.02 }}
                className="overflow-hidden rounded-2xl border border-emerald-900/50 bg-black/50 aspect-square group relative shadow-md cursor-pointer"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3.5">
                  <span className="text-xs text-amber-300 font-semibold">{photo.title}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Section Merchandise Interactive */}
        <section className="py-12 px-4 max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Event Exclusive
            </span>
            <h2 className="text-3xl font-bold text-amber-400 mb-2">Official Merchandise</h2>
            <p className="text-zinc-300 text-sm max-w-lg mx-auto mb-6">
              Koleksi resmi Sejedewe Band tersedia secara terbatas di{" "}
              <span className="text-emerald-400 font-semibold">booth merchandise resmi</span> pada setiap jadwal penampilan/konser kami.
            </p>

            {/* Tombol pemicu untuk menampilkan produk */}
            <button
              type="button"
              onClick={toggleMerch}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-950/80 hover:bg-emerald-800/80 border border-emerald-500/50 rounded-full text-white text-sm font-semibold transition-all shadow-lg hover:shadow-emerald-900/40 hover:scale-105 active:scale-95 group"
            >
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>{showMerch ? "Sembunyikan Katalog" : "Klik Disini untuk Melihat Merchandise"}</span>
              <ChevronDown
                className={`w-4 h-4 text-emerald-400 transition-transform duration-300 ${
                  showMerch ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </motion.div>

          {/* Area Gambar Merchandise dengan Animasi Roll Down */}
          <AnimatePresence>
            {showMerch && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden pt-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {merchItems.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ y: -5 }}
                      className="card-soft rounded-2xl overflow-hidden shadow-xl backdrop-blur-md flex flex-col justify-between group"
                    >
                      <div className="relative aspect-square overflow-hidden bg-black/40">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full text-[10px] text-zinc-300">
                          Available On-Stage
                        </div>
                      </div>
                      <div className="p-5 flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-emerald-400 font-bold mt-1 text-sm">{item.price}</p>
                        </div>
                        <div className="mt-4 py-2.5 px-3 text-center text-xs font-medium text-zinc-300 bg-emerald-950/40 border border-emerald-800/50 rounded-xl flex items-center justify-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          Dapatkan di Booth Konser
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Contact & Social Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Booking Contact */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="card-soft rounded-3xl p-6 flex flex-col shadow-xl backdrop-blur-md relative overflow-hidden"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                <Calendar className="w-3.5 h-3.5" />
                Contact & Booking
              </span>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">
                Business Inquiries & Endorse
              </h3>
              <p className="text-zinc-300 text-sm mb-6">
                Hubungi manajemen Sejedewe untuk event, show, dan kolaborasi bisnis:
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-auto"
            >
              <a
                href={`https://wa.me/6287870010096?text=${encodeURIComponent("Halo manajemen Sejedewe, saya ingin tanya booking.\n\nNama acara:\nTanggal:\nLokasi:\nPerkiraan budget:")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-2xl transition duration-300 text-sm shadow-lg shadow-emerald-950/50"
              >
                <Send className="w-4 h-4 animate-pulse" />
                WhatsApp: 0878-700-100-96
              </a>
            </motion.div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="card-soft rounded-3xl p-6 flex flex-col shadow-xl backdrop-blur-md"
          >
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                Social Media
              </span>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">
                Official Channels
              </h3>
              <p className="text-zinc-300 text-sm mb-6">
                Ikuti perkembangan lagu, jadwal, dan aktivitas Sejedewe di:
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/sejedeweofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0e1810] border border-emerald-900/50 rounded-full hover:border-pink-500 hover:text-pink-400 transition-all text-sm"
                  >
                    <svg className="w-5 h-5 fill-current text-pink-500" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://vm.tiktok.com/ZS9B3U2dNRBNN-qtv3F/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0e1810] border border-emerald-900/50 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all text-sm"
                  >
                    <svg className="w-5 h-5 fill-current text-cyan-400" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.81V7.63a6.34 6.34 0 1 0 6.34 6.34V9.3a8.28 8.28 0 0 0 4.77 1.52V7.37a4.84 4.84 0 0 1-1-.68z"/>
                    </svg>
                    <span>TikTok</span>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/share/18cY77na52/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0e1810] border border-emerald-900/50 rounded-full hover:border-blue-500 hover:text-blue-400 transition-all text-sm"
                  >
                    <svg className="w-5 h-5 fill-current text-blue-500" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                </div>

            <div className="space-y-3 mt-auto">
              <motion.a
                whileHover={{ x: 4 }}
                href="https://www.youtube.com/channel/UCV4e3owx3eCgFnQpBs5rNQw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-black/40 hover:bg-black/70 border border-emerald-900/40 transition duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <Video className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-sm text-zinc-100">YouTube Official</span>
                </div>
                <span className="text-xs text-amber-400 font-medium flex items-center gap-1">
                  Subscribe <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Pop-up Video Lightbox Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden border border-emerald-500/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              aria-label="Tutup video"
              className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-red-600 text-white p-2 rounded-full backdrop-blur-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              className="w-full h-full"
              src={selectedVideo}
              title="Video resmi Sejedewe"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <footer className="mt-20 text-center text-zinc-400 text-xs border-t border-emerald-950/80 pt-8 pb-4">
        <p>&copy; {new Date().getFullYear()} Sejedewe Reggae Band. All rights reserved.</p>
        <p className="mt-2"><Link href="/presskit" className="underline underline-offset-4 hover:text-amber-300">Press kit</Link></p>
      </footer>
    </main>
  );
}