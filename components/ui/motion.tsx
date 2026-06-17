"use client"

/* Animation rules applied (from ui-ux-pro-max + vercel best practices):
   - Duration 150–300ms for micro, ≤400ms for complex  (duration-timing rule)
   - ease-out for entering, ease-in for exiting         (easing rule)
   - Respect prefers-reduced-motion                     (reduced-motion rule)
   - Stagger 30–50ms per item                          (stagger-sequence rule)
   - transform/opacity only — never width/height        (transform-performance rule)
   - Components defined outside parent (rerender-no-inline-components rule)
*/

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef, type ReactNode, useMemo } from "react"

const EASE_ENTER: [number, number, number, number] = [0.0, 0.0, 0.2, 1.0]
const EASE_SMOOTH: [number, number, number, number] = [0.4, 0.0, 0.2, 1.0]

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
  once?: boolean
  amount?: number
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.4,
  direction = "up",
  className,
  once = true,
  amount = 0.1,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduce = useReducedMotion()
  const isInView = useInView(ref, { once, amount })

  const offsets: Record<NonNullable<FadeInProps["direction"]>, { x: number; y: number }> = {
    up:    { y: 22, x: 0 },
    down:  { y: -22, x: 0 },
    left:  { y: 0, x: 22 },
    right: { y: 0, x: -22 },
    none:  { y: 0, x: 0 },
  }

  const offset = shouldReduce ? { x: 0, y: 0 } : offsets[direction]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{
        duration: shouldReduce ? 0.01 : duration,
        delay: shouldReduce ? 0 : delay,
        ease: EASE_ENTER,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.04,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const shouldReduce = useReducedMotion()

  const variants = useMemo(
    () => ({
      hidden: {},
      show: { transition: { staggerChildren: shouldReduce ? 0 : staggerDelay } },
    }),
    [shouldReduce, staggerDelay]
  )

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const shouldReduce = useReducedMotion()

  const variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: shouldReduce ? 0 : 18 },
      show: { opacity: 1, y: 0 },
    }),
    [shouldReduce]
  )

  return (
    <motion.div
      variants={variants}
      transition={{ duration: shouldReduce ? 0.01 : 0.35, ease: EASE_ENTER }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ScaleInProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function ScaleIn({ children, delay = 0, className }: ScaleInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduce = useReducedMotion()
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: shouldReduce ? 1 : 0.95 }}
      transition={{
        duration: shouldReduce ? 0.01 : 0.4,
        delay: shouldReduce ? 0 : delay,
        ease: EASE_SMOOTH,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
