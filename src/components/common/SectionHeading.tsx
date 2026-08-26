type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
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
      <h2 className="max-w-[18ch] text-3xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  )
}
