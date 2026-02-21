const stats = [
  { value: "20+", label: "Жилийн туршлага", suffix: "" },
  { value: "500+", label: "Бүтээгдэхүүн", suffix: "" },
  { value: "200+", label: "Хамтрагч эмнэлэг", suffix: "" },
  { value: "15+", label: "Импортын улс", suffix: "" },
];

export default function Stats() {
  return (
    <section className="py-14 sm:py-20 gradient-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-teal-200/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
