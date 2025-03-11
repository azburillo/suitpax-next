"use client"

import { motion } from "framer-motion"

export function StaysCTA() {
  return (
    <div className="bg-teal-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to Experience Luxury?</h2>
          <p className="mt-4 text-xl text-teal-100">
            Book your dream stay today and indulge in unparalleled comfort and elegance.
          </p>
          <motion.button
            className="mt-8 bg-white text-teal-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-50 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

