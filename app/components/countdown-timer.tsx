"use client"
import React from "react"

interface CountdownTimerProps {
  targetDate: string
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = React.useState<number>(0)

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate)
      const now = new Date()
      const difference = target.getTime() - now.getTime()
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

  if (timeLeft <= 0) {
    return <span className="text-emerald-400 text-sm sm:text-base md:text-lg lg:text-xl">Launched!</span>
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-white transition-all duration-200 bg-gradient-to-r from-emerald-700 to-emerald-950">
      <span className="mr-2 text-white">Launching in:</span> <span className="text-white">{formatTime(timeLeft)}</span>
    </div>
  )
}

