import Link from 'next/link'
import { SectionHeading } from '@/components/common/SectionHeading'
import { TeamCard } from '@/components/team/TeamCard'
import { teamMembers } from '@/data/team'

export function TeamPreview() {
  const previewMembers = teamMembers.slice(0, 4)

  return (
    <section className="py-[var(--section-spacing)]">
      <div className="mx-auto max-w-[var(--max-content-width)] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Meet the Team"
            title="Expedition leaders and collaborators"
            description="A multidisciplinary group working across underwater research, historical study, and public engagement."
          />
          <Link
            href="/team"
            className="inline-flex items-center text-sm font-medium uppercase tracking-[0.1em] text-[var(--color-foreground)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-foreground)] focus-visible:ring-offset-2"
          >
            View all members
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {previewMembers.map((member) => (
            <TeamCard key={member.slug} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
