import { CTASection } from '@/components/common/CTASection'
import type { Metadata } from "next";
import { ExpeditionSection } from '@/components/home/ExpeditionSection'
import { Hero } from '@/components/home/Hero'
import { Introduction } from '@/components/home/Introduction'
import { ResearchAreas } from '@/components/home/ResearchAreas'
import { TeamPreview } from '@/components/home/TeamPreview'
import { VideoSection } from '@/components/home/VideoSection'

export const metadata: Metadata = {
  title: "HMCS Canada Expedition 2025 ",
  description: "Join the HMCS Canada Expedition 2025 to discover marine archaeology and historical preservation efforts of Canada's first warship. ",
};


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
