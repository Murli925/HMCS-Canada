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
      <CTASection
        eyebrow="Support the work"
        title="Help bring HMCS Canada back to life"
        description="The expedition depends on public interest, support, and collaboration to sustain research, documentation, and outreach around this important shipwreck story."
        href="/support"
        linkLabel="Support the expedition"
      />
    </main>
  )
}
