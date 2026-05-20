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
            /* First two cards span more height visually via extra padding */
            const isFeatured = index < 2;

            return (
              <motion.div
                key={index}
                variants={staggerChildVariants}
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                className={`group relative bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden
                  hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300
                  flex flex-col
                  ${isFeatured ? "p-8" : "p-7"}
                `}
              >
                {/* Big ghost number — decorative */}
                <span
                  className="absolute -top-4 -right-2 text-[7rem] font-black text-slate-100 select-none leading-none
                    group-hover:text-blue-50 transition-colors duration-300 pointer-events-none"
                  aria-hidden="true"
                >
                  {output.number}
                </span>

                {/* Image */}
                <div
                  className="relative h-32 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-2xl cursor-pointer"
                  onClick={() => setSelectedOutput(output)}
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={output.image}
                    alt={output.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
                </div>

                {/* Top row: icon + stat */}
                <div className="relative flex items-start justify-between mb-6">
                  <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-all">
                    <Icon className="h-5 w-5 text-slate-500 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-slate-900 tabular-nums leading-none">
                      {output.stat}
                    </div>
                    <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wide mt-0.5">
                      {output.statLabel}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex-1 flex flex-col">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-blue-500 mb-1">
                    {output.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{output.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{output.description}</p>

                  {/* Features */}
                  <div className="mt-5 pt-5 border-t border-slate-100 space-y-2">
                    {output.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-500">{feature}</span>
                      </div>
                    ))}
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
