"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Plane, Clock, Calendar, User } from "lucide-react"
import { motion } from "framer-motion"
import { airlines } from "@/app/data/airlines"
import { AnimatedCursor } from "@/app/components/ui/animated-cursor"

// Define the structure for a flight leg
interface FlightLeg {
  id: string
  airline: string
  flightNumber: string
  departureCity: string
  departureAirport: string
  departureTime: string
  arrivalCity: string
  arrivalAirport: string
  arrivalTime: string
  duration: string
  date: string
}

// Define the structure for a multi-leg itinerary
interface FlightItinerary {
  id: string
  legs: FlightLeg[]
  totalDuration: string
  totalPrice: number
}

// Sample flight itineraries
const flightItineraries: FlightItinerary[] = [
  {
    id: "1",
    legs: [
      {
        id: "1a",
        airline: "Lufthansa",
        flightNumber: "LH-456",
        departureCity: "New York",
        departureAirport: "JFK",
        departureTime: "08:30",
        arrivalCity: "Frankfurt",
        arrivalAirport: "FRA",
        arrivalTime: "22:15",
        duration: "7h 45m",
        date: "2023-11-15",
      },
      {
        id: "1b",
        airline: "Lufthansa",
        flightNumber: "LH-732",
        departureCity: "Frankfurt",
        departureAirport: "FRA",
        departureTime: "23:45",
        arrivalCity: "Tokyo",
        arrivalAirport: "HND",
        arrivalTime: "18:30",
        duration: "11h 45m",
        date: "2023-11-16",
      },
    ],
    totalDuration: "19h 30m",
    totalPrice: 1245,
  },
  {
    id: "2",
    legs: [
      {
        id: "2a",
        airline: "Emirates",
        flightNumber: "EK-201",
        departureCity: "London",
        departureAirport: "LHR",
        departureTime: "14:15",
        arrivalCity: "Dubai",
        arrivalAirport: "DXB",
        arrivalTime: "00:30",
        duration: "6h 15m",
        date: "2023-11-20",
      },
      {
        id: "2b",
        airline: "Emirates",
        flightNumber: "EK-418",
        departureCity: "Dubai",
        departureAirport: "DXB",
        departureTime: "03:15",
        arrivalCity: "Sydney",
        arrivalAirport: "SYD",
        arrivalTime: "22:05",
        duration: "13h 50m",
        date: "2023-11-21",
      },
    ],
    totalDuration: "20h 05m",
    totalPrice: 1680,
  },
  {
    id: "3",
    legs: [
      {
        id: "3a",
        airline: "Delta Air Lines",
        flightNumber: "DL-123",
        departureCity: "Los Angeles",
        departureAirport: "LAX",
        departureTime: "10:45",
        arrivalCity: "New York",
        arrivalAirport: "JFK",
        arrivalTime: "19:15",
        duration: "5h 30m",
        date: "2023-11-25",
      },
      {
        id: "3b",
        airline: "Delta Air Lines",
        flightNumber: "DL-70",
        departureCity: "New York",
        departureAirport: "JFK",
        departureTime: "21:30",
        arrivalCity: "London",
        arrivalAirport: "LHR",
        arrivalTime: "09:45",
        duration: "7h 15m",
        date: "2023-11-26",
      },
    ],
    totalDuration: "12h 45m",
    totalPrice: 1120,
  },
]

// Get airline logo by name
const getAirlineLogo = (airlineName: string) => {
  const airline = airlines.find((a) => a.name === airlineName)
  return airline?.logo || "/placeholder.svg?height=24&width=24"
}

