import type { Metadata } from 'next'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'

export const metadata: Metadata = {
  title: 'Partners',
  description: 'Partners and supporters of the HMCS Canada expedition.',
}

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Supporting the expedition"
        description="This legacy page mirrors the original navigation and remains ready for final partner content and approved relationships."
        image="/images/placeholder-expedition-story.svg"
        imageAlt="Partners"
      />
      <main>
        <Container className="py-[var(--section-spacing)]">
          <p className="max-w-3xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
            Partner content, institutional relationships, and supporting organizations can be added here once the final list is confirmed.
          </p>
        </Container>
      </main>
    </>
  )
}
