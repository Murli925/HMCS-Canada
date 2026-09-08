'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type GalleryItem = {
  src: string
  alt: string
  caption?: string
  description?: string
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
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const galleryItems: GalleryItem[] = items ?? (images ?? []).map((src, index) => ({
    src,
    alt: `Gallery image ${index + 1}`,
  }))

  useEffect(() => {
    if (!selectedItem) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedItem(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedItem])

  return (
    <>
      <div className={`grid gap-5 ${columnClasses[columns]} ${className}`.trim()}>
        {galleryItems.map((item) => (
          <figure key={item.src} className="group">
            <button
              type="button"
              onClick={() => setSelectedItem(item)}
              className="block w-full cursor-pointer text-left"
              aria-label={`Open image: ${item.alt}`}
            >
              <div className="relative overflow-hidden bg-[var(--color-background-alt)]" style={{ aspectRatio }}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-black/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {item.caption ? (
                  <div className="absolute inset-0 flex items-center justify-center p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <figcaption className="max-w-[90%] text-center text-xs leading-5 text-white md:text-sm">
                      {item.caption}
                    </figcaption>
                  </div>
                ) : null}
              </div>
            </button>

            {item.description ? (
              <p className="mt-3 text-sm leading-6 text-[var(--color-text)] sm:text-base">
                {item.description}
              </p>
            ) : null}
          </figure>
        ))}
      </div>

      {selectedItem ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-8"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.alt}
        >
          <div
            className="w-full max-w-[1200px] overflow-hidden rounded-none bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative max-h-[80vh] w-full overflow-hidden bg-black">
              <div className="relative mx-auto h-auto max-h-[80vh] w-full max-w-[1200px]">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  width={1200}
                  height={1000}
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="h-auto w-full max-w-[1200px] object-cover"
                />
              </div>
            </div>

            {(selectedItem.caption || selectedItem.description) ? (
              <div className="border-t border-[var(--color-border)] px-5 py-4 text-base text-[var(--color-text)] sm:px-6">
                {selectedItem.caption ? <p className="mb-2">{selectedItem.caption}</p> : null}
                {selectedItem.description ? <p>{selectedItem.description}</p> : null}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  )
}
