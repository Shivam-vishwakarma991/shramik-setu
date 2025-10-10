import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ShramikSetu - Car & Home Cleaning Services | Professional Cleaning & Repair Services',
  description: 'Professional cleaning, repair, and maintenance services for your car, home, and business. Quality service at affordable prices! Car cleaning, home deep cleaning, sofa cleaning, car repair, fabrication work, pest control, and more.',
  keywords: 'car cleaning, home cleaning, sofa cleaning, car repair, fabrication work, pest control, water tank cleaning, solar panel cleaning, bike wash, professional cleaning services, maintenance services',
  authors: [{ name: 'Sagar Vishwakarma' }],
  creator: 'Sagar Vishwakarma',
  publisher: 'ShramikSetu',
  robots: 'index, follow',
  openGraph: {
    title: 'ShramikSetu - Car & Home Cleaning Services',
    description: 'Professional cleaning, repair, and maintenance services for your car, home, and business. Quality service at affordable prices!',
    url: 'https://www.shramiksetu.com',
    siteName: 'ShramikSetu',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        width: 1200,
        height: 630,
        alt: 'ShramikSetu - Professional Cleaning Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShramikSetu - Car & Home Cleaning Services',
    description: 'Professional cleaning, repair, and maintenance services for your car, home, and business.',
    images: ['https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'],
  },
  viewport: 'width=device-width, initial-scale=1',
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}