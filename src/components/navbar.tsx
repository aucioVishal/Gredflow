"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 mx-auto",
        scrolled ? "bg-[#F1F9F1]/90 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between w-full mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/gredflow-logo.png"
            alt="GredFlow Logo"
            width={120} // Adjust width as needed
            height={32} // Adjust height as needed
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#4CAF50]",
                pathname === item.href ? "text-[#4CAF50]" : "text-[#333333]",
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white">Get a Quote</Button>
        </nav>
        <button className="flex md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6 text-[#333333]" /> : <Menu className="h-6 w-6 text-[#333333]" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="container flex flex-col space-y-3 py-4 bg-[#F1F9F1]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#4CAF50] py-2",
                  pathname === item.href ? "text-[#4CAF50]" : "text-[#333333]",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white w-full">Get a Quote</Button>
          </div>
        </div>
      )}
    </header>
  )
}
