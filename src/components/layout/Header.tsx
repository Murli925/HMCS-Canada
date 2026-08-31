'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { navigation } from '@/data/navigation'

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-200 ${
        scrolled
          ? 'border-black/10 bg-black text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)]'
          : 'border-white/10 bg-transparent text-white backdrop-blur-sm'
      }`}
    >
      <div className="nav-container mx-auto flex items-center justify-between gap-4 px-6 py-8 sm:px-6 lg:px-16">
        <Link
          href="/"
          className={`site-logo flex items-center gap-3 tracking-[0.02em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 ${
            scrolled ? 'text-white' : 'text-white'
          }`}
        >
          HMCS Canada Expedition 2025
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-3 lg:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link inline-flex items-center border-b border-transparent pb-1 text-sm font-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 ${
                  isActive
                    ? 'border-b-[1px] border-white text-white'
                    : scrolled
                      ? 'text-white/80 hover:text-white'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 lg:hidden ${
            scrolled ? 'border-white/20 text-white' : 'border-white/20 text-white'
          }`}
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

      {mobileMenuOpen ? <MobileMenu pathname={pathname} onClose={() => setMobileMenuOpen(false)} scrolled={scrolled} /> : null}
    </header>
  )
}

type MobileMenuProps = {
  pathname: string
  onClose: () => void
  scrolled: boolean
}

function MobileMenu({ pathname, onClose, scrolled }: MobileMenuProps) {
  return (
    <nav
      aria-label="Mobile navigation"
      className={`border-t lg:hidden ${
        scrolled ? 'border-white/10 bg-black text-white' : 'border-white/10 bg-black/80 text-white'
      }`}
    >
      <div className="mx-auto flex max-w-[var(--max-content-width)] flex-col gap-1 px-4 py-4 sm:px-6">
        {navigation.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`rounded-sm px-3 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 ${
                isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5 hover:text-white'
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
