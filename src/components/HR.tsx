import {
  Users,
  Target,
  Scale,
  TrendingUp,
  GraduationCap,
  Heart,
  Megaphone,
  FileText,
  Search,
  UserCheck,
  MessageSquare,
  Handshake,
  ArrowRight,
  Briefcase,
  Award,
  Smile,
  DollarSign,
  Building2,
  ChevronRight,
} from "lucide-react";

const policies = [
  {
    icon: Target,
    title: "Тохирсон ажлын байр",
    desc: "Ажилтан бүрийн ур чадвар, сонирхол, авьяас билэгт тохирсон ажлын байранд ажиллуулж, бүтээмжтэй, өндөр үр дүнтэй ажиллах нөхцөлийг бүрдүүлнэ.",
  },
  {
    icon: Scale,
    title: "Шударга үнэлгээ",
    desc: "Хариуцлагыг тодорхой хуваарилж, объектив, шударга үнэлгээний тогтолцоог нэвтрүүлж ажилладаг.",
  },
  {
    icon: TrendingUp,
    title: "Үр дүнд суурилсан урамшуулал",
    desc: "Хөдөлмөрийн үнэ цэнийг бодитоор үнэлж, урт хугацааны тогтвортой, идэвхтэй ажиллах нөхцөлийг бий болгоно.",
  },
  {
    icon: GraduationCap,
    title: "Тасралтгүй хөгжил",
    desc: "Мэргэжлийн болон ерөнхий ур чадварыг системтэйгээр дээшлүүлэх сургалтын хөтөлбөрүүдийг хэрэгжүүлнэ.",
  },
  {
    icon: Heart,
    title: "Эерэг багийн соёл",
    desc: "Хүндлэл, ойлголцол, бүтээлч уур амьсгалыг эрхэмлэсэн байгууллагын соёлыг бий болгоно.",
  },
];

const whyUs = [
  { icon: Award, text: "Үр дүнд суурилсан урамшууллын тогтолцоо" },
  { icon: Briefcase, text: "Салбар хоорондын шилжих карьер боломж" },
  { icon: Users, text: "Бүх ажилтнуудад тэгш дэвших боломж" },
  { icon: DollarSign, text: "Өрсөлдөхүйц цалин, нэмэгдэл" },
  { icon: Building2, text: "Таатай ажлын орчин" },
  { icon: Smile, text: "Ур чадвартай, мэргэжлийн, нөхөрсөг баг" },
];

const steps = [
  {
    icon: Megaphone,
    step: "01",
    title: "Ажлын зар",
    desc: "Мэргэжлийн чадварлаг боловсон хүчин хайж ажлын байрны зар нийтлэнэ.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Анкет хүлээн авах",
    desc: "Нэр дэвшигчдийн анкетыг нууцлалтайгаар хүлээн авна.",
  },
  {
    icon: Search,
    step: "03",
    title: "Анкет шалгаруулалт",
    desc: "Тавигдсан шаардлагад нийцэж буй эсэхийг шалгана.",
  },
  {
    icon: UserCheck,
    step: "04",
    title: "Анхан шатны ярилцлага",
    desc: "Ур чадвар, тохирлыг үнэлэх ярилцлага хийнэ.",
  },
  {
    icon: MessageSquare,
    step: "05",
    title: "Давтан ярилцлага",
    desc: "Удирдлагатай уулзаж, ажлын байрны нарийвчилсан үнэлгээ хийнэ.",
  },
  {
    icon: Handshake,
    step: "06",
    title: "Ажилд авах",
    desc: "Гэрээ байгуулж, багийн гишүүн болох үйл явцыг эхлүүлнэ.",
  },
];

