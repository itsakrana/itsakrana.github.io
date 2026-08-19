export function Tag({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-text-dim ${className}`}
    >
      {children}
    </span>
  )
}
