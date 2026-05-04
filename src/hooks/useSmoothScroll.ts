import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { isCoarsePointer, prefersReducedMotion } from '../utils/motion'

export function useSmoothScroll(): void {
  useEffect(() => {
    if (prefersReducedMotion() || isCoarsePointer()) return

    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.12,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const tick = (time: number): void => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      ScrollTrigger.refresh()
    }
  }, [])
}
