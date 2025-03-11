"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { filterDestinations, paginateDestinations } from "@/app/lib/filter-and-paginate"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card" // Import Card component
import { Button } from "@/components/ui/button" // Import Button component
import FlynAISearchBar from "@/app/components/flyn-ai-search-bar" // Import FlynAISearchBar

interface Flight {
  id: string
  from: string
  to: string
  time: string
  status: string
  gate: string
  terminal: string
  progress: number
  statusColor: string
  airlineLogo: string
}

const mockFlights: Flight[] = [
  {
    id: "AA123",
    from: "JFK",
    to: "LAX",
    time: "10:00 AM",
    status: "On time",
    gate: "A5",
    terminal: "T3",
    progress: 100,
    statusColor: "bg-green-500",
    airlineLogo: "/placeholder-logo.svg",
  },
  {
    id: "UA456",
    from: "SFO",
    to: "ORD",
    time: "11:30 AM",
    status: "Delayed",
    gate: "B7",
    terminal: "T2",
    progress: 30,
    statusColor: "bg-yellow-500",
    airlineLogo: "/placeholder-logo.svg",
  },
  {
    id: "DL789",
    from: "ATL",
    to: "MIA",
    time: "1:00 PM",
    status: "Boarding",
    gate: "C9",
    terminal: "T1",
    progress: 0,
    statusColor: "bg-blue-500",
    airlineLogo: "/placeholder-logo.svg",
  },
  // ... more flights
]

export function FlightStatusTracker() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const [flights, setFlights] = useState<Flight[]>([])
  const [filteredFlights, setFilteredFlights] = useState<Flight[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const flightsPerPage = 5

  useEffect(() => {
    const fetchFlights = async () => {
      // Replace with actual API call
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setFlights(mockFlights)
        setFilteredFlights(mockFlights)
      } catch (error) {
        console.error("Error fetching flights:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchFlights()
  }, [])

  useEffect(() => {
    const filtered = filterDestinations(flights, searchTerm)
    setFilteredFlights(filtered)
    setCurrentPage(1) // Reset to first page when filtering
  }, [searchTerm, flights])

  const paginatedFlights = paginateDestinations(filteredFlights, currentPage, flightsPerPage)

  const handleSearch = (query) => {
    setSearchTerm(query)
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const totalPages = Math.ceil(filteredFlights.length / flightsPerPage)

  const FlightBadge = ({ from, to, isDark }) => (
    <motion.div
      className={`relative inline-flex items-center space-x-1 px-1.5 py-0.5 rounded-md text-[8px] ${
        isDark ? "bg-background border border-input text-gray-400" : "bg-background border border-input text-gray-500"
      }`}
      whileHover={{ scale: 1.05 }}
    >
      {/* ... (badge content remains unchanged) */}
    </motion.div>
  )

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-60">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    )
  }

  return (
    <Card className={cn(isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-200")}>
      <CardHeader>
        <CardTitle className="text-foreground">Flight Status Tracker</CardTitle>
        <CardDescription className="text-muted-foreground">Real-time flight monitoring</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <FlynAISearchBar isDark={isDark} onSearch={handleSearch} />
        <div className="space-y-2 sm:space-y-3">
          {paginatedFlights.map((flight) => (
            <motion.div
              key={flight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Number.parseInt(flight.id) * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-2 sm:p-3 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-2">
                  <img
                    src={flight.airlineLogo || "/placeholder.svg"}
                    alt={`${flight.airlineLogo} logo`}
                    className="h-6 w-6"
                  />
                  <div>
                    <p className="text-sm font-medium">{flight.status}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{flight.time}</p>
                  </div>
                </div>
                <FlightBadge from={flight.from} to={flight.to} isDark={isDark} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">
                    {flight.from} - {flight.to}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Gate {flight.gate} - Terminal {flight.terminal}
                  </p>
                </div>
                <div className={`${flight.statusColor} px-2 py-1 rounded-full text-white text-xs`}>{flight.status}</div>
              </div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                <div className={`${flight.statusColor} h-2 rounded-full`} style={{ width: `${flight.progress}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center mt-4">
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => handlePageChange(page)}
                  className={cn(
                    "relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
                    currentPage === page && "bg-gray-100",
                  )}
                >
                  {page}
                </Button>
              ))}
            </nav>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

