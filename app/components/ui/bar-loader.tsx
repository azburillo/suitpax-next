"use client"

import { motion } from "framer-motion"

interface BarLoaderProps {
  isActive: boolean
  onClick: () => void
}

export function BarLoader({ isActive, onClick }: BarLoaderProps) {
  return (
    <motion.button
      className="w-full h-1 bg-zinc-600 rounded-full overflow-hidden"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="h-full bg-white"
        initial={{ width: "0%" }}
        animate={{ width: isActive ? "100%" : "0%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  )
}

