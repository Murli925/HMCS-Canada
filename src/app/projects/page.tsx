import type { Metadata } from 'next'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'HMCS Canada expedition projects and research focus areas.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Research and expedition projects"
        description="This legacy route holds the broader project portfolio and can be expanded into the final content structure."
        image="/images/placeholder-archaeology-card.svg"
        imageAlt="Projects"
      />
      <main>
        <Container className="py-[var(--section-spacing)]">
          <p className="max-w-3xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
            Current project sections map to the new research architecture and can be refined section-by-section as the content is finalized.
          </p>
        </Container>
      </main>
    </>
  )
}
