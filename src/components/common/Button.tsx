import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonProps = {
  href?: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  ariaLabel?: string
  target?: string
  rel?: string
}

export function Button({ href, children, variant = 'primary', className = '', ariaLabel }: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center border text-sm font-400 tracking-[0.03em] uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-foreground)]'

  const variantClasses = {
    primary: 'border-[var(--color-blue)] bg-[var(--color-blue)] py-5 px-7 text-[var(--color-background)] hover:bg-transparent hover:text-[var(--color-blue)]',
    secondary: 'border-[var(--color-blue)] bg-transparent py-5 px-7 text-[var(--color-blue)] hover:bg-[var(--color-blue)] hover:text-[var(--color-white)]',
    ghost: 'border-transparent bg-transparent py-5 px-7 text-[var(--color-foreground)] hover:text-[var(--color-accent)]',
  }

  const sharedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={sharedClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" aria-label={ariaLabel} className={sharedClasses}>
      {children}
    </button>
  )
}
