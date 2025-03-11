"use client"

import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

interface Logo {
  id: number
  name: string
  src: string
}

interface LogoColumnProps {
  logos: Logo[]
  columnIndex: number
  currentTime: number
}

function LogoColumn({ logos, columnIndex, currentTime }: LogoColumnProps) {
  const CYCLE_DURATION = 2000
  const columnDelay = columnIndex * 200
  const adjustedTime = (currentTime + columnDelay) % (CYCLE_DURATION * logos.length)
  const currentIndex = Math.floor(adjustedTime / CYCLE_DURATION)
  const currentLogo = logos[currentIndex]

  // Ensure currentLogo exists before accessing properties
  if (!currentLogo) {
    return null // Or a placeholder/loading indicator
  }

  return (
    <motion.div
      className="relative h-16 w-24 overflow-hidden md:h-24 md:w-48"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: columnIndex * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentLogo.id}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "10%", opacity: 0 }}
          animate={{
            y: "0%",
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        >
          <Image
            src={currentLogo.src || "/placeholder.svg"}
            alt={currentLogo.name}
            width={120}
            height={40}
            className="h-auto w-auto max-h-[90%] max-w-[90%] md:max-h-[100%] md:max-w-[100%] object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

interface LogoCarouselProps {
  columns?: number
  logos: Logo[]
  className?: string
}

export function LogoCarousel({ columns = 2, logos, className = "" }: LogoCarouselProps) {
  const [logoColumns, setLogoColumns] = useState<Logo[][]>([])
  const [time, setTime] = useState(0)

  const distributeLogos = useCallback(
    (logos: Logo[]) => {
      const shuffled = [...logos].sort(() => Math.random() - 0.5)
      const result: Logo[][] = Array.from({ length: columns }, () => [])

      shuffled.forEach((logo, index) => {
        result[index % columns].push(logo)
      })

      const maxLength = Math.max(...result.map((col) => col.length))
      result.forEach((col) => {
        while (col.length < maxLength) {
          col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
        }
      })

      return result
    },
    [columns],
  )

  useEffect(() => {
    setLogoColumns(distributeLogos(logos))
  }, [logos, distributeLogos])

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 100)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`flex justify-center gap-4 py-9 overflow-hidden ${className}`}>
      {logoColumns.map((columnLogos, index) => (
        <LogoColumn key={index} logos={columnLogos} columnIndex={index} currentTime={time} />
      ))}
    </div>
  )
}

