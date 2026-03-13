"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta-section"
import { Building2, Wrench, Truck, Fuel, Battery, Factory, Users, Package, Hammer, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "civil",
    icon: Building2,
    title: "Civil Construction Works",
    description: "Engineering procurement construction solutions including foundations, infrastructure and structural works.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
    features: [
      "Foundation engineering and construction",
      "Structural works and building construction",
      "Infrastructure development",
      "Project management and supervision",
      "Quality control and assurance",
    ],
  },
  {
    id: "mep",
    icon: Wrench,
    title: "MEP Contracting and Fire Fighting",
    description: "Electrical installation, HVAC systems, plumbing networks, fire protection systems and maintenance.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200",
    features: [
      "Electrical systems installation",
      "HVAC system design and installation",
      "Plumbing and sanitary networks",
      "Fire protection and suppression systems",
      "Preventive maintenance services",
    ],
  },
  {
    id: "equipment",
    icon: Truck,
    title: "Heavy Equipment Rental",
    description: "Excavators, cranes, forklifts, graders, bulldozers, boom lifts and construction machinery.",
    image: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?q=80&w=1200",
    features: [
      "Excavators and loaders",
      "Mobile and tower cranes",
      "Forklifts and material handlers",
      "Graders and bulldozers",
      "Boom lifts and aerial platforms",
    ],
  },
  {
    id: "diesel",
    icon: Fuel,
    title: "Diesel Supply and Distribution",
    description: "Bulk diesel supply for construction sites, fleet operators and industrial projects.",
    image: "https://images.unsplash.com/photo-1611527661352-e6d3e3f7dc5e?q=80&w=1200",
    features: [
      "Bulk diesel delivery",
      "On-site fuel storage solutions",
      "Fleet fueling services",
      "Quality certified fuel products",
      "Timely and reliable delivery",
    ],
  },
  {
    id: "automotive",
    icon: Battery,
    title: "Automotive Tyres, Batteries and Filters",
    description: "Supply of high performance tyres, batteries and filters for heavy equipment and trucks.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200",
    features: [
      "Heavy equipment tyres",
      "Industrial batteries",
      "Air and oil filters",
      "Truck and vehicle parts",
      "OEM and aftermarket options",
    ],
  },
  {
    id: "steel",
    icon: Factory,
    title: "Steel Fabrication and Manufacturing",
    description: "Custom fabrication, welding, structural steel works and CNC machining.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200",
    features: [
      "Custom steel fabrication",
      "Structural steel works",
      "Precision welding services",
      "CNC machining and cutting",
      "Industrial metalwork",
    ],
  },
  {
    id: "manpower",
    icon: Users,
    title: "Skilled Manpower Supply",
    description: "Certified welders, electricians, riggers, scaffolders, technicians and operators.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
    features: [
      "Certified welders and fitters",
      "Electricians and technicians",
      "Riggers and crane operators",
      "Scaffolders and safety officers",
      "Project-based staffing solutions",
    ],
  },
  {
    id: "racking",
    icon: Package,
    title: "Racking and Warehouse Systems",
    description: "Industrial pallet racking, shelving systems and warehouse storage solutions.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200",
    features: [
      "Pallet racking systems",
      "Industrial shelving solutions",
      "Warehouse layout design",
      "Storage optimization",
      "Installation and maintenance",
    ],
  },
  {
    id: "trading",
    icon: Hammer,
    title: "Industrial Trading and Tools Supply",
    description: "Instrumentation tools, pumps, welding machines, PPE, building materials and industrial equipment.",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=1200",
    features: [
      "Instrumentation and tools",
      "Pumps and compressors",
      "Welding equipment",
      "Personal protective equipment",
      "Building materials",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-primary">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2940"
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
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Do</span>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight">
                Our Services
              </h1>
              <p className="mt-6 text-xl text-primary-foreground/80 leading-relaxed">
                Comprehensive industrial and construction support services tailored to meet your project requirements with excellence and reliability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                    </div>
                    <div className="absolute -bottom-6 -left-6 lg:-left-8 w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shadow-xl">
                      <service.icon className="w-10 h-10 text-accent-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-6 space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8">
                      <Button asChild className="bg-primary hover:bg-primary/90">
                        <Link href="/contact?service=${service.id}">
                          Request Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
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
