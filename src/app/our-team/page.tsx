import type { Metadata } from 'next'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { TeamGrid } from '@/components/team/TeamGrid'

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Our team and expedition collaborators.',
}

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Expedition leaders and collaborators"
        description="This legacy route preserves the original site’s team navigation while the new structured team architecture remains in place."
        image="/images/placeholder-introduction.svg"
        imageAlt="Our Team"
      />
      <main>
        <Container className="py-[var(--section-spacing)]">
          <TeamGrid />
        </Container>
      </main>
    </>
  )
}
