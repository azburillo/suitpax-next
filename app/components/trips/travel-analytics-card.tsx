"use client"

import { motion } from "framer-motion"
import { Badge } from "@/app/components/ui/badge"
import { BarChart3 } from "lucide-react"

export const TravelAnalyticsCard = () => {
  const chartVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  }

  return (
    <div className="w-full max-w-md aspect-square bg-black rounded-3xl p-8 flex flex-col justify-between overflow-hidden">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
          Travel Insights
        </h2>
        <p className="text-xl tracking-tight text-white/80 leading-tight">Data-driven optimization</p>
      </div>

      <div className="flex items-center gap-6 mt-8">
        <div className="w-24 h-24 rounded-2xl overflow-hidden relative flex-shrink-0 bg-green-500/10 flex items-center justify-center">
          <motion.div initial="hidden" animate="visible">
            <BarChart3 className="w-12 h-12 text-green-400" />
          </motion.div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-white/90 text-sm">Real-time reporting</span>
          </div>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Smart Analytics</Badge>
        </div>
      </div>
    </div>
  )
}

