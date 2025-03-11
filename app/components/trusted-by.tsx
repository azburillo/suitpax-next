"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  SiAmericanairlines,
  SiAsana,
  SiUnitedairlines,
  SiHilton,
  SiMarriott,
  SiExpedia,
  SiAirbnb,
  SiSouthwestairlines,
  SiBritishairways,
  SiLufthansa,
  SiEmirates,
  SiAirchina,
  SiJapanairlines,
  SiNotion,
  SiBarclays,
} from "react-icons/si"

export function TrustedBy() {
  return (
    <>
      <motion.div
        className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-green-950 rounded-full filter blur-3xl opacity-10 z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="relative z-10 mt-12 mb-16 p-4 sm:p-8 rounded-2xl bg-emerald-950 backdrop-filter border border-emerald-800/20 shadow-xl max-w-[95vw] mx-auto min-h-[300px]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-base text-center text-emerald-100 mb-4 font-normal">Trusted by industry leaders</p>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 items-center justify-items-center mb-6">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              className="relative w-16 h-8 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <logo.icon className="w-full h-full text-emerald-100" />
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-emerald-200/80 max-w-2xl mx-auto text-center">
          Our innovative travel solutions are trusted by leading airlines, hotel chains, and online travel agencies
          worldwide, revolutionizing the way they manage operations, enhance customer experiences, and drive growth in
          the dynamic travel and hospitality industry.
        </p>
      </motion.div>
    </>
  )
}

const logos = [
  { name: "American Airlines", icon: SiAmericanairlines },
  { name: "Asana", icon: SiAsana },
  { name: "United Airlines", icon: SiUnitedairlines },
  { name: "Hilton", icon: SiHilton },
  { name: "Marriott", icon: SiMarriott },
  { name: "Expedia", icon: SiExpedia },
  { name: "Airbnb", icon: SiAirbnb },
  { name: "Southwest Airlines", icon: SiSouthwestairlines },
  { name: "British Airways", icon: SiBritishairways },
  { name: "Lufthansa", icon: SiLufthansa },
  { name: "Emirates", icon: SiEmirates },
  { name: "Air China", icon: SiAirchina },
  { name: "Japan Airlines", icon: SiJapanairlines },
  { name: "Notion", icon: SiNotion },
  { name: "Barclays", icon: SiBarclays },
]
;<style jsx>{`
  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.2; }
    50% { transform: scale(1.2); opacity: 0.3; }
    100% { transform: scale(1); opacity: 0.2; }
  }
`}</style>

