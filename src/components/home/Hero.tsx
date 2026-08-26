import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/common/Button'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-foreground)] text-[var(--color-background)]">
      <div className="absolute inset-0">
        <Image
          src="/images/placeholder-hero.svg"
          alt="HMCS Canada expedition imagery placeholder"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-65"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1a24]/90 via-[#0d1a24]/80 to-[#0d1a24]/45" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[620px] max-w-[var(--max-content-width)] items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
            HMCS Canada Expedition 2025
          </p>
          <h1 className="max-w-[12ch] text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
            Bringing to life Canada’s first purpose-built warship through deepwater exploration.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-slate-200 sm:text-lg">
            In commemoration of the 115th anniversary of the Royal Canadian Navy, the HMCS Canada Expedition seeks to highlight Canada’s first purpose-built warship through advanced marine archaeological and scientific research.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/about" variant="primary" className="h-12 px-6 text-[10px]">
              Learn More
            </Button>
            <Link
              href="/support"
              className="inline-flex h-12 items-center justify-center border border-white/30 px-6 text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--color-background)] transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-background)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-foreground)]"
            >
              Support Us
            </Link>
          </div>
        </div>

        <div className="ml-auto flex w-full max-w-sm flex-col gap-4 rounded-[var(--radius)] border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">Expedition overview</p>
          <ul className="space-y-4 text-sm leading-6 text-slate-200">
            <li>
              <span className="block text-[10px] uppercase tracking-[0.14em] text-slate-300">Focus</span>
              Deepwater archaeological research and public storytelling
            </li>
            <li>
              <span className="block text-[10px] uppercase tracking-[0.14em] text-slate-300">Scope</span>
              Marine archaeology, marine science, historical research, and diving operations
            </li>
            <li>
              <span className="block text-[10px] uppercase tracking-[0.14em] text-slate-300">Status</span>
              Expedition planning and fieldwork in 2025
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
