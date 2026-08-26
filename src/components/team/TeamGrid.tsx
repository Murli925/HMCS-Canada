import { TeamCard } from '@/components/team/TeamCard'
import { teamMembers } from '@/data/team'

export function TeamGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {teamMembers.map((member) => (
        <TeamCard key={member.slug} member={member} />
      ))}
    </div>
  )
}
