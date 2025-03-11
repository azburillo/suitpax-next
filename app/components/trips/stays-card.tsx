"use client"

import { motion } from "framer-motion"
import { Badge } from "@/app/components/ui/badge"
import { Building, Star, Users, Calendar } from "lucide-react"

export const StaysCard = () => {
  return (
    <div className="w-full max-w-md aspect-[4/5] bg-gradient-to-b from-black to-gray-900 rounded-3xl p-8 flex flex-col justify-between overflow-hidden border border-white/10">
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="p-2 rounded-xl bg-emerald-500/10">
            <Building className="w-6 h-6 text-emerald-400" />
          </div>
          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Premium</Badge>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent"
        >
          Luxury Stays
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-white/60"
        >
          5-star accommodations
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent blur-2xl" />
        <div className="relative space-y-4">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-yellow-400" />
              <p className="text-white">5.0 Rating</p>
            </div>
            <p className="text-white/40">+2.5k reviews</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <Users className="w-5 h-5 text-emerald-400 mb-2" />
              <p className="text-white/40 text-sm">Capacity</p>
              <p className="text-white font-medium">2-4 guests</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <Calendar className="w-5 h-5 text-emerald-400 mb-2" />
              <p className="text-white/40 text-sm">Duration</p>
              <p className="text-white font-medium">1-7 nights</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

