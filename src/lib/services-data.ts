import { Palette, Globe, FileImage, Package, PenTool, Layers } from "lucide-react"
import type React from "react"

export interface Service {
  title: string
  description: string
  icon: React.ReactNode
  featured?: boolean
  longDescription?: string
  benefits?: string[]
}

export const services: Service[] = [
  {
    title: "Brand Identity",
    description:
      "Create a distinctive brand identity that resonates with your audience and sets you apart from competitors.",
    icon: <Palette className="h-10 w-10" />,
    featured: true,
    longDescription:
      "We develop comprehensive brand identities that capture your company's essence and connect with your target audience. From logo design to brand guidelines, we ensure consistency across all touchpoints.",
    benefits: [
      "Logo Design & Development",
      "Brand Guidelines",
      "Color Palette Selection",
      "Typography Selection",
      "Brand Voice & Messaging",
    ],
  },
  {
    title: "Web Design",
    description: "Stunning, responsive websites that provide exceptional user experiences across all devices.",
    icon: <Globe className="h-10 w-10" />,
    featured: true,
    longDescription:
      "Our web design services focus on creating beautiful, functional websites that drive results. We combine aesthetics with user experience to ensure your site stands out and performs well.",
    benefits: [
      "Responsive Design",
      "User Experience (UX) Design",
      "Content Strategy",
      "SEO Optimization",
      "Performance Optimization",
    ],
  },
  {
    title: "Print Design",
    description:
      "Eye-catching print materials that effectively communicate your message and enhance brand recognition.",
    icon: <FileImage className="h-10 w-10" />,
    longDescription:
      "From business cards to brochures, our print design services ensure your physical marketing materials make a lasting impression and reinforce your brand identity.",
    benefits: [
      "Business Cards & Stationery",
      "Brochures & Flyers",
      "Posters & Banners",
      "Annual Reports",
      "Direct Mail Campaigns",
    ],
  },
  {
    title: "Packaging Design",
    description: "Innovative packaging solutions that protect your product and create a memorable unboxing experience.",
    icon: <Package className="h-10 w-10" />,
    longDescription:
      "We create packaging designs that not only protect your products but also tell your brand story and create an unforgettable unboxing experience for your customers.",
    benefits: [
      "Product Packaging",
      "Label Design",
      "Box & Container Design",
      "Sustainable Packaging Solutions",
      "Retail Display Design",
    ],
  },
  {
    title: "Illustration",
    description: "Custom illustrations that bring your ideas to life and add a unique visual element to your brand.",
    icon: <PenTool className="h-10 w-10" />,
    longDescription:
      "Our custom illustration services add personality and uniqueness to your brand. We create original artwork that communicates your message in a visually compelling way.",
    benefits: [
      "Custom Character Design",
      "Digital Illustrations",
      "Icon Sets",
      "Editorial Illustrations",
      "Infographics",
    ],
  },
  {
    title: "UI/UX Design",
    description: "Intuitive user interfaces and experiences that guide users through your digital products seamlessly.",
    icon: <Layers className="h-10 w-10" />,
    featured: true,
    longDescription:
      "We design intuitive, user-friendly interfaces that make digital interactions a pleasure. Our UI/UX design services focus on creating seamless experiences that keep users engaged.",
    benefits: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "User Flow Mapping",
      "Interaction Design",
      "Usability Testing",
    ],
  },
]
