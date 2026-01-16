import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

// Support both GET and POST for compatibility
export async function GET() {
  return getHumeToken()
}

export async function POST() {
  return getHumeToken()
}

async function getHumeToken() {
  const apiKey = process.env.HUME_API_KEY || ""
  const secretKey = process.env.HUME_SECRET_KEY || ""

  if (!apiKey || !secretKey) {
    console.error('[Hume Token] Missing credentials - HUME_API_KEY or HUME_SECRET_KEY not set')
    return NextResponse.json({ error: 'Hume credentials not configured' }, { status: 500 })
  }

  try {
    // Use Basic auth header - this is the correct pattern from relocation.quest
    const authString = Buffer.from(`${apiKey}:${secretKey}`).toString('base64')

    const response = await fetch('https://api.hume.ai/oauth2-cc/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${authString}`
      },
      body: new URLSearchParams({ grant_type: 'client_credentials' }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('[Hume Token] Error from Hume API:', error)
      return NextResponse.json({ error: 'Failed to get Hume token', details: error }, { status: response.status })
    }

    const data = await response.json()
    console.log('[Hume Token] Success - token received')
    return NextResponse.json({ accessToken: data.access_token })
  } catch (error: any) {
    console.error('[Hume Token] Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
