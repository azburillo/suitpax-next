"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline" // Imported from Heroicons
import Image from "next/image"

interface Testimonial {
  id: number
  company: string
  logo: string
  quote: string
  author: string
  position: string
  stats: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    company: "Meter",
    logo: "https://cdn.simpleicons.org/meter/86B6F6",
    quote:
      "Integration was quick and AuthKit gave us full control over the UI. I have been involved with auth implementations for over a decade and this was a dead simple choice.",
    author: "Sean Rose",
    position: "Product at Meter",
    stats: "10+ years experience",
  },
  {
    id: 2,
    company: "Formal",
    logo: "https://cdn.simpleicons.org/formal/86B6F6",
    quote:
      "The migration to WorkOS was straightforward and has freed up so much of our engineering resources. AuthKit is a game changer for handling user logins.",
    author: "Mokhtar Bacha",
    position: "Founder at Formal",
    stats: "Successful migration",
  },
  {
    id: 3,
    company: "British Airways",
    logo: "https://cdn.simpleicons.org/britishairways/86B6F6",
    quote: "Suitpax has streamlined our operations, resulting in a 22% improvement in overall efficiency.",
    author: "Sean Doyle",
    position: "CEO",
    stats: "22% improvement in efficiency",
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="flex flex-col items-center text-center mb-6">
            <Image
              src={testimonials[currentIndex].logo || "/placeholder.svg"}
              alt={`${testimonials[currentIndex].company} logo`}
              width={120}
              height={40}
              className="mb-8 filter brightness-200"
            />
            <blockquote className="text-2xl md:text-3xl font-light text-gray-100 mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={`/team-members/${testimonials[currentIndex].author.toLowerCase().replace(" ", "-")}.jpg`}
                  alt={testimonials[currentIndex].author}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-100">{testimonials[currentIndex].author}</p>
                <p className="text-sm text-gray-400">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

