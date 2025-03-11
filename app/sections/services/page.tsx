"use client"
import { motion } from "framer-motion"
import { GradientText } from "@/app/components/ui/gradient-text"
import { Button } from "@/app/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const ServicesPage = () => {
  const services = [
    { title: "AI Travel Booking", path: "/sections/services/ai-travel-booking" },
    { title: "Business Travel", path: "/sections/services/business-travel" },
    { title: "Fintech Solutions", path: "/sections/services/fintech" },
    { title: "Travel Insurance", path: "/sections/services/insurance" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-teal-950 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <GradientText as="h1" className="text-4xl md:text-6xl font-bold mb-4">
            Our Services
          </GradientText>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our comprehensive range of travel and financial services designed to enhance your journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.path}>
                <div className="bg-black/50 border border-teal-800 rounded-lg p-6 hover:bg-teal-900/30 transition-colors">
                  <h2 className="text-2xl font-bold text-teal-400 mb-2">{service.title}</h2>
                  <p className="text-gray-300 mb-4">
                    Explore our {service.title.toLowerCase()} services and solutions.
                  </p>
                  <Button variant="link" className="text-teal-400 hover:text-teal-300 p-0">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesPage

