import type { PricingPlan } from "@/types/pricing"

export const individualPlans: PricingPlan[] = [
  {
    name: "Free",
    price: 0,
    description: "For individuals and families exploring Suitpax.",
    features: [
      { icon: "SparklesIcon", title: "Basic booking management" },
      { icon: "UsersIcon", title: "Up to 5 users" },
      { icon: "CurrencyDollarIcon", title: "Limited support" },
    ],
    cta: "Get Started",
  },
  {
    name: "Travelers",
    price: 25,
    description: "For frequent travelers, families, and small groups.",
    features: [
      { icon: "SparklesIcon", title: "Enhanced booking management" },
      { icon: "UsersIcon", title: "Up to 10 users" },
      { icon: "CurrencyDollarIcon", title: "Email & chat support" },
      { icon: "CalendarIcon", title: "Trip planning & reminders" },
      { icon: "GiftIcon", title: "Exclusive travel discounts" },
    ],
    cta: "Start Traveling",
    extraFeature: {
      name: "Priority Support",
      description: "Get faster response times and dedicated support",
      price: 10,
      icon: "PhoneIcon",
    },
  },
  {
    name: "Family",
    price: 39,
    description: "Perfect for larger families and friend groups.",
    features: [
      { icon: "SparklesIcon", title: "Advanced booking management" },
      { icon: "UsersIcon", title: "Up to 15 users" },
      { icon: "CurrencyDollarIcon", title: "Priority email & chat support" },
      { icon: "CalendarIcon", title: "Collaborative trip planning" },
      { icon: "GiftIcon", title: "Enhanced travel discounts" },
      { icon: "ShieldCheckIcon", title: "Travel insurance options" },
    ],
    cta: "Choose Family Plan",
    extraFeature: {
      name: "Concierge Service",
      description: "Personal travel assistant for custom itineraries",
      price: 15,
      icon: "UserIcon",
    },
  },
  {
    name: "Pro",
    price: 49,
    description: "For growing travel agencies and small businesses.",
    features: [
      { icon: "SparklesIcon", title: "Advanced booking management" },
      { icon: "UsersIcon", title: "Up to 25 users" },
      { icon: "CurrencyDollarIcon", title: "Priority support" },
      { icon: "CalendarIcon", title: "Advanced trip planning & reminders" },
      { icon: "ChartBarIcon", title: "Basic reporting & analytics" },
      { icon: "CogIcon", title: "Google Calendar & CRM integrations" },
    ],
    cta: "Get Pro",
    extraFeature: {
      name: "Custom Integrations",
      description: "Connect with your favorite tools and services",
      price: 20,
      icon: "PuzzlePieceIcon",
    },
  },
]

