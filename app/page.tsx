import About from "@/components/sections/about";
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
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <Apps />
      <div id="projects">
        <Projects />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Cta />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <Footer />
    </>
  );
}
