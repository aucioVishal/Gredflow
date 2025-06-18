"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Service } from "@/lib/services-data.tsx"

interface ServiceCardProps {
  service: Service
  index: number
  isInView: boolean
}

export function ServiceCard({ service, index, isInView }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={cn("relative", service.featured ? "md:col-span-2" : "", isInView ? "animate-fade-in-up" : "opacity-0")}
      style={{ animationDelay: isInView ? `${index * 0.1}s` : "0s" }}
    >
      <Card
        className={cn(
          "group border border-[#D4ECD5] bg-white hover:shadow-xl transition-all duration-300",
          isExpanded ? "scale-105 z-10 shadow-2xl" : "hover:-translate-y-2",
        )}
      >
        <CardHeader className={cn("pb-4", service.featured ? "md:flex md:items-start md:gap-6" : "")}>
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#D4ECD5] group-hover:bg-[#4CAF50] transition-colors duration-300 mb-4 mx-auto md:mx-0">
            <div className="text-[#4CAF50] group-hover:text-white transition-colors duration-300">{service.icon}</div>
          </div>
          <div className={cn(service.featured ? "md:flex-1" : "")}>
            <CardTitle
              className={cn("text-xl font-bold gradient-text", service.featured ? "md:text-2xl" : "text-center")}
            >
              {service.title}
            </CardTitle>
            {service.featured && (
              <CardDescription className="mt-2 text-[#333333]/80 hidden md:block">
                {service.description}
              </CardDescription>
            )}
          </div>
        </CardHeader>
        <CardContent className={cn(service.featured ? "" : "text-center")}>
          {!service.featured && (
            <CardDescription className="text-[#333333]/80 mb-4">{service.description}</CardDescription>
          )}

          {isExpanded && (
            <div className="mt-4 animate-fade-in-up">
              <p className="text-[#333333]/90 mb-4">{service.longDescription}</p>
              {service.benefits && (
                <div className="mt-4">
                  <h4 className="font-medium mb-2 text-[#4CAF50]">Key Benefits</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-[#4CAF50] mr-2 mt-1 shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="mt-4 text-[#4CAF50] hover:text-[#4CAF50]/80 hover:bg-[#D4ECD5]/50 p-0 h-auto"
                onClick={() => setIsExpanded(false)}
              >
                <X className="h-4 w-4 mr-1" /> Close
              </Button>
            </div>
          )}

          {!isExpanded && (
            <Button
              variant="ghost"
              size="sm"
              className="text-[#4CAF50] hover:text-[#4CAF50]/80 hover:bg-[#D4ECD5]/50"
              onClick={() => setIsExpanded(true)}
            >
              Learn More <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Connecting lines between cards (visible on larger screens) */}
      {index < 5 && (
        <div
          className="hidden lg:block absolute z-0"
          style={{
            top: index % 2 === 0 ? "50%" : "30%",
            [index % 3 === 0 ? "right" : "left"]: "-20px",
            width: "40px",
            height: "2px",
            background: "linear-gradient(90deg, #4CAF50, transparent)",
          }}
        />
      )}
    </div>
  )
}
