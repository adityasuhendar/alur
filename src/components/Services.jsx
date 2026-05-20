"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Satellite, Compass, FileCheck, Scan, Eye, Database, X } from "lucide-react";
import { FadeUp, StaggerContainer, staggerChildVariants, AnimatedLine } from "./MotionWrapper";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setSelectedService(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  const services = [
    {
      icon: Satellite,
      title: "Survei Foto Udara UAV",
      description: "Pemanfaatan survei foto udara untuk Perencanaan Wilayah dan Kota, serta Pemetaan area luas dengan presisi.",
      features: ["Resolusi Tinggi", "Pemetaan 3D", "Pemrosesan Cepat"],
      image: "/layanan/uav.jpg",
    },
    {
      icon: Scan,
      title: "3D Laser Scanning",
      description: "Metode akuisisi data spasial yang efisien menggunakan laser scanning untuk menghasilkan model digital 3D objek as-built.",
      features: ["Point Cloud", "Pemodelan 3D", "As-Built"],
      image: "/layanan/laser-scanning.jpg",
    },
    {
      icon: Compass,
      title: "Survei Terestris",
      description: "Pengukuran langsung di lapangan menggunakan peralatan berpresisi tinggi seperti Total Station, GNSS Geodetik, dan Waterpass.",
      features: ["Survei GPS", "Total Station", "Presisi Tinggi"],
      image: "/layanan/terestris.jpg",
    },
    {
      icon: Eye,
      title: "Penginderaan Jauh",
      description: "Akuisisi dan analisis data dari jarak jauh tanpa kontak fisik dengan objek, menggunakan citra satelit atau radar.",
      features: ["Citra Satelit", "Analisis Spektral", "Monitoring"],
      image: "/layanan/penginderaan-jauh.jpg",
    },
    {
      icon: FileCheck,
      title: "Survei Kadaster",
      description: "Pengukuran batas kepemilikan tanah untuk membantu Badan Pertanahan Nasional dan keperluan legalitas tanah.",
      features: ["Survei Legal", "Penandaan Batas", "Sertifikasi"],
      image: "/layanan/kadaster.jpg",
    },
    {
      icon: Database,
      title: "Sistem Informasi Geografis",
      description: "Pengembangan sistem manajemen basis data untuk mengelola, menganalisis, dan memvisualisasikan informasi keruangan (spasial).",
      features: ["Analisis Spasial", "Manajemen Data", "WebGIS"],
      image: "/layanan/gis.jpg",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Layanan Service
            </h2>
          </FadeUp>
          <AnimatedLine className="w-20 h-1 bg-slate-500 rounded mx-auto mb-6" />
          <FadeUp delay={0.15}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Solusi pemetaan dan survei komprehensif yang disesuaikan dengan standar industri dan kebutuhan spesifik proyek Anda.
            </p>
          </FadeUp>
        </div>

        <StaggerContainer className="grid lg:grid-cols-2 gap-8" staggerDelay={0.1}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={staggerChildVariants}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-blue-500/30 transition-all group relative overflow-hidden flex flex-col sm:flex-row gap-6 items-start"
            >
              {/* Decorative left border */}
              <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-blue-400 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />

              <div className="flex-shrink-0">
                <div
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-slate-50 shadow-sm group-hover:border-blue-50 transition-colors relative cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors rounded-full" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md group-hover:bg-slate-50 group-hover:text-blue-700 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
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
                onClick={() => setSelectedService(null)}
                className="absolute -top-12 right-0 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full p-1.5 transition-colors"
                aria-label="Tutup"
              >
                <X className="h-5 w-5" />
              </button>

              <img
                src={selectedService.image}
                alt={selectedService.title}
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
