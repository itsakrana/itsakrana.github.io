import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Lock, X } from 'lucide-react'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import { Tag } from '../ui/Tag'
import { PipelineDiagram } from './PipelineDiagram'

const CASE_STUDY_SECTIONS = [
  { key: 'overview', label: 'Overview' },
  { key: 'problem', label: 'Problem' },
  { key: 'contribution', label: 'My Contribution' },
  { key: 'challenges', label: 'Challenges' },
  { key: 'learned', label: 'What I Learned' },
]

export function ProjectModal({ project, onClose }) {
  const active = Boolean(project)
  const containerRef = useFocusTrap(active, onClose)
  useLockBodyScroll(active)

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 py-10 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="fixed inset-0 bg-bg/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            layoutId={`project-card-${project.slug}`}
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            className="relative z-10 w-full max-w-3xl rounded-2xl border border-border bg-surface p-6 shadow-2xl sm:p-8"
          >
            <button
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-5 top-5 rounded-md p-1.5 text-text-dim transition-colors hover:bg-surface-2 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <X size={20} />
            </button>

            {project.badge && (
              <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand">
                <Lock size={11} aria-hidden="true" />
                {project.badge}
              </span>
            )}

            <h2 id="case-study-title" className="pr-8 text-2xl font-bold text-text">
              {project.title}
            </h2>
            <p className="mt-1 text-sm font-medium text-brand">{project.subtitle}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-dim">Architecture</h3>
              <div className="mt-4">
                <PipelineDiagram nodes={project.caseStudy.architecture.nodes} />
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {CASE_STUDY_SECTIONS.map((section) => (
                <div key={section.key}>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-dim">
                    {section.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-dim">
                    {project.caseStudy[section.key]}
                  </p>
                </div>
              ))}
            </div>

            {project.metrics.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-6 border-t border-border pt-6">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-2xl font-bold text-accent">{m.value}</p>
                    <p className="text-xs text-text-dim">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 border-t border-border pt-6">
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  View on {project.repoLabel}
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm text-text-dim">
                  <Lock size={16} aria-hidden="true" />
                  {project.repoLabel} — no public repository
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
