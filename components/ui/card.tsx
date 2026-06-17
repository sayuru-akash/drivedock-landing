import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  hover?: boolean
  className?: string
}

export function Card({ children, hover = false, className }: CardProps) {
  return (
    <div className={cn(
      "bg-white dark:bg-primary-900 border border-primary-200 dark:border-primary-800 rounded-xl p-6 shadow-sm",
      hover && "transition-all duration-200 hover:shadow-md hover:scale-[1.02]",
      className
    )}>
      {children}
    </div>
  )
}
