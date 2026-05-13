"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showDoc, setShowDoc] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setShowDoc(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid md:grid-cols-4 gap-12 mb-12"
          >
            
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img src="/logo.png" alt="PT Jentayu Geosurvey" className="h-10 w-10 object-contain" />
                <div>
                  <span className="font-bold text-lg block text-white tracking-wide" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                    PT JENTAYU
                  </span>
                  <span className="text-[10px] tracking-[0.25em] block text-slate-400">
                    GEO SURVEY
                  </span>
                </div>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
                Perusahaan penyedia layanan survei terestris, pemetaan udara berbasis UAV, LiDAR, dan solusi geospasial berskala nasional.
              </p>

              {/* Legal Data */}
              <div className="border-t border-slate-800 pt-5">
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-slate-500 mb-3">Data Legalitas</p>
                <div className="flex items-start gap-4">
                  {/* Document thumbnail — opens modal */}
                  <button
                    onClick={() => setShowDoc(true)}
                    title="Lihat Dokumen NIB"
                    className="flex-shrink-0 w-16 h-20 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition-colors group relative cursor-zoom-in"
                  >
                    <img
                      src="/surat.png"
                      alt="Dokumen NIB PT Jentayu Geo Survey"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/10 transition-colors flex items-end justify-center pb-1">
                      <span className="text-[8px] font-bold text-white/80">NIB</span>
                    </div>
                  </button>

                  {/* Legal numbers */}
                  <div className="space-y-2 flex-1">
                    {[
                      { label: "NIB", value: "1112250040586" },
                      { label: "NPWP", value: "1000 0000 0722 4344" },
                      { label: "Akta", value: "AHU-0104429.AH.01.01.TAHUN 2025" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex items-baseline gap-2">
                        <span className="text-[10px] font-bold text-slate-500 w-10 flex-shrink-0">{label}</span>
                        <span className="text-[11px] text-slate-400 font-mono leading-relaxed">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Layanan Cepat</h4>
              <ul className="space-y-3">
                {['Tentang Kami', 'Keunggulan', 'Layanan', 'Portfolio'].map((item, idx) => (
                  <li key={idx}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Layanan Kami</h4>
              <ul className="space-y-3">
                {['Survei UAV', 'Survei Terestris', 'Survei Kadaster', '3D Laser Scanning'].map((item, idx) => (
                  <li key={idx}>
                    <span className="text-slate-400 text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} PT Jentayu Geosurvey. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Terms of Service</a>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {showDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowDoc(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowDoc(false)}
                className="absolute top-3 right-3 z-10 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full p-1.5 transition-colors"
                aria-label="Tutup"
              >
                <X className="h-4 w-4" />
              </button>

              <img
                src="/surat.png"
                alt="Dokumen NIB PT Jentayu Geo Survey"
                className="w-full h-auto"
              />
            </motion.div>

            <p className="absolute bottom-6 text-white/40 text-xs">Klik di luar untuk menutup · ESC</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
