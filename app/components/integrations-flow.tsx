"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { cn } from "@/app/lib/utils"
import { useTheme } from "next-themes"

const airlineLogos = [
  { name: "Airline 1", src: "/placeholder-logo-1.png" },
  { name: "Airline 2", src: "/placeholder-logo-2.png" },
  { name: "Airline 3", src: "/placeholder-logo-3.png" },
  { name: "Airline 4", src: "/placeholder-logo-4.png" },
  { name: "Airline 5", src: "/placeholder-logo-5.png" },
  { name: "Airline 6", src: "/placeholder-logo-6.png" },
]

export function IntegrationsSection() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className={cn("border-t", isDark ? "bg-zinc-900" : "bg-gray-50")}>
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          className={`text-center text-sm font-medium mb-8 ${isDark ? "text-gray-400" : "text-gray-600"}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          INTEGRACIONES CON LAS PRINCIPALES AEROLÍNEAS Y AEROPUERTOS
        </motion.h2>
        <motion.div
          ref={ref}
          className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {airlineLogos.map((logo, i) => (
            <motion.div key={i} className="flex items-center justify-center" variants={itemVariants}>
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={`Logo de ${logo.name}`}
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-200 grayscale"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