export function FloatingFlights() {
  const [activeItinerary, setActiveItinerary] = useState(0)
  const [activeLeg, setActiveLeg] = useState<number | null>(null)
  const [activeElement, setActiveElement] = useState<string | null>(null)

  // Rotate through itineraries every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItinerary((prev) => (prev + 1) % flightItineraries.length)
      setActiveLeg(null) // Reset active leg when changing itinerary
      setActiveElement(null)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  // Generate cursor positions based on current itinerary with more detailed points
  const getCursorPositions = () => {
    const currentLegs = flightItineraries[activeItinerary].legs
    const positions = []

    // For each leg, create multiple positions to highlight different parts
    for (let i = 0; i < currentLegs.length; i++) {
      // Airline logo and name
      positions.push({
        top: 100 + i * 80 + 10,
        left: i % 2 === 0 ? "20%" : "60%",
        element: `airline-${i}`,
      })

      // Departure info
      positions.push({
        top: 100 + i * 80 + 30,
        left: i % 2 === 0 ? "15%" : "55%",
        element: `departure-${i}`,
      })

      // Flight duration
      positions.push({
        top: 100 + i * 80 + 30,
        left: i % 2 === 0 ? "30%" : "70%",
        element: `duration-${i}`,
      })

      // Arrival info
      positions.push({
        top: 100 + i * 80 + 30,
        left: i % 2 === 0 ? "45%" : "85%",
        element: `arrival-${i}`,
      })

      // Date info
      positions.push({
        top: 100 + i * 80 + 50,
        left: i % 2 === 0 ? "20%" : "60%",
        element: `date-${i}`,
      })
    }

    // Price badge - multiple positions to highlight different parts
    positions.push({ top: 240, left: "75%", element: "duration-total" })
    positions.push({ top: 260, left: "80%", element: "price-total" })

    return positions
  }

  // Get all cursor positions
  const allPositions = getCursorPositions()

  // Extract just the position coordinates for the AnimatedCursor component
  const cursorPositions = allPositions.map(({ top, left }) => ({ top, left }))

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-lg">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-gray-100 dark:bg-grid-white/10 opacity-30" />

      {/* Itinerary indicator */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
        <h3 className="text-gray-800 dark:text-white font-medium">Multi-City Flight</h3>
        <div className="flex space-x-1">
          {flightItineraries.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 w-5 rounded-full transition-all duration-300 ${
                index === activeItinerary ? "bg-emerald-500" : "bg-gray-300 dark:bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating flight badges */}
      {flightItineraries.map((itinerary, itineraryIndex) => (
        <div key={itinerary.id} className={activeItinerary === itineraryIndex ? "block" : "hidden"}>
          {itinerary.legs.map((leg, legIndex) => {
            // Calculate position for each badge
            const topPosition = 100 + legIndex * 80
            const leftPosition = legIndex % 2 === 0 ? "15%" : "55%"

            return (
              <motion.div
                key={leg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: activeLeg === legIndex ? 1.05 : 1,
                  boxShadow:
                    activeLeg === legIndex
                      ? "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                      : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ delay: legIndex * 0.2, duration: 0.3 }}
                className="absolute bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-lg border border-gray-200 dark:border-white/20 p-3 shadow-md"
                style={{ top: topPosition, left: leftPosition, width: "30%" }}
              >
                <div
                  className={`flex items-center justify-between mb-2 ${activeElement === `airline-${legIndex}` ? "text-emerald-500" : ""}`}
                >
                  <div className="flex items-center gap-2">
                    <div className="relative h-5 w-5 rounded-full bg-white p-1 shadow-sm">
                      <Image
                        src={getAirlineLogo(leg.airline) || "/placeholder.svg"}
                        alt={leg.airline}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-gray-800 dark:text-white text-xs font-medium">{leg.airline}</span>
                  </div>
                  <span className="text-gray-500 dark:text-white/70 text-xs">{leg.flightNumber}</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className={`text-center ${activeElement === `departure-${legIndex}` ? "text-emerald-500" : ""}`}>
                    <p className="text-gray-800 dark:text-white font-bold text-sm">{leg.departureTime}</p>
                    <p className="text-gray-500 dark:text-white/70 text-xs">{leg.departureAirport}</p>
                  </div>

                  <div
                    className={`flex-1 mx-2 ${activeElement === `duration-${legIndex}` ? "opacity-100" : "opacity-80"}`}
                  >
                    <div className="relative h-[2px] bg-gray-200 dark:bg-white/30">
                      <Plane
                        className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 ${activeElement === `duration-${legIndex}` ? "text-emerald-400 scale-125" : "text-emerald-500"} h-2.5 w-2.5 transition-all duration-300`}
                      />
                    </div>
                    <p className="text-gray-500 dark:text-white/70 text-[10px] text-center mt-1">{leg.duration}</p>
                  </div>

                  <div className={`text-center ${activeElement === `arrival-${legIndex}` ? "text-emerald-500" : ""}`}>
                    <p className="text-gray-800 dark:text-white font-bold text-sm">{leg.arrivalTime}</p>
                    <p className="text-gray-500 dark:text-white/70 text-xs">{leg.arrivalAirport}</p>
                  </div>
                </div>

                <div
                  className={`mt-2 flex items-center justify-between ${activeElement === `date-${legIndex}` ? "text-emerald-500" : ""}`}
                >
                  <div className="flex items-center gap-1">
                    <Calendar className="text-gray-500 dark:text-white/70 h-2.5 w-2.5" />
                    <span className="text-gray-500 dark:text-white/70 text-[10px]">{leg.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="text-gray-500 dark:text-white/70 h-2.5 w-2.5" />
                    <span className="text-gray-500 dark:text-white/70 text-[10px]">1 Adult</span>
                  </div>
                </div>
              </motion.div>
            )
          })}

          {/* Total price and duration badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: activeElement === "price-total" || activeElement === "duration-total" ? 1.05 : 1,
            }}
            transition={{ delay: 0.6, duration: 0.3 }}
            className="absolute top-[240px] right-[20%] bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg p-2 shadow-lg"
          >
            <div
              className={`flex items-center gap-2 ${activeElement === "duration-total" ? "text-white font-bold" : "text-white"}`}
            >
              <Clock className="text-white h-3 w-3" />
              <span className="text-white text-xs font-medium">{itinerary.totalDuration}</span>
            </div>
            <p
              className={`text-white font-bold text-base mt-1 ${activeElement === "price-total" ? "text-white scale-105" : "text-white"}`}
            >
              ${itinerary.totalPrice}
            </p>
          </motion.div>
        </div>
      ))}

      {/* Animated cursor */}
      <AnimatedCursor
        positions={cursorPositions}
        color="silver"
        size={6}
        duration={0.8}
        delay={1.8}
        onPositionChange={(index) => {
          const currentPositionInfo = allPositions[index]
          const element = currentPositionInfo.element

          // Set active element for highlighting
          setActiveElement(element)

          // Set active leg based on the element
          if (element && element.includes("-")) {
            const parts = element.split("-")
            if (parts[0] !== "price" && parts[0] !== "duration" && parts.length > 1) {
              const legIndex = Number.parseInt(parts[1])
              setActiveLeg(legIndex)
            } else {
              setActiveLeg(null)
            }
          }
        }}
      />
    </div>
  )
}

