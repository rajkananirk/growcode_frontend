import { About } from "@/components/About";
import { ClientPerspectives } from "@/components/ClientPerspectives";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { Navbar } from "@/components/Navbar";
import { PricingModels } from "@/components/PricingModels";
import { RevenueRoadmap } from "@/components/RevenueRoadmap";
import { Services } from "@/components/Services";
import { TrustCloud } from "@/components/TrustCloud";

export default function Home() {
  return (
    <main className="overflow-hidden bg-canvas text-slate-50">
      <Navbar />
      <Hero />
      <TrustCloud />
      <Services />
      <About />
      <RevenueRoadmap />
      <PricingModels />
      <ClientPerspectives />
      <Industries />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
