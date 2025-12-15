import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Yoga Teacher Insurance Articles & Guides",
  description: "In-depth guides and articles about yoga teacher insurance, coverage types, costs, and provider comparisons. Expert advice for yoga instructors and teachers.",
  keywords: [
    "yoga teacher insurance guide",
    "yoga insurance articles",
    "yoga teacher insurance costs",
    "hot yoga insurance",
    "aerial yoga insurance",
    "yoga alliance insurance requirements"
  ],
  robots: {
    index: true,
    follow: true,
  },
}

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
