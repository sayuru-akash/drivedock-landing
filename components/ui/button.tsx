"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
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
    "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20 hover:shadow-accent/35 transition-colors duration-200",
  secondary:
    "bg-transparent border border-border-strong text-fg-primary hover:bg-bg-elevated hover:border-white/20 transition-colors duration-200",
  ghost:
    "bg-transparent text-fg-secondary hover:text-fg-primary hover:bg-bg-elevated transition-colors duration-200",
  outline:
    "bg-transparent border border-accent/50 text-accent hover:bg-accent-subtle hover:border-accent transition-colors duration-200",
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 text-sm rounded-lg gap-2",
  md: "px-6 py-3 text-sm rounded-xl gap-2.5",
  lg: "px-8 py-4 text-base rounded-xl gap-3 font-semibold",
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
    "inline-flex items-center justify-center font-medium tracking-tight focus-ring disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none"
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
    <button className={combined} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  )
}
