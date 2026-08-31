import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141714] text-white font-sans antialiased pb-16">
      
      {/* Header Logo */}
      <header className="flex flex-col items-center pt-6 pb-4 border-b border-zinc-800/80 bg-[#141714]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="relative w-56 h-20 md:w-72 md:h-24">
          <Image
            src="/logo1.png"
            alt="Sejedewe Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p className="text-xs uppercase tracking-widest text-amber-500 font-semibold mt-1">
          Indonesian Reggae Music
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 mt-8 space-y-8">
        
        {/* Banner Utama */}
        <section className="relative overflow-hidden rounded-2xl bg-[#1c201c] border border-zinc-800 p-6 md:p-8 shadow-xl">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] mb-6 rounded-xl overflow-hidden bg-black/40">
            <Image
              src="/personel.png"
              alt="Sejedewe Reggae Band"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-700/50">
              OFFICIAL PROFILE
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-amber-400">
              SEJEDEWE
            </h1>
            <p className="text-zinc-300 text-sm md:text-base max-w-2xl">
              Pelopor musik santai & pesan sosial dari panggung Reggae Indonesia.
            </p>
          </div>
        </section>

        {/* Tentang Sejedewe */}
        <section className="bg-[#1c201c] border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-md">
          <h2 className="text-2xl font-bold text-amber-400 mb-4 border-b border-zinc-800 pb-2">
            Tentang Sejedewe
          </h2>
          <p className="text-zinc-200 leading-relaxed mb-4 text-sm md:text-base">
            <strong className="text-white">Sejedewe</strong> adalah grup musik bergenre <strong className="text-emerald-400">Reggae</strong> asal Indonesia. Dengan ritme yang santai, lirik bernuansa sosial dan kehidupan sehari-hari, Sejedewe membawa semangat persaudaraan yang kuat.
          </p>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
            Diambil dari istilah bahasa Jawa <em>"Siji Dewe"</em> yang bermakna <em>"Tampil Beda Sendiri"</em>, Sejedewe tetap konsisten menyebarkan energi positif di setiap penampilannya.
          </p>
        </section>

        {/* Official Music Video */}
        <section className="bg-[#1c201c] border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-md">
          <h2 className="text-2xl font-bold text-amber-400 mb-2">
            Official Music Video
          </h2>
          <p className="text-zinc-400 text-sm mb-6">
            Tonton karya video musik resmi Sejedewe di channel YouTube Official.
          </p>
          
          <a
            href="https://www.youtube.com/channel/UCV4e3owx3eCgFnQpBs5rNQw"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center w-full aspect-[16/6] bg-[#141714] border border-zinc-800 hover:border-red-600/60 rounded-xl overflow-hidden transition p-6 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-red-600/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition flex items-center justify-center mb-3">
              ▶
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition">
              Saksikan Video Musik Sejedewe
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Klik untuk membuka YouTube Channel &rarr;
            </p>
          </a>
        </section>

        {/* Contact & Social Media */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Booking Contact */}
          <section className="bg-[#1c201c] border border-amber-500/30 rounded-2xl p-6 flex flex-col shadow-md">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                Contact & Booking
              </span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2">
                Business Inquiries & Endorse
              </h3>
              <p className="text-zinc-400 text-sm mb-5">
                Hubungi manajemen Sejedewe untuk event, show, dan kolaborasi bisnis:
              </p>
            </div>
            <a
              href="https://wa.me/6287870010096"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl transition text-sm"
            >
              WhatsApp: 0878-700-100-96
            </a>
          </section>

          {/* Social Media */}
          <section className="bg-[#1c201c] border border-zinc-800 rounded-2xl p-6 flex flex-col shadow-md">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                Social Media
              </span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2">
                Official Channels
              </h3>
              <p className="text-zinc-400 text-sm mb-5">
                Ikuti perkembangan lagu, jadwal, dan aktivitas Sejedewe di:
              </p>
            </div>

            <div className="space-y-3 mt-auto">
              <a
                href="https://www.youtube.com/channel/UCV4e3owx3eCgFnQpBs5rNQw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-800/40 hover:bg-zinc-800 border border-zinc-700/40 transition group"
              >
                <span className="font-semibold text-sm text-zinc-100">YouTube Official</span>
                <span className="text-xs text-amber-400 font-medium">Subscribe &rarr;</span>
              </a>

              <a
                href="https://www.instagram.com/sejedeweofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-800/40 hover:bg-zinc-800 border border-zinc-700/40 transition group"
              >
                <span className="font-semibold text-sm text-zinc-100">Instagram Official</span>
                <span className="text-xs text-amber-400 font-medium">Follow &rarr;</span>
              </a>
            </div>
          </section>

        </div>
      </div>

      <footer className="mt-16 text-center text-zinc-500 text-xs border-t border-zinc-800/80 pt-8 pb-4">
        <p>&copy; {new Date().getFullYear()} Sejedewe Reggae Band. All rights reserved.</p>
      </footer>
    </main>
  );
}