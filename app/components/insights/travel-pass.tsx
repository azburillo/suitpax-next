"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Plane, CreditCard, Shield } from "lucide-react"

export function TravelPass() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <motion.div
        className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-3xl font-bold text-white mb-1">SuitPax Elite Pass</h3>
            <p className="text-white/60">Your Key to Seamless Travel</p>
          </div>
          <Image src="/suitpax-cloud-logo.svg" alt="SuitPax Logo" width={60} height={60} className="opacity-90" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6">
          <div>
            <div className="text-white/80 mb-1">Elite Member</div>
            <div className="text-2xl font-semibold text-white">Alexandra Chen</div>
            <div className="text-white/60 mt-2">Valid until 12/2025</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white/80">
              <Plane className="w-5 h-5" />
              <span>Priority Boarding</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CreditCard className="w-5 h-5" />
              <span>Exclusive Discounts</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Shield className="w-5 h-5" />
              <span>Travel Insurance</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
          <div className="text-sm text-white/60">Scan for more details</div>
          <div className="w-16 h-16 bg-white/10 rounded-lg backdrop-blur-sm" /> {/* Placeholder for QR code */}
        </div>
      </motion.div>
    </div>
  )
}

