"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    id: "brand-identity",
    title: "Brand Identity",
    description:
      "Create a distinctive brand identity that resonates with your audience and sets you apart from competitors.",
    image: "/images/brand-identity.jpg",
    features: [
      "Logo Design & Development",
      "Brand Guidelines",
      "Color Palette Selection",
      "Typography Selection",
      "Brand Voice & Messaging",
      "Brand Collateral Design",
    ],
    process: ["Discovery & Research", "Concept Development", "Design Refinement", "Finalization & Delivery"],
  },
  {
    id: "video-editing", // Changed ID
    title: "Video Editing", // Changed Title
    description: "Stunning, dynamic video content that tells your story and captivates your audience.", // Changed Description
    image: "/images/dynamic-video.jpg", // Changed Image
    features: [
      "Promotional Videos",
      "Explainer Videos",
      "Social Media Content",
      "Corporate Videos",
      "Motion Graphics",
      "Color Grading & Sound Design",
    ], // Updated Features
    process: ["Concept & Scripting", "Footage Review & Assembly", "Editing & Effects", "Review & Final Export"], // Updated Process
  },
  {
    id: "print-design",
    title: "Print Design",
    description:
      "Eye-catching print materials that effectively communicate your message and enhance brand recognition.",
    image: "/images/modern-print.jpg",
    features: [
      "Business Cards & Stationery",
      "Brochures & Flyers",
      "Posters & Banners",
      "Annual Reports",
      "Direct Mail Campaigns",
      "Print Advertisement Design",
    ],
    process: ["Concept Development", "Design Creation", "Print Specification Setup", "Final Artwork Delivery"],
  },
  {
    id: "packaging",
    title: "Packaging Design",
    description: "Innovative packaging solutions that protect your product and create a memorable unboxing experience.",
    image: "/images/package-design.jpeg",
    features: [
      "Product Packaging Design",
      "Label Design",
      "Box & Container Design",
      "Sustainable Packaging Solutions",
      "Packaging Prototypes",
      "Retail Display Design",
    ],
    process: ["Product Analysis", "Concept Development", "Structural Design", "Final Artwork & Production"],
  },
  {
    id: "illustration",
    title: "Illustration",
    description: "Custom illustrations that bring your ideas to life and add a unique visual element to your brand.",
    image: "/images/illustration.png", // Updated image source
    features: [
      "Custom Character Design",
      "Digital Illustrations",
      "Icon Sets",
      "Editorial Illustrations",
      "Infographics",
      "Storyboarding",
    ],
    process: ["Concept Sketching", "Style Development", "Digital Rendering", "Finalization & Delivery"],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "Intuitive user interfaces and experiences that guide users through your digital products seamlessly.",
    image: "/images/ui-ux-representations.jpg",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "User Flow Mapping",
      "Interaction Design",
      "Usability Testing",
      "Design System Creation",
    ],
    process: [
      "User Research & Personas",
      "Information Architecture",
      "UI Design & Prototyping",
      "User Testing & Refinement",
    ],
  },
]

