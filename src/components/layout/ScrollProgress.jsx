import { motion } from 'framer-motion'
import { useScrollProgress } from '../../hooks/useScrollProgress'

export function ScrollProgress() {
  const scaleX = useScrollProgress()

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left bg-gradient-to-r from-brand to-accent"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
