import Image from 'next/image'

export function VideoSection() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-spacing)]">
      <div className="mx-auto max-w-[var(--max-content-width)] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Learn about the Expedition
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-4xl">
              Learn about the Expedition
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
              Listen to Joseph Frey, Expedition Lead, talk about the expedition.
            </p>
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-[var(--radius)] border border-[var(--color-border)] bg-[#dfe5ea] shadow-[var(--shadow-soft)]">
          <div className="relative aspect-video w-full">
            <Image
              src="/images/placeholder-video-thumbnail.svg"
              alt="Video preview thumbnail for HMCS Canada expedition"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <button
              type="button"
              aria-label="Play expedition video"
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-[var(--color-foreground)]/80 text-[var(--color-background)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-background)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-foreground)]"
            >
              <span className="ml-1 block h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-current" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