export default function ServicesClientPage() {
  const heroRef = useRef<HTMLElement | null>(null)
  const servicesDetailRefs = useRef<(HTMLDivElement | null)[]>([])
  const pricingRef = useRef<HTMLElement | null>(null)

  const [heroInView, setHeroInView] = useState(false)
  const [servicesDetailInView, setServicesDetailInView] = useState<boolean[]>(new Array(services.length).fill(false))
  const [pricingInView, setPricingInView] = useState(false)

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
    const cleanupPricing = createObserver(pricingRef, setPricingInView)

    const serviceObservers: IntersectionObserver[] = []
    servicesDetailRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting && !servicesDetailInView[index]) {
            setServicesDetailInView((prev) => {
              const newArr = [...prev]
              newArr[index] = true
              return newArr
            })
            observer.unobserve(entry.target)
          }
        }, observerOptions)
        observer.observe(ref)
        serviceObservers.push(observer)
      }
    })

    return () => {
      cleanupHero()
      cleanupPricing()
      serviceObservers.forEach((observer) => observer.disconnect())
    }
  }, [servicesDetailInView])

  return (
    <div className="flex flex-col min-h-screen w-full mx-auto">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-16 md:py-24 bg-[#F1F9F1] overflow-hidden w-full mx-auto">
        {/* Advanced UI/UX Animation Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#D4ECD5] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#FFEEEB] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-medium animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#FFCBC2] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-slow animation-delay-4000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-[#D4ECD5] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-medium animation-delay-6000"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10 w-full mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <h1
                className={cn(
                  "text-3xl font-bold tracking-tighter md:text-5xl mb-4",
                  heroInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
                )}
              >
                Our <span className="gradient-text">Services</span>
              </h1>
              <p
                className={cn(
                  "text-lg text-[#333333]/80 max-w-[600px] mb-8",
                  heroInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
                )}
                style={{ animationDelay: "0.1s" }}
              >
                We offer a comprehensive range of design services to help your brand stand out in today&apos;s competitive
                market.
              </p>
              <div
                className={cn(
                  "flex flex-wrap justify-center gap-3",
                  heroInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
                )}
                style={{ animationDelay: "0.2s" }}
              >
                {services.map((service) => (
                  <Link key={service.id} href={`#${service.id}`}>
                    <Button variant="outline" className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50]/10">
                      {service.title}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
            <div
              className={cn("relative", heroInView ? "animate-zoom-in-fade-up" : "opacity-0 translate-y-4 scale-95")}
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/our-services.png"
                  alt="Creative Services"
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

      {/* Services Detail Section */}
      <section className="py-16 md:py-24 bg-white w-full mx-auto">
        <div className="container px-4 md:px-6 w-full mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              ref={(el) => {
                servicesDetailRefs.current[index] = el
              }}
              className={cn(
                `grid gap-6 lg:grid-cols-2 lg:gap-12 items-center w-full mx-auto ${
                  index !== 0 ? "mt-24 pt-24 border-t border-[#D4ECD5]" : ""
                }`,
                servicesDetailInView[index] ? "animate-fade-in-up" : "opacity-0 translate-y-4",
              )}
              style={{ animationDelay: servicesDetailInView[index] ? "0s" : "0s" }}
            >
              <div
                className={cn(
                  index % 2 === 0 ? "order-2 lg:order-1" : "order-2",
                  servicesDetailInView[index] ? "animate-zoom-in-fade-up" : "opacity-0 translate-y-4 scale-95",
                )}
                style={{ animationDelay: servicesDetailInView[index] ? "0.1s" : "0s" }}
              >
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className={index % 2 === 0 ? "order-1 lg:order-2" : "order-1"}>
                <h2
                  className={cn(
                    "text-3xl font-bold tracking-tighter mb-4",
                    servicesDetailInView[index] ? "animate-fade-in-up" : "opacity-0 translate-y-4",
                  )}
                  style={{ animationDelay: servicesDetailInView[index] ? "0.2s" : "0s" }}
                >
                  {service.title}
                </h2>
                <p
                  className={cn(
                    "text-lg text-[#333333]/80 mb-6",
                    servicesDetailInView[index] ? "animate-fade-in-up" : "opacity-0 translate-y-4",
                  )}
                  style={{ animationDelay: servicesDetailInView[index] ? "0.3s" : "0s" }}
                >
                  {service.description}
                </p>

                <Tabs defaultValue="features" className="w-full">
                  <TabsList
                    className={cn(
                      "bg-[#D4ECD5] mb-6",
                      servicesDetailInView[index] ? "animate-fade-in-up" : "opacity-0 translate-y-4",
                    )}
                    style={{ animationDelay: servicesDetailInView[index] ? "0.4s" : "0s" }}
                  >
                    <TabsTrigger
                      value="features"
                      className="data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white"
                    >
                      What We Offer
                    </TabsTrigger>
                    <TabsTrigger
                      value="process"
                      className="data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white"
                    >
                      Our Process
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="features" className="mt-0">
                    <ul
                      className={cn(
                        "grid grid-cols-1 md:grid-cols-2 gap-3",
                        servicesDetailInView[index] ? "animate-fade-in-up" : "opacity-0 translate-y-4",
                      )}
                      style={{ animationDelay: servicesDetailInView[index] ? "0.5s" : "0s" }}
                    >
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#4CAF50] mr-2 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="process" className="mt-0">
                    <ol
                      className={cn(
                        "space-y-4",
                        servicesDetailInView[index] ? "animate-fade-in-up" : "opacity-0 translate-y-4",
                      )}
                      style={{ animationDelay: servicesDetailInView[index] ? "0.5s" : "0s" }}
                    >
                      {service.process.map((step, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#4CAF50] text-[#4CAF50] mr-3">
                            {i + 1}
                          </div>
                          <div className="pt-1">
                            <p className="font-medium">{step}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </TabsContent>
                </Tabs>

                <div
                  className={cn("mt-8", servicesDetailInView[index] ? "animate-fade-in-up" : "opacity-0 translate-y-4")}
                  style={{ animationDelay: servicesDetailInView[index] ? "0.6s" : "0s" }}
                >
                  <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-20 md:py-32 bg-[#F1F9F1] w-full mx-auto">
        <div className="container px-6 md:px-8 w-full mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2
              className={cn(
                "text-3xl font-bold tracking-tighter md:text-4xl",
                pricingInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
              )}
            >
              Our Pricing
            </h2>
            <div
              className={cn(
                "w-20 h-1 bg-[#4CAF50] my-6",
                pricingInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
              )}
              style={{ animationDelay: "0.1s" }}
            ></div>
            <p
              className={cn(
                "text-lg text-[#333333]/80 max-w-[800px]",
                pricingInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
              )}
              style={{ animationDelay: "0.2s" }}
            >
              Transparent pricing options designed to fit businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                name: "Basic",
                price: "$999",
                description: "Perfect for small businesses just starting out.",
                features: [
                  "Logo Design",
                  "Brand Color Palette",
                  "Typography Selection",
                  "Basic Brand Guidelines",
                  "2 Rounds of Revisions",
                  "Delivery within 2 weeks",
                ],
              },
              {
                name: "Professional",
                price: "$2,499",
                description: "Ideal for growing businesses looking to establish a strong brand presence.",
                highlighted: true,
                features: [
                  "Everything in Basic",
                  "Extended Brand Guidelines",
                  "Business Card & Stationery Design",
                  "Social Media Templates",
                  "Email Signature Design",
                  "3 Rounds of Revisions",
                  "Delivery within 3 weeks",
                ],
              },
              {
                name: "Enterprise",
                price: "$4,999",
                description: "Comprehensive solution for established businesses requiring a full brand system.",
                features: [
                  "Everything in Professional",
                  "Complete Brand Strategy",
                  "Brand Messaging & Voice",
                  "Website Design (5 pages)",
                  "Marketing Collateral Design",
                  "Unlimited Revisions",
                  "Dedicated Project Manager",
                  "Delivery within 5 weeks",
                ],
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={cn(
                  `${plan.highlighted ? "border-[#4CAF50] shadow-lg relative" : "border-[#D4ECD5]"}`,
                  "group hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ease-out min-h-[600px]",
                  pricingInView ? "animate-zoom-in-fade-up" : "opacity-0 translate-y-4 scale-95",
                )}
                style={{ animationDelay: pricingInView ? `${index * 0.1 + 0.3}s` : "0s" }}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#4CAF50] text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className="p-8 pb-6">
                  <CardTitle className="text-2xl mb-3">{plan.name}</CardTitle>
                  <CardDescription className="text-base mb-6">{plan.description}</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-[#333333]/70 ml-2">/ project</span>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0 flex flex-col flex-1">
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#4CAF50] mr-3 mt-0.5 shrink-0" />
                        <span className="text-[#333333]/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full py-3 text-base font-medium ${
                      plan.highlighted
                        ? "bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white"
                        : "bg-white border border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50]/10"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className={cn("mt-16 text-center", pricingInView ? "animate-fade-in-up" : "opacity-0 translate-y-4")}
            style={{ animationDelay: pricingInView ? `${3 * 0.1 + 0.4}s` : "0s" }}
          >
            <p className="text-[#333333]/80 mb-6 text-lg">
              Need a custom solution? We offer tailored packages to meet your specific needs.
            </p>
            <Button variant="outline" className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50]/10 px-8 py-3 text-base">
              Contact for Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
