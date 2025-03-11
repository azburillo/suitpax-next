/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Configuración básica de Next.js
   * - reactStrictMode: Habilita el modo estricto de React para mejor detección de errores
   * - poweredByHeader: Elimina el header 'X-Powered-By' por seguridad
   * - optimizeFonts: Optimiza la carga de fuentes para mejor rendimiento
   */
  reactStrictMode: true,
  poweredByHeader: false,
  optimizeFonts: true,

  /**
   * Configuración de imágenes
   * Dominios permitidos para imágenes externas
   * Importante: Añadir nuevos dominios aquí antes de usar sus imágenes
   */
  images: {
    domains: [
      "images.pexels.com", // Banco de imágenes
      "cdn.simpleicons.org", // Íconos
      "cdn.brandfetch.io", // Logos de marcas
      "hebbkx1anhila5yf.public.blob.vercel-storage.com", // Almacenamiento Vercel
      "v0.blob.com", // Almacenamiento v0
      "ny10xbvnsvd5lllr.public.blob.vercel-storage.com", // Almacenamiento Vercel
      "og-image.vercel.app", // Generador de OG Images
      "img.clerk.com", // Imágenes de Clerk
    ],
  },

  /**
   * Características experimentales de Next.js
   * - optimizeCss: Minimiza y optimiza CSS
   * - optimizePackageImports: Optimiza importaciones específicas
   * - typedRoutes: Habilita tipado estático para rutas
   * - webVitalsAttribution: Métricas de rendimiento a monitorear
   */
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion"],
    typedRoutes: true,
    webVitalsAttribution: ["CLS", "LCP"],
  },

  /**
   * Variables de entorno públicas
   * Disponibles en el cliente
   */
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },

  /**
   * Headers de seguridad
   * Configuración de headers HTTP para mejorar la seguridad
   */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // Previene clickjacking
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Previene MIME-type sniffing
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // Control de información del referrer
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

