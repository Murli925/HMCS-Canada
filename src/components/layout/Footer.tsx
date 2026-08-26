import Link from 'next/link'
import { navigation } from '@/data/navigation'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-foreground)] text-[var(--color-background)]">
      <div className="mx-auto grid max-w-[var(--max-content-width)] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">HMCS Canada</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-background)]">
            Expedition 2025
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-200">
            Bringing to life Canada’s first purpose-built warship through deepwater exploration, research, and public engagement.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">Explore</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-[var(--color-background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-background)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-foreground)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            <li>
              <a href="mailto:info.hmcscanadaexpedition@gmail.com" className="transition-colors hover:text-[var(--color-background)]">
                info.hmcscanadaexpedition@gmail.com
              </a>
            </li>
            <li>
              <a href="/contact" className="transition-colors hover:text-[var(--color-background)]">
                Contact the project
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[var(--max-content-width)] flex-col gap-2 px-4 py-5 text-sm text-slate-300 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2025 HMCS Canada Expedition.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
