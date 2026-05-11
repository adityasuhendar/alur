"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen h-screen h-[100dvh] flex items-center justify-center pt-16 lg:pt-20 overflow-hidden bg-slate-900"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.55, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.2 }, scale: { duration: 7, ease: "easeOut" } }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-luminosity"
            style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
          />
        </AnimatePresence>
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/70 via-slate-800/50 to-slate-900" />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 md:bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === currentImage ? "w-8 bg-blue-400" : "w-3 bg-white/30"
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-flex items-center space-x-2 bg-slate-800/40 border border-slate-700/50 px-4 py-2 rounded-md mb-8 backdrop-blur-md"
            >
              <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">Solusi Geospasial Nasional</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 lg:mb-6 leading-[1.1] tracking-tight"
            >
              Presisi dalam <br />
              <span className="text-blue-400">
                Setiap Dimensi
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-base lg:text-lg text-slate-300 mb-6 lg:mb-10 leading-relaxed max-w-xl"
            >
              PT Jentayu Geosurvey adalah mitra strategis Anda dalam pemetaan dan solusi geospasial terdepan. Kami memadukan teknologi canggih seperti UAV, LiDAR, dan GNSS untuk menghasilkan data yang akurat dan dapat diandalkan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollToSection("services")}
                className="group bg-blue-700 text-white px-8 py-3.5 rounded-md font-semibold hover:bg-blue-600 transition-all flex items-center justify-center shadow-lg shadow-blue-900/30 hover:shadow-xl active:scale-[0.98]"
              >
                Lihat Layanan Kami
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="group bg-transparent text-white border border-slate-500 px-8 py-3.5 rounded-md font-semibold hover:bg-slate-800 hover:border-slate-400 transition-all backdrop-blur-sm active:scale-[0.98]"
              >
                Jelajahi Portfolio
              </button>
            </motion.div>
          </div>

          {/* Right Column - Stats/Info Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-5 relative">
            {[
              {
                label: "Akurasi Data",
                value: "99.9%",
                desc: "Tingkat presisi tinggi pada setiap output pemetaan.",
              },
              {
                label: "Pengalaman",
                value: "10+ Thn",
                desc: "Dedikasi dalam industri survei dan pemetaan.",
              },
              {
                label: "Teknologi",
                value: "UAV & LiDAR",
                desc: "Menggunakan peralatan survei mutakhir standar global.",
              },
              {
                label: "map",
                isMapCard: true,
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.12,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className={`bg-slate-800/60 backdrop-blur-md border border-slate-700/50 p-6 rounded-xl transition-colors ${
                  card.isMapCard
                    ? "flex flex-col justify-center items-center text-center"
                    : ""
                }`}
              >
                {card.isMapCard ? (
                  <>
                    <MapPin className="h-8 w-8 text-blue-400 mb-3" />
                    <div className="text-white font-medium">Melayani Seluruh Indonesia</div>
                  </>
                ) : (
                  <>
                    <div className="text-blue-400 font-semibold text-sm mb-1 uppercase tracking-wider">{card.label}</div>
                    <div className="text-4xl font-bold text-white mb-2">{card.value}</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={() => scrollToSection("about")}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-slate-400 hover:text-blue-400 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest mb-2 font-mono">Scroll</span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
