import type { Metadata } from 'next'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { siteConfig } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.meta.url),
  title: {
    default: siteConfig.meta.title,
    template: '%s | HMCS Canada Expedition',
  },
  description: siteConfig.meta.description,
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    url: siteConfig.meta.url,
    siteName: siteConfig.meta.title,
    images: [{ url: siteConfig.meta.ogImage, width: 1200, height: 630 }],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: [siteConfig.meta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[var(--color-background)] text-[var(--color-foreground)]">
        <div className="min-h-screen bg-[var(--color-background)]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
