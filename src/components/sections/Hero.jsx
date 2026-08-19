import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { profile } from '../../data'
import { scrollToSection } from '../../lib/scrollTo'
import { useReducedMotionSafe } from '../../hooks/useReducedMotionSafe'
import { Button } from '../ui/Button'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import { TerminalPanel } from './TerminalPanel'

export function Hero() {
  const reduced = useReducedMotionSafe()

  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <motion.div
          className="absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-brand/20 blur-[120px]"
          animate={reduced ? {} : { x: [0, 40, 0], y: [0, 24, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-40 right-1/4 h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-[120px]"
          animate={reduced ? {} : { x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-brand"
          >
            {profile.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-4xl font-extrabold tracking-tight text-text sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-dim"
          >
            {profile.tagline}
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            {profile.highlightStrip.map((item, i) => (
              <li key={item} className="flex items-center gap-2 text-sm text-text-dim">
                {item}
                {i < profile.highlightStrip.length - 1 && (
                  <span className="text-border" aria-hidden="true">
                    •
                  </span>
                )}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Button onClick={() => scrollToSection('projects')} icon={ArrowRight}>
              View Projects
            </Button>
            <Button
              as="a"
              href={profile.resumeUrl}
              download
              variant="secondary"
              icon={Download}
              iconPosition="left"
            >
              Download Resume
            </Button>
            <Button as="a" href={profile.github} target="_blank" rel="noreferrer" variant="ghost" icon={GitHubIcon} iconPosition="left">
              GitHub
            </Button>
            <Button as="a" href={profile.linkedin} target="_blank" rel="noreferrer" variant="ghost" icon={LinkedInIcon} iconPosition="left">
              LinkedIn
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <TerminalPanel />
        </motion.div>
      </div>
    </section>
  )
}
