"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
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
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Layanan Cepat</h4>
            <ul className="space-y-3">
              {['Tentang Kami', 'Keunggulan', 'Layanan', 'Portfolio'].map((item, idx) => (
                <li key={idx}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
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
  );
}
