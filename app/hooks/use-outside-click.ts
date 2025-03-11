"use client"

import { useEffect, RefObject } from "react"

type Event = MouseEvent | TouchEvent

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
) {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current
      const target = event.target as Node

      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(target)) {
        return
      }

      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler]) // Only re-run if ref or handler changes
}

// Usage example:
/*
const MyComponent = () => {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  useOutsideClick(ref, () => {
    if (isOpen) setIsOpen(false)
  })

  return (
    <div ref={ref}>
      // Your content here
    </div>
  )
}
*/

