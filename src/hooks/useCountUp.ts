import { useGSAP } from '@gsap/react'
import { type RefObject } from 'react'
import { gsap } from '../lib/gsap'
import { prefersReducedMotion } from '../utils/motion'

interface CountUpOptions {
  readonly end: number
  readonly suffix?: string
}

export function useCountUp(
  scope: RefObject<HTMLElement | null>,
  options: CountUpOptions
): void {
  const { end, suffix = '' } = options

  useGSAP(
    () => {
      const el = scope.current
      if (!el || prefersReducedMotion()) {
        if (el) el.textContent = `${end}${suffix}`
        return
      }

      const state = { value: 0 }
      gsap.fromTo(
        state,
        { value: 0 },
        {
          value: end,
          duration: 2,
          ease: 'power2.out',
          snap: { value: 1 },
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            el.textContent = `${Math.round(state.value)}${suffix}`
          },
        }
      )
    },
    { scope, dependencies: [end, suffix] }
  )
}
