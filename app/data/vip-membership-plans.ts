import type { PricingPlan } from "@/types/pricing"

export const vipMembershipPlans: PricingPlan[] = [
  {
    name: "VIP Basic",
    price: 29,
    description: "Essential VIP lounge access for occasional travelers.",
    features: [
      { icon: "DoorOpenIcon", title: "Access to 100+ VIP lounges worldwide" },
      { icon: "UserIcon", title: "2 free guest passes per year" },
      { icon: "ClockIcon", title: "Up to 3 hours per visit" },
      { icon: "WifiIcon", title: "High-speed Wi-Fi in all lounges" },
      { icon: "CoffeeIcon", title: "Complimentary snacks and beverages" },
    ],
    cta: "Get VIP Basic",
  },
  {
    name: "VIP Plus",
    price: 59,
    description: "Enhanced VIP experience for frequent flyers.",
    features: [
      { icon: "DoorOpenIcon", title: "Access to 300+ VIP lounges worldwide" },
      { icon: "UsersIcon", title: "4 free guest passes per year" },
      { icon: "ClockIcon", title: "Unlimited visit duration" },
      { icon: "WifiIcon", title: "High-speed Wi-Fi in all lounges" },
      { icon: "UtensilsIcon", title: "Complimentary meals and premium beverages" },
      { icon: "BedIcon", title: "Access to sleeping pods (where available)" },
    ],
    cta: "Upgrade to VIP Plus",
  },
  {
    name: "VIP Elite",
    price: 99,
    description: "Premium VIP benefits for discerning travelers.",
    badge: "Most Popular",
    features: [
      { icon: "DoorOpenIcon", title: "Access to 500+ VIP lounges worldwide" },
      { icon: "UsersIcon", title: "Unlimited guest passes" },
      { icon: "ClockIcon", title: "Unlimited visit duration" },
      { icon: "WifiIcon", title: "High-speed Wi-Fi in all lounges" },
      { icon: "UtensilsIcon", title: "Gourmet dining and top-shelf beverages" },
      { icon: "BedIcon", title: "Priority access to sleeping pods and shower facilities" },
      { icon: "CarIcon", title: "Complimentary airport transfers (4 per year)" },
      { icon: "SparklesIcon", title: "Fast-track security at select airports" },
    ],
    cta: "Go Elite",
  },
  {
    name: "VIP Platinum",
    price: 119,
    description: "Unparalleled luxury and convenience for elite travelers.",
    features: [
      { icon: "DoorOpenIcon", title: "Access to all VIP lounges worldwide" },
      { icon: "UsersIcon", title: "Unlimited guest passes with private areas" },
      { icon: "ClockIcon", title: "Unlimited visit duration with extended hours" },
      { icon: "WifiIcon", title: "Ultra-fast Wi-Fi and private workspaces" },
      { icon: "UtensilsIcon", title: "Personalized gourmet dining experience" },
      { icon: "BedIcon", title: "Guaranteed sleeping pods and premium shower access" },
      { icon: "CarIcon", title: "Unlimited complimentary airport transfers" },
      { icon: "SparklesIcon", title: "Global fast-track security and immigration" },
      { icon: "PlaneIcon", title: "Priority flight rebooking during disruptions" },
      { icon: "ConciergeBellIcon", title: "24/7 dedicated travel concierge" },
    ],
    cta: "Experience Platinum",
  },
]

