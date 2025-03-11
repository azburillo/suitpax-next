"use client"

import { Check, Star } from "lucide-react"
import { Card } from "@/app/components/ui/card"

export interface BenefitCardProps {
  title: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}

export function BenefitCard({ title, price, description, features, popular = false }: BenefitCardProps) {
  return (
    <Card className="relative w-full max-w-sm overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black shadow-xl">
      {popular && (
        <div className="absolute right-4 top-4">
          <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-500">
            Most popular
          </span>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-emerald-500" />
          <h3 className="text-lg font-medium text-white">{title}</h3>
        </div>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-medium text-white">{price}</span>
          {price !== "Custom" && <span className="ml-1 text-sm text-gray-400">/month</span>}
        </div>
        <p className="mt-4 text-sm text-gray-400">{description}</p>
        <ul className="mt-6 space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
              <Check className="h-4 w-4 text-emerald-500" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}

