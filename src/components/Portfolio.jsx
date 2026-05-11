"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { FadeUp, FadeLeft, StaggerContainer, staggerChildVariants, AnimatedLine } from "./MotionWrapper";

export default function Portfolio() {
  const projects = [
    {
      title: "Bendungan PLTA Garoga",
      location: "Sumatera Utara",
      technology: "LIDAR",
      description: "Pemetaan Topografi di Sungai Bilah untuk akses mobilitas pembangunan bendungan PLTA sepanjang 9 km.",
      image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Bendungan Seblat",
      location: "Bengkulu",
      technology: "LIDAR & Terestris",
      description: "Pembuatan Long & Cross Section serta Peta Topografi Bendungan di Seblat.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Jalan Nasional Langsa-Aceh",
      location: "Aceh",
      technology: "LIDAR UAV",
      description: "Pembuatan Long & Cross Section Jalan Nasional 43 km pasca bencana Banjir Aceh.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Sungai Irigasi Bengkulu Selatan",
      location: "Bengkulu Selatan",
      technology: "UAV Photogrammetry",
      description: "Dokumentasi Sungai Irigasi untuk perencanaan jalur aliran irigasi lahan pertanian wilayah setempat.",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
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
              <div className="relative h-64 overflow-hidden">
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
    </section>
  );
}
