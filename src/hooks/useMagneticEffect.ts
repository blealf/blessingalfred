import { useGSAP } from '@gsap/react'
import { type RefObject } from 'react'
import { gsap } from '../lib/gsap'
import { isCoarsePointer, prefersReducedMotion } from '../utils/motion'

interface MagneticOptions {
  readonly strength?: number
}

export function useMagneticEffect(
  scope: RefObject<HTMLElement | null>,
  options: MagneticOptions = {}
): void {
  const strength = options.strength ?? 0.35

  useGSAP(
    () => {
      const el = scope.current
      if (!el || prefersReducedMotion() || isCoarsePointer()) return

      const xTo = gsap.quickTo(el, 'x', { duration: 0.65, ease: 'power3.out' })
      const yTo = gsap.quickTo(el, 'y', { duration: 0.65, ease: 'power3.out' })

      const onMove = (e: PointerEvent): void => {
        const rect = el.getBoundingClientRect()
        const dx = e.clientX - (rect.left + rect.width / 2)
        const dy = e.clientY - (rect.top + rect.height / 2)
        xTo(dx * strength)
        yTo(dy * strength)
      }

      const onLeave = (): void => {
        xTo(0)
        yTo(0)
      }

      el.addEventListener('pointermove', onMove)
      el.addEventListener('pointerleave', onLeave)

      return () => {
        el.removeEventListener('pointermove', onMove)
        el.removeEventListener('pointerleave', onLeave)
      }
    },
    { scope, dependencies: [strength] }
  )
}
