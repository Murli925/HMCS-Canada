'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { navigation } from '@/data/navigation'
import { Button } from '@/components/common/Button'

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[var(--max-content-width)] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-foreground)] focus-visible:ring-offset-2">
HMCS Canada Expedition 2025
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-foreground)] focus-visible:ring-offset-2 ${
                  isActive ? 'text-[var(--color-foreground)]' : 'text-[var(--color-muted)] hover:text-[var(--color-foreground)]'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-[var(--color-border)] text-[var(--color-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-foreground)] focus-visible:ring-offset-2 lg:hidden"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((current) => !current)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="relative block h-4 w-5">
            <span className="absolute left-0 top-0 h-px w-full bg-current" />
            <span className="absolute left-0 top-1.5 h-px w-full bg-current" />
            <span className="absolute left-0 bottom-0 h-px w-full bg-current" />
          </span>
        </button>
      </div>

      {mobileMenuOpen ? <MobileMenu pathname={pathname} onClose={() => setMobileMenuOpen(false)} /> : null}
    </header>
  )
}

type MobileMenuProps = {
  pathname: string
  onClose: () => void
}

function MobileMenu({ pathname, onClose }: MobileMenuProps) {
  return (
    <nav aria-label="Mobile navigation" className="border-t border-[var(--color-border)] bg-[var(--color-background)] lg:hidden">
      <div className="mx-auto flex max-w-[var(--max-content-width)] flex-col gap-1 px-4 py-4 sm:px-6">
        {navigation.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`rounded-sm px-3 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-foreground)] focus-visible:ring-offset-2 ${
                isActive ? 'bg-[var(--color-surface)] text-[var(--color-foreground)]' : 'text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-foreground)]'
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
