import clsx from 'clsx'

export function Card({ as: Component = 'div', children, className = '', hover = true, ...rest }) {
  return (
    <Component
      className={clsx(
        'rounded-2xl border border-border bg-surface/80 p-6 backdrop-blur-sm',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:border-brand/40',
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}
