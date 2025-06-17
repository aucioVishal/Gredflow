"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface PortfolioCardProps {
  project: {
    id: number
    title: string
    category: string
    image: string
    client?: string
    description?: string
  }
  index: number
  isInView: boolean
}

export function PortfolioCard({ project, index, isInView }: PortfolioCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden border-none shadow-md transition-all duration-300 ease-out",
        isInView ? "animate-zoom-in-fade-up" : "opacity-0 translate-y-4 scale-95",
      )}
      style={{ animationDelay: isInView ? `${index * 0.1}s` : "0s" }}
    >
      <CardContent className="p-0">
        <Link href={`/portfolio/${project.id}`} className="block">
          <div className="relative group">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg?height=400&width=600&query=abstract design concept"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 translate-y-full group-hover:translate-y-0 group-hover:animate-slide-in-bottom">
              <div>
                <h3 className="text-white font-bold text-xl">{project.title}</h3>
                <p className="text-white/80 text-sm mt-1 capitalize">{project.category}</p>
              </div>
            </div>
          </div>
        </Link>
        <div className="p-6">
          {project.client && <p className="text-[#4CAF50] text-sm mb-3">Client: {project.client}</p>}
          {project.description && <p className="text-[#333333]/80 text-sm">{project.description}</p>}
          <Link href={`/portfolio/${project.id}`}>
            <Button className="mt-4 bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white w-full">View Project</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
