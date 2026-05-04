import { JSX, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'
import { prefersReducedMotion } from '../utils/motion'

type Variant = 'fade-up' | 'fade-in' | 'scale'

interface UseRevealOptions {
  variant?: Variant
  delay?: number
  duration?: number
}

const variants: Record<Variant, { from: gsap.TweenVars; to: gsap.TweenVars }> = {
  'fade-up': {
    from: { opacity: 0, y: 24 },
    to: { opacity: 1, y: 0 },
  },
  'fade-in': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  scale: {
    from: { opacity: 0, scale: 0.96 },
    to: { opacity: 1, scale: 1 },
  },
}

export function useReveal(options: UseRevealOptions = {}) {
  const { variant = 'fade-up', delay = 0, duration = 0.6 } = options
  const ref = useRef<HTMLElement | null>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el || prefersReducedMotion()) return

      const config = variants[variant]

      gsap.fromTo(
        el,
        {
          ...config.from,
        },
        {
          ...config.to,
          duration,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            once: true,
          },
          willChange: 'transform, opacity',
          clearProps: 'willChange',
        }
      )
    },
    { scope: ref }
  )

  return ref
}

type RevealProps = {
  children: React.ReactNode
  variant?: 'fade-up' | 'fade-in' | 'scale'
  delay?: number
  duration?: number
  as?: keyof JSX.IntrinsicElements
  className?: string
}

export function Reveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration,
  as: Tag = 'div',
  className,
}: RevealProps) {
  const ref = useReveal({ variant, delay, duration })

  return (
    <div ref={ref as any} className={className}>
      {children}
    </div>
  )
}