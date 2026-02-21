import {
  Pill,
  Syringe,
  Eye,
  Baby,
  Heart,
  Brain,
  Bone,
  Activity,
} from "lucide-react";

const categories = [
  {
    icon: Pill,
    title: "Ерөнхий эм",
    count: "120+",
    gradient: "from-teal-500 to-teal-600",
  },
  {
    icon: Heart,
    title: "Зүрх судасны эм",
    count: "45+",
    gradient: "from-rose-500 to-rose-600",
  },
  {
    icon: Brain,
    title: "Мэдрэлийн эм",
    count: "35+",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Eye,
    title: "Нүдний эм",
    count: "25+",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Baby,
    title: "Хүүхдийн эм",
    count: "60+",
    gradient: "from-amber-500 to-amber-600",
  },
  {
    icon: Syringe,
    title: "Тарианы бэлдмэл",
    count: "40+",
    gradient: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Bone,
    title: "Яс, үе мөчний эм",
    count: "30+",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Activity,
    title: "Эмнэлгийн хэрэгсэл",
    count: "80+",
    gradient: "from-indigo-500 to-indigo-600",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6">
            Бүтээгдэхүүн
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Бүтээгдэхүүний{" "}
            <span className="text-teal-600">ангилал</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Бид өргөн хүрээний эм, эмнэлгийн хэрэгслийг дэлхийн тэргүүлэгч
            үйлдвэрлэгчдээс нийлүүлж байна.
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group relative bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Hover gradient bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
              />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 group-hover:bg-white/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                  <cat.icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-white mb-1 transition-colors">
                  {cat.title}
                </h3>
                <span className="text-sm text-gray-400 group-hover:text-white/80 font-medium transition-colors">
                  {cat.count} бүтээгдэхүүн
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-8">
            Хамтрагч олон улсын компаниуд
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 items-center opacity-50">
            {[
              "Pfizer",
              "Roche",
              "Novartis",
              "Sanofi",
              "AstraZeneca",
              "Bayer",
            ].map((name) => (
              <span
                key={name}
                className="text-xl md:text-2xl font-bold text-gray-300 tracking-tight"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
