import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonProps = {
  href?: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  ariaLabel?: string
}

export function Button({ href, children, variant = 'primary', className = '', ariaLabel }: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center border text-sm font-medium tracking-[0.08em] uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-foreground)]'

  const variantClasses = {
    primary: 'border-[var(--color-foreground)] bg-[var(--color-foreground)] text-[var(--color-background)] hover:bg-[#0e1d2a]',
    secondary: 'border-[var(--color-border)] bg-transparent text-[var(--color-foreground)] hover:bg-[var(--color-surface)]',
    ghost: 'border-transparent bg-transparent px-0 text-[var(--color-foreground)] hover:text-[var(--color-accent)]',
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
