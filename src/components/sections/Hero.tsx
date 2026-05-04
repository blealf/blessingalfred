import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import type { Stat } from '../../types'
import { CONTENT } from '../../data/content'
import { useCountUp } from '../../hooks/useCountUp'
import { useParallax } from '../../hooks/useParallax'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import { useTextReveal } from '../../hooks/useTextReveal'
import { gsap } from '../../lib/gsap'
import { prefersReducedMotion } from '../../utils/motion'

function SplitReveal({ text, className }: { readonly text: string; readonly className?: string }) {
  const words = text.split(' ').filter(Boolean)
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="mr-[0.35em] inline-block overflow-hidden pb-1 align-top last:mr-0">
          <span data-text-reveal className="inline-block">
            {word}
          </span>
        </span>
      ))}
    </span>
  )
}

function StatBlock({ stat }: { readonly stat: Stat }) {
  const valueRef = useRef<HTMLSpanElement>(null)

  useCountUp(valueRef, {
    end: stat.value,
    suffix: stat.suffix ?? '',
  })

  return (
    <div
      data-reveal
      className="rounded-2xl border border-border/70 bg-elevated/80 p-5 shadow-card backdrop-blur-sm"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{stat.label}</p>
      <p className="mt-3 font-display text-4xl text-foreground md:text-5xl">
        <span ref={valueRef}>0</span>
      </p>
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const geoRef = useRef<HTMLDivElement>(null)

  useTextReveal(headlineRef)
  useRevealOnScroll(sectionRef)
  useParallax(geoRef, { trigger: sectionRef, yPercent: 18 })

  useGSAP(
    () => {
      const geo = geoRef.current
      if (!geo || prefersReducedMotion()) return

      const layers = geo.querySelectorAll<HTMLElement>('[data-geo-layer]')
      layers.forEach((layer, i) => {
        gsap.to(layer, {
          rotation: i % 2 === 0 ? 360 : -360,
          duration: 42 + i * 6,
          repeat: -1,
          ease: 'none',
          force3D: true,
        })
      })
    },
    { scope: geoRef }
  )

  const scrollToContact = (): void => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative overflow-hidden bg-radial-fade px-gutter pb-section pt-28 md:pt-36"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p data-reveal className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
            {CONTENT.owner.location} · {CONTENT.owner.availability}
          </p>

          <h1
            id="hero-heading"
            ref={headlineRef}
            className="mt-6 font-display text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-6xl"
          >
            <SplitReveal text={CONTENT.owner.name} />
            <span className="mt-4 block overflow-hidden">
              <span
                data-text-reveal
                className="inline-block text-2xl text-muted md:text-3xl lg:text-4xl"
              >
                {CONTENT.owner.title}
              </span>
            </span>
          </h1>

          <p data-reveal className="mt-8 max-w-xl text-lg text-muted">
            {CONTENT.heroTagline}
          </p>
          <p data-reveal className="mt-4 max-w-xl text-base text-muted/90">
            {CONTENT.heroSummary}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              data-cursor="hover"
              className="rounded-full bg-accent px-8 py-3 font-mono text-xs uppercase tracking-widest text-bg shadow-glow transition-transform hover:-translate-y-0.5"
              onClick={scrollToContact}
            >
              Let&apos;s talk
            </button>
            <a
              href={CONTENT.owner.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="rounded-full border border-border px-8 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div
            ref={geoRef}
            className="relative mx-auto flex h-[min(380px,72vw)] w-full max-w-lg items-center justify-center lg:mx-0"
          >
            <div className="relative aspect-square w-[88%]">
              <div
                data-geo-layer
                className="absolute inset-[8%] rounded-[150px] border border-accent/25 shadow-glow hover:scale-505"
                aria-hidden="true"
              />
              <div
                data-geo-layer
                className="absolute inset-[18%] rounded-[100px] border border-border bg-elevated/55"
                aria-hidden="true"
              />
              <div
                data-geo-layer
                className="absolute inset-[30%] rounded-[50px] border-2 border-accent/40"
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-28 w-28 rounded-full bg-gradient-to-br from-accent/25 to-transparent blur-xl" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {CONTENT.stats.map((s) => (
              <StatBlock key={s.id} stat={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
