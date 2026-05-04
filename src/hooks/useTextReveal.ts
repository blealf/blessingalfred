import { useGSAP } from '@gsap/react'
import { type RefObject } from 'react'
import { gsap } from '../lib/gsap'
import { prefersReducedMotion } from '../utils/motion'

export function useTextReveal(scope: RefObject<HTMLElement | null>): void {
  useGSAP(
    () => {
      if (!scope.current || prefersReducedMotion()) return

      const inners = scope.current.querySelectorAll<HTMLElement>('[data-text-reveal]')
      if (!inners.length) return

      gsap.from(inners, {
        yPercent: 110,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.045,
        force3D: true,
        scrollTrigger: {
          trigger: scope.current,
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      })
    },
    { scope }
  )
}
