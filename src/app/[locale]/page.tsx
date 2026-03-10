import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CompanyIntro from "@/components/CompanyIntro";
import Values from "@/components/Values";
import Partners from "@/components/Partners";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import HomeContent from "@/components/HomeContent";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <HomeContent>
      <Header />
      <main>
        <Hero />
        <ScrollReveal animation="fade-up">
          <Stats />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={100}>
          <CompanyIntro />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={100}>
          <Values />
        </ScrollReveal>
        <ScrollReveal animation="fade-up">
          <Partners variant="scroll" />
        </ScrollReveal>
        <ScrollReveal animation="scale-up">
          <CTABanner />
        </ScrollReveal>
      </main>
      <Footer />
    </HomeContent>
  );
}
