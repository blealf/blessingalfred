import { useGSAP } from '@gsap/react'
import { type FormEvent, useRef, useState } from 'react'
import { CONTENT } from '../../data/content'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import { gsap } from '../../lib/gsap'

type FormStatus = 'idle' | 'success'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const successRef = useRef<HTMLDivElement>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [error, setError] = useState<string | null>(null)

  useRevealOnScroll(sectionRef)

  useGSAP(
    () => {
      if (status !== 'success' || !successRef.current) return
      gsap.fromTo(
        successRef.current,
        { opacity: 0, scale: 0.92, y: 16 },
        { opacity: 1, scale: 1, y: 0, duration: 0.65, ease: 'back.out(1.35)' }
      )
    },
    { dependencies: [status], scope: sectionRef }
  )

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setError(null)

    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()

    if (trimmedName.length < 2) {
      setError('Please enter your name.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Please enter a valid email address.')
      return
    }
    if (trimmedMessage.length < 12) {
      setError('Please add a bit more detail to your message.')
      return
    }

    const params = new URLSearchParams({
      subject: `Portfolio inquiry from ${trimmedName}`,
      body: `${trimmedMessage}\n\n— ${trimmedName}\n${trimmedEmail}`,
    })

    window.open(`mailto:${CONTENT.owner.email}?${params.toString()}`, '_blank', 'noopener,noreferrer')

    setStatus('success')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="border-t border-border/60 bg-bg px-gutter py-section"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p data-reveal className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
            Contact
          </p>
          <h2 id="contact-heading" data-reveal className="mt-4 font-display text-3xl md:text-4xl">
            Tell me about the problem you&apos;re solving.
          </h2>
          <p data-reveal className="mt-6 max-w-md text-muted">
            Prefer email directly? Reach me at{' '}
            <a
              href={`mailto:${CONTENT.owner.email}`}
              data-cursor="hover"
              className="font-mono text-accent underline-offset-4 hover:underline"
            >
              {CONTENT.owner.email}
            </a>
          </p>
          <ul data-reveal className="mt-8 space-y-2 font-mono text-sm text-muted">
            <li>{CONTENT.owner.phone}</li>
            <li>{CONTENT.owner.location}</li>
            <li>{CONTENT.owner.availability}</li>
          </ul>
        </div>

        <div data-reveal className="rounded-3xl border border-border/70 bg-elevated/40 p-8 shadow-card md:p-10">
          {status === 'success' ? (
            <div
              ref={successRef}
              className="rounded-2xl border border-accent/40 bg-bg/80 p-8 text-center"
              role="status"
              aria-live="polite"
            >
              <p className="font-display text-2xl text-foreground">Thanks for reaching out.</p>
              <p className="mt-3 text-sm text-muted">
                Your mail client should open with your message pre-filled. If it didn&apos;t, copy{' '}
                {CONTENT.owner.email} manually.
              </p>
              <button
                type="button"
                data-cursor="hover"
                className="mt-8 rounded-full border border-border px-6 py-2 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent"
                onClick={() => setStatus('idle')}
              >
                Send another
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="contact-name" className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                  className="mt-2 w-full rounded-xl border border-border bg-bg/70 px-4 py-3 font-body text-base text-foreground outline-none transition-colors focus:border-accent"
                  data-cursor="text"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  className="mt-2 w-full rounded-xl border border-border bg-bg/70 px-4 py-3 font-body text-base text-foreground outline-none transition-colors focus:border-accent"
                  data-cursor="text"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(ev) => setMessage(ev.target.value)}
                  className="mt-2 w-full resize-y rounded-xl border border-border bg-bg/70 px-4 py-3 font-body text-base text-foreground outline-none transition-colors focus:border-accent"
                  data-cursor="text"
                />
              </div>
              {error ? (
                <p className="font-mono text-sm text-accent-soft" role="alert">
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                data-cursor="hover"
                className="w-full rounded-full bg-accent py-3 font-mono text-xs uppercase tracking-[0.35em] text-bg shadow-glow transition-transform hover:-translate-y-0.5 md:w-auto md:px-12"
              >
                Compose email
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
