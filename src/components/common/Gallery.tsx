import Image from 'next/image'

type GalleryItem = {
  src: string
  alt: string
  caption?: string
}

type GalleryProps = {
  items?: GalleryItem[]
  images?: string[]
  columns?: 1 | 2 | 3 | 4
  aspectRatio?: string
  className?: string
}

const columnClasses: Record<NonNullable<GalleryProps['columns']>, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4',
}

export function Gallery({ items, images, columns = 3, aspectRatio = '5/4', className = '' }: GalleryProps) {
  const galleryItems: GalleryItem[] = items ?? (images ?? []).map((src, index) => ({
    src,
    alt: `Gallery image ${index + 1}`,
  }))

  return (
    <div className={`grid gap-4 ${columnClasses[columns]} ${className}`.trim()}>
      {galleryItems.map((item) => (
        <figure key={item.src} className="group">
          <div className="relative overflow-hidden" style={{ aspectRatio }}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
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