export default function HR() {
  return (
    <section id="hr" className="bg-[#fbf9fa]">
      {/* Hero */}
      <div className="relative overflow-hidden pt-[72px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blur-circle w-[500px] h-[500px] bg-[#AAE3DB]/25 -top-40 -right-20 absolute" />
          <div className="blur-circle w-[350px] h-[350px] bg-[#00AC94]/10 bottom-0 -left-32 absolute" />
        </div>
        <div className="relative max-w-[1088px] mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-28">
          <span className="inline-block text-xs sm:text-sm font-semibold text-[#00AC94] uppercase tracking-wider mb-3">
            Хүний нөөц
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-[#243342] leading-tight mb-4">
            Баг, багийн{" "}
            <span className="text-[#00AC94]">ажиллагаа</span>
          </h1>
          <p className="text-sm sm:text-base text-[#455A6F] max-w-xl leading-relaxed mb-7">
            Бид ажилтан нэг бүрийн эерэг ажлын орчин, мэргэжлийн өсөлт,
            тогтвортой хөгжлийг хамтдаа бий болгоно.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#00AC94] hover:bg-[#009882] rounded-xl transition-all"
          >
            Нээлттэй ажлын байр
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* HR Policy Pillars */}
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-8 sm:py-14">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-[3px] rounded-full bg-[#00AC94]" />
          <span className="text-xs sm:text-sm font-semibold text-[#00AC94] uppercase tracking-wider">
            Бодлого
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#243342] mb-3">
          Хүний нөөцийн бодлого
        </h2>
        <p className="text-xs sm:text-sm text-[#455A6F] max-w-3xl mb-10 sm:mb-12">
          Бид ажилтнуудаа хөгжүүлж, тэдний чадавхийг дээд зэргээр ашиглах таатай орчныг бүрдүүлдэг. Мэргэжлийн сургалт, ур чадварын хөтөлбөрүүдээр дамжуулан ажилтан бүрийн өсөлт, хөгжлийг дэмжиж, байгууллагын тогтвортой хөгжилд хувь нэмрээ оруулдаг.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {policies.map((item, i) => (
            <div
              key={item.title}
              className={`relative bg-white rounded-2xl p-7 border border-gray-100 card-hover group overflow-hidden ${
                i >= 3 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00AC94]/[0.03] rounded-bl-full" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#00AC94]/10 group-hover:bg-[#00AC94] flex items-center justify-center mb-5 transition-colors duration-300">
                  <item.icon className="w-5.5 h-5.5 text-[#00AC94] group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-[#243342] mb-2.5">
                  {item.title}
                </h4>
                <p className="text-sm text-[#455A6F] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Us - Highlighted section */}
      <div className="bg-white">
        <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center mb-10 sm:mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-[3px] rounded-full bg-[#00AC94]" />
              <span className="text-xs sm:text-sm font-semibold text-[#00AC94] uppercase tracking-wider">
                Давуу тал
              </span>
              <div className="w-8 h-[3px] rounded-full bg-[#00AC94]" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#243342] mb-3">
              Яагаад Анхны Нахиа гэж?
            </h2>
            <p className="text-sm sm:text-base text-[#455A6F] max-w-lg mx-auto">
              Бидэнтэй нэгдэх шалтгаанууд
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {whyUs.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-4 bg-[#F9FAFB] rounded-2xl p-5 sm:p-6 border border-gray-100 hover:border-[#00AC94]/20 hover:shadow-md hover:shadow-[#00AC94]/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00AC94]/10 group-hover:bg-[#00AC94] flex items-center justify-center shrink-0 transition-colors duration-300">
                  <item.icon className="w-5.5 h-5.5 text-[#00AC94] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm sm:text-[15px] font-medium text-[#243342] leading-snug">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recruitment Process */}
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-[3px] rounded-full bg-[#00AC94]" />
            <span className="text-xs sm:text-sm font-semibold text-[#00AC94] uppercase tracking-wider">
              Үе шатууд
            </span>
            <div className="w-8 h-[3px] rounded-full bg-[#00AC94]" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#243342] mb-3">
            Сонгон шалгаруулалтын үе шат
          </h2>
          <p className="text-sm sm:text-base text-[#455A6F] max-w-lg mx-auto">
            Бидний ажилд авах үйл явц нь ил тод, шударга зарчимд тулгуурладаг.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative bg-white rounded-2xl p-7 border border-gray-100 card-hover group overflow-hidden"
            >
              {/* Large step number watermark */}
              <span className="absolute -top-2 -right-1 text-[72px] font-bold text-[#00AC94]/[0.06] leading-none select-none group-hover:text-[#00AC94]/[0.12] transition-colors duration-500">
                {item.step}
              </span>
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-[#00AC94]/10 group-hover:bg-[#00AC94] flex items-center justify-center mb-4 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-[#00AC94] group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-[#243342] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-[#455A6F] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 sm:mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-white rounded-2xl border border-gray-100 px-10 sm:px-16 py-10 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-[#00AC94]/10 flex items-center justify-center">
              <Briefcase className="w-7 h-7 text-[#00AC94]" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#243342]">
              Бидэнтэй нэгдэх гэж байна уу?
            </h3>
            <p className="text-sm text-[#455A6F] max-w-sm">
              Одоо нээлттэй байгаа ажлын байрны жагсаалттай танилцаарай.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-white bg-[#00AC94] hover:bg-[#009882] rounded-xl transition-all mt-1"
            >
              Нээлттэй ажлын байрууд
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
