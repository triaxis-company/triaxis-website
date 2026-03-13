import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'TRI-AXIS | Integrated Industrial & Construction Support Services',
  description: 'Tri Axis Company delivers reliable engineering, construction, and industrial support services across Saudi Arabia. Strength, Quality, and Commitment.',
  keywords: ['construction', 'engineering', 'industrial services', 'Saudi Arabia', 'MEP', 'heavy equipment', 'steel fabrication', 'manpower supply'],
  authors: [{ name: 'TRI-AXIS Company' }],
  openGraph: {
    title: 'TRI-AXIS | Integrated Industrial & Construction Support Services',
    description: 'Tri Axis Company delivers reliable engineering, construction, and industrial support services across Saudi Arabia.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a365d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
