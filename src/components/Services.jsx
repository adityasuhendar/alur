import { Satellite, Compass, FileCheck, Scan, Eye, Database } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Satellite,
      title: "Survei Foto Udara UAV",
      description: "Pemanfaatan survei foto udara untuk Perencanaan Wilayah dan Kota, serta Pemetaan area luas dengan presisi.",
      features: ["Resolusi Tinggi", "Pemetaan 3D", "Pemrosesan Cepat"],
    },
    {
      icon: Compass,
      title: "Survei Terestris",
      description: "Pengukuran langsung di lapangan menggunakan peralatan berpresisi tinggi seperti Total Station, GNSS Geodetik, dan Waterpass.",
      features: ["Survei GPS", "Total Station", "Presisi Tinggi"],
    },
    {
      icon: FileCheck,
      title: "Survei Kadaster",
      description: "Pengukuran batas kepemilikan tanah untuk membantu Badan Pertanahan Nasional dan keperluan legalitas tanah.",
      features: ["Survei Legal", "Penandaan Batas", "Sertifikasi"],
    },
    {
      icon: Scan,
      title: "3D Laser Scanning",
      description: "Metode akuisisi data spasial yang efisien menggunakan laser scanning untuk menghasilkan model digital 3D objek as-built.",
      features: ["Point Cloud", "Pemodelan 3D", "As-Built"],
    },
    {
      icon: Eye,
      title: "Penginderaan Jauh",
      description: "Akuisisi dan analisis data dari jarak jauh tanpa kontak fisik dengan objek, menggunakan citra satelit atau radar.",
      features: ["Citra Satelit", "Analisis Spektral", "Monitoring"],
    },
    {
      icon: Database,
      title: "Sistem Informasi Geografis",
      description: "Pengembangan sistem manajemen basis data untuk mengelola, menganalisis, dan memvisualisasikan informasi keruangan (spasial).",
      features: ["Analisis Spasial", "Manajemen Data", "WebGIS"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Layanan Geospasial
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Solusi pemetaan dan survei komprehensif yang disesuaikan dengan standar industri dan kebutuhan spesifik proyek Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-emerald-500/30 transition-all group relative overflow-hidden"
            >
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              
              <div className="bg-slate-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-50 transition-colors">
                <service.icon className="h-7 w-7 text-slate-700 group-hover:text-emerald-600" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
