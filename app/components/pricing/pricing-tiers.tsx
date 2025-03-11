import { Switch } from "@/app/components/ui/switch"
import { BenefitCard } from "../benefit-card"

const tiers = [
  {
    name: "Starter",
    price: "Free",
    description: "For developers testing out Suitpax locally.",
    features: ["AI account strategy", "AI contact dossier", "AI chat", "Personalized emails", "Custom deliverables"],
    cta: "Start today for free",
    ctaLink: "#",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$300",
    period: "per month",
    description: "For companies adding collaboration in production.",
    features: [
      "Everything in Starter",
      "Up to 3 seats",
      "Additional seats are $100/month",
      "Email and CRM Integrations",
    ],
    cta: "Sign up",
    ctaLink: "#",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations that need more support and compliance features.",
    features: ["Everything in Pro", "Annual pricing", "Tailored onboarding", "Priority support"],
    cta: "Contact us",
    ctaLink: "#",
    highlight: false,
  },
]

export default function PricingTiers() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {tiers.map((tier) => (
        <div key={tier.name}>
          <BenefitCard
            title={tier.name}
            price={tier.price}
            description={tier.description}
            features={tier.features}
            popular={tier.highlight}
          />
          {tier.name === "Pro" && (
            <div className="mt-4 p-4 bg-gray-900/30 backdrop-blur-xl rounded-lg border border-gray-700/50">
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Comments</span>
                <Switch />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

