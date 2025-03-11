"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface NumberFlowProps {
  value: number
  prefix?: string
  suffix?: string
  className?: string
}

// Add the named export here
export function NumberFlow({ value, prefix = "", suffix = "", className = "" }: NumberFlowProps) {
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => {
    setDisplayValue(value)
  }, [value])

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={displayValue}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          className="flex items-baseline"
        >
          {prefix && <span className="text-2xl sm:text-3xl font-medium mr-1">{prefix}</span>}
          <span className="text-2xl sm:text-3xl font-bold">{Math.round(displayValue).toLocaleString()}</span>
          {suffix && <span className="text-2xl sm:text-3xl font-medium ml-1">{suffix}</span>}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// If you want to also keep the default export, you can add this line:
// export default NumberFlow

