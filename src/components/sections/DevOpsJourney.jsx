import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ICONS } from '../../lib/icons'
import { journey } from '../../data'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../motion/Reveal'

const STEP_ICONS = {
  'linux-git': 'Terminal',
  docker: 'Box',
  cicd: 'GitBranch',
  terraform: 'Boxes',
  cloud: 'Cloud',
  kubernetes: 'Ship',
  current: 'Sparkles',
}

export function DevOpsJourney() {
  const trackRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 0.7', 'end 0.4'],
  })
  const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <section id="journey" aria-labelledby="journey-heading" className="py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="DevOps Journey"
          id="journey-heading"
          title="How I got here"
          description="Each stage built on the last — from the command line to running production-style infrastructure."
        />

        <div ref={trackRef} className="relative mt-16 pl-10 sm:pl-14">
          <div className="absolute left-[15px] top-0 h-full w-px bg-border sm:left-[19px]" aria-hidden="true" />
          <motion.div
            className="absolute left-[15px] top-0 w-px origin-top bg-gradient-to-b from-brand to-accent sm:left-[19px]"
            style={{ scaleY: lineScale, height: '100%' }}
            aria-hidden="true"
          />

          <ol className="space-y-12">
            {journey.map((step, i) => {
              const Icon = ICONS[STEP_ICONS[step.id]] ?? ICONS.Circle
              return (
                <li key={step.id} className="relative">
                  <Reveal delay={i * 0.04}>
                    <span
                      className={`absolute -left-10 flex h-8 w-8 items-center justify-center rounded-full border sm:-left-14 ${
                        step.current
                          ? 'border-brand bg-brand/20 text-brand'
                          : 'border-border bg-surface text-text-dim'
                      }`}
                      aria-hidden="true"
                    >
                      <Icon size={15} strokeWidth={1.8} />
                    </span>
                    <h3 className="flex items-center gap-2 text-base font-semibold text-text">
                      {step.title}
                      {step.current && (
                        <span className="rounded-full bg-brand/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand">
                          Current
                        </span>
                      )}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-dim">{step.description}</p>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
