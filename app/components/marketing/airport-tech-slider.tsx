"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/app/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface AirportTechImage {
  url: string
  alt: string
  badges: {
    text: string
    color: string
  }[]
}

// Imágenes reales de aeropuertos y tecnología de viajes
const airportTechImages: AirportTechImage[] = [
  {
    url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1920&auto=format&fit=crop",
    alt: "Terminal de aeropuerto moderno con tecnología digital",
    badges: [
      { text: "Smart Terminal", color: "bg-emerald-500/80 backdrop-blur-md" },
      { text: "Digital Experience", color: "bg-blue-500/80 backdrop-blur-md" },
    ],
  },
  {
    url: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=1920&auto=format&fit=crop",
    alt: "Sistema de facturación automática en aeropuerto",
    badges: [
      { text: "Self Check-in", color: "bg-indigo-500/80 backdrop-blur-md" },
      { text: "Contactless", color: "bg-purple-500/80 backdrop-blur-md" },
    ],
  },
  {
    url: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1920&auto=format&fit=crop",
    alt: "Sala VIP de aeropuerto con tecnología integrada",
    badges: [
      { text: "Premium Lounge", color: "bg-amber-500/80 backdrop-blur-md" },
      { text: "Biometric Access", color: "bg-rose-500/80 backdrop-blur-md" },
    ],
  },
  {
    url: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=1920&auto=format&fit=crop",
    alt: "Sistema de seguridad biométrico en aeropuerto",
    badges: [
      { text: "AI Security", color: "bg-cyan-500/80 backdrop-blur-md" },
      { text: "Facial Recognition", color: "bg-teal-500/80 backdrop-blur-md" },
    ],
  },
  {
    url: "https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=1920&auto=format&fit=crop",
    alt: "Aeropuerto con sistema de transporte automatizado",
    badges: [
      { text: "Automated Transit", color: "bg-blue-600/80 backdrop-blur-md" },
      { text: "Smart Mobility", color: "bg-green-600/80 backdrop-blur-md" },
    ],
  },
]

export function AirportTechSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleBadges, setVisibleBadges] = useState<boolean[]>([true, true])

  useEffect(() => {
    // Auto-rotate images
    const imageInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % airportTechImages.length)
    }, 6000)

    // Toggle badge visibility with staggered effect
    const badgeInterval = setInterval(() => {
      setVisibleBadges([true, true])

      setTimeout(() => {
        setVisibleBadges((prev) => [false, prev[1]])

        setTimeout(() => {
          setVisibleBadges([false, false])

          setTimeout(() => {
            setVisibleBadges((prev) => [true, prev[1]])

            setTimeout(() => {
              setVisibleBadges([true, true])
            }, 300)
          }, 300)
        }, 2000)
      }, 2000)
    }, 5000)

    return () => {
      clearInterval(imageInterval)
      clearInterval(badgeInterval)
    }
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? airportTechImages.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % airportTechImages.length)
  }

  return (
    <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden group shadow-lg border border-gray-200/50">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={airportTechImages[currentIndex].url || "/placeholder.svg"}
            alt={airportTechImages[currentIndex].alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12">
            <div className="text-center text-white max-w-3xl px-4">
              <h3 className="text-2xl font-bold mb-3 tracking-tight text-white drop-shadow-md">
                Next-Gen Airport Technology
              </h3>
              <p className="text-sm text-white/90 mb-4 max-w-md mx-auto drop-shadow">
                Transforming travel experiences with cutting-edge innovations and seamless digital solutions.
              </p>
              <div className="flex gap-3 mt-2 justify-center flex-wrap">
                {airportTechImages[currentIndex].badges.map((badge, idx) => (
                  <AnimatePresence key={badge.text} mode="wait">
                    {visibleBadges[idx] && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Badge className={`${badge.color} text-white px-3 py-1 text-sm shadow-md backdrop-blur-xl`}>
                          {badge.text}
                        </Badge>
                      </motion.div>
                    )}
                  </AnimatePresence>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {airportTechImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? "bg-white w-6 shadow-md" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

