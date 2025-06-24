import Features from "@/components/sections/features";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features/>
      <Services/>
    </>
  );
}
