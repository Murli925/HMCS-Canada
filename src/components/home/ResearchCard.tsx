import Image from 'next/image'
import Link from 'next/link'

type ResearchCardProps = {
  title: string
  description: string
  href: string
  image: string
  label?: string
}

export function ResearchCard({ title, description, href, image, label }: ResearchCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[var(--color-border)] bg-[var(--color-background)] transition-transform duration-200 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#dfe5ea]">
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {label ? (
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
            {label}
          </p>
        ) : null}
        <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[var(--color-muted)]">{description}</p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.12em] text-[var(--color-foreground)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-foreground)] focus-visible:ring-offset-2"
        >
          Read More
        </Link>
      </div>
    </article>
  )
}
