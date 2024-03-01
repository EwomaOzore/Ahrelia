import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ahrelia',
  description: 'Class. Luxury. Premium',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">{children}</body>
    </html>
  )
}
