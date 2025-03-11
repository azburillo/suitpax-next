"use client"

import type React from "react"
import posthog from "posthog-js"
import { useEffect } from "react"

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
        // Automatic pageview capture is enabled by default
        capture_pageview: true,
        loaded: (posthog) => {
          if (process.env.NODE_ENV === 'development') {
            // In development, log events to console instead of sending to PostHog
            posthog.debug()
          }
        }
      })
    }
  }, [])

  return <>{children}</>
}

