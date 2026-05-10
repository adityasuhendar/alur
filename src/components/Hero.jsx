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
      className="relative h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-slate-900"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center bg-no-repeat opacity-60 mix-blend-luminosity"
        />
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/70 via-slate-800/50 to-slate-900" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Content */}
          <div className="text-left">
            <div className="inline-flex items-center space-x-2 bg-slate-800/40 border border-slate-700/50 px-4 py-2 rounded-md mb-8 backdrop-blur-md">
              <span className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">Solusi Geospasial Nasional</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              Presisi dalam <br />
              <span className="text-emerald-400">
                Setiap Dimensi
              </span>
            </h1>

            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl">
              PT Jentayu Geosurvey adalah mitra strategis Anda dalam pemetaan dan solusi geospasial terdepan. Kami memadukan teknologi canggih seperti UAV, LiDAR, dan GNSS untuk menghasilkan data yang akurat dan dapat diandalkan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="group bg-emerald-600 text-white px-8 py-3.5 rounded-md font-semibold hover:bg-emerald-500 transition-all flex items-center justify-center shadow-lg shadow-emerald-900/20"
              >
                Lihat Layanan Kami
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="group bg-transparent text-white border border-slate-500 px-8 py-3.5 rounded-md font-semibold hover:bg-slate-800 hover:border-slate-400 transition-all backdrop-blur-sm"
              >
                Jelajahi Portfolio
              </button>
            </div>
          </div>

          {/* Right Column - Stats/Info Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-5 relative">
            <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 p-6 rounded-xl hover:bg-slate-800/80 transition-colors">
              <div className="text-emerald-400 font-semibold text-sm mb-1 uppercase tracking-wider">Akurasi Data</div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <p className="text-slate-400 text-sm leading-relaxed">Tingkat presisi tinggi pada setiap output pemetaan.</p>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 p-6 rounded-xl hover:bg-slate-800/80 transition-colors">
              <div className="text-emerald-400 font-semibold text-sm mb-1 uppercase tracking-wider">Pengalaman</div>
              <div className="text-4xl font-bold text-white mb-2">10+ Thn</div>
              <p className="text-slate-400 text-sm leading-relaxed">Dedikasi dalam industri survei dan pemetaan.</p>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 p-6 rounded-xl hover:bg-slate-800/80 transition-colors">
              <div className="text-emerald-400 font-semibold text-sm mb-1 uppercase tracking-wider">Teknologi</div>
              <div className="text-4xl font-bold text-white mb-2">UAV & LiDAR</div>
              <p className="text-slate-400 text-sm leading-relaxed">Menggunakan peralatan survei mutakhir standar global.</p>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 p-6 rounded-xl flex flex-col justify-center items-center text-center hover:bg-slate-800/80 transition-colors">
              <MapPin className="h-8 w-8 text-emerald-400 mb-3" />
              <div className="text-white font-medium">Melayani Seluruh Indonesia</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20" onClick={() => scrollToSection("about")}>
        <div className="flex flex-col items-center text-slate-400 hover:text-emerald-400 transition-colors">
          <span className="text-xs uppercase tracking-widest mb-2 font-mono">Scroll</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
}
