"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import Hero from "@/app/components/marketing/hero"
import { PasswordProtection } from "@/app/components/password-protection"
import { TextCardSection } from "@/app/components/text-card-section"
import { CTAScrollFadeSection } from "@/app/components/cta-scroll-fade-section"
import { JoinBenefits } from "@/app/components/join-benefits"
import { JoinTrips } from "@/app/components/join-trips"
import { Newsletter } from "@/app/components/marketing/newsletter"

// Cargamos PartnersSlider de forma dinámica
const PartnersSlider = dynamic(
  () => import("@/app/components/marketing/partners-slider").then((mod) => mod.PartnersSlider),
  {},
)

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch("/api/check-auth")
      if (res.ok) {
        setIsAuthenticated(true)
      }
    }
    checkAuth()
  }, [])

  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={() => setIsAuthenticated(true)} />
  }

  return (
    <main className="flex min-h-screen flex-col w-full justify-between bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Partners Section Title */}
      <section className="w-full pt-16 pb-4 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">Travel platform ecosystem</p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 text-gray-600 tracking-tighter">
            Powering the next generation of travel tech startups
          </h2>
          <p className="text-sm md:text-md text-gray-400 max-w-2xl font-medium mx-auto">
            Join the growing network of companies transforming their travel management
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSlider />

      {/* Texto centrado entre PartnersSlider y JoinBenefits */}
      <section className="w-full py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">Transforming travel management</p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 text-gray-600 tracking-tighter">
            Next-gen travel stack
          </h2>
          <p className="text-sm md:text-md text-gray-400 max-w-2xl font-medium mx-auto">
            A unified platform that integrates all necessary tools to revolutionize the corporate travel experience
          </p>
        </div>
      </section>

      {/* Financial Management Section Title */}
      <section className="w-full pt-16 pb-4 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">Financial management</p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 text-gray-600 tracking-tighter">
            Invoice control for teams
          </h2>
          <p className="text-sm md:text-md text-gray-400 max-w-2xl font-medium mx-auto">
            Streamline your expense tracking and invoice management with our comprehensive solution
          </p>
        </div>
      </section>

      {/* JoinBenefits Section */}
      <section className="relative">
        <JoinBenefits />
      </section>

      {/* Travel Management Section */}
      <section className="w-full py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">Efficient travel stack</p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 text-gray-600 tracking-tighter">
            Business travel simplified
          </h2>
          <p className="text-sm md:text-md text-gray-400 max-w-2xl font-medium mx-auto">
            Streamlined booking process with real-time updates, automated expense tracking, and comprehensive trip
            management tools
          </p>
        </div>
      </section>

      {/* JoinTrips Section */}
      <section className="relative">
        <JoinTrips />
      </section>

      {/* Revolutionizing Travel Section */}
      <section className="w-full py-10 md:py-14">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTAScrollFadeSection>
            <TextCardSection
              title="Revolutionizing travel management"
              content="In today's fast-paced world, traditional travel management solutions fall short. They're complex, disconnected, and fail to address the real needs of modern travelers and businesses. Suitpax brings everything together by unifying travel tools, enabling businesses to centralize booking, expense management, and customer engagement in one seamless platform."
            />
          </CTAScrollFadeSection>
        </div>
      </section>

      {/* Industry Challenge Section */}
      <section className="w-full py-10 md:py-14">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTAScrollFadeSection>
            <TextCardSection
              title="The industry challenge"
              content="Travel management is drowning in fragmented tools, piecing together multiple platforms just to create a space for their customers. The result? Disjointed experiences, scattered data, and missed opportunities. Suitpax is the unified solution the industry has been waiting for."
            />
          </CTAScrollFadeSection>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="w-full py-10 md:py-14">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTAScrollFadeSection>
            <TextCardSection
              title="Our comprehensive solution"
              content="Suitpax brings everything together by unifying travel tools, enabling businesses to centralize booking, expense management, and customer engagement in one seamless platform. Our approach eliminates the need for multiple disconnected systems, providing a single source of truth for all your travel operations."
            />
          </CTAScrollFadeSection>
        </div>
      </section>

      {/* Empowering Journey Section */}
      <section className="w-full py-10 md:py-14">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTAScrollFadeSection>
            <TextCardSection
              title="Empowering your journey"
              content="We've reimagined what's possible in travel management. By combining cutting-edge technology with intuitive design, we're creating a platform that doesn't just manage travel – it transforms it. From AI-powered booking to real-time expense tracking, every feature is designed to make your travel experience seamless and efficient."
            />
          </CTAScrollFadeSection>
        </div>
      </section>

      {/* Impact Story Section */}
      <section className="w-full py-10 md:py-14">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTAScrollFadeSection>
            <TextCardSection
              title="Our Impact in Numbers"
              content="Behind every statistic is a story of transformation. Our platform has become the backbone of travel operations for businesses worldwide, processing millions of bookings and helping companies save countless hours and resources. We're not just providing a service – we're revolutionizing how businesses approach travel management."
            />
          </CTAScrollFadeSection>
        </div>
      </section>

      {/* Enterprise Solutions Section */}
      <section className="w-full py-10 md:py-14">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTAScrollFadeSection>
            <TextCardSection
              title="Enterprise-grade solutions"
              content="Suitpax delivers robust enterprise solutions designed to meet the complex needs of global organizations. Our platform scales effortlessly with your business, providing the security, compliance, and performance that enterprise customers demand. With dedicated account management, custom integrations, and priority support, we ensure that your travel management infrastructure operates at peak efficiency, no matter the size or complexity of your organization."
            />
          </CTAScrollFadeSection>
        </div>
      </section>
      <Newsletter />
    </main>
  )
}

