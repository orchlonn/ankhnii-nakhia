import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { getTranslations } from "next-intl/server";

export default async function DistributionPage() {
  const t = await getTranslations("services");

  return (
    <>
      <Header />
      <main>
        <PageBanner title={t("distributionCenter.title")} />
        <section className="bg-[#fbf9fa]">
          <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
            <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#1a1a2e] mb-14 text-center">
              &ldquo;Анхны нахиа&rdquo; эм ханган нийлүүлэх төв
            </h2>
            <div className="space-y-5 text-base sm:text-lg text-black leading-relaxed text-justify">
              <p>Манай &ldquo;Анхны нахиа&rdquo; ХХК- нь 2017оны 4-р сарын 7-ны өдрөөс эхлэн эм, эмнэлэгийн багаж, тоног төхөөхөмж, дагалдах хэрэгсэл ханган нийлүүлэх тусгай зөвшөөрөлтэйгөөр Хан-Уул дүүргийн нутаг дэвсгэрт үйл ажиллагаа явуулан нийт 10 ажилтантайгаар ажиллаж байна.</p>
              <p>Өдгөө ОХУ, БНСВУ -ын нэр хүнд бүхий эмийн үйлдвэрүүдээс нийт 10гаруй төрлийн эмийг Монгол Улсын эмийн бүртгэлд бүртгүүлэн импортоор оруулж ирэн худалдаалж байна.</p>
              <p><strong>Бидний зорилго:</strong> Эм, эмнэлэгийн хэрэгсэл, тоног төхөөрөмж импортлох, ханган нийлүүлэх үйл ажиллагааг чанарын өндөр түвшинд хийж, хууль тогтоомжийг үйл ажиллагаандаа бүрэн хэрэгжүүлэн ажиллах явдал юм.</p>
              <p><strong>Бидний зорилт:</strong> Цаашдаа Европын холбооны Австри, Герман, Польш, АНУ, Австрали, БНСУ зэрэг өндөр хөгжилтэй улс орнуудаас чанартай эм, эмнэлэгийн багаж тоног төхөөрөмж, дагалдах хэрэгслээр ард иргэддээ ханган ажиллахаар зорин ажиллаж байна.</p>
            </div>

            {/* Auto-scrolling Images */}
            <div className="mt-14 overflow-hidden">
              <div className="flex gap-5 animate-scroll-left" style={{ width: "max-content" }}>
                {[1, 2, 3, 1, 2, 3].map((num, i) => (
                  <div key={i} className="flex-shrink-0 w-[350px] sm:w-[400px]">
                    <div className="aspect-[4/3] rounded-2xl bg-gray-100 border border-gray-200 overflow-hidden">
                      <img src={`/images/distribution-${num}.jpg`} alt={`Distribution ${num}`} className="w-full h-full object-cover" />
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
