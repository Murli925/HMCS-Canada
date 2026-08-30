import Image from 'next/image'

export function VideoSection() {
  return (
    <section className="py-[var(--section-spacing)] bg-[var(--color-accent-soft)]">
      <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-center">
          <div className="text-center">
            <h2
              className="text-center text-3xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-4xl"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-out-cubic"
              data-aos-once="true"
            >
              Learn about the Expedition
            </h2>
            <p className="mt-3 max-w-2xl text-base !text-[20px] leading-7 text-[var(--color-blue)]">
              Listen to Joseph Frey, Expedition Lead, talk about the expedition.
            </p>
          </div>
        </div>

<div className="relative mt-8 overflow-hidden rounded-[var(--radius)] border border-[var(--color-border)] bg-[#dfe5ea] shadow-[var(--shadow-soft)]">
  <div className="relative aspect-video w-full overflow-hidden">
    <video
      src="/videos/Listen to Joseph Frey, Expedition Lead, talk about the expedition.mp4"
      poster="/images/poster-home-video.jpg"
      controls
      preload="metadata"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</div>
      </div>
    </section>
  )
}
