"use client"

import { motion } from "framer-motion"
import { Badge } from "@/app/components/ui/badge"
import { ShieldCheck, Activity } from "lucide-react"

export const IncidentManagerCard = () => {
  return (
    <div className="w-full max-w-md aspect-[4/5] bg-gradient-to-b from-black to-gray-900 rounded-3xl p-8 flex flex-col justify-between overflow-hidden border border-white/10">
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="p-2 rounded-xl bg-purple-500/10">
            <ShieldCheck className="w-6 h-6 text-purple-400" />
          </div>
          <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">AI-Powered</Badge>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent"
        >
          Incident Manager
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-white/60"
        >
          Smart monitoring & alerts
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 space-y-4"
      >
        {/* Activity Graph */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-white/80">System Status</span>
            </div>
            <span className="text-xs text-white/40">Last 24h</span>
          </div>
          <div className="h-20 flex items-end gap-1">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-purple-400/20 rounded-t"
                initial={{ height: 0 }}
                animate={{ height: `${Math.random() * 100}%` }}
                transition={{ duration: 0.5, delay: i * 0.02 }}
              />
            ))}
          </div>
        </div>

        {/* Status Items */}
        {[
          { name: "API Gateway", status: "Operational", uptime: "99.99%" },
          { name: "Database Clusters", status: "Operational", uptime: "99.95%" },
          { name: "CDN Edge Network", status: "Operational", uptime: "100%" },
        ].map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
          >
            <div className="space-y-1">
              <p className="text-white font-medium">{item.name}</p>
              <p className="text-white/40 text-sm">{item.uptime} uptime</p>
            </div>
            <Badge className="bg-green-500/10 text-green-400 border-green-500/20">{item.status}</Badge>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

