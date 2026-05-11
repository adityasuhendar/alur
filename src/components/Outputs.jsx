"use client";

import { motion } from "framer-motion";
import { Map, Mountain, BarChart3, Box, FileText, CheckCircle } from "lucide-react";
import { FadeUp, ScaleIn, StaggerContainer, staggerChildVariants } from "./MotionWrapper";

export default function Outputs() {
  const outputs = [
    {
      icon: Map,
      title: "Orthophoto",
      subtitle: "Citra Udara Presisi",
      description: "Citra udara yang telah terkoreksi secara geometrik sehingga skala seragam dan setiap objek berada pada posisi koordinat sebenarnya.",
      features: [
        "Akurasi tinggi untuk pengukuran jarak dan luas",
        "Efektif untuk monitoring progres proyek",
      ],
      stat: "99.9%",
      statLabel: "Akurasi Resolusi",
    },
    {
      icon: Mountain,
      title: "Peta Kontur Digital",
      subtitle: "Dasar Perencanaan Lahan",
      description: "Penyajian informasi elevasi dan relief permukaan tanah secara presisi sebagai fondasi data untuk perencanaan konstruksi.",
      features: [
        "Visualisasi relief lahan yang jelas",
        "Mengurangi risiko kesalahan desain",
      ],
      stat: "0.5m",
      statLabel: "Interval Kontur",
    },
    {
      icon: BarChart3,
      title: "DTM & DSM",
      subtitle: "Model Elevasi Digital",
      description: "Representasi permukaan tanah (Terrain) dan objek di atasnya (Surface) dalam format digital 3D untuk analisis hidrologi dan topografi.",
      features: [
        "Model permukaan 3D",
        "Analisis aliran air",
      ],
      stat: "3D",
      statLabel: "Pemodelan",
    },
    {
      icon: Box,
      title: "Perhitungan Cut & Fill",
      subtitle: "Estimasi Volume Tanah",
      description: "Analisis perhitungan volume galian dan timbunan tanah secara detail berdasarkan perbandingan data topografi.",
      features: [
        "Mendukung perencanaan alat berat",
        "Optimalisasi RAB proyek",
      ],
      stat: "±5%",
      statLabel: "Toleransi Volume",
    },
    {
      icon: FileText,
      title: "Long & Cross Section",
      subtitle: "Profil Elevasi Desain",
      description: "Penyajian potongan memanjang dan melintang permukaan tanah untuk keperluan desain jalan, saluran, atau bendungan.",
      features: [
        "Estimasi pekerjaan tanah",
        "Desain kemiringan aman",
      ],
      stat: "1:100",
      statLabel: "Skala Standar",
    },
  ];

  return (
    <section id="outputs" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-blue-100 blur-[120px] opacity-60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeUp>
            <div className="inline-flex items-center space-x-2 bg-slate-50 border border-blue-100 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium text-blue-600">Deliverables</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Standar Output Berkualitas Tinggi
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Kami memastikan setiap data yang dihasilkan diolah menggunakan perangkat lunak mutakhir untuk memberikan tingkat akurasi sesuai toleransi SNI.
            </p>
          </FadeUp>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {outputs.map((output, index) => (
            <motion.div
              key={index}
              variants={staggerChildVariants}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`bg-white border border-slate-200 p-8 rounded-2xl flex flex-col h-full shadow-sm hover:shadow-lg hover:border-blue-200/60 transition-all ${index === outputs.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex justify-between items-start mb-6">
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.5 } }}
                  className="bg-slate-50 p-3 rounded-xl border border-blue-100"
                >
                  <output.icon className="h-6 w-6 text-blue-600" />
                </motion.div>
                {output.stat && (
                  <div className="text-right">
                    <div className="text-xl font-bold text-slate-900">{output.stat}</div>
                    <div className="text-xs text-slate-500">{output.statLabel}</div>
                  </div>
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{output.title}</h3>
                <p className="text-blue-600 font-medium text-sm mb-4">{output.subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {output.description}
                </p>
              </div>

              <div className="mt-auto border-t border-slate-100 pt-4 space-y-2">
                {output.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
