import Image from 'next/image'
import Link from 'next/link'

type ResearchCardProps = {
  title: string
  description: string
  href: string
  image: string
  label?: string
  className?: string
}

export function ResearchCard({
  title,
  description,
  href,
  image,
  label,
  className,
}: ResearchCardProps) {
  return (
    <article
      className={[
        'group flex h-full flex-col',
        'bg-[var(--color-background)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* Image */}
      <div className="relative overflow-hidden border-[20px] border-[var(--color-white)] bg-[#dfe5ea]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col items-center px-5 pb-7 pt-6 text-center sm:px-6">
        {label && (
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
            {label}
          </p>
        )}

        <h3 className="font-[var(--font-display)] text-2xl leading-tight tracking-[-0.01em] text-[var(--color-foreground)]">
          {title}
        </h3>

        <p className="mt-4 max-w-md text-sm leading-6 text-[var(--color-muted)]">
          {description}
        </p>

        <div className="mt-6">
          <Link
            href={href}
            className="
              inline-flex
              items-center
              justify-center
              bg-[var(--color-blue)]
              px-6
              py-3
              !text-[14px]
              font-400
              uppercase
              text-white
              transition-colors
              duration-200
              hover:bg-[var(--color-dark)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[var(--color-blue)]
              focus-visible:ring-offset-2
            "
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  )
}