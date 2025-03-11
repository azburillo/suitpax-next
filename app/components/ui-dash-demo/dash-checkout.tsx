"use client"

import { motion } from "framer-motion"
import { CreditCard, Plane } from "lucide-react"

export function DashCheckout() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Blur effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-gray-900/30 backdrop-blur-xl rounded-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/20 rounded-3xl" />

      {/* Content */}
      <div className="relative p-8 backdrop-blur-sm rounded-3xl border border-gray-800">
        {/* Logo */}
        <div className="absolute -top-6 right-6 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shadow-lg">
          <Plane className="w-6 h-6 text-white" />
        </div>

        {/* Header */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-2">Premium Travel Package</h3>
          <p className="text-gray-400">
            <span className="text-2xl font-bold text-white">$1,299</span> / annual subscription
          </p>
        </div>

        {/* Apple Pay Button */}
        <motion.button
          className="w-full bg-black text-white py-3 rounded-xl mb-6 flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.0425 7.19C16.1525 7.19 15.4025 7.69 14.8425 7.69C14.2425 7.69 13.5725 7.19 12.5925 7.19C11.3225 7.19 9.89252 8.19 9.89252 10.19C9.89252 12.69 12.5925 15.19 13.2825 15.19C13.9725 15.19 14.2425 14.69 15.1325 14.69C16.0225 14.69 16.4225 15.19 17.1125 15.19C17.8025 15.19 18.7625 13.99 19.3125 12.99C17.5525 12.09 17.1525 9.69 19.0425 8.69C18.3525 7.79 17.6625 7.19 17.0425 7.19Z" />
          </svg>
          Pay
        </motion.button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-900 text-gray-400">Or pay with card</span>
          </div>
        </div>

        {/* Card Form */}
        <div className="space-y-4">
          <div className="relative">
            <label className="text-sm text-gray-400 mb-1 block">Card number</label>
            <div className="relative">
              <input
                type="text"
                placeholder="4242 4242 4242 4242"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <CreditCard className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Expiry date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">CVC</label>
              <input
                type="text"
                placeholder="123"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <motion.button
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Subscribe now
          </motion.button>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-6 text-center">Secured by Suitpax Pay • Terms apply</p>
      </div>
    </div>
  )
}

