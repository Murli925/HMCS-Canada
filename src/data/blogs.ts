export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  image: string
  content: string
}

export const posts: BlogPost[] = [
  {
    slug: 'kensington-tours-named-lead-sponsor-of-the-hmcs-canada-expedition-2025',
    title: 'Kensington Named Lead Sponsor of the HMCS Canada Expedition',
    date: '2025-10-01',
    excerpt:
      'Kensington has been announced as the lead sponsor for the HMCS Canada Expedition, supporting our work to document and preserve this historic vessel.',
    image: '/images/thumbnail.jpeg',
    content: `<p>Kensington has generously agreed to be the lead sponsor for the HMCS Canada Expedition 2025. Their support will help fund fieldwork, photogrammetry, and public outreach activities.</p><p>The partnership demonstrates an exciting example of private-sector support for maritime heritage research.</p>`,
  },
  {
    slug: 'honouring-the-royal-canadian-navys-legacy-at-70-metres',
    title: "Honouring the Royal Canadian Navy's Legacy at 70 Metres",
    date: '2025-09-22',
    excerpt:
      'An update on our work documenting HMCS Canada in deep water and the technical diving approaches used to record the wreck.',
    image: '/images/image-2-vertical.jpg',
    content: `<p>We are documenting HMCS Canada using high-resolution photogrammetry. This post describes the dive and imaging techniques used at depth.</p>`,
  },
  {
    slug: 'making-a-dpv-mounted-photogrammetry-sled',
    title: 'Crawl, walk, run; the making of a DPV mounted photogrammetry sled',
    date: '2025-09-22',
    excerpt:
      'How we developed a Diver Propulsion Vehicle mounted sled to capture stable, repeatable imagery for 3D models.',
    image: '/images/Photogrammetry-Sled-DPV-2.webp',
    content: `<p>This post walks through prototyping and testing of a DPV-mounted photogrammetry sled used during survey operations.</p>`,
  },
]

export function findPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug) || null
}
