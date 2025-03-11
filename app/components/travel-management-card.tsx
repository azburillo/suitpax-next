"use client"

import { Plane, Calendar } from "lucide-react"
import { Card } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import Image from "next/image"

export function TravelManagementCard() {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden bg-white/5 backdrop-blur-xl border-white/10">
      <div className="p-6 space-y-8">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tighter text-center max-w-[80%] mx-auto">
            Tecnología líder en el sector con un toque humano que merece, y mucho, la pena
          </h2>

          <div className="flex justify-center">
            <div className="w-16 h-16 bg-violet-600 rounded-xl flex items-center justify-center">
              <Plane className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tighter">Encárgate del viaje por tu cuenta</h3>
          <p className="text-sm text-gray-400 tracking-tighter">
            Con un solo clic, tu plantilla puede reservar, actualizar o cancelar las reservas por su cuenta.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="justify-start space-x-2 h-auto py-3">
              <Plane className="w-4 h-4" />
              <span>Cambiar vuelo</span>
            </Button>
            <Button variant="outline" className="justify-start space-x-2 h-auto py-3">
              <Calendar className="w-4 h-4" />
              <span>Cancelar vuelo</span>
            </Button>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 overflow-hidden">
          <div className="p-4 space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/placeholder.svg" alt="Air Europa" width={32} height={32} className="rounded" />
              <span className="font-medium tracking-tighter">Air Europa</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-2xl font-bold">MAD</div>
                <div className="text-sm text-gray-400">15:30</div>
              </div>

              <div className="flex-1 px-4">
                <div className="text-xs text-center text-gray-400">8 h 15 m</div>
                <div className="h-[2px] bg-gradient-to-r from-violet-500 to-violet-700 my-2" />
              </div>

              <div className="space-y-1 text-right">
                <div className="text-2xl font-bold">JFK</div>
                <div className="text-sm text-gray-400">17:45</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

