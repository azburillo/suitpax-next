"use client"

import { motion } from "framer-motion"
import { Plane, Clock, Check, AlertTriangle } from "lucide-react"

const flights = [
  {
    id: "LH233",
    airline: "Lufthansa",
    from: "FCO",
    to: "JFK",
    status: "on-time",
    departure: "10:30",
    arrival: "20:45",
    progress: 65,
    gate: "B22",
    terminal: "1",
  },
  {
    id: "IB6253",
    airline: "Iberia",
    from: "BCN",
    to: "LHR",
    status: "delayed",
    departure: "14:15",
    arrival: "16:30",
    progress: 25,
    gate: "C10",
    terminal: "2",
    delay: "45 minutes",
  },
  {
    id: "KL602",
    airline: "KLM",
    from: "AMS",
    to: "LAX",
    status: "boarding",
    departure: "9:40",
    arrival: "11:45",
    progress: 0,
    gate: "A15",
    terminal: "3",
  },
  {
    id: "AF1228",
    airline: "Air France",
    from: "ORY",
    to: "FCO",
    status: "scheduled",
    departure: "15:20",
    arrival: "17:10",
    progress: 0,
    gate: "D5",
    terminal: "2",
  },
  {
    id: "BA482",
    airline: "British Airways",
    from: "LHR",
    to: "JFK",
    status: "in-flight",
    departure: "09:15",
    arrival: "18:30",
    progress: 80,
    gate: "G3",
    terminal: "5",
  },
]

export function FlightStatus() {
  return (
    <section className="bg-gray-50/50 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900">Flight Status</h2>
          <p className="mt-4 text-gray-600">Real-time flight monitoring</p>
        </motion.div>

        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl">
          {flights.map((flight, index) => (
            <motion.div
              key={flight.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative overflow-hidden rounded-lg border bg-white p-4 shadow-lg transition-all hover:shadow-xl text-sm">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-lime-100/0 via-lime-100/30 to-lime-100/0"
                  animate={{
                    x: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    opacity: flight.status === "on-time" ? 1 : 0,
                  }}
                />

                <div className="relative flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                        <Plane className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {flight.from} → {flight.to}
                        </div>
                        <div className="text-xs text-gray-500">
                          {flight.airline} Flight {flight.id}
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-xs">
                      <div>
                        {flight.departure} - {flight.arrival}
                      </div>
                      <div>
                        Gate: {flight.gate} | T: {flight.terminal}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {flight.status === "on-time" && (
                        <>
                          <Check className="h-4 w-4 text-lime-500" />
                          <span className="text-sm text-lime-600">On time</span>
                        </>
                      )}
                      {flight.status === "delayed" && (
                        <>
                          <AlertTriangle className="h-4 w-4 text-amber-500" />
                          <span className="text-sm text-amber-600">Delayed</span>
                        </>
                      )}
                      {flight.status === "boarding" && (
                        <>
                          <Clock className="h-4 w-4 text-blue-500" />
                          <span className="text-sm text-blue-600">Boarding</span>
                        </>
                      )}
                      {flight.status === "in-flight" && (
                        <>
                          <Plane className="h-4 w-4 text-blue-500 animate-pulse" />
                          <span className="text-sm text-blue-600">In Flight</span>
                        </>
                      )}
                      {flight.status === "scheduled" && (
                        <>
                          <Clock className="h-4 w-4 text-blue-500" />
                          <span className="text-sm text-blue-600">Scheduled</span>
                        </>
                      )}
                    </div>
                    {flight.delay && <div className="text-xs text-amber-600">Delay: {flight.delay}</div>}
                  </div>
                </div>

                {/* Progress bar */}
                {flight.progress > 0 && (
                  <div className="mt-2">
                    <div className="h-1 overflow-hidden rounded-full bg-gray-100">
                      <motion.div
                        className="h-full bg-lime-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${flight.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

