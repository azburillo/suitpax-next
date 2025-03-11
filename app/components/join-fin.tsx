"use client"

import { motion } from "framer-motion"
import { FinInvoice } from "@/app/components/ui-fintech/fin-invoice"
import { FinSubscriptions } from "@/app/components/ui-fintech/fin-subscriptions"
import { FinLocales } from "@/app/components/ui-fintech/fin-locales"
import { FinTeam } from "@/app/components/ui-fintech/fin-team"
import { FinCards } from "@/app/components/ui-fintech/fin-cards"
import { GlassCreditCard } from "@/app/components/glass-credit-card"

export function JoinFin() {
  return (
    <div className="w-full py-12">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Fintech Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-center mb-12"
        >
          Experience our cutting-edge financial technology integrations
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FinInvoice />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FinSubscriptions />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <FinCards />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <FinLocales />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <FinTeam />
          </motion.div>
        </div>
        <div className="mt-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <GlassCreditCard cardNumber="4242 4242 4242 4242" cardHolder="JOHN DOE" expiryDate="12/25" cvv="123" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

