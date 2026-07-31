import type { Metadata } from "next";
import { ContactPageExperience } from "@/components/ContactPageExperience";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = { title: "Contact — Growcode Solution", description: "Share a project brief, message our team, or book a product consultation." };

export default function ContactPage() {
  return <main className="min-h-screen bg-[#080b12] text-white"><Navbar /><ContactPageExperience /><Footer /></main>;
}
