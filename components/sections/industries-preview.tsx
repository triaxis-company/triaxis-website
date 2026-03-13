"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const industries = [
  {
    name: "Construction",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800",
    href: "/industries#construction",
  },
  {
    name: "Oil and Gas",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=800",
    href: "/industries#oil-gas",
  },
  {
    name: "Infrastructure",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800",
    href: "/industries#infrastructure",
  },
  {
    name: "Industrial Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
    href: "/industries#manufacturing",
  },
  {
    name: "Logistics & Warehousing",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
    href: "/industries#logistics",
  },
  {
    name: "Commercial Developments",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
    href: "/industries#commercial",
  },
]

export function IndustriesPreview() {
  return (
    <section className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Industries</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight">
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Delivering excellence across diverse sectors with specialized expertise and reliable solutions.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={industry.href}
                className="group relative block aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-xl font-semibold text-primary-foreground">
                      {industry.name}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center transition-transform group-hover:translate-x-1">
                      <ArrowRight className="w-5 h-5 text-accent-foreground" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
