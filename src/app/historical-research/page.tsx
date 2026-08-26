import type { Metadata } from 'next'
import { researchPages } from '@/data/research'
import { ResearchPageTemplate } from '@/components/research/ResearchPageTemplate'

export const metadata: Metadata = {
  title: 'Historical Research & Documentation',
  description: 'Read about the historical research and documentation work supporting HMCS Canada.',
}

export default function HistoricalResearchPage() {
  const page = researchPages.find((item) => item.slug === 'historical-research')

  if (!page) {
    return null
  }

  return <ResearchPageTemplate page={page} />
}
