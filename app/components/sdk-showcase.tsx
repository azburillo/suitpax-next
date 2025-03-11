"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { SiAirbnb, SiAmericanairlines, SiDelta, SiExpedia, SiHilton, SiMarriott } from "react-icons/si"

const travelPartners = [
  { name: "Airbnb", Icon: SiAirbnb, color: "#FF5A5F" },
  { name: "American Airlines", Icon: SiAmericanairlines, color: "#0078D2" },
  { name: "Delta", Icon: SiDelta, color: "#E31837" },
  { name: "Expedia", Icon: SiExpedia, color: "#00355F" },
  { name: "Hilton", Icon: SiHilton, color: "#004BB6" },
  { name: "Marriott", Icon: SiMarriott, color: "#A70023" },
]

const TrailPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
    <pattern id="trail-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="1" fill="#fff" />
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#trail-pattern)" />
  </svg>
)

export function SDKShowcase() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container px-4 md:px-6">
        <Card className="bg-gray-800/50 border-0 p-6 md:p-8 backdrop-blur-sm max-w-4xl mx-auto">
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              SuitPax: Connecting Travel Ecosystems
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-8"
            >
              Seamlessly integrate with leading travel providers and enhance your customers' journey.
            </motion.p>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
              {travelPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-lg bg-gray-700/50 flex items-center justify-center mb-2">
                    <partner.Icon className="w-10 h-10" style={{ color: partner.color }} />
                  </div>
                  <span className="text-sm text-gray-300">{partner.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <p className="text-gray-400 mb-4">
              SuitPax's SDK enables seamless integration with major travel providers, enhancing your application's
              capabilities and user experience.
            </p>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              Explore Integration
            </button>
          </motion.div>
        </Card>
      </div>
    </section>
  )
}

