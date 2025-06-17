"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    content:
      "GredFlow completely transformed our brand identity. Their creative approach and attention to detail exceeded our expectations. We've received countless compliments on our new look!",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, Organic Foods",
    content:
      "Working with GredFlow on our packaging design was a game-changer for our products. Sales increased by 40% after the redesign, and our products now stand out on the shelves.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "CEO, Fashion Forward",
    content:
      "The team at GredFlow understood our vision perfectly and delivered a stunning lookbook design that captured the essence of our brand. Their creativity and professionalism are unmatched.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 4,
    name: "David Lee",
    role: "Product Manager, Innovate Solutions",
    content:
      "GredFlow's UI/UX design for our new software was exceptional. They created an intuitive and visually appealing interface that our users love. Highly recommend their expertise!",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 5,
    name: "Olivia White",
    role: "Owner, Bloom Florals",
    content:
      "The custom illustrations GredFlow created for our floral shop added a unique charm to our branding. They perfectly captured the whimsical feel we were going for.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 6,
    name: "Chris Green",
    role: "CEO, Global Logistics",
    content:
      "Our annual report needed a fresh, modern look, and GredFlow delivered beyond expectations. Their print design skills are top-notch, making complex data look clean and engaging.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
  },
  {
    id: 7,
    name: "Sophia Martinez",
    role: "Brand Strategist, EcoLiving",
    content:
      "The brand guidelines developed by GredFlow were incredibly thorough and easy to implement. They truly understood our eco-conscious values and translated them into a beautiful visual identity.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 8,
    name: "Daniel Kim",
    role: "Startup Founder, CodeFlow",
    content:
      "GredFlow designed our entire web presence, from wireframes to the final responsive site. Their attention to detail and commitment to user experience made our launch a huge success.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3) // Default for large screens

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isInView])

  const updateItemsPerPage = useCallback(() => {
    if (window.innerWidth >= 1024) {
      setItemsPerPage(3)
    } else if (window.innerWidth >= 768) {
      setItemsPerPage(2)
    } else {
      setItemsPerPage(1)
    }
  }, [])

  useEffect(() => {
    updateItemsPerPage()
    window.addEventListener("resize", updateItemsPerPage)
    return () => window.removeEventListener("resize", updateItemsPerPage)
  }, [updateItemsPerPage])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, testimonials.length - itemsPerPage))
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  const isPrevDisabled = currentIndex === 0
  const isNextDisabled = currentIndex >= testimonials.length - itemsPerPage

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-[#D4ECD5]/30 overflow-hidden relative w-full mx-auto">
      <div className="container px-4 md:px-6 w-full mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2
            className={cn(
              "text-3xl font-bold tracking-tighter md:text-4xl",
              isInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
            )}
          >
            Client Testimonials
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
            Don't just take our word for it. Here's what our clients have to say about working with GredFlow.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-3"
                  style={{ flexBasis: `${100 / itemsPerPage}%` }}
                >
                  <Card
                    className={cn(
                      "group bg-white border border-[#D4ECD5] h-full flex flex-col justify-between",
                      isInView ? "animate-zoom-in-fade-up" : "opacity-0 translate-y-4 scale-95",
                      "hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out",
                    )}
                    style={{ animationDelay: isInView ? `${index * 0.1 + 0.3}s` : "0s" }}
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center flex-1">
                      <Quote className="h-10 w-10 text-[#4CAF50]/20 mb-4" />
                      <p className="text-[#333333]/80 mb-6 flex-1">{testimonial.content}</p>
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#FF6347] text-[#FF6347]" />
                        ))}
                      </div>
                      <div className="flex items-center">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#333333]">{testimonial.name}</h4>
                          <p className="text-sm text-[#333333]/70">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrev}
            disabled={isPrevDisabled}
            className={cn(
              "absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md",
              isPrevDisabled && "opacity-50 cursor-not-allowed",
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-[#4CAF50]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            disabled={isNextDisabled}
            className={cn(
              "absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md",
              isNextDisabled && "opacity-50 cursor-not-allowed",
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-[#4CAF50]" />
          </Button>
        </div>
      </div>
    </section>
  )
}
