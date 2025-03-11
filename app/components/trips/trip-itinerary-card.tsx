"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/app/components/ui/badge"
import { Calendar } from "lucide-react"

export const TripItineraryCard = () => {
  return (
    <div className="w-full max-w-md aspect-square bg-black rounded-3xl p-8 flex flex-col justify-between overflow-hidden">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
          Smart Itineraries
        </h2>
        <p className="text-xl tracking-tight text-white/80 leading-tight">AI-powered travel plans</p>
      </div>

      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-6 mt-8"
      >
        <div className="w-24 h-24 rounded-2xl overflow-hidden relative flex-shrink-0">
          <Image src="/placeholder.svg?height=200&width=200" alt="Travel Itinerary" fill className="object-cover" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-amber-400" />
            <span className="text-white/90 text-sm">Dynamic scheduling</span>
          </div>
          <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">Real-time Updates</Badge>
        </div>
      </motion.div>
    </div>
  )
}

