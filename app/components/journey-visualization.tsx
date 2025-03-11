"use client"

import { motion } from "framer-motion"
import { Plane, Building2, Coffee, StampIcon as Passport, Luggage, Users } from "lucide-react"

const steps = [
  {
    icon: Building2,
    title: "Airport Arrival",
    description: "Welcome to the airport",
  },
  {
    icon: Passport,
    title: "Check-in",
    description: "Quick and easy process",
  },
  {
    icon: Coffee,
    title: "VIP Lounge",
    description: "Relax before your flight",
  },
  {
    icon: Luggage,
    title: "Baggage Handling",
    description: "Seamless baggage process",
  },
  {
    icon: Users,
    title: "Boarding",
    description: "Priority boarding",
  },
  {
    icon: Plane,
    title: "Take-off",
    description: "Begin your journey",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export const JourneyVisualization = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Connection line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-teal-600 transform -translate-y-1/2 rounded-full" />

        {/* Steps */}
        <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="flex flex-col items-center text-center space-y-4"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center shadow-lg"
              >
                <step.icon className="w-8 h-8 text-white" />
              </motion.div>
              <div className="space-y-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

