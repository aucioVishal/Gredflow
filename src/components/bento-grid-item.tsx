"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface BentoGridItemProps {
  className?: string
  title: string
  description: string
  header?: React.ReactNode // For images or complex UI
  icon?: React.ReactNode // For simple icons
  link?: string
  animationDelay?: string // For staggered animations
  isInView?: boolean // To trigger animations on scroll
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
  link,
  animationDelay,
  isInView,
}: BentoGridItemProps) {
  return (
    <Card
      className={cn(
      
        "group row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-xl border border-[#D4ECD5] bg-white p-6 shadow-sm transition-all duration-300 ease-out",
        "hover:scale-[1.01] hover:shadow-lg", // Subtle hover effect
        isInView ? "animate-zoom-in-fade-up" : "opacity-0 translate-y-4 scale-95",
        className,
      )}
      style={{ animationDelay: isInView ? animationDelay : "0s" }}
    >
      {header && <div className="w-full h-auto rounded-md overflow-hidden">{header}</div>}
      <div className="flex-1">
        {icon && (
          <div className="mb-4 text-[#4CAF50] group-hover:text-[#FF6347] transition-colors duration-300">{icon}</div>
        )}
        <h3 className="text-xl font-bold text-[#333333] mb-2">{title}</h3>
        <p className="text-sm text-[#333333]/80">{description}</p>
      </div>
      {link && (
        <Link
          href={link}
          className="flex items-center text-[#4CAF50] hover:text-[#4CAF50]/80 transition-colors duration-300"
        >
          Learn More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      )}
    </Card>
  )
}
