"use client";

import { motion } from "framer-motion";
import { Satellite, Compass, FileCheck, Scan, Eye, Database } from "lucide-react";
import { FadeUp, StaggerContainer, staggerChildVariants, AnimatedLine } from "./MotionWrapper";

export default function Services() {
  const services = [
    {
      icon: Satellite,
      title: "Survei Foto Udara UAV",
      description: "Pemanfaatan survei foto udara untuk Perencanaan Wilayah dan Kota, serta Pemetaan area luas dengan presisi.",
      features: ["Resolusi Tinggi", "Pemetaan 3D", "Pemrosesan Cepat"],
      image: "https://images.unsplash.com/photo-1579820010410-c10411aaaa88?auto=format&fit=crop&q=80&w=400",
    },
    {
      icon: Scan,
      title: "3D Laser Scanning",
      description: "Metode akuisisi data spasial yang efisien menggunakan laser scanning untuk menghasilkan model digital 3D objek as-built.",
      features: ["Point Cloud", "Pemodelan 3D", "As-Built"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
    },
    {
      icon: Compass,
      title: "Survei Terestris",
      description: "Pengukuran langsung di lapangan menggunakan peralatan berpresisi tinggi seperti Total Station, GNSS Geodetik, dan Waterpass.",
      features: ["Survei GPS", "Total Station", "Presisi Tinggi"],
      image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=400",
    },
    {
      icon: Eye,
      title: "Penginderaan Jauh",
      description: "Akuisisi dan analisis data dari jarak jauh tanpa kontak fisik dengan objek, menggunakan citra satelit atau radar.",
      features: ["Citra Satelit", "Analisis Spektral", "Monitoring"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
    },
    {
      icon: FileCheck,
      title: "Survei Kadaster",
      description: "Pengukuran batas kepemilikan tanah untuk membantu Badan Pertanahan Nasional dan keperluan legalitas tanah.",
      features: ["Survei Legal", "Penandaan Batas", "Sertifikasi"],
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=400",
    },
    {
      icon: Database,
      title: "Sistem Informasi Geografis",
      description: "Pengembangan sistem manajemen basis data untuk mengelola, menganalisis, dan memvisualisasikan informasi keruangan (spasial).",
      features: ["Analisis Spasial", "Manajemen Data", "WebGIS"],
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400",
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
          <AnimatedLine className="w-20 h-1 bg-emerald-500 rounded mx-auto mb-6" />
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
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-emerald-500/30 transition-all group relative overflow-hidden flex flex-col sm:flex-row gap-6 items-start"
            >
              {/* Decorative left border */}
              <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-emerald-400 to-teal-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />

              <div className="flex-shrink-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-slate-50 shadow-sm group-hover:border-emerald-50 transition-colors relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
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
                      className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors"
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
    </section>
  );
}
