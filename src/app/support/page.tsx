import type { Metadata } from 'next'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'

export const metadata: Metadata = {
  title: 'Support',
  description: 'Learn how to support the HMCS Canada expedition and its research efforts.',
}

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Help preserve and share the story of HMCS Canada"
        description="Support helps sustain research, fieldwork, public education, and careful documentation around the ship and its historical significance."
        image="/images/placeholder-expedition-story.svg"
        imageAlt="Support the HMCS Canada expedition"
      />
      <main>
        <Container className="py-[var(--section-spacing)]">
          <div className="max-w-3xl space-y-6">
            <p className="text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              The project is built around careful stewardship of a significant maritime heritage site, combined with public research and education.
            </p>
            <p className="text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              Support may include public engagement, research collaboration, and assistance with expedition-related initiatives. Detailed donation or partnership information will be added as the project develops.
            </p>
            <div className="pt-4">
              <Button href="/contact" variant="primary">Contact the project</Button>
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}
