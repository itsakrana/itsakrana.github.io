import { motion } from 'framer-motion'
import { useReducedMotionSafe } from '../../hooks/useReducedMotionSafe'
import { GlassPanel } from '../ui/GlassPanel'

const LINES = [
  { cmd: 'whoami', out: 'ankit-rana' },
  { cmd: 'role', out: 'DevOps Engineer' },
  { cmd: 'focus', out: 'Cloud • Infrastructure • Automation' },
  { cmd: 'stack', out: 'AWS • Azure • Terraform • Docker • Kubernetes • GitHub Actions' },
  { cmd: 'ai-tools', out: 'Claude Code • AI-assisted DevOps' },
]

export function TerminalPanel() {
  const reduced = useReducedMotionSafe()

  return (
    <GlassPanel className="w-full max-w-lg overflow-hidden">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-text-dim">ankit@devops ~ %</span>
      </div>

      <div className="space-y-3 p-5 font-mono text-[13px] leading-relaxed">
        {LINES.map((line, i) => (
          <motion.div
            key={line.cmd}
            initial={{ opacity: 0, y: reduced ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduced ? 0 : 0.6 + i * 0.5, duration: 0.4 }}
          >
            <p className="text-text">
              <span className="text-accent">$</span> {line.cmd}
            </p>
            <p className="pl-4 text-text-dim">{line.out}</p>
          </motion.div>
        ))}
        <motion.span
          className="inline-block h-4 w-2 bg-brand"
          animate={reduced ? {} : { opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          aria-hidden="true"
        />
      </div>
    </GlassPanel>
  )
}
