"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/app/components/ui/badge"
import { Crown } from "lucide-react"

export const VipLoungeCard = () => {
  return (
    <div className="w-full max-w-md aspect-[16:9] bg-gray-200 backdrop-blur-sm rounded-2xl p-8 flex flex-col justify-between overflow-hidden">
      <div className="space-y-4">
        <h2 className="text-2xl font-medium tracking-tighter bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
          VIP Lounges
        </h2>
        <p className="text-xl tracking-tight text-white/80 leading-tight">Exclusive airport access</p>
      </div>

      <div className="flex items-center gap-6 mt-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-24 h-24 rounded-2xl overflow-hidden relative flex-shrink-0"
        >
          <Image src="/placeholder.svg?height=200&width=200" alt="VIP Lounge" fill className="object-cover" />
        </motion.div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-indigo-400" />
            <span className="text-white/90 text-sm">Priority access</span>
          </div>
          <Badge className="bg-indigo-500/20 text-indigo-400 border-indigo-500/30">Elite Membership</Badge>
        </div>
      </div>
    </div>
  )
}

