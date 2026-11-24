import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { scrollToSection } from '../../lib/scrollTo'
import { profile } from '../../data'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['hero', ...LINKS.map((link) => link.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting)
      if (visible && visible.target.id) setActiveId(visible.target.id)
    }, { rootMargin: '-25% 0px -55%', threshold: [0.05, 0.25, 0.5] })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  function goTo(id) {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-colors duration-300 ${
        scrolled ? 'border-b border-border bg-bg/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Primary">
        <button
          onClick={() => goTo('hero')}
          className="font-mono text-sm font-bold tracking-wide text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
        >
          <span className="text-brand">$</span> ankit-rana
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => goTo(link.id)}
                className={`rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  activeId === link.id ? 'bg-brand/10 text-brand' : 'text-text-dim hover:text-text'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={profile.resumeUrl}
            download
            className="rounded-md border border-border px-3 py-2 text-sm text-text-dim transition-colors hover:border-brand/60 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-text md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-border bg-bg/95 backdrop-blur-md md:hidden"
          >
            {LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => goTo(link.id)}
                  className="block w-full px-6 py-3 text-left text-sm text-text-dim hover:text-text"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="border-t border-border">
              <a
                href={profile.resumeUrl}
                download="AnkitRana_Resume.pdf"
                className="block px-6 py-3 text-sm text-brand"
              >
                Download Resume
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="block px-6 py-3 text-sm text-brand"
              >
                GitHub Profile
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
