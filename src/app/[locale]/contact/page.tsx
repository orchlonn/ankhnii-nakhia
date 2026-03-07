import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";

export default async function ContactPage() {
  const t = await getTranslations("contact");

  return (
    <>
      <Header />
      <main>
        <PageBanner title={t("title")} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
