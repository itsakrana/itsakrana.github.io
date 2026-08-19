import { useEffect, useRef } from 'react'

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

export function useFocusTrap(active, onClose) {
  const containerRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (!active) return
    triggerRef.current = document.activeElement

    const container = containerRef.current
    const focusables = container?.querySelectorAll(FOCUSABLE)
    focusables?.[0]?.focus()

    function onKeyDown(e) {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab' || !container) return
      const nodes = container.querySelectorAll(FOCUSABLE)
      if (nodes.length === 0) return
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      triggerRef.current?.focus?.()
    }
  }, [active, onClose])

  return containerRef
}
