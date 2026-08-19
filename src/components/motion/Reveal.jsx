import { motion } from 'framer-motion'
import { fadeInUp } from '../../lib/animations'
import { useReducedMotionSafe } from '../../hooks/useReducedMotionSafe'

export function Reveal({ children, as = 'div', className = '', delay = 0, ...rest }) {
  const reduced = useReducedMotionSafe()
  const Component = motion[as] ?? motion.div

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={delay}
      variants={fadeInUp(reduced)}
      {...rest}
    >
      {children}
    </Component>
  )
}
