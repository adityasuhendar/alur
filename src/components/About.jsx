import { Target, TrendingUp, CheckCircle, Shield, Zap, Navigation, Users } from "lucide-react";

export default function About() {
  const advantages = [
    {
      icon: Shield,
      title: "Integritas",
      description: "Menjunjung tinggi kejujuran, etika, dan tanggung jawab dalam setiap proses kerja serta hubungan dengan klien.",
    },
    {
      icon: Zap,
      title: "Efisien",
      description: "Mengoptimalkan waktu, sumber daya, dan proses kerja untuk menghasilkan solusi tepat guna dengan kualitas terbaik.",
    },
    {
      icon: Navigation,
      title: "Responsif",
      description: "Bekerja cepat, tanggap, dan komunikatif dalam memahami serta menindaklanjuti kebutuhan klien.",
    },
    {
      icon: Users,
      title: "Adaptif",
      description: "Mampu menyesuaikan diri dengan perubahan teknologi, kondisi lapangan, dan kebutuhan klien secara fleksibel.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Tentang PT Jentayu Geosurvey
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Menjadi perusahaan berbasis spasial berskala nasional dengan komitmen pada presisi dan akurasi tinggi untuk mendukung perencanaan tata ruang, infrastruktur, dan pengembangan wilayah di Indonesia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Vision */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-slate-900 p-3 rounded-lg mr-4">
                <Target className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Visi Kami</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              Menjadi perusahaan berbasis spasial berskala nasional yang menyediakan hasil kerja presisi dan akurat guna mendorong perubahan yang bermanfaat bagi masyarakat serta selaras dengan kebutuhan klien.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-slate-900 p-3 rounded-lg mr-4">
                <TrendingUp className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Misi Kami</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Mengembangkan potensi maksimal dengan profesionalisme",
                "Layanan unggulan dengan teknologi terbaru",
                "Pola pikir inovatif dan kreatif",
                "Layanan berkualitas tinggi teruji",
                "Mendukung percepatan pembangunan nasional",
              ].map((item, index) => (
                <li key={index} className="flex items-start text-slate-600">
                  <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Values / Advantages */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center">Nilai-Nilai Inti Perusahaan</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 group hover:-translate-y-1 transition-all">
                <div className="bg-slate-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-50 transition-colors">
                  <adv.icon className="h-7 w-7 text-slate-700 group-hover:text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{adv.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
