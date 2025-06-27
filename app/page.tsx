import About from "@/components/sections/about";
import Certification from "@/components/sections/certification";
import Cta from "@/components/sections/cta";
import Faq from "@/components/sections/faq";
import Features from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import Apps from "@/components/sections/apps";
import Projects from "@/components/sections/projects";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <About />
      <Certification />
      <Apps />
      <Projects />
      <Testimonials />
      <Cta />
      <Faq />
      <Footer />
    </>
  );
}
