import { useGSAP } from '@gsap/react'
import { useRef, useState } from 'react'
import { CONTENT } from '../../data/content'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import { gsap } from '../../lib/gsap'
import { cn } from '../../utils/cn'

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const [openId, setOpenId] = useState<string>(CONTENT.experience[0]?.id ?? '')
  const panelsRef = useRef<Record<string, HTMLDivElement | null>>({})
  const initializedRef = useRef(false)

  useRevealOnScroll(sectionRef)

  useGSAP(
    () => {
      CONTENT.experience.forEach((item) => {
        const panel = panelsRef.current[item.id]
        if (!panel) return
        const open = openId === item.id

        if (!initializedRef.current) {
          gsap.set(panel, { height: open ? 'auto' : 0, overflow: 'hidden' })
          return
        }

        gsap.to(panel, {
          height: open ? 'auto' : 0,
          duration: 0.55,
          ease: 'power3.inOut',
        })
      })
      initializedRef.current = true
    },
    { dependencies: [openId] }
  )

  const toggle = (id: string): void => {
    setOpenId((prev) => (prev === id ? '' : id))
  }

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="border-t border-border/60 bg-bg px-gutter py-section"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p data-reveal className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
          Experience
        </p>
        <h2 id="experience-heading" data-reveal className="mt-4 font-display text-3xl md:text-4xl">
          Teams, tempo, and trustworthy delivery.
        </h2>

        <div className="mt-12 space-y-3">
          {CONTENT.experience.map((item) => {
            const open = openId === item.id
            return (
              <article
                key={item.id}
                data-reveal
                className="overflow-hidden rounded-2xl border border-border/70 bg-elevated/40 shadow-card"
              >
                <button
                  type="button"
                  id={`exp-trigger-${item.id}`}
                  data-cursor="hover"
                  aria-expanded={open}
                  aria-controls={`exp-panel-${item.id}`}
                  className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left md:items-center md:px-8"
                  onClick={() => toggle(item.id)}
                >
                  <span className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
                    <span className="font-display text-xl text-foreground">{item.company}</span>
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">{item.period}</span>
                  </span>
                  <span
                    className={cn(
                      'mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border font-mono text-lg text-accent transition-transform md:mt-0',
                      open && 'rotate-45'
                    )}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  id={`exp-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`exp-trigger-${item.id}`}
                  ref={(el) => {
                    panelsRef.current[item.id] = el
                  }}
                >
                  <div className="space-y-4 px-5 pb-6 pt-0 md:px-8 md:pb-8">
                    <h3 className="font-mono text-sm uppercase tracking-widest text-accent-soft">{item.title}</h3>
                    <ul className="list-disc space-y-3 pl-5 text-sm text-muted marker:text-accent">
                      {item.responsibilities.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
