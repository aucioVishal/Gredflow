import type { Metadata } from "next"
import ServicesClientPage from "./ServicesClientPage"

export const metadata: Metadata = {
  title: "Services | GredFlow",
  description:
    "Explore our comprehensive range of graphic design services including brand identity, web design, print design, and more.",
}

export default function ServicesPage() {
  return <ServicesClientPage />
}
