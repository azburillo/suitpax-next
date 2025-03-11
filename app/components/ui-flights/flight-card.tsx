import { Plane } from "lucide-react"
import Image from "next/image"

interface FlightCardProps {
  airline: string
  flightNumber: string
  departure: string
  arrival: string
  departureTime: string
  arrivalTime: string
  duration: string
  price: number
  logo: string
}

export function FlightCard({
  airline,
  flightNumber,
  departure,
  arrival,
  departureTime,
  arrivalTime,
  duration,
  price,
  logo,
}: FlightCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-md p-4 hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 relative">
            <Image
              src={logo || "/placeholder.svg"}
              alt={airline}
              fill
              className="object-contain rounded-full bg-white p-1 shadow-sm"
            />
          </div>
          <div>
            <p className="text-gray-800 dark:text-white font-medium">{airline}</p>
            <p className="text-gray-500 dark:text-white/60 text-sm">{flightNumber}</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-gray-800 dark:text-white font-bold text-xl">${price}</p>
          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Best Price</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-center">
          <p className="text-gray-800 dark:text-white font-medium text-lg">{departureTime}</p>
          <p className="text-gray-500 dark:text-white/60">{departure}</p>
        </div>
        <div className="flex-1 mx-4">
          <div className="relative">
            <div className="border-t border-dashed border-gray-300 dark:border-white/20 w-full absolute top-1/2 -translate-y-1/2" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-100 dark:bg-emerald-900/30 p-1 rounded-full">
              <Plane className="text-emerald-600 dark:text-emerald-400 h-3 w-3" />
            </div>
          </div>
          <p className="text-gray-500 dark:text-white/60 text-center text-sm mt-2">{duration}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-800 dark:text-white font-medium text-lg">{arrivalTime}</p>
          <p className="text-gray-500 dark:text-white/60">{arrival}</p>
        </div>
      </div>
    </div>
  )
}

