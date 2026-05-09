import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Mari Bekerjasama
            </h2>
            <div className="w-20 h-1 bg-emerald-500 rounded mb-8"></div>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Diskusikan kebutuhan proyek Anda dengan tim ahli kami. Kami siap memberikan solusi pemetaan yang presisi, efisien, dan andal untuk menunjang kesuksesan proyek Anda.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-slate-50 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Kantor Pusat</h4>
                  <p className="text-slate-600">Jl. Contoh Alamat No. 123, Kelurahan, Kecamatan, Kota, Provinsi 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-slate-50 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Telepon / WhatsApp</h4>
                  <p className="text-slate-600">+62 812-3456-7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-slate-50 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">info@jentayugeosurvey.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="nama@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">No. HP</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="0812..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Pesan / Detail Proyek</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
                  placeholder="Deskripsikan kebutuhan survei Anda..."
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-lg flex items-center justify-center transition-colors"
              >
                <Send className="w-5 h-5 mr-2" />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
