export type TeamMember = {
  name: string
  credentials: string
  role: string
  image: string
  shortBio: string
  slug: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Joseph Frey',
    credentials: 'CD, FRCGS, FI’02',
    role: 'Expedition Lead',
    image: '/team/placeholder-joseph-frey.svg',
    shortBio:
      'Expedition lead and research collaborator contributing to the project’s field leadership and archaeological direction.',
    slug: 'joseph-frey',
  },
  {
    name: 'Guy Shockey',
    credentials: 'MA, BA, FRCGS',
    role: 'Field Operations',
    image: '/team/placeholder-guy-shockey.svg',
    shortBio:
      'Supporting expedition work across field operations, research planning, and mission coordination.',
    slug: 'guy-shockey',
  },
  {
    name: 'Roger Lacasse',
    credentials: 'Ph.D., M.Sc., PMP',
    role: 'Historical Research',
    image: '/team/placeholder-roger-lacasse.svg',
    shortBio:
      'Contributing historical research, documentary work, and project planning across the expedition.',
    slug: 'roger-lacasse',
  },
  {
    name: 'Ewan Anderson',
    credentials: 'RPCA',
    role: 'Marine Science',
    image: '/team/placeholder-ewan-anderson.svg',
    shortBio:
      'Supporting marine science and expedition interpretation through technical field and scientific collaboration.',
    slug: 'ewan-anderson',
  },
]
