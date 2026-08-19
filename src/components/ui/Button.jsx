import clsx from 'clsx'

const VARIANTS = {
  primary:
    'bg-brand text-[#05070d] hover:bg-brand-dim shadow-[0_0_0_1px_rgba(56,189,248,0.4)] hover:shadow-[0_0_24px_-4px_rgba(56,189,248,0.5)]',
  secondary:
    'bg-surface-2 text-text border border-border hover:border-brand/60 hover:text-brand',
  ghost: 'text-text-dim hover:text-text hover:bg-surface-2',
}

export function Button({
  as: Component = 'button',
  variant = 'primary',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  children,
  ...rest
}) {
  return (
    <Component
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold',
        'transition-all duration-200 ease-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
        VARIANTS[variant],
        className
      )}
      {...rest}
    >
      {Icon && iconPosition === 'left' && <Icon size={16} strokeWidth={2} aria-hidden="true" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={16} strokeWidth={2} aria-hidden="true" />}
    </Component>
  )
}
