import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'By Valentin Faciano',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={`${inter.className} bg-stars bg-fixed`}>
            <div className='bg-gradient-to-tr from-sky-950/40 bg-slate-950 bg-opacity-50'>
            {children}
            </div>
        </body>
    </html>
  )
}
