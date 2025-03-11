"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckIcon } from "@heroicons/react/24/solid"
import { cn } from "@/lib/utils"
import { worldCities } from "@/app/data/world-cities" // Import worldCities instead

const transitionProps = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  mass: 0.5,
}

export function CitySelector() {
  const [selected, setSelected] = useState<string[]>([])

  const toggleCity = (city: string) => {
    setSelected((prev) => (prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]))
  }

  // Convert worldCities object to an array of city names
  const cityNames = Object.values(worldCities)
    .flatMap((continent) => Object.values(continent))
    .flatMap((regionCities) => regionCities.map((city) => city.name))

  return (
    <div className="min-h-screen bg-black p-6 pt-24 md:pt-32 lg:pt-40">
      <h1 className="text-white text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12 text-center">
        Explore the world with Suitpax. Select your dream destinations:
      </h1>
      <div className="max-w-[570px] mx-auto">
        <motion.div className="flex flex-wrap gap-3 overflow-visible" layout transition={transitionProps}>
          {cityNames.map((cityName) => {
            const isSelected = selected.includes(cityName)
            return (
              <motion.button
                key={cityName}
                onClick={() => toggleCity(cityName)}
                layout
                initial={false}
                animate={{
                  backgroundColor: isSelected ? "#2a1711" : "rgba(39, 39, 42, 0.5)",
                }}
                whileHover={{
                  backgroundColor: isSelected ? "#2a1711" : "rgba(39, 39, 42, 0.8)",
                }}
                whileTap={{
                  backgroundColor: isSelected ? "#1f1209" : "rgba(39, 39, 42, 0.9)",
                }}
                transition={{
                  ...transitionProps,
                  backgroundColor: { duration: 0.1 },
                }}
                className={cn(
                  "inline-flex items-center px-4 py-2 rounded-full text-base font-medium whitespace-nowrap overflow-hidden ring-1 ring-inset",
                  isSelected
                    ? "text-[#ff9066] ring-[hsla(0,0%,100%,0.12)]"
                    : "text-zinc-400 ring-[hsla(0,0%,100%,0.06)]",
                )}
              >
                <motion.div
                  className="relative flex items-center"
                  animate={{
                    width: isSelected ? "auto" : "100%",
                    paddingRight: isSelected ? "1.5rem" : "0",
                  }}
                  transition={{
                    ease: [0.175, 0.885, 0.32, 1.275],
                    duration: 0.3,
                  }}
                >
                  <span>{cityName}</span>
                  <AnimatePresence>
                    {isSelected && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={transitionProps}
                        className="absolute right-0"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#ff9066] flex items-center justify-center">
                          <CheckIcon className="w-3 h-3 text-[#2a1711]" strokeWidth={1.5} />
                        </div>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.button>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

