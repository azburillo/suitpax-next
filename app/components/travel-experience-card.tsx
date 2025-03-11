"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { cn } from "@/app/lib/utils"

type Badge = {
  id: number
  title: string
  description: string
  position: {
    top: string
    left: string
  }
}

type TravelExperience = {
  image: {
    url: string
    alt: string
  }
  badges: Badge[]
}

// Usando imágenes del blob storage
const travelExperiences: TravelExperience[] = [
  {
    image: {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-03-04-00-13-14-698_com.android.chrome.jpg-Z8ZDugiVxoQgCRcTPoGAkcpyu73usr.jpeg", // Imagen de gestión de viaje
      alt: "Interfaz de gestión de viajes",
    },
    badges: [
      {
        id: 1,
        title: "Gestión Centralizada",
        description: "Control total de tus reservas",
        position: { top: "15%", left: "20%" },
      },
      {
        id: 2,
        title: "Cambios Flexibles",
        description: "Modifica tu viaje con un clic",
        position: { top: "25%", left: "75%" },
      },
      {
        id: 3,
        title: "Información de Vuelo",
        description: "Detalles en tiempo real",
        position: { top: "65%", left: "25%" },
      },
      {
        id: 4,
        title: "Calendario Integrado",
        description: "Sincroniza tus eventos",
        position: { top: "75%", left: "70%" },
      },
    ],
  },
  {
    image: {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-03-04-00-13-45-964_com.android.chrome-edit.jpg-Idc8D83SbKMYBofdA6eF2aSksmeUUT.jpeg", // Imagen de gastos de empresa
      alt: "Panel de gastos de empresa",
    },
    badges: [
      {
        id: 1,
        title: "Análisis de Gastos",
        description: "Visualización clara de costes",
        position: { top: "20%", left: "15%" },
      },
      {
        id: 2,
        title: "Categorización",
        description: "Clasificación automática",
        position: { top: "30%", left: "70%" },
      },
      {
        id: 3,
        title: "Reportes Detallados",
        description: "Informes personalizables",
        position: { top: "60%", left: "20%" },
      },
      {
        id: 4,
        title: "Integración Contable",
        description: "Conexión con ERP",
        position: { top: "70%", left: "65%" },
      },
    ],
  },
  {
    image: {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-03-01-06-54-58-761_com.miui.gallery.jpg-JKTIo2WYE5HcUi7l7FihMD1OKQw3iV.jpeg", // Imagen de rendimiento de cartera
      alt: "Panel de rendimiento de inversiones",
    },
    badges: [
      {
        id: 1,
        title: "Análisis de Mercado",
        description: "Tendencias en tiempo real",
        position: { top: "15%", left: "25%" },
      },
      {
        id: 2,
        title: "Rendimiento Comparativo",
        description: "Benchmarking con índices",
        position: { top: "25%", left: "70%" },
      },
      {
        id: 3,
        title: "Alertas Personalizadas",
        description: "Notificaciones configurables",
        position: { top: "60%", left: "15%" },
      },
      {
        id: 4,
        title: "Informes de Ganancias",
        description: "Resúmenes trimestrales",
        position: { top: "70%", left: "75%" },
      },
    ],
  },
  {
    image: {
      url: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg", // Imagen de hotel de lujo
      alt: "Habitación de hotel de lujo",
    },
    badges: [
      {
        id: 1,
        title: "Reservas Premium",
        description: "Acceso a habitaciones exclusivas",
        position: { top: "20%", left: "20%" },
      },
      {
        id: 2,
        title: "Beneficios VIP",
        description: "Servicios adicionales incluidos",
        position: { top: "30%", left: "75%" },
      },
      {
        id: 3,
        title: "Cancelación Flexible",
        description: "Sin penalizaciones hasta 24h antes",
        position: { top: "65%", left: "15%" },
      },
      {
        id: 4,
        title: "Concierge Personal",
        description: "Asistencia 24/7 durante tu estancia",
        position: { top: "75%", left: "70%" },
      },
    ],
  },
  {
    image: {
      url: "https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg", // Imagen de app móvil
      alt: "Aplicación móvil de reservas",
    },
    badges: [
      {
        id: 1,
        title: "Reserva Instantánea",
        description: "Confirmación en segundos",
        position: { top: "15%", left: "15%" },
      },
      {
        id: 2,
        title: "Múltiples Opciones",
        description: "Comparativa de precios y servicios",
        position: { top: "25%", left: "75%" },
      },
      {
        id: 3,
        title: "Gestión Móvil",
        description: "Control total desde tu smartphone",
        position: { top: "70%", left: "20%" },
      },
      {
        id: 4,
        title: "Soporte 24/7",
        description: "Asistencia en cualquier momento",
        position: { top: "65%", left: "70%" },
      },
    ],
  },
]

