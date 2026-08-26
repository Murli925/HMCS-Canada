import Image from 'next/image'

type GalleryItem = {
  src: string
  alt: string
  caption?: string
}

type GalleryProps = {
  items: GalleryItem[]
}

export function Gallery({ items }: GalleryProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <figure key={item.src} className="group overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="relative aspect-[5/4] overflow-hidden">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          {item.caption ? (
            <figcaption className="border-t border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-muted)]">
              {item.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  )
}
