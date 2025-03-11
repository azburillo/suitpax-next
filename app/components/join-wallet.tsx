"use client"

import { motion } from "framer-motion"
import { DashWallet } from "./ui-dash-demo/dash-wallet"
import { DashCheckout } from "./ui-dash-demo/dash-checkout"

export function JoinWallet() {
  return (
    <div className="w-full py-12">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Join Suitpax Wallet
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center mb-12"
        >
          Experience seamless travel with our digital boarding passes
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative z-10">
            <DashWallet />
          </div>
          <div className="relative z-20">
            <DashCheckout />
          </div>
        </div>
      </div>
    </div>
  )
}

