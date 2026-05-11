"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { FadeLeft, FadeRight, FadeUp, AnimatedLine } from "./MotionWrapper";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <FadeLeft>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Mari Bekerjasama
              </h2>
            </FadeLeft>
            <AnimatedLine className="w-20 h-1 bg-slate-500 rounded mb-8" delay={0.3} />
            <FadeUp delay={0.2}>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Diskusikan kebutuhan proyek Anda dengan tim ahli kami. Kami siap memberikan solusi pemetaan yang presisi, efisien, dan andal untuk menunjang kesuksesan proyek Anda.
              </p>
            </FadeUp>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Kantor Pusat",
                  content: "Jl. Contoh Alamat No. 123, Kelurahan, Kecamatan, Kota, Provinsi 12345",
                },
                {
                  icon: Phone,
                  title: "Telepon / WhatsApp",
                  content: "+62 812-3456-7890",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "info@jentayugeosurvey.com",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.12,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="flex items-start group"
                >
                  <div className="bg-slate-50 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0 group-hover:bg-slate-50 transition-colors">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <FadeRight delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-200"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="nama@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">No. HP</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="0812..."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Pesan / Detail Proyek</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    placeholder="Deskripsikan kebutuhan survei Anda..."
                  ></textarea>
                </div>
                <motion.button 
                  type="button"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-slate-500 text-white font-bold py-3.5 px-4 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Kirim Pesan
                </motion.button>
              </form>
            </motion.div>
          </FadeRight>
        </div>

      </div>
    </section>
  );
}
