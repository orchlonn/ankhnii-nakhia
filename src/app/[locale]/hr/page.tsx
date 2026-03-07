import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import HR from "@/components/HR";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";

export default async function HRPage() {
  const t = await getTranslations("hr");

  return (
    <>
      <Header />
      <main>
        <PageBanner title={t("badge")} />
        <HR />
      </main>
      <Footer />
    </>
  );
}
