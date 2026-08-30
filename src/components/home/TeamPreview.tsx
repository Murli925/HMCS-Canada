import Link from 'next/link'
import { SectionHeading } from '@/components/common/SectionHeading'
import { TeamCard } from '@/components/team/TeamCard'
import { teamMembers } from '@/data/team'
import { Button } from '../common/Button'

export function TeamPreview() {
  const previewMembers = teamMembers.slice(0, 4)

  return (
    <section className="py-[var(--section-spacing)]">
      <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow=""
            title="Meet the Team"
            align="center"
            description=""
          />

        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {previewMembers.map((member) => (
            <TeamCard key={member.slug} member={member} />
          ))}
        </div>
        <div className="text-center mt-12">

          <Button href="/about" variant="secondary">View all members</Button>
          
          </div>
      </div>
    </section>
  )
}
