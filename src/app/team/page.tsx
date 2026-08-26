import type { Metadata } from 'next'
import { CTASection } from '@/components/common/CTASection'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { TeamGrid } from '@/components/team/TeamGrid'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the multidisciplinary team behind the HMCS Canada expedition.',
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="The team"
        title="People behind the expedition"
        description="The project brings together research, conservation, marine operations, and historical interpretation across a multidisciplinary team."
        image="/images/placeholder-introduction.svg"
        imageAlt="HMCS Canada team and expedition members"
      />
      <main>
        <Container className="py-[var(--section-spacing)]">
          <TeamGrid />
        </Container>
      </main>
      <CTASection
        eyebrow="Work with us"
        title="Support the expedition’s research and outreach"
        description="This work depends on thoughtful collaboration, reliable research, and a sustained public interest in maritime heritage."
        href="/support"
        linkLabel="Support the work"
      />
    </>
  )
}
