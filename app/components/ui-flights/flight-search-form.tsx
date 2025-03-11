"use client"

import { useState } from "react"
import { Calendar, Plane, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FlightSearchForm() {
  const [fromCity, setFromCity] = useState("")
  const [toCity, setToCity] = useState("")
  const [date, setDate] = useState("")
  const [passengers, setPassengers] = useState("1")

  return (
    <div className="w-full space-y-4 p-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="From"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            className="pl-10 bg-white/5 border-white/10 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/60 rounded-lg"
          />
          <Plane className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-white/60" />
        </div>
        <div className="relative">
          <Input
            type="text"
            placeholder="To"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
            className="pl-10 bg-white/5 border-white/10 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/60 rounded-lg"
          />
          <Plane className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-white/60 rotate-90" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="pl-10 bg-white/5 border-white/10 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/60 rounded-lg"
          />
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-white/60" />
        </div>
        <div className="relative">
          <Input
            type="number"
            min="1"
            placeholder="Passengers"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="pl-10 bg-white/5 border-white/10 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/60 rounded-lg"
          />
          <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-white/60" />
        </div>
      </div>
      <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white border-none">
        Search Flights
      </Button>
    </div>
  )
}

