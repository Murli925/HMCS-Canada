export type ResearchPage = {
  slug: string
  title: string
  eyebrow?: string
  description: string
  heroImage: string
  sections: {
    title: string
    text: string
    image?: string
    imagePosition?: 'left' | 'right'
  }[]
}

export const researchPages: ResearchPage[] = [
  {
    slug: 'marine-archaeology',
    title: 'Marine Archaeology',
    eyebrow: 'Research Area',
    description:
      'Tracing the shipwreck, its material remains, and the lived history carried by the site.',
    heroImage: '/images/placeholder-hero.svg',
    sections: [
      {
        title: 'Documenting the wreck site',
        text:
          'The HMCS Canada expedition brings together archaeological methods, documentation, and interpretation to record the shipwreck as a historical site.',
        image: '/images/placeholder-archaeology-card.svg',
        imagePosition: 'left',
      },
      {
        title: 'Understanding context',
        text:
          'Interpretation depends on the seabed, surrounding materials, and the ship’s relationship to the wider maritime landscape and the events that shaped it.',
        image: '/images/placeholder-introduction.svg',
        imagePosition: 'right',
      },
    ],
  },
  {
    slug: 'marine-science',
    title: 'Marine Science & Conservation',
    eyebrow: 'Research Area',
    description:
      'Assessing the marine environment around the wreck and helping guide responsible stewardship of the site.',
    heroImage: '/images/placeholder-science-card.svg',
    sections: [
      {
        title: 'Monitoring the environment',
        text:
          'The project considers the ecological conditions surrounding HMCS Canada, including water quality, biodiversity, and the dynamic conditions of the site.',
        image: '/images/placeholder-science-card.svg',
        imagePosition: 'left',
      },
      {
        title: 'Conservation priorities',
        text:
          'Data collection and careful site documentation support conservation-minded decision-making and help protect this heritage resource for future generations.',
        image: '/images/placeholder-video-thumbnail.svg',
        imagePosition: 'right',
      },
    ],
  },
  {
    slug: 'historical-research',
    title: 'Historical Research & Documentation',
    eyebrow: 'Research Area',
    description:
      'Connecting archival work, engineering evidence, and storytelling to reconstruct the ship’s significance.',
    heroImage: '/images/placeholder-history-card.svg',
    sections: [
      {
        title: 'Recovering the ship’s story',
        text:
          'Historical research grounds the expedition in what is known about HMCS Canada, its service, and the people and events associated with it.',
        image: '/images/placeholder-history-card.svg',
        imagePosition: 'left',
      },
      {
        title: 'Building a historical record',
        text:
          'The expedition works to document, compare, and contextualize evidence in ways that support an accurate and accessible historical narrative.',
        image: '/images/placeholder-expedition-story.svg',
        imagePosition: 'right',
      },
    ],
  },
  {
    slug: 'expedition-diving',
    title: 'Expedition & Diving',
    eyebrow: 'Research Area',
    description:
      'Bringing the project to life through deepwater exploration, fieldwork, and documentation in demanding conditions.',
    heroImage: '/images/placeholder-diving-card.svg',
    sections: [
      {
        title: 'Planning the expedition',
        text:
          'The expedition combines technical planning, underwater fieldwork, and interdisciplinary collaboration to gather reliable evidence from the site.',
        image: '/images/placeholder-diving-card.svg',
        imagePosition: 'left',
      },
      {
        title: 'Field documentation',
        text:
          'Careful documentation and direct observation help translate complex deepwater conditions into a clear record for research, interpretation, and public understanding.',
        image: '/images/placeholder-video-thumbnail.svg',
        imagePosition: 'right',
      },
    ],
  },
]
