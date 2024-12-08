import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import Pricing from "@/components/landing/pricing";
import Stats from "@/components/landing/stats";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Stats />
      <Pricing />
      <Footer />
    </div>
  );
}
