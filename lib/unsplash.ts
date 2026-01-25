// Unsplash utilities and context-based query mapping

export interface UnsplashImage {
  id: string
  url: string
  urlFull: string
  urlSmall: string
  alt: string
  photographer: string
  photographerUrl: string
  blurHash: string | null
  width: number
  height: number
}

export interface UnsplashResponse {
  images: UnsplashImage[]
  total: number
}

// Context-based query mapping for luxury imagery
export const imageQueries = {
  // Homepage sections
  hero: 'luxury private members club london interior elegant',
  intro: 'luxury business lounge london modern',
  services: 'professional consultation luxury office',
  stats: 'luxury hotel lobby chandelier elegant',
  testimonial: 'luxury restaurant private dining london',
  cta: 'luxury conference room meeting',

  // Industries
  'private-members-clubs': 'exclusive private members club london interior',
  'luxury-fitness-clubs': 'luxury gym spa wellness premium fitness',
  'professional-bodies': 'luxury conference venue london professional',
  'trade-associations': 'business networking event upmarket venue',
  'membership-charities': 'charity gala event elegant venue',
  'country-estates': 'english country estate manor house luxury',

  // Services
  'member-acquisition': 'luxury networking event business professionals',
  'member-retention': 'luxury lounge members relaxing',
  'member-engagement': 'luxury event gathering elegant',
  'membership-strategy': 'luxury boardroom strategy meeting',
  'content-marketing': 'luxury lifestyle magazine editorial',

  // Other pages
  'case-studies': 'luxury success celebration champagne',
  contact: 'luxury reception concierge service',
} as const

export type ImageContext = keyof typeof imageQueries

// Fetch images from our API route
export async function fetchUnsplashImages(
  context: ImageContext | string,
  count: number = 1,
  orientation: 'landscape' | 'portrait' | 'squarish' = 'landscape'
): Promise<UnsplashImage[]> {
  const query = imageQueries[context as ImageContext] || context

  try {
    const response = await fetch(
      `/api/unsplash?query=${encodeURIComponent(query)}&count=${count}&orientation=${orientation}`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch images')
    }

    const data: UnsplashResponse = await response.json()
    return data.images
  } catch (error) {
    console.error('Error fetching Unsplash images:', error)
    return []
  }
}

// Server-side fetch for static generation
export async function fetchUnsplashImagesServer(
  context: ImageContext | string,
  count: number = 1,
  orientation: 'landscape' | 'portrait' | 'squarish' = 'landscape'
): Promise<UnsplashImage[]> {
  const query = imageQueries[context as ImageContext] || context
  const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY

  if (!UNSPLASH_ACCESS_KEY) {
    console.error('Unsplash API key not configured')
    return []
  }

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&orientation=${orientation}`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
        next: {
          revalidate: 3600, // Cache for 1 hour
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`)
    }

    const data = await response.json()

    return data.results.map((photo: {
      id: string
      urls: { regular: string; full: string; small: string }
      alt_description: string | null
      description: string | null
      user: { name: string; links: { html: string } }
      blur_hash: string | null
      width: number
      height: number
    }) => ({
      id: photo.id,
      url: photo.urls.regular,
      urlFull: photo.urls.full,
      urlSmall: photo.urls.small,
      alt: photo.alt_description || photo.description || query,
      photographer: photo.user.name,
      photographerUrl: photo.user.links.html,
      blurHash: photo.blur_hash,
      width: photo.width,
      height: photo.height,
    }))
  } catch (error) {
    console.error('Error fetching Unsplash images:', error)
    return []
  }
}

// Fallback images for when API fails or rate limited
export const fallbackImages: Record<ImageContext, string> = {
  hero: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80',
  intro: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
  services: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
  stats: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=1920&q=80',
  testimonial: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
  cta: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
  'private-members-clubs': 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
  'luxury-fitness-clubs': 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&q=80',
  'professional-bodies': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
  'trade-associations': 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80',
  'membership-charities': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
  'country-estates': 'https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=1200&q=80',
  'member-acquisition': 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80',
  'member-retention': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
  'member-engagement': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
  'membership-strategy': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
  'content-marketing': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
  'case-studies': 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&q=80',
  contact: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
}
