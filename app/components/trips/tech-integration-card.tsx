"use client"

import { motion } from "framer-motion"
import { Badge } from "@/app/components/ui/badge"
import { Code, ArrowRight } from "lucide-react"

export const TechIntegrationCard = () => {
  return (
    <div className="w-full max-w-md aspect-[4/5] bg-gradient-to-b from-black to-gray-900 rounded-3xl p-8 flex flex-col justify-between overflow-hidden border border-white/10">
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="p-2 rounded-xl bg-cyan-500/10">
            <Code className="w-6 h-6 text-cyan-400" />
          </div>
          <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">Developer API</Badge>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent"
        >
          Tech Ecosystem
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-white/60"
        >
          Enterprise integrations
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 space-y-4"
      >
        {[
          { name: "REST API", status: "Active", requests: "2.5M" },
          { name: "GraphQL", status: "Active", requests: "1.8M" },
          { name: "Webhooks", status: "Active", requests: "960K" },
        ].map((api, index) => (
          <div
            key={api.name}
            className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
          >
            <div className="space-y-1">
              <p className="text-white font-medium">{api.name}</p>
              <p className="text-white/40 text-sm">{api.requests} requests</p>
            </div>
            <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-white/60 transition-colors" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

