"use client"

import Image from "next/image"
import { motion } from "framer-motion"

type Props = {
  title: string
  subtitle: string
}

export default function PageHero({ title, subtitle }: Props) {
  return (
    <section className="relative pt-32 pb-20">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-red-500 text-sm font-semibold uppercase">
            {subtitle}
          </span>

          <h1 className="mt-3 text-5xl font-bold text-gray-900">
            {title}
          </h1>
        </motion.div>
      </div>

    </section>
  )
}