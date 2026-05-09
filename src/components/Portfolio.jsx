import { MapPin } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Bendungan PLTA Garoga",
      location: "Sumatera Utara",
      technology: "LIDAR",
      description: "Pemetaan Topografi di Sungai Bilah untuk akses mobilitas pembangunan bendungan PLTA sepanjang 9 km.",
      image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=800", // Dam / river infrastructure
    },
    {
      title: "Bendungan Seblat",
      location: "Bengkulu",
      technology: "LIDAR & Terestris",
      description: "Pembuatan Long & Cross Section serta Peta Topografi Bendungan di Seblat.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800", // Infrastructure/Construction
    },
    {
      title: "Jalan Nasional Langsa-Aceh",
      location: "Aceh",
      technology: "LIDAR UAV",
      description: "Pembuatan Long & Cross Section Jalan Nasional 43 km pasca bencana Banjir Aceh.",
      image: "https://images.unsplash.com/photo-1468818463283-f365319cd757?auto=format&fit=crop&q=80&w=800", // Highway / Road aerial
    },
    {
      title: "Sungai Irigasi Bengkulu Selatan",
      location: "Bengkulu Selatan",
      technology: "UAV Photogrammetry",
      description: "Dokumentasi Sungai Irigasi untuk perencanaan jalur aliran irigasi lahan pertanian wilayah setempat.",
      image: "https://images.unsplash.com/photo-1628186259063-4fb4fa5427eb?auto=format&fit=crop&q=80&w=800", // River / Irrigation
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Pengalaman Proyek Kami
            </h2>
            <div className="w-20 h-1 bg-emerald-500 rounded mb-6"></div>
            <p className="text-lg text-slate-600">
              Berikut adalah beberapa proyek besar yang telah kami selesaikan dengan tingkat kepuasan klien yang tinggi, mendukung infrastruktur nasional di berbagai daerah.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-lg transition-all">
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 text-emerald-400 text-sm mb-2 font-medium">
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
