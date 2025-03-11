"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function StaysHero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Luxury hotel room"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <motion.div
        className="relative z-10 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-5xl font-bold mb-4">Discover Your Perfect Stay</h1>
        <p className="text-xl mb-8">Unparalleled comfort and luxury await you</p>
        <motion.button
          className="bg-teal-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Stays
        </motion.button>
      </motion.div>
    </div>
  )
}

