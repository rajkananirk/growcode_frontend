import type { Metadata } from "next";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Portfolio } from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Selected Work — Growcode Solution",
  description: "Selected product engineering work across logistics, healthcare, and financial services.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#080b12] text-white">
      <Navbar />
      <PageHero
        eyebrow="Selected work / product outcomes"
        title="Complex products made"
        accent="clear, useful, and durable."
        description="A selection of product systems shaped around operational reality, measurable outcomes, and long-term client ownership."
      />
      <Portfolio />
      <FinalCTA />
      <Footer />
    </main>
  );
}
