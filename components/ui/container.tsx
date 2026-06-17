import { cn } from "@/lib/utils"

type ContainerSize = "sm" | "md" | "lg" | "xl"

interface ContainerProps {
  size?: ContainerSize
  children: React.ReactNode
  className?: string
}

const sizeStyles: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl"
}

export function Container({ size = "lg", children, className }: ContainerProps) {
  return (
    <div className={cn(
      "mx-auto px-4 sm:px-6 lg:px-8",
      sizeStyles[size],
      className
    )}>
      {children}
    </div>
  )
}
