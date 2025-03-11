"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Sparkles } from "@/app/components/sparkles"
import {
  SiVercel,
  SiHilton,
  SiMarriott,
  SiAirbnb,
  SiExpedia,
  SiTesla,
  SiAmericanexpress,
  SiBrex,
  SiChase,
  SiDelta,
  SiUnitedairlines,
  SiBritishairways,
  SiLufthansa,
  SiPorsche,
} from "react-icons/si"

const logos = [
  {
    icon: SiVercel,
    alt: "Vercel",
    color: "black", // Black
  },
  {
    icon: SiHilton,
    alt: "Hilton",
    color: "#003580",
  },
  {
    icon: SiMarriott,
    alt: "Marriott",
    color: "#990000",
  },
  {
    icon: SiAirbnb,
    alt: "Airbnb",
    color: "#FF5A5F",
  },
  {
    icon: SiExpedia,
    alt: "Expedia",
    color: "#00355F",
  },
  {
    icon: SiPorsche,
    alt: "Porsche",
    color: "#003580",
  },
  {
    icon: SiTesla,
    alt: "Tesla",
    color: "red",
  },
  {
    icon: SiAmericanexpress,
    alt: "American Express",
    color: "#252131",
  },
  {
    icon: SiBrex,
    alt: "Brex",
    color: "#1A1F71",
  },
  {
    icon: SiChase,
    alt: "Chase",
    color: "#0A214C",
  },
  {
    icon: SiDelta,
    alt: "Delta",
    color: "#003366",
  },
  {
    icon: SiUnitedairlines,
    alt: "United",
    color: "#005DAA",
  },
  {
    icon: SiBritishairways,
    alt: "British Airways",
    color: "#075AAA",
  },
  {
    icon: SiLufthansa,
    alt: "Lufthansa",
    color: "#002777",
  },
]

const SparkleEffect = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

const CircularPath = () => {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    >
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <path d="M50 10 A40 40 0 1 1 49.999 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      </svg>
    </motion.div>
  )
}

export function CardDemo() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="mt-8">
      <Card className="relative w-full max-w-xl mx-auto overflow-hidden bg-gray-100/10 backdrop-blur-xl border-gray-200/20">
        <SparkleEffect />
        <CircularPath />
        <div className="relative p-8">
          <Sparkles className="absolute inset-0" />
          <div className="flex justify-center mb-8">
            <motion.div
              className="relative w-20 h-20 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <AnimatePresence mode="wait">
                {logos.map((logo, index) => (
                  <motion.div
                    key={logo.alt}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    animate={
                      currentIndex === index
                        ? { opacity: 1, scale: 1, rotate: 0 }
                        : { opacity: 0, scale: 0.5, rotate: 180 }
                    }
                    exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    <logo.icon className={`w-10 h-10 text-white`} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center relative z-10"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              <Sparkles>Enterprise Integrations</Sparkles>
            </h3>
            <p className="text-gray-300">
              Seamlessly connect with your favorite platforms and tools to enhance your workflow.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 grid grid-cols-3 sm:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className={cn(
                  "p-4 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center group relative overflow-hidden",
                  "hover:bg-white/10 transition-colors duration-200",
                )}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r"
                  style={{ backgroundColor: logo.color }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.15 : 0 }}
                  transition={{ duration: 0.2 }}
                />
                <logo.icon
                  className={cn(
                    "w-6 h-6 transition-all duration-200",
                    hoveredIndex === index ? "text-white" : `text-[${logo.color}]`,
                  )}
                />
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <SparkleEffect />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        </motion.div>
      </Card>
    </div>
  )
}

