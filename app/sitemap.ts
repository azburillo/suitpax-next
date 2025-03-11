import type { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://suitpax.com"

  // Rutas estáticas con prioridades y frecuencias personalizadas
  const mainRoutes = [
    {
      route: "/",
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      route: "/about",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      route: "/pricing",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      route: "/enterprise",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  // Rutas de características de productos - menos frecuentemente actualizadas
  const productRoutes = [
    "/sections/platform",
    "/sections/platform/travel-software",
    "/sections/platform/flight-booking",
    "/sections/platform/expense-management",
    "/sections/platform/airport-vip-lounge",
    "/sections/platform/corporate-software",
    "/sections/services",
    "/sections/services/business-travel",
    "/sections/services/fintech",
    "/sections/services/insurance",
    "/sections/services/ai-travel-booking",
    "/sections/services/car-rental",
    "/sections/solutions",
    "/sections/solutions/for-travelers",
    "/sections/solutions/for-financial-teams",
    "/sections/solutions/for-startups",
    "/sections/solutions/for-airlines-teams",
    "/ai-agents",
    "/stays",
    "/integrations",
  ].map((route) => ({
    route,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Rutas legales y secundarias - raramente actualizadas
  const secondaryRoutes = [
    "/careers",
    "/partners",
    "/contact",
    "/legal/terms",
    "/legal/privacy",
    "/legal/cookies",
    "/legal/compliance",
    "/legal/modern-slavery-statement",
    "/sections/manifesto",
    "/sections/partners",
    "/sections/integrations",
    "/sections/resources",
    "/sections/resources/academy",
    "/sections/resources/trip-planning",
    "/sections/resources/help-center",
    "/sections/resources/research",
    "/sections/company",
    "/sections/company/about",
    "/sections/company/press",
    "/sections/company/changelog",
    "/sections/company/community",
    "/sections/company/customers",
  ].map((route) => ({
    route,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  // Combinar todas las rutas estáticas
  const allStaticRoutes = [...mainRoutes, ...productRoutes, ...secondaryRoutes]

  // Fechas de modificación más precisas
  // En un entorno real, podrías obtener estas fechas desde tu sistema de control de versiones
  const lastUpdateDates: Record<string, Date> = {
    "/": new Date(), // Página principal siempre actualizada
    "/pricing": new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // Actualizada hace una semana
    "/sections/company/changelog": new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // Actualizada hace 3 días
    // Añadir más fechas específicas según sea necesario
  }

  // Convertir rutas estáticas a formato de sitemap
  const sitemap = allStaticRoutes.map(({ route, changeFrequency, priority }) => ({
    url: new URL(route, baseUrl).toString(),
    lastModified: lastUpdateDates[route] || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Default a un mes atrás
    changeFrequency,
    priority,
  }))

  return sitemap
}

