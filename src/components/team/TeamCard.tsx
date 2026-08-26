import Image from 'next/image'
import Link from 'next/link'
import type { TeamMember } from '@/data/team'

type TeamCardProps = {
  member: TeamMember
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="overflow-hidden border border-[var(--color-border)] bg-[var(--color-background)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#dfe5ea]">
        <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" />
      </div>
      <div className="p-5">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
          {member.credentials}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">{member.name}</h3>
        <p className="mt-1 text-sm uppercase tracking-[0.1em] text-[var(--color-muted)]">{member.role}</p>
        <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">{member.shortBio}</p>
        <Link
          href={`/team/${member.slug}`}
          className="mt-5 inline-flex text-sm font-medium uppercase tracking-[0.12em] text-[var(--color-foreground)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-foreground)] focus-visible:ring-offset-2"
        >
          View profile
        </Link>
      </div>
    </article>
  )
}
