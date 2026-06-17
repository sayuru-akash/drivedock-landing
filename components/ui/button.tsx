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
    "bg-[#4285F4] text-white hover:bg-[#5B96FF] shadow-lg hover:shadow-[0_0_24px_rgba(66,133,244,0.4)] transition-all duration-200",
  secondary:
    "bg-transparent border border-[rgba(255,255,255,0.16)] text-[var(--color-fg-primary)] hover:bg-[var(--color-bg-elevated)] hover:border-[rgba(255,255,255,0.24)] transition-all duration-200",
  ghost:
    "bg-transparent text-[var(--color-fg-secondary)] hover:text-[var(--color-fg-primary)] hover:bg-[var(--color-bg-elevated)] transition-all duration-200",
  outline:
    "bg-transparent border border-[rgba(66,133,244,0.5)] text-[#4285F4] hover:bg-[rgba(66,133,244,0.1)] hover:border-[#4285F4] transition-all duration-200",
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
    <button
      className={combined}
      style={{ cursor: "pointer" }}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  )
}
