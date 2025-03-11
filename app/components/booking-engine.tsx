"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { FaPlane, FaHotel, FaGlassMartini, FaSearch, FaCalendarAlt, FaUsers, FaCreditCard } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { cities, airports, flights, hotels, vipLounges, airlines, travelPackages } from "@/app/data/mock-data"

const FlynAI = ({ isDark, onSearch }) => {
  const [query, setQuery] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const typingTimeoutRef = useRef(null)

  const handleInputChange = (e) => {
    setQuery(e.target.value)
    setIsTyping(true)

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false)
      onSearch(e.target.value)
    }, 500)
  }

  return (
    <div className="relative mt-4">
      <Input
        type="text"
        placeholder="Ask Flyn AI for travel suggestions..."
        value={query}
        onChange={handleInputChange}
        className={cn("pr-10 text-sm", isDark ? "bg-zinc-800 border-zinc-700" : "bg-white border-gray-300")}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        {isTyping ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <FaSearch className="h-4 w-4 text-gray-400" />
          </motion.div>
        ) : (
          <FaSearch className="h-4 w-4 text-gray-400" />
        )}
      </div>
    </div>
  )
}

export function BookingEngine() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const [departureDate, setDepartureDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const [fromCity, setFromCity] = useState("")
  const [toCity, setToCity] = useState("")
  const [passengers, setPassengers] = useState(1)
  const [tripType, setTripType] = useState("roundtrip")
  const [searchResults, setSearchResults] = useState({ flights: [], hotels: [], lounges: [], packages: [] })
  const [activeTab, setActiveTab] = useState("flights")
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    handleAISearch()
  }

  const handleAISearch = () => {
    if (!fromCity || !toCity || !departureDate) {
      alert("Please fill in all required fields before searching.")
      return
    }

    setIsLoading(true)
    setShowResults(false)

    setTimeout(() => {
      const flightResults = flights
        .filter(
          (flight) =>
            flight.fromAirport.cityId.toString() === fromCity &&
            flight.toAirport.cityId.toString() === toCity &&
            new Date(flight.departureDate).toDateString() === departureDate.toDateString(),
        )
        .sort(() => 0.5 - Math.random())
        .slice(0, 5)

      const hotelResults = hotels
        .filter((hotel) => hotel.cityId.toString() === toCity)
        .sort(() => 0.5 - Math.random())
        .slice(0, 5)

      const loungeResults = vipLounges
        .filter((lounge) => airports.find((airport) => airport.id === lounge.airportId)?.cityId.toString() === fromCity)
        .sort(() => 0.5 - Math.random())
        .slice(0, 5)

      const packageResults = travelPackages
        .filter(
          (pkg) =>
            pkg.flight.fromAirport.cityId.toString() === fromCity &&
            pkg.flight.toAirport.cityId.toString() === toCity &&
            new Date(pkg.flight.departureDate).toDateString() === departureDate.toDateString(),
        )
        .sort(() => 0.5 - Math.random())
        .slice(0, 5)

      setSearchResults({
        flights: flightResults,
        hotels: hotelResults,
        lounges: loungeResults,
        packages: packageResults,
      })
      setIsLoading(false)
      setShowResults(true)
    }, 2000)
  }

  const Loader = () => (
    <motion.div
      className="flex justify-center items-center space-x-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-3 h-3 bg-blue-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.2,
          }}
        />
      ))}
    </motion.div>
  )

  return (
    <Card
      className={cn(
        "w-full max-w-4xl mx-auto",
        isDark ? "bg-zinc-900/50 border-zinc-800" : "bg-white/50 border-gray-200",
      )}
    >
      <CardContent className="p-6">
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="flex space-x-2 mb-4">
            <Badge
              variant={tripType === "roundtrip" ? "default" : "outline"}
              onClick={() => setTripType("roundtrip")}
              className="cursor-pointer"
            >
              Round Trip
            </Badge>
            <Badge
              variant={tripType === "oneway" ? "default" : "outline"}
              onClick={() => setTripType("oneway")}
              className="cursor-pointer"
            >
              One Way
            </Badge>
            <Badge
              variant={tripType === "allinone" ? "default" : "outline"}
              onClick={() => setTripType("allinone")}
              className="cursor-pointer"
            >
              All In One
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="from" className="text-xs font-medium">
                From
              </Label>
              <Select onValueChange={setFromCity}>
                <SelectTrigger
                  className={cn("text-sm", isDark ? "bg-zinc-800 border-zinc-700" : "bg-white border-gray-300")}
                >
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city.id} value={city.id.toString()}>
                      {city.name}, {city.country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="to" className="text-xs font-medium">
                To
              </Label>
              <Select onValueChange={setToCity}>
                <SelectTrigger
                  className={cn("text-sm", isDark ? "bg-zinc-800 border-zinc-700" : "bg-white border-gray-300")}
                >
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city.id} value={city.id.toString()}>
                      {city.name}, {city.country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="departure" className="text-xs font-medium">
                Departure
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal text-sm",
                      !departureDate && "text-muted-foreground",
                      isDark ? "bg-zinc-800 border-zinc-700" : "bg-white border-gray-300",
                    )}
                  >
                    <FaCalendarAlt className="mr-2 h-4 w-4" />
                    {departureDate ? departureDate.toDateString() : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={departureDate} onSelect={setDepartureDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            {tripType === "roundtrip" && (
              <div className="space-y-2">
                <Label htmlFor="return" className="text-xs font-medium">
                  Return
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal text-sm",
                        !returnDate && "text-muted-foreground",
                        isDark ? "bg-zinc-800 border-zinc-700" : "bg-white border-gray-300",
                      )}
                    >
                      <FaCalendarAlt className="mr-2 h-4 w-4" />
                      {returnDate ? returnDate.toDateString() : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            )}
          </div>
          <div className="flex items-end space-x-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="passengers" className="text-xs font-medium">
                Passengers
              </Label>
              <div className="relative">
                <FaUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  id="passengers"
                  type="number"
                  min="1"
                  value={passengers}
                  onChange={(e) => setPassengers(Number.parseInt(e.target.value))}
                  className={cn(
                    "w-full pl-10 text-sm",
                    isDark ? "bg-zinc-800 border-zinc-700" : "bg-white border-gray-300",
                  )}
                />
              </div>
            </div>
            <Button
              type="submit"
              className={cn(
                "flex-1",
                isDark ? "bg-gray-800 hover:bg-gray-700 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-800",
              )}
            >
              <div className="relative w-6 h-6 mr-2">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </div>
              Try Flyn AI
            </Button>
          </div>
        </form>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-8 h-8 rounded-full mx-auto mt-4"
          style={{
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {showResults && (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="flights">
                <FaPlane className="mr-2" />
                Flights
              </TabsTrigger>
              <TabsTrigger value="hotels">
                <FaHotel className="mr-2" />
                Hotels
              </TabsTrigger>
              <TabsTrigger value="lounges">
                <FaGlassMartini className="mr-2" />
                VIP Lounges
              </TabsTrigger>
              <TabsTrigger value="packages">
                <FaCreditCard className="mr-2" />
                All In One
              </TabsTrigger>
            </TabsList>
            <AnimatePresence mode="wait">
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  <TabsContent value="flights">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-2 sm:space-y-3"
                    >
                      {searchResults.flights.map((flight) => (
                        <motion.div
                          key={flight.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: flight.id * 0.1 }}
                          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-2 sm:p-3 relative overflow-hidden"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center space-x-2">
                              <div className="relative w-3 h-3">
                                <motion.div
                                  className="absolute inset-0 rounded-full"
                                  animate={{
                                    background: [
                                      `linear-gradient(to right, ${flight.seatsAvailable > 50 ? "green" : flight.seatsAvailable > 20 ? "yellow" : "red"}, transparent)`,
                                      `linear-gradient(to left, ${flight.seatsAvailable > 50 ? "green" : flight.seatsAvailable > 20 ? "yellow" : "red"}, transparent)`,
                                    ],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "reverse",
                                  }}
                                />
                              </div>
                              <div>
                                <div className="flex items-center space-x-1">
                                  <span className="text-[10px] sm:text-xs font-medium flex items-center">
                                    <span className="inline-flex items-center">
                                      <span className="inline-block w-7 text-right">{flight.fromAirport.code}</span>
                                      <span className="mx-0.5 inline-flex items-center translate-y-[-2px] text-[8px] sm:text-[10px]">
                                        →
                                      </span>
                                      <span className="inline-block w-7 text-left">{flight.toAirport.code}</span>
                                    </span>
                                  </span>
                                </div>
                                <span className="text-[8px] sm:text-[10px] text-gray-500">{flight.flightNumber}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-[9px] sm:text-xs">
                                {new Date(flight.departureDate).toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </div>
                              <div className="text-[8px] sm:text-[10px] text-green-500">${flight.price}</div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center text-[8px] sm:text-[10px] text-gray-500 mb-1">
                            <span>Gate: {flight.gate}</span>
                            <span>Terminal: {flight.terminal}</span>
                          </div>
                          <div className="h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-blue-500"
                              initial={{ width: 0 }}
                              animate={{ width: `${(flight.seatsAvailable / 200) * 100}%` }}
                              transition={{ duration: 1, delay: flight.id * 0.2 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </TabsContent>
                  <TabsContent value="hotels">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-2 sm:space-y-3"
                    >
                      {searchResults.hotels.map((hotel) => (
                        <motion.div
                          key={hotel.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: hotel.id * 0.1 }}
                          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-2 sm:p-3 relative overflow-hidden"
                        >
                          {/* Hotel content */}
                        </motion.div>
                      ))}
                    </motion.div>
                  </TabsContent>
                  <TabsContent value="lounges">{/* Lounges content */}</TabsContent>
                  <TabsContent value="packages">{/* Packages content */}</TabsContent>
                </>
              )}
            </AnimatePresence>
          </Tabs>
        )}
      </CardContent>
    </Card>
  )
}

