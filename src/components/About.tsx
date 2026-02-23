import {
  Trophy,
  Smile,
  Shield,
  Sparkles,
  HeartPulse,
  Globe,
  Building2,
  Users,
  Target,
  Award,
  ArrowRight,
} from "lucide-react";
import SpotlightBanner from "./SpotlightBanner";

const values = [
  {
    icon: Trophy,
    title: "Чанар",
    desc: "MNS5260:2015 стандартыг баримтлан, Монгол Улсын эмийн бүртгэлд бүртгэгдсэн, чанарын аюулгүй байдлыг хангасан эмээр үйлчилдэг.",
  },
  {
    icon: Smile,
    title: "Найдвартай байдал",
    desc: "2000 оноос хойш 25 гаруй жил тасралтгүй ажиллаж, 6 салбар эмийн сантайгаар иргэдэд үйлчилж байна.",
  },
  {
    icon: Shield,
    title: "Хариуцлага",
    desc: "Хууль тогтоомжийг үйл ажиллагаандаа бүрэн хэрэгжүүлэн, хариуцлагатай ажилладаг.",
  },
  {
    icon: Sparkles,
    title: "Хүртээмж",
    desc: "Эрүүл мэндийн даатгалын хөнгөлттэй үнээр үйлчлэн, эмийн зохистой хэрэглээг хэвшүүлэхийг зорьдог.",
  },
];

const stats = [
  { value: "2007", label: "Байгуулагдсан он" },
  { value: "25+", label: "Жилийн туршлага" },
  { value: "6", label: "Салбар эмийн сан" },
  { value: "30+", label: "Нийт ажилтан" },
  { value: "10+", label: "Эмийн төрөл" },
  { value: "4", label: "Салбар нэгж" },
];