export function TravelExperienceCard() {
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0)
  const [activeBadge, setActiveBadge] = useState<number | null>(null)
  const [badgesCompleted, setBadgesCompleted] = useState(false)
  const cursorControls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  // Animate cursor to move between badges and track completion
  useEffect(() => {
    const currentBadges = travelExperiences[currentExperienceIndex].badges
    let isMounted = true

    const animateCursor = async () => {
      setBadgesCompleted(false)

      // Visit each badge in sequence
      for (let i = 0; i < currentBadges.length; i++) {
        if (!isMounted) return

        const badge = currentBadges[i]

        // Move cursor to badge position with a slight arc for more natural movement
        await cursorControls.start({
          top: badge.position.top,
          left: badge.position.left,
          transition: {
            duration: 1.5,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
            damping: 15,
          },
        })

        // Set active badge
        setActiveBadge(badge.id)

        // Wait before moving to next badge
        await new Promise((resolve) => setTimeout(resolve, 2000))
      }

      // Mark all badges as visited
      if (isMounted) {
        setActiveBadge(null)
        setBadgesCompleted(true)
      }
    }

    animateCursor()

    return () => {
      isMounted = false
      cursorControls.stop()
    }
  }, [cursorControls, currentExperienceIndex])

  // Handle image slider - only change when badges are completed
  useEffect(() => {
    if (!badgesCompleted) return

    const interval = setTimeout(() => {
      setCurrentExperienceIndex((prev) => (prev + 1) % travelExperiences.length)
    }, 1000)

    return () => clearTimeout(interval)
  }, [badgesCompleted])

  return (
    <div className="w-full max-w-5xl mx-auto my-12">
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
        style={{ height: "600px" }}
      >
        {/* Image Slider */}
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentExperienceIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={travelExperiences[currentExperienceIndex].image.url || "/placeholder.svg"}
                alt={travelExperiences[currentExperienceIndex].image.alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Glass Card Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-white/10 backdrop-blur-md border-t border-white/20">
          <h3 className="text-2xl font-bold text-white mb-2 tracking-tighter">Premium Travel Experience</h3>
          <p className="text-lg font-medium text-white/90 tracking-tighter">
            Discover how SuitPax transforms every step of your journey with intelligent features and personalized
            service.
          </p>
        </div>

        {/* Floating Badges */}
        {travelExperiences[currentExperienceIndex].badges.map((badge) => (
          <motion.div
            key={`${currentExperienceIndex}-${badge.id}`}
            className={cn(
              "absolute z-10 max-w-[180px]",
              "bg-white/15 backdrop-blur-md rounded-lg p-2 border border-white/20",
              "shadow-lg transition-all duration-300",
              activeBadge === badge.id ? "ring-1 ring-white/70" : "",
            )}
            style={{
              top: badge.position.top,
              left: badge.position.left,
            }}
            animate={{
              scale: activeBadge === badge.id ? 1.05 : 1,
              opacity: activeBadge === badge.id ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-xs font-semibold text-white tracking-tighter mb-0.5">{badge.title}</h4>
            <p className="text-[10px] text-white/80 leading-tight">{badge.description}</p>
          </motion.div>
        ))}

        {/* Animated Cursor */}
        <motion.div
          className="absolute z-20 w-6 h-6 rounded-full border-2 border-white shadow-lg pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 70%)",
            boxShadow: "0 0 15px 5px rgba(255,255,255,0.3)",
          }}
          animate={cursorControls}
          initial={{ top: "15%", left: "20%" }}
        />

        {/* Image Navigation Dots */}
        <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {travelExperiences.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (badgesCompleted) {
                  setCurrentExperienceIndex(index)
                }
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentExperienceIndex ? "bg-white w-4" : "bg-white/50",
                !badgesCompleted && "cursor-not-allowed",
              )}
              aria-label={`View experience ${index + 1}`}
              disabled={!badgesCompleted}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

