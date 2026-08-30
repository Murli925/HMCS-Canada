import Image from 'next/image'
import type { ReactNode } from 'react'

type ImageTextProps = {
  image: string
  alt: string
  eyebrow?: ReactNode
  title?: ReactNode
  subtitle?: ReactNode
  description?: ReactNode
  reverse?: boolean
  actions?: ReactNode
  className?: string
}

export function ImageText({ image, alt, eyebrow, title, subtitle, description, reverse = false, actions, className = '' }: ImageTextProps) {
  const gridClasses = ['grid gap-[30px] sm:gap-[5%] lg:grid-cols-[57%_38%] lg:items-stretch', className].filter(Boolean).join(' ')

  return (
    <section className={gridClasses}>
      <div
        className={`${reverse ? 'lg:order-2' : ''} overflow-hidden`}
      >
        <div className="relative h-full min-h-[320px] w-full lg:min-h-full">
          <Image src={image} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" data-aos="slide-up"
          data-aos-duration="700"
          data-aos-easing="ease-out-cubic"
          data-aos-once="true" />
        </div>
      </div>

      <div className={`${reverse ? 'lg:order-1' : ''} flex flex-col justify-center`}>
        {eyebrow ? (
          <p className="mb-3 text-xs font-normal uppercase tracking-[0.18em] text-[var(--color-accent)]">
            {eyebrow}
          </p>
        ) : null}
        <h2
          className="text-4xl font-medium tracking-tight text-[var(--color-foreground)] sm:text-4xl"
          data-aos="slide-up"
          data-aos-duration="700"
          data-aos-easing="ease-out-cubic"
          data-aos-once="true"
        >
          {title}
        </h2>
        {subtitle ? (
          <h3
            className="mt-2 text-2xl font-normal tracking-tight text-[var(--color-foreground)] sm:text-3xl"
            data-aos="slide-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            data-aos-once="true"
          >
            {subtitle}
          </h3>
        ) : null}
        {description ? (
          <div className="mt-6 text-base leading-7 text-[var(--color-text)] sm:text-md">{description}</div>
        ) : null}
        {actions ? <div className="mt-10 flex flex-wrap gap-4">{actions}</div> : null}
      </div>
    </section>
  )
}
