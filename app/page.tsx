import Image from "next/image";

export default function Home() {
  return (
    // Background diubah dari hitam pekat menjadi warna smoky/zinc gelap (#121412)
    <main className="min-h-screen bg-[#121412] text-white font-sans antialiased pb-16">
      
      {/* --- HEADER DENGAN LOGO DIPERBESAR --- */}
      <header className="flex flex-col items-center pt-8 pb-6 border-b border-zinc-800/80 bg-[#121412]/95 backdrop-blur-md sticky top-0 z-50 shadow-md">
        {/* Ukuran container logo diperbesar (w-64 md:w-80 dan height h-24 md:h-28) */}
        <div className="relative w-64 h-24 md:w-80 md:h-28 mb-3 transition-all">
          <Image
            src="/logo1.png"
            alt="Sejedewe Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p className="text-xs uppercase tracking-widest text-amber-500 font-bold px-4 text-center">
          Indonesian Reggae Music
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 mt-8 space-y-8">
        
        {/* Main Hero Card */}
        <section className="relative overflow-hidden rounded-2xl bg-[#1A1D1A] border border-zinc-800 p-6 md:p-8 shadow-2xl">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] mb-6 rounded-xl overflow-hidden bg-zinc-900">
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
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-amber-400">
              SEJEDEWE
            </h1>
            <p className="text-zinc-300 text-sm md:text-base max-w-2xl">
              Pelopor musik santai & pesan sosial dari panggung Reggae Indonesia.
            </p>
          </div>
        </section>

        {/* Tentang Sejedewe */}
        <section className="bg-[#1A1D1A] border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-amber-400 mb-4 border-b border-zinc-800/80 pb-2">
            Tentang Sejedewe
          </h2>
          <p className="text-zinc-200 leading-relaxed mb-4">
            <strong className="text-white font-semibold">Sejedewe</strong> adalah grup musik bergenre <strong className="text-emerald-400 font-semibold">Reggae</strong> asal Indonesia. Dengan ritme yang santai, lirik bernuansa sosial dan kehidupan sehari-hari, Sejedewe membawa semangat persaudaraan yang kuat.
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Diambil dari istilah bahasa Jawa <em className="text-zinc-200">"Siji Dewe"</em> yang bermakna <em className="text-zinc-200 font-medium">"Tampil Beda Sendiri"</em>, Sejedewe tetap konsisten menyebarkan energi positif di setiap penampilannya.
          </p>
        </section>

        {/* Official Music Video Banner */}
        <section className="bg-[#1A1D1A] border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-amber-400 mb-2 flex items-center gap-2">
            <svg className="w-6 h-6 text-red-500 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Official Music Video
          </h2>
          <p className="text-zinc-400 text-sm mb-6">
            Tonton karya video musik resmi Sejedewe di channel YouTube Official.
          </p>
          
          <a
            href="https://www.youtube.com/channel/UCV4e3owx3eCgFnQpBs5rNQw"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center w-full aspect-[16/6] bg-[#121412] border border-zinc-800 hover:border-red-600/60 rounded-xl overflow-hidden transition duration-300 p-6 text-center shadow-inner"
          >
            <div className="p-4 rounded-full bg-red-600/20 text-red-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition duration-300 mb-3 shadow-md">
              <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-amber-400 transition">
              Saksikan Video Musik Sejedewe
            </h3>
            <p className="text-xs md:text-sm text-zinc-400 mt-1">
              Klik untuk membuka YouTube Channel &rarr;
            </p>
          </a>
        </section>

        {/* Business & Social Media */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Booking Contact */}
          <section className="bg-[#1A1D1A] border border-amber-500/30 rounded-2xl p-6 flex flex-col shadow-lg">
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
              className="mt-auto flex items-center justify-center gap-3 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl transition duration-200 shadow-md"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              WhatsApp: 0878-700-100-96
            </a>
          </section>

          {/* Social Media */}
          <section className="bg-[#1A1D1A] border border-zinc-800 rounded-2xl p-6 flex flex-col shadow-lg">
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
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-600/20 text-red-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <span className="font-semibold text-sm text-zinc-100">YouTube Official</span>
                </div>
                <span className="text-xs text-amber-400 font-medium group-hover:translate-x-1 transition-transform">Subscribe &rarr;</span>
              </a>

              <a
                href="https://www.instagram.com/sejedeweofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-pink-600/20 text-pink-500 group-hover:scale-110 group-hover:bg-pink-600 group-hover:text-white transition">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span className="font-semibold text-sm text-zinc-100">Instagram Official</span>
                </div>
                <span className="text-xs text-amber-400 font-medium group-hover:translate-x-1 transition-transform">Follow &rarr;</span>
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-zinc-500 text-xs border-t border-zinc-800/60 pt-8 pb-4">
        <p>&copy; {new Date().getFullYear()} Sejedewe Reggae Band. All rights reserved.</p>
      </footer>
    </main>
  );
}