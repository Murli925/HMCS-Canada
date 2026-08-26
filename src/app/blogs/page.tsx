import type { Metadata } from 'next'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Latest updates and expedition stories from HMCS Canada.',
}

export default function BlogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Blogs"
        title="Expedition updates and stories"
        description="This legacy route keeps the original navigation structure while the final blog content and publishing workflow are prepared."
        image="/images/placeholder-video-thumbnail.svg"
        imageAlt="Blogs"
      />
      <main>
        <Container className="py-[var(--section-spacing)]">
          <p className="max-w-3xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
            Blog entries can be added here as the final editorial and publishing structure is defined.
          </p>
        </Container>
      </main>
    </>
  )
}
