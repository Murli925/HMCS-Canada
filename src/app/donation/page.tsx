import type { Metadata } from 'next'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'

export const metadata: Metadata = {
  title: 'Support Us',
  description: 'Support the HMCS Canada expedition and research work.',
}

export default function DonationPage() {
  return (
    <>
      <PageHero
        eyebrow="Support Us"
        title="Support the expedition"
        description="This legacy support page preserves the original donation link while the final giving flow and support details are confirmed."
        image="/images/placeholder-expedition-story.svg"
        imageAlt="Support the expedition"
      />
      <main>
        <Container className="py-[var(--section-spacing)]">
          <p className="max-w-3xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
            Donation details, campaign information, and support channels can be added here once the final project partner or giving platform is confirmed.
          </p>
        </Container>
      </main>
    </>
  )
}
