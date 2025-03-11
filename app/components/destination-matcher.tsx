"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const destinations = [
  {
    id: 1,
    name: "San Francisco",
    image: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg",
    popularity: 0.85,
    tags: ["Golden Gate Bridge", "Tech Hub"],
    description: "Explore iconic landmarks and the vibrant tech scene in the City by the Bay.",
  },
  {
    id: 2,
    name: "New York City",
    image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg",
    popularity: 0.9,
    tags: ["Skyscrapers", "Central Park"],
    description: "Experience the energy of the Big Apple with its iconic skyline and diverse neighborhoods.",
  },
  {
    id: 3,
    name: "Paris",
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    popularity: 0.88,
    tags: ["Eiffel Tower", "Louvre Museum"],
    description: "Discover the romantic charm of Paris with its world-class museums and iconic landmarks.",
  },
  {
    id: 4,
    name: "Tokyo",
    image: "https://images.pexels.com/photos/11007202/pexels-photo-11007202.jpeg",
    popularity: 0.82,
    tags: ["Shibuya Crossing", "Meiji Shrine"],
    description: "Immerse yourself in the vibrant culture and technological marvels of Tokyo.",
  },
  {
    id: 5,
    name: "London",
    image: "https://images.pexels.com/photos/236747/pexels-photo-236747.jpeg",
    popularity: 0.8,
    tags: ["Big Ben", "Tower Bridge"],
    description: "Explore the historical landmarks and bustling streets of London.",
  },
  {
    id: 6,
    name: "Rome",
    image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg",
    popularity: 0.75,
    tags: ["Colosseum", "Trevi Fountain"],
    description: "Discover the ancient ruins and artistic treasures of Rome.",
  },
]

export const DestinationMatcher = () => {
  const [currentDestination, setCurrentDestination] = useState(0)

  const handleSwipe = (direction) => {
    if (direction === "right") {
      console.log(`Matched with ${destinations[currentDestination].name}`)
    }
    setCurrentDestination((prev) => (prev + 1) % destinations.length)
  }

  return (
    <div className="relative w-full max-w-sm mx-auto h-[500px] mb-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentDestination}
          className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={destinations[currentDestination].image || "/placeholder.svg"}
            alt={destinations[currentDestination].name}
            width={500}
            height={500}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading="eager"
            priority={true}
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-white text-2xl font-bold mb-2">{destinations[currentDestination].name}</h3>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex flex-wrap items-center gap-2">
                {destinations[currentDestination].tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`text-xs px-2 py-1 rounded-full ${
                      index % 2 === 0 ? "bg-blue-200 text-blue-800" : "bg-green-200 text-green-800"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => handleSwipe("left")}
                  variant="secondary"
                  size="sm"
                  className="rounded-full text-xs font-semibold px-3 py-1 h-auto bg-red-200 text-red-800 hover:bg-red-300"
                >
                  Skip
                </Button>
                <Button
                  onClick={() => handleSwipe("right")}
                  variant="default"
                  size="sm"
                  className="rounded-full text-xs font-semibold px-3 py-1 h-auto bg-green-200 text-green-800 hover:bg-green-300"
                >
                  Match
                </Button>
              </div>
            </div>
            <p className="text-white text-sm">{destinations[currentDestination].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

