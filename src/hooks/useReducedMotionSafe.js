import { useReducedMotion } from 'framer-motion'

export function useReducedMotionSafe() {
  return Boolean(useReducedMotion())
}
