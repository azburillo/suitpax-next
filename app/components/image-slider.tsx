"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { cn } from "@/app/lib/utils"

interface SlideData {
  image: string
  title: string
  description: string
}

// Function to shuffle the slides array and remove duplicates
function shuffleAndDeduplicate(array: SlideData[]) {
  const shuffled = array.sort(() => 0.5 - Math.random())
  const seen = new Set()
  return shuffled.filter((item) => {
    if (!seen.has(item.image)) {
      seen.add(item.image)
      return true
    }
    return false
  })
}

const slides: SlideData[] = shuffleAndDeduplicate([
  {
    image:
      "https://ny10xbvnsvd5lllr.public.blob.vercel-storage.com/suitpax-art-tech/suitpax-night-terminal-mCbzPdcGgZAaB6uEq9zQMh26Ve3gFy.webp",
    title: "24/7 Smart Operations",
    description: "Ensure smooth travel experiences around the clock with our intelligent management systems.",
  },
  {
    image:
      "https://ny10xbvnsvd5lllr.public.blob.vercel-storage.com/suitpax-art-tech/suitpax-london-city-o9SdC0Oa6JmTADQyjHAIpCYWabLQvq.webp",
    title: "Seamless City Transfers",
    description: "Connect airports to urban centers effortlessly with our integrated transfer solutions.",
  },
  {
    image:
      "https://ny10xbvnsvd5lllr.public.blob.vercel-storage.com/suitpax-art-tech/suitpax-future-airport-OokOpunGWBXg4z3EJEyaRYtL0SfbnJ.webp",
    title: "Future-Ready Airports",
    description: "Transform air travel with our forward-thinking infrastructure and technology integrations.",
  },
  {
    image:
      "https://ny10xbvnsvd5lllr.public.blob.vercel-storage.com/suitpax-art-tech/suitpax-city-london-MdgeFO9TNYHzkgUpM1moqMgVWB2jt3.webp",
    title: "Global Connectivity",
    description: "Link major cities worldwide through our advanced booking and management platforms.",
  },
  {
    image:
      "https://ny10xbvnsvd5lllr.public.blob.vercel-storage.com/suitpax-art-tech/openart-image_ZSFbb24x_1737174010297_raw-gmkByLJGq51gU7FH8zkj4rdQo8yjZ4.webp",
    title: "VIP Lounge Experience",
    description: "Elevate traveler comfort with our luxurious and efficiently managed VIP lounges.",
  },
  {
    image:
      "https://ny10xbvnsvd5lllr.public.blob.vercel-storage.com/suitpax-art-tech/image_8iXlTKDd_1737172091768_raw-e8S4QCSdVBooysVc0RDbclVVm3sclJ.jpg",
    title: "Integrated Travel Ecosystem",
    description:
      "Experience a fully connected travel journey from booking to arrival with Suitpax's comprehensive solutions.",
  },

  {
    image:
      "https://ny10xbvnsvd5lllr.public.blob.vercel-storage.com/suitpax-art-tech/image_ibeux-F0_1737173809631_raw-zVnABFB6QnXq8218uo3NG7IyVX9YUb.jpg",
    title: "Futuristic Travel Hub",
    description: "Experience the cutting-edge of travel technology in our state-of-the-art facilities.",
  },
])

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-square overflow-hidden rounded-2xl">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentIndex].image || "/placeholder.svg"}
            alt={slides[currentIndex].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 p-4 text-white">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-transparent backdrop-blur-xs rounded-xl p-3 border border-white/10"
            >
              <h2 className="text-sm font-semibold mb-2">{slides[currentIndex].title}</h2>
              <p className="text-sm">{slides[currentIndex].description}</p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
      >
        <ChevronLeftIcon size={15} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
      >
        <ChevronRightIcon size={15} />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              index === currentIndex ? "bg-white" : "bg-white/50",
            )}
          />
        ))}
      </div>
    </div>
  )
}

