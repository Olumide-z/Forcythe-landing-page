
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/cta/CTA";
import BlogSection from "@/components/blog-section/BlogSection";
import Portfolio from "@/components/portfoilio/Portfolio";
import Services from "@/components/services/Services";
import SecondCTA from "@/components/cta/SecondCTA";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <Projects />
        <Testimonials />
        <CTA />
        <Services />
        <Portfolio />
        <BlogSection />
        <SecondCTA />
        <Footer />
      </main>
    </div>
  );
}
