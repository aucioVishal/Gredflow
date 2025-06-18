import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F1F9F1] w-full mx-auto">
      <div className="container px-4 md:px-6 w-full mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
              Ready to Elevate Your Brand with Stunning Design?
            </h2>
            <p className="text-lg text-[#333333]/80 mb-6">
              Let&apos;s collaborate to create visually compelling designs that help your brand stand out and connect with
              your audience.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Custom design solutions tailored to your brand",
                "Collaborative approach to understand your vision",
                "Timely delivery and exceptional customer service",
                "Ongoing support and design iterations",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#4CAF50] mr-2 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50]/10">
                View Pricing
              </Button>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg border border-[#D4ECD5] shadow-sm">
            <h3 className="text-xl font-bold mb-4">Request a Free Consultation</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-3 py-2 border border-[#D4ECD5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border border-[#D4ECD5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium">
                  Service Interested In
                </label>
                <select
                  id="service"
                  className="w-full px-3 py-2 border border-[#D4ECD5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="branding">Brand Identity</option>
                  <option value="web">Web Design</option>
                  <option value="print">Print Design</option>
                  <option value="packaging">Packaging Design</option>
                  <option value="illustration">Illustration</option>
                  <option value="ui-ux">UI/UX Design</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border border-[#D4ECD5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] min-h-[120px]"
                  placeholder="Tell us about your project"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
