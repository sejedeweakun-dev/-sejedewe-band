import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F100F] text-white flex flex-col items-center p-4 md:p-8">
      
      {/* 1. LOGO DI ATAS */}
      <header className="w-full max-w-4xl flex flex-col items-center my-6">
        <div className="relative w-64 h-24 md:w-80 md:h-32 mb-2">
          <Image
            src="/logo2.png"
            alt="Sejedewe Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p className="text-[#F4F3AA] tracking-widest text-xs md:text-sm uppercase font-semibold">
          Indonesian Reggae Music
        </p>
      </header>

      {/* 2. FOTO PERSONEL DI ATAS PROFIL */}
      <section className="w-full max-w-4xl mb-10">
        <div className="relative w-full h-[280px] sm:h-[400px] md:h-[480px] rounded-2xl overflow-hidden border-2 border-[#1E5A2A]/60 shadow-2xl">
          <Image
            src="/personel.png"
            alt="Sejedewe Personel"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F100F] via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="bg-[#1E5A2A] text-[#F4F3AA] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              Official Profile
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-[#F4F3AA] mt-2 shadow-sm">
              SEJEDEWE
            </h1>
          </div>
        </div>
      </section>

      {/* 3. PROFIL BAND */}
      <section className="w-full max-w-4xl bg-[#161B17] border border-[#1E5A2A]/30 rounded-2xl p-6 md:p-8 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-[#F4F3AA] mb-4 border-b border-[#1E5A2A]/40 pb-2">
          Tentang Sejedewe
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-[#F4F3AA]">Sejedewe</strong> adalah grup musik bergenre <strong className="text-[#F4F3AA]">Reggae</strong> asal Indonesia yang dikenal dengan alunan nada santai, lirik bernuansa sosial dan kehidupan sehari-hari, serta semangat persaudaraan yang kuat.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Diambil dari istilah bahasa Jawa (*Siji Dewe*) yang bermakna "berbeda sendiri", Sejedewe selalu konsisten menghadirkan getaran musik reggae khas yang santai namun berenergi di setiap penampilannya.
        </p>
      </section>

      {/* 4. DISKOGRAFI / HITS */}
      <section className="w-full max-w-4xl bg-[#161B17] border border-[#1E5A2A]/30 rounded-2xl p-6 md:p-8 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-[#F4F3AA] mb-4 border-b border-[#1E5A2A]/40 pb-2">
          Lagu Populer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#0F100F]/60 border border-[#1E5A2A]/20">
            <h3 className="text-lg font-bold text-white">Cinta Di Pantai Bali</h3>
            <p className="text-xs text-[#F4F3AA] mt-1">Reggae Hits</p>
          </div>
          <div className="p-4 rounded-xl bg-[#0F100F]/60 border border-[#1E5A2A]/20">
            <h3 className="text-lg font-bold text-white">Wedang Jahe</h3>
            <p className="text-xs text-[#F4F3AA] mt-1">Popular Single</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-4xl text-center py-6 text-xs text-gray-500 border-t border-[#1E5A2A]/20">
        <p>© {new Date().getFullYear()} Sejedewe Reggae Band. All rights reserved.</p>
      </footer>

    </main>
  );
}