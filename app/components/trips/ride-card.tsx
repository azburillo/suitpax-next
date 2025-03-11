"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/app/components/ui/badge"
import { Car } from "lucide-react"

export const RideCard = () => {
  return (
    <div className="w-full max-w-md aspect-square bg-black rounded-3xl p-8 flex flex-col justify-between overflow-hidden">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Premium Rides
        </h2>
        <p className="text-xl tracking-tight text-white/80 leading-tight">Executive transportation</p>
      </div>

      <div className="flex items-center gap-6 mt-8">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-24 h-24 rounded-2xl overflow-hidden relative flex-shrink-0"
        >
          <Image src="/placeholder.svg?height=200&width=200" alt="Premium Ride" fill className="object-cover" />
        </motion.div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Car className="w-5 h-5 text-blue-400" />
            <span className="text-white/90 text-sm">On-demand service</span>
          </div>
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Business Class</Badge>
        </div>
      </div>
    </div>
  )
}

