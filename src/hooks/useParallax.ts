import { useGSAP } from '@gsap/react'
import { type RefObject } from 'react'
import { gsap } from '../lib/gsap'
import { isCoarsePointer, prefersReducedMotion } from '../utils/motion'

interface ParallaxOptions {
  readonly trigger?: RefObject<HTMLElement | null>
  readonly yPercent?: number
}

export function useParallax(
  target: RefObject<HTMLElement | null>,
  options: ParallaxOptions = {}
): void {
  const triggerRef = options.trigger ?? target
  const yPercent = options.yPercent ?? 12

  useGSAP(
    () => {
      const el = target.current
      const tr = triggerRef.current
      if (!el || !tr || prefersReducedMotion() || isCoarsePointer()) return

      gsap.fromTo(
        el,
        { yPercent: -yPercent / 2 },
        {
          yPercent: yPercent / 2,
          ease: 'none',
          force3D: true,
          scrollTrigger: {
            trigger: tr,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.75,
          },
        }
      )
    },
    { dependencies: [yPercent], scope: target }
  )
}
