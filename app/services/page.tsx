import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ServicesExperience } from "@/components/ServicesExperience";

export const metadata: Metadata = { title: "Services — Growcode Solution", description: "Mobile, web, AI, quality, and cloud product engineering services organized around your challenge." };

export default function ServicesPage() {
  return <main className="min-h-screen bg-[#080b12] text-white"><Navbar /><ServicesExperience /><Footer /></main>;
}
