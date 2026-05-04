import { useGSAP } from '@gsap/react'
import { useEffect, useRef, useState } from 'react'
import { gsap } from '../../lib/gsap'
import { prefersReducedMotion } from '../../utils/motion'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const finePointer = (): boolean =>
      typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

    setActive(finePointer() && !prefersReducedMotion())

    if (typeof window === 'undefined') return

    const mq = window.matchMedia('(pointer: fine)')
    const sync = (): void => {
      setActive(mq.matches && !prefersReducedMotion())
    }
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useGSAP(
    () => {
      if (!active) return

      const dot = dotRef.current
      const ring = ringRef.current
      if (!dot || !ring) return

      const xDot = gsap.quickTo(dot, 'x', { duration: 0.2, ease: 'power3.out' })
      const yDot = gsap.quickTo(dot, 'y', { duration: 0.2, ease: 'power3.out' })
      const xRing = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' })
      const yRing = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' })

      let cursorMode: 'default' | 'hover' | 'text' = 'default'

      const onMove = (e: MouseEvent): void => {
        const px = e.clientX
        const py = e.clientY
        xDot(px)
        yDot(py)
        xRing(px)
        yRing(py)

        const target = e.target as HTMLElement | null
        const hover = target?.closest('[data-cursor="hover"]')
        const text = target?.closest('[data-cursor="text"]')
        const nextMode = text ? 'text' : hover ? 'hover' : 'default'

        if (nextMode !== cursorMode) {
          cursorMode = nextMode
          const ringScale = nextMode === 'text' ? 1.1 : nextMode === 'hover' ? 1.5 : 1
          const dotScale = nextMode === 'text' ? 0.25 : 1
          gsap.to(ring, { scale: ringScale, duration: 0.25, overwrite: 'auto' })
          gsap.to(dot, { scale: dotScale, duration: 0.2, overwrite: 'auto' })
        }
      }

      const onLeave = (): void => {
        cursorMode = 'default'
        gsap.to(ring, { scale: 1, duration: 0.3 })
        gsap.to(dot, { scale: 1, duration: 0.2 })
      }

      window.addEventListener('mousemove', onMove)
      document.body.addEventListener('mouseleave', onLeave)

      return () => {
        window.removeEventListener('mousemove', onMove)
        document.body.removeEventListener('mouseleave', onLeave)
      }
    },
    { dependencies: [active], scope: rootRef }
  )

  if (!active) return null

  return (
    <div ref={rootRef} className="pointer-events-none fixed inset-0 z-[90]" aria-hidden="true">
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[92] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-glow will-change-transform"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[91] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/35 will-change-transform"
      />
    </div>
  )
}
