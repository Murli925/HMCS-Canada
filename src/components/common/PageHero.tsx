import Image from 'next/image'
import type { ReactNode } from 'react'

type PageHeroProps = {
  title: string
  description?: string
  image: string
  imageAlt: string
  eyebrow?: string
  actions?: ReactNode
}

export function PageHero({ title, description, image, imageAlt, eyebrow, actions }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[var(--color-border)] bg-[#b9b1a7]  mt-[-120px]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover grayscale-[0.8] contrast-[0.9] brightness-[0.72]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,16,16,0.18),rgba(16,16,16,0.2)_18%,rgba(16,16,16,0.52))]" />
      </div>

      <div className="relative mx-auto flex lg:min-h-[110vh] min-h-[70vh] max-w-[var(--max-content-width)] items-end px-4 pb-10 pt-20 sm:px-6 lg:px-8 lg:pb-14">
        <div className="max-w-[58rem]">
          {eyebrow ? (
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.26em] text-white/80">
              {eyebrow}
            </p>
          ) : null}

          <h1 className="font-[var(--font-display)] text-white text-left text-[clamp(2.5rem,7vw,2.5rem)] leading-[0.85] tracking-[-0.04em] text-[#f3f0eb] text-shadow-[1px_1px_5px_rgba(0,0,0,.58)] italic sm:text-[clamp(2.5rem,7vw,2.5rem)] lg:text-[clamp(3.5rem,7vw,4rem)]">
            {title}
          </h1>

          {description ? (
            <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">{description}</p>
          ) : null}

          {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
        </div>
      </div>
    </section>
  )
}
