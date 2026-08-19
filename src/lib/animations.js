export const fadeInUp = (reduced) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: reduced ? 0.2 : 0.6, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
  }),
})

export const fadeIn = (reduced) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: reduced ? 0.2 : 0.5 } },
})

export const scaleIn = (reduced) => ({
  hidden: { opacity: 0, scale: reduced ? 1 : 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: reduced ? 0.2 : 0.5, ease: [0.22, 1, 0.36, 1] },
  },
})

export const staggerContainer = (reduced, stagger = 0.08, delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: reduced ? 0 : stagger,
      delayChildren: reduced ? 0 : delay,
    },
  },
})
