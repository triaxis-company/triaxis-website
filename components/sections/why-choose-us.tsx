"use client"

import { motion } from "framer-motion"
import { Shield, Award, Clock, DollarSign, Users, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Integrated Civil and MEP Expertise",
    description: "Comprehensive engineering solutions combining civil construction with mechanical, electrical, and plumbing systems.",
  },
  {
    icon: Award,
    title: "Quality and Safety Focused",
    description: "Uncompromising commitment to quality standards and safety protocols across all operations.",
  },
  {
    icon: Clock,
    title: "On Time Project Delivery",
    description: "Proven track record of delivering projects on schedule with meticulous planning and execution.",
  },
  {
    icon: DollarSign,
    title: "Competitive Industrial Pricing",
    description: "Cost-effective solutions without compromising on quality or service excellence.",
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    description: "Highly trained and certified professionals including welders, electricians, riggers, and technicians.",
  },
  {
    icon: CheckCircle,
    title: "Reliable Execution",
    description: "Dependable project execution with transparent communication and consistent performance.",
  },
]

export function WhyChooseUs() {
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
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Advantages</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Why Choose TRI-AXIS
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, reliability, and commitment to deliver exceptional results for every project.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
