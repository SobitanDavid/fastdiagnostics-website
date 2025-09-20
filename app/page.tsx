import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import HeroCarousel from "@/components/hero-carousel"
import QuickIntro from "@/components/quick-intro"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "FASDiagnostics - Professional Medical Laboratory Services | Home",
  description:
    "FASDiagnostics is your trusted partner for comprehensive medical laboratory testing. We offer clinical chemistry, hematology, histopathology, immunology, microbiology, and parasitology services with quick results and professional care.",
  keywords:
    "medical laboratory, diagnostics center, clinical testing, lab services, medical tests, healthcare diagnostics, laboratory results, medical screening",
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroCarousel />
        <QuickIntro />
      </main>
      <Footer />
    </div>
  )
}
