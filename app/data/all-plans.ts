import type { PricingPlan } from "@/types/pricing"
import { individualPlans } from "./individual-plans"
import { enterprisePlans } from "./enterprise-plans"
import { vipMembershipPlans } from "./vip-membership-plans"

export const allPlans: PricingPlan[] = [...individualPlans, ...enterprisePlans, ...vipMembershipPlans].sort(
  (a, b) => a.price - b.price,
)

// Move the "Custom" plan to the end
const customPlan = allPlans.find((plan) => plan.name === "Custom")
if (customPlan) {
  allPlans.splice(allPlans.indexOf(customPlan), 1)
  allPlans.push(customPlan)
}

