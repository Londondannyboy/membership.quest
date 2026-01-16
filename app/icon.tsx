import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 96,
  height: 96,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
          borderRadius: '20%',
        }}
      >
        {/* Stylized M for Membership */}
        <div
          style={{
            display: 'flex',
            fontSize: '58px',
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            letterSpacing: '-2px',
          }}
        >
          M
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
