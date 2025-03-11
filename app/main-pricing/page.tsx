import PricingHeader from "../components/pricing/pricing-header"
import PricingTiers from "../components/pricing/pricing-tiers"

export default function MainPricing() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-900 via-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <PricingHeader />
        </div>
        <PricingTiers />
      </div>
    </div>
  )
}

