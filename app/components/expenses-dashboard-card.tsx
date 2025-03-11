"use client"

import { Plane, Hotel, Car, Train, Utensils } from "lucide-react"
import { Card } from "@/app/components/ui/card"

const expenses = [
  { icon: Plane, label: "Vuelos", amount: 12705 },
  { icon: Hotel, label: "Hoteles", amount: 8044 },
  { icon: Car, label: "Alquiler de coches", amount: 3286 },
  { icon: Train, label: "Trenes", amount: 1520 },
  { icon: Utensils, label: "Dietas y comidas", amount: 778 },
]

export function ExpensesDashboardCard() {
  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0)

  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden bg-white/5 backdrop-blur-xl border-white/10">
      <div className="p-6 space-y-6">
        <div className="inline-flex px-4 py-1 rounded-full bg-white/10 text-sm">Administrador</div>

        <div className="relative">
          <div className="aspect-square w-48 mx-auto">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="10"
                className="text-white/5"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="10"
                strokeDasharray="283"
                strokeDashoffset="70"
                className="transform -rotate-90 origin-center"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#C084FC" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-sm text-gray-400 tracking-tighter">GASTOS DE EMPRESA</div>
              <div className="text-3xl font-bold tracking-tighter">{total.toLocaleString("es-ES")} €</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {expenses.map((expense, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-violet-600/20 flex items-center justify-center">
                  <expense.icon className="w-4 h-4 text-violet-400" />
                </div>
                <span className="font-medium tracking-tighter">{expense.label}</span>
              </div>
              <span className="font-semibold tracking-tighter">{expense.amount.toLocaleString("es-ES")} €</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

