"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PortfolioCard } from "@/components/portfolio-card"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All" },
  { id: "branding", label: "Branding" },
  { id: "video-editing", label: "Video Editing" },
  { id: "print", label: "Print" },
  { id: "packaging", label: "Packaging" },
]

const projects = [
  {
    id: 1,
    title: "Eco Cosmetics Branding",
    category: "branding",
    image: "/images/eco-cosmetic.jpeg", // Updated image source
  },
  {
    id: 2,
    title: "Corporate Explainer Video",
    category: "video-editing",
    image: "/images/corporate_explainer.jpg", // Updated image source
  },
  {
    id: 3,
    title: "Organic Food Packaging",
    category: "packaging",
    image: "/images/organic.jpg", // Updated image source
  },
  {
    id: 4,
    title: "Fashion Lookbook",
    category: "print",
    image: "/images/fashion.jpg", // Updated image source
  },
  {
    id: 5,
    title: "Coffee Shop Branding",
    category: "branding",
    image: "/images/coffee-shop.jpg", // Updated image source
  },
  {
    id: 6,
    title: "Social Media Ad Campaig",
    category: "video-editing",
    image: "/images/social-media-marketing.jpg", // Updated image source
  },
]

export function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    const currentSectionRef = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      },
    )

    if (currentSectionRef) {
      observer.observe(currentSectionRef)
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef)
      }
    }
  }, [isInView])

  const filteredProjects = projects.filter((project) => activeTab === "all" || project.category === activeTab)

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white overflow-hidden w-full mx-auto">
      <div className="container px-4 md:px-6 w-full mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2
            className={cn(
              "text-3xl font-bold tracking-tighter md:text-4xl",
              isInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
            )}
          >
            Our Portfolio
          </h2>
          <div
            className={cn("w-20 h-1 bg-[#4CAF50] my-4", isInView ? "animate-fade-in-up" : "opacity-0 translate-y-4")}
            style={{ animationDelay: "0.1s" }}
          ></div>
          <p
            className={cn(
              "text-lg text-[#333333]/80 max-w-[800px]",
              isInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
            )}
            style={{ animationDelay: "0.2s" }}
          >
            Explore our latest projects and see how we&apos;ve helped brands achieve their design goals.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div
            className={cn("flex justify-center mb-8", isInView ? "animate-fade-in-up" : "opacity-0 translate-y-4")}
            style={{ animationDelay: "0.3s" }}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <PortfolioCard key={project.id} project={project} index={index} isInView={isInView} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div
          className={cn("flex justify-center mt-12", isInView ? "animate-fade-in-up" : "opacity-0 translate-y-4")}
          style={{ animationDelay: `${filteredProjects.length * 0.1 + 0.4}s` }}
        >
          <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white">View All Projects</Button>
        </div>
      </div>
    </section>
  )
}
