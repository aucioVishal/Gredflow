"use client"

import Image from "next/image"
import { useRef, useEffect, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  speed?: number // How fast the parallax effect is (e.g., 0.1 for slow, 0.5 for faster)
  style?: React.CSSProperties
}

export function ParallaxImage({ src, alt, className, speed = 0.1, style }: ParallaxImageProps) {
  const imageRef = useRef<HTMLDivElement>(null)
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = useCallback(() => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      // Calculate how much the element is in the viewport
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = viewportHeight / 2
      const distanceToCenter = elementCenter - viewportCenter

      // Apply parallax based on distance from center
      setOffsetY(distanceToCenter * speed * -1) // Multiply by -1 to move opposite to scroll
    }
  }, [speed])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Set initial position
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, handleScroll])

  return (
    <div ref={imageRef} className={cn("relative overflow-hidden rounded-lg border-2 border-[#4CAF50]/20 w-full h-full min-h-[400px]", className)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        style={{ ...style, transform: `translateY(${offsetY}px)` }}
        className="!w-full !h-full scale-105"
        priority={true}
        sizes="100vw"
      />
    </div>
  )
}
