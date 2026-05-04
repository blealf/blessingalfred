import { useGSAP } from '@gsap/react'
import { type RefObject } from 'react'
import { gsap } from '../lib/gsap'
import { prefersReducedMotion } from '../utils/motion'

interface RevealOptions {
  readonly selector?: string
  readonly y?: number
  readonly stagger?: number
  readonly delay?: number
}

export function useRevealOnScroll(
  scope: RefObject<HTMLElement | null>,
  options: RevealOptions = {}
): void {
  const selector = options.selector ?? '[data-reveal]'
  const y = options.y ?? 28
  const stagger = options.stagger ?? 0.08
  const delay = options.delay ?? 0

  useGSAP(
    () => {
      if (!scope.current || prefersReducedMotion()) return

      const targets = scope.current.querySelectorAll<HTMLElement>(selector)
      if (!targets.length) return

      gsap.from(targets, {
        opacity: 0,
        y,
        duration: 0.9,
        ease: 'power3.out',
        stagger,
        delay,
        force3D: true,
        scrollTrigger: {
          trigger: scope.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    },
    { dependencies: [selector, y, stagger, delay], scope }
  )
}
