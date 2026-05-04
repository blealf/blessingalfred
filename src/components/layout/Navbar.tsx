import { useEffect, useRef, useState } from 'react'
import { CONTENT } from '../../data/content'
import { useMagneticEffect } from '../../hooks/useMagneticEffect'
import { cn } from '../../utils/cn'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const brandRef = useRef<HTMLAnchorElement>(null)
  useMagneticEffect(brandRef, { strength: 0.25 })

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (id: string): void => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors duration-300',
        scrolled && 'border-border/80 bg-bg/80 backdrop-blur-md'
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-gutter py-4">
        <a
          ref={brandRef}
          href="#hero"
          data-cursor="hover"
          className="font-display text-xl text-foreground md:text-2xl"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('hero')
          }}
          aria-label={`${CONTENT.owner.name}, home`}
        >
          {CONTENT.owner.name.split(' ')[0]}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {CONTENT.navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              data-cursor="hover"
              className="rounded-lg px-3 py-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg border border-border/80 md:hidden"
          data-cursor="hover"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cn('h-0.5 w-6 bg-foreground transition-transform', open && 'translate-y-2 rotate-45')} />
          <span className={cn('h-0.5 w-6 bg-foreground transition-opacity', open && 'opacity-0')} />
          <span className={cn('h-0.5 w-6 bg-foreground transition-transform', open && '-translate-y-2 -rotate-45')} />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          'border-t border-border/80 bg-bg/95 px-gutter pb-6 pt-2 backdrop-blur-md md:hidden',
          !open && 'hidden'
        )}
      >
        <ul className="flex flex-col gap-1">
          {CONTENT.navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                data-cursor="hover"
                className="w-full rounded-lg px-3 py-3 text-left font-mono text-sm uppercase tracking-widest text-muted hover:bg-elevated hover:text-foreground"
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
