import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { useCallback } from "react"

// Debounce function to limit the rate at which a function can fire
const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Check on mount
    checkMobile()

    // Create a debounced version of checkMobile
    const debouncedCheckMobile = debounce(checkMobile)

    // Add event listener for window resize
    window.addEventListener("resize", debouncedCheckMobile)

    // Cleanup
    return () => {
      window.removeEventListener("resize", debouncedCheckMobile)
    }
  }, [breakpoint])

  return isMobile
}

export function useThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensures that the resolvedTheme is available on the client-side
  useEffect(() => setMounted(true), [])

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }, [resolvedTheme, setTheme])

  return {
    toggleTheme,
    resolvedTheme: mounted ? resolvedTheme : undefined,
  }
}

