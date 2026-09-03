"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Play,
  Camera,
  Calendar,
  Sparkles,
  Music2,
  Send,
  Youtube,
  Radio,
  ExternalLink,
  ChevronRight,
  X,
} from "lucide-react";

// Variasi Animasi dengan Tipe TypeScript
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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

  return (
    <main className="min-h-screen bg-[#08120a] text-white font-sans antialiased pb-24 overflow-x-hidden selection:bg-amber-400 selection:text-black">
      
      {/* Header Logo */}
      <header className="flex flex-col items-center pt-6 pb-4 border-b border-emerald-900/40 bg-[#070e08]/90 backdrop-blur-md">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/logo1.png"
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
          className="overflow-hidden rounded-3xl bg-gradient-to-b from-[#132518]/90 via-[#0e1a11]/90 to-[#0a120c]/90 border border-emerald-800/40 p-6 md:p-8 shadow-2xl backdrop-blur-md relative"
        >
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="w-full mb-6 rounded-2xl overflow-hidden border border-emerald-900/50 bg-black/60 shadow-2xl relative group">
            <img
              src="/personel.png"
              alt="Sejedewe Reggae Band"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
          </div>

          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/30 tracking-wider">
              <Radio className="w-3.5 h-3.5 text-emerald-400 animate-ping" />
              OFFICIAL PROFILE
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-300 to-yellow-500">
              SEJEDEWE
            </h1>
            <p className="text-zinc-300 text-sm md:text-base max-w-2xl leading-relaxed">
              Pelopor musik santai & pesan sosial dari panggung Reggae Indonesia. Membawa semangat persaudaraan dan energi positif di setiap nada.
            </p>
          </div>
        </motion.div>

        {/* Tentang Sejedewe */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#0e1810]/80 border border-emerald-900/40 rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-md relative"
        >
          <h2 className="text-2xl font-bold text-amber-400 mb-4 border-b border-emerald-900/50 pb-3 flex items-center gap-2.5">
            <Music2 className="w-6 h-6 text-emerald-400" /> Tentang Sejedewe
          </h2>
          <p className="text-zinc-200 leading-relaxed mb-4 text-sm md:text-base">
            <strong className="text-white">Sejedewe</strong> adalah grup musik bergenre <strong className="text-emerald-400">Reggae</strong> asal Indonesia. Dengan ritme yang santai, lirik bernuansa sosial dan kehidupan sehari-hari, Sejedewe membawa semangat persaudaraan yang kuat.
          </p>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
            Diambil dari istilah bahasa Jawa <em className="text-amber-300">"Siji Dewe"</em> yang bermakna <em className="text-amber-300">"Tampil Beda Sendiri"</em>, Sejedewe tetap konsisten menyebarkan energi positif di setiap penampilannya.
          </p>
        </motion.div>

        {/* Official Music Video Banner */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#0e1810]/80 border border-emerald-900/40 rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-md"
        >
          <div className="flex items-center gap-2 mb-2">
            <Youtube className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-amber-400">Official Music Video</h2>
          </div>
          <p className="text-zinc-400 text-sm mb-6">
            Klik di bawah untuk memutar video musik resmi Sejedewe langsung di web ini.
          </p>
          
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <button
              onClick={() => setSelectedVideo("videoseries?list=UUV4e3owx3eCgFnQpBs5rNQw")}
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

        {/* Gallery Highlight Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#0e1810]/80 border border-emerald-900/40 rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-md"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-emerald-900/50 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-amber-400 flex items-center gap-2.5">
                <Camera className="w-6 h-6 text-emerald-400" /> Aksi Panggung Sejedewe
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm mt-1">
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
            {[
              { src: "/gallery/2026-hunterfestival01.jpg", title: "Hunter Festival 2026" },
              { src: "/gallery/2026-kuntana01.jpg", title: "Kuntana Stage 2026" },
              { src: "/gallery/2025-gebyartangerang01.jpg", title: "Gebyar Tangerang 2025" },
              { src: "/gallery/2025-djarumcoklat01.jpg", title: "Djarum Coklat Tour 2025" },
              { src: "/gallery/2025-libencoffe01.jpg", title: "Liben Coffee 2025" },
              { src: "/gallery/2025-soul01.jpg", title: "Soul Reggae Night 2025" },
            ].map((photo, index) => (
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

        {/* Contact & Social Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Booking Contact */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#0e1810]/80 border border-amber-500/30 rounded-3xl p-6 flex flex-col shadow-xl backdrop-blur-md relative overflow-hidden"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                <Calendar className="w-3.5 h-3.5" />
                Contact & Booking
              </span>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">
                Business Inquiries & Endorse
              </h3>
              <p className="text-zinc-400 text-sm mb-6">
                Hubungi manajemen Sejedewe untuk event, show, dan kolaborasi bisnis:
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-auto"
            >
              <a
                href="https://wa.me/6287870010096"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-2xl transition duration-300 text-sm shadow-lg shadow-emerald-950/50"
              >
                <Send className="w-4 h-4 animate-bounce" />
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
            className="bg-[#0e1810]/80 border border-emerald-900/40 rounded-3xl p-6 flex flex-col shadow-xl backdrop-blur-md"
          >
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                Social Media
              </span>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">
                Official Channels
              </h3>
              <p className="text-zinc-400 text-sm mb-6">
                Ikuti perkembangan lagu, jadwal, dan aktivitas Sejedewe di:
              </p>
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
                  <Youtube className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
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
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-red-600 text-white p-2 rounded-full backdrop-blur-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo}&autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <footer className="mt-20 text-center text-zinc-500 text-xs border-t border-emerald-950/80 pt-8 pb-4">
        <p>&copy; {new Date().getFullYear()} Sejedewe Reggae Band. All rights reserved.</p>
      </footer>
    </main>
  );
}