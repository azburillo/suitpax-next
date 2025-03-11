"use client"

import { motion } from "framer-motion"
import { Badge } from "@/app/components/ui/badge"
import { Globe } from "lucide-react"

export const TripBookingCard = () => {
  return (
    <div className="w-full max-w-md aspect-square bg-black rounded-3xl p-8 flex flex-col justify-between overflow-hidden">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
          Global Booking
        </h2>
        <p className="text-xl tracking-tight text-white/80 leading-tight">Seamless travel reservations</p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-6 mt-8"
      >
        <div className="w-24 h-24 rounded-2xl overflow-hidden relative flex-shrink-0 bg-gray-500/10 flex items-center justify-center">
          <Globe className="w-12 h-12 text-gray-400" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-white/90 text-sm">Worldwide coverage</span>
          </div>
          <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/30">Instant Confirmation</Badge>
        </div>
      </motion.div>
    </div>
  )
}

