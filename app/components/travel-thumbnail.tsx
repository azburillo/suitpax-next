"use client"

import { motion } from "framer-motion"
import { Zap, Sparkles } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export function TravelThumbnail() {
  return (
    <div className="relative w-full min-h-[80vh] bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/25 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Floating Badges */}
        <motion.div className="absolute left-4 top-32 sm:left-20" {...floatingAnimation} transition={{ delay: 0.2 }}>
          <motion.div
            className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg"
            {...fadeIn}
          >
            <Zap className="w-5 h-5 text-blue-500" />
            <span className="text-gray-800 dark:text-gray-200 font-medium">Instant Booking</span>
          </motion.div>
        </motion.div>

        <motion.div className="absolute right-4 top-40 sm:right-20" {...floatingAnimation} transition={{ delay: 0.4 }}>
          <motion.div
            className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg"
            {...fadeIn}
          >
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span className="text-gray-800 dark:text-gray-200 font-medium">AI-Powered</span>
          </motion.div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          className="text-center mt-20 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
            Meet
            <br />
            Suitpax Quantum
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">The future of intelligent travel management</p>
        </motion.div>

        {/* Floating Stats Cards */}
        <div className="relative mt-20">
          <motion.div className="absolute left-4 sm:left-20 -top-10" {...floatingAnimation} transition={{ delay: 0.6 }}>
            <motion.div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg" {...fadeIn}>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Business Travel</h3>
              <div className="mt-2 flex items-baseline">
                <span className="text-2xl font-semibold text-blue-600 dark:text-blue-400">98%</span>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">satisfaction rate</span>
              </div>
              <div className="mt-4 w-32 h-16 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute right-4 sm:right-20 -top-5"
            {...floatingAnimation}
            transition={{ delay: 0.8 }}
          >
            <motion.div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg" {...fadeIn}>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">AI Predictions</h3>
              <div className="mt-2 flex items-baseline">
                <span className="text-2xl font-semibold text-purple-600 dark:text-purple-400">95%</span>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">accuracy</span>
              </div>
              <div className="mt-4 w-32 h-16 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg" />
            </motion.div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 text-center text-xs text-gray-500 dark:text-gray-400 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.2 }}
        >
          SuitPax Quantum leverages advanced AI and machine learning to optimize your travel experience. All predictions
          and recommendations are powered by our proprietary algorithms.
        </motion.div>
      </div>
    </div>
  )
}

