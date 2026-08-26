import Image from 'next/image'
import type { ReactNode } from 'react'

type PageHeroProps = {
  title: string
  description: string
  image: string
  imageAlt: string
  eyebrow?: string
  actions?: ReactNode
}

export function PageHero({ title, description, image, imageAlt, eyebrow, actions }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(183,133,60,0.18),transparent_50%)]" aria-hidden="true" />
		<div className="relative mx-auto grid max-w-[var(--max-content-width)] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
        <div className="flex flex-col justify-center">
          {eyebrow ? (
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-[12ch] text-4xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">{description}</p>
          {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
        </div>

        <div className="relative min-h-[280px] overflow-hidden rounded-[var(--radius)] border border-[var(--color-border)] bg-[#dfe5ea] shadow-[var(--shadow-soft)]">
          <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </div>
    </section>
  )
}
