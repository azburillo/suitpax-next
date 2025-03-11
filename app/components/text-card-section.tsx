"use client"

import { motion } from "framer-motion"
import { BackgroundGrid } from "@/app/components/backgrounds/background-grid"

interface TextCardSectionProps {
  title: string
  content: string
  className?: string
}

export function TextCardSection({ title, content, className = "" }: TextCardSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md flex flex-col items-center ${className}`}
    >
      <div className="absolute inset-0 z-0">
        <BackgroundGrid variant="light" density="medium" />
      </div>

      <div className="relative z-10 p-6 md:p-8">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold mb-6 tracking-tighter text-center">{title}</h2>
        <p className="text-sm md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed text-center text-gray-600 dark:text-gray-400 tracking-tight font-light">
          {content}
        </p>
      </div>
    </motion.div>
  )
}

