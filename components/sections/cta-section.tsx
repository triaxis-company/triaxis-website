"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-primary p-12 lg:p-16"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight">
                Ready to Start Your Next Project?
              </h2>

              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Partner with TRI-AXIS for reliable, cost-effective industrial and construction solutions. Let&apos;s discuss how we can support your business goals.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                {/* Get Quote */}
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Link href="/contact?quote=true">
                    Get a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                {/* ✅ FIXED CONTACT BUTTON */}
<Button
  asChild
  size="lg"
  className="bg-white text-gray-900 border border-gray-300 hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl"

>
  <Link href="/contact">
    Contact Us
  </Link>
</Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/70">Call Us</div>
                  <div className="text-lg font-semibold text-primary-foreground">+966 50 909 0476</div>
                  <div className="text-lg font-semibold text-primary-foreground">+966 57 820 8288</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/70">Email Us</div>
                  <div className="text-lg font-semibold text-primary-foreground">sales@triaxis.sa</div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
} 