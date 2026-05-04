import { CONTENT } from '../../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/80 bg-bg px-gutter py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl text-foreground">{CONTENT.owner.name}</p>
          <p className="mt-1 max-w-md text-sm text-muted">{CONTENT.owner.title}</p>
        </div>
        <div className="flex flex-wrap gap-4 font-mono text-sm">
          <a
            href={`mailto:${CONTENT.owner.email}`}
            data-cursor="hover"
            className="text-muted transition-colors hover:text-accent"
          >
            Email
          </a>
          <a
            href={CONTENT.owner.linkedin}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="text-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={CONTENT.owner.github}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={CONTENT.owner.portfolio}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="text-muted transition-colors hover:text-accent"
          >
            Portfolio
          </a>
          <a
            href={CONTENT.owner.resume}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="text-muted transition-colors hover:text-accent"
          >
            Resume
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl font-mono text-xs text-muted">
        © {year} {CONTENT.owner.name}. Built with React, TypeScript, Tailwind, GSAP & Lenis.
      </p>
    </footer>
  )
}
