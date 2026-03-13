"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const capabilities = [
  "Civil Construction Works",
  "MEP Contracting and Fire Fighting",
  "Heavy Equipment Rental",
  "Diesel Supply and Distribution",
  "Automotive Tyres and Batteries",
  "Steel Fabrication and Manufacturing",
  "Skilled Manpower Supply",
  "Warehouse Racking Systems",
  "Industrial Tools and Trading",
]

export function AboutPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000"
                alt="TRI-AXIS Industrial Operations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 lg:-right-8 bg-card p-6 rounded-2xl shadow-xl border border-border"
            >
              <div className="text-4xl font-bold text-accent">15+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">About TRI-AXIS</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              A Diversified Industrial Service Provider
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Tri Axis Company is a diversified industrial service provider delivering integrated solutions across construction, engineering, trading and industrial support services.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The company supports infrastructure, commercial and industrial sectors with reliable execution and operational excellence.
            </p>

            {/* Capabilities Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{capability}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
