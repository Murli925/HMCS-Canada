'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { TeamMember } from '@/data/team'

type TeamCardProps = {
  member: TeamMember
}

const FALLBACK_IMAGE = '/team/image001.webp'

export function TeamCard({ member }: TeamCardProps) {
  const [imageSrc, setImageSrc] = useState(member.image || FALLBACK_IMAGE)

  return (
    <article className="overflow-hidden bg-[var(--color-background)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#dfe5ea]">
        <Image
          src={imageSrc}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          onError={() => setImageSrc(FALLBACK_IMAGE)}
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">{member.name}</h3>
        <p className="!text-[15px] mt-3 font-400 uppercase text-[var(--color-body)]">
          {member.credentials}
        </p>
      </div>
    </article>
  )
}
