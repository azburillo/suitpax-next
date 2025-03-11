"use client"

import type React from "react"
import { motion } from "framer-motion"

export const RainbowBadge: React.FC = () => {
  return (
    <div className="relative inline-flex">
      <motion.span
        className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-300 to-gray-400"
        animate={{
          background: [
            "linear-gradient(0deg, #d1d5db, #9ca3af)",
            "linear-gradient(90deg, #d1d5db, #9ca3af)",
            "linear-gradient(180deg, #d1d5db, #9ca3af)",
            "linear-gradient(270deg, #d1d5db, #9ca3af)",
          ],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 4,
          ease: "linear",
        }}
      />
      <span className="relative px-1 py-0.5 text-[10px] font-semibold text-gray-700 bg-white rounded-full">EXTRA</span>
    </div>
  )
}

