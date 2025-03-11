"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/app/lib/utils"

interface GlassCreditCardProps {
  cardNumber: string
  cardHolder: string
  expiryDate: string
  cvv: string
}

export function GlassCreditCard({ cardNumber, cardHolder, expiryDate, cvv }: GlassCreditCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const toggleFlip = () => setIsFlipped(!isFlipped)

  return (
    <div className="perspective cursor-pointer" onClick={toggleFlip} style={{ width: "350px", height: "200px" }}>
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className={cn(
            "absolute w-full h-full backface-hidden rounded-xl p-6",
            "bg-gradient-to-br from-purple-500/30 to-blue-500/30",
            "backdrop-blur-md border border-white/20",
            "shadow-xl",
          )}
        >
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-white">Suitpax</div>
              <div className="text-xl font-semibold text-white">VISA</div>
            </div>
            <div className="text-lg font-medium text-white/90">{cardNumber}</div>
            <div className="flex justify-between items-end">
              <div className="text-sm text-white/80">
                <div>{cardHolder}</div>
                <div>{expiryDate}</div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-200 rounded-full" />
            </div>
          </div>
        </div>
        <div
          className={cn(
            "absolute w-full h-full backface-hidden rounded-xl p-6 rotate-y-180",
            "bg-gradient-to-br from-gray-800/80 to-gray-900/80",
            "backdrop-blur-md border border-white/10",
            "shadow-xl",
          )}
        >
          <div className="flex flex-col justify-between h-full">
            <div className="w-full h-10 bg-gray-600/50 rounded" />
            <div className="flex items-center space-x-2">
              <div className="flex-grow h-8 bg-white/20 rounded" />
              <div className="text-white font-mono">{cvv}</div>
            </div>
            <div className="text-xs text-white/60 text-center">
              This card is property of Suitpax. If found, please return to the nearest Suitpax office.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

