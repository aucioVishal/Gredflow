"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { BentoGridItem } from "@/components/bento-grid-item"
import Image from "next/image"

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

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

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-white w-full mx-auto">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-[#F1F9F1]">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#D4ECD5] rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[#FFEEEB] rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-[#4CAF50]/20 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-[#FF6347]/20 rounded-full"></div>

      <div className="container px-4 md:px-6 relative z-10 w-full mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block px-4 py-1.5 text-sm font-medium bg-[#D4ECD5] text-[#4CAF50] rounded-full mb-4">
            What We Do
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Our Creative Services</h2>
          <div className="w-20 h-1 bg-[#4CAF50] my-2"></div>
          <p className="text-lg text-[#333333]/80 max-w-[800px] mt-4">
            We offer a comprehensive range of design services to help your brand stand out in today&apos;s competitive
            market. Each service is tailored to meet your specific needs and goals.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {/* Item 1: Brand Identity (Large) */}
          <BentoGridItem
            className="md:col-span-2 md:row-span-1"
            title="Crafting Unique Brand Identities"
            description="We build distinctive brand identities that resonate with your audience and set you apart."
            header={
              <div className="relative h-64 w-full">
                <Image
                  src="/images/brand-identity.jpg" // Updated image source
                  alt="Brand Identity"
                  fill
                  className="object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <span className="text-white text-lg font-semibold">Logo & Guidelines</span>
                </div>
              </div>
            }
            link="/services/brand-identity"
            animationDelay="0.1s"
            isInView={isInView}
          />

          {/* Item 2: Video Editing (Standard) */}
          <BentoGridItem
            title="Dynamic Video Editing"
            description="Engaging video content that tells your story and captivates your audience."
            header={
              <div className="relative h-32 w-full">
                <Image
                  src="/images/dynamic-video.jpg" // Updated image source
                  alt="Video Editing"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            }
            link="/services/video-editing"
            animationDelay="0.2s"
            isInView={isInView}
          />

          {/* Item 3: UI/UX Design (Standard) */}
          <BentoGridItem
            title="Seamless UI/UX Solutions"
            description="Intuitive interfaces that guide users through your digital products seamlessly."
            header={
              <div className="relative h-32 w-full">
                <Image
                  src="/images/ui-ux-representations.jpg" // Updated image source
                  alt="UI/UX Design"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            }
            link="/services/ui-ux"
            animationDelay="0.3s"
            isInView={isInView}
          />
          {/* Item 5: Print Design (Standard) */}
          <BentoGridItem
            title="Impactful Print Materials"
            description="Eye-catching print materials that effectively communicate your message."
            header={
              <div className="relative h-32 w-full">
                <Image
                  src="/images/modern-print.jpg" // Updated image source
                  alt="Print Design"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            }
            link="/services/print-design"
            animationDelay="0.5s"
            isInView={isInView}
          />

          {/* Item 6: Packaging Design (Standard) */}
          <BentoGridItem
            title="Innovative Packaging Solutions"
            description="Packaging that protects your product and creates a memorable unboxing experience."
            header={
              <div className="relative h-32 w-full">
                <Image
                  src="/images/package-design.jpeg" // Updated image source
                  alt="Packaging Design"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            }
            link="/services/packaging"
            animationDelay="0.6s"
            isInView={isInView}
          />

          {/* Item 4: Our Process (Custom UI) */}
          <BentoGridItem
            className="md:col-span-2"
            title="Our Collaborative Design Process"
            description="We believe in a transparent and collaborative approach to bring your vision to life."
            header={
              <div className="bg-[#F1F9F1] p-4 rounded-md border border-[#D4ECD5] flex flex-col gap-2 text-sm text-[#333333]/80">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" /> Discovery & Strategy
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" /> Concept & Ideation
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" /> Refinement & Feedback
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" /> Finalization & Launch
                </div>
              </div>
            }
            link="/about" // Link to about page for process details
            animationDelay="0.4s"
            isInView={isInView}
          />

          {/* Item 7: Why Choose Us (Custom UI) */}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white">
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
