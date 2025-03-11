"use client"

import { motion } from "framer-motion"
import { BackgroundBeams } from "@/app/components/backgrounds/background-beams"
import Image from "next/image"

const customers = [
  { name: "Acme Corp", logo: "/placeholder.svg?height=80&width=80", description: "Global leader in innovation" },
  { name: "TechGiant", logo: "/placeholder.svg?height=80&width=80", description: "Pioneering software solutions" },
  { name: "EcoTravel", logo: "/placeholder.svg?height=80&width=80", description: "Sustainable travel experts" },
  { name: "FinanceHub", logo: "/placeholder.svg?height=80&width=80", description: "Revolutionary fintech services" },
  { name: "GreenEnergy", logo: "/placeholder.svg?height=80&width=80", description: "Renewable energy innovators" },
  { name: "HealthTech", logo: "/placeholder.svg?height=80&width=80", description: "Advanced healthcare solutions" },
]

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Our Valued Customers
            </span>
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Discover the companies that trust Suitpax for their business travel needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customers.map((customer, index) => (
            <motion.div
              key={customer.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-950/30 backdrop-blur-sm border border-blue-900 rounded-lg p-6 flex flex-col items-center"
            >
              <Image
                src={customer.logo || "/placeholder.svg"}
                alt={`${customer.name} logo`}
                width={80}
                height={80}
                className="mb-4"
              />
              <h2 className="text-2xl font-bold mb-2 text-blue-300">{customer.name}</h2>
              <p className="text-blue-200 text-center">{customer.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Join Our Growing Network</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-8">
            Experience the Suitpax difference and join our community of satisfied customers.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Schedule a Demo
          </button>
        </motion.div>
      </div>
    </div>
  )
}

