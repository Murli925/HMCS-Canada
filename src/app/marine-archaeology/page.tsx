import type { Metadata } from 'next'
import { researchPages } from '@/data/research'
import { ResearchPageTemplate } from '@/components/research/ResearchPageTemplate'

export const metadata: Metadata = {
  title: 'Marine Archaeology',
  description: 'Learn about the marine archaeology research behind the HMCS Canada expedition.',
}

export default function MarineArchaeologyPage() {
  const page = researchPages.find((item) => item.slug === 'marine-archaeology')

  if (!page) {
    return null
  }

  return <ResearchPageTemplate page={page} />
}
