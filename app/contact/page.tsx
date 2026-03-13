"use client"

import { useState, Suspense } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react"

const services = [
  "Civil Construction Works",
  "MEP Contracting and Fire Fighting",
  "Heavy Equipment Rental",
  "Diesel Supply and Distribution",
  "Automotive Tyres, Batteries and Filters",
  "Steel Fabrication and Manufacturing",
  "Skilled Manpower Supply",
  "Racking and Warehouse Systems",
  "Industrial Trading and Tools Supply",
  "Other",
]

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Dammam", "Eastern Province", "Kingdom of Saudi Arabia"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+966 50 909 0476", "+966 57 820 8288"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["sales@triaxis.sa"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Saturday - Thursday", "8:00 AM - 6:00 PM"],
  },
]

function ContactForm() {
  const searchParams = useSearchParams()
  const isQuote = searchParams.get("quote") === "true"
  
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setIsSubmitted(true)
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      })
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 bg-accent/10 rounded-2xl text-center"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-accent-foreground" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">
          Thank you for contacting TRI-AXIS. We will get back to you within 24 hours.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 bg-primary hover:bg-primary/90"
        >
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Full Name *
          </label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
            Company
          </label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Enter your company name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Phone Number *
          </label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email *
          </label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
          Service Required {isQuote && "*"}
        </label>
        <select
          id="service"
          required={isQuote}
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={isQuote ? "Please describe your project requirements..." : "How can we help you?"}
          className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
        />
      </div>

      {error && (
        <p className="text-destructive text-sm">{error}</p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
      >
        {isSubmitting ? "Sending..." : isQuote ? "Request Quote" : "Send Message"}
      </Button>
    </form>
  )
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-primary">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940"
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
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight">
                Contact Us
              </h1>
              <p className="mt-6 text-xl text-primary-foreground/80 leading-relaxed">
                Have a project in mind? Get in touch with our team to discuss how we can support your industrial and construction needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-1 space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    {contactInfo.map((item) => (
                      <div key={item.title} className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          {item.details.map((detail) => (
                            <p key={detail} className="text-muted-foreground text-sm">{detail}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Company Registration Info */}
                <div className="p-6 bg-secondary rounded-2xl">
                  <h3 className="font-semibold text-foreground mb-4">Company Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">CR Number:</span>
                      <span className="font-medium text-foreground">7052609323</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">VAT Number:</span>
                      <span className="font-medium text-foreground">314418041800003</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2 p-8 bg-card rounded-2xl border border-border"
              >
                <h2 className="text-2xl font-bold text-card-foreground mb-6">Send Us a Message</h2>
                <Suspense fallback={<div className="text-center py-8 text-muted-foreground">Loading form...</div>}>
                  <ContactForm />
                </Suspense>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114912.42147741517!2d49.95399684999999!3d26.4207138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e8a1f03cb019%3A0xa20b5ffe490e7c3f!2sDammam%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TRI-AXIS Location - Dammam, Saudi Arabia"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
