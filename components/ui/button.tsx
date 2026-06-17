"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from "framer-motion"
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react"

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline"
type ButtonSize = "sm" | "md" | "lg"

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
  icon?: ReactNode
  iconPosition?: "left" | "right"
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }

type ButtonAsLink = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "size"> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover shadow-lg hover:shadow-[0_0_24px_rgba(66,133,244,0.4)] transition-all duration-200",
  secondary:
    "bg-transparent border border-border-strong text-fg-primary hover:bg-bg-elevated hover:border-white/20 transition-all duration-200",
  ghost:
    "bg-transparent text-fg-secondary hover:text-fg-primary hover:bg-bg-elevated transition-all duration-200",
  outline:
    "bg-transparent border border-accent/50 text-accent hover:bg-accent/10 hover:border-accent transition-all duration-200",
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
  md: "px-5 py-2.5 text-sm rounded-lg gap-2",
  lg: "px-7 py-3.5 text-base rounded-xl gap-2.5",
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  icon,
  iconPosition = "left",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium tracking-[-0.01em] focus-ring disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none"
  const combined = cn(base, variantStyles[variant], sizeStyles[size], className)

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0" aria-hidden="true">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="shrink-0" aria-hidden="true">{icon}</span>
      )}
    </>
  )

  if ("href" in props && props.href) {
    const { href, target, rel, ...rest } = props
    const isExternal = href.startsWith("http")
    return (
      <Link
        href={href}
        target={target ?? (isExternal ? "_blank" : undefined)}
        rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
        className={combined}
        {...(rest as Record<string, unknown>)}
      >
        {content}
      </Link>
    )
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={combined}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </motion.button>
  )
}
