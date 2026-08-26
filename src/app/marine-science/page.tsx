import type { Metadata } from 'next'
import { researchPages } from '@/data/research'
import { ResearchPageTemplate } from '@/components/research/ResearchPageTemplate'

export const metadata: Metadata = {
  title: 'Marine Science & Conservation',
  description: 'Explore the marine science and conservation work connected to HMCS Canada.',
}

export default function MarineSciencePage() {
  const page = researchPages.find((item) => item.slug === 'marine-science')

  if (!page) {
    return null
  }

  return <ResearchPageTemplate page={page} />
}
