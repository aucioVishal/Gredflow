import type { Metadata } from "next"
import PortfolioClientPage from "./PortfolioClientPage"

// Metadata for the page (will be picked up by Next.js)
export const metadata: Metadata = {
  title: "Portfolio | GredFlow",
  description:
    "Explore our portfolio of graphic design projects including branding, web design, print design, packaging, and illustrations.",
}

export default function PortfolioPage() {
  return <PortfolioClientPage />
}
