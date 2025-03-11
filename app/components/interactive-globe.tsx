"use client"

import { useEffect, useRef, useMemo } from "react"
import createGlobe from "cobe"
import { useSpring } from "framer-motion"
import { GLOBE_CONFIG } from "@/app/config/globe-config"

interface InteractiveGlobeProps {
  showHeatmap?: boolean
}

export function InteractiveGlobe({ showHeatmap = false }: InteractiveGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const phi = useSpring(0)

  const markers = useMemo(() => GLOBE_CONFIG.markers, [])
  const heatmapData = useMemo(() => GLOBE_CONFIG.heatmapData, [])

  useEffect(() => {
    let width = 0
    let currentPhi = 0
    let globe: ReturnType<typeof createGlobe>

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }
    window.addEventListener("resize", onResize)
    onResize()

    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: GLOBE_CONFIG.mapBrightness,
        baseColor: GLOBE_CONFIG.baseColor,
        markerColor: GLOBE_CONFIG.markerColor,
        glowColor: GLOBE_CONFIG.glowColor,
        markers: markers,
        scale: GLOBE_CONFIG.scale,
        maxScale: GLOBE_CONFIG.maxScale,
        minScale: GLOBE_CONFIG.minScale,
        onRender: (state) => {
          if (!pointerInteracting.current) {
            currentPhi += GLOBE_CONFIG.baseRotationSpeed
          }
          state.phi = currentPhi + pointerInteractionMovement.current
          phi.set(state.phi)
          state.width = width * 2
          state.height = width * 2
        },
      })
    }

    if (showHeatmap && globe) {
      globe.heatmap(heatmapData)
    }

    return () => {
      if (globe) {
        globe.destroy()
      }
      window.removeEventListener("resize", onResize)
    }
  }, [phi, markers, heatmapData, showHeatmap])

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current
          canvasRef.current!.style.cursor = "grabbing"
        }}
        onPointerUp={() => {
          pointerInteracting.current = null
          canvasRef.current!.style.cursor = "grab"
        }}
        onPointerOut={() => {
          pointerInteracting.current = null
          canvasRef.current!.style.cursor = "grab"
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current
            pointerInteractionMovement.current = delta * 0.01
            canvasRef.current!.style.cursor = "grabbing"
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current
            pointerInteractionMovement.current = delta * 0.01
          }
        }}
      />
    </div>
  )
}

