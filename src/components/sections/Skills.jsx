import { useState } from 'react'
import { ICONS } from '../../lib/icons'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import { skillCategories } from '../../data'
import { SectionHeading } from '../ui/SectionHeading'
import { useReducedMotionSafe } from '../../hooks/useReducedMotionSafe'

export function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id)
  const reduced = useReducedMotionSafe()
  const active = skillCategories.find((c) => c.id === activeId) ?? skillCategories[0]

  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          id="skills-heading"
          title="Tools I work with"
          description="Organized by where they fit in the DevOps lifecycle."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Skill categories">
          {skillCategories.map((cat) => {
            const Icon = ICONS[cat.icon] ?? ICONS.Wrench
            const isActive = cat.id === activeId
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(cat.id)}
                className={clsx(
                  'flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
                  isActive
                    ? 'border-brand/60 bg-brand/10 text-brand'
                    : 'border-border text-text-dim hover:border-border hover:text-text'
                )}
              >
                <Icon size={16} aria-hidden="true" />
                {cat.title}
              </button>
            )
          })}
        </div>

        <div className="mt-10" role="tabpanel">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: reduced ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduced ? 0 : -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {active.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group rounded-xl border border-border bg-surface/60 p-4 transition-colors hover:border-brand/40"
                >
                  <p className="font-semibold text-text">{skill.name}</p>
                  <p className="mt-1 text-sm text-text-dim">{skill.description}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
