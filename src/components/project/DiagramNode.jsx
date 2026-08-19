import { motion } from 'framer-motion'
import { ICONS } from '../../lib/icons'
import { useReducedMotionSafe } from '../../hooks/useReducedMotionSafe'

export function DiagramNode({ node, index }) {
  const reduced = useReducedMotionSafe()
  const Icon = ICONS[node.icon] ?? ICONS.Box

  return (
    <motion.div
      initial={{ opacity: 0, scale: reduced ? 1 : 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay: reduced ? 0 : index * 0.12 }}
      className="flex min-w-[9.5rem] flex-col items-center gap-2 rounded-xl border border-border bg-surface-2 px-4 py-3 text-center"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
        <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
      </div>
      <p className="text-xs font-medium leading-tight text-text">{node.label}</p>
    </motion.div>
  )
}
