"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Building2, Wrench, Truck, Fuel, Battery, Factory, Users, Package, Hammer } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Building2,
    title: "Civil Construction Works",
    description: "Engineering procurement construction solutions including foundations, infrastructure and structural works.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800",
    href: "/services#civil",
  },
  {
    icon: Wrench,
    title: "MEP Contracting & Fire Fighting",
    description: "Electrical installation, HVAC systems, plumbing networks, fire protection systems and maintenance.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800",
    href: "/services#mep",
  },
  {
    icon: Truck,
    title: "Heavy Equipment Rental",
    description: "Excavators, cranes, forklifts, graders, bulldozers, boom lifts and construction machinery.",
    image: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?q=80&w=800",
    href: "/services#equipment",
  },
  {
    icon: Fuel,
    title: "Diesel Supply & Distribution",
    description: "Bulk diesel supply for construction sites, fleet operators and industrial projects.",
    image: "https://images.unsplash.com/photo-1611527661352-e6d3e3f7dc5e?q=80&w=800",
    href: "/services#diesel",
  },
  {
    icon: Battery,
    title: "Automotive Parts Supply",
    description: "Supply of high performance tyres, batteries and filters for heavy equipment and trucks.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
    href: "/services#automotive",
  },
  {
    icon: Factory,
    title: "Steel Fabrication",
    description: "Custom fabrication, welding, structural steel works and CNC machining.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800",
    href: "/services#steel",
  },
  {
    icon: Users,
    title: "Skilled Manpower Supply",
    description: "Certified welders, electricians, riggers, scaffolders, technicians and operators.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800",
    href: "/services#manpower",
  },
  {
    icon: Package,
    title: "Racking & Warehouse Systems",
    description: "Industrial pallet racking, shelving systems and warehouse storage solutions.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800",
    href: "/services#racking",
  },
  {
    icon: Hammer,
    title: "Industrial Trading & Tools",
    description: "Instrumentation tools, pumps, welding machines, PPE, building materials and equipment.",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=800",
    href: "/services#trading",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function ServicesPreview() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive industrial and construction support services tailored to meet your project requirements.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
