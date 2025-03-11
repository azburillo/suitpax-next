"use client"

import { useMemo } from "react"

export function useExpensiveCalculation(value: number) {
  const result = useMemo(() => {
    // Simulando un cálculo costoso
    let sum = 0
    for (let i = 0; i < 1000000; i++) {
      sum += value
    }
    return sum
  }, [value])

  return result
}

