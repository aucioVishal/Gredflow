import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-10 overflow-hidden bg-[#F1F9F1] w-full mx-auto">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#D4ECD5] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#FFEEEB] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-medium animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#FFCBC2] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-slow animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-[#D4ECD5] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-medium animation-delay-6000"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10 w-full mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block px-4 py-1.5 text-sm font-medium bg-[#D4ECD5] text-[#4CAF50] rounded-full mb-2 animate-fade-in-up w-fit">
              Creative Design Studio
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter animate-fade-in-up-1">
              Bringing Your <span className="gradient-text">Creative Vision</span> to Life
            </h1>
            <p className="text-lg text-[#333333]/80 md:text-xl max-w-[600px] animate-fade-in-up-2">
              We transform ideas into stunning visual experiences that captivate, inspire, and drive results for your
              brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4 animate-fade-in-up-3">
              <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white">
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50]/40">
                Get in Touch
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4 animate-fade-in-up-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#F1F9F1] bg-[#D4ECD5] flex items-center justify-center text-xs font-medium text-[#4CAF50]"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#333333]/70">
                <span className="font-medium text-[#333333]">100+</span> satisfied clients
              </p>
            </div>
          </div>
          <div className="relative lg:ml-auto h-[400px] md:h-[500px] flex items-center justify-center">
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl animate-fade-in-up-2 bg-white border border-[#D4ECD5]">
              <Image
                src="/images/hero-abstract-design.png"
                alt="Abstract graphic design concept representing creativity"
                width={1920} // Explicit width for Next.js Image optimization
                height={1080} // Explicit height for Next.js Image optimization
                className="object-cover w-full h-full" // Ensure it covers the container
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F1F9F1] to-transparent"></div>
    </section>
  )
}
