import type { IconName } from "@heroicons/react/24/outline"

export interface PricingFeature {
  icon: IconName
  title: string
  isNew?: boolean
}

export interface ExtraFeature {
  name: string
  description: string
  price: number
  icon: IconName
}

export interface PricingPlan {
  name: string
  price: number
  description: string
  features: PricingFeature[]
  cta: string
  badge?: string
  extraFeature?: ExtraFeature
}

export interface PricingCardProps {
  plan: PricingPlan
  isAnnual: boolean
  onPrevPlan: () => void
  onNextPlan: () => void
}

