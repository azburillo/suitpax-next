"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FlightSearchForm } from "./ui-flights/flight-search-form"
import { FlightCard } from "./ui-flights/flight-card"
import { FlightBenefits } from "./ui-flights/flight-benefits"
import { FloatingFlights } from "./ui-flights/floating-flights"
import { Button } from "@/components/ui/button"

const DEMO_FLIGHTS = [
  {
    airline: "Qatar Airways",
    flightNumber: "QR-1289",
    departure: "CGK",
    arrival: "DPS",
    departureTime: "07:15",
    arrivalTime: "09:15",
    duration: "2h 45m",
    price: 117,
    logo: "/placeholder.svg?height=32&width=32",
  },
  {
    airline: "Garuda Indonesia",
    flightNumber: "GA-6732",
    departure: "CGK",
    arrival: "DPS",
    departureTime: "07:15",
    arrivalTime: "09:15",
    duration: "2h 45m",
    price: 127,
    logo: "/placeholder.svg?height=32&width=32",
  },
]

const DEMO_BENEFITS = [
  {
    title: "Free Luggage 10Kg",
    description: "Carry your essentials with complimentary baggage allowance",
  },
  {
    title: "Free Cabin 8Kg",
    description: "Additional cabin baggage for your convenience",
  },
  {
    title: "Free Reschedule",
    description: "Flexibility to change your flight dates when needed",
  },
]

export function JoinFlights() {
  const [activeSlide, setActiveSlide] = useState(0)
  const totalSlides = 2
  const sliderRef = useRef<HTMLDivElement>(null)

  const goToSlide = (index: number) => {
    setActiveSlide(index)
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`
    }
  }

  const nextSlide = () => {
    const next = (activeSlide + 1) % totalSlides
    goToSlide(next)
  }

  const prevSlide = () => {
    const prev = (activeSlide - 1 + totalSlides) % totalSlides
    goToSlide(prev)
  }

  // Auto-rotate slides every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 10000)
    return () => clearInterval(interval)
  }, [nextSlide]) // Fixed dependency

  return (
    <div className="w-full max-w-5xl mx-auto my-12">
      <div className="relative overflow-hidden rounded-xl">
        {/* Slider navigation */}
        <div className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2">
          <Button
            variant="outline"
            size="icon"
            className="bg-white/20 border-white/20 backdrop-blur-md hover:bg-white/30 text-gray-800 dark:text-white rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>
        <div className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2">
          <Button
            variant="outline"
            size="icon"
            className="bg-white/20 border-white/20 backdrop-blur-md hover:bg-white/30 text-gray-800 dark:text-white rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Slider indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-${activeSlide === index ? "6" : "2"} rounded-full transition-all duration-300 ${
                activeSlide === index ? "bg-emerald-500" : "bg-gray-300 dark:bg-white/30"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slider content */}
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ width: `${totalSlides * 100}%` }}
        >
          {/* Slide 1: Flight Search */}
          <div className="w-full" style={{ flex: `0 0 ${100 / totalSlides}%` }}>
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 md:p-8">
              <div className="absolute inset-0 bg-grid-gray-100 dark:bg-grid-white/10 opacity-30" />

              <div className="relative space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    Find Your Perfect Flight
                  </h2>
                  <p className="text-gray-600 dark:text-white/60">Search and compare flights from multiple airlines</p>
                </div>

                <FlightSearchForm />

                <div className="space-y-4">
                  {DEMO_FLIGHTS.map((flight, index) => (
                    <FlightCard key={index} {...flight} />
                  ))}
                </div>

                <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-xl border border-gray-200 dark:border-white/10 p-4">
                  <FlightBenefits benefits={DEMO_BENEFITS} />
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2: Multi-leg Flights */}
          <div className="w-full" style={{ flex: `0 0 ${100 / totalSlides}%` }}>
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 md:p-8">
              <div className="absolute inset-0 bg-grid-gray-100 dark:bg-grid-white/10 opacity-30" />

              <div className="relative space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    Multi-City Adventures
                  </h2>
                  <p className="text-gray-600 dark:text-white/60">
                    Explore complex itineraries with our multi-leg flight options
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white">Interactive Flight Planner</h3>
                    <p className="text-gray-600 dark:text-white/60 text-sm">
                      Our intelligent flight planner helps you create the perfect multi-city itinerary with optimal
                      connections and the best prices.
                    </p>
                    <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-xl border border-gray-200 dark:border-white/10 p-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mt-0.5">
                            <span className="text-emerald-600 dark:text-emerald-400 text-xs">✓</span>
                          </div>
                          <span className="text-sm text-gray-700 dark:text-white/80">Optimized connections</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mt-0.5">
                            <span className="text-emerald-600 dark:text-emerald-400 text-xs">✓</span>
                          </div>
                          <span className="text-sm text-gray-700 dark:text-white/80">Best price guarantee</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mt-0.5">
                            <span className="text-emerald-600 dark:text-emerald-400 text-xs">✓</span>
                          </div>
                          <span className="text-sm text-gray-700 dark:text-white/80">24/7 travel support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <FloatingFlights />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

