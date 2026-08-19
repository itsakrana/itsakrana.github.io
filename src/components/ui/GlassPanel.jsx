import clsx from 'clsx'

export function GlassPanel({ children, className = '', ...rest }) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl',
        'shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
