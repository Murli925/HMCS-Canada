import { CTASection } from '@/components/common/CTASection'
import { ExpeditionSection } from '@/components/home/ExpeditionSection'
import { Hero } from '@/components/home/Hero'
import { Introduction } from '@/components/home/Introduction'
import { ResearchAreas } from '@/components/home/ResearchAreas'
import { TeamPreview } from '@/components/home/TeamPreview'
import { VideoSection } from '@/components/home/VideoSection'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Introduction />
      <ResearchAreas />
      <ExpeditionSection />
      <VideoSection />
      <TeamPreview />
    </main>
  )
}
