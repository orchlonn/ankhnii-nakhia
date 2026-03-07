import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { getTranslations } from "next-intl/server";

export default async function PharmacyPage() {
  const t = await getTranslations("services");

  return (
    <>
      <Header />
      <main>
        <PageBanner title={t("pharmacy.title")} />
        <section className="bg-[#fbf9fa]">
          <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
            <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#1a1a2e] mb-14 text-center">
              Эмийн сан
            </h2>
            <div className="space-y-5 text-base sm:text-lg text-black leading-relaxed text-justify">
              <p>Анх 2007 оноос эхлэсэн эмийн сан маань өдгөө нийт 6 салбар эмийн сан 20 гаруй хүний бүрэлдэхүүнтэй өргөжин тэлж Эрүүл Мэндийн даатгалын хөнгөлттэй үнээр үйлчлэх, өрхийн эмнэлэг болон ард иргэдэд үйлчилж, ард түмний эрүүлийг хамгаалах үйлсэд жинтэй хувь нэмэр оруулахын төлөө зорин ажилласаар байна.</p>
              <p>Бид эмийн сангийн бүтэц үйл ажиллагааны MNS5260:2015 стандартыг баримтлан, Монгол улсын эмийн бүртгэлд бүртгэгдсэн, чанарын аюулгүй байдлыг хангасан эмээр үйлчилэн иргэдэд эмийн зохистой хэрэглээг хэвшүүлэхийг зорин ажиллаж байна.</p>
              <p><strong>Манай эмийн сангийн зорилго:</strong> Аюулгүй, чанарын баталгаатай эм, эмнэлэгийн хэрэгслээр эмнэлэгийн байгууллага, хүн амыг тасралтгүй, жигд хүртээмжтэй хангаж эм зүйн тусламж үйлчилгээ үзүүлэх явдал юм.</p>
            </div>

            {/* Auto-scrolling Images */}
            <div className="mt-14 overflow-hidden">
              <div className="flex gap-5 animate-scroll-left" style={{ width: "max-content" }}>
                {[1, 2, 3, 1, 2, 3].map((num, i) => (
                  <div key={i} className="flex-shrink-0 w-[350px] sm:w-[400px]">
                    <div className="aspect-[4/3] rounded-2xl bg-gray-100 border border-gray-200 overflow-hidden">
                      <img src={`/images/pharmacy-${num}.jpg`} alt={`Pharmacy ${num}`} className="w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
