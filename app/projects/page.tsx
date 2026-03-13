"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta-section"
import { X } from "lucide-react"

const categories = ["All", "Construction", "Heavy Equipment", "Industrial", "Steel Fabrication", "Warehouse", "Manpower"]

const projects = [
  {
    id: 1,
    title: "Commercial Complex Foundation",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
    description: "Large-scale foundation and structural works for a commercial complex in Dammam.",
  },
  {
    id: 2,
    title: "Industrial Plant MEP Installation",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200",
    description: "Complete MEP installation for manufacturing facility including HVAC and fire systems.",
  },
  {
    id: 3,
    title: "Oil Field Equipment Deployment",
    category: "Heavy Equipment",
    image: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?q=80&w=1200",
    description: "Heavy equipment rental and operation for oil field development project.",
  },
  {
    id: 4,
    title: "Crane Operations - Port Facility",
    category: "Heavy Equipment",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200",
    description: "Mobile crane services for port facility construction and equipment installation.",
  },
  {
    id: 5,
    title: "Refinery Maintenance Project",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=1200",
    description: "Comprehensive maintenance services for petrochemical refinery operations.",
  },
  {
    id: 6,
    title: "Manufacturing Plant Setup",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200",
    description: "Industrial setup and equipment installation for manufacturing facility.",
  },
  {
    id: 7,
    title: "Structural Steel Works",
    category: "Steel Fabrication",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200",
    description: "Custom structural steel fabrication for industrial building construction.",
  },
  {
    id: 8,
    title: "Pipeline Fabrication Project",
    category: "Steel Fabrication",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200",
    description: "Precision welding and fabrication for industrial pipeline systems.",
  },
  {
    id: 9,
    title: "Distribution Center Racking",
    category: "Warehouse",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200",
    description: "Complete pallet racking installation for logistics distribution center.",
  },
  {
    id: 10,
    title: "Cold Storage Facility",
    category: "Warehouse",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
    description: "Warehouse storage systems for temperature-controlled facility.",
  },
  {
    id: 11,
    title: "Construction Site Staffing",
    category: "Manpower",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
    description: "Skilled workforce deployment for major construction project.",
  },
  {
    id: 12,
    title: "Industrial Maintenance Team",
    category: "Manpower",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200",
    description: "Technical manpower supply for ongoing industrial maintenance operations.",
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory)

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
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Work</span>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight">
                Project Portfolio
              </h1>
              <p className="mt-6 text-xl text-primary-foreground/80 leading-relaxed">
                Explore our diverse portfolio of successfully completed projects across construction, industrial, and support services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Gallery */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedProject(project)}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-80" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full w-fit mb-3">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-semibold text-primary-foreground">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl bg-card rounded-2xl overflow-hidden shadow-2xl"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="relative aspect-video">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-4">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-2xl font-bold text-card-foreground mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
