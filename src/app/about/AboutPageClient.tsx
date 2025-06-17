"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { ParallaxImage } from "@/components/parallax-image" // Import the new component

export default function AboutPageClient() {
  const heroRef = useRef<HTMLElement>(null)
  const storyRef = useRef<HTMLElement>(null)
  const valuesRef = useRef<HTMLElement>(null)
  const teamRef = useRef<HTMLElement>(null)

  const [heroInView, setHeroInView] = useState(false)
  const [storyInView, setStoryInView] = useState(false)
  const [valuesInView, setValuesInView] = useState(false)
  const [teamInView, setTeamInView] = useState(false)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 20% of the element is visible
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
    const cleanupStory = createObserver(storyRef, setStoryInView)
    const cleanupValues = createObserver(valuesRef, setValuesInView)
    const cleanupTeam = createObserver(teamRef, setTeamInView)

    return () => {
      cleanupHero()
      cleanupStory()
      cleanupValues()
      cleanupTeam()
    }
  }, []) // Empty dependency array ensures observers are set up once

  return (
    <div className="flex flex-col w-full min-h-screen mx-auto">
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
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <h1
                className={cn(
                  "text-3xl font-bold tracking-tighter md:text-5xl mb-4",
                  heroInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
                )}
              >
                About <span className="text-[#4CAF50]">GredFlow</span>
              </h1>
              <p
                className={cn(
                  "text-lg text-[#333333]/80 mb-6",
                  heroInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
                )}
                style={{ animationDelay: "0.1s" }}
              >
                We're t passionate team of designers dedicated to creating impactful visual experiences that help brands
                connect with their audiences and achieve their business goals.
              </p>
              <div
                className={cn(
                  "flex flex-col sm:flex-row gap-3",
                  heroInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
                )}
                style={{ animationDelay: "0.2s" }}
              >
                <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white">Meet Our Team</Button>
                <Button variant="outline" className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50]/40">
                  Our Process
                </Button>
              </div>
            </div>
            <div
              className={cn("relative", heroInView ? "animate-zoom-in-fade-up" : "opacity-0 translate-y-4 scale-95")}
              style={{ animationDelay: "0.3s" }}
            >
              <ParallaxImage
                src="/images/about.png"
                alt="GredFlow Team"
                fill
                className="h-[400px] w-full rounded-lg shadow-lg " 
                speed={0.05}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-16 md:py-24 bg-white overflow-hidden w-full mx-auto">
        <div className="container px-4 md:px-6 w-full mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2
              className={cn(
                "text-3xl font-bold tracking-tighter md:text-4xl",
                storyInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
              )}
            >
              Our Story
            </h2>
            <div
              className={cn(
                "w-20 h-1 bg-[#4CAF50] my-4",
                storyInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
              )}
              style={{ animationDelay: "0.1s" }}
            ></div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div
              className={cn(
                "order-2 lg:order-1",
                storyInView ? "animate-zoom-in-fade-up" : "opacity-0 translate-y-4 scale-95",
              )}
              style={{ animationDelay: "0.2s" }}
            >
              <ParallaxImage
                src="/images/our-story.jpeg"
                alt="GredFlow Studio"
                fill
                className="h-[400px] w-full rounded-lg shadow-lg"
                speed={0.08}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3
                className={cn(
                  "text-2xl font-bold mb-4",
                  storyInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
                )}
                style={{ animationDelay: "0.3s" }}
              >
                From Passion to Purpose
              </h3>
              <p
                className={cn("text-[#333333]/80 mb-4", storyInView ? "animate-fade-in-up" : "opacity-0 translate-y-4")}
                style={{ animationDelay: "0.4s" }}
              >
                Founded in 2015, GredFlow began as a small design studio with a big vision: to create designs that not
                only look beautiful but also drive real business results.
              </p>
              <p
                className={cn("text-[#333333]/80 mb-4", storyInView ? "animate-fade-in-up" : "opacity-0 translate-y-4")}
                style={{ animationDelay: "0.5s" }}
              >
                Our founder, Alex Chen, started the company after years of working in corporate design agencies, where
                creativity was often sacrificed for convention. Alex believed there was a better way—a way to balance
                artistic expression with strategic thinking.
              </p>
              <p
                className={cn("text-[#333333]/80", storyInView ? "animate-fade-in-up" : "opacity-0 translate-y-4")}
                style={{ animationDelay: "0.6s" }}
              >
                Today, GredFlow has grown into a team of 15 talented designers, strategists, and project managers, all
                united by a shared passion for exceptional design and client success. We've worked with over 100 clients
                across various industries, helping them stand out in increasingly competitive markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-16 md:py-24 bg-[#D4ECD5]/30 overflow-hidden w-full mx-auto">
        <div className="container px-4 md:px-6 w-full mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2
              className={cn(
                "text-3xl font-bold tracking-tighter md:text-4xl",
                valuesInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
              )}
            >
              Our Values
            </h2>
            <div
              className={cn(
                "w-20 h-1 bg-[#4CAF50] my-4",
                valuesInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
              )}
              style={{ animationDelay: "0.1s" }}
            ></div>
            <p
              className={cn(
                "text-lg text-[#333333]/80 max-w-[800px]",
                valuesInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
              )}
              style={{ animationDelay: "0.2s" }}
            >
              These core principles guide everything we do at GredFlow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="h-10 w-10" />,
                title: "Creativity",
                description: "We push boundaries and think outside the box to deliver unique design solutions.",
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Collaboration",
                description: "We work closely with our clients, treating their goals as our own.",
              },
              {
                icon: <Award className="h-10 w-10" />,
                title: "Excellence",
                description: "We strive for perfection in every pixel, every color, and every design element.",
              },
              {
                icon: <Clock className="h-10 w-10" />,
                title: "Reliability",
                description: "We deliver on time, every time, without compromising on quality.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className={cn(
                  "bg-white border border-[#D4ECD5] group hover:scale-[1.02] hover:shadow-xl hover:rotate-1 transition-all duration-300 ease-out", // Added hover:rotate-1
                  valuesInView ? "animate-zoom-in-fade-up" : "opacity-0 translate-y-4 scale-95",
                )}
                style={{ animationDelay: valuesInView ? `${index * 0.1 + 0.3}s` : "0s" }}
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 text-[#4CAF50] group-hover:text-[#FF6347] transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-[#333333]/80">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-16 md:py-24 bg-white overflow-hidden w-full mx-auto">
        <div className="container px-4 md:px-6 w-full mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2
              className={cn(
                "text-3xl font-bold tracking-tighter md:text-4xl",
                teamInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
              )}
            >
              Meet Our Team
            </h2>
            <div
              className={cn(
                "w-20 h-1 bg-[#4CAF50] my-4",
                teamInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
              )}
              style={{ animationDelay: "0.1s" }}
            ></div>
            <p
              className={cn(
                "text-lg text-[#333333]/80 max-w-[800px]",
                teamInView ? "animate-fade-in-up" : "opacity-0 translate-y-4",
              )}
              style={{ animationDelay: "0.2s" }}
            >
              The talented individuals who bring creativity and expertise to every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {[
              {
                name: "Alex Chen",
                role: "Founder & Creative Director",
                image: "/images/team/alex-chen.jpeg", // Updated image source
              },
              {
                name: "Jessica Williams",
                role: "Senior Brand Designer",
                image: "/images/team/jessica-williams.jpeg", // Updated image source
              },
              {
                name: "David Rodriguez",
                role: "UI/UX Design Lead",
                image: "/images/team/david-rodriguez.jpeg", // Updated image source
              },
              {
                name: "Emma Thompson",
                role: "Illustration Specialist",
                image: "/images/team/emma-thompson.jpeg", // Updated image source
              },
              {
                name: "Michael Lee",
                role: "Web Design Lead",
                image: "/images/team/michael-lee.jpeg", // Updated image source
              },
              {
                name: "Sophia Patel",
                role: "Project Manager",
                image: "/images/team/sophia-patel.jpeg", // Updated image source
              },
            ].map((member, index) => (
              <Card
                key={index}
                className={cn(
                  "bg-white border border-[#D4ECD5] overflow-hidden group hover:scale-[1.02] hover:shadow-xl object-cover transition-all duration-300 ease-out h-fit",
                  teamInView ? "animate-zoom-in-fade-up" : "opacity-0 translate-y-4 scale-95",
                )}
                style={{ animationDelay: teamInView ? `${index * 0.1 + 0.3}s` : "0s" }}
              >
                <CardContent className="p-0">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg border-2 border-[#4CAF50]/20">
                    <Image 
                      src={member.image || "/placeholder.svg"} 
                      alt={member.name} 
                      fill
                      style={{ objectFit: 'cover' }}
                      className="w-full h-full" 
                      sizes="100vw"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-[#333333]/80">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
