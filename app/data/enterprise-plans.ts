import type { PricingPlan } from "@/types/pricing"

export const enterprisePlans: PricingPlan[] = [
  {
    name: "Startup",
    price: 149,
    description: "For growing travel businesses with up to 50 users.",
    features: [
      { icon: "SparklesIcon", title: "Customizable booking workflows" },
      { icon: "UsersIcon", title: "Up to 50 users" },
      { icon: "CurrencyDollarIcon", title: "Priority support" },
      { icon: "CalendarIcon", title: "Basic trip automation & approvals" },
      { icon: "ChartBarIcon", title: "Basic financial reporting" },
      { icon: "IntegrationIcon", title: "Accounting & CRM integrations" },
    ],
    cta: "Get Started",
  },
  {
    name: "Business",
    price: 199,
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
    name: "Corporate",
    price: 499, // Custom pricing available upon contact
    description: "For large travel agencies and corporate travel management.",
    features: [
      { icon: "SparklesIcon", title: "Fully customizable booking workflows" },
      { icon: "UsersIcon", title: "Unlimited users" },
      { icon: "CurrencyDollarIcon", title: "24/7 premium support & account manager" },
      { icon: "CalendarIcon", title: "Advanced trip automation & approvals" },
      { icon: "ChartBarIcon", title: "Real-time financial reporting & insights" },
      { icon: "GlobeAltIcon", title: "Dedicated API & enterprise integrations" },
      { icon: "ShieldCheckIcon", title: "Full compliance & enterprise security" },
      { icon: "LockClosedIcon", title: "SSO & advanced security features" }, // Added SSO
      { icon: "PhoneIcon", title: "Dedicated account manager" }, // Added account manager
    ],
    cta: "Contact Sales",
  },
  {
    name: "Custom",
    price: 1, // Placeholder price for sorting. Actual price is determined upon contact.
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

