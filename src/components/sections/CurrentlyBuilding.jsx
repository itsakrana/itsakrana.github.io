import { motion } from 'framer-motion'
import { Hammer, BookOpen, Target } from 'lucide-react'
import { profile } from '../../data'
import { GlassPanel } from '../ui/GlassPanel'
import { Reveal } from '../motion/Reveal'
import { useReducedMotionSafe } from '../../hooks/useReducedMotionSafe'

const ROWS = [
  { key: 'building', label: 'Currently Building', icon: Hammer },
  { key: 'learning', label: 'Learning', icon: BookOpen },
  { key: 'goal', label: 'Goal', icon: Target },
]

export function CurrentlyBuilding() {
  const reduced = useReducedMotionSafe()

  return (
    <section id="now" aria-labelledby="now-heading" className="py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <GlassPanel className="relative overflow-hidden p-8 sm:p-10">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full bg-accent"
                  animate={reduced ? {} : { opacity: [0.6, 0, 0.6], scale: [1, 1.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <span id="now-heading" className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                System Status · In Progress
              </span>
            </div>

            <dl className="mt-6 space-y-5">
              {ROWS.map((row) => {
                const Icon = row.icon
                return (
                  <div key={row.key} className="flex items-start gap-3">
                    <Icon size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-text-dim">{row.label}</dt>
                      <dd className="text-sm text-text">{profile.now[row.key]}</dd>
                    </div>
                  </div>
                )
              })}
            </dl>
          </GlassPanel>
        </Reveal>
      </div>
    </section>
  )
}
