"use client"
import React from "react"
import { Badge } from "@/app/components/ui/badge"

interface CountdownTimerProps {
  targetDate: Date
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = React.useState<number>(0)

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()
      setTimeLeft(difference > 0 ? difference : 0)
    }

    calculateTimeLeft()
    const interval = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  const formatTime = (milliseconds: number) => {
    const seconds = Math.floor((milliseconds / 1000) % 60)
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60)
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24)
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24))

    return `${days}d ${hours}h ${minutes}m ${seconds}s`
  }

  return (
    <Badge className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-white bg-transparent backdrop-blur-md border-gray-100 transition-colors duration-200">
      <span className="mr-2">Launching in:</span> <span>{formatTime(timeLeft)}</span>
    </Badge>
  )
}

