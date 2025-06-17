import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#D4ECD5] text-[#333333] w-full mx-auto">
      <div className="container py-12 md:py-16 w-auto mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/gredflow-logo.png"
                alt="GredFlow Logo"
                width={120} // Adjust width as needed
                height={32} // Adjust height as needed
              />
            </Link>
            <p className="mt-4 text-sm">
              Creative graphic design studio specializing in brand identity, digital design, and print materials.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-[#333333] hover:text-[#4CAF50]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-[#333333] hover:text-[#4CAF50]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[#333333] hover:text-[#4CAF50]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-[#333333] hover:text-[#4CAF50]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-[#4CAF50]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-[#4CAF50]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-[#4CAF50]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm hover:text-[#4CAF50]">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-[#4CAF50]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/brand-identity" className="text-sm hover:text-[#4CAF50]">
                  Brand Identity
                </Link>
              </li>
              <li>
                <Link href="/services/web-design" className="text-sm hover:text-[#4CAF50]">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services/print-design" className="text-sm hover:text-[#4CAF50]">
                  Print Design
                </Link>
              </li>
              <li>
                <Link href="/services/packaging" className="text-sm hover:text-[#4CAF50]">
                  Packaging Design
                </Link>
              </li>
              <li>
                <Link href="/services/illustration" className="text-sm hover:text-[#4CAF50]">
                  Illustration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-[#4CAF50]" />
                <span className="text-sm">123 Design Street, Creative City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#4CAF50]" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#4CAF50]" />
                <span className="text-sm">hello@gredflow.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-[#4CAF50]/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#333333]">© {new Date().getFullYear()} GredFlow. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link href="/privacy" className="text-sm hover:text-[#4CAF50]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:text-[#4CAF50]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
