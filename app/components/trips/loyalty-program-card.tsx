"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/app/components/ui/badge"
import { Star } from "lucide-react"

export const LoyaltyProgramCard = () => {
  return (
    <div className="w-full max-w-md aspect-square bg-black rounded-3xl p-8 flex flex-col justify-between overflow-hidden">
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-4"
      >
        <h2 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent">
          Rewards Program
        </h2>
        <p className="text-xl tracking-tight text-white/80 leading-tight">Earn points with every trip</p>
      </motion.div>

      <div className="flex items-center gap-6 mt-8">
        <div className="w-24 h-24 rounded-2xl overflow-hidden relative flex-shrink-0">
          <Image src="/placeholder.svg?height=200&width=200" alt="Loyalty Program" fill className="object-cover" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-white/90 text-sm">Platinum status</span>
          </div>
          <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/30">Premium Rewards</Badge>
        </div>
      </div>
    </div>
  )
}

