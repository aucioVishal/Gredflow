"use client"

import Link from "next/link"
import { Phone, MessageCircle } from "lucide-react" // Using MessageCircle for WhatsApp as it's a common chat icon
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function FloatingContactButtons() {
  const indianPhoneNumber = "+919876543210" // Placeholder Indian number
  const whatsappNumber = "919876543210" // WhatsApp number without '+'

  return (
    <>
      {/* Call Icon */}
      <Link href={`tel:${indianPhoneNumber}`} aria-label="Call us" className="fixed bottom-4 left-4 z-50">
        <Button
          size="icon"
          className={cn(
            "h-14 w-14 rounded-full shadow-lg transition-all duration-300",
            "bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white",
            "hover:scale-110 active:scale-95",
          )}
        >
          <Phone className="h-6 w-6" />
        </Button>
      </Link>

      {/* WhatsApp Icon */}
      <Link
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-4 right-4 z-50"
      >
        <Button
          size="icon"
          className={cn(
            "h-14 w-14 rounded-full shadow-lg transition-all duration-300",
            "bg-[#060E06] hover:bg-[#060E06]/90 text-white", // Using a dark color for WhatsApp, as per GredFlow palette
            "hover:scale-110 active:scale-95",
          )}
        >
          <MessageCircle className="h-6 w-6" /> {/* Using MessageCircle for a generic chat icon */}
        </Button>
      </Link>
    </>
  )
}
