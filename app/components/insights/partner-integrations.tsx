"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function PartnerIntegrations() {
  const partners = [
    { name: "Airline", logo: "/placeholder.svg?height=48&width=48" },
    { name: "Hotel Chain", logo: "/placeholder.svg?height=48&width=48" },
    { name: "Car Rental", logo: "/placeholder.svg?height=48&width=48" },
    { name: "Travel Insurance", logo: "/placeholder.svg?height=48&width=48" },
    { name: "Expense Management", logo: "/placeholder.svg?height=48&width=48" },
    { name: "Booking Platform", logo: "/placeholder.svg?height=48&width=48" },
    { name: "Loyalty Program", logo: "/placeholder.svg?height=48&width=48" },
    { name: "Travel API", logo: "/placeholder.svg?height=48&width=48" },
    { name: "Payment Gateway", logo: "/placeholder.svg?height=48&width=48" },
    { name: "Analytics Tool", logo: "/placeholder.svg?height=48&width=48" },
    { name: "CRM System", logo: "/placeholder.svg?height=48&width=48" },
    { name: "SuitPax", logo: "/suitpax-cloud-logo.svg" },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg">
        <h2 className="text-4xl font-bold text-white mb-2">
          Integrated with the
          <span className="text-blue-400"> tools you rely on.</span>
        </h2>
        <p className="text-lg text-white/60 mb-12">
          Access deep insights and streamline your travel operations with our extensive partner network
        </p>

        <motion.button
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium mb-16 hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Explore all integrations
        </motion.button>

        <div className="grid grid-cols-4 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              className="aspect-square bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 p-4 flex flex-col items-center justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={48}
                height={48}
                className="mb-2"
              />
              <div className="text-xs text-white/60 text-center">{partner.name}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative">
            <Image src="/suitpax-cloud-logo.svg" alt="SuitPax" width={80} height={80} className="opacity-90" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

