const stats = [
  {
    value: "25+",
    label: "Жилийн туршлага",
    desc: "2000 оноос хойш эрүүл мэндийн салбарт тасралтгүй үйлчилж байна",
  },
  {
    value: "6",
    label: "Салбар эмийн сан",
    desc: "Улаанбаатар хотод 6 салбар эмийн сантайгаар иргэдэд үйлчилж байна",
  },
  {
    value: "30+",
    label: "Мэргэжилтэн, ажилтан",
    desc: "Эм зүйч, жор баригч, мэргэжлийн боловсон хүчнээр хангагдсан",
  },
];

export default function Stats() {
  return (
    <section className="py-12 sm:py-16 bg-[#fbf9fa]">
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#243342] mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-semibold text-[#243342] mb-1">
                {stat.label}
              </div>
              <p className="text-xs sm:text-sm text-[#455A6F] leading-relaxed max-w-xs mx-auto">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
