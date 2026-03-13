"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle2, Target, Eye, Heart, Shield, Zap, Users, Award, ThumbsUp } from "lucide-react"

const capabilities = [
  "Civil Construction Works",
  "MEP Contracting and Fire Fighting",
  "Heavy Equipment Rental",
  "Diesel Supply and Distribution",
  "Automotive Tyres and Batteries",
  "Steel Fabrication and Manufacturing",
  "Skilled Manpower Supply",
  "Warehouse Racking Systems",
  "Industrial Tools and General Trading",
]

const values = [
  {
    icon: Shield,
    title: "Integrity and Transparency",
    description: "We conduct business with honesty and openness in all our dealings.",
  },
  {
    icon: Award,
    title: "Quality Service",
    description: "We deliver excellence in every project, exceeding client expectations.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    description: "We respond quickly to client needs with agility and efficiency.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Our clients are at the center of everything we do.",
  },
  {
    icon: ThumbsUp,
    title: "Continuous Improvement",
    description: "We constantly evolve and improve our processes and services.",
  },
  {
    icon: Heart,
    title: "Safety First",
    description: "We prioritize the safety of our people and operations above all.",
  },
]

const whyChoose = [
  "Integrated Civil and MEP Expertise",
  "Quality and Safety Focused",
  "On Time Project Delivery",
  "Competitive Industrial Pricing",
  "Skilled Workforce",
  "Reliable Execution",
]

export default function AboutPage() {
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
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight">
                About TRI-AXIS
              </h1>
              <p className="mt-6 text-xl text-primary-foreground/80 leading-relaxed">
                A diversified industrial service provider delivering integrated solutions across construction, engineering, trading and industrial support services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                    alt="TRI-AXIS Operations"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-xl border border-border">
                  <div className="text-4xl font-bold text-accent">15+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                  Who We Are
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Tri Axis Company is a diversified industrial service provider delivering integrated solutions across construction, engineering, trading and industrial support services.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  The company supports infrastructure, commercial and industrial sectors with reliable execution and operational excellence.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">Key Capabilities</h3>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {capabilities.map((capability) => (
                    <div key={capability} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground">{capability}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="vision" className="py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-10 bg-card rounded-2xl border border-border"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become a leading industrial services partner in Saudi Arabia known for reliability, fast execution and cost-effective solutions.
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-10 bg-card rounded-2xl border border-border"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Deliver high quality industrial support services with uncompromised safety, regulatory compliance and skilled workforce excellence.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section id="values" className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Foundation</span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                Core Values
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-card rounded-2xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="py-24 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Advantages</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary-foreground tracking-tight">
                  Why Choose TRI-AXIS
                </h2>
                <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                  We combine expertise, reliability, and commitment to deliver exceptional results for every project.
                </p>
                <div className="mt-8 space-y-4">
                  {whyChoose.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                      <span className="text-lg text-primary-foreground">{item}</span>
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
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000"
                    alt="Construction Excellence"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
