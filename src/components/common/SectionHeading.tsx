import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow?: ReactNode | string
  title?: ReactNode | string
  description?: ReactNode | string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <header className={alignment}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="text-3xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-4xl lg:text-4xl"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        {title}
      </h2>
      {description ? (
        <div className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
          {description}
        </div>
      ) : null}
    </header>
  )
}
