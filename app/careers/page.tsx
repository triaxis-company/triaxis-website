"use client"
import PageHero from "@/components/common/PageHero"
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Briefcase, MapPin, Clock, Users, Upload, CheckCircle2 } from "lucide-react"

const positions = [
  {
    id: 1,
    title: "Civil Engineer",
    location: "Dammam, Saudi Arabia",
    type: "Full-time",
    department: "Engineering",
    description: "We are seeking an experienced Civil Engineer to oversee construction projects and ensure quality standards.",
  },
  {
    id: 2,
    title: "MEP Supervisor",
    location: "Dammam, Saudi Arabia",
    type: "Full-time",
    department: "Engineering",
    description: "Join our team as an MEP Supervisor to manage electrical, plumbing, and HVAC installations.",
  },
  {
    id: 3,
    title: "Certified Welder",
    location: "Dammam, Saudi Arabia",
    type: "Full-time",
    department: "Operations",
    description: "Experienced certified welder needed for steel fabrication and industrial welding projects.",
  },
  {
    id: 4,
    title: "Heavy Equipment Operator",
    location: "Dammam, Saudi Arabia",
    type: "Full-time",
    department: "Operations",
    description: "Skilled operators needed for excavators, cranes, and other heavy construction equipment.",
  },
  {
    id: 5,
    title: "Project Manager",
    location: "Dammam, Saudi Arabia",
    type: "Full-time",
    department: "Management",
    description: "Lead and manage construction and industrial projects from inception to completion.",
  },
  {
    id: 6,
    title: "Safety Officer",
    location: "Dammam, Saudi Arabia",
    type: "Full-time",
    department: "HSE",
    description: "Ensure workplace safety compliance and implement safety protocols across all operations.",
  },
]

const benefits = [
  "Competitive salary packages",
  "Health insurance coverage",
  "Professional development opportunities",
  "Safe working environment",
  "Career growth potential",
  "Supportive team culture",
]

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [fileName, setFileName] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const form = e.currentTarget
    const data = new FormData()

    data.append("name", formData.name)
    data.append("email", formData.email)
    data.append("phone", formData.phone)
    data.append("position", formData.position)
    data.append("message", formData.message)

    const fileInput = form.querySelector("#cv") as HTMLInputElement
    if (fileInput?.files?.[0]) {
      data.append("cv", fileInput.files[0])
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      body: data,
    })

    if (res.ok) {
      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", position: "", message: "" })
      setFileName("")
    } else {
      alert("Failed ❌")
    }
  } catch (err) {
    alert("Error ❌")
  }

  setIsSubmitting(false)
}

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-primary">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2940"
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
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Join Our Team</span>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight">
                Careers at TRI-AXIS
              </h1>
              <p className="mt-6 text-xl text-primary-foreground/80 leading-relaxed">
                Build your career with a leading industrial services company. We offer challenging opportunities and professional growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why TRI-AXIS</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                  Work With Us
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  At TRI-AXIS, we believe our people are our greatest asset. We foster a culture of excellence, safety, and continuous learning.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000"
                    alt="Team at Work"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Opportunities</span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                Available Positions
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {positions.map((position, index) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card rounded-2xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-accent" />
                    </div>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      {position.department}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {position.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {position.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {position.type}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Apply Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Apply Now</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                Upload Your CV
              </h2>
              <p className="mt-4 text-muted-foreground">
                Interested in joining our team? Submit your application below.
              </p>
            </motion.div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 bg-accent/10 rounded-2xl text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Application Submitted!</h3>
                <p className="text-muted-foreground">
                  Thank you for your interest in joining TRI-AXIS. We will review your application and contact you soon.
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onSubmit={handleSubmit}
                className="p-8 bg-card rounded-2xl border border-border space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email" name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone" name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-foreground mb-2">
                      Position of Interest
                    </label>
                    <select
                      id="position" name="position"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a position</option>
                      {positions.map((pos) => (
                        <option key={pos.id} value={pos.title}>{pos.title}</option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="cv" className="block text-sm font-medium text-foreground mb-2">
                    Upload CV *
                  </label>
                  <div className="relative">
                    <input
                      id="cv"
                      name="cv" 
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="flex items-center gap-3 p-4 border-2 border-dashed border-border rounded-lg hover:border-accent transition-colors">
                      <Upload className="w-6 h-6 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {fileName || "Choose file or drag and drop"}
                      </span>
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">PDF, DOC, or DOCX (Max 5MB)</p>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message" name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about yourself and why you want to join TRI-AXIS..."
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </motion.form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
