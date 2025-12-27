import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CloudVision Technologies - Elevating Your Digital Presence',
  description: 'Transform your business with cutting-edge cloud technology solutions. CloudVision Technologies provides scalable, reliable, and beautiful digital solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <CosmicBadge bucketSlug={bucketSlug} />
        {/* Console capture script for dashboard debugging */}
        <script src="/dashboard-console-capture.js" />
      </body>
    </html>
  )
}