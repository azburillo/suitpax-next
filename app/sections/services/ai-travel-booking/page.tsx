"use client"

import { motion } from "framer-motion"
import { GradientText } from "@/app/components/ui/gradient-text"
import { Button } from "@/app/components/ui/button"
import { ArrowRight, Bot, Plane, Calendar, CreditCard } from "lucide-react"

const AITravelBookingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-teal-950 to-black text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <GradientText className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            AI-Powered Travel Booking
          </GradientText>
          <p className="text-gray-300 text-xl mb-8">
            Experience the future of travel planning with our advanced AI technology
          </p>
          <Button className="bg-teal-500 hover:bg-teal-600 text-white">
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Bot className="w-12 h-12 text-teal-400" />,
              title: "Intelligent Recommendations",
              description: "Our AI analyzes your preferences to suggest personalized travel options.",
            },
            {
              icon: <Plane className="w-12 h-12 text-teal-400" />,
              title: "Seamless Flight Booking",
              description: "Book flights effortlessly with AI-optimized routes and prices.",
            },
            {
              icon: <Calendar className="w-12 h-12 text-teal-400" />,
              title: "Smart Itinerary Planning",
              description: "Let AI create the perfect travel schedule based on your interests and time constraints.",
            },
            {
              icon: <CreditCard className="w-12 h-12 text-teal-400" />,
              title: "Budget Optimization",
              description: "Our AI helps you get the best value for your travel budget.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-emerald-900 to-teal-900 p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to revolutionize your travel experience?</h2>
          <p className="text-gray-300 mb-8">
            Join thousands of satisfied travelers who have embraced AI-powered booking
          </p>
          <Button className="bg-teal-500 hover:bg-teal-600 text-white">
            Try AI Booking Now <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default AITravelBookingPage

