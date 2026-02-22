const partners = [
  "Pfizer",
  "Roche",
  "Novartis",
  "Sanofi",
  "AstraZeneca",
  "Bayer",
  "GSK",
  "Merck",
  "Johnson & Johnson",
  "Abbott",
  "Takeda",
  "Boehringer",
  "Teva",
  "Servier",
  "Gedeon Richter",
  "KRKA",
];

export default function Products() {
  return (
    <section id="products" className="py-12 sm:py-20 bg-[#fbf9fa]">
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#243342] mb-3">
            Бизнес хамтрагчид
          </h2>
          <p className="text-sm sm:text-base text-[#455A6F] max-w-xl mx-auto">
            15+ улс орны тэргүүлэгч эмийн компаниудтай хамтран ажилладаг
          </p>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-5">
          {partners.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center h-16 sm:h-20 bg-white rounded-xl border border-gray-100 hover:border-[#00AC94]/30 hover:shadow-sm transition-all"
            >
              <span className="text-xs sm:text-sm font-semibold text-[#455A6F]/60 tracking-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
