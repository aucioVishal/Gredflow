import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "GredFlow | Creative Graphic Design Studio",
  description:
    "GredFlow is a creative graphic design studio specializing in brand identity, digital design, and print materials.",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full mx-auto">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  )
}
