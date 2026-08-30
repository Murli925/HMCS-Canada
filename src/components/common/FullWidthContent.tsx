import type { ReactNode } from 'react'

type FullWidthContentProps = {
  title: ReactNode
  description: ReactNode
  className?: string
}

export function FullWidthContent({ title, description, className = '' }: FullWidthContentProps) {
  return (

      <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-4xl font-medium tracking-tight text-[var(--color-foreground)] sm:text-4xl" data-aos="fade-up"
      data-aos-duration="700"
      data-aos-easing="ease-out-cubic"
      data-aos-once="true">
          {title}
        </h2>

        <div className="max-w-[100%] text-[clamp(1.15rem,1.5vw,1.7rem)] leading-[1.7] text-[var(--color-foreground)] [&_p]:mb-6 [&_p:last-child]:mb-0 [&_strong]:font-semibold [&_em]:italic">
          {description}
        </div>
      </div>

  )
}
