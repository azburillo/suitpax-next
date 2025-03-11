import type { PricingPlan } from "@/types/pricing"

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: 0,
    description: "For individuals and small travel agencies exploring Suitpax.",
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
      { icon: "IntegrationIcon", title: "Google Calendar & CRM integrations" },
    ],
    cta: "Get Pro",
  },
  {
    name: "Business",
    price: 99,
    description: "For established travel agencies and medium-sized businesses.",
    badge: "Most Popular",
    features: [
      { icon: "SparklesIcon", title: "Premium booking management" },
      { icon: "UsersIcon", title: "Up to 100 users" },
      { icon: "CurrencyDollarIcon", title: "Dedicated support with SLA" },
      { icon: "CalendarIcon", title: "AI-powered trip recommendations" },
      { icon: "ChartBarIcon", title: "Advanced reporting & analytics" },
      { icon: "GlobeAltIcon", title: "API access & webhooks" },
      { icon: "ShieldCheckIcon", title: "Data security & compliance tools" },
    ],
    cta: "Get Business",
  },
  {
    name: "Enterprise",
    price: 249,
    description: "For large travel agencies and corporate travel management.",
    features: [
      { icon: "SparklesIcon", title: "Customizable booking workflows" },
      { icon: "UsersIcon", title: "Unlimited users" },
      { icon: "CurrencyDollarIcon", title: "24/7 premium support & account manager" },
      { icon: "CalendarIcon", title: "Custom trip automation & approvals" },
      { icon: "ChartBarIcon", title: "Real-time financial reporting & insights" },
      { icon: "GlobeAltIcon", title: "Dedicated API & enterprise integrations" },
      { icon: "ShieldCheckIcon", title: "Full compliance & enterprise security" },
    ],
    cta: "Contact Sales",
  },
  {
    name: "Custom",
    price: 0,
    description: "Tailored solutions for unique business needs.",
    features: [
      { icon: "UserCogIcon", title: "Custom integrations & API modifications" },
      { icon: "SparklesIcon", title: "White-label platform branding" },
      { icon: "CurrencyDollarIcon", title: "Bespoke pricing based on needs" },
      { icon: "ShieldCheckIcon", title: "Enterprise-grade security & legal compliance" },
      { icon: "UsersIcon", title: "Unlimited users & teams" },
    ],
    cta: "Contact Us",
  },
]

