import { Trophy, Smile, Shield, Sparkles } from "lucide-react";

const values = [
  {
    icon: Trophy,
    title: "Чанар",
    desc: "Олон улсын GMP стандартад нийцсэн бүтээгдэхүүн нийлүүлж, чанарын баталгааг эрхэмлэдэг.",
  },
  {
    icon: Smile,
    title: "Найдвартай байдал",
    desc: "2000 оноос хойш 25 гаруй жил тасралтгүй ажиллаж, 6 салбар эмийн сантайгаар иргэдэд үйлчилж байна.",
  },
  {
    icon: Shield,
    title: "Хариуцлага",
    desc: "Эрүүл мэндийн салбарын стандартыг чанд мөрдөж, хариуцлагатай үйл ажиллагаа явуулдаг.",
  },
  {
    icon: Sparkles,
    title: "Инноваци",
    desc: "Орчин үеийн технологи, шинэлэг шийдлүүдийг нэвтрүүлж, үйлчилгээгээ тасралтгүй сайжруулдаг.",
  },
];

export default function Values() {
  return (
    <section className="py-12 sm:py-20 bg-[#fbf9fa]">
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#243342] mb-3">
            Бидний үнэт зүйлс
          </h2>
          <p className="text-sm sm:text-base text-[#455A6F] max-w-xl mx-auto">
            Бид дараах үнэт зүйлсийг үйл ажиллагааныхаа гол чиглэл болгон
            баримталдаг.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {values.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 card-hover group text-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#00AC94]/10 group-hover:bg-[#00AC94] flex items-center justify-center mx-auto mb-4 sm:mb-5 transition-colors duration-300">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#00AC94] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#243342] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#455A6F] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
