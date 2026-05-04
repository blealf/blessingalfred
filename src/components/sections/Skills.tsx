import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { CONTENT } from '../../data/content'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import { gsap } from '../../lib/gsap'
import { prefersReducedMotion } from '../../utils/motion'

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const fillsRef = useRef<HTMLDivElement>(null)

  useRevealOnScroll(sectionRef)

  useGSAP(
    () => {
      const root = fillsRef.current
      if (!root || prefersReducedMotion()) return

      const fills = root.querySelectorAll<HTMLElement>('[data-skill-fill]')
      fills.forEach((el) => {
        const raw = el.dataset.level
        const level = raw ? Number.parseFloat(raw) : 0
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: Math.min(100, Math.max(0, level)) / 100,
            duration: 1.25,
            ease: 'power2.out',
            transformOrigin: 'left center',
            force3D: true,
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    },
    { scope: fillsRef }
  )

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="border-t border-border/60 bg-bg px-gutter py-section"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p data-reveal className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
          Skills
        </p>
        <h2 id="skills-heading" data-reveal className="mt-4 font-display text-3xl md:text-4xl">
          Depth across the stack you ship with daily.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {CONTENT.stackPills.map((pill) => (
            <div
              key={pill.category}
              data-reveal
              className="rounded-2xl border border-border/70 bg-elevated/40 p-5 shadow-card"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-foreground">{pill.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {pill.items.map((item) => (
                  <li key={item}>
                    <span className="inline-block rounded-full border border-border/80 bg-bg/60 px-3 py-1 font-mono text-[11px] text-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div ref={fillsRef} className="mt-10 grid gap-6 lg:grid-cols-2">
          {CONTENT.skills.map((group) => (
            <div
              key={group.title}
              data-reveal
              className="rounded-3xl border border-border/70 bg-gradient-to-br from-elevated/80 to-bg p-8 shadow-card"
            >
              <h3 className="font-display text-2xl text-foreground">{group.title}</h3>
              <p className="mt-2 text-sm text-muted">{group.description}</p>
              <ul className="mt-8 space-y-5">
                {group.metrics.map((metric) => (
                  <li key={metric.name}>
                    <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-muted">
                      <span>{metric.name}</span>
                      <span className="text-accent">{metric.level}%</span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-border/80">
                      <div
                        data-skill-fill
                        data-level={metric.level}
                        className="h-full w-full rounded-full bg-accent"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
