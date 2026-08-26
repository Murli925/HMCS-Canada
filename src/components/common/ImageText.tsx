import Image from 'next/image'
import type { ReactNode } from 'react'

type ImageTextProps = {
  image: string
  alt: string
  eyebrow?: string
  title: string
  description: string
  reverse?: boolean
  actions?: ReactNode
}

export function ImageText({ image, alt, eyebrow, title, description, reverse = false, actions }: ImageTextProps) {
  return (
    <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div className={`${reverse ? 'lg:order-2' : ''} overflow-hidden rounded-[var(--radius)] border border-[var(--color-border)] bg-[#dfe5ea]`}>
        <div className="relative aspect-[4/3] w-full">
          <Image src={image} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </div>

      <div className={`${reverse ? 'lg:order-1' : ''}`}>
        {eyebrow ? (
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="text-3xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-4xl">{title}</h3>
        <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">{description}</p>
        {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
      </div>
    </section>
  )
}
