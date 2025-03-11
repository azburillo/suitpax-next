"use client"

import { motion } from "framer-motion"
import { BackgroundBeams } from "@/app/components/backgrounds/background-beams"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { ArrowRight, Car, Shield, CreditCard, Map } from "lucide-react"
import { DashboardPreviewSectionCars } from "@/app/components/ui-dash-demo/dashboard-preview-section-cars"

const carRentalFeatures = [
  {
    title: "Wide Selection",
    icon: Car,
    description: "Choose from a diverse fleet of vehicles to suit any business need or preference.",
  },
  {
    title: "Global Coverage",
    icon: Map,
    description: "Access our car rental services in over 180 countries worldwide.",
  },
  {
    title: "Corporate Rates",
    icon: CreditCard,
    description: "Enjoy exclusive corporate discounts and loyalty rewards for frequent rentals.",
  },
  {
    title: "Insurance Options",
    icon: Shield,
    description: "Comprehensive insurance packages to ensure peace of mind during your travels.",
  },
]

export default function CarRentalPage() {
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-700">
              Suitpax Car Rental
            </span>
          </h1>
          <p className="text-xl text-emerald-200 max-w-2xl mx-auto mb-8">
            Seamless car rental solutions integrated with your business travel experience.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-black font-semibold">
            Book a Car Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        {/* Dashboard Preview Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="my-20"
        >
          <DashboardPreviewSectionCars />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {carRentalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-emerald-950/30 backdrop-blur-sm border-emerald-900">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <feature.icon className="w-8 h-8 text-emerald-400" />
                  <CardTitle className="text-emerald-200 text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-100">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-emerald-400">Why Choose Suitpax Car Rental?</h2>
          <p className="text-xl text-emerald-200 max-w-2xl mx-auto mb-8">
            Our car rental service is fully integrated with your Suitpax travel management platform, offering a seamless
            booking experience and consolidated billing for all your travel needs.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-black font-semibold">
            Learn More About Our Car Rental Services <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-emerald-950/30 backdrop-blur-sm border border-emerald-900 rounded-lg p-8 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4 text-emerald-400">Corporate Car Rental Program</h2>
          <p className="text-emerald-200 mb-6">
            Unlock exclusive benefits with our corporate car rental program. Tailored solutions for businesses of all
            sizes.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-black font-semibold">
            Enroll Your Company <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

