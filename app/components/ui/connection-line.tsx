interface ConnectionLineProps {
  direction: "horizontal" | "vertical"
  width?: string
  height?: string
  className?: string
}

export function ConnectionLine({ direction, width = "w-full", height = "h-10", className = "" }: ConnectionLineProps) {
  return direction === "vertical" ? (
    <div className={`w-px bg-gray-200 mx-auto ${height} ${className}`}></div>
  ) : (
    <div className={`h-px bg-gray-200 ${width} ${className}`}></div>
  )
}

