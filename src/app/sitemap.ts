import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/history-of-the-hmcs-canada',
    '/our-team',
    '/partners',
    '/projects',
    '/blogs',
    '/contact',
    '/donation',
    '/marine-archaeology',
    '/marine-science',
    '/historical-research',
    '/expedition-diving',
    '/team',
    '/support',
  ]

  return routes.map((route) => ({
    url: `https://www.hmcscanadaexpedition.org${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }))
}
