"use client"

import { motion } from "framer-motion"
import { Wifi, CreditCardIcon } from "lucide-react"
import { Badge } from "@/app/components/ui/badge"

export const CreditCard = () => {
  return (
    <div className="w-full max-w-md aspect-[4/5] bg-gradient-to-b from-black to-gray-900 rounded-3xl p-8 flex flex-col justify-between overflow-hidden border border-white/10">
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="p-2 rounded-xl bg-violet-500/10">
            <CreditCardIcon className="w-6 h-6 text-violet-400" />
          </div>
          <Badge className="bg-violet-500/10 text-violet-400 border-violet-500/20">Enterprise</Badge>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 bg-clip-text text-transparent"
        >
          Corporate Cards
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-white/60"
        >
          Smart controls & approvals
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative mt-8"
      >
        <div className="w-full h-64 bg-gradient-to-br from-violet-600 to-violet-900 rounded-2xl p-6 flex flex-col justify-between shadow-2xl border border-violet-500/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 to-black/20" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent blur-xl" />

          <div className="relative">
            <div className="flex justify-between items-start">
              <p className="text-white/90 font-medium tracking-wider text-sm">SUITPAX</p>
              <Wifi className="w-6 h-6 text-white/80" />
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center gap-4">
              <div className="w-10 h-8 rounded-md bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-6 h-6 bg-white/30 rounded-sm" />
              </div>
              <p className="text-xl font-bold text-white tracking-widest">•••• 4242</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-white/60 text-sm">John Doe</p>
              <div className="flex items-center gap-2">
                <p className="text-white/60 text-sm">Expires</p>
                <p className="text-white font-medium">12/25</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-violet-500/10 blur-3xl rounded-full" />
      </motion.div>
    </div>
  )
}

