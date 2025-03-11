"use client"

import { motion } from "framer-motion"
import { Plane, Hotel, Map, Calendar } from "lucide-react"
import { BackgroundBeams } from "@/app/components/backgrounds/background-beams"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"

const TripPlanningPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-emerald-950 via-teal-950 to-black text-white">
      <BackgroundBeams className="absolute inset-0" />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-teal-400">
            Trip Planning Resources
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to plan the perfect business trip, all in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Flight Booking", icon: Plane, description: "Find and book the best flights for your trip" },
            { title: "Hotel Reservations", icon: Hotel, description: "Secure comfortable accommodations worldwide" },
            { title: "Itinerary Planning", icon: Map, description: "Create detailed travel itineraries with ease" },
            { title: "Travel Calendar", icon: Calendar, description: "Manage your travel schedule efficiently" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black/50 border-emerald-500/20 hover:border-emerald-500/50 transition-colors h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-emerald-400">
                    <item.icon className="w-6 h-6 mr-2" />
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold">
            Plan Your Trip Now
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default TripPlanningPage

