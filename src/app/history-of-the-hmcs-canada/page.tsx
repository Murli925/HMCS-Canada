import type { Metadata } from 'next'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'

export const metadata: Metadata = {
  title: 'HMCS Canada',
  description: 'History and legacy of HMCS Canada.',
}

export default function HistoryOfTheHmcsCanadaPage() {
  return (
    <>
      <PageHero
        eyebrow="HMCS Canada"
        title="The history of HMCS Canada"
        description="This section preserves the legacy and historical significance of HMCS Canada in the expedition story."
        image="/images/placeholder-introduction.svg"
        imageAlt="HMCS Canada history"
      />
      <main>
        <Container className="py-[var(--section-spacing)]">
          <p className="max-w-3xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
            This page is mapped to the legacy navigation path used by the original site. It is intentionally kept flexible so the historical content can be filled in with the confirmed narrative and approved copy later.
          </p>
        </Container>
      </main>
    </>
  )
}
