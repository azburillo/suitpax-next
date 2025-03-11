"use client"

import { Star, TrendingUp, Users } from "lucide-react"
import { motion } from "framer-motion"

export function CustomerInsights() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-6">Customer Insights</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-none" />
                ))}
              </div>
            </div>
            <p className="text-white/80 italic">
              "SuitPax has revolutionized our business travel management. Highly recommended!"
            </p>
          </div>
          <div className="space-y-6">
            <motion.div
              className="relative h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl overflow-hidden backdrop-blur-sm"
              initial={{ width: "0%" }}
              animate={{ width: "90%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">90%</span>
              </div>
              <div className="absolute bottom-2 left-2 text-sm text-white/60">Customer Satisfaction Score</div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm flex items-center gap-3">
                <TrendingUp className="text-green-400" />
                <div>
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-xs text-white/60">Booking Efficiency</div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm flex items-center gap-3">
                <Users className="text-blue-400" />
                <div>
                  <div className="text-2xl font-bold text-white">10k+</div>
                  <div className="text-xs text-white/60">Active Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

