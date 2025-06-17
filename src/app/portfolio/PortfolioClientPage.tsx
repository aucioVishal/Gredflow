"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PortfolioCard } from "@/components/portfolio-card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award } from "lucide-react"

const categories = [
  { id: "all", label: "All" },
  { id: "branding", label: "Branding" },
  { id: "video-editing", label: "Video Editing" },
  { id: "print", label: "Print" },
  { id: "packaging", label: "Packaging" },
  { id: "illustration", label: "Illustration" },
]

const projects = [
  {
    id: 1,
    title: "Eco Cosmetics Branding",
    category: "branding",
    image: "/images/eco-cosmetic.jpeg", // Updated image source
    client: "Nature Beauty Co.",
    description:
      "Complete brand identity for an eco-friendly cosmetics line, including logo, packaging, and marketing materials.",
  },
  {
    id: 2,
    title: "Corporate Explainer Video",
    category: "video-editing",
    image: "/images/corporate_explainer.jpg", // Updated image source
    client: "InnovateTech",
    description: "Engaging corporate explainer video to simplify complex services and enhance brand communication.",
  },
  {
    id: 3,
    title: "Organic Food Packaging",
    category: "packaging",
    image: "/images/organic.jpg", // Updated image source
    client: "Fresh Harvest",
    description:
      "Sustainable packaging design for an organic food brand, emphasizing eco-friendly materials and vibrant visuals.",
  },
  {
    id: 4,
    title: "Fashion Lookbook",
    category: "print",
    image: "/images/fashion.jpg", // Updated image source
    client: "Urban Style",
    description:
      "Elegant lookbook design showcasing a fashion brand's seasonal collection with artistic photography and typography.",
  },
  {
    id: 5,
    title: "Coffee Shop Branding",
    category: "branding",
    image: "/images/coffee-shop.jpg", // Updated image source
    client: "Brew & Bean",
    description:
      "Comprehensive brand identity for an artisanal coffee shop, including logo, menus, packaging, and interior design elements.",
  },
  {
    id: 6,
    title: "Social Media Ad Campaign Video",
    category: "video-editing",
    image: "/images/social-media-marketing.jpg", // Updated image source
    client: "ShopEasy",
    description: "Dynamic video ads optimized for social media platforms to boost engagement and conversions.",
  },
  {
    id: 7,
    title: "Children's Book Illustrations",
    category: "illustration",
    image: "/images/wonder-books.jpeg",
    client: "Wonder Books",
    description:
      "Whimsical illustrations for a children's book series, bringing characters and stories to life with vibrant colors.",
  },
  {
    id: 8,
    title: "Corporate Annual Report",
    category: "print",
    image: "/images/global-investment.jpeg",
    client: "Global Investments",
    description:
      "Clean, professional design for a corporate annual report, presenting complex data in an accessible and engaging format.",
  },
  {
    id: 9,
    title: "Craft Beer Labels",
    category: "packaging",
    image: "/images/hoppy-brews.png",
    client: "Hoppy Brews",
    description:
      "Creative label designs for t craft brewery's product line, each reflecting the unique character of different beer varieties.",
  },
]

