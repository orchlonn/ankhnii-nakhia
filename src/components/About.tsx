import { Award, Users, Building2, HeartPulse } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Чанарын баталгаа",
    desc: "Олон улсын GMP стандартад нийцсэн бүтээгдэхүүн нийлүүлдэг",
  },
  {
    icon: Users,
    title: "Мэргэжлийн баг",
    desc: "Фармацевт, эмч нарын туршлагатай мэргэжилтнүүд",
  },
  {
    icon: Building2,
    title: "Орчин үеийн агуулах",
    desc: "Температур хяналттай, стандарт агуулахтай",
  },
  {
    icon: HeartPulse,
    title: "Эрүүл мэндийн түнш",
    desc: "200+ эмнэлэг, эмийн сантай хамтран ажилладаг",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image / Visual */}
          <div className="relative mb-4 lg:mb-0">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <div className="gradient-primary flex flex-col items-center justify-center px-6 sm:px-8 pt-10 sm:pt-14 pb-10 sm:pb-14">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 flex items-center justify-center mb-4 sm:mb-6">
                  <HeartPulse className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3 text-center">
                  2005 оноос
                </h3>
                <p className="text-teal-100/80 text-base sm:text-lg text-center mb-6 sm:mb-8">
                  Монголын эрүүл мэндийн салбарт итгэлтэй үйлчилж байна
                </p>
                {/* Badge below text, inside the card */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl px-6 py-3 sm:px-8 sm:py-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl font-bold text-teal-600">20+</span>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium leading-tight">
                      Жилийн<br />туршлага
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-4 sm:mb-6">
              Бидний тухай
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Монголын эрүүл мэндийн{" "}
              <span className="text-teal-600">салбарын найдвартай түнш</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
              Анхны Нахиа ХХК нь 2005 онд Улаанбаатар хотод байгуулагдсан бөгөөд
              дэлхийн тэргүүлэгч эмийн компаниудтай хамтран ажиллаж, олон улсын
              стандартад нийцсэн эм, эмнэлгийн хэрэгслийг Монгол Улсад
              импортлон нийлүүлж байна. Бид чанар, аюулгүй байдал, хүртээмжтэй
              байдлыг эрхэмлэдэг.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-teal-50/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center shrink-0 group-hover:bg-teal-200 transition-colors">
                    <item.icon className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
