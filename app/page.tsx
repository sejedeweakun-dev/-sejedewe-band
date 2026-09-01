export default function Home() {
  return (
    <main className="min-h-screen bg-reggae-aesthetic text-white font-sans antialiased pb-20">
      
      {/* Header Logo */}
      <header className="flex flex-col items-center pt-3 pb-2 border-b border-emerald-800/40 bg-[#0c1a10]/80 backdrop-blur-md sticky top-0 z-50">
        <img
            src="/logo1.png"
            alt="Sejedewe Logo"
            className="h-36 md:h-52 w-auto object-contain -mb-1 drop-shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-transform duration-300 hover:scale-105"
        />
        <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
          Indonesian Reggae Music
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 mt-10 space-y-8">
        
        {/* Banner Utama */}
        <section className="overflow-hidden rounded-3xl bg-gradient-to-b from-[#142217]/80 to-[#101612]/90 border border-emerald-800/30 p-6 md:p-8 shadow-2xl backdrop-blur-sm">
          <div className="w-full mb-6 rounded-2xl overflow-hidden border border-emerald-900/40 bg-black/50 shadow-inner">
            <img
              src="/personel.png"
              alt="Sejedewe Reggae Band"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-3">
            <span className="inline-block px-3.5 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/30 tracking-wider">
              OFFICIAL PROFILE
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-300 to-yellow-500">
              SEJEDEWE
            </h1>
            <p className="text-zinc-300 text-sm md:text-base max-w-2xl leading-relaxed">
              Pelopor musik santai & pesan sosial dari panggung Reggae Indonesia.
            </p>
          </div>
        </section>

        {/* Tentang Sejedewe */}
        <section className="bg-[#111713]/80 border border-emerald-900/30 rounded-3xl p-6 md:p-8 shadow-lg backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-amber-400 mb-4 border-b border-emerald-900/40 pb-3 flex items-center gap-2">
            <span className="text-emerald-500">❖</span> Tentang Sejedewe
          </h2>
          <p className="text-zinc-200 leading-relaxed mb-4 text-sm md:text-base">
            <strong className="text-white">Sejedewe</strong> adalah grup musik bergenre <strong className="text-emerald-400">Reggae</strong> asal Indonesia. Dengan ritme yang santai, lirik bernuansa sosial dan kehidupan sehari-hari, Sejedewe membawa semangat persaudaraan yang kuat.
          </p>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
            Diambil dari istilah bahasa Jawa <em className="text-amber-300">"Siji Dewe"</em> yang bermakna <em className="text-amber-300">"Tampil Beda Sendiri"</em>, Sejedewe tetap konsisten menyebarkan energi positif di setiap penampilannya.
          </p>
        </section>

        {/* Official Music Video Banner */}
        <section className="bg-[#111713]/80 border border-emerald-900/30 rounded-3xl p-6 md:p-8 shadow-lg backdrop-blur-sm">
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
            className="group block w-full bg-[#0b0e0c] border border-emerald-900/40 hover:border-red-500/50 rounded-2xl transition duration-300 p-8 text-center shadow-inner"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-red-600/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition duration-300 flex items-center justify-center mb-3 shadow-md">
              ▶
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition duration-300">
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
          <section className="bg-[#111713]/80 border border-amber-500/20 rounded-3xl p-6 flex flex-col shadow-lg backdrop-blur-sm">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Contact & Booking
              </span>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">
                Business Inquiries & Endorse
              </h3>
              <p className="text-zinc-400 text-sm mb-6">
                Hubungi manajemen Sejedewe untuk event, show, dan kolaborasi bisnis:
              </p>
            </div>
            <a
              href="https://wa.me/6287870010096"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl transition duration-300 text-sm shadow-md"
            >
              WhatsApp: 0878-700-100-96
            </a>
          </section>

          {/* Social Media */}
          <section className="bg-[#111713]/80 border border-emerald-900/30 rounded-3xl p-6 flex flex-col shadow-lg backdrop-blur-sm">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
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
              <a
                href="https://www.youtube.com/channel/UCV4e3owx3eCgFnQpBs5rNQw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 hover:bg-black/70 border border-emerald-900/30 transition duration-300"
              >
                <span className="font-semibold text-sm text-zinc-100">YouTube Official</span>
                <span className="text-xs text-amber-400 font-medium">Subscribe &rarr;</span>
              </a>

              <a
                href="https://www.instagram.com/sejedeweofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 hover:bg-black/70 border border-emerald-900/30 transition duration-300"
              >
                <span className="font-semibold text-sm text-zinc-100">Instagram Official</span>
                <span className="text-xs text-amber-400 font-medium">Follow &rarr;</span>
              </a>
            </div>
          </section>

        </div>
      </div>

      <footer className="mt-20 text-center text-zinc-500 text-xs border-t border-emerald-950/80 pt-8 pb-4">
        <p>&copy; {new Date().getFullYear()} Sejedewe Reggae Band. All rights reserved.</p>
      </footer>
    </main>
  );
}