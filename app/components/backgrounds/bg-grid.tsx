// Rename the component to match the file location pattern of other background components
export function BackgroundGrid({ className }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)] ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255,255,255,0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        backgroundSize: "32px 32px",
      }}
    />
  )
}

export default BackgroundGrid

