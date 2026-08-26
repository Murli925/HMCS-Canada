import type { Metadata } from 'next'
import { researchPages } from '@/data/research'
import { ResearchPageTemplate } from '@/components/research/ResearchPageTemplate'

export const metadata: Metadata = {
  title: 'Expedition & Diving',
  description: 'Explore the expedition and diving work supporting the HMCS Canada mission.',
}

export default function ExpeditionDivingPage() {
  const page = researchPages.find((item) => item.slug === 'expedition-diving')

  if (!page) {
    return null
  }

  return <ResearchPageTemplate page={page} />
}
