'use client'

import { useEffect, useRef } from 'react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ResearchCard } from '@/components/home/ResearchCard'

const researchItems = [
  {
    title: 'Marine Archaeology',
    description: 'High-resolution 3D documentation, structural analysis, and artifact research for shipwreck preservation, archaeological exploration, and heritage conservation.',
    imageAlt: 'Underwater scene with an old, partially buried barrel encrusted with marine life and surrounded by small fish.',
    href: '/marine-archaeology',
    image: '/images/QONmast-light-UW-2.JPG',
    label: '',
  },
  {
    title: 'Marine Science & Conservation',
    description: 'Ecological assessments, invasive species monitoring, and conservation data collection for marine protection.',
    imageAlt: 'Underwater scene with a shipwreck surrounded by fish and illuminated by a diver\'s flashlight.',
    href: '/marine-science',
    image: '/images/shooting-fish-on-shipwrek.jpg',
    label: '',
  },
  {
    title: 'Historical Research & Documentation',
    description: 'We conduct archival research, ship evolution studies, and wreck identification to preserve naval heritage and history.',
    imageAlt: 'A file copy image of a historical ship.',
    href: '/historical-research',
    image: '/images/screenshot-1742409057303.png.webp',
    label: '',
  },
  {
    title: 'Expedition & Diving',
    description: 'Technical diving, underwater imaging, and photogrammetry training for responsible shipwreck exploration and archaeological documentation.',
    href: '/expedition-diving',
    imageAlt: 'Joseph Frey, a diver, in full diving gear',
    image: '/images/Joseph+Frey.jpeg',
    label: '',
  },
]

export function ResearchAreas() {
  const trackRef = useRef<HTMLDivElement | null>(null)

  const scrollCards = (direction: number) => {
    const track = trackRef.current

    if (!track) {
      return
    }

    const firstCard = track.querySelector<HTMLElement>('[data-research-card]')
    const gap = 24
    const scrollAmount = firstCard ? firstCard.offsetWidth + gap : track.clientWidth / 3

    track.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const track = trackRef.current

    if (!track) {
      return
    }

    const firstCard = track.querySelector<HTMLElement>('[data-research-card]')

    if (!firstCard) {
      return
    }

    const scrollAmount = firstCard.offsetWidth + 24
    const maxScroll = track.scrollWidth - track.clientWidth

    const intervalId = window.setInterval(() => {
      const nextLeft = track.scrollLeft >= maxScroll - 1 ? 0 : track.scrollLeft + scrollAmount

      track.scrollTo({
        left: nextLeft,
        behavior: 'smooth',
      })
    }, 5000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  return (
    <section className="py-[var(--section-spacing)] bg-[var(--color-accent-soft)]">
      <div className="mx-auto px-6 sm:px-6 lg:px-16">
        <SectionHeading
          eyebrow=""
          title="Comprehensive Maritime Exploration"
          description=""
          align="center"
        />

        <div className="mt-10">
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [scroll-snap-type:x_mandatory] [&::-webkit-scrollbar]:hidden"
          >
            {researchItems.map((item) => (
              <div
                key={item.title}
                data-research-card
                className="flex-shrink-0 w-[calc(100%)] sm:w-[calc(50%-24px)] lg:w-[calc(33.333%-18px)] [scroll-snap-align:start]"
              >
                <ResearchCard {...item} className="h-full" />
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollCards(-1)}
              aria-label="Previous research items"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)] text-xl text-[var(--color-foreground)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollCards(1)}
              aria-label="Next research items"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)] text-xl text-[var(--color-foreground)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
