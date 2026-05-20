"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Map, Mountain, BarChart3, Box, FileText, CheckCircle2, X } from "lucide-react";
import { FadeUp, StaggerContainer, staggerChildVariants } from "./MotionWrapper";

const outputs = [
  {
    icon: Map,
    number: "01",
    title: "Orthophoto",
    subtitle: "Citra Udara Presisi",
    description:
      "Citra udara yang telah terkoreksi secara geometrik sehingga skala seragam dan setiap objek berada pada posisi koordinat sebenarnya.",
    features: ["Akurasi tinggi untuk pengukuran jarak & luas", "Efektif untuk monitoring progres proyek"],
    stat: "99.9%",
    statLabel: "Akurasi",
    image: "/outputs/orthophoto.jpg",
  },
  {
    icon: Mountain,
    number: "02",
    title: "Peta Kontur Digital",
    subtitle: "Dasar Perencanaan Lahan",
    description:
      "Penyajian informasi elevasi dan relief permukaan tanah secara presisi sebagai fondasi data untuk perencanaan konstruksi.",
    features: ["Visualisasi relief lahan yang jelas", "Mengurangi risiko kesalahan desain"],
    stat: "0.5m",
    statLabel: "Interval Kontur",
    image: "/outputs/kontur.jpg",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "DTM & DSM",
    subtitle: "Model Elevasi Digital",
    description:
      "Representasi permukaan tanah dan objek di atasnya dalam format digital 3D untuk analisis hidrologi dan topografi.",
    features: ["Model permukaan 3D yang detail", "Analisis aliran air & drainase"],
    stat: "3D",
    statLabel: "Pemodelan",
    image: "/outputs/dtm-dsm.jpg",
  },
  {
    icon: Box,
    number: "04",
    title: "Cut & Fill",
    subtitle: "Estimasi Volume Tanah",
    description:
      "Analisis perhitungan volume galian dan timbunan tanah secara detail berdasarkan perbandingan data topografi.",
    features: ["Mendukung perencanaan alat berat", "Optimalisasi RAB proyek"],
    stat: "±5%",
    statLabel: "Toleransi Volume",
    image: "/outputs/cut-fill.jpg",
  },
  {
    icon: FileText,
    number: "05",
    title: "Long & Cross Section",
    subtitle: "Profil Elevasi Desain",
    description:
      "Potongan memanjang dan melintang permukaan tanah untuk keperluan desain jalan, saluran, atau bendungan.",
    features: ["Estimasi pekerjaan tanah presisi", "Desain kemiringan aman"],
    stat: "1:100",
    statLabel: "Skala Standar",
    image: "/outputs/section.jpg",
  },
];

export default function Outputs() {
  const [selectedOutput, setSelectedOutput] = useState(null);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setSelectedOutput(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  return (
    <section id="outputs" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle top-right blob */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-blue-100/50 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <FadeUp>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-3 block">
              Deliverables
            </span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Output standar SNI,<br />
              <span className="text-slate-400 font-normal">siap pakai langsung.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p className="text-slate-500 text-base leading-relaxed">
              Setiap data diolah dengan perangkat lunak mutakhir dan melewati quality control ketat sebelum diserahkan ke klien.
            </p>
          </FadeUp>
        </div>

        {/* Bento grid — 2 featured + 3 smaller */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr"
          staggerDelay={0.07}
        >
          {outputs.map((output, index) => {
            const Icon = output.icon;

            return (
              <motion.div
                key={index}
                variants={staggerChildVariants}
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all"
                onClick={() => setSelectedOutput(output)}
              >
                {/* Background Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${output.image})` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6">
                  {/* Top row: icon + stat */}
                  <div className="flex items-start justify-between">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-2.5 rounded-xl">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white tabular-nums leading-none">
                        {output.stat}
                      </div>
                      <div className="text-[10px] font-medium text-white/70 uppercase tracking-wide mt-0.5">
                        {output.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-blue-300 mb-1">
                      {output.subtitle}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-2">{output.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2">
                      {output.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-1.5">
                      {output.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-300 flex-shrink-0" />
                          <span className="text-xs text-white/90">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedOutput && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedOutput(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedOutput(null)}
                className="absolute -top-12 right-0 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full p-1.5 transition-colors"
                aria-label="Tutup"
              >
                <X className="h-5 w-5" />
              </button>

              <img
                src={selectedOutput.image}
                alt={selectedOutput.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>

            <p className="absolute bottom-6 text-white/40 text-xs">Klik di luar untuk menutup · ESC</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
