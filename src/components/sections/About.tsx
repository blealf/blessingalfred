import { useRef } from 'react'
import { CONTENT } from '../../data/content'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  useRevealOnScroll(sectionRef)

  return (
    <section
      ref={sectionRef}
      id="about"
      className="border-t border-border/60 bg-bg px-gutter py-section"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p data-reveal className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
          About
        </p>
        <h2
          id="about-heading"
          data-reveal
          className="mt-4 font-display text-3xl text-foreground md:text-4xl"
        >
          Pragmatic interfaces, measurable outcomes.
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_280px] lg:gap-16">
          <div className="space-y-6 text-lg text-muted">
            {CONTENT.aboutParagraphs.map((p, i) => (
              <p key={i} data-reveal>
                {p}
              </p>
            ))}
          </div>

          <aside data-reveal className="rounded-2xl border border-border/80 bg-elevated/50 p-6 shadow-card">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-foreground">Quick facts</h3>
            <ul className="mt-4 space-y-3 font-mono text-sm text-muted">
              <li>
                <span className="text-foreground">{CONTENT.owner.location}</span>
              </li>
              <li>
                <a
                  href={`mailto:${CONTENT.owner.email}`}
                  data-cursor="hover"
                  className="transition-colors hover:text-accent"
                >
                  {CONTENT.owner.email}
                </a>
              </li>
              <li>{CONTENT.owner.phone}</li>
              <li className="leading-relaxed">{CONTENT.owner.availability}</li>
            </ul>
          </aside>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-border/60 bg-elevated/30 py-4">
          <div className="flex animate-marquee whitespace-nowrap font-mono text-xs uppercase tracking-[0.4em] text-muted">
            {[...CONTENT.timeline, ...CONTENT.timeline].map((item, i) => (
              <span key={`${item.year}-${item.title}-${i}`} className="mx-10 inline-flex items-center gap-3">
                <span className="text-accent">{item.year}</span>
                {item.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
