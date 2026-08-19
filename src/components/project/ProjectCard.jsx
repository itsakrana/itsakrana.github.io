import { motion } from 'framer-motion'
import { ExternalLink, Lock, ArrowUpRight } from 'lucide-react'
import { Tag } from '../ui/Tag'
import { Button } from '../ui/Button'

export function ProjectCard({ project, onOpen }) {
  return (
    <motion.article
      layoutId={`project-card-${project.slug}`}
      className="flex h-full flex-col rounded-2xl border border-border bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40"
    >
      {project.badge && (
        <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand">
          <Lock size={11} aria-hidden="true" />
          {project.badge}
        </span>
      )}

      <h3 className="text-lg font-semibold text-text">{project.title}</h3>
      <p className="text-sm font-medium text-brand">{project.subtitle}</p>
      <p className="mt-3 text-sm leading-relaxed text-text-dim">{project.shortDescription}</p>

      {project.metrics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-4">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <p className="text-xl font-bold text-accent">{m.value}</p>
              <p className="text-xs text-text-dim">{m.label}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-5">
        <Button onClick={() => onOpen(project.slug)} icon={ArrowUpRight}>
          View Case Study
        </Button>

        {project.repoUrl ? (
          <Button as="a" href={project.repoUrl} target="_blank" rel="noreferrer" variant="ghost" icon={ExternalLink} iconPosition="left">
            {project.repoLabel}
          </Button>
        ) : (
          <span className="flex items-center gap-1.5 px-3 py-2.5 text-sm text-text-dim">
            <Lock size={14} aria-hidden="true" />
            {project.repoLabel}
          </span>
        )}
      </div>
    </motion.article>
  )
}
