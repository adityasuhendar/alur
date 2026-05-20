"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X } from "lucide-react";
import { FadeUp, FadeLeft, StaggerContainer, staggerChildVariants, AnimatedLine } from "./MotionWrapper";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setSelectedProject(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  const projects = [
    {
      title: "Bendungan PLTA Garoga",
      location: "Sumatera Utara",
      technology: "LIDAR",
      description: "Pemetaan Topografi di Sungai Bilah untuk akses mobilitas pembangunan bendungan PLTA sepanjang 9 km.",
      image: "/portfolio/garoga.jpg",
    },
    {
      title: "Bendungan Seblat",
      location: "Bengkulu",
      technology: "LIDAR & Terestris",
      description: "Pembuatan Long & Cross Section serta Peta Topografi Bendungan di Seblat.",
      image: "/portfolio/seblat.jpg",
    },
    {
      title: "Jalan Nasional Langsa-Aceh",
      location: "Aceh",
      technology: "LIDAR UAV",
      description: "Pembuatan Long & Cross Section Jalan Nasional 43 km pasca bencana Banjir Aceh.",
      image: "/portfolio/langsa-aceh.jpg",
    },
    {
      title: "Sungai Irigasi Bengkulu Selatan",
      location: "Bengkulu Selatan",
      technology: "UAV Photogrammetry",
      description: "Dokumentasi Sungai Irigasi untuk perencanaan jalur aliran irigasi lahan pertanian wilayah setempat.",
      image: "/portfolio/bengkulu.jpg",
    },
    {
      title: "Pemotretan Drone PUNA untuk PTSL",
      location: "Kab. Mukomuko, Kepahiang, Seluma, Rejang Lebong & Kaur — Bengkulu",
      technology: "Drone PUNA",
      description: "Pemotretan udara menggunakan Drone PUNA untuk mendukung program Pendaftaran Tanah Sistematis Lengkap (PTSL) di lima kabupaten wilayah Provinsi Bengkulu.",
      image: "/portfolio/ptsl.jpg",
    },
    {
      title: "Survei LIDAR Jalan Tambang",
      location: "Sulawesi Selatan",
      technology: "LIDAR",
      description: "Survei LIDAR untuk perencanaan dan pembukaan akses jalan tambang, menghasilkan data topografi presisi tinggi sebagai dasar desain trase jalan di wilayah Sulawesi Selatan.",
      image: "/portfolio/jalan-tambang.jpg",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <FadeLeft>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Pengalaman Proyek Kami
              </h2>
            </FadeLeft>
            <AnimatedLine className="w-20 h-1 bg-slate-500 rounded mb-6" />
            <FadeUp delay={0.2}>
              <p className="text-lg text-slate-600">
                Berikut adalah beberapa proyek besar yang telah kami selesaikan dengan tingkat kepuasan klien yang tinggi, mendukung infrastruktur nasional di berbagai daerah.
              </p>
            </FadeUp>
          </div>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.12}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={staggerChildVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-xl transition-all"
            >
              <div
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 text-blue-400 text-sm mb-2 font-medium">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-slate-700">
                  {project.technology}
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
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
                onClick={() => setSelectedProject(null)}
                className="absolute -top-12 right-0 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full p-1.5 transition-colors"
                aria-label="Tutup"
              >
                <X className="h-5 w-5" />
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
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
