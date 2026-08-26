import { SectionHeading } from '@/components/common/SectionHeading'
import { ResearchCard } from '@/components/home/ResearchCard'

const researchItems = [
  {
    title: 'Marine Archaeology',
    description: 'High-resolution 3D documentation, structural analysis, and artifact research for shipwreck preservation, archaeological exploration, and heritage conservation.',
    href: '/marine-archaeology',
    image: '/images/placeholder-archaeology-card.svg',
    label: 'Research area',
  },
  {
    title: 'Marine Science & Conservation',
    description: 'Ecological assessments, invasive species monitoring, and conservation data collection for marine protection.',
    href: '/marine-science',
    image: '/images/placeholder-science-card.svg',
    label: 'Research area',
  },
  {
    title: 'Historical Research & Documentation',
    description: 'We conduct archival research, ship evolution studies, and wreck identification to preserve naval heritage and history.',
    href: '/historical-research',
    image: '/images/placeholder-history-card.svg',
    label: 'Research area',
  },
  {
    title: 'Expedition & Diving',
    description: 'Technical diving, underwater imaging, and photogrammetry training for responsible shipwreck exploration and archaeological documentation.',
    href: '/expedition-diving',
    image: '/images/placeholder-diving-card.svg',
    label: 'Research area',
  },
]

export function ResearchAreas() {
  return (
    <section className="py-[var(--section-spacing)]">
      <div className="mx-auto max-w-[var(--max-content-width)] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Research Focus"
          title="Four areas of inquiry"
          description="The expedition approaches HMCS Canada through a disciplined research framework spanning the wreck site, the marine environment, archival history, and field operations."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {researchItems.map((item) => (
            <ResearchCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
