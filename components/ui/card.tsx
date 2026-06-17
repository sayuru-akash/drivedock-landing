import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  hover?: boolean
  className?: string
  variant?: "default" | "highlighted" | "green"
}

const variantStyles = {
  default: "bg-bg-card/70 border-border",
  highlighted: "bg-accent-subtle border-accent-border",
  green: "bg-green-subtle border-green-border",
}

export function Card({ children, hover = false, className, variant = "default" }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 border backdrop-blur-xl transition-shadow duration-200",
        variantStyles[variant],
        hover && "hover:shadow-xl hover:shadow-black/20",
        className
      )}
    >
      {children}
    </div>
  )
}
