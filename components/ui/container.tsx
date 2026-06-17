import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: "div" | "section" | "main" | "article" | "aside"
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

const sizeMap = {
  sm:   "max-w-3xl",
  md:   "max-w-4xl",
  lg:   "max-w-5xl",
  xl:   "max-w-7xl",
  full: "max-w-none",
}

export function Container({
  children,
  className,
  as: Tag = "div",
  size = "xl",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeMap[size],
        className
      )}
    >
      {children}
    </Tag>
  )
}