const milestones = [
  {
    year: "2000",
    text: "Байгууллагын үйл ажиллагаа эхэлж, эрүүл мэндийн салбарт анхны алхмаа тавив.",
  },
  {
    year: "2007",
    text: "Анхны Нахиа ХХК эм, гадаад худалдаа, газар тариалангийн чиглэлээр үүсгэн байгуулагдав.",
  },
  {
    year: "2009",
    text: 'Нийслэлийн ЭМГ-ын тусгай зөвшөөрлөөр "Анхны нахиа" эмийн сан нээгдэв.',
  },
  {
    year: "2017",
    text: "Эм, эмнэлгийн багаж, тоног төхөөрөмж ханган нийлүүлэх тусгай зөвшөөрөл авав.",
  },
  {
    year: "2020",
    text: "Салбар эмийн сангийн тоог 6 болгож өргөжүүлэн, 30+ ажилтантай болов.",
  },
  {
    year: "2024",
    text: "ОХУ, БНСВУ-аас 10+ төрлийн эмийг импортлон, цаашид Европ, АНУ руу өргөжихөөр зорьж байна.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#fbf9fa]">
      {/* Hero Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blur-circle w-[500px] h-[500px] bg-[#AAE3DB]/25 -top-40 -right-20 absolute" />
          <div className="blur-circle w-[350px] h-[350px] bg-[#00AC94]/10 bottom-0 -left-32 absolute" />
        </div>
        <div className="relative max-w-[1088px] mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-28">
          <span className="inline-block text-xs sm:text-sm font-semibold text-[#00AC94] uppercase tracking-wider mb-3">
            Бидний тухай
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-[#243342] leading-tight mb-4">
            Монголын эрүүл мэндийн{" "}
            <span className="text-[#00AC94]">найдвартай түнш</span>
          </h1>
          <p className="text-sm sm:text-base text-[#455A6F] max-w-2xl leading-relaxed">
            Анхны Нахиа ХХК нь 2007 онд эм, гадаад худалдаа, газар тариалангийн
            чиглэлээр үүсгэн байгуулагдсан нэг хүний өмчлөлийн компани бөгөөд
            өнөөдөр 6 салбар эмийн сан, эм ханган нийлүүлэх нэгжтэйгээр ажиллаж
            байна.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 border border-gray-100 card-hover group">
            <div className="w-12 h-12 rounded-xl bg-[#00AC94]/10 group-hover:bg-[#00AC94] flex items-center justify-center mb-5 transition-colors duration-300">
              <Target className="w-6 h-6 text-[#00AC94] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#243342] mb-3">
              Эрхэм зорилго
            </h3>
            <p className="text-sm sm:text-[15px] text-[#455A6F] leading-relaxed">
              Аюулгүй, чанарын баталгаатай эм, эмнэлгийн хэрэгслээр эмнэлгийн
              байгууллага, хүн амыг тасралтгүй, жигд хүртээмжтэй хангаж эм зүйн
              тусламж үйлчилгээ үзүүлэх.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 border border-gray-100 card-hover group">
            <div className="w-12 h-12 rounded-xl bg-[#00AC94]/10 group-hover:bg-[#00AC94] flex items-center justify-center mb-5 transition-colors duration-300">
              <Globe className="w-6 h-6 text-[#00AC94] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#243342] mb-3">
              Алсын хараа
            </h3>
            <p className="text-sm sm:text-[15px] text-[#455A6F] leading-relaxed">
              Цаашдаа Европын холбооны Австри, Герман, Польш, АНУ, Австрали,
              БНСУ зэрэг өндөр хөгжилтэй улс орнуудаас чанартай эм, эмнэлгийн
              багаж тоног төхөөрөмжөөр ард иргэдээ ханган ажиллах.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white">
        <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#00AC94] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[#455A6F] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Left - Text */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[3px] rounded-full bg-[#00AC94]" />
              <span className="text-xs sm:text-sm font-semibold text-[#00AC94] uppercase tracking-wider">
                Түүх
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#243342] mb-5">
              Бидний түүх
            </h2>
            <div className="space-y-4 text-sm sm:text-[15px] text-[#455A6F] leading-relaxed">
              <p>
                Анхны Нахиа ХХК нь 2007 онд эм, гадаад худалдаа, газар
                тариалангийн чиглэлээр үүсгэн байгуулагдсан нэг хүний өмчлөлийн
                компани юм. Үүсгэн байгуулагч захирал Х.Сарнай нь Эм Зүйч
                мэргэжилтэй бөгөөд мэргэжлээрээ 20 гаруй жил ажиллаж байна.
              </p>
              <p>
                Нийслэлийн Эрүүл Мэндийн Газраас олгосон тусгай зөвшөөрлийн
                дагуу 2009 оны 11-р сарт &quot;Анхны нахиа&quot; эмийн сан нээж,
                өнөөдөр нийт 6 салбар эмийн сантай, 30 гаруй ажилтантай өргөжин
                тэлсэн. Эрүүл Мэндийн даатгалын хөнгөлттэй үнээр үйлчлэн, өрхийн
                эмнэлэг болон ард иргэддээ аюулгүй, чанартай эмээр хангаж байна.
              </p>
              <p>
                2017 оноос эхлэн эм, эмнэлгийн багаж, тоног төхөөрөмж, дагалдах
                хэрэгсэл ханган нийлүүлэх тусгай зөвшөөрөлтэйгөөр Хан-Уул
                дүүргийн нутаг дэвсгэрт үйл ажиллагаа явуулж, ОХУ, БНСВУ-ын нэр
                хүнд бүхий эмийн үйлдвэрүүдээс 10 гаруй төрлийн эмийг импортоор
                оруулж ирж байна.
              </p>
            </div>
          </div>

          {/* Right - Highlights */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#00AC94]/10 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#00AC94]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#243342] mb-1">
                  MNS5260:2015 стандарт
                </h4>
                <p className="text-xs sm:text-sm text-[#455A6F] leading-relaxed">
                  Эмийн сангийн бүтэц үйл ажиллагааны стандартыг баримтлан
                  ажилладаг.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#00AC94]/10 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-[#00AC94]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#243342] mb-1">
                  6 салбар эмийн сан
                </h4>
                <p className="text-xs sm:text-sm text-[#455A6F] leading-relaxed">
                  Азын нахиа-1, Азын нахиа-2, Шинэ нахиа, Аз хүүхдийн эмнэлэг
                  зэрэг салбартай.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#00AC94]/10 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-[#00AC94]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#243342] mb-1">
                  Мэргэжлийн баг
                </h4>
                <p className="text-xs sm:text-sm text-[#455A6F] leading-relaxed">
                  Эм зүйч, жор баригч зэрэг 30+ мэргэжилтэн, ажилтантай.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#00AC94]/10 flex items-center justify-center shrink-0">
                <HeartPulse className="w-5 h-5 text-[#00AC94]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#243342] mb-1">
                  Даатгалын хөнгөлөлт
                </h4>
                <p className="text-xs sm:text-sm text-[#455A6F] leading-relaxed">
                  Эрүүл Мэндийн даатгалын хөнгөлттэй үнээр иргэдэд үйлчилдэг.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white">
        <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="text-center mb-10 sm:mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-[3px] rounded-full bg-[#00AC94]" />
              <span className="text-xs sm:text-sm font-semibold text-[#00AC94] uppercase tracking-wider">
                Хөгжлийн зам
              </span>
              <div className="w-8 h-[3px] rounded-full bg-[#00AC94]" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#243342] mb-3">
              Бидний хөгжлийн замнал
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {milestones.map((item) => (
              <div
                key={item.year}
                className="relative bg-[#F9FAFB] rounded-2xl p-6 sm:p-7 border border-gray-100 card-hover group overflow-hidden"
              >
                <span className="absolute -top-1 -right-1 text-[64px] font-bold text-[#00AC94]/[0.06] leading-none select-none group-hover:text-[#00AC94]/[0.12] transition-colors duration-500">
                  {item.year}
                </span>
                <div className="relative">
                  <span className="inline-block text-sm font-bold text-[#00AC94] mb-2">
                    {item.year}
                  </span>
                  <p className="text-sm text-[#455A6F] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-[3px] rounded-full bg-[#00AC94]" />
            <span className="text-xs sm:text-sm font-semibold text-[#00AC94] uppercase tracking-wider">
              Үнэт зүйлс
            </span>
            <div className="w-8 h-[3px] rounded-full bg-[#00AC94]" />
          </div>
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

      {/* CTA */}
      <div className="bg-white">
        <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <SpotlightBanner>
            <div className="relative">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                Бидэнтэй хамтран ажиллах
              </h3>
              <p className="text-sm text-white/70 max-w-md">
                Эм, эмнэлгийн хэрэгслийн захиалга өгөх эсвэл хамтын ажиллагааны
                талаар мэдээлэл авахыг хүсвэл бидэнтэй холбогдоорой.
              </p>
            </div>
            <a
              href="/contact"
              className="relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-[#008F7A] bg-white hover:bg-gray-50 rounded-xl transition-all shrink-0"
            >
              Холбоо барих
              <ArrowRight className="w-4 h-4" />
            </a>
          </SpotlightBanner>
        </div>
      </div>
    </section>
  );
}
