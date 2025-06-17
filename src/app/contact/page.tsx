import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | GredFlow",
  description:
    "Get in touch with GredFlow for your graphic design needs. We're here to help bring your creative vision to life.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen w-full mx-auto">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#F1F9F1] w-full mx-auto">
        <div className="container px-4 md:px-6 w-full mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tighter md:text-5xl mb-4">
              Get in <span className="text-[#4CAF50]">Touch</span>
            </h1>
            <p className="text-lg text-[#333333]/80 max-w-[800px]">
              Have a project in mind or want to learn more about our services? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white w-full mx-auto">
        <div className="container px-4 md:px-6 w-full mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
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
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone (Optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-3 py-2 border border-[#D4ECD5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-3 py-2 border border-[#D4ECD5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                    placeholder="Subject of your message"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-3 py-2 border border-[#D4ECD5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] min-h-[150px]"
                    placeholder="Tell us about your project or inquiry"
                    required
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white">
                  Send Message
                </Button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="grid gap-6">
                <Card className="border border-[#D4ECD5]">
                  <CardContent className="p-6 flex items-start">
                    <MapPin className="h-6 w-6 text-[#4CAF50] mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Our Location</h3>
                      <p className="text-[#333333]/80">123 Design Street, Creative City, 12345</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border border-[#D4ECD5]">
                  <CardContent className="p-6 flex items-start">
                    <Phone className="h-6 w-6 text-[#4CAF50] mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-[#333333]/80">+1 (555) 123-4567</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border border-[#D4ECD5]">
                  <CardContent className="p-6 flex items-start">
                    <Mail className="h-6 w-6 text-[#4CAF50] mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-[#333333]/80">hello@gredflow.com</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border border-[#D4ECD5]">
                  <CardContent className="p-6 flex items-start">
                    <Clock className="h-6 w-6 text-[#4CAF50] mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-[#333333]/80">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-[#333333]/80">Saturday: 10:00 AM - 2:00 PM</p>
                      <p className="text-[#333333]/80">Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-[#F1F9F1] w-full mx-auto">
        <div className="container px-4 md:px-6 w-full mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Find Us</h2>
            <div className="w-20 h-1 bg-[#4CAF50] my-4"></div>
            <p className="text-lg text-[#333333]/80 max-w-[800px]">
              Visit our studio to discuss your project in person.
            </p>
          </div>
          <div className="w-full h-[400px] bg-[#D4ECD5] rounded-lg flex items-center justify-center">
            <p className="text-[#333333]">Map would be embedded here</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white w-full mx-auto">
        <div className="container px-4 md:px-6 w-full mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-[#4CAF50] my-4"></div>
            <p className="text-lg text-[#333333]/80 max-w-[800px]">
              Find answers to common questions about our services and process.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            {[
              {
                question: "What is your typical project timeline?",
                answer:
                  "Project timelines vary depending on scope and complexity. A basic logo design might take 1-2 weeks, while a comprehensive brand identity could take 4-6 weeks. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "How does your design process work?",
                answer:
                  "Our design process typically includes discovery, concept development, design refinement, and finalization. We maintain open communication throughout and provide regular updates to ensure your vision is being realized.",
              },
              {
                question: "Do you offer revisions to your designs?",
                answer:
                  "Yes, all our design packages include revision rounds. The number of revisions depends on the package you choose. We work closely with you to ensure you're completely satisfied with the final result.",
              },
              {
                question: "What information do you need to start a project?",
                answer:
                  "To get started, we need to understand your brand, target audience, project goals, and any design preferences. We'll provide a detailed questionnaire and schedule a kickoff meeting to gather all necessary information.",
              },
              {
                question: "Do you offer ongoing design support?",
                answer:
                  "Yes, we offer retainer packages for clients who need ongoing design support. These packages can be customized based on your specific needs and frequency of design work required.",
              },
              {
                question: "What are your payment terms?",
                answer:
                  "We typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we may establish a payment schedule with milestones. We accept credit cards, bank transfers, and PayPal.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border border-[#D4ECD5]">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <MessageSquare className="h-6 w-6 text-[#4CAF50] mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-[#333333]/80">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-[#333333]/80 mb-4">Still have questions? We're here to help!</p>
            <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white">Contact Us</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
