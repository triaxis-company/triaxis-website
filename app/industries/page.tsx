"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta-section"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const industries = [
  {
    id: "construction",
    title: "Construction",
    description: "Supporting large-scale construction projects with integrated civil works, MEP solutions, heavy equipment, and skilled manpower deployment.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
    services: ["Civil Construction", "MEP Contracting", "Heavy Equipment Rental", "Skilled Manpower"],
  },
  {
    id: "oil-gas",
    title: "Oil and Gas",
    description: "Providing specialized industrial support services to the oil and gas sector, including fabrication, equipment supply, and technical manpower.",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=1200",
    services: ["Steel Fabrication", "Diesel Supply", "Industrial Tools", "Certified Welders"],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    description: "Delivering comprehensive solutions for infrastructure development projects including roads, utilities, and public facilities.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200",
    services: ["Civil Works", "Heavy Equipment", "MEP Systems", "Project Staffing"],
  },
  {
    id: "manufacturing",
    title: "Industrial Manufacturing",
    description: "Supporting manufacturing facilities with equipment rental, maintenance services, and industrial trading solutions.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200",
    services: ["Steel Fabrication", "Equipment Rental", "Industrial Tools", "Maintenance Services"],
  },
  {
    id: "logistics",
    title: "Logistics and Warehousing",
    description: "Providing warehouse infrastructure solutions including racking systems, storage optimization, and material handling equipment.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
    services: ["Racking Systems", "Warehouse Design", "Material Handling", "Storage Solutions"],
  },
  {
    id: "commercial",
    title: "Commercial Developments",
    description: "Supporting commercial building projects with construction, MEP, and finishing services for retail, office, and hospitality sectors.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
    services: ["Building Construction", "MEP Installation", "Fire Fighting Systems", "Interior Works"],
  },
]

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-primary">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2940"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Industries</span>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight">
                Industries We Serve
              </h1>
              <p className="mt-6 text-xl text-primary-foreground/80 leading-relaxed">
                Delivering excellence across diverse sectors with specialized expertise and reliable solutions tailored to each industry&apos;s unique requirements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  id={industry.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative p-8 -mt-16">
                    <h2 className="text-2xl font-bold text-card-foreground mb-3">
                      {industry.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {industry.description}
                    </p>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {industry.services.map((service) => (
                        <span
                          key={service}
                          className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <Button asChild variant="outline" className="group/btn">
                      <Link href="/contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
