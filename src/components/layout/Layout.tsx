import { type ReactNode } from 'react'
import Cursor from '../ui/Cursor'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  readonly children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  useSmoothScroll()

  return (
    <div className="relative min-h-screen bg-bg font-body text-base text-foreground antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-gutter focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-bg focus:outline-none focus:ring-2 focus:ring-accent-soft"
      >
        Skip to content
      </a>
      <Navbar />
      <Cursor />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}
