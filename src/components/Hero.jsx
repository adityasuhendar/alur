"use client";

import { ArrowRight, ChevronDown, MapPin } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-900"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
        />
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />

        {/* Technical Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Content */}
          <div className="text-left">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-300">Solusi Geospasial Nasional</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Presisi dalam <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Setiap Dimensi
              </span>
            </h1>

            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl">
              PT Jentayu Geosurvey adalah mitra strategis Anda dalam pemetaan dan solusi geospasial terdepan. Kami memadukan teknologi canggih seperti UAV, LiDAR, dan GNSS untuk menghasilkan data yang akurat dan dapat diandalkan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="group bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 transition-all flex items-center justify-center"
              >
                Lihat Layanan Kami
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="group bg-slate-800/50 text-white border border-slate-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 hover:border-emerald-500 transition-all backdrop-blur-sm"
              >
                Jelajahi Portfolio
              </button>
            </div>
          </div>

          {/* Right Column - Stats/Info Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full" />

            <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-6 rounded-2xl transform translate-y-8">
              <div className="text-emerald-400 font-mono text-sm mb-2">Akurasi Data</div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <p className="text-slate-400 text-sm">Tingkat presisi tinggi pada setiap output pemetaan.</p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-6 rounded-2xl">
              <div className="text-emerald-400 font-mono text-sm mb-2">Pengalaman</div>
              <div className="text-4xl font-bold text-white mb-2">10+ Thn</div>
              <p className="text-slate-400 text-sm">Dedikasi dalam industri survei dan pemetaan.</p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-6 rounded-2xl transform translate-y-8">
              <div className="text-emerald-400 font-mono text-sm mb-2">Teknologi</div>
              <div className="text-4xl font-bold text-white mb-2">UAV & LiDAR</div>
              <p className="text-slate-400 text-sm">Menggunakan peralatan survei mutakhir standar global.</p>
            </div>

            <div className="bg-emerald-600/20 backdrop-blur-md border border-emerald-500/30 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
              <MapPin className="h-8 w-8 text-emerald-400 mb-3" />
              <div className="text-white font-medium">Melayani Seluruh Indonesia</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20" onClick={() => scrollToSection("about")}>
        <div className="flex flex-col items-center text-slate-400 hover:text-emerald-400 transition-colors">
          <span className="text-xs uppercase tracking-widest mb-2 font-mono">Scroll</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
}