export default function PortfolioClientPage() {
  const heroRef = useRef<HTMLElement | null>(null)
  const portfolioRef = useRef<HTMLElement | null>(null)
  const ctaRef = useRef<HTMLElement | null>(null)

  const [heroInView, setHeroInView] = useState(false)
  const [portfolioInView, setPortfolioInView] = useState(false)
  const [ctaInView, setCtaInView] = useState(false)

  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    }

    const createObserver = (
      ref: React.RefObject<HTMLElement | null>,
      setInView: React.Dispatch<React.SetStateAction<boolean>>,
    ) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      }, observerOptions)

      if (ref.current) {
        observer.observe(ref.current)
      }
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      }
    }

    const cleanupHero = createObserver(heroRef, setHeroInView)
    const cleanupPortfolio = createObserver(portfolioRef, setPortfolioInView)
    const cleanupCta = createObserver(ctaRef, setCtaInView)

    return () => {
      cleanupHero()
      cleanupPortfolio()
      cleanupCta()
    }
  }, [heroInView, portfolioInView, ctaInView])

  const filteredProjects = projects.filter((project) => activeTab === "all" || project.category === activeTab)

  return (
    <div className="flex flex-col min-h-screen w-full mx-auto">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-16 md:py-10 bg-[#F1F9F1] overflow-hidden w-full mx-auto">
        {/* Animated background shapes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#D4ECD5] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#FFEEEB] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-medium animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#FFCBC2] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-slow animation-delay-4000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-[#D4ECD5] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-medium animation-delay-6000"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10 w-full mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <h1
                className={cn(
                  "text-3xl font-bold tracking-tighter md:text-5xl mb-4",
                  heroInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
                )}
              >
                Our Creative <span className="gradient-text">Portfolio</span>
              </h1>
              <p
                className={cn(
                  "text-lg text-[#333333]/80 max-w-[600px] mb-8",
                  heroInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
                )}
                style={{ animationDelay: "0.1s" }}
              >
                Showcasing our passion for design and the impactful visual stories we've crafted for diverse brands.
              </p>
              <div
                className={cn(
                  "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4",
                  heroInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
                )}
                style={{ animationDelay: "0.2s" }}
              >
                <Card
                  className={cn(
                    "bg-white border border-[#D4ECD5] shadow-sm hover:shadow-md transition-all duration-300",
                    heroInView ? "animate-zoom-in-fade-up" : "opacity-0 translate-y-4 scale-95",
                  )}
                  style={{ animationDelay: "0.3s" }}
                >
                  <CardContent className="p-4 flex items-center space-x-3">
                    <Users className="h-8 w-8 text-[#4CAF50]" />
                    <div>
                      <div className="text-2xl font-bold">100+</div>
                      <p className="text-sm text-[#333333]/80">Satisfied Clients</p>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className={cn(
                    "bg-white border border-[#D4ECD5] shadow-sm hover:shadow-md transition-all duration-300",
                    heroInView ? "animate-zoom-in-fade-up" : "opacity-0 translate-y-4 scale-95",
                  )}
                  style={{ animationDelay: "0.4s" }}
                >
                  <CardContent className="p-4 flex items-center space-x-3">
                    <Award className="h-8 w-8 text-[#FF6347]" />
                    <div>
                      <div className="text-2xl font-bold">500+</div>
                      <p className="text-sm text-[#333333]/80">Projects Completed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div
              className={cn("relative", heroInView ? "animate-zoom-in-fade-up" : "opacity-0 translate-y-4 scale-95")}
              style={{ animationDelay: "0.5s" }}
            >
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl border border-[#D4ECD5]">
                <Image
                  src="/images/our-portfolio.jpeg"
                  alt="Creative Portfolio Showcase"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section ref={portfolioRef} className="py-16 md:py-24 bg-white overflow-hidden w-full mx-auto">
        <div className="container px-4 md:px-6 w-full mx-auto">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div
              className={cn(
                "flex justify-center mb-12",
                portfolioInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
              )}
              style={{ animationDelay: "0.2s" }}
            >
              <TabsList className="bg-[#D4ECD5]">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white transition-colors duration-300"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <PortfolioCard key={project.id} project={project} index={index} isInView={portfolioInView} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 md:py-24 bg-[#F1F9F1] w-full mx-auto">
        <div className="container px-4 md:px-6 w-full mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2
              className={cn(
                "text-3xl font-bold tracking-tighter md:text-4xl mb-4",
                ctaInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
              )}
            >
              Ready to Start Your Project?
            </h2>
            <p
              className={cn(
                "text-lg text-[#333333]/80 max-w-[800px] mb-8",
                ctaInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
              )}
              style={{ animationDelay: "0.1s" }}
            >
              Let's collaborate to create visually compelling designs that help your brand stand out and connect with
              your audience.
            </p>
            <div
              className={cn(
                "flex flex-col sm:flex-row gap-3",
                ctaInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
              )}
              style={{ animationDelay: "0.2s" }}
            >
              <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white">Get in Touch</Button>
              <Button variant="outline" className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50]/10">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
