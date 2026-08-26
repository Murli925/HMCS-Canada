import type { Metadata } from 'next'
import { CTASection } from '@/components/common/CTASection'
import { Container } from '@/components/common/Container'
import { ImageText } from '@/components/common/ImageText'
import { PageHero } from '@/components/common/PageHero'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about the HMCS Canada expedition, its purpose, and its heritage-focused mission.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the project"
        title="Honoring the legacy of HMCS Canada"
        description="The expedition brings together research, fieldwork, and public learning to tell the story of Canada’s first purpose-built warship."
        image="/images/placeholder-introduction.svg"
        imageAlt="About HMCS Canada expedition imagery"
      />
      <main>
        <Container className="py-[var(--section-spacing)]">
          <ImageText
            image="/images/placeholder-introduction.svg"
            alt="Detail of HMCS Canada expedition work"
            title="A heritage story told through evidence"
            description="The project brings together interdisciplinary methods to better understand the ship, its context, and the wider maritime heritage story it represents. Each area of study contributes to a more informed public understanding of HMCS Canada and its legacy."
            actions={null}
          />
        </Container>
      </main>
      <CTASection
        eyebrow="Take part"
        title="Stay involved with the expedition"
        description="The project grows through collaboration, interest, and ongoing support from the public, researchers, and partners."
        href="/support"
        linkLabel="Support the expedition"
      />
    </>
  )
}
