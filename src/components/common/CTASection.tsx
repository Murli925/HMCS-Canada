import Link from 'next/link'

type CTASectionProps = {
  eyebrow?: string
  title: string
  description?: string
  href: string
  linkLabel: string
}

export function CTASection({ title, href, linkLabel }: CTASectionProps) {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-blue)] text-[var(--color-background)] p-[var(--section-padding)]">
      <div className="mx-auto text-center max-w-[var(--max-content-width)] flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-16">
        <div>
          <h2
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-easing="ease-out-cubic"
            data-aos-once="true"
          >
            {title}
          </h2>
        
          <Link
          href={href}
          className="inline-flex items-center mt-6 justify-center border border-[var(--color-accent-soft)] px-8 py-5 text-sm font-medium uppercase tracking-[0.12em] text-[var(--color-background)] transition-colors hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-background)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-foreground)] "
        >
          {linkLabel}
        </Link>
        </div>


      </div>
    </section>
  )
}
