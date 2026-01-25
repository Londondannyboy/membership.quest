import { NextRequest, NextResponse } from 'next/server'

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY

interface UnsplashPhoto {
  id: string
  urls: {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
  }
  alt_description: string | null
  description: string | null
  user: {
    name: string
    links: {
      html: string
    }
  }
  blur_hash: string | null
  width: number
  height: number
}

interface UnsplashSearchResponse {
  total: number
  total_pages: number
  results: UnsplashPhoto[]
}

export async function GET(request: NextRequest) {
  if (!UNSPLASH_ACCESS_KEY) {
    return NextResponse.json(
      { error: 'Unsplash API key not configured' },
      { status: 500 }
    )
  }

  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query') || 'luxury private members club london'
  const count = Math.min(parseInt(searchParams.get('count') || '1'), 10)
  const orientation = searchParams.get('orientation') || 'landscape'

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&orientation=${orientation}`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
        next: {
          revalidate: 3600, // Cache for 1 hour (Unsplash rate limits: 50 req/hour on free tier)
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`)
    }

    const data: UnsplashSearchResponse = await response.json()

    // Transform response to include only what we need
    const images = data.results.map((photo) => ({
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

    return NextResponse.json({
      images,
      total: data.total,
    })
  } catch (error) {
    console.error('Unsplash API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch images from Unsplash' },
      { status: 500 }
    )
  }
}
