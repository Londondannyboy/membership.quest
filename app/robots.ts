import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://membership.quest'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/profile/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
