import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Us | GredFlow",
  description: "Learn about GredFlow, our team, our mission, and our approach to graphic design.",
}

export default function AboutPage() {
  return <AboutPageClient />
}
