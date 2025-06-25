import About from "@/components/sections/about";
import Certification from "@/components/sections/certification";
import Cta from "@/components/sections/cta";
import Features from "@/components/sections/features";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
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
      <Projects />
      <Testimonials />
      <Cta />
    </>
  );
}
