import { cn } from "@/lib/utils"
import Link from "next/link"
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react"

type ButtonVariant = "primary" | "secondary" | "ghost"
type ButtonSize = "sm" | "md" | "lg"

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  className?: string
}

type ButtonAsButton = BaseButtonProps & 
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

type ButtonAsLink = BaseButtonProps & 
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'size'> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-accent-500 text-white hover:bg-accent-600 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200",
  secondary: "bg-transparent border border-primary-300 text-primary-900 dark:text-primary-100 dark:border-primary-700 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors duration-150",
  ghost: "bg-transparent text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors duration-150"
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-lg",
  lg: "px-8 py-4 text-lg rounded-lg"
}

export function Button({ 
  variant = "primary", 
  size = "md", 
  children, 
  className,
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
  const combinedClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  if ("href" in props && props.href) {
    const { href, target, rel, ...rest } = props
    const isExternal = href.startsWith("http")
    
    return (
      <Link
        href={href}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
        className={combinedClassName}
        {...rest}
      >
        {children}
      </Link>
    )
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  )
}
