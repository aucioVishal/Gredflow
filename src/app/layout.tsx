import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingContactButtons } from "@/components/floating-contact-buttons" // Import the new component
import { Toaster } from "@/components/ui/toaster"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "GredFlow | Creative Graphic Design Studio",
    template: "%s | GredFlow",
  },
  description:
    "GredFlow is a creative graphic design studio specializing in brand identity, digital design, and print materials.",
  keywords: ["graphic design", "branding", "logo design", "web design", "print design", "GredFlow", "creative studio"],
  authors: [{ name: "GredFlow Design Studio" }],
  creator: "GredFlow Design Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gredflow.com",
    title: "GredFlow | Creative Graphic Design Studio",
    description:
      "GredFlow is a creative graphic design studio specializing in brand identity, digital design, and print materials.",
    siteName: "GredFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "GredFlow | Creative Graphic Design Studio",
    description:
      "GredFlow is a creative graphic design studio specializing in brand identity, digital design, and print materials.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-[#F1F9F1] text-[#333333]`}>
          <div className="flex min-h-screen flex-col w-full mx-auto">
            <Navbar />
            <main className="flex-1 w-full mx-auto">{children}</main>
            <Footer />
            <FloatingContactButtons />
            <Toaster />
          </div>
      </body>
    </html>
  )
}
