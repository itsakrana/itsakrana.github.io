import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '../../lib/animations'
import { useReducedMotionSafe } from '../../hooks/useReducedMotionSafe'

export function StaggerGroup({ children, className = '', stagger = 0.08, delay = 0, ...rest }) {
  const reduced = useReducedMotionSafe()

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer(reduced, stagger, delay)}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', as = 'div', ...rest }) {
  const reduced = useReducedMotionSafe()
  const Component = motion[as] ?? motion.div

  return (
    <Component className={className} variants={fadeInUp(reduced)} {...rest}>
      {children}
    </Component>
  )
}
