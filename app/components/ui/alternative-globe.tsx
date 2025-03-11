"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { Badge } from "@/components/ui/badge"
import { airports } from "@/app/data/airports"
import createGlobe from "cobe"
import { useTheme } from "next-themes"
import { motion, useAnimation } from "framer-motion"
import citiesData from "@/app/data/cities.json"
import { vipLounges } from "@/app/data/vip-lounges"

interface Marker {
  location: [number, number]
  size: number
  name: string
}

interface GlobeProps {
  className?: string
  markers?: Marker[]
  showAirportNames?: boolean
  showCityNames?: boolean
  showVIPLounges?: boolean
  selectedVIPLounges?: string[]
  selectedAirports?: string[]
  markerColor?: string
}

const hexToRgb = (hex: string): [number, number, number] => {
  const r = Number.parseInt(hex.slice(1, 3), 16) / 255
  const g = Number.parseInt(hex.slice(3, 5), 16) / 255
  const b = Number.parseInt(hex.slice(5, 7), 16) / 255
  return [r, g, b]
}

const selectedCities = citiesData.filter((city) =>
  [
    "New York",
    "Los Angeles",
    "San Francisco",
    "Sao Paulo",
    "Dubai",
    "Sydney",
    "Tokyo",
    "Singapore",
    "London",
    "Madrid",
    "Rome",
    "Istanbul",
    "New Delhi",
    "Barcelona",
    "El Cairo",
    "Buenos Aires",
  ].includes(city.name),
)

export default function Globe({
  className = "",
  showAirportNames = false,
  showCityNames = false,
  showVIPLounges = true,
  selectedVIPLounges,
  markers: propMarkers,
  selectedAirports = ["JFK", "LAX", "LHR", "HND", "CDG", "AMS", "DXB", "CGK", "MAD"],
  markerColor = "#022c22",
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const [{ width, height }, setSize] = useState({ width: 0, height: 0 })
  const { theme } = useTheme()
  const controls = useAnimation()

  const globeConfig = {
    size: 540,
    scale: 1.5,
    globeColor: "#ffffff",
    markerColor: "#374151",
    glowColor: "#374151",
    rotationSpeed: 0.003,
    mapBrightness: 4,
    diffuse: 1.5,
  }

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
    })
  }, [controls])

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        const { width, height } = canvasRef.current.getBoundingClientRect()
        setSize({ width, height })
      }
    }
    window.addEventListener("resize", onResize)
    onResize()
    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  useEffect(() => {
    let phi = 0
    let globe: ReturnType<typeof createGlobe> | null = null

    if (canvasRef.current && width && height) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: height * 2,
        phi: 0,
        theta: 0.3,
        dark: theme === "dark" ? 1 : 0,
        diffuse: globeConfig.diffuse,
        mapSamples: 16000,
        mapBrightness: globeConfig.mapBrightness,
        baseColor: hexToRgb(globeConfig.globeColor),
        markerColor: hexToRgb(markerColor),
        glowColor: hexToRgb(globeConfig.glowColor),
        scale: globeConfig.scale,
        offset: [0, 0],
        markers: markers,
        onRender: (state) => {
          if (!pointerInteracting.current) {
            phi += globeConfig.rotationSpeed
          }
          state.phi = phi + pointerInteractionMovement.current
          state.width = width * 2
          state.height = height * 2
        },
      })
    }

    return () => {
      if (globe) {
        globe.destroy()
      }
    }
  }, [width, height, theme, markerColor])

  const markers = useMemo(() => {
    if (propMarkers) return propMarkers

    if (showAirportNames && selectedAirports?.length > 0) {
      return selectedAirports.map((airportCode) => {
        const airport = airports.find((a) => a.code === airportCode)
        return {
          location: airport ? [airport.lat, airport.lng] : [0, 0],
          size: 0.03,
          name: airport?.name || airportCode,
        }
      })
    }

    if (showCityNames) {
      return selectedCities.map((city) => ({
        location: [city.lat, city.lng],
        size: 0.03,
        name: city.name,
      }))
    }

    if (showVIPLounges) {
      const loungesToShow = selectedVIPLounges
        ? vipLounges.filter((lounge) => selectedVIPLounges.includes(lounge.id))
        : vipLounges

      return loungesToShow.map((lounge) => ({
        location: [lounge.lat, lounge.lng],
        size: 0.05,
        name: lounge.name,
      }))
    }

    return []
  }, [propMarkers, showAirportNames, showCityNames, showVIPLounges, selectedAirports, selectedVIPLounges])

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: globeConfig.size, height: globeConfig.size, maxWidth: "100%", aspectRatio: "1" }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", contain: "layout paint size", opacity: 0.9 }}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grabbing"
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab"
          }
        }}
        onPointerOut={() => {
          pointerInteracting.current = null
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab"
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current
            pointerInteractionMovement.current = delta / 100
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0] && canvasRef.current) {
            const delta = e.touches[0].clientX - pointerInteracting.current
            pointerInteractionMovement.current = delta / 100
          }
        }}
      />
      <div className="absolute top-4 left-4 space-x-2 z-10">
        <Badge className="bg-emerald-950 text-emerald-300 text-xs font-medium px-2 py-1 rounded-md">
          Live Flights: <span className="font-semibold">120</span>
        </Badge>
        <Badge className="bg-emerald-950 text-emerald-300 text-xs font-medium px-2 py-1 rounded-md">
          VIP Lounges: <span className="font-semibold">45</span>
        </Badge>
      </div>
      {(showAirportNames || showCityNames || showVIPLounges) && (
        <div className="absolute bottom-0 left-0 w-full p-4 flex flex-wrap justify-center items-center gap-2">
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {markers.map((marker, index) => (
              <motion.div
                key={index}
                className="text-white text-[8px] font-medium px-1.5 py-0.5 rounded-md bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {marker.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}

