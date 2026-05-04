import { useRef } from 'react'
import { CONTENT } from '../../data/content'
import type { ProjectItem } from '../../types'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import { Reveal } from '@/hooks/useReveal'

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  // useRevealOnScroll(sectionRef)

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="border-t border-border/60 bg-bg px-gutter py-section"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p data-reveal className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
          Projects
        </p>
        <h2 id="projects-heading" data-reveal className="mt-4 font-display text-3xl md:text-4xl">
          Selected shipping work & experiments.
        </h2>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {CONTENT.projects.map((project: ProjectItem, i: number) => (
            <Reveal key={project.id} delay={i * 0.04}>
              <li key={project.id} data-reveal className="group relative">
                <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-accent/15 via-elevated/60 to-bg p-[1px] shadow-card transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex h-full flex-col rounded-[calc(1.5rem-1px)] bg-bg/90 p-8 backdrop-blur-sm">
                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-6 font-display text-2xl text-foreground">{project.name}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
                    {project.imageSrc ? (
                      <img
                        src={project.imageSrc}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="mt-6 max-h-48 w-full rounded-xl object-cover"
                      />
                    ) : null}
                    <div className="mt-8 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor="hover"
                          className="text-accent transition-colors hover:text-accent-soft"
                        >
                          Live
                        </a>
                      ) : null}
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor="hover"
                          className="text-muted transition-colors hover:text-accent"
                        >
                          Code
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
