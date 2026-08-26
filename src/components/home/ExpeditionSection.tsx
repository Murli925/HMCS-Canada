import Image from 'next/image'
import { Button } from '@/components/common/Button'

export function ExpeditionSection() {
  return (
    <section className="py-[var(--section-spacing)]">
      <div className="mx-auto max-w-[var(--max-content-width)] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Bringing HMCS Canada Back to Life in 2025
            </p>
            <h2 className="max-w-[12ch] text-3xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-4xl lg:text-5xl">
              Bringing HMCS Canada Back to Life in 2025
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              Today, the wreck of HMCS Canada—later known as SS Queen of Nassau—rests 11 kilometres (7 miles) south of Lower Matecumbe Key, Florida, at a depth of 70 metres (235 feet). It lies protected within the U.S. National Oceanic and Atmospheric Administration’s (NOAA) Florida Keys National Marine Sanctuary.
            </p>
            <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              During December 1-4, 2025, a team of Canadian technical divers documented the site for the first time using cutting-edge 3D photogrammetry. Their work generated an ultra-detailed digital model of the shipwreck, revealing how Canada appears nearly a century after sinking.
            </p>
            <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              The model is shared through this website, allowing Canadians and the world to virtually explore this long-overlooked warship. It will enrich public understanding of her historical, archaeological, and ecological significance—bringing HMCS Canada to life in a way never before possible.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="secondary">Learn More</Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-soft)]">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/placeholder-expedition-story.svg"
                alt="Expedition storytelling and research imagery for HMCS Canada"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
